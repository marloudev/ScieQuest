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
import { get_examinations_thunk, store_examinations_thunk } from "../../../literacy_test/_redux/literacy-test-thunk";
import { useSelector } from "react-redux";
import { get_examinations_by_id_thunk } from "../../redux/booklet-thunk";
// import {
//     get_examinations_thunk,
//     store_examinations_thunk,
// } from "../../_redux/literacy-test-thunk";

export default function CreateExaminationSection() {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const { booklet } = useSelector((store) => store.booklets)
    const booklet_id =window.location.pathname.split('/')[3]
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function submit_form(params) {
        try {
            setLoading(true);
            const result = await store.dispatch(store_examinations_thunk({
                booklet_id:booklet_id,
                ...data,
                ...booklet
            }));
            if (result.status == 200) {
                await store.dispatch(get_examinations_by_id_thunk(booklet_id));
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
    console.log('data', {
        ...data,
        ...booklet
    })
    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create Examination
            </Button>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <Toolbar className="flex items-center justify-end">
                    <Typography
                        sx={{ ml: 2, flex: 1 }}
                        variant="h6"
                        component="div"
                    >
                        Create Examination
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
                        error={error?.title ? true : false}
                        helperText={error?.title ?? ""}
                        name="title"
                        type="text"
                        id="outlined-basic"
                        label="Title"
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
                        error={error?.sub_title ? true : false}
                        helperText={error?.sub_title ?? ""}
                        name="sub_title"
                        type="text"
                        id="outlined-basic"
                        label="Subtitle"
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
                        multiline
                        rows={4}
                        error={error?.instruction ? true : false}
                        helperText={error?.instruction ?? ""}
                        name="instruction"
                        type="text"
                        id="outlined-basic"
                        label="Instruction"
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
