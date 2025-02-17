import React from 'react';
import DeleteQuestionnaireSection from '../sections/delete-questionnaire-section';

export default function MultipleChoiceComponent({ question, answers,data }) {
  return (
    <div>
      <div>
        <div className='flex items-center justify-between'>
          <p>Question: {question}</p>
          <DeleteQuestionnaireSection data={data}/>
        </div>
      </div>
      <div>
        <p><b>Answer key:</b> {answers}</p>
      </div>
    </div>
  );
}