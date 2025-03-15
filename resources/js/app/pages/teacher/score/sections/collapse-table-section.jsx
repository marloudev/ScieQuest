import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    console.log("rowrowrow", row);
    return (
        <React.Fragment>
            <Table size="small" aria-label="purchases">
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            {row?.user.fname} {row?.user.lname}
                        </TableCell>
                        <TableCell align="right">aaa</TableCell>
                        <TableCell align="right">dadwa</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};

export default function CollapseTableSection({ data }) {
    const rows = data?.scores ?? [];
    console.log("dadakjldjawlkdwja", rows);
    const HtmlRenderer = ({ htmlContent }) => (
        <div
            className="bg-teal-500 p-3 rounded-md text-white"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
    );
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                {rows?.user?.fname}
                <TableHead>
                    <TableRow>
                        {/* <TableCell /> */}
                        <TableCell colSpan={6}>
                            <HtmlRenderer htmlContent={data.direction} />
                        </TableCell>
                        {/* <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableHead>
                    <TableRow>
                        <TableCell>Question</TableCell>
                        <TableCell>Answer Key</TableCell>
                        <TableCell>Answer</TableCell>
                        <TableCell>Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.answers?.map((row, i) => {
                        const totalAnswers = row.answer?.length ?? 1; // Avoid division by zero
                        const score = parseInt(row.score ?? 0, 10);
                        const percentage = (score / totalAnswers) * 100 || 0; // Ensures it defaults to 0 if NaN
                        const status = percentage >= 75 ? "Passed" : "Failed"; // Status based on 75% threshold

                        return (
                            <>
                                <TableRow key={i}>
                                    <TableCell>
                                        <div className="flex w-full items-center justify-start">
                                            {row?.quest?.question}
                                            {row?.quest?.file && (
                                                <img
                                                    src={row?.quest?.file}
                                                    width="250"
                                                />
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="uppercase">
                                            {row?.quest?.answer_key}
                                        </div>
                                    </TableCell>
                                    <TableCell>{row?.answer}</TableCell>
                                    <TableCell>{row?.score}</TableCell>
                                </TableRow>
                            </>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
