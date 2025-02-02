import React from 'react'

export default function TrueOrFalseComponent({ question, answers }) {
  return (
    <div>
      <div>
        <p>{question}</p>
      </div>
      <div>
        <p>Answer key: {answers}</p>
      </div>
    </div>
  )
}
