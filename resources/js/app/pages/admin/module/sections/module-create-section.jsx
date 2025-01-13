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
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { useState } from "react";
import store from "@/app/pages/store/store";
import { get_examinations_thunk } from "../../literacy_test/_redux/literacy-test-thunk";
import moment from "moment";
import { get_booklet_thunk, store_booklet_thunk } from "../redux/booklet-thunk";

export default function BookletCreateSection() {
    const [open, setOpen] = useState(false);
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
            const result = await store.dispatch(
                store_booklet_thunk({
                    unique_id: moment().format("MMDDYYYYHHmmss"),
                    ...data,
                }),
            );
            if (result.status == 200) {
                await store.dispatch(get_booklet_thunk())
                setLoading(false);
                setOpen(false);
                setData({})
            } else {
                setLoading(false);
                setError(result.response.data.errors);
            }
        } catch (error) {
            setLoading(false);
        }
    }

    async function als_level_function(e) {
        setLoading(true);
        if ('Elementary Level' == e.target.value) {
            await store.dispatch(get_examinations_thunk('Elementary'));
        } else if ('Junior High Level' == e.target.value) {
            await store.dispatch(get_examinations_thunk('Junior High School'));
        }
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
        setLoading(false);
    }
    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create Module
            </Button>
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
                    <FormControl fullWidth error={!!error?.als_level}>
                        <InputLabel id="demo-simple-select-label">
                            ALS Level
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="als_level"
                            label="ALS Level"
                            onChange={(e) => als_level_function(e)}
                            value={data.als_level ?? ""}
                        >
                            <MenuItem selected disabled></MenuItem>
                            <MenuItem value="Elementary Level">Elementary Level</MenuItem>
                            <MenuItem value="Junior High Level">Junior High Level</MenuItem>
                         
                        </Select>
                        {error?.specification && (
                            <FormHelperText>
                                {error.specification}
                            </FormHelperText>
                        )}
                    </FormControl>
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
