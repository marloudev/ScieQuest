import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
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
// import {
//     get_questionnaires_by_id_thunk,
//     get_questionnaires_thunk,
//     store_questionnaires_thunk,
// } from "../../../_redux/questionaires-thunk";
import { Check, CloudUpload } from "@mui/icons-material";
import { useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
    get_questionnaires_by_id_thunk,
    store_questionnaires_thunk,
} from "@/app/pages/admin/literacy_test/_redux/questionaires-thunk";
import moment from "moment";
import { get_exam_type_by_id_thunk, store_exam_type_thunk } from "../../redux/booklet-thunk";
// import {
//     get_examinations_thunk,
//     store_examinations_thunk,
// } from "../../_redux/literacy-test-thunk";

export default function CreateQuestionnaireSection() {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState({
        values: [
            {
                question: "",
                answer_key: "",
            },
        ],
        matches: [
            {
                column_a: "",
                column_b: "",
                answer_key: "",
            },
        ],
    });
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const module_id = window.location.pathname.split("/")[3];
    console.log("data", data);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (_, reason) => {
        if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
            setOpen(false);
        }
    };

    async function submit_form(params) {
        try {
            setLoading(true);
            const result = await store.dispatch(
                store_exam_type_thunk({
                    ...data,
                    module_id: module_id,
                    unique: moment().format("MMDDYYYYhhmmss"),
                }),
            );
            if (result.status == 200) {
               await store.dispatch(get_exam_type_by_id_thunk(module_id));
                setData({
                    values: [
                        {
                            question: "",
                            answer_key: "",
                        },
                    ],
                    matches: [
                        {
                            column_a: "",
                            column_b: "",
                            answer_key: "",
                        },
                    ],
                });
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
    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create Questionnaire
            </Button>
            <Dialog maxWidth="lg" fullWidth open={open} onClose={handleClose}>
                <Toolbar className="flex items-center justify-end">
                    <Typography
                        sx={{ ml: 2, flex: 1 }}
                        variant="h6"
                        component="div"
                    >
                        Create Questionnaire
                    </Typography>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <Toolbar className="flex-col gap-3 flex items-start justify-start w-full">
                    <div className="w-full flex gap-4 flex-col">
                        <FormControl fullWidth error={!!error?.exam_type}>
                            <InputLabel id="demo-simple-select-label">
                                Exam Type
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="type"
                                label="Exam Type"
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                value={data.type ?? ""}
                            >
                                <MenuItem selected disabled></MenuItem>
                                <MenuItem value="Fill In The Blank">
                                    Fill In The Blank
                                </MenuItem>
                                <MenuItem value="Multiple Choice">
                                    Multiple Choice
                                </MenuItem>
                                <MenuItem value="Matching">Matching</MenuItem>
                                <MenuItem value="Indentification">
                                    Indentification
                                </MenuItem>
                                <MenuItem value="True Or False">
                                    True Or False
                                </MenuItem>
                            </Select>
                            {error?.type && (
                                <FormHelperText>{error.type}</FormHelperText>
                            )}
                        </FormControl>
                        {(data.type == "Fill In The Blank" ||
                            data.type == "Indentification") && (
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                startIcon={
                                    data?.file ? <Check /> : <CloudUpload />
                                }
                            >
                                {data?.file ? data?.file.name : "Upload files"}
                                <VisuallyHiddenInput
                                    name="file"
                                    type="file"
                                    // onChange={(event) => console.log(event.target.files)}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            [e.target.name]:
                                                URL.createObjectURL(
                                                    e.target.files[0],
                                                ),
                                        })
                                    }
                                    accept="image/*"
                                />
                            </Button>
                        )}

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
                    </div>
                    <div className="flex w-full items-end justify-end">
                        <div className="mt-12">
                            {(data.type == "Multiple Choice" ||
                                data.type == "Fill In The Blank" ||
                                data.type == "Indentification" ||
                                data.type == "True Or False") && (
                                <Button
                                    variant="contained"
                                    autoFocus
                                    onClick={() =>
                                        setData({
                                            ...data,
                                            values: [
                                                ...data.values,
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
                            {data.type == "Matching" && (
                                <Button
                                    variant="contained"
                                    autoFocus
                                    onClick={() =>
                                        setData({
                                            ...data,
                                            matches: [
                                                ...data.matches,
                                                {
                                                    column_a: "",
                                                    column_b: "",
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
                    </div>

                    {data.type == "True Or False" &&
                        data.values.map((res, i) => {
                            return (
                                <div
                                    key={i}
                                    className="flex flex-col gap-4 w-full border-b pb-4"
                                >
                                    <div className="flex items-center justify-between w-full">
                                        {i != 0 && (
                                            <div className="flex items-end justify-end">
                                                <Button
                                                    variant="outlined"
                                                    color="error"
                                                    onClick={() =>
                                                        setData({
                                                            ...data,
                                                            values: data.values.filter(
                                                                (_, index) =>
                                                                    index !== i,
                                                            ),
                                                        })
                                                    }
                                                >
                                                    Delete Field
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex gap-3 w-full">
                                        <TextField
                                            multiline
                                            rows={3}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    values: data.values.map(
                                                        (item, index) =>
                                                            index === i
                                                                ? {
                                                                      ...item,
                                                                      question:
                                                                          e
                                                                              .target
                                                                              .value,
                                                                  }
                                                                : item,
                                                    ),
                                                })
                                            }
                                            error={!!error?.[`question-${i}`]}
                                            helperText={
                                                error?.[`question-${i}`] ?? ""
                                            }
                                            value={res.question}
                                            name={`question-${i}`}
                                            type="text"
                                            label={`Question-${i + 1}`}
                                            variant="outlined"
                                            className="w-full"
                                        />
                                        <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label">
                                                Answer Key
                                            </FormLabel>
                                            <RadioGroup
                                                row
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        values: data.values.map(
                                                            (item, index) =>
                                                                index === i
                                                                    ? {
                                                                          ...item,
                                                                          answer_key:
                                                                              e
                                                                                  .target
                                                                                  .value,
                                                                      }
                                                                    : item,
                                                        ),
                                                    })
                                                }
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="answer_key"
                                            >
                                                <FormControlLabel
                                                    value="true"
                                                    control={<Radio />}
                                                    label="True"
                                                />
                                                <FormControlLabel
                                                    value="false"
                                                    control={<Radio />}
                                                    label="False"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </div>
                            );
                        })}
                    {(data.type == "Fill In The Blank" ||
                        data.type == "Indentification") &&
                        data.values.map((res, i) => {
                            return (
                                <div
                                    key={i}
                                    className="flex flex-col gap-4 w-full border-b pb-4"
                                >
                                    <div className="flex items-center justify-between w-full">
                                        {i != 0 && (
                                            <div className="flex items-end justify-end">
                                                <Button
                                                    variant="outlined"
                                                    color="error"
                                                    onClick={() =>
                                                        setData({
                                                            ...data,
                                                            values: data.values.filter(
                                                                (_, index) =>
                                                                    index !== i,
                                                            ),
                                                        })
                                                    }
                                                >
                                                    Delete Field
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex gap-3 w-full">
                                        <TextField
                                            multiline
                                            rows={2}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    values: data.values.map(
                                                        (item, index) =>
                                                            index === i
                                                                ? {
                                                                      ...item,
                                                                      question:
                                                                          e
                                                                              .target
                                                                              .value,
                                                                  }
                                                                : item,
                                                    ),
                                                })
                                            }
                                            error={!!error?.[`question-${i}`]}
                                            helperText={
                                                error?.[`question-${i}`] ?? ""
                                            }
                                            value={res.question}
                                            name={`question-${i}`}
                                            type="text"
                                            label={`Question-${i + 1}`}
                                            variant="outlined"
                                            className="w-full"
                                        />

                                        <TextField
                                            multiline
                                            rows={2}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    values: data.values.map(
                                                        (item, index) =>
                                                            index === i
                                                                ? {
                                                                      ...item,
                                                                      answer_key:
                                                                          e
                                                                              .target
                                                                              .value,
                                                                  }
                                                                : item,
                                                    ),
                                                })
                                            }
                                            error={!!error?.[`answer_key-${i}`]}
                                            helperText={
                                                error?.[`answer_key-${i}`] ?? ""
                                            }
                                            value={res.answer_key}
                                            name={`answer_key-${i}`}
                                            type="text"
                                            label={`Answer Key-${i + 1}`}
                                            variant="outlined"
                                            className="w-full"
                                        />
                                    </div>

                                    {/* <TextField
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            values: data.values.map(
                                                (item, index) =>
                                                    index === i
                                                        ? {
                                                              ...item,
                                                              answer: e.target
                                                                  .value,
                                                          }
                                                        : item,
                                            ),
                                        })
                                    }
                                    error={!!error?.[`answer-${i}`]}
                                    helperText={error?.[`answer-${i}`] ?? ""}
                                    value={res.answer}
                                    name={`answer-${i}`}
                                    type="text"
                                    label={`Answer ${i + 1}`}
                                    variant="outlined"
                                    className="w-full"
                                /> */}
                                </div>
                            );
                        })}

                    {data.type == "Matching" &&
                        data.matches.map((res, i) => {
                            return (
                                <div
                                    key={i}
                                    className="flex flex-col gap-4 w-full border-b pb-4"
                                >
                                    <div className="flex items-center justify-between w-full">
                                        {i != 0 && (
                                            <div className="flex items-end justify-end">
                                                <Button
                                                    variant="outlined"
                                                    color="error"
                                                    onClick={() =>
                                                        setData({
                                                            ...data,
                                                            matches:
                                                                data.matches.filter(
                                                                    (
                                                                        _,
                                                                        index,
                                                                    ) =>
                                                                        index !==
                                                                        i,
                                                                ),
                                                        })
                                                    }
                                                >
                                                    Delete Field
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex gap-3 w-full">
                                        <TextField
                                            multiline
                                            rows={2}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    matches: data.matches.map(
                                                        (item, index) =>
                                                            index === i
                                                                ? {
                                                                      ...item,
                                                                      column_a:
                                                                          e
                                                                              .target
                                                                              .value,
                                                                  }
                                                                : item,
                                                    ),
                                                })
                                            }
                                            error={!!error?.[`column_a-${i}`]}
                                            helperText={
                                                error?.[`column_a-${i}`] ?? ""
                                            }
                                            value={res.column_a}
                                            name={`column_a-${i}`}
                                            type="text"
                                            label={`Column A-${i + 1}`}
                                            variant="outlined"
                                            className="w-full"
                                        />

                                        <TextField
                                            multiline
                                            rows={2}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    matches: data.matches.map(
                                                        (item, index) =>
                                                            index === i
                                                                ? {
                                                                      ...item,
                                                                      column_b:
                                                                          e
                                                                              .target
                                                                              .value,
                                                                  }
                                                                : item,
                                                    ),
                                                })
                                            }
                                            error={!!error?.[`column_b-${i}`]}
                                            helperText={
                                                error?.[`column_b-${i}`] ?? ""
                                            }
                                            value={res.column_b}
                                            name={`column_b-${i}`}
                                            type="text"
                                            label={`Column B-${i + 1}`}
                                            variant="outlined"
                                            className="w-full"
                                        />
                                        <TextField
                                            multiline
                                            rows={2}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    matches: data.matches.map(
                                                        (item, index) =>
                                                            index === i
                                                                ? {
                                                                      ...item,
                                                                      answer_key:
                                                                          e
                                                                              .target
                                                                              .value,
                                                                  }
                                                                : item,
                                                    ),
                                                })
                                            }
                                            error={!!error?.[`answer_key-${i}`]}
                                            helperText={
                                                error?.[`answer_key-${i}`] ?? ""
                                            }
                                            value={res.answer_key}
                                            name={`answer_key-${i}`}
                                            type="text"
                                            label={`Answer Key-${i + 1}`}
                                            variant="outlined"
                                            className="w-full"
                                        />
                                    </div>

                                    {/* <TextField
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            values: data.values.map(
                                                (item, index) =>
                                                    index === i
                                                        ? {
                                                              ...item,
                                                              answer: e.target
                                                                  .value,
                                                          }
                                                        : item,
                                            ),
                                        })
                                    }
                                    error={!!error?.[`answer-${i}`]}
                                    helperText={error?.[`answer-${i}`] ?? ""}
                                    value={res.answer}
                                    name={`answer-${i}`}
                                    type="text"
                                    label={`Answer ${i + 1}`}
                                    variant="outlined"
                                    className="w-full"
                                /> */}
                                </div>
                            );
                        })}

                    {data.type == "Multiple Choice" &&
                        data.values.map((res, i) => {
                            return (
                                <div
                                    key={i}
                                    className="flex flex-col gap-4 w-full border-b pb-4"
                                >
                                    <div className="flex items-center justify-between w-full">
                                        <FormControl
                                            error={!!error?.answer_key}
                                        >
                                            <FormLabel id={`answer-key-${i}`}>
                                                Answer Key {i + 1}
                                            </FormLabel>
                                            <RadioGroup
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        values: data.values.map(
                                                            (item, index) =>
                                                                index === i
                                                                    ? {
                                                                          ...item,
                                                                          answer_key:
                                                                              e
                                                                                  .target
                                                                                  .value,
                                                                      }
                                                                    : item,
                                                        ),
                                                    })
                                                }
                                                row
                                                aria-labelledby={`answer-key-${i}`}
                                                name="answer_key"
                                                value={res.answer_key}
                                            >
                                                <FormControlLabel
                                                    value="A"
                                                    control={<Radio />}
                                                    label="A"
                                                />
                                                <FormControlLabel
                                                    value="B"
                                                    control={<Radio />}
                                                    label="B"
                                                />
                                                <FormControlLabel
                                                    value="C"
                                                    control={<Radio />}
                                                    label="C"
                                                />
                                                <FormControlLabel
                                                    value="D"
                                                    control={<Radio />}
                                                    label="D"
                                                />
                                            </RadioGroup>
                                            {error?.answer_key && (
                                                <FormHelperText>
                                                    {error.answer_key}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                        {i != 0 && (
                                            <div className="flex items-end justify-end">
                                                <Button
                                                    variant="outlined"
                                                    color="error"
                                                    onClick={() =>
                                                        setData({
                                                            ...data,
                                                            values: data.values.filter(
                                                                (_, index) =>
                                                                    index !== i,
                                                            ),
                                                        })
                                                    }
                                                >
                                                    Delete Field
                                                </Button>
                                            </div>
                                        )}
                                    </div>

                                    <TextField
                                        multiline
                                        rows={3}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                values: data.values.map(
                                                    (item, index) =>
                                                        index === i
                                                            ? {
                                                                  ...item,
                                                                  question:
                                                                      e.target
                                                                          .value,
                                                              }
                                                            : item,
                                                ),
                                            })
                                        }
                                        error={!!error?.[`question-${i}`]}
                                        helperText={
                                            error?.[`question-${i}`] ?? ""
                                        }
                                        value={res.question}
                                        name={`question-${i}`}
                                        type="text"
                                        label={`Question ${i + 1}`}
                                        variant="outlined"
                                        className="w-full"
                                    />

                                    {/* <TextField
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            values: data.values.map(
                                                (item, index) =>
                                                    index === i
                                                        ? {
                                                              ...item,
                                                              answer: e.target
                                                                  .value,
                                                          }
                                                        : item,
                                            ),
                                        })
                                    }
                                    error={!!error?.[`answer-${i}`]}
                                    helperText={error?.[`answer-${i}`] ?? ""}
                                    value={res.answer}
                                    name={`answer-${i}`}
                                    type="text"
                                    label={`Answer ${i + 1}`}
                                    variant="outlined"
                                    className="w-full"
                                /> */}
                                </div>
                            );
                        })}

                    {/* <div className="flex gap-3 w-full">
                      
                        <TextField
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            error={error?.b ? true : false}
                            helperText={error?.b ?? ""}
                            name="b"
                            type="text"
                            id="outlined-basic"
                            label="Answer B"
                            variant="outlined"
                            className="w-full"
                        />
                    </div>
                    <div className="flex gap-3 w-full">
                       
                        <TextField
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            error={error?.c ? true : false}
                            helperText={error?.c ?? ""}
                            name="c"
                            type="text"
                            id="outlined-basic"
                            label="Answer C"
                            variant="outlined"
                            className="w-full"
                        />
                    </div>
                    <div className="flex gap-3 w-full">
                       
                        <TextField
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            error={error?.d ? true : false}
                            helperText={error?.d ?? ""}
                            name="d"
                            type="text"
                            id="outlined-basic"
                            label="Answer D"
                            variant="outlined"
                            className="w-full"
                        />
                    </div> */}
                    <div className="mt-6 flex w-full items-end justify-end">
                        <Toolbar>
                            <Typography
                                sx={{ ml: 2, flex: 1 }}
                                variant="h6"
                                component="div"
                            ></Typography>
                            <Button
                                disabled={loading}
                                variant="contained"
                                autoFocus
                                onClick={submit_form}
                            >
                                save
                            </Button>
                        </Toolbar>
                    </div>
                </Toolbar>
            </Dialog>
        </React.Fragment>
    );
}
