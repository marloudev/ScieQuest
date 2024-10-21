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
// import { Visibility } from '@mui/icons-material';
// import { Button } from '@mui/material';
// import { router } from '@inertiajs/react';
// import AddEnrollmentSection from './add-enrollment-section';


export default function TableSection() {
  const { students } = useSelector((state) => state.students)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Fullname</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Mobile</TableCell>
                        <TableCell>Age</TableCell>
                        
                         <TableCell>Address</TableCell>
                        <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students?.data.map((res, i) => {
            const dob = moment(res.dob, 'YYYY-MM-DD'); // Replace with actual date of birth
            const age = moment().diff(dob, 'years');
            return (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  {res.name}
                </TableCell>
                <TableCell>{res.email}</TableCell>
                <TableCell>
                  {res.mobile}
                </TableCell>
                <TableCell>{res?.dob ?? ''}</TableCell>
                <TableCell>{res?.address ?? ''}</TableCell>
                {/* <TableCell>{age}</TableCell> */}
                {/* <TableCell>{res.address}</TableCell> */}
                <TableCell>
                  <div className='flex gap-2'>
                    {/* {
                      !res.enrollment && <AddEnrollmentSection data={res}/>
                    }
                     */}
                    {/* <UpdateSection data={res} />
                    <DeleteSection data={res} /> */}
                    {/* <Button
                      onClick={()=>router.visit(`/administrator/students/${res.id}`)}
                      size='small'
                      variant='contained'
                      color='success'>
                      <Visibility />
                    </Button> */}
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
