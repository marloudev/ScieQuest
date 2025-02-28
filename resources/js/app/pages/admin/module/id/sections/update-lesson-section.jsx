import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { useState, useEffect } from "react";
import {
    IconButton,
    TextField,
    Toolbar,
    Tooltip,
    Typography,
} from "@mui/material";
import { Check, Close, CloudUpload, Edit } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import ReactQuill from "react-quill";
import store from "@/app/pages/store/store";
import { update_lesson_thunk } from "../../redux/lesson-thunk";
import { get_module_by_id_thunk } from "../../redux/booklet-thunk";

export default function UpdateLessonSection({ data }) {
    const [form, setForm] = useState({
        file: "",
        id: data?.id || "",
        subject_matter: data?.subject_matter || "",
        discussion: data?.discussion || "",
        link: data?.link || "",
    });
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const module_id = window.location.pathname.split("/")[3];

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
        if (data) {
            setForm({
                ...data,
                id: data?.id || "",
            });
        }
    }, [data]);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log("dadawdwad", form);
    const submitUpdate = async () => {
        if (!data?.id) {
            setError({ message: "Lesson ID is missing" });
            return;
        }

        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("file", form.file);
            formData.append("id", form.id);
            formData.append("subject_matter", form.subject_matter);
            formData.append("discussion", form.discussion);
            formData.append("link", form.link);

            await store.dispatch(update_lesson_thunk(formData, data.id));

            await store.dispatch(get_module_by_id_thunk(module_id));
            setLoading(false);
            setOpen(false);
            setForm({}); // Reset form
        } catch (error) {
            setLoading(false);
            setError({ message: "An error occurred" });
        }
    };
    console.log("qqqqqqq", data.id);

    return (
        <React.Fragment>
            <Tooltip title="Update Lesson">
                <Button onClick={handleClickOpen} size="small" color="primary">
                    <Edit />
                </Button>
            </Tooltip>
            <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
                <Toolbar className="flex items-center justify-end">
                    <Typography sx={{ flex: 1 }} variant="h6" component="div">
                        Update Lesson
                    </Typography>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <Close />
                    </IconButton>
                </Toolbar>
                <Toolbar className="flex-col gap-3 flex w-full">
                    <TextField
                        onChange={(e) =>
                            setForm({ ...form, subject_matter: e.target.value })
                        }
                        value={form.subject_matter || ""}
                        label="Subject Matter"
                        variant="outlined"
                        fullWidth
                    />
                </Toolbar>

                <div className="w-full flex flex-col gap-3 mt-2 mb-4 px-6">
                    <Button
                        component="label"
                        variant="contained"
                        startIcon={form?.file ? <Check /> : <CloudUpload />}
                    >
                        {form?.file ? form?.file?.name : "Upload file"}
                        <VisuallyHiddenInput
                            type="file"
                            onChange={(e) =>
                                setForm({ ...form, file: e.target.files[0] })
                            }
                            accept="image/*"
                        />
                    </Button>
                </div>

                <div className="mx-6 font-black text-lg">Discussion</div>
                <Toolbar className="flex-col gap-3 flex w-full mt-2 mb-16">
                    <ReactQuill
                        theme="snow"
                        className="text-black w-full h-60 sm:h-48 md:h-60"
                        onChange={(value) =>
                            setForm({ ...form, discussion: value })
                        }
                        value={form?.discussion || ""}
                    />
                </Toolbar>

                <Toolbar className="flex-col gap-3 flex w-full">
                    <TextField
                        onChange={(e) =>
                            setForm({ ...form, link: e.target.value })
                        }
                        value={form.link || ""}
                        label="Demo Link"
                        variant="outlined"
                        fullWidth
                    />
                </Toolbar>

                <Toolbar>
                    <Button
                        className="w-full"
                        disabled={loading}
                        variant="contained"
                        onClick={submitUpdate}
                    >
                        Save
                    </Button>
                </Toolbar>
            </Dialog>
        </React.Fragment>
    );
}
