import React from 'react'
import DeleteQuestionnaireSection from '../sections/delete-questionnaire-section'
import { useSelector } from 'react-redux';
import UpdateQuestionSection from '../sections/update-question-section';

export default function TrueOrFalseComponent({ question, answers, data }) {
  const { user } = useSelector((state) => state.app);
  return (
    <div>
      <div className='flex items-center justify-between'>
        <p>{question}</p>
        {user?.user_type == 1 && (
          <div>
            <UpdateQuestionSection data={data} />
            <DeleteQuestionnaireSection data={data} />
          </div>
        )}
      </div>
      <div>
        <p><b>Answer key:</b> {answers}</p>
      </div>
    </div>
  )
}
