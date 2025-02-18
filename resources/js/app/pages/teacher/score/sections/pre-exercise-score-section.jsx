import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Tooltip } from "@mui/material";
import CollapseTableSection from "./collapse-table-section";

export default function PreExerciseScoreSection() {
    const dispatch = useDispatch();
    const { student } = useSelector((state) => state.students);
    const { user } = useSelector((state) => state.app);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const teacher_id = user?.user_id;


    return (
        <>
            {student?.lessons?.map((res, i) => {
                return (
                    <div>
                        <h2>{res.subject_matter}</h2>
                        <TableContainer component={Paper}>
                            <Table
                                sx={{ minWidth: 650 }}
                                aria-label="simple table"
                            >
                                <TableBody>
                                    {res?.pre_exercises?.length === 0 ? (
                                        <TableRow>
                                            <TableCell
                                                colSpan={4}
                                                align="center"
                                            >
                                                No Score found.
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        res?.pre_exercises?.map((ress, i) => {
                                          

                                            return (
                                                <>
                                                    <CollapseTableSection
                                                        data={ress}
                                                    />
                                                </>
                                            );
                                        })
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                );
            })}
        </>
    );
}
