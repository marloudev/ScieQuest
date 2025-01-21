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
    InputLabel,
    MenuItem,
    Select,
    TextareaAutosize,
    TextField,
} from "@mui/material";
import { useState } from "react";
import store from "@/app/pages/store/store";
import { get_examinations_thunk } from "../../literacy_test/_redux/literacy-test-thunk";
import moment from "moment";
import { get_booklet_thunk, store_booklet_thunk } from "../redux/booklet-thunk";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Add } from "@mui/icons-material";

export default function BookletCreateSection() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({
        grade: "Grade 4",
    });
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    async function submit_form(params) {
        try {
            setLoading(true);
            const result = await store.dispatch(
                store_booklet_thunk({
                    unique_id: moment().format("MMDDYYYYHHmmss"),
                    ...data,
                    grade: "Grade 4",
                }),
            );
            if (result.status == 200) {
                await store.dispatch(get_booklet_thunk());
                setLoading(false);
                setOpen(false);
                setData({});
            } else {
                setLoading(false);
                setError(result.response.data.errors);
            }
        } catch (error) {
            setLoading(false);
        }
    }

    async function grade_function(e) {
        setLoading(true);
        if ("Elementary Level" == e.target.value) {
            await store.dispatch(get_examinations_thunk("Elementary"));
        } else if ("Junior High Level" == e.target.value) {
            await store.dispatch(get_examinations_thunk("Junior High School"));
        }
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        setLoading(false);
    }
    return (
        <React.Fragment>
            <button
                type="button"
                onClick={handleClickOpen}
                className=" flex  items-center justify-center text-lg p-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-sans">
                <Add />
                <b>Create Module</b>
            </button>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <Toolbar className="flex items-center justify-end">
                    <Typography
                        sx={{ ml: 2, flex: 1 }}
                        variant="h6"
                        component="div"
                    >
                        Create Module
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
                            setData({
                                ...data,
                                [e.target.name]: e.target.value,
                            })
                        }
                        error={error?.title ? true : false}
                        helperText={error?.title ?? ""}
                        name="title"
                        type="text"
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        className="w-full"
                    />
                </Toolbar>
                <Toolbar className="flex-col gap-3 flex w-full mt-2">
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
                            onChange={(e) => grade_function(e)}
                            value={data.grade ?? ""}
                        >
                            <MenuItem selected disabled></MenuItem>
                            <MenuItem value="Grade 1">Grade 1</MenuItem>
                            <MenuItem value="Grade 2">Grade 2</MenuItem>
                            <MenuItem value="Grade 3">Grade 3</MenuItem>
                            <MenuItem value="Grade 4">Grade 4</MenuItem>
                            <MenuItem value="Grade 5">Grade 5</MenuItem>
                            <MenuItem value="Grade 6">Grade 6</MenuItem>
                        </Select>
                        {error?.grade && (
                            <FormHelperText>{error.grade}</FormHelperText>
                        )}
                    </FormControl>
                </Toolbar>
                <Toolbar className="flex-col gap-3 flex w-full mt-2">
                    <FormControl fullWidth error={!!error?.introductory}>
                        <TextareaAutosize
                            className="p-3"
                            name="introductory"
                            placeholder="Introductory Message"
                            value={data.introductory ?? ""}
                            onChange={(e) => grade_function(e)}
                            minRows={10}
                        />
                        {error?.introductory && (
                            <FormHelperText>
                                {error.introductory}
                            </FormHelperText>
                        )}
                    </FormControl>
                </Toolbar>
                <Toolbar className=" flex-col gap-3 flex w-full mt-2">
                    <FormControl fullWidth error={!!error?.wintn}>
                        <TextareaAutosize
                            className="p-3"
                            name="wintn"
                            placeholder="What I Need to Know"
                            value={data.wintn ?? ""}
                            onChange={(e) => grade_function(e)}
                            minRows={10}
                        />
                        {error?.wintn && (
                            <FormHelperText>{error.wintn}</FormHelperText>
                        )}
                    </FormControl>

                    {/* <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            border: 1,
                        }}
                    >
                        <Editor
                            className="border-2 border-black"
                            editorState={editorState}
                            toolbar={{
                                options: [
                                    "inline",
                                    "blockType",
                                    "fontSize",
                                    "list",
                                    "textAlign",
                                    "history",
                                ],
                                inline: {
                                    options: ["bold", "italic", "underline"],
                                },
                                blockType: { inDropdown: true },
                                fontSize: {
                                    options: [
                                        8, 10, 12, 14, 16, 18, 24, 30, 48,
                                    ],
                                },
                            }}
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                        />
                    </Box> */}
                </Toolbar>
                <Toolbar>
                    <Typography
                        sx={{ ml: 2, flex: 1 }}
                        variant="h6"
                        component="div"
                    ></Typography>
                    <Button
                        disabled={loading}
                        variant="contained"
                        autoFocus
                        onClick={submit_form}
                    >
                        save
                    </Button>
                </Toolbar>
            </Dialog>
        </React.Fragment>
    );
}
