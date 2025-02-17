import React from 'react'
import DeleteQuestionnaireSection from '../sections/delete-questionnaire-section'

export default function TrueOrFalseComponent({ question, answers,data }) {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <p>{question}</p>
        <DeleteQuestionnaireSection data={data}/>
      </div>
      <div>
        <p><b>Answer key:</b> {answers}</p>
      </div>
    </div>
  )
}
