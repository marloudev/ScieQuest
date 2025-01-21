import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import UpdateSection from "./update-section";
// import DeleteSection from "./delete-section";
import { useSelector } from "react-redux";
import moment from "moment";
import { Button } from "@mui/material";
import { Edit, EditNote, Visibility } from "@mui/icons-material";
import { router } from "@inertiajs/react";

export default function TableSection() {
    const { teachers } = useSelector((state) => state.teachers);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Employee ID</TableCell>
                        <TableCell>Fullname</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {teachers?.data.map((res, i) => {
                        const dob = moment(res.dob, "YYYY-MM-DD"); // Replace with actual date of birth
                        const age = moment().diff(dob, "years");
                        console.log("res", res);
                        return (
                            <TableRow
                                key={i}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell>{res.user_id}</TableCell>
                                <TableCell>
                                    {res.fname} {res.lname}
                                </TableCell>
                                <TableCell>{res.email}</TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
                                        {/* <UpdateSection data={res} /> */}
                                        {/* <DeleteSection data={res} /> */}

                                        <Button
                                            // onClick={() =>
                                            //     router.visit(
                                            //         `/administrator/teachers/${res.id}/create_grades`,
                                            //     )
                                            // }
                                            size="small"
                                            variant="contained"
                                            color="success"
                                        >
                                            <Visibility />
                                        </Button>
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
