import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import UpdateSection from './update-section';
// import DeleteSection from './delete-section';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { router } from '@inertiajs/react';
import { Button } from '@mui/material';
import { Checklist, ListAlt, Visibility } from '@mui/icons-material';
// import DeleteExaminerSection from './delete-examiner-section';
// import { Visibility } from '@mui/icons-material';
// import { Button } from '@mui/material';
// import { router } from '@inertiajs/react';
// import AddEnrollmentSection from './add-enrollment-section';


export default function ExaminerTableSection() {
    const { examiners } = useSelector((state) => state.schedule)

    console.log('examiners',examiners)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Reference Test ID</TableCell>
                        <TableCell>Examiner</TableCell>
                        <TableCell>Mobile</TableCell>
                        <TableCell>Learning Center</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {examiners && examiners?.map((res, i) => {
                        const dob = moment(res.dob, 'YYYY-MM-DD'); // Replace with actual date of birth
                        const age = moment().diff(dob, 'years');
                        return (
                            <TableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>
                                    {res.reference_id}
                                </TableCell>
                                <TableCell>{res.user.name}</TableCell>
                                <TableCell>{res?.user?.mobile ?? ''}</TableCell>
                                <TableCell>{res?.schedule?.learning_center?.name ?? ''}</TableCell>
                                <TableCell>
                                    <div className='flex gap-2'>
                                        <Button
                                            target='_blank'
                                            href={`${window.location.pathname}/ila_assessment_form/${res.examiner_id}`}
                                            size='small'
                                            variant='contained'
                                            color='primary'>
                                            <ListAlt />
                                        </Button>
                                        <Button
                                            target='_blank'
                                            href={`${window.location.pathname}/score_sheet/${res.examiner_id}`}
                                            size='small'
                                            variant='contained'
                                            color='success'>
                                            <Checklist />
                                        </Button>
                                        {/* <DeleteExaminerSection data={res}/> */}
                                    </div>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
