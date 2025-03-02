import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import {
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Tooltip,
} from "@mui/material";
import "react-quill/dist/quill.snow.css";

export default function UpdateTrueOrFalse({ datas, onChange, value, }) {
    return (
        <div className="overflow  w-full flex gap-4 flex-col">
            <>
                <div
                    className="flex flex-col gap-4 w-full border-b pb-4"
                >
                    <div className="flex gap-3 w-full">
                        <TextField
                            multiline
                            rows={3}
                            value={datas?.question}
                            type="text"
                            variant="outlined"
                            className="w-full"
                        />
                        <FormControl>
                            <FormLabel
                            >
                                Answer Key
                            </FormLabel>
                            <RadioGroup
                                row
                                value={
                                    datas?.answer_key
                                }
                            // onChange={(e) => {
                            //     const updatedQuestions =
                            //         [
                            //             ...data.questions,
                            //         ];
                            //     updatedQuestions[
                            //         i
                            //     ].answer_key =
                            //         e.target.value;
                            //     setData({
                            //         ...data,
                            //         questions:
                            //             updatedQuestions,
                            //     });
                            // }}
                            // aria-labelledby={`answer-key-label-${i}`}
                            // name={`answer_key-${i}`}
                            >
                                <FormControlLabel
                                    value="true"
                                    control={
                                        <Radio />
                                    }
                                    label="True"
                                />
                                <FormControlLabel
                                    value="false"
                                    control={
                                        <Radio />
                                    }
                                    label="False"
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </>
        </div>
    )
}
