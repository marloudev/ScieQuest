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
import store from "@/app/pages/store/store";
import { useSelector } from "react-redux";
import { delete_students_thunk, get_students_by_id_thunk } from "@/app/pages/admin/students/redux/students-thunk";

export default function DeleteSection({ data }) {
  const { user } = useSelector((state) => state.app);
  const [open, setOpen] = useState(false); // Open by default when rendered
  const [notify, setNotify] = useState(false);
  const [loading, setLoading] = useState(false);
  const teacher_id = user?.user_id;

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemove = async () => {
    setLoading(true);
    await store.dispatch(delete_students_thunk(data?.student_id))
    await store.dispatch(get_students_by_id_thunk(teacher_id))
    setTimeout(() => {
      setLoading(false);
      setNotify(true);
      handleClose();// Notify parent of successful removal
    }, 200);
  };

  const handleCloseNotification = () => {
    setNotify(false);
    setOpen(false);
  };

  console.log('aaSSss', data)

  return (
    <div>
      <Tooltip title="Remove Pupil">
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
          Student Removed Successfully!
        </Alert>
      </Snackbar>

      {/* Confirmation Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="remove-student-title"
        aria-describedby="remove-student-description"
      >
        <DialogTitle id="remove-student-title">
          Confirm Removal
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="remove-student-description">
            Are you sure you want to remove the pupil named <strong>{data?.fname} {data?.lname}</strong>?
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
