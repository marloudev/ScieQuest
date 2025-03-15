import React from 'react'
import { useSelector } from 'react-redux'

export default function StudentNameSection() {
    const { student } = useSelector((state) => state.students)
    console.log('student', student)
    return (
        <div>
            {student.name}
        </div>
    )
}