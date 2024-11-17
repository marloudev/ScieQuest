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
import { useState } from "react";
import store from "@/app/pages/store/store";
import { store_answers_thunk } from "@/app/pages/admin/students/redux/students-thunk";
import moment from "moment";
import { get_user_login_thunk } from "@/app/redux/app-thunk";


export default function QuestionnaireCardSection() {
    const { questionnaires } = useSelector((store) => store.questionnaires);
    const { booklet } = useSelector((store) => store.booklets);
    const { user } = useSelector((store) => store.app);
    const [data, setData] = useState([]);
    const booklet_id = window.location.pathname.split("/")[3];
    const HtmlRenderer = ({ htmlContent }) => (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );

    const handleOptionChange = (dataValue, value) => {

        setData((prevData) => {
            // Ensure answers is always an array, defaulting to an empty array if undefined
            const answers = prevData.answers || [];

            const existingAnswerIndex = answers.findIndex(
                (answer) => answer.questionnaire_id === dataValue.id
            );

            let updatedAnswers;

            if (existingAnswerIndex !== -1) {
                // Update the existing answer
                updatedAnswers = answers.map((answer, index) =>
                    index === existingAnswerIndex
                        ? { ...answer, answer: value, isCorrect: dataValue.answer_key === value }
                        : answer
                );
            } else {
                // Add new answer if questionnaire_id does not exist
                updatedAnswers = [
                    ...answers,
                    {
                        questionnaire_id: dataValue.id,
                        answer: value,
                        isCorrect: dataValue.answer_key === value // Check if the new answer is correct
                    }
                ];
            }

            return {
                ...prevData,
                answers: updatedAnswers,
            };
        });
    };

    console.log(data)


    function submit_answer(params) {
        store.dispatch(store_answers_thunk({
            ...data,
            user,
            date: moment().format('LLLL'),
            als_level: booklet.als_level,
            booklet_id:booklet_id
        }))
        store.dispatch(get_user_login_thunk())
    }
console.log('data',booklet.als_level)
    return (
        <div className="flex flex-col gap-5">
            {booklet.examinations?.map((res, i) => {

                return (
                    <Card key={i} sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="body2">
                                <div className="flex gap-2 flex-col">
                                    <div className="text-2xl font-black">
                                        {res.title}
                                    </div>
                                    <div className="text-xl">
                                        {res.sub_title}
                                    </div>

                                </div>
                            </Typography>
                        </CardContent>

                        {
                            res.question.map((ress, i) => {
                                let find_answer = {};
                                if (user?.score_sheet?.answers && ress.id) {
                                    find_answer = user.score_sheet.answers.find(answer => answer.questionnaire_id === ress.id);
                                }
                                return <div className="px-3" key={i}>
                                    <div className="flex gap-3">
                                        <div>
                                            {ress.item_number}.
                                        </div>
                                        <div className="-mt-4">
                                            <HtmlRenderer htmlContent={ress.question} />
                                        </div>
                                    </div>
                                    {ress.image_header && (
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={ress.image_header}
                                            alt="Question header image"
                                        />
                                    )}

                                    <CardActions>
                                        <div className="flex items-start justify-start w-full px-3">
                                            <FormControl>
                                                <RadioGroup
                                                    onChange={(e) =>
                                                        // setData({
                                                        //     ...data,
                                                        //     [e.target.name]:
                                                        //         e.target.value,
                                                        // })
                                                        handleOptionChange(ress, e.target.value)
                                                    }
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="answer_key"
                                                >
                                                    <FormControlLabel
                                                        value="A"
                                                        control={<Radio />}
                                                        label="A"

                                                        checked={find_answer?.answer == "A" ? true : undefined}
                                                        disabled={find_answer?.answer == "A" ? true : false}
                                                    />{" "}
                                                    <div className="w-1/5">
                                                        {ress?.image_header && (
                                                            <CardMedia
                                                                component="img"
                                                                height="full"
                                                                width="25"
                                                                image={ress?.image_a}
                                                                alt="Your Image Description"
                                                            />
                                                        )}
                                                        {ress.a}
                                                    </div>
                                                    <FormControlLabel
                                                        value="B"
                                                        control={<Radio />}
                                                        label="B"
                                                        checked={find_answer?.answer == "B" ? true : undefined}
                                                        disabled={find_answer?.answer == "B" ? true : false}
                                                    />
                                                    <div className="w-1/5">
                                                        {ress?.image_header && (
                                                            <CardMedia
                                                                component="img"
                                                                height="full"
                                                                width="25"
                                                                image={ress?.image_b}
                                                                alt="Your Image Description"
                                                            />
                                                        )}
                                                        {ress.b}
                                                    </div>
                                                    <FormControlLabel
                                                        value="C"
                                                        control={<Radio />}
                                                        label="C"
                                                        checked={find_answer?.answer == "C" ? true : undefined}
                                                        disabled={find_answer?.answer == "C" ? true : false}
                                                    />
                                                    <div className="w-1/5">
                                                        {ress?.image_header && (
                                                            <CardMedia
                                                                component="img"
                                                                height="full"
                                                                width="25"
                                                                image={ress?.image_c}
                                                                alt="Your Image Description"
                                                            />
                                                        )}
                                                        {ress.c}
                                                    </div>
                                                    <FormControlLabel
                                                        value="D"
                                                        control={<Radio />}
                                                        label="D"
                                                        checked={find_answer?.answer == "D" ? true : undefined}
                                                        disabled={find_answer?.answer == "D" ? true : false}
                                                    />
                                                    <div className="w-1/5">
                                                        {ress?.image_header && (
                                                            <CardMedia
                                                                component="img"
                                                                height="full"
                                                                width="25"
                                                                image={ress?.image_d}
                                                                alt="Your Image Description"
                                                            />
                                                        )}
                                                        {ress.d}
                                                    </div>
                                                    {/* <FormControlLabel
                                                        value="E"
                                                        control={<Radio />}
                                                        label="E"
                                                        // checked={ress.answer_key == "A"}
                                                        checked={find_answer?.answer == "E" ? true : undefined}
                                                        disabled={find_answer?.answer == "E" ? true : false}
                                                    />
                                                    <div className="w-1/5">
                                                        {ress?.image_header && (
                                                            <CardMedia
                                                                component="img"
                                                                height="full"
                                                                width="25"
                                                                image={ress?.image_a}
                                                                alt="Your Image Description"
                                                            />
                                                        )}
                                                        {ress.e}
                                                    </div> */}
                                                </RadioGroup>
                                            </FormControl>
                                        </div>
                                    </CardActions>
                                </div>
                            })
                        }

                    </Card>
                )
            })}

            {
                !user.score_sheet && <Button
                    onClick={submit_answer}
                    variant="contained">
                    SUBMIT ANSWER
                </Button>
            }
        </div>
    );
}
