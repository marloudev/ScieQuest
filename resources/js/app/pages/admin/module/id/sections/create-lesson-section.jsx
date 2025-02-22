import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Add, Check, CloudUpload } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import store from "@/app/pages/store/store";
import { store_lesson_thunk } from "../../redux/lesson-thunk";
import { useEffect } from "react";
import { get_module_by_id_thunk } from "../../redux/booklet-thunk";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

export default function CreateLessonSection() {
    const [open, setOpen] = React.useState(false);

    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        module_id: "",
        subject_matter: "",
        discussion: "",
        link: "",
        file: "",
    });

    const module_id = window.location.pathname.split("/")[3];
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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

    async function submit_form(params) {
        try {
            setLoading(true);

            const formData = new FormData();
            formData.append("lesson", JSON.stringify(data));
            formData.append("file", data.file);
            formData.append("module_id", module_id);

            const result = await store.dispatch(store_lesson_thunk(formData));
            if (result.status == 200) {
                store.dispatch(get_module_by_id_thunk(module_id));
                setLoading(false);
                setOpen(false);
                setData({
                    subject_matter: "",
                    discussion: "",
                    link: "",
                    file: "",
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

    return (
        <div>
            {/* <Button variant="contained" onClick={handleOpen}>
                CREATE LESSON
            </Button> */}
            <button
                type="button"
                onClick={handleOpen}
                className="flex items-center justify-center text-lg p-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-sans"
            >
                <Add />
                <b>Create Lesson</b>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
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
                        <div className="text-black  font-black">
                            Discussions
                        </div>
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
                </Box>
            </Modal>
        </div>
    );
}
