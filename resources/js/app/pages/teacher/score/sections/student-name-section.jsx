import React from 'react'
import { useSelector } from 'react-redux'

export default function StudentNameSection() {
    const { students } = useSelector((state) => state.students)
    console.log('studentss', students?.data)
    return (
        <div>
            {/* {students?.data} */}
        </div>
    )
}