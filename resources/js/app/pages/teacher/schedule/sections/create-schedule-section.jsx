import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
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
import moment from "moment";
import { get_examinations_thunk } from "@/app/pages/admin/literacy_test/_redux/literacy-test-thunk";
import { get_schedule_thunk, store_schedule_thunk } from "@/app/pages/admin/schedule/redux/schedule-thunk";

export default function CreateScheduleSection() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const { teachers } = useSelector((store) => store.teachers)
    const { learning_centers } = useSelector((state) => state.learning_centers)
    const { booklets } = useSelector((state) => state.booklets);
    console.log('booklets', booklets)
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
                store_schedule_thunk({
                    unique_id: moment().format("MMDDYYYYHHmmss"),
                    ...data,
                }),
            );
            if (result.status == 200) {
                await store.dispatch(get_schedule_thunk())
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
                                        start_at: newValue[0].$d ?? '',
                                        end_at: newValue[1].$d ?? '',
                                    });
                                }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>


                </div>
                <Toolbar className="flex-col gap-3 flex w-full py-4">
                    <FormControl fullWidth error={!!error?.teacher_id}>
                        <InputLabel id="demo-simple-select-label">
                            Teacher
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="teacher_id"
                            label="Teacher"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            value={data.teacher_id ?? ""}
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
                            value={data.learning_center ?? ""}
                        >
                            <MenuItem selected disabled></MenuItem>
                            {/* Uncomment and use the map to dynamically render options from departments */}
                            {learning_centers.map((res, i) => (
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
                <Toolbar className="flex-col gap-3 flex w-full mt-2">
                    <FormControl fullWidth error={!!error?.booklet_id}>
                        <InputLabel id="demo-simple-select-label">
                            Booklets
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="booklet_id"
                            label="Booklets"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            value={data.booklet_id ?? ""}
                        >
                            {booklets?.map((res, i) => (
                                <MenuItem key={i} value={res.id}>{res.title}</MenuItem>
                            ))}
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
