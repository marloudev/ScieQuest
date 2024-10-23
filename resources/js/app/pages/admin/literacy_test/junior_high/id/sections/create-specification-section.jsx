import {
    Button,
    Dialog,
    IconButton,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import store from "@/app/pages/store/store";
import { get_specifications_by_id_thunk, store_specifications_thunk } from "../../../_redux/questionaires-thunk";
import { useSelector } from "react-redux";

export default function CreateSpecificationSection() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const examination_id = window.location.pathname.split("/")[4];
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    async function submit_form(params) {
      setLoading(true)
      try {
        await store.dispatch(store_specifications_thunk({
          ...data,
          examination_id:examination_id
        }))
        store.dispatch(get_specifications_by_id_thunk(examination_id));
        setOpen(false);
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create Specification
            </Button>

            <Dialog fullWidth open={open} onClose={handleClose}>
                <Toolbar className="flex items-center justify-end">
                    <Typography
                        sx={{ ml: 2, flex: 1 }}
                        variant="h6"
                        component="div"
                    >
                        Create Specification
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
                <Toolbar className="flex items-center justify-end">
                    <TextField
                        onChange={(e) =>
                            setData({
                                ...data,
                                [e.target.name]: e.target.value,
                            })
                        }
                        error={error?.specification ? true : false}
                        helperText={error?.specification ?? ""}
                        name="specification"
                        type="text"
                        id="outlined-basic"
                        label="Specification"
                        variant="outlined"
                        className="w-full"
                        multiline
                        rows={2}
                    />
                </Toolbar>
                <div className="mt-6 flex w-full flex-col p-5">
                    <Toolbar>
                        <Typography
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                        ></Typography>
                    </Toolbar>

                    <Button
                        disabled={loading}
                        variant="contained"
                        autoFocus
                        onClick={submit_form}
                    >
                        save
                    </Button>
                </div>
            </Dialog>
        </div>
    );
}
