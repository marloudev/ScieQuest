import React from "react";

export default function FillInTheBlankComponent({
    question,
    answers,
}) {
    return (
        <div>
            <div>
                <p>{question}</p>
            </div>
            <div>
                <p>Answer key: {answers}</p>
            </div>
        </div>
    );
}
