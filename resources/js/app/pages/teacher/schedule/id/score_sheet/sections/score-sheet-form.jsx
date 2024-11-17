import { Check, Close } from '@mui/icons-material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function ScoreSheetForm() {
    const { student } = useSelector((store) => store.students)
    const examinations = student?.score_sheet?.booklet?.examinations || []
    const answers = student?.score_sheet?.answers || []

    const HtmlRenderer = ({ htmlContent }) => (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    )

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">

            <div className="sm:mx-auto sm:w-full  sm:max-w-xl  p-5 rounded-md">
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center justify-center text-xl font-black'>
                        FLT LEATHER SCORESHEET
                    </div>
                    <div className='flex items-center justify-between'>
                        <div>
                            Name: {student?.name}
                        </div>
                        <div>
                            Date: {student?.score_sheet?.date}
                        </div>
                    </div>
                    <div>
                        Overall Score: {student?.score_sheet?.overall_score}
                    </div>
                    <div>
                        ALS Level: {student?.score_sheet?.als_level}
                    </div>
                </div>

                <ol className="list-decimal " >
                    {examinations.map((exam, examIndex) => {
                        // Initialize examScore for each examination
                        let examScore = 0

                        return (
                            <li key={examIndex}  className='border border-black'>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        {exam.title && <>{exam.title} <br /></>}
                                        {exam.sub_title && <>{exam.sub_title} <br /></>}
                                    </div>
                                </div>
                                <div>
                                    {exam.question.map((question, questionIndex) => {
                                        const answer = answers.find(resp => resp.questionnaire_id === question.id)
                                        const score = answer ? answer.score : 0
                                        examScore += score // Accumulate the score for the current exam

                                        return (
                                            <div className='flex gap-2' key={questionIndex}>
                                                {question.item_number}.
                                                <div className='flex'>
                                                    {answer ? answer.answer : 'N/A'}
                                                    {score === 0 ? <Close /> : <Check />}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                {/* Display the final exam score */}
                                <div className='font-bold flex items-end justify-end'>Score: {examScore}</div>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}
