import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material";
import "react-quill/dist/quill.snow.css";

export default function UpdateMultipleChoice({ datas }) {
    return (
        <div className="overflow  w-full flex gap-4 flex-col">
            <>
                <div
                    className="flex flex-col gap-4 w-full border-b pb-4"
                >
                    <div className="flex items-center justify-between w-full">
                        <FormControl
                        // error={
                        //     !!error?.[
                        //     `answer_key-${i}`
                        //     ]
                        // }
                        >
                            <FormLabel
                            // id={`answer-key-${i}`}
                            >
                                Answer Key
                                {/* {i + 1} */}
                            </FormLabel>
                            <RadioGroup
                                row
                                // aria-labelledby={`answer-key-${i}`}
                                // name={`answer_key-${i}`}
                                value={
                                    datas.answer_key
                                }
                            // onChange={(e) =>
                            //     updateQuestion(
                            //         i,
                            //         "answer_key",
                            //         e.target
                            //             .value,
                            //     )
                            // }
                            >
                                <FormControlLabel
                                    value="A"
                                    control={
                                        <Radio />
                                    }
                                    label="A"
                                />
                                <FormControlLabel
                                    value="B"
                                    control={
                                        <Radio />
                                    }
                                    label="B"
                                />
                                <FormControlLabel
                                    value="C"
                                    control={
                                        <Radio />
                                    }
                                    label="C"
                                />
                                <FormControlLabel
                                    value="D"
                                    control={
                                        <Radio />
                                    }
                                    label="D"
                                />
                            </RadioGroup>
                            {/* {error?.[
                                        `answer_key-${i}`
                                    ] && (
                                            <FormHelperText>
                                                {
                                                    error[
                                                    `answer_key-${i}`
                                                    ]
                                                }
                                            </FormHelperText>
                                        )} */}
                        </FormControl>

                        {/* Delete Button */}

                        <TextField
                            multiline
                            rows={3}
                            value={datas.question}
                            // name={`question-${i}`}
                            type="text"
                            // label={`Question ${i + 1}`}
                            variant="outlined"
                            className="w-full"
                        // error={
                        //     !!error?.[
                        //     `question-${i}`
                        //     ]
                        // }
                        // helperText={
                        //     error?.[
                        //     `question-${i}`
                        //     ] ?? ""
                        // }
                        // onChange={(e) =>
                        //     updateQuestion(
                        //         i,
                        //         "question",
                        //         e.target.value,
                        //     )
                        // }
                        />
                    </div>
                </div>
            </>
        </div>
    )
}
