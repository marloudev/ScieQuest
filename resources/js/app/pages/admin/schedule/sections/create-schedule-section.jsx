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
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateTimeRangePicker } from "@mui/x-date-pickers-pro/DateTimeRangePicker";
import { useSelector } from "react-redux";

export default function CreateScheduleSection() {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const { teachers } = useSelector((store) => store.teachers)

    console.log('data', data)
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
                store_examinations_thunk({
                    ...data,
                    als_level: "Elementary",
                }),
            );
            if (result.status == 200) {
                await store.dispatch(
                    get_examinations_thunk("Junior High School"),
                );
                setLoading(false);
                setOpen(false);
                m;
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
                Create Schedule
            </Button>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <Toolbar className="flex items-center justify-end">
                    <Typography
                        sx={{ ml: 2, flex: 1 }}
                        variant="h6"
                        component="div"
                    >
                        Create Schedule
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
                <Toolbar className="flex gap-3 mb-2 w-full">
                <TextField
                name="referrence_id"
                type="text"
                id="outlined-basic"
                label="Referrence ID"
                variant="outlined"
                className="w-1/2 mr-2"
                readOnly
                />
               <FormControl fullWidth error={!!error?.literacy_level}>
                        <InputLabel id="demo-simple-select-label">
                            Literacy Level
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="literacy_level"
                            label="Literacy Level"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            value={data.specification ?? ""}
                        >
                            <MenuItem selected disabled></MenuItem>
                            {/* Uncomment and use the map to dynamically render options from departments */}
                            {/* {specifications.data.map((res, i) => (
                                <MenuItem key={i} value={res.specification}>{res.specification}</MenuItem>
                            ))} */}
                        </Select>
                        {error?.specification && (
                            <FormHelperText>
                                {error.specification}
                            </FormHelperText>
                        )}
                    </FormControl>
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
                <div className="px-6">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DateTimeRangePicker"]}>
                            <DateTimeRangePicker
                                localeText={{
                                    start: "Start-At",
                                    end: "End-At",
                                }}
                                onChange={(newValue) => {
                                    setData({
                                        ...data,
                                        start_at: newValue[0].$d,
                                        end_at: newValue[1].$d,
                                    });
                                }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>


                </div>
                <Toolbar className="flex-col gap-3 flex w-full py-4">
                    <FormControl fullWidth error={!!error?.teacher}>
                        <InputLabel id="demo-simple-select-label">
                            Teacher
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="teacher"
                            label="Teacher"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            value={data.teacher ?? ""}
                        >
                            <MenuItem selected disabled></MenuItem>
                            {/* Uncomment and use the map to dynamically render options from departments */}
                            {teachers.data.map((res, i) => (
                                <MenuItem key={i} value={res.id}>{res.name}</MenuItem>
                            ))}
                        </Select>
                        {error?.specification && (
                            <FormHelperText>
                                {error.specification}
                            </FormHelperText>
                        )}
                    </FormControl>
                </Toolbar>
                <Toolbar className="flex-col gap-3 flex w-full ">
                    <FormControl fullWidth error={!!error?.learning_center}>
                        <InputLabel id="demo-simple-select-label">
                            Community Center
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="learning_center"
                            label="Community Center"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            value={data.specification ?? ""}
                        >
                            <MenuItem selected disabled></MenuItem>
                            {/* Uncomment and use the map to dynamically render options from departments */}
                            {/* {specifications.data.map((res, i) => (
                                <MenuItem key={i} value={res.specification}>{res.specification}</MenuItem>
                            ))} */}
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
