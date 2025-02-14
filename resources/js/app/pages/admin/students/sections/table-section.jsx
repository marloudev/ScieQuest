import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Button, Tooltip, TextField, MenuItem, Select, InputLabel, FormControl, InputAdornment, Typography } from '@mui/material';
import DeleteSection from './delete-section';
import UpdateSection from './update-section';
import { Search } from '@mui/icons-material';

export default function TableSection() {
  const { students } = useSelector((state) => state.students);
  const { teachers } = useSelector((state) => state.teachers);

  // State for filter values
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedTeacher, setSelectedTeacher] = React.useState('');

  // Filter students based on search and selected teacher
  const filteredStudents = students?.data.filter((student) => {
    const fullName = `${student.fname} ${student.lname}`.toLowerCase();
    const email = student.email.toLowerCase();
    const student_id = student.student_id.toLowerCase();
    const teacherFullName = student.teacher ? `${student.teacher.fname} ${student.teacher.lname}`.toLowerCase() : '';

    const matchesSearch =
      fullName.includes(searchTerm.toLowerCase()) || email.includes(searchTerm.toLowerCase()) || student_id.includes(searchTerm.toLowerCase()) || teacherFullName.includes(searchTerm.toLowerCase());

    const matchesTeacher = selectedTeacher
      ? teacherFullName.includes(selectedTeacher.toLowerCase())
      : true;

    return matchesSearch && matchesTeacher;
  });

  // Handlers for filtering
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleTeacherChange = (e) => setSelectedTeacher(e.target.value);

  return (
    <div>
      {/* Filter Section */}
      <div className="flex items-center justify-between mb-4">
        <div className='w-64'>
          <FormControl fullWidth>
            <InputLabel>Select an Adviser</InputLabel>
            <Select
              value={selectedTeacher}
              onChange={handleTeacherChange}
              label="Adviser"
              variant="outlined"
              className='bg-white'
            >
              <MenuItem value="">All Advisers</MenuItem>
              {teachers?.data.map((teacher) => (
                <MenuItem key={teacher.id} value={teacher.fname + ' ' + teacher.lname}>
                  {teacher.fname} {teacher.lname}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
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

      {/* Table Section */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Student ID</TableCell>
              <TableCell>Fullname</TableCell>
              <TableCell>Adviser</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((res, i) => {
                const dob = moment(res.dob, 'YYYY-MM-DD');
                const age = moment().diff(dob, 'years');

                return (
                  <TableRow
                    key={i}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{res.student_id}</TableCell>
                    <TableCell>{res.fname} {res.lname}</TableCell>
                    <TableCell>{res.teacher?.fname} {res.teacher?.lname}</TableCell>
                    <TableCell>{res.email}</TableCell>
                    <TableCell>
                      <div className='flex'>
                        <Button>
                          <UpdateSection data={res} />
                        </Button>
                        <Button>
                          <DeleteSection data={res} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography variant="body1" color="textSecondary">
                    No available data
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}