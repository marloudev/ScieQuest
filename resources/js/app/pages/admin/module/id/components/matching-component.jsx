import React from 'react'

export default function MatchingComponent({ question, answers }) {
  return (
    <div className='mt-7'>
      <div>
        <div>
          <b>{question}</b>
        </div>
        <p>Match key: {answers}</p>
      </div>
    </div>
  )
}
