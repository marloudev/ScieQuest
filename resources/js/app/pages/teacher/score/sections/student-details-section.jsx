import React from 'react'
import { useSelector } from 'react-redux';

export default function StudentDetailsSection() {
    const { student } = useSelector((state) => state.students);
    console.log('aaaaaaa', student)
    return (
        <div>
            <b>Name:{student?.fname}</b>
        </div>
    )
}
