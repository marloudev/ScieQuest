import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import UpdateSection from './update-section';
// import DeleteSection from './delete-section';
import { useSelector } from "react-redux";
import moment from "moment";
import { router } from "@inertiajs/react";
import { Visibility } from "@mui/icons-material";
import { Button } from "@mui/material";
// import { Visibility } from '@mui/icons-material';
// import { Button } from '@mui/material';
// import { router } from '@inertiajs/react';
// import AddEnrollmentSection from './add-enrollment-section';

export default function ExaminationsTableSection() {
    const { examinations } = useSelector((state) => state.booklets);
    console.log('examinations', examinations)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Examination Title</TableCell>
                        <TableCell>Subtitle</TableCell>
                        {/* <TableCell>Instruction</TableCell> */}
                        <TableCell>ALS Level</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {examinations?.map((res, i) => {
                        const dob = moment(res.dob, "YYYY-MM-DD"); // Replace with actual date of birth
                        const age = moment().diff(dob, "years");
                        return (
                            <TableRow
                                key={i}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell>{res.title}</TableCell>
                                <TableCell>{res.sub_title}</TableCell>
                                {/* <TableCell>{res.instruction}</TableCell> */}
                                <TableCell>{res.als_level}</TableCell>
                                {/* <TableCell>{res.address}</TableCell> */}
                                <TableCell>
                                    <div className="flex gap-2">
                                        {/* {
                      !res.enrollment && <AddEnrollmentSection data={res}/>
                    }
                     */}
                                        {/* <UpdateSection data={res} />
                    <DeleteSection data={res} /> */}
                                        <Button
                                            onClick={() =>
                                                router.visit(
                                                    `${window.location.pathname}/${res.id}`,
                                                )
                                            }
                                            size="small"
                                            variant="contained"
                                            color="success"
                                        >
                                            <Visibility />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
