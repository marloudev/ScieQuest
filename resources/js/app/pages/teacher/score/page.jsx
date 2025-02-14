import React from 'react'
import InstructorLayout from '../layout'
import PreAssessmentScoreSection from './sections/pre-assessment-score-section'
import StudentDetailsSection from './sections/student-details-section'

export default function ScorePage() {
    return (
        <InstructorLayout>
            <StudentDetailsSection />
            <PreAssessmentScoreSection />
        </InstructorLayout>
    )
}
