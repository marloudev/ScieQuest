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
import { get_students_by_id_thunk } from '@/app/pages/admin/students/redux/students-thunk';
import UpdateSection from '@/app/pages/admin/students/sections/update-section';
import DeleteSection from '@/app/pages/admin/students/sections/delete-section';

export default function ListOfStudentsTableSection() {
    const dispatch = useDispatch();
    const { students } = useSelector((state) => state.students);
    const { user } = useSelector((state) => state.app);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const teacher_id = user?.user_id;

    useEffect(() => {
        if (teacher_id) {
            dispatch(get_students_by_id_thunk(teacher_id));
        }
    }, [dispatch, teacher_id]);

    useEffect(() => {
        if (students?.data && teacher_id) {
            const filtered = students.data.filter(student => student.teacher_id === teacher_id);
            setFilteredStudents(filtered);
        }
    }, [students, teacher_id]);

    console.log('usersss', user)
    console.log('studentsss', students)


    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Student ID</TableCell>
                            <TableCell>Fullname</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredStudents?.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} align="center">
                                    No students found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredStudents?.map((res, i) => (
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
                                    <TableCell>{res.email}</TableCell>
                                    <TableCell>
                                        <div className="flex gap-2">
                                            <Tooltip title="Update Student">
                                                <UpdateSection data={res} />
                                            </Tooltip>
                                            <Tooltip title="Delete Student">
                                                <DeleteSection data={res} />
                                            </Tooltip>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
