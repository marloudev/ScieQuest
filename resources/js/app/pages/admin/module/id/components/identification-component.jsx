import { DeleteOutline } from '@mui/icons-material'
import React from 'react'
import DeleteQuestionnaireSection from '../sections/delete-questionnaire-section'

export default function IdentificationComponent({ question, answers, }) {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <p>{question}</p>
        <DeleteQuestionnaireSection />
      </div>
      <div>
        <p><b>Answer key:</b> {answers}</p>
      </div>
    </div>
  )
}
