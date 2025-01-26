import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Alert, CircularProgress, MenuItem, Select, Snackbar, TextField, FormHelperText, FormControl, InputLabel } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Add } from '@mui/icons-material';
import store from '@/app/pages/store/store';
import { get_students_thunk, store_students_thunk } from '../redux/students-thunk';

export default function CreateSection() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        teacher: '',
        student_id: '',
        fname: '',
        lname: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState({});
    const [notify, setNotify] = useState(false);
    const { teachers } = useSelector((state) => state.teachers);

    const toggleDrawer = (newOpen) => () => setOpen(newOpen);

    async function submitForm() {
        setLoading(true);
        const result = await store.dispatch(store_students_thunk({ ...data, user_type: 3 }));
        if (result.status === 200) {
            await store.dispatch(get_students_thunk());
            setNotify(true);
            setOpen(false);
            setError({});
        } else {
            setError(result.response?.data?.errors || { general: 'An unknown error occurred' });
        }
        setLoading(false);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setNotify(false);
    };

    console.log('teachersArray', teachers)

    return (
        <div>
            <Snackbar
                open={notify}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Successfully Created!
                </Alert>
            </Snackbar>
            <button
                type="button"
                onClick={toggleDrawer(true)}
                className="flex items-center justify-center text-lg p-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-sans"
            >
                <Add />
                <b>Create Student</b>
            </button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box className="w-[500px] h-full flex bg-white z-50" role="presentation">
                    <div className="pt-20 px-3 w-full flex flex-col items-center justify-between pb-5">
                        <div className="flex flex-col gap-3 w-full">
                            <div className="text-2xl font-black">Create Student</div>
                            <FormControl variant="outlined" error={!!error.teacher} fullWidth>
                                <InputLabel id="teacher-id-label">Teacher/Adviser</InputLabel>
                                <Select
                                    labelId="teacher-id-label"
                                    value={data.teacher}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            teacher: e.target.value,
                                        })
                                    }
                                    name="teacher"
                                    label="Teacher/Adviser"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {Array.isArray(teachers?.data) &&
                                        teachers?.data.map((res, i) => (
                                            <MenuItem MenuItem value={res.employee_id} key={res.employee_id} >
                                                {`${res.fname} ${res.lname}`}
                                            </MenuItem>
                                        ))}
                                </Select>
                                {error.teacher && <FormHelperText>{error.teacher}</FormHelperText>}
                            </FormControl>
                            <TextField
                                name="student_id"
                                label="Student ID"
                                variant="outlined"
                                value={data.student_id}
                                onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                                error={!!error.student_id}
                                helperText={error.student_id ?? ''}
                            />
                            <TextField
                                name="fname"
                                label="First Name"
                                variant="outlined"
                                value={data.fname}
                                onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                                error={!!error.fname}
                                helperText={error.fname ?? ''}
                            />
                            <TextField
                                name="lname"
                                label="Last Name"
                                variant="outlined"
                                value={data.lname}
                                onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                                error={!!error.lname}
                                helperText={error.lname ?? ''}
                            />
                            <TextField
                                name="email"
                                label="Email"
                                variant="outlined"
                                value={data.email}
                                onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                                error={!!error.email}
                                helperText={error.email ?? ''}
                            />
                            <TextField
                                name="password"
                                label="Password"
                                variant="outlined"
                                type="password"
                                value={data.password}
                                onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                                error={!!error.password}
                                helperText={error.password ?? ''}
                            />
                        </div>
                        <Button
                            onClick={submitForm}
                            disabled={loading}
                            variant="contained"
                            type="submit"
                            className="w-full"
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
                        </Button>
                    </div>
                </Box>
            </Drawer>
        </div >
    );
}
