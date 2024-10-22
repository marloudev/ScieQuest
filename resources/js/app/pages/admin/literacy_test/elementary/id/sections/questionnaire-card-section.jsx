import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import {
    CardMedia,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import DeleteQuestionnaireSection from "./delete-questionnaire-section";

const bull = (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);

export default function QuestionnaireCardSection() {
    const { questionnaires } = useSelector((store) => store.questionnaires);
    console.log("questionnaires", questionnaires.data);
    return (
        <div className="flex flex-col gap-5">
            {questionnaires?.data?.map((res, i) => {
                return (
                    <>
                        <div className="flex w-full items-end justify-end">
                            <DeleteQuestionnaireSection data={res} />
                        </div>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="body2">
                                    <div className="flex gap-4">
                                        {i + 1}. {res.question}
                                    </div>
                                    <br />
                                </Typography>
                            </CardContent>

                            <Typography
                                className="px-4"
                                sx={{ color: "text.secondary", mb: 1.5 }}
                            >
                                Specification: {res.specification}
                            </Typography>
                            <div className="w-1/5">
                                {res?.image_header && (
                                    <CardMedia
                                        component="img"
                                        height="full"
                                        width="25"
                                        image={res?.image_header}
                                        alt="Your Image Description"
                                    />
                                )}
                            </div>

                            <CardActions>
                                <div className="flex items-start justify-start w-full px-3">
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label">
                                            Answer Key
                                        </FormLabel>
                                        <RadioGroup
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    [e.target.name]:
                                                        e.target.value,
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
                                                checked={res.answer_key == "A"}
                                                disabled={res.answer_key != "A"}
                                            />{" "}
                                            <div className="w-1/5">
                                                {res?.image_header && (
                                                    <CardMedia
                                                        component="img"
                                                        height="full"
                                                        width="25"
                                                        image={res?.image_a}
                                                        alt="Your Image Description"
                                                    />
                                                )}
                                            </div>
                                            <FormControlLabel
                                                value="B"
                                                control={<Radio />}
                                                label="B"
                                                checked={res.answer_key == "B"}
                                                disabled={res.answer_key != "B"}
                                            />
                                            <div className="w-1/5">
                                                {res?.image_header && (
                                                    <CardMedia
                                                        component="img"
                                                        height="full"
                                                        width="25"
                                                        image={res?.image_a}
                                                        alt="Your Image Description"
                                                    />
                                                )}
                                            </div>
                                            <FormControlLabel
                                                value="C"
                                                control={<Radio />}
                                                label="C"
                                                checked={res.answer_key == "C"}
                                                disabled={res.answer_key != "C"}
                                            />
                                            <div className="w-1/5">
                                                {res?.image_header && (
                                                    <CardMedia
                                                        component="img"
                                                        height="full"
                                                        width="25"
                                                        image={res?.image_a}
                                                        alt="Your Image Description"
                                                    />
                                                )}
                                            </div>
                                            <FormControlLabel
                                                value="D"
                                                control={<Radio />}
                                                label="D"
                                                checked={res.answer_key == "D"}
                                                disabled={res.answer_key != "D"}
                                            />
                                            <div className="w-1/5">
                                                {res?.image_header && (
                                                    <CardMedia
                                                        component="img"
                                                        height="full"
                                                        width="25"
                                                        image={res?.image_a}
                                                        alt="Your Image Description"
                                                    />
                                                )}
                                            </div>
                                            <FormControlLabel
                                                value="E"
                                                control={<Radio />}
                                                label="E"
                                                checked={res.answer_key == "E"}
                                                disabled={res.answer_key != "E"}
                                            />
                                            <div className="w-1/5">
                                                {res?.image_header && (
                                                    <CardMedia
                                                        component="img"
                                                        height="full"
                                                        width="25"
                                                        image={res?.image_a}
                                                        alt="Your Image Description"
                                                    />
                                                )}
                                            </div>
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </CardActions>
                        </Card>
                    </>
                );
            })}
        </div>
    );
}
