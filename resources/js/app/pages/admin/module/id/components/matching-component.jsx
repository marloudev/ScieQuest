import React from 'react'

export default function MatchingComponent({ question, answers,  match }) {
  return (
    <div>
     
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
