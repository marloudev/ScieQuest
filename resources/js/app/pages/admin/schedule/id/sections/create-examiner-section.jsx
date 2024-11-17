import store from '@/app/pages/store/store';
import { router } from '@inertiajs/react';
import { AddBox, PlusOne, Search } from '@mui/icons-material';
import { Alert, Button, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { get_examiner_by_id_thunk, store_examiner_thunk } from '../../redux/schedule-thunk';

export default function CreateExaminerSection() {
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const { students } = useSelector((state) => state.students)
    const [alert, setAlert] = useState(null)
    useEffect(() => {
        if (window.location.search) {
            setData({
                search: window.location.search?.split('=')[1]?.replace('?', "")
            })
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlert(null);
        }, 1500); 
        return () => clearTimeout(timer); 
    }, [alert]);

    async function search_student(params) {
        router.visit(window.location.pathname + '?search=' + (data.search == undefined ? '' : data.search))
    }

    async function add_examiner(examiner) {
        const result = await store.dispatch(store_examiner_thunk({
            ...examiner,
            examiner_id: examiner.id,
            reference_id: window.location.pathname.split('/')[3]
        }))
        console.log('result', result.data.response)
        if (result.data.response == 'exist') {
            setAlert('error')
        } else {
            setAlert('success')
            await store.dispatch(get_examiner_by_id_thunk(window.location.pathname.split('/')[3]))
        }

    }
    return (
        <div className=' flex flex-col gap-3'>
            {
                alert == 'success' && <Alert variant="filled" severity="success">
                    Examiner Added!
                </Alert>
            }
            {
                alert == 'error' && <Alert variant="filled" severity="error">
                    Examiner is already exist!
                </Alert>
            }
            <TextField
                value={data.search}
                onChange={(e) =>
                    setData({
                        ...data,
                        [e.target.name]: e.target.value,
                    })
                }
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    },
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        search_student()
                    }
                }}
                error={error?.search ? true : false}
                helperText={error?.search}
                name="search"
                type="text"
                id="outlined-basic"
                label="Search..."
                variant="outlined"
                className="w-full"
            />

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Fullname</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students?.data.map((res, i) => {
                            return (
                                <TableRow
                                    key={i}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>
                                        {res.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button
                                            onClick={() => add_examiner(res)}
                                            size='small'
                                            variant='text'
                                            color='success'>
                                            <AddBox fontSize="large" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
}
