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
import Slide from "@mui/material/Slide";
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
import { get_examinations_thunk } from "../../literacy_test/_redux/literacy-test-thunk";
import moment from "moment";
import { get_module_thunk, update_module_thunk } from "../redux/booklet-thunk";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-quill/dist/quill.snow.css";
import { Add, EditNote } from "@mui/icons-material";
import ReactQuill from "react-quill";
import { useEffect } from "react";

export default function UpdateModuleSection({ data }) {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

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
            <Tooltip title="Update Module">
                <Button
                    onClick={handleClickOpen}
                    size='small'
                    variant='contained'
                    color='primary'>
                    <EditNote />
                </Button>
            </Tooltip>
            <Dialog fullWidth maxWidth="lg" open={open} onClose={handleClose}>
                <Toolbar className="flex items-center justify-end">
                    <Typography
                        sx={{ ml: 2, flex: 1 }}
                        variant="h6"
                        component="div"
                    >
                        Update Module
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
                <Toolbar className="flex-col gap-3 flex w-full mt-2">
                    <FormControl fullWidth error={!!error?.quarter}>
                        <InputLabel id="demo-simple-select-label">
                            Select Quarter
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="quarter"
                            label="Select Quarter"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    quarter: e.target.value,
                                })
                            }
                            value={form.quarter || ''}
                        >
                            <MenuItem selected disabled></MenuItem>
                            <MenuItem value="1st Quarter">1st Quarter</MenuItem>
                            <MenuItem value="2nd Quarter">2nd Quarter</MenuItem>
                            <MenuItem value="3rd Quarter">3rd Quarter</MenuItem>
                            <MenuItem value="4th Quarter">4th Quarter</MenuItem>
                        </Select>
                        {/* {error?.grade && (
                            <FormHelperText>{error.grade}</FormHelperText>
                        )} */}
                    </FormControl>
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
                        name="title"
                        type="text"
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        className="w-full"
                    />
                </Toolbar>
                <Toolbar className="flex-col gap-3 flex w-full mt-2" style={{ display: "none" }}>
                    <FormControl fullWidth error={!!error?.grade}>
                        <InputLabel id="demo-simple-select-label">
                            Grade
                        </InputLabel>
                        <Select
                            disabled
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="grade"
                            label="ALS Level"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    grade: e.target.value,
                                })
                            }
                            value={form.grade ?? ""}
                        >
                            <MenuItem selected disabled></MenuItem>
                            <MenuItem value="Grade 1">Grade 1</MenuItem>
                            <MenuItem value="Grade 2">Grade 2</MenuItem>
                            <MenuItem value="Grade 3">Grade 3</MenuItem>
                            <MenuItem value="Grade 4">Grade 4</MenuItem>
                            <MenuItem value="Grade 5">Grade 5</MenuItem>
                            <MenuItem value="Grade 6">Grade 6</MenuItem>
                        </Select>
                        {/* {error?.grade && (
                            <FormHelperText>{error.grade}</FormHelperText>
                        )} */}
                    </FormControl>
                </Toolbar>
                <div>
                    <div className="mx-6 font-black text-lg">Introductory</div>
                    <Toolbar className="flex-col gap-3 flex w-full mt-2 mb-16">
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
                <div>
                    <div className="mx-6 font-black text-lg">
                        What I Need to Know
                    </div>
                    <Toolbar className=" flex-col gap-3 flex w-full mt-2 mb-4">
                        <ReactQuill
                            theme="snow"
                            className="text-black w-full h-60 sm:h-48 md:h-60"
                            onChange={(value) =>
                                setForm({
                                    ...form,
                                    wintn: value,
                                })
                            }
                            value={form?.wintn || ''}
                        />
                    </Toolbar>
                </div>
                <Toolbar className="mt-10">
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
