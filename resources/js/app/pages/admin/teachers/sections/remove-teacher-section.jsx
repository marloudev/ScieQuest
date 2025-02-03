import React, { useState } from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    CircularProgress,
    Snackbar,
    Alert,
    Tooltip
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { delete_teachers_thunk, get_teachers_thunk } from "../redux/teachers-thunk";
import store from "@/app/pages/store/store";

export default function RemoveTeacherSection({ data }) {
    const [open, setOpen] = useState(false); // Open by default when rendered
    const [notify, setNotify] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleRemove = async () => {
        setLoading(true);
        await store.dispatch(delete_teachers_thunk(data?.employee_id));
        await store.dispatch(get_teachers_thunk())
        setTimeout(() => {
            setLoading(false);
            setNotify(true);
            handleClose();// Notify parent of successful removal
        }, 1500);
    };

    const handleCloseNotification = () => {
        setNotify(false);
        setOpen(false);
    };
    console.log('daddada', data)
    return (
        <div>
            <Tooltip title="Remove Teacher">
                <Button
                    onClick={() => setOpen(true)}
                    size="small"
                    variant="contained"
                    color="error"
                >
                    <Delete />
                </Button>
            </Tooltip>
            {/* Snackbar for Notification */}
            <Snackbar
                open={notify}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={3000}
                onClose={handleCloseNotification}
            >
                <Alert
                    onClose={handleCloseNotification}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    Teacher Removed Successfully!
                </Alert>
            </Snackbar>

            {/* Confirmation Modal */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="remove-teacher-title"
                aria-describedby="remove-teacher-description"
            >
                <DialogTitle id="remove-teacher-title">
                    Confirm Removal
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="remove-teacher-description">
                        Are you sure you want to remove the teacher <strong>{data?.fname} {data?.lname}</strong>?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleRemove}
                        color="error"
                        variant="contained"
                        disabled={loading}
                    >
                        {loading ? <CircularProgress size={24} color="inherit" /> : "Yes"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
