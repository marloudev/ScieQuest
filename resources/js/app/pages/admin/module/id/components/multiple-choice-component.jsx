import React from 'react';

export default function MultipleChoiceComponent({ question, answers }) {
  return (
    <div>
      <div>
        <p>Question: {question}</p>
       
      </div>
      <div>
        <p>Answer key: {answers}</p>
      </div>
    </div>
  );
}