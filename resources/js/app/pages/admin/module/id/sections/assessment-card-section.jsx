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

export default function AssessmentCardSection() {
    const { exam_types } = useSelector((store) => store.booklets);
    const [expandedIndex, setExpandedIndex] = React.useState(null); // Track expanded card

    const handleExpandClick = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle expand/collapse
    };

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
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Sample Assessment</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700">Direction: Sample Direction</p>
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
                            <div className="mt-4">
                                <h3><b>Multiple Choice</b></h3>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
