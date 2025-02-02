import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import {
    Add,
    ArrowDownwardOutlined,
    ArrowUpwardOutlined,
} from "@mui/icons-material";
import { router } from "@inertiajs/react";
import CreatePreExerciseSection from "./create-pre-exercise-section";
import CreateAssessmentSection from "./create-assessment-section";
import MultipleChoiceComponent from "../components/multiple-choice-component";
import FillInTheBlankComponent from "../components/fill-in-the-blank-component";
import TrueOrFalseComponent from "../components/true-or-false-component";
import IdentificationComponent from "../components/identification-component";
import MatchingComponent from "../components/matching-component";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
    transform: ({ expand }) => (expand ? "rotate(180deg)" : "rotate(0deg)"),
}));

const htmlToText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.innerText;
};

export default function AssessmentCardSection() {
    const { booklet } = useSelector((store) => store.booklets);
    const [expandedIndex, setExpandedIndex] = React.useState(null); // Track expanded card
    const module_id = window.location.pathname.split("/")[3];

    const handleExpandClick = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle expand/collapse
    };

    console.log("lessonssss", booklet);

    return (
        <div className="w-full flex flex-col gap-5">
            {booklet?.lessons &&
                booklet?.lessons?.map((res, i) => {
                    const htmlString = res.direction; // The direction content you want to display
                    return (
                        <div
                            className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow"
                            key={i}
                        >
                            <div className="w-full py-2 items-center justify-center flex rounded-lg bg-slate-200">
                                <img
                                    src={res?.file}
                                    className="h-24 flex items-center justify-center"
                                    alt=""
                                />
                            </div>
                            <div className="">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                        {res?.subject_matter}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700">
                                    Demo Link:{" "}
                                    {res?.link ? (
                                        <a
                                            href={res.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {res.link}
                                        </a>
                                    ) : (
                                        "No link available"
                                    )}
                                </p>
                            </div>

                            {/* Toggle Button */}
                            <div className="flex items-center justify-between">
                                <div
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                    onClick={() => handleExpandClick(i)}
                                >
                                    <b>Read more &nbsp;</b>
                                    {/* Conditionally render the correct arrow icon */}
                                    {expandedIndex === i ? (
                                        <ArrowUpwardOutlined />
                                    ) : (
                                        <ArrowDownwardOutlined />
                                    )}
                                </div>
                                <div className="flex gap-4">
                                    <CreatePreExerciseSection datas={res} />
                                    <CreateAssessmentSection datas={res} />
                                </div>
                            </div>

                            {/* Expanded Content */}
                            {expandedIndex === i && (
                                <div>
                                    {/* <div className="mt-4">
                                        <p>{htmlToText(res?.discussions)}</p>
                                    </div> */}
                                    <div className="flex items-center justify-center mt-4">
                                        <h1>
                                            <u>PRE-EXERCISE</u>
                                        </h1>
                                    </div>

                                    {res.pre_exercises.map((pre_exercise) => {
                                        console.log(
                                            "pre_exercise",
                                            pre_exercise,
                                        );
                                        return (
                                            <>
                                                <div className="flex text-2xl font-black items-center justify-center mb-6">
                                                    <i>{pre_exercise.exam_type}</i>
                                                </div>
                                                <div>
                                                    <h3>
                                                        Direction:
                                                        {htmlToText(
                                                            pre_exercise.direction,
                                                        )}
                                                    </h3>
                                                    {pre_exercise?.file && (
                                                        <div className="flex items-center justify-center flex-1 gap-3 w-full">
                                                            <img
                                                                className="w-1/2"
                                                                src={
                                                                    pre_exercise.file
                                                                }
                                                                alt="Question related"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                                {pre_exercise.exam_type ==
                                                    "True Or False" && (
                                                        <>
                                                            {pre_exercise.questions.map(
                                                                (res, i) => {
                                                                    return (
                                                                        <TrueOrFalseComponent
                                                                            question={
                                                                                res?.question
                                                                            }
                                                                            answers={
                                                                                res?.answer_key
                                                                            }
                                                                        />
                                                                    );
                                                                },
                                                            )}
                                                        </>
                                                    )}

                                                {pre_exercise.exam_type ==
                                                    "Fill In The Blank" && (
                                                        <>
                                                            {pre_exercise.questions.map(
                                                                (res, i) => {
                                                                    return (
                                                                        <FillInTheBlankComponent
                                                                            question={
                                                                                res?.question
                                                                            }
                                                                            answers={
                                                                                res?.answer_key
                                                                            }
                                                                        />
                                                                    );
                                                                },
                                                            )}
                                                        </>
                                                    )}

                                                {pre_exercise.exam_type ==
                                                    "Multiple Choice" && (
                                                        <>
                                                            {pre_exercise.questions.map(
                                                                (res, i) => {
                                                                    return (
                                                                        <MultipleChoiceComponent
                                                                            question={
                                                                                res?.question
                                                                            }
                                                                            answers={
                                                                                res?.answer_key
                                                                            }
                                                                        />
                                                                    );
                                                                },
                                                            )}
                                                        </>
                                                    )}

                                                {pre_exercise.exam_type ==
                                                    "Identification" && (
                                                        <>
                                                            {pre_exercise.questions.map(
                                                                (res, i) => {
                                                                    return (
                                                                        <IdentificationComponent
                                                                            question={
                                                                                res?.question
                                                                            }
                                                                            answers={
                                                                                res?.answer_key
                                                                            }
                                                                        />
                                                                    );
                                                                },
                                                            )}

                                                        </>
                                                    )}

                                                {pre_exercise.exam_type ==
                                                    "Matching" && (
                                                        <>
                                                            {pre_exercise.questions.map(
                                                                (res, i) => {
                                                                    return (
                                                                        <MatchingComponent
                                                                            question={
                                                                                res?.question
                                                                            }
                                                                            answers={
                                                                                res?.answer_key
                                                                            }
                                                                        />
                                                                    );
                                                                },
                                                            )}

                                                        </>
                                                    )}
                                            </>
                                        );
                                    })}
                                    {/* {res?.type1 == "Identification" && (
                                        <div>
                                            {htmlToText(res.direction1)}
                                            <div className="py-3">
                                                {res.identification.map(
                                                    (result, i) => {
                                                        return (
                                                            <div key={i}>
                                                                {
                                                                    result.question
                                                                }
                                                            </div>
                                                        );
                                                    },
                                                )}
                                            </div>
                                        </div>
                                    )} */}
                                    <div className="mt-7">
                                        <hr />
                                    </div>
                                    <div className="flex items-center justify-center mt-4">
                                        <h1>
                                            <u>ASSESSMENT</u>
                                        </h1>
                                    </div>
                                    {res.assessments.map((assessment) => {
                                        return (
                                            <>
                                                <div className="flex text-2xl font-black items-center justify-center mb-6">
                                                    <i>{assessment.exam_type}</i>
                                                </div>
                                                <div>
                                                    <h3>
                                                        Direction:
                                                        {htmlToText(
                                                            assessment.direction,
                                                        )}
                                                    </h3>
                                                    {assessment?.file && (
                                                        <div className="flex items-center justify-center flex-1 gap-3 w-full">
                                                            <img
                                                                className="w-1/2"
                                                                src={
                                                                    assessment.file
                                                                }
                                                                alt="Question related"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                                {assessment.exam_type ==
                                                    "True Or False" && (
                                                        <>
                                                            {assessment.questions.map(
                                                                (res, i) => {
                                                                    return (
                                                                        <TrueOrFalseComponent
                                                                            question={
                                                                                res?.question
                                                                            }
                                                                            answers={
                                                                                res?.answer_key
                                                                            }
                                                                        />
                                                                    );
                                                                },
                                                            )}
                                                        </>
                                                    )}

                                                {assessment.exam_type ==
                                                    "Fill In The Blank" && (
                                                        <>
                                                            {assessment.questions.map(
                                                                (res, i) => {
                                                                    return (
                                                                        <FillInTheBlankComponent
                                                                            question={
                                                                                res?.question
                                                                            }
                                                                            answers={
                                                                                res?.answer_key
                                                                            }
                                                                        />
                                                                    );
                                                                },
                                                            )}
                                                        </>
                                                    )}

                                                {assessment.exam_type ==
                                                    "Multiple Choice" && (
                                                        <>
                                                            {assessment.questions.map(
                                                                (res, i) => {
                                                                    return (
                                                                        <MultipleChoiceComponent
                                                                            question={
                                                                                res?.question
                                                                            }
                                                                            answers={
                                                                                res?.answer_key
                                                                            }
                                                                        />
                                                                    );
                                                                },
                                                            )}
                                                        </>
                                                    )}

                                                {assessment.exam_type ==
                                                    "Identification" && (
                                                        <>
                                                            {assessment.questions.map(
                                                                (res, i) => {
                                                                    return (
                                                                        <IdentificationComponent
                                                                            question={
                                                                                res?.question
                                                                            }
                                                                            answers={
                                                                                res?.answer_key
                                                                            }
                                                                        />
                                                                    );
                                                                },
                                                            )}

                                                        </>
                                                    )}

                                                {assessment.exam_type ==
                                                    "Matching" && (
                                                        <>
                                                            {assessment.questions.map(
                                                                (res, i) => {
                                                                    return (
                                                                        <MatchingComponent
                                                                            question={
                                                                                res?.question
                                                                            }
                                                                            answers={
                                                                                res?.answer_key
                                                                            }
                                                                        />
                                                                    );
                                                                },
                                                            )}

                                                        </>
                                                    )}
                                            </>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
        </div>
    );
}
