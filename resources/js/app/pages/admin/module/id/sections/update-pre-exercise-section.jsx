import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
import UpdateTrueOrFalse from "../components/update-true-or-false";
import UpdateMultipleChoice from "../components/update-multiple-choice";
import UpdateIdentificationMatchingFillForm from "../components/update-identification-matching-fill-form";

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

export default function UpdatePreExerciseSection({ datas }) {
    const [open, setOpen] = useState(false);

    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
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
            formData.append("lesson_id", data.id);
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
    console.log("da", datas);
    return (
        <div>
            <Tooltip title="Update Pre-Exercise">
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
                            UPDATE PRE-EXERCISE
                        </div>
                        <div className="overflow  w-full flex gap-4 flex-col">
                            <FormControl fullWidth error={!!error?.exam_type}>
                                <TextField
                                    labelId="exam-type-select-label"
                                    id="exam-type-select"
                                    name="exam_type"
                                    label="Exam Type"
                                    value={datas.exam_type ?? ""}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                >
                                </TextField>
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
                                    datas?.file ? (
                                        <>
                                            <Check />
                                            UPLOADED
                                        </>
                                    ) : (
                                        <CloudUpload />
                                    )
                                }
                            >
                                {datas?.file ? datas?.file?.name : "Upload files"}
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
                                    value={datas?.direction}
                                    className="text-black  h-52"
                                // onChange={(e) =>
                                //   setData({
                                //     ...data,
                                //     direction: e,
                                //   })
                                // }
                                />
                            </div>
                            <div className="mt-10"></div>
                            <div className="flex w-full items-center justify-end">
                                {datas.exam_type && (
                                    <Button
                                        className="w-36"
                                        variant="contained"
                                        autoFocus
                                    // onClick={() =>
                                    //   setData({
                                    //     ...data,
                                    //     questions: [
                                    //       ...data.questions,
                                    //       {
                                    //         question: "",
                                    //         answer: "",
                                    //         answer_key: "",
                                    //       },
                                    //     ],
                                    //   })
                                    // }
                                    >
                                        add fields
                                    </Button>
                                )}
                            </div>
                            {datas.questions.map((res, i) => {
                                return (
                                    <>
                                        {res.exam_type == "True Or False" && (
                                            <div className="flex flex-col gap-4 w-full border-b pb-4">
                                                <div
                                                    key={i}
                                                    className="flex flex-col gap-4 w-full border-b pb-4"
                                                >
                                                    <UpdateTrueOrFalse datas={res} />
                                                </div>
                                            </div>
                                        )}

                                        {(res.exam_type ==
                                            "Fill In The Blank" ||
                                            res.exam_type == "Matching" ||
                                            res.exam_type ==
                                            "Identification") && (
                                                <div className="flex flex-col gap-4 w-full border-b pb-4">
                                                    <div
                                                        key={i}
                                                        className="flex flex-row gap-4 w-full border-b "
                                                    >
                                                        <UpdateIdentificationMatchingFillForm datas={res} />
                                                    </div>
                                                </div>
                                            )}

                                        {res.exam_type ==
                                            "Multiple Choice" && (
                                                <div className="flex flex-col gap-4 w-full border-b pb-4">
                                                    <div
                                                        key={i}
                                                        className="flex flex-col gap-4 w-full border-b pb-4"
                                                    >
                                                        <UpdateMultipleChoice datas={res} />
                                                    </div>
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
