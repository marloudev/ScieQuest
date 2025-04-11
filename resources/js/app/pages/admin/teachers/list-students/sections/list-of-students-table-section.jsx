import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField, Tooltip, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import ViewScoreSection from './view-score-section';
import { get_students_by_id_thunk } from '../../../students/redux/students-thunk';
import DeleteSection from '../../../students/sections/delete-section';
import UpdateSection from './update-section';

export default function ListOfStudentsTableSection() {
    const dispatch = useDispatch();
    const { students = [] } = useSelector((state) => state.students);  // Ensure students is an array
    const { user } = useSelector((state) => state.app);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const teacher_id = window.location.pathname.split('/')[4]

    useEffect(() => {
        if (teacher_id) {
            dispatch(get_students_by_id_thunk(teacher_id));
        }
    }, [dispatch, teacher_id]);

    useEffect(() => {
        if (Array.isArray(students) && teacher_id) {
            const filtered = students?.filter(student => student.teacher_id === teacher_id);
            setFilteredStudents(filtered);
        }
    }, [students, teacher_id]);

    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (e) => setSearchTerm(e.target.value);

    const filteredStudentss = Array.isArray(students) ? students.filter((student) => {
        const fullName = `${student?.fname} ${student?.lname}`.toLowerCase();
        const email = student?.user?.email?.toLowerCase() || '';
        const student_id = student?.student_id?.toLowerCase() || '';

        return (
            fullName.includes(searchTerm.toLowerCase()) ||
            email.includes(searchTerm.toLowerCase()) ||
            student_id.includes(searchTerm.toLowerCase())
        );
    }) : [];

    return (
        <>
            <div className='flex items-center justify-between mb-4'>
                <div>
                    <TextField
                        label="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        variant="outlined"
                        fullWidth
                        className="bg-white"
                        sx={{ width: "450px" }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Pupil ID</TableCell>
                            <TableCell>Fullname</TableCell>
                            <TableCell>Email</TableCell>
                            {/* <TableCell>Action</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredStudentss?.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} align="center">
                                    No students found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredStudentss?.map((res, i) => (
                                <TableRow key={i}>
                                    <TableCell>{res?.student_id}</TableCell>
                                    <TableCell>{res?.fname} {res?.lname}</TableCell>
                                    <TableCell>{res?.user?.email}</TableCell>
                                    {/* <TableCell>
                                        <div className="flex gap-2">
                                            <Tooltip title="View Scores">
                                                <ViewScoreSection data={res} />
                                            </Tooltip>
                                            <Tooltip title="Update Student">
                                                <UpdateSection data={res} />
                                            </Tooltip>
                                            <Tooltip title="Delete Student">
                                                <DeleteSection data={res} />
                                            </Tooltip>
                                        </div>
                                    </TableCell> */}
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
