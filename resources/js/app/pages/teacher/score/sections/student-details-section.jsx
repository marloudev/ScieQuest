import React from 'react'
import { useSelector } from 'react-redux';

export default function StudentDetailsSection() {
    const { student } = useSelector((state) => state.students);
    console.log('badododo', student)
    return (
        <div>
            <b>Name:{student?.user?.fname}</b>
        </div>
    )
}
