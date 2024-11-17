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
import { TextField } from "@mui/material";
import { useState } from "react";
import store from "@/app/pages/store/store";
import { get_learning_centers_thunk, store_learning_centers_thunk } from "../redux/learning-center-thunk";


export default function CreateLearningCenterSection() {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState({});
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
            const result = await store.dispatch(store_learning_centers_thunk({
                ...data,
            }));
            if (result.status == 200) {
                await store.dispatch(get_learning_centers_thunk());
                setLoading(false);
                setOpen(false);
            } else {
                setLoading(false);
                setError(result.response.data.errors);
            }
        } catch (error) {
            setLoading(false);
        }
    }
    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create Learning Center
            </Button>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <Toolbar className="flex items-center justify-end">
                    <Typography
                        sx={{ ml: 2, flex: 1 }}
                        variant="h6"
                        component="div"
                    >
                        Create Learning Center
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
                <Toolbar className="flex-col gap-3 flex">
                    <TextField
                        onChange={(e) =>
                            setData({
                                ...data,
                                [e.target.name]: e.target.value,
                            })
                        }
                        error={error?.name ? true : false}
                        helperText={error?.name ?? ""}
                        name="name"
                        type="text"
                        id="outlined-basic"
                        label="Center Name"
                        variant="outlined"
                        className="w-full"
                    />

                    <TextField
                        onChange={(e) =>
                            setData({
                                ...data,
                                [e.target.name]: e.target.value,
                            })
                        }
                        error={error?.location ? true : false}
                        helperText={error?.location ?? ""}
                        name="location"
                        type="text"
                        id="outlined-basic"
                        label="Location"
                        variant="outlined"
                        className="w-full"
                    />

                    <TextField
                        onChange={(e) =>
                            setData({
                                ...data,
                                [e.target.name]: e.target.value,
                            })
                        }
                        error={error?.mobile ? true : false}
                        helperText={error?.mobile ?? ""}
                        name="mobile"
                        type="text"
                        id="outlined-basic"
                        label="Contact"
                        variant="outlined"
                        className="w-full"
                    />
                </Toolbar>
                <Toolbar>
                    <Typography
                        sx={{ ml: 2, flex: 1 }}
                        variant="h6"
                        component="div"
                    ></Typography>
                    <Button
                        disabled={loading}
                        variant="contained" autoFocus onClick={submit_form}>
                        save
                    </Button>
                </Toolbar>
            </Dialog>
        </React.Fragment>
    );
}
