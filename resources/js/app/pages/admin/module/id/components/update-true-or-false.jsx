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
import { Check, CloudUpload, Edit } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import store from "@/app/pages/store/store";
import {
    store_lesson_thunk,
    store_quest_thunk,
} from "../../redux/lesson-thunk";
import { useEffect } from "react";
import InputLabel from "@/Components/InputLabel";
import { get_module_by_id_thunk } from "../../redux/booklet-thunk";

export default function UpdateTrueOrFalse({ datas }) {
    const [open, setOpen] = useState(false);

    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        exam_type: "",
        direction: "",
        file: "",
        questions: [
            {
                question: "",
                answer_key: "",
            },
        ],
    });
    const module_id = window.location.pathname.split("/")[3];
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const VisuallyHiddenInput = styled("input")({
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1,
    });

    async function submit_form(params) {
        try {
            setLoading(true);

            const formData = new FormData();
            formData.append("lesson_id", datas.id);
            formData.append("module_id", module_id);
            formData.append("questions", JSON.stringify(data.questions));
            formData.append("file", data.file);
            formData.append("direction", data.direction);
            formData.append("exam_type", data.exam_type);
            formData.append("type", "pre-exercise");

            const result = await store.dispatch(store_quest_thunk(formData));
            if (result.status == 200) {
                store.dispatch(get_module_by_id_thunk(module_id));
                setLoading(false);
                setOpen(false);
                setData({
                    exam_type: "",
                    direction: "",
                    file: "",
                    questions: [
                        {
                            question: "",
                            answer_key: "",
                            file: "",
                        },
                    ],
                });
            } else {
                setLoading(false);
                setError(result.response.data.errors);
            }
            console.log("datass", data);
        } catch (error) {
            setLoading(false);
        }
    }
    const updateQuestion = (index, field, value) => {
        const updatedQuestions = [...data.questions];
        updatedQuestions[index][field] = value;
        setData({
            ...data,
            questions: updatedQuestions,
        });
    };

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
                            // onChange={(e) => {
                            //     const updatedQuestions =
                            //         [
                            //             ...data.questions,
                            //         ];
                            //     updatedQuestions[
                            //         i
                            //     ].question =
                            //         e.target.value;
                            //     setData({
                            //         ...data,
                            //         questions:
                            //             updatedQuestions,
                            //     });
                            // }}
                            // error={
                            //     !!error?.question
                            // }
                            // helperText={
                            //     error?.question ??
                            //     ""
                            // }
                            value={datas?.question}
                            // name={`question-${i}`}
                            type="text"
                            // label={`Question ${i + 1}`}
                            variant="outlined"
                            className="w-full"
                        />
                        <FormControl>
                            <FormLabel
                            // id={`answer-key-label-${i}`}
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
