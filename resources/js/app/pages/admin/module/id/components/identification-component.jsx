import React from 'react'

export default function IdentificationComponent({ question, answers, direction, image }) {
  return (
    <div>
      <div>
        <p>___________ {question}</p>
       
      </div>
      <div>
        <p>Answer key: {answers}</p>
      </div>
    </div>
  )
}
