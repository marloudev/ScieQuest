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
                                    <h1>PRE-EXERCISE</h1>
                                    <div className="mt-4"></div>
                                    {res.pre_exercises.map((pre_exercise) => {
                                        return (
                                            <>
                                                {pre_exercise.exam_type ==
                                                    "True Or False" && (
                                                    <>
                                                        {pre_exercise.exam_type}
                                                    </>
                                                )}

                                                {pre_exercise.exam_type ==
                                                    "Fill In The Blank" && (
                                                    <>
                                                        {pre_exercise.exam_type}
                                                    </>
                                                )}

                                                {pre_exercise.exam_type ==
                                                    "Multiple Choice" && (
                                                    <>
                                                        {pre_exercise.exam_type}
                                                    </>
                                                )}

                                                {pre_exercise.exam_type ==
                                                    "Indentification" && (
                                                    <>
                                                        {pre_exercise.exam_type}
                                                    </>
                                                )}

                                                {pre_exercise.exam_type ==
                                                    "Matching" && (
                                                    <>
                                                        {pre_exercise.exam_type}
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
                                    <h1>ASSESSMENT</h1>
                                    {res.assessments.map((assessment) => {
                                        return (
                                            <>
                                                {assessment.exam_type ==
                                                    "True Or False" && (
                                                    <>{assessment.exam_type}</>
                                                )}

                                                {assessment.exam_type ==
                                                    "Fill In The Blank" && (
                                                    <>{assessment.exam_type}</>
                                                )}

                                                {assessment.exam_type ==
                                                    "Multiple Choice" && (
                                                    <>{assessment.exam_type}</>
                                                )}

                                                {assessment.exam_type ==
                                                    "Indentification" && (
                                                    <>{assessment.exam_type}</>
                                                )}

                                                {assessment.exam_type ==
                                                    "Matching" && (
                                                    <>{assessment.exam_type}</>
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
