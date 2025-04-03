import React from 'react'
import { useSelector } from 'react-redux';

export default function MatchingComponent({ question, answers, data }) {
  const { user } = useSelector((state) => state.app);
  return (
    <div className='mt-7'>
      <div>
        <div>
          <div className='flex items-center justify-between'>
            <b>{question}</b>
            {/* {user?.user_type == 1 && (
              <div>
                <UpdateQuestionSection data={data} />
                <DeleteQuestionnaireSection data={data} />
              </div>
            )} */}
          </div>
        </div>
        <p><b>Matching key:</b> {answers}</p>
      </div>
    </div>
  )
}
