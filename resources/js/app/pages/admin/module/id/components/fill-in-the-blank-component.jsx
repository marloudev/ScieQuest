import React from 'react'

export default function FillInTheBlankComponent({ question, answers, direction, image }) {
  return (
    <div>
      <div>
        <h3>Direction: {direction}</h3>
      </div>
      <div>
        <p>{question}</p>
        {image && (
          <div className='flex flex-1 gap-3'>
            <img className='w-24' src={image} alt="Question related" />
          </div>
        )}
      </div>
      <div>
        <p>Answer key: {answers}</p>
      </div>
    </div>
  )
}
