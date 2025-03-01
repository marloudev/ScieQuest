import React from 'react'
import DeleteQuestionnaireSection from '../sections/delete-questionnaire-section'
import { useSelector } from 'react-redux';

export default function MatchingComponent({ question, answers, data }) {
  const { user } = useSelector((state) => state.app);
  return (
    <div className='mt-7'>
      <div>
        <div>
          <div className='flex items-center justify-between'>
            <b>{question}</b>
            {user?.user_type == 1 && (
              <DeleteQuestionnaireSection data={data} />
            )}
          </div>
        </div>
        <p><b>Matching key:</b> {answers}</p>
      </div>
    </div>
  )
}
