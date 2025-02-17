import React from 'react'
import InstructorLayout from '../layout'
import PreAssessmentScoreSection from './sections/pre-exercise-score-section'
import StudentDetailsSection from './sections/student-details-section'
import PreExerciseScoreSection from './sections/pre-exercise-score-section'
import AssessmentScoreSection from './sections/assessment-score-section'
import { useEffect } from 'react'
import store from '../../store/store'
import { get_student_score_thunk, get_students_by_id_thunk } from '../../admin/students/redux/students-thunk'

export default function ScorePage() {
    useEffect(() => {
        store.dispatch(get_student_score_thunk())
    }, []);
    return (
        <InstructorLayout>
            <StudentDetailsSection />
            <PreExerciseScoreSection />
            <AssessmentScoreSection />
        </InstructorLayout>
    )
}
