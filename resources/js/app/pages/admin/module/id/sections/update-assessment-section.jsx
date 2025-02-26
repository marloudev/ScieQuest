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

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

export default function UpdateAssessmentSection({ datas }) {
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
    console.log("da", data);
    return (
        <div>
            <Tooltip title="Update Assessment">
                <Button
                    onClick={handleOpen}
                    size='small'
                    color='success'>
                    <Edit />
                </Button>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="h-[88vh] overflow-auto">
                        <div className="flex items-center justify-center text-3xl font-black">
                            UPDATE ASSESSMENT
                        </div>
                        <div className="overflow  w-full flex gap-4 flex-col">
                            <FormControl fullWidth error={!!error?.exam_type}>
                                <InputLabel id="exam-type-select-label">
                                    Exam Type
                                </InputLabel>
                                <Select
                                    labelId="exam-type-select-label"
                                    id="exam-type-select"
                                    name="exam_type"
                                    label="Exam Type"
                                    value={data.exam_type ?? ""}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                >
                                    <MenuItem value="" disabled>
                                        Select Exam Type
                                    </MenuItem>
                                    <MenuItem value="Fill In The Blank">
                                        Fill In The Blank
                                    </MenuItem>
                                    <MenuItem value="Multiple Choice">
                                        Multiple Choice
                                    </MenuItem>
                                    <MenuItem value="Matching">
                                        Matching
                                    </MenuItem>
                                    <MenuItem value="Identification">
                                        Identification
                                    </MenuItem>
                                    <MenuItem value="True Or False">
                                        True Or False
                                    </MenuItem>
                                </Select>
                                {error?.type && (
                                    <FormHelperText>
                                        {error.type}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                startIcon={
                                    data?.file ? (
                                        <>
                                            <Check />
                                            UPLOADED
                                        </>
                                    ) : (
                                        <CloudUpload />
                                    )
                                }
                            >
                                {data?.file ? data?.file?.name : "Upload files"}
                                <VisuallyHiddenInput
                                    name="file"
                                    type="file"
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            [e.target.name]: e.target.files[0],
                                        })
                                    }
                                    accept="image/*"
                                />
                            </Button>
                            <div className="bg-white ">
                                {error?.direction && (
                                    <div className="text-red-600">
                                        {error?.direction}
                                    </div>
                                )}
                                <div className="text-black p-3 font-black">
                                    Direction
                                </div>
                                <ReactQuill
                                    theme="snow"
                                    //   value={value}
                                    className="text-black  h-52"
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            direction: e,
                                        })
                                    }
                                />
                            </div>
                            <div className="mt-10"></div>
                            <div className="flex w-full items-center justify-end">
                                {data.exam_type && (
                                    <Button
                                        className="w-36"
                                        variant="contained"
                                        autoFocus
                                        onClick={() =>
                                            setData({
                                                ...data,
                                                questions: [
                                                    ...data.questions,
                                                    {
                                                        question: "",
                                                        answer: "",
                                                        answer_key: "",
                                                    },
                                                ],
                                            })
                                        }
                                    >
                                        add fields
                                    </Button>
                                )}
                            </div>
                            {data.questions.map((res, i) => {
                                return (
                                    <>
                                        <div className="flex gap-2 justify-end mt-2">
                                            {i != 0 && (
                                                <Button
                                                    variant="outlined"
                                                    color="error"
                                                    onClick={() => {
                                                        const updatedQuestions =
                                                            [...data.questions];
                                                        updatedQuestions.splice(
                                                            i,
                                                            1,
                                                        );
                                                        setData({
                                                            ...data,
                                                            questions:
                                                                updatedQuestions,
                                                        });
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                            )}
                                        </div>
                                        {data.exam_type === "True Or False" && (
                                            <div
                                                key={i}
                                                className="flex flex-col gap-4 w-full border-b pb-4"
                                            >
                                                <div className="flex gap-3 w-full">
                                                    <TextField
                                                        multiline
                                                        rows={3}
                                                        onChange={(e) => {
                                                            const updatedQuestions =
                                                                [
                                                                    ...data.questions,
                                                                ];
                                                            updatedQuestions[
                                                                i
                                                            ].question =
                                                                e.target.value;
                                                            setData({
                                                                ...data,
                                                                questions:
                                                                    updatedQuestions,
                                                            });
                                                        }}
                                                        error={
                                                            !!error?.question
                                                        }
                                                        helperText={
                                                            error?.question ??
                                                            ""
                                                        }
                                                        value={res.question}
                                                        name={`question-${i}`}
                                                        type="text"
                                                        label={`Question ${i + 1}`}
                                                        variant="outlined"
                                                        className="w-full"
                                                    />
                                                    <FormControl>
                                                        <FormLabel
                                                            id={`answer-key-label-${i}`}
                                                        >
                                                            Answer Key
                                                        </FormLabel>
                                                        <RadioGroup
                                                            row
                                                            value={
                                                                res.answer_key
                                                            }
                                                            onChange={(e) => {
                                                                const updatedQuestions =
                                                                    [
                                                                        ...data.questions,
                                                                    ];
                                                                updatedQuestions[
                                                                    i
                                                                ].answer_key =
                                                                    e.target.value;
                                                                setData({
                                                                    ...data,
                                                                    questions:
                                                                        updatedQuestions,
                                                                });
                                                            }}
                                                            aria-labelledby={`answer-key-label-${i}`}
                                                            name={`answer_key-${i}`}
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
                                        )}

                                        {(data.exam_type ==
                                            "Fill In The Blank" ||
                                            data.exam_type == "Matching" ||
                                            data.exam_type ==
                                            "Identification") && (
                                                <div className="flex flex-col gap-4 w-full border-b pb-4">
                                                    <div
                                                        key={i}
                                                        className="flex flex-row gap-4 w-full border-b "
                                                    >
                                                        <TextField
                                                            multiline
                                                            rows={2}
                                                            onChange={(e) =>
                                                                updateQuestion(
                                                                    i,
                                                                    "question",
                                                                    e.target.value,
                                                                )
                                                            }
                                                            value={res.question}
                                                            label={`Question ${i + 1}`}
                                                            variant="outlined"
                                                            className="w-full"
                                                        />
                                                        <TextField
                                                            multiline
                                                            rows={2}
                                                            onChange={(e) =>
                                                                updateQuestion(
                                                                    i,
                                                                    "answer_key",
                                                                    e.target.value,
                                                                )
                                                            }
                                                            value={res.answer_key}
                                                            label={`Answer Key ${i + 1}`}
                                                            variant="outlined"
                                                            className="w-full"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                        {data.exam_type ==
                                            "Multiple Choice" && (
                                                <div
                                                    key={i}
                                                    className="flex flex-col gap-4 w-full border-b pb-4"
                                                >
                                                    {/* Answer Key Selection */}
                                                    <div className="flex items-center justify-between w-full">
                                                        <FormControl
                                                            error={
                                                                !!error?.[
                                                                `answer_key-${i}`
                                                                ]
                                                            }
                                                        >
                                                            <FormLabel
                                                                id={`answer-key-${i}`}
                                                            >
                                                                Answer Key {i + 1}
                                                            </FormLabel>
                                                            <RadioGroup
                                                                row
                                                                aria-labelledby={`answer-key-${i}`}
                                                                name={`answer_key-${i}`}
                                                                value={
                                                                    res.answer_key
                                                                }
                                                                onChange={(e) =>
                                                                    updateQuestion(
                                                                        i,
                                                                        "answer_key",
                                                                        e.target
                                                                            .value,
                                                                    )
                                                                }
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
                                                            {error?.[
                                                                `answer_key-${i}`
                                                            ] && (
                                                                    <FormHelperText>
                                                                        {
                                                                            error[
                                                                            `answer_key-${i}`
                                                                            ]
                                                                        }
                                                                    </FormHelperText>
                                                                )}
                                                        </FormControl>

                                                        {/* Delete Button */}
                                                    </div>

                                                    {/* Question Text */}
                                                    <TextField
                                                        multiline
                                                        rows={3}
                                                        value={res.question}
                                                        name={`question-${i}`}
                                                        type="text"
                                                        label={`Question ${i + 1}`}
                                                        variant="outlined"
                                                        className="w-full"
                                                        error={
                                                            !!error?.[
                                                            `question-${i}`
                                                            ]
                                                        }
                                                        helperText={
                                                            error?.[
                                                            `question-${i}`
                                                            ] ?? ""
                                                        }
                                                        onChange={(e) =>
                                                            updateQuestion(
                                                                i,
                                                                "question",
                                                                e.target.value,
                                                            )
                                                        }
                                                    />
                                                </div>
                                            )}
                                    </>
                                );
                            })}
                        </div>
                        <div className="mt-5">
                            <Button
                                className="w-full  "
                                disabled={loading}
                                variant="contained"
                                autoFocus
                                onClick={submit_form}
                            >
                                SUBMIT
                            </Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
