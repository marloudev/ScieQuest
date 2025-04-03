import React from 'react';
import { useSelector } from 'react-redux';

export default function MultipleChoiceComponent({ question, answers, data }) {
  const { user } = useSelector((state) => state.app);
  return (
    <div>
      <div>
        <div className='flex items-center justify-between'>
          <p>Question: {question}</p>
          {/* {user?.user_type == 1 && (
            <div>
              <UpdateQuestionSection data={data} />
              <DeleteQuestionnaireSection data={data} />
            </div>
          )} */}
        </div>
      </div>
      <div>
        <p><b>Answer key:</b> {answers}</p>
      </div>
    </div>
  );
}