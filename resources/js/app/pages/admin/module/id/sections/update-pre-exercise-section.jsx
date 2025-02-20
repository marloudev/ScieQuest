import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import {
    Box,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextareaAutosize,
    TextField,
    Tooltip,
} from "@mui/material";
import { useState } from "react";
import store from "@/app/pages/store/store";
// import { get_module_thunk, update_module_thunk } from "../redux/booklet-thunk";
import { EditorState } from "draft-js";
import "react-quill/dist/quill.snow.css";
import { Add, Check, CloudUpload, Edit, EditNote } from "@mui/icons-material";
import ReactQuill from "react-quill";
import { useEffect } from "react";



export default function UpdatePreExerciseSection({ data }) {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const VisuallyHiddenInput = styled("input")({
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1,
    });

    useEffect(() => {
        setForm({
            ...data,
            id: data?.id || {}
        });
    }, [open]);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    async function submitUpdate(params) {
        try {
            setLoading(true);
            const result = await store.dispatch(update_module_thunk(form));
            if (result.status == 200) {
                await store.dispatch(get_module_thunk());
                setLoading(false);
                setOpen(false);
                setForm({});
            } else {
                setLoading(false);
                setOpen(false);
                setError(result.response.data.errors);
            }
        } catch (error) {
            setLoading(false);
        }
    }

    // async function grade_function(e) {
    //     setLoading(true);
    //     if ("Elementary Level" == e.target.value) {
    //         await store.dispatch(get_examinations_thunk("Elementary"));
    //     } else if ("Junior High Level" == e.target.value) {
    //         await store.dispatch(get_examinations_thunk("Junior High School"));
    //     }
    //     setForm({
    //         ...data,
    //         [e.target.name]: e.target.value,
    //     });
    //     setLoading(false);
    // }

    console.log("formformform", form)
    return (
        <React.Fragment>
            <Tooltip title="Update Pre-Exercise">
                <Button
                    onClick={handleClickOpen}
                    size='small'
                    color='success'>
                    <Edit />
                </Button>
            </Tooltip>
            <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
                <Toolbar className="flex items-center justify-end">
                    <Typography
                        sx={{ flex: 1 }}
                        variant="h6"
                        component="div"
                    >
                        Update Pre-Exercise
                    </Typography>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <Toolbar className="flex-col gap-3 flex w-full">
                    <TextField
                        onChange={(e) =>
                            setForm({
                                ...form,
                                title: e.target.value,
                            })
                        }
                        value={form.title || ''}
                        // error={error?.title ? true : false}
                        // helperText={error?.title ?? ""}
                        name="subject_matter"
                        type="text"
                        id="outlined-basic"
                        label="Subject Matter"
                        variant="outlined"
                        className="w-full"
                    />
                </Toolbar>
                <div className="w-full flex flex-col gap-3 mt-2 mb-4 px-6">
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        startIcon={
                            data?.file ? (
                                <>
                                    <Check />
                                    UPLOADED
                                </>
                            ) : (
                                <CloudUpload />
                            )
                        }
                    >
                        {/* {data?.file ? data?.file?.name : "Upload files"} */}
                        <VisuallyHiddenInput
                            name="file"
                            type="file"
                            // onChange={(event) => console.log(event.target.files)}
                            // onChange={(e) =>
                            //     setData({
                            //         ...data,
                            //         [e.target.name]: e.target.files[0],
                            //     })
                            // }
                            accept="image/*"
                        />
                    </Button>
                </div>

                <div>
                    <div className="mx-6 font-black text-lg">Discussion</div>
                    <Toolbar className="flex-col gap-3 flex w-full mt-2 mb-16   ">
                        <ReactQuill
                            theme="snow"
                            className="text-black w-full h-60 sm:h-48 md:h-60"
                            onChange={(value) =>
                                setForm({
                                    ...form,
                                    introductory: value,  // Here, use the content directly
                                })
                            }
                            value={form?.introductory || ''}
                        />

                    </Toolbar>
                </div>
                <Toolbar className="flex-col gap-3 flex w-full">
                    <TextField
                        onChange={(e) =>
                            setForm({
                                ...form,
                                title: e.target.value,
                            })
                        }
                        value={form.title || ''}
                        // error={error?.title ? true : false}
                        // helperText={error?.title ?? ""}
                        name="subject_matter"
                        type="text"
                        id="outlined-basic"
                        label="Demo Link"
                        variant="outlined"
                        className="w-full"
                    />
                </Toolbar>
                <Toolbar className="">
                    <Button
                        className="w-full"
                        disabled={loading}
                        variant="contained"
                        autoFocus
                        onClick={submitUpdate}
                    >
                        save
                    </Button>
                </Toolbar>
            </Dialog>
        </React.Fragment>
    );
}
