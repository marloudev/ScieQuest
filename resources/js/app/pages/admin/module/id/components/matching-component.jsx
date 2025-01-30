import React from 'react'

export default function MatchingComponent({ question, answers, direction, image, match }) {
  return (
    <div>
      <div>
        <h3>Direction: {direction}</h3>
      </div>
      {image && (
        <div className='flex flex-1 gap-3'>
          <img className='w-24' src={image} alt="Question related" />
        </div>
      )}
      <div>
        <div className='flex items-center justify-between px-20 mt-4'>
          <div>
            <p>Column A </p>
            <p>{question}</p>
          </div>
          <div>
            <p>Column B </p>
            <p>{match}</p>
          </div>
        </div>


      </div>
      <div>
        <p>Answer key: {answers}</p>
      </div>
    </div>
  )
}
