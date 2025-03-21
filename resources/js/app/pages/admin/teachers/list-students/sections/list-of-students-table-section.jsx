import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Tooltip } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { get_students_by_id_thunk } from '../../../students/redux/students-thunk';
import UpdateSection from '../../../students/sections/update-section';
import DeleteSection from '../../../students/sections/delete-section';

export default function ListOfStudentsTableSection() {
    const dispatch = useDispatch();
    const { students } = useSelector((state) => state.students);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const teacher_id = window.location.pathname.split('/')[4];

    useEffect(() => {
        dispatch(get_students_by_id_thunk(teacher_id));
    }, []);


    console.log('students', students)
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Student ID</TableCell>
                            <TableCell>Fullname</TableCell>
                            <TableCell>Email</TableCell>
                            {/* <TableCell>Action</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students?.data.map((res, i) => (
                            <TableRow
                                key={i}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell>{res.student_id}</TableCell>
                                <TableCell>
                                    {res.fname} {res.lname}
                                </TableCell>
                                <TableCell>{res?.email}</TableCell>
                                {/* <TableCell>
                                    <div className="flex gap-2">
                                        <Tooltip>
                                            <UpdateSection
                                                data={res}
                                            />
                                        </Tooltip>
                                        <Tooltip>
                                            <DeleteSection
                                                data={res}
                                            />
                                        </Tooltip>
                                    </div>
                                </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
