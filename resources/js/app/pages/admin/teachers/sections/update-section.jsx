import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Alert, CircularProgress, FormControl, InputLabel, MenuItem, Select, Snackbar, TextField } from '@mui/material';
import { useState } from 'react';
import { Edit, EditNote } from '@mui/icons-material';
import { useEffect } from 'react';
import store from '@/app/pages/store/store';
import { get_teachers_thunk, update_teachers_thunk } from '../redux/teachers-thunk';
import { useSelector } from 'react-redux';

export default function UpdateSection({ data }) {
    const [open, setOpen] = useState(false); // Open by default when rendered
    const [form, setForm] = useState({});
    const [error, setError] = useState({});
    const [notify, setNotify] = useState(false);
    const [loading, setLoading] = useState(false);
    // const { departments } = useSelector((state) => state.department);

    useEffect(() => {
        setForm(data)
    }, [])

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
        if (!newOpen && onClose) {
            onClose(); // Notify parent to close
        }
    };

    async function submitForm(params) {
        setLoading(true);
        const result = await store.dispatch(update_teachers_thunk(form));
        if (result.status === 200) {
            await store.dispatch(get_teachers_thunk());
            setNotify(true);
            setOpen(false);
            setError({});
            setLoading(false);
        } else {
            setLoading(false);
            setError(result.response.data.errors);
        }
    }

    const handleCloseNotification = () => {
        setNotify(false);
    };
    console.log('datadata', data)
    return (
        <div>
            <Button
                onClick={() => setOpen(true)}
                size="small"
                variant="contained"
                color="primary"
            >
                <EditNote />
            </Button>
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
                    Successfully Updated!
                </Alert>
            </Snackbar>
            <Drawer
                anchor='right'
                open={open} onClose={toggleDrawer(false)}>
                <Box className="w-[500px] h-full flex bg-white" role="presentation" >
                    <div className='pt-20 px-3 w-full flex flex-col items-center justify-between pb-5'>
                        <div className='flex flex-col gap-3  w-full' >
                            <div className='text-2xl font-black'>
                                Update Teacher
                            </div>
                            <TextField onChange={(e) => setForm({
                                ...data,
                                [e.target.name]: e.target.value
                            })}
                                value={form.user_id}
                                error={error?.user_id ? true : false}
                                helperText={error?.user_id ?? ''}
                                name="user_id"
                                type='text'
                                id="outlined-basic"
                                label="Employee ID"
                                variant="outlined"
                            />
                            <TextField onChange={(e) => setForm({
                                ...form,
                                [e.target.name]: e.target.value
                            })}
                                value={form.fname}
                                error={error?.fname ? true : false}
                                helperText={error?.fname ?? ''}
                                name="fname"
                                type='text'
                                id="outlined-basic"
                                label="First Name"
                                variant="outlined"
                            />
                            <TextField
                                onChange={(e) => setForm({
                                    ...form,
                                    [e.target.name]: e.target.value
                                })}
                                value={form.lname}
                                error={error?.lname ? true : false}
                                helperText={error?.lname ?? ''}
                                name='lname'
                                type='text'
                                id="outlined-basic"
                                label="Last Name"
                                variant="outlined" />
                        </div>
                        <Button
                            onClick={submitForm}
                            disabled={loading}
                            variant='contained'
                            className=' w-full'>
                            {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
                        </Button>
                    </div>
                </Box>
            </Drawer>
        </div>
    );
}
