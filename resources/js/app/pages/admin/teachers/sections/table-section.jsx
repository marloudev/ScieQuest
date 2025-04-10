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
import { Button, Tooltip } from "@mui/material";
import { Delete, Edit, EditNote, Visibility } from "@mui/icons-material";
import { router } from "@inertiajs/react";
import UpdateSection from "./update-section";
import { useState } from "react";
import RemoveTeacherSection from "./remove-teacher-section";

export default function TableSection() {
    const { teachers } = useSelector((state) => state.teachers);
    const { searching } = useSelector((state) => state.teachers.search); // Access search query
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [selectedRemoveTeacher, setselectedRemoveTeacher] = useState(null);

    const handleEditClick = (teacher) => {
        setSelectedTeacher(teacher);
    };

    const handleCloseUpdateSection = () => {
        setSelectedTeacher(null);
    };

    const handleDeleteClick = (teacher) => {
        setselectedRemoveTeacher(teacher);
    };

    const handleCloseRemoveSection = () => {
        setselectedRemoveTeacher(null);
    };
    console.log('teacssshers', teachers)
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Employee ID</TableCell>
                            <TableCell>Teacher's Fullname</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Check if there are teachers available, otherwise show the "No teachers available" message */}
                        {teachers?.data.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} align="center">
                                    No teachers available
                                </TableCell>
                            </TableRow>
                        ) : (
                            teachers?.data.map((res, i) => {
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
                                        <TableCell>{res.employee_id}</TableCell>
                                        <TableCell>
                                            {res.fname} {res.lname}
                                        </TableCell>
                                        <TableCell>{res.email}</TableCell>
                                        <TableCell>
                                            <div className="flex gap-2">
                                                <Tooltip title="View List of Students">
                                                    <Button
                                                        onClick={() =>
                                                            router.visit(
                                                                `teachers/list-students/${res?.employee_id}`,
                                                            )
                                                        }
                                                        size="small"
                                                        variant="contained"
                                                        color="success"
                                                    >
                                                        <Visibility />
                                                    </Button>
                                                </Tooltip>
                                                <UpdateSection data={res} />
                                                <RemoveTeacherSection data={res} />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* {
                selectedTeacher && (
                    <UpdateSection
                        data={selectedTeacher}
                        onClose={handleCloseUpdateSection}
                    />
                )
            } */}

            {/* {
                selectedRemoveTeacher && (
                    <RemoveTeacherSection
                        data={selectedRemoveTeacher}
                        onClose={handleCloseUpdateSection}
                    />
                )
            } */}
        </>
    );
}
