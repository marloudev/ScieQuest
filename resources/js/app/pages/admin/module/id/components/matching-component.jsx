import React from 'react'
import DeleteQuestionnaireSection from '../sections/delete-questionnaire-section'

export default function MatchingComponent({ question, answers }) {
  return (
    <div className='mt-7'>
      <div>
        <div>
          <div className='flex items-center justify-between'>
            <b>{question}</b>
            <DeleteQuestionnaireSection />
          </div>
        </div>
        <p><b>Matching key:</b> {answers}</p>
      </div>
    </div>
  )
}
