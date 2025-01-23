import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from "@mui/icons-material";

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
    const { exam_types, booklets } = useSelector((store) => store.booklets);
    const [expandedIndex, setExpandedIndex] = React.useState(null); // Track expanded card

    const handleExpandClick = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle expand/collapse
    };

    console.log('exam_typessss', exam_types)

    return (
        <div className="w-full flex flex-col gap-5">
            {exam_types.map((res, i) => {
                const htmlString = res.direction; // The direction content you want to display
                return (
                    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow" key={i}>
                        <div className="w-full py-2 items-center justify-center flex rounded-lg bg-slate-200">
                            <img src="/images/logo2.png" className="h-24 flex items-center justify-center" alt="" />
                        </div>
                        <div className="">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{res?.subject_matter}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700">
                                Demo Link:{" "}
                                {res?.link ? (
                                    <a href={res.link} target="_blank" rel="noopener noreferrer">
                                        {res.link}
                                    </a>
                                ) : (
                                    "No link available"
                                )}
                            </p>
                        </div>


                        {/* Toggle Button */}
                        <div
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            onClick={() => handleExpandClick(i)}
                        >
                            Read more &nbsp;
                            {/* Conditionally render the correct arrow icon */}
                            {expandedIndex === i ? <ArrowUpwardOutlined /> : <ArrowDownwardOutlined />}
                        </div>

                        {/* Expanded Content */}
                        {expandedIndex === i && (
                            <div>
                                <div className="mt-4">
                                    <p>{htmlToText(res?.discussions)}</p>
                                </div>
                                <h1>PRE-EXERCISE</h1>
                                <div className="mt-4">
                                    <h3>{res?.type1}</h3>
                                </div>
                                {
                                    res?.type1 == 'Identification' && <div>
                                        {
                                            htmlToText(res.direction1)
                                        }
                                        <div className="py-3">
                                            {
                                                res.identification.map((result, i) => {
                                                    return <div key={i}>
                                                        {result.question
                                                        }
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                }
                                <h1>ASSESSMENT</h1>
                                <div className="mt-4">
                                    <h3><b>{res?.type2}</b></h3>
                                    <p>{htmlToText(res?.direction2)}</p>
                                </div>
                            </div>


                        )}
                    </div>
                );
            })}
        </div>
    );
}
