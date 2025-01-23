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
import { Button, Tooltip } from '@mui/material';
import { EditNote, Visibility } from '@mui/icons-material';
// import { Visibility } from '@mui/icons-material';
// import { Button } from '@mui/material';
// import { router } from '@inertiajs/react';
// import AddEnrollmentSection from './add-enrollment-section';


export default function BookletTableSection() {
    const { booklets } = useSelector((state) => state.booklets)
    console.log('booklets', booklets)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Quarter</TableCell>
                        <TableCell>Module Name</TableCell>
                        <TableCell>Grade</TableCell>
                        <TableCell>Created At</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {booklets?.map((res, i) => {
                        const dob = moment(res.dob, 'YYYY-MM-DD'); // Replace with actual date of birth
                        const age = moment().diff(dob, 'years');
                        return (
                            <TableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{res.quarter}</TableCell>
                                <TableCell>{res.title}</TableCell>
                                <TableCell>{res?.grade ?? ''}</TableCell>
                                <TableCell>{moment(res.created_at).format('LLLL')}</TableCell>
                                <TableCell>
                                    <div className='flex gap-2'>
                                        <Tooltip title="View Exercise(s)">
                                            <Button
                                                onClick={() => router.visit(`/administrator/modules/${res.id}`)}
                                                size='small'
                                                variant='contained'
                                                color='success'>
                                                <Visibility />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="Edit Module">
                                            <Button
                                                // onClick={() =>
                                                //     router.visit(
                                                //         `/administrator/teachers/${res.id}/create_grades`,
                                                //     )
                                                // }
                                                size="small"
                                                variant="contained"
                                                color="primary"
                                            >
                                                <EditNote />
                                            </Button>
                                        </Tooltip>
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
