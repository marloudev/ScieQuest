import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material/styles";

import {
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
} from "@mui/material";
import { useState } from "react";
import store from "@/app/pages/store/store";
import { Assessment, Check, CloudUpload } from "@mui/icons-material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import moment from "moment";
import { store_exam_type_thunk } from "../../../redux/booklet-thunk";
import { router } from "@inertiajs/react";
import { store_lesson_thunk } from "../../../redux/lesson-thunk";

export default function CreateAssessment() {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState(
        {
            module_id: "",
            subject_matter: "",
            discussion: "",
            link: "",
            file: "",
        }, // pre_exercises: [
        //     {
        //         id: "",
        //         lesson_id: "",
        //         exam_type: "",
        //         direction: "",
        //         file: "",
        //         quests: [
        //             {
        //                 exam_type: "",
        //                 direction: "",
        //                 question: "",
        //                 answer_key: "",
        //                 file: "",
        //             },
        //         ],
        //     },
        // ],
        // assessments: [
        //     {
        //         id: "",
        //         lesson_id: "",
        //         exam_type: "",
        //         direction: "",
        //         file: "",
        //         quests: [
        //             {
        //                 exam_type: "",
        //                 direction: "",
        //                 question: "",
        //                 answer_key: "",
        //                 file: "",
        //             },
        //         ],
        //     },
        // ],
    );
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    console.log("data", data);

    async function submit_form(params) {
        try {
            setLoading(true);

            const formData = new FormData();

            // Append all the regular data
            // formData.append("subject_matter", data.subject_matter);
            // formData.append("discussions", data.discussions);
            // formData.append("link", data.link);
            // formData.append("assessment", JSON.stringify(data.assessment)); // Convert JSON to string
            // formData.append("pre_exercise", JSON.stringify(data.pre_exercise));
            // formData.append("module_id", module_id);
            // formData.append("unique", moment().format("MMDDYYYYhhmmss"));
            formData.append("lesson", JSON.stringify(data));
            formData.append("file", data.file);
            // Append files if they exist
            // if (data.file1) {
            //     formData.append("file1", data.file1);
            // }
            // if (data.file2) {
            //     formData.append("file2", data.file2);
            // }
            const result = await store.dispatch(store_lesson_thunk(formData));
            if (result.status == 200) {
                router.visit(`/administrator/modules/${module_id}`);
                setLoading(false);
                setOpen(false);
            } else {
                setLoading(false);
                setError(result.response.data.errors);
            }
            console.log("datass", data);
        } catch (error) {
            setLoading(false);
        }
    }

    const VisuallyHiddenInput = styled("input")({
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1,
    });

    console.log("datadddddd", data);

    return (
        <div className="bg-white p-3 rounded-md shadow">
            <Toolbar className="flex-col gap-3 flex items-start justify-start w-full">
                <div className="w-full flex flex-col gap-3 mt-6">
                    <TextField
                        onChange={(e) =>
                            setData({
                                ...data,
                                [e.target.name]: e.target.value,
                            })
                        }
                        error={!!error?.[`subject_matter`]}
                        helperText={error?.[`subject_matter`] ?? ""}
                        value={data?.subject_matter ?? ""}
                        name={`subject_matter`}
                        type="text"
                        label={`Subject Matters`}
                        variant="outlined"
                        className="w-full"
                    />
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
                            // onChange={(event) => console.log(event.target.files)}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.files[0],
                                })
                            }
                            accept="image/*"
                        />
                    </Button>
                    <div className="text-black  font-black">Discussions</div>
                    <ReactQuill
                        theme="snow"
                        //   value={value}
                        className="text-black  h-52"
                        onChange={(e) =>
                            setData({
                                ...data,
                                discussion: e,
                            })
                        }
                    />

                    <div className="mt-12">
                        <TextField
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            error={!!error?.[`link`]}
                            helperText={error?.[`link`] ?? ""}
                            value={data.link}
                            name={`link`}
                            type="text"
                            label={`Demo Website Link`}
                            variant="outlined"
                            className="w-full "
                        />
                    </div>
                </div>

                {/* Pre-Exercise */}
                <div className="flex w-full items-center justify-between font-black text-5xl">
                    <div>Pre-Exercise</div>
                    <div>
                        <Button variant="contained" onClick={() => alert()}>
                            ADD Pre-Exercise
                        </Button>
                    </div>
                </div>

                <div className="w-full flex gap-4 flex-col border p-3 rounded-md">
                    <div className="flex items-end justify-end">
                        <Button
                            variant="outlined"
                            color="error"
                            // onClick={() => handleDeletePreExercise()}
                        >
                            Delete
                        </Button>
                    </div>

                    {/* Form Fields */}
                    <FormControl fullWidth error={!!error?.exam_type}>
                        <InputLabel id="demo-simple-select-label">
                            Exam Type
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="exam_type"
                            label="Exam Type"
                            // onChange={(e) =>
                            //     handleEditPreExercise(
                            //         i,
                            //         "exam_type",
                            //         e.target.value,
                            //     )
                            // }
                            // value={exercise.exam_type ?? ""}
                        >
                            <MenuItem selected disabled></MenuItem>
                            <MenuItem value="Fill In The Blank">
                                Fill In The Blank
                            </MenuItem>
                            <MenuItem value="Multiple Choice">
                                Multiple Choice
                            </MenuItem>
                            <MenuItem value="Matching">Matching</MenuItem>
                            <MenuItem value="Identification">
                                Identification
                            </MenuItem>
                            <MenuItem value="True Or False">
                                True Or False
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        // startIcon={
                        //     exercise.file ? (
                        //         <>
                        //             <Check />
                        //             UPLOADED
                        //         </>
                        //     ) : (
                        //         <CloudUpload />
                        //     )
                        // }
                    >
                        {/* {exercise?.file ? exercise.file?.name : "Upload files"} */}
                        <VisuallyHiddenInput
                            name="file"
                            type="file"
                            // onChange={(event) => console.log(event.target.files)}
                            // onChange={(e) =>
                            //     handleEditPreExercise(
                            //         i,
                            //         "file",
                            //         e.target.value,
                            //     )
                            // }
                            accept="image/*"
                        />
                    </Button>
                    <div className="text-black  font-black">Direction</div>
                    <ReactQuill
                        theme="snow"
                        //   value={value}
                        className="text-black  h-52"
                        // onChange={(e) =>
                        //     handleEditPreExercise(
                        //         i,
                        //         "direction",
                        //         e.target.value,
                        //     )
                        // }
                    />
                </div>

                {/* {data.assessments.map((assessment, i) => (
                    <div
                        key={i}
                        className="w-full flex gap-4 flex-col border p-3 rounded-md"
                    >
                        <TextField
                            label="Exam Type"
                            value={assessment.exam_type}
                            onChange={(e) =>
                                handleEditAssessment(
                                    i,
                                    "exam_type",
                                    e.target.value,
                                )
                            }
                            fullWidth
                        />
                        <TextField
                            label="Direction"
                            value={assessment.direction}
                            onChange={(e) =>
                                handleEditAssessment(
                                    i,
                                    "direction",
                                    e.target.value,
                                )
                            }
                            fullWidth
                        />
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => handleDeleteAssessment(i)}
                        >
                            Delete
                        </Button>
                    </div>
                ))} */}

                <div className="mt-10">
                    <Button
                        className="w-full "
                        disabled={loading}
                        variant="contained"
                        autoFocus
                        onClick={submit_form}
                    >
                        SUBMIT
                    </Button>
                </div>
            </Toolbar>
        </div>
    );
}
