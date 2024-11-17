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
import { styled } from '@mui/material/styles';

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
import {
    get_questionnaires_by_id_thunk,
    get_questionnaires_thunk,
    store_questionnaires_thunk,
} from "../../../_redux/questionaires-thunk";
import { Check, CloudUpload } from "@mui/icons-material";
import { useSelector } from "react-redux";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import {
//     get_examinations_thunk,
//     store_examinations_thunk,
// } from "../../_redux/literacy-test-thunk";

export default function CreateQuestionnaireSection() {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const examination_id = window.location.pathname.split("/")[4];
    const { specifications } = useSelector((store) => store.questionnaires);
    console.log('specification', data)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    async function submit_form(params) {
        const fd = new FormData()
        fd.append('examination_id', examination_id)
        if (data.question) {
            fd.append('question', data.question)
        }
        if (data.answer_key) {
            fd.append('answer_key', data.answer_key)
        }
        if (data.specification) {
            fd.append('specification', data.specification)
        }
        if (data.a) {
            fd.append('a', data.a)
        }
        if (data.b) {
            fd.append('b', data.b)
        }
        if (data.c) {
            fd.append('c', data.c)
        }
        if (data.d) {
            fd.append('d', data.d)
        }
        fd.append('e', data.e)
        fd.append('title', data.title)
        fd.append('item_number', data.item_number)
        fd.append('image_a', data.image_a)
        fd.append('image_b', data.image_b)
        fd.append('image_c', data.image_c)
        fd.append('image_d', data.image_d)
        fd.append('image_e', data.image_e)
        fd.append('image_header', data.image_header)

        try {
            setLoading(true);
            const result = await store.dispatch(
                store_questionnaires_thunk(fd),
            );
            if (result.status == 200) {
                await store.dispatch(get_questionnaires_by_id_thunk(examination_id));
                setData({});
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



    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create Questionnaire
            </Button>
            <Dialog fullWidth open={open} onClose={handleClose}>
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
                        <TextField
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            error={error?.title ? true : false}
                            helperText={error?.title ?? ""}
                            name="title"
                            type="text"
                            id="outlined-basic"
                            label="Title"
                            variant="outlined"
                            className="w-full"
                        />
                        <TextField
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            error={error?.item_number ? true : false}
                            helperText={error?.item_number ?? ""}
                            name="item_number"
                            type="number"
                            id="outlined-basic"
                            label="Item Number"
                            variant="outlined"
                            className="w-full"
                        />
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"

                            startIcon={data?.image_header ? <Check /> : <CloudUpload />}
                        >
                            {
                                data?.image_header ? data?.image_header.name : "Upload files"
                            }
                            <VisuallyHiddenInput
                                name="image_header"
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

                        <div className="bg-white ">
                            {
                                error?.question && <div className="text-red-600">
                                    {error?.question}
                                </div>
                            }
                            <div className="text-black p-3 font-black">
                                Questions
                            </div>
                            <ReactQuill theme="snow"
                                //   value={value} 
                                className="text-black  h-52"
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        question: e,
                                    })
                                } />
                        </div>


                    </div>
                    <div className="flex items-start justify-start w-full mt-12">
                        <FormControl error={!!error?.answer_key}>
                            <FormLabel id="demo-row-radio-buttons-group-label">
                                Answer Key
                            </FormLabel>
                            <RadioGroup
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="answer_key"
                            >

                                <div>
                                    <FormControlLabel
                                        value="A"
                                        control={<Radio />}
                                        label="A"
                                    />
                                </div>

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
                                <FormControlLabel
                                    value="E"
                                    control={<Radio />}
                                    label="E"
                                />
                            </RadioGroup>
                            {error?.answer_key && (
                                <FormHelperText>
                                    {error.answer_key}
                                </FormHelperText>
                            )}
                        </FormControl>
                    </div>

                    <FormControl fullWidth error={!!error?.specification}>
                        <InputLabel id="demo-simple-select-label">
                            Specification
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="specification"
                            label="Specification"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            value={data.specification ?? ""}
                        >
                            <MenuItem selected disabled></MenuItem>
                            {/* Uncomment and use the map to dynamically render options from departments */}
                            {specifications.data.map((res, i) => (
                                <MenuItem key={i} value={res.specification}>{res.specification}</MenuItem>
                            ))}
                            {/* <MenuItem value="aaaa">aaaa</MenuItem>
                            <MenuItem value="bbbb">bbbb</MenuItem>
                            <MenuItem value="cccc">cccc</MenuItem> */}
                        </Select>
                        {error?.specification && (
                            <FormHelperText>
                                {error.specification}
                            </FormHelperText>
                        )}
                    </FormControl>
                    {data?.image_a?.name ?? ''}
                    <div className="flex gap-3 w-full">
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            startIcon={data?.image_a ? <Check /> : <CloudUpload />}
                        >
                            <VisuallyHiddenInput
                                name="image_a"
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
                        <TextField
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            error={error?.a ? true : false}
                            helperText={error?.a ?? ""}
                            name="a"
                            type="text"
                            id="outlined-basic"
                            label="Answer A"
                            variant="outlined"
                            className="w-full"
                        />
                    </div>
                    {data?.image_b?.name ?? ''}
                    <div className="flex gap-3 w-full">
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            startIcon={data?.image_b ? <Check /> : <CloudUpload />}
                        >
                            <VisuallyHiddenInput
                                name="image_b"
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
                    {data?.image_c?.name ?? ''}
                    <div className="flex gap-3 w-full">
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            startIcon={data?.image_c ? <Check /> : <CloudUpload />}
                        >
                            <VisuallyHiddenInput
                                name="image_c"
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
                    {data?.image_d?.name ?? ''}
                    <div className="flex gap-3 w-full">
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            startIcon={data?.image_d ? <Check /> : <CloudUpload />}
                        >
                            <VisuallyHiddenInput
                                name="image_d"
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
                    </div>
                    {data?.image_e?.name ?? ''}
                    <div className="flex gap-3 w-full">
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            startIcon={data?.image_e ? <Check /> : <CloudUpload />}
                        >
                            <VisuallyHiddenInput
                                name="image_e"
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
                        <TextField
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            error={error?.e ? true : false}
                            helperText={error?.e ?? ""}
                            name="e"
                            type="text"
                            id="outlined-basic"
                            label="Answer E"
                            variant="outlined"
                            className="w-full"
                        />
                    </div>
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
