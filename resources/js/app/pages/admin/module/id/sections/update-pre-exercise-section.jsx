import { Check, CloudUpload, Edit } from "@mui/icons-material";
import { Box, Button, FormControl, FormHelperText, Modal, TextField, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import UpdateTrueOrFalse from "../components/update-true-or-false";
import UpdateIdentificationMatchingFillForm from "../components/update-identification-matching-fill-form";
import UpdateMultipleChoice from "../components/update-multiple-choice";
import { styled } from "@mui/material/styles";
import store from "@/app/pages/store/store";
import { update_pre_exercise_thunk } from "../../redux/pre-exercise-thunk";
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

export default function UpdatePreExerciseSection({ datas }) {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        question: datas?.questions,
        file: "",
        id: datas?.id || "",
        exam_type: datas?.exam_type || "",
        direction: datas?.direction || "",
    });
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const module_id = window.location.pathname.split("/")[3];

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (datas) {
            setForm({
                ...datas,
                question: datas?.questions,
            });
        }
    }, [datas]);

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

    const submitForm = async () => {
        if (!datas.id) {
            setError({ message: "Pre-exercise ID is missing" });
            return;
        }

        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("id", form.id);
            formData.append("lesson_id", form.id);
            formData.append("module_id", module_id);
            formData.append("file", form.file);
            formData.append("direction", form.direction);
            formData.append("exam_type", form.exam_type);
            formData.append("type", "pre-exercise");

            await store.dispatch(update_pre_exercise_thunk(formData, datas.id));
            await store.dispatch(get_module_by_id_thunk(module_id));
            setLoading(false);
            setOpen(false);
        } catch (error) {
            setLoading(false);
            setError({ message: "An error occurred" });
        }
    };


    return (
        <div>
            <Tooltip title="Update Pre-Exercise">
                <Button onClick={handleOpen} size="small" color="success">
                    <Edit />
                </Button>
            </Tooltip>

            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <div className="h-[88vh] overflow-auto">
                        <div className="flex items-center justify-center text-3xl font-black">
                            UPDATE PRE-EXERCISE
                        </div>

                        <div className="overflow w-full flex gap-4 flex-col">
                            <FormControl fullWidth error={!!error?.exam_type}>
                                <TextField
                                    label="Exam Type"
                                    name="exam_type"
                                    value={form.exam_type || ""}
                                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                {error?.exam_type && <FormHelperText>{error.exam_type}</FormHelperText>}
                            </FormControl>

                            <Button
                                component="label"
                                variant="contained"
                                startIcon={form?.file ? <Check /> : <CloudUpload />}
                            >
                                {form?.file ? form?.file?.name : "Upload files"}
                                <VisuallyHiddenInput
                                    name="file"
                                    type="file"
                                    onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
                                    accept="image/*"
                                />
                            </Button>

                            <div className="bg-white">
                                <div className="text-black p-3 font-black">Direction</div>
                                <ReactQuill
                                    theme="snow"
                                    value={form?.direction || ""}
                                    onChange={(value) => setForm({ ...form, direction: value })}
                                    className="text-black h-52"
                                />
                            </div>

                            {form.question.map((question, index) => (
                                <div key={index} className="flex flex-col gap-4 w-full border-b pb-4 mt-12">
                                    {question.exam_type === "True Or False" && <UpdateTrueOrFalse datas={question} />}
                                    {(question.exam_type === "Fill In The Blank" ||
                                        question.exam_type === "Matching" ||
                                        question.exam_type === "Identification") && (
                                            <UpdateIdentificationMatchingFillForm
                                                datas={question} Pass handleQuestionUpdate directly
                                            />
                                        )}
                                    {question.exam_type === "Multiple Choice" && <UpdateMultipleChoice datas={question} />}
                                </div>
                            ))}

                            <div className="mt-5">
                                <Button className="w-full" disabled={loading} variant="contained" onClick={submitForm}>
                                    SUBMIT
                                </Button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
