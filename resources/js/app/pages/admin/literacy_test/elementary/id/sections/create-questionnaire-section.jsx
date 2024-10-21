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
    get_questionnaires_thunk,
    store_questionnaires_thunk,
} from "../../../_redux/questionaires-thunk";
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
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function submit_form(params) {
        try {
            setLoading(true);
            const result = await store.dispatch(
                store_questionnaires_thunk({
                    ...data,
                    examination_id: examination_id,
                }),
            );
            if (result.status == 200) {
                await store.dispatch(get_questionnaires_thunk());
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
    console.log("data", data);
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
                <Toolbar className="flex-col gap-3 flex">
                    <TextField
                        onChange={(e) =>
                            setData({
                                ...data,
                                [e.target.name]: e.target.value,
                            })
                        }
                        error={error?.question ? true : false}
                        helperText={error?.question ?? ""}
                        name="question"
                        type="text"
                        id="outlined-basic"
                        label="Question"
                        variant="outlined"
                        className="w-full"
                        multiline
                        rows={2}
                    />
                    <div className="flex items-start justify-start w-full">
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
                            {/* Uncomment and use the map to dynamically render options from departments */}
                            {/* departments.data.map((res, i) => (
            <MenuItem key={i} value={res.id}>{res.name}</MenuItem>
        )) */}
                            <MenuItem value="aaaa">aaaa</MenuItem>
                            <MenuItem value="bbbb">bbbb</MenuItem>
                            <MenuItem value="cccc">cccc</MenuItem>
                        </Select>
                        {error?.specification && (
                            <FormHelperText>
                                {error.specification}
                            </FormHelperText>
                        )}
                    </FormControl>
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
