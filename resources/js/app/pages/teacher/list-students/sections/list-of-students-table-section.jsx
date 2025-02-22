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
import { get_students_by_id_thunk } from '@/app/pages/admin/students/redux/students-thunk';
import UpdateSection from '@/app/pages/admin/students/sections/update-section';
import DeleteSection from '@/app/pages/admin/students/sections/delete-section';
import ViewScoreSection from '@/app/pages/admin/teachers/list-students/sections/view-score-section';
import { Search } from '@mui/icons-material';
import CreateSection from '@/app/pages/admin/students/sections/create-section';

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


    // State for filter values
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedTeacher, setSelectedTeacher] = React.useState('');

    // Filter students based on search and selected teacher
    const filteredStudentss = students?.data.filter((student) => {
        const fullName = `${student.fname} ${student.lname}`.toLowerCase();
        const email = student.email.toLowerCase();
        const student_id = student.student_id.toLowerCase();
        // const teacherFullName = student.teacher ? `${student.teacher.fname} ${student.teacher.lname}`.toLowerCase() : '';

        const matchesSearch =
            fullName.includes(searchTerm.toLowerCase()) || email.includes(searchTerm.toLowerCase()) || student_id.includes(searchTerm.toLowerCase());


        return matchesSearch;
    });

    // Handlers for filtering
    const handleSearchChange = (e) => setSearchTerm(e.target.value);

    return (
        <>
            <div className='flex items-center justify-between mb-4'>
                <div>
                    <CreateSection />
                </div>
                <div className=''>
                    <TextField
                        label="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        variant="outlined"
                        fullWidth
                        className="bg-white"
                        sx={{ width: "450px" }} // Adjust width as needed
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
                            <TableCell>Action</TableCell>
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
                                    <TableCell>{res.user.email}</TableCell>
                                    <TableCell>
                                        <div className="flex gap-2">
                                            <Tooltip title="Delete Student">
                                                <ViewScoreSection data={res} />
                                            </Tooltip>
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
