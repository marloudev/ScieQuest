import React from 'react'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'

export default function ILAFormSection() {
    const { student } = useSelector((store) => store.students)
    const data = student?.score_sheet?.answers
    const zeroScoreArray = data?.filter(item => item.score === 0);
    console.log('data', student)
    return (
        <div className='flex flex-col py-3 mx-24'>
            <div className='uppercase flex items-center justify-center text-xl font-black'>
                Individual Learning agreement
            </div>
            <div className='flex gap-3 items-center justify-between'>
                <div>
                    Name of Learner: {student?.name}
                </div>
                <div>
                    Community Learning Center:{student?.examiner?.schedule?.learning_center?.name}
                </div>
            </div>
            <div className='flex gap-3 items-center justify-between'>
                <div>
                    Level:  {student?.score_sheet?.als_level}
                </div>
                <div>
                    Name of Learning Facilatator:  {student?.examiner?.schedule?.teacher?.name}
                </div>
            </div>
            <div className='py-5'>
                Direction: Write your learning goals, your learning activities or strategies in order to attain these goals, and the timeline.
            </div>
            <Box sx={{ border: 1 }}>
                <div className='flex'>
                    <Box className="w-2/5 flex items-center justify-center flex-col">
                        <div className='w-full flex items-center justify-center font-bold text-lg text-center'>
                            Learning Goals
                        </div>
                        <div className='w-full flex items-center justify-center text-xs'>
                            (Kasanayang Gusto Kong Matutunan)
                        </div>
                    </Box>
                    <Box className="w-1/6 px-2" sx={{ borderLeft: 1 }}>
                        <div className='w-full flex items-center justify-center font-bold text-lg text-center'>
                            Delivery Mode
                        </div>
                        <div className='w-full flex items-center justify-center text-xs '>
                            Mga Pamamaraan sa Pagkatuto (Face to face, Independent Learning, BRI, eLearning/Eskwela)
                        </div>
                    </Box>
                    <Box className="w-1/6 px-2" sx={{ borderLeft: 1 }}>

                        <div className='w-full flex items-center justify-center font-bold text-lg text-center'>
                            Timeline
                        </div>
                        <div className='w-full flex items-center justify-center text-xs '>
                            (Kailan mo ito gustong matutunan?)
                        </div>
                    </Box>
                    <Box className="w-1/6" sx={{ borderLeft: 1 }}>
                        <Box className='w-full flex items-center justify-center font-bold text-lg text-center'>
                            Review of Learning Goals
                        </Box>
                        <div className='flex'>
                            <div className='flex-1 '>
                                <Box className="text-xs px-1 text-center h-full" sx={{ borderTop: 1, borderRight: 1 }}>
                                    Achieved (Nakamtan)
                                </Box>
                            </div>
                            <div className='flex-1'>
                                <Box className="text-xs px-1 text-center h-full" sx={{ borderTop: 1, borderRight: 1 }}>
                                    Not Achieved (Hindi Nakamtan)
                                </Box>
                            </div>
                            <div className='flex-1'>
                                <Box className="text-xs px-1 text-center h-full" sx={{ borderTop: 1 }}>
                                    Date of Review (Petsa ng pagsusuri)
                                </Box>
                            </div>
                        </div>
                    </Box>
                    <Box className="w-1/6 px-2" sx={{ borderLeft: 1 }}>

                        <div className='w-full flex items-center justify-center font-bold text-lg text-center'>
                            Learning Facilitators
                        </div>
                        <div className='w-full flex items-center justify-center text-xs '>
                            (Payo ng Learning Facilatator)
                        </div>
                    </Box>
                </div>
            </Box>
            {
                zeroScoreArray?.map((res, i) => {
                    return <Box sx={{ borderBottom: 1, borderLeft: 1, borderRight: 1 }}>
                        <div className='flex'>
                            <Box className="w-2/5 flex items-start justify-start flex-col ">
                                <div className='p-2 text-xs'>
                                {res.questionnaire.specification}
                                </div>
                            </Box>
                            <Box className="w-1/6 px-2 text-center flex items-center justify-center" sx={{ borderLeft: 1 }}>
                                Face to Face
                            </Box>
                            <Box className="w-1/6 px-2 text-center flex items-center justify-center" sx={{ borderLeft: 1 }}>
                                ss
                            </Box>
                            <Box className="w-1/6 text-center flex items-center justify-center" sx={{ borderLeft: 1 }}>
                                ss
                            </Box>
                            <Box className="w-1/6 px-2 text-center flex items-center justify-center" sx={{ borderLeft: 1 }}>
                                ss
                            </Box>
                        </div>
                    </Box>
                })
            }


        </div>
    )
}
