import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Alert, CircularProgress, MenuItem, Select, Snackbar, TextField, FormHelperText, FormControl, InputLabel } from '@mui/material';


import { useState } from 'react';
import store from '@/app/pages/store/store';
// import { get_student_thunk, store_student_thunk } from '../redux/student-thunk';
import { useSelector } from 'react-redux';
import { get_students_thunk, store_students_thunk } from '../redux/students-thunk';
import { Add } from '@mui/icons-material';

export default function CreateSection() {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [error, setError] = useState({})
    const [notify, setNotify] = useState(false)
    // const { courses } = useSelector((state) => state.courses)

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    async function submitForm(params) {
        setLoading(true)
        const result = await store.dispatch(store_students_thunk({
            ...data,
            user_type: 3
        }))
        if (result.status == 200) {
            await store.dispatch(get_students_thunk())
            setNotify(true)
            setOpen(false);
            setError({})
            setLoading(false)
        } else {
            setLoading(false)
            setError(result.response.data.errors)
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotify(false)
        setOpen(false);
    };

    return (
        <div>
            <Snackbar open={notify}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={3000} onClose={handleClose}>
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
                className=" flex  items-center justify-center text-lg p-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-sans">
                <Add />
                <b>Create Student</b>
            </button>
            <Drawer

                anchor='right'
                open={open} onClose={toggleDrawer(false)}>
                <Box className="w-[500px] h-full flex bg-white z-50" role="presentation" >
                    <div className='pt-20 px-3 w-full flex flex-col items-center justify-between pb-5'>
                        <div className='flex flex-col gap-3  w-full' >
                            <div className='text-2xl font-black'>
                                Create student
                            </div>
                            <FormControl variant="outlined" error={!!error?.user_id} fullWidth>
                                <InputLabel id="user-id-label">Teacher/Adviser</InputLabel>
                                <Select
                                    labelId="user-id-label"
                                    value={data.user_id || ''}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            user_id: e.target.value,
                                        })
                                    }
                                    name="user_id"
                                    label="Student ID"
                                >
                                    {/* Replace these options with your actual dropdown values */}
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>Student 1</MenuItem>
                                    <MenuItem value={2}>Student 2</MenuItem>
                                    <MenuItem value={3}>Student 3</MenuItem>
                                </Select>
                                <FormHelperText>{error?.user_id ?? ''}</FormHelperText>
                            </FormControl>
                            <TextField onChange={(e) => setData({
                                ...data,
                                [e.target.name]: e.target.value
                            })}
                                error={error?.user_id ? true : false}
                                helperText={error?.user_id ?? ''}
                                name="user_id"
                                type='text'
                                id="outlined-basic"
                                label="Student ID"
                                variant="outlined"
                            />
                            <TextField onChange={(e) => setData({
                                ...data,
                                [e.target.name]: e.target.value
                            })}
                                error={error?.fname ? true : false}
                                helperText={error?.fname ?? ''}
                                name="fname"
                                type='text'
                                id="outlined-basic"
                                label="First Name"
                                variant="outlined"
                            />
                            <TextField
                                onChange={(e) => setData({
                                    ...data,
                                    [e.target.name]: e.target.value
                                })}
                                error={error?.lname ? true : false}
                                helperText={error?.lname ?? ''}
                                name='lname'
                                type='text'
                                id="outlined-basic"
                                label="Last Name"
                                variant="outlined" />
                            <TextField
                                onChange={(e) => setData({
                                    ...data,
                                    [e.target.name]: e.target.value
                                })}
                                error={error?.email ? true : false}
                                helperText={error?.email ?? ''}
                                name='email'
                                type='email'
                                id="outlined-basic"
                                label="Email"
                                variant="outlined" />
                            <TextField
                                onChange={(e) => setData({
                                    ...data,
                                    [e.target.name]: e.target.value
                                })}
                                error={error?.password ? true : false}
                                helperText={error?.password ?? ''}
                                name='password'
                                type='password'
                                id="outlined-basic"
                                label="Password"
                                variant="outlined" />

                            {/* <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Department</InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    name='department_id'
                                    label="Department"
                                    onChange={(e) => setData({
                                        ...data,
                                        [e.target.name]: e.target.value
                                    })}
                                >
                                    {
                                        departments.data.map((res, i) => {
                                            return <MenuItem key={i} value={res.id}>{res.name}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl> */}

                            {/* <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Course</InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    name='course_id'
                                    label="Course"
                                    value={data.course_id}
                                    onChange={(e) => setData({
                                        ...data,
                                        [e.target.name]: e.target.value
                                    })}
                                >
                                    {
                                        courses.data.map((res, i) => {
                                            return <MenuItem key={i} value={res.id}>{res.name}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl> */}
                            {/* <TextField
                                onChange={(e) => setData({
                                    ...data,
                                    [e.target.name]: e.target.value
                                })}
                                error={error?.dob ? true : false}
                                helperText={error?.dob ?? ''}
                                name='dob'
                                type='date'
                                id="outlined-basic"
                                variant="outlined" />
                            <TextField
                                onChange={(e) => setData({
                                    ...data,
                                    [e.target.name]: e.target.value
                                })}
                                error={error?.address ? true : false}
                                helperText={error?.address ?? ''}
                                name='address'
                                id="outlined-basic"
                                label="Address"
                                variant="outlined" /> */}
                        </div>
                        <Button
                            onClick={submitForm}
                            disabled={loading}
                            variant='contained'
                            type='submit'
                            className=' w-full'>
                            {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
                        </Button>
                    </div>
                </Box>
            </Drawer>
        </div>
    );
}
