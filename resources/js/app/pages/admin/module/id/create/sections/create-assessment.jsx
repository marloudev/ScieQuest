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
import { Check, CloudUpload } from "@mui/icons-material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
    get_questionnaires_by_id_thunk,
    store_questionnaires_thunk,
} from "@/app/pages/admin/literacy_test/_redux/questionaires-thunk";
import moment from "moment";
import {
    get_exam_type_by_id_thunk,
    store_exam_type_thunk,
} from "../../../redux/booklet-thunk";
import { router } from "@inertiajs/react";

export default function CreateAssessment() {
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
                router.visit(`/administrator/modules/${module_id}/create`)
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
                        error={!!error?.[`subject_matters`]}
                        helperText={error?.[`subject_matters`] ?? ""}
                        value={data.subject_matters}
                        name={`subject_matters`}
                        type="text"
                        label={`Subject Matters`}
                        variant="outlined"
                        className="w-full"
                    />
                    <div className="text-black  font-black">Discussions</div>
                    <ReactQuill
                        theme="snow"
                        //   value={value}
                        className="text-black  h-52"
                        onChange={(e) =>
                            setData({
                                ...data,
                                discussions: e,
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
                            <MenuItem value="Identification">
                                Identification
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
                        data.type == "Identification") && (
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            startIcon={data?.file ? <Check /> : <CloudUpload />}
                        >
                            {data?.file ? data?.file.name : "Upload files"}
                            <VisuallyHiddenInput
                                name="file"
                                type="file"
                                // onChange={(event) => console.log(event.target.files)}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        [e.target.name]: URL.createObjectURL(
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
                            data.type == "Identification" ||
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
                    data.type == "Identification") &&
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
                                                                      e.target
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
                                                matches: data.matches.map(
                                                    (item, index) =>
                                                        index === i
                                                            ? {
                                                                  ...item,
                                                                  column_a:
                                                                      e.target
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
                                                                      e.target
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
                                                                      e.target
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
                                    <FormControl error={!!error?.answer_key}>
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
                                    helperText={error?.[`question-${i}`] ?? ""}
                                    value={res.question}
                                    name={`question-${i}`}
                                    type="text"
                                    label={`Question ${i + 1}`}
                                    variant="outlined"
                                    className="w-full"
                                />
                            </div>
                        );
                    })}

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
        </div>
    );
}
