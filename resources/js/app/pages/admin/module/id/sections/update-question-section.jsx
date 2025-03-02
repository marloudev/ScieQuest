import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { useState, useEffect } from "react";
import {
    Alert,
    IconButton,
    Snackbar,
    TextField,
    Toolbar,
    Tooltip,
    Typography,
} from "@mui/material";
import { BorderColor, Check, Close, CloudUpload, Edit } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import store from "@/app/pages/store/store";
import { get_module_by_id_thunk } from "../../redux/booklet-thunk";
import { update_questionnaires_thunk } from "../../../literacy_test/_redux/questionaires-thunk";

export default function UpdateQuestionSection({ data }) {
    const [form, setForm] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [notify, setNotify] = useState(false);
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
        setForm({
            ...data,
            id: data?.id || "",
        });
    }, [data]);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };

    async function submitUpdate(params) {
        setLoading(true);
        const result = await store.dispatch(update_questionnaires_thunk(form));
        if (result.status === 200) {
            await store.dispatch(get_module_by_id_thunk(module_id));
            setNotify(true);
            setOpen(false);
            setError({});
            setLoading(false);
        } else {
            setLoading(false);
            setError(result.response.data.errors);
        }
    }

    const handleCloseNotification = () => {
        setNotify(false);
        setOpen(false);
    };

    console.log('dataaa', data)

    return (
        <React.Fragment>
            <Snackbar
                open={notify}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={3000}
                onClose={handleCloseNotification}
            >
                <Alert onClose={handleCloseNotification} severity="success" variant="filled" sx={{ width: "100%" }}>
                    Successfully Updated!
                </Alert>
            </Snackbar>
            <Tooltip title="Update Question">
                <Button onClick={handleClickOpen} size="small" color="warning">
                    <Edit />
                </Button>
            </Tooltip>
            <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
                <Toolbar className="flex items-center justify-end">
                    <Typography sx={{ flex: 1 }} variant="h6" component="div">
                        Update Question
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
                        onChange={(e) => setForm({
                            ...form,
                            [e.target.name]: e.target.value
                        })}
                        value={form.question} //
                        name="question"
                        label="Question"
                        variant="outlined"
                        fullWidth
                    />
                </Toolbar>

                <Toolbar className="flex-col gap-3 flex w-full">
                    <TextField
                        onChange={(e) => setForm({
                            ...form,
                            [e.target.name]: e.target.value
                        })}
                        value={form.answer_key} // Corrected to bind the state
                        name="answer_key"
                        label="Answer key"
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
