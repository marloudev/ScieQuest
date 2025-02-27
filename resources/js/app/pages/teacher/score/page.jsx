import React, { useEffect } from 'react';
import InstructorLayout from '../layout';
import PreExerciseScoreSection from './sections/pre-exercise-score-section';
import AssessmentScoreSection from './sections/assessment-score-section';
import { useDispatch } from 'react-redux';
import { get_student_score_by_pupil_id_thunk } from '../../admin/students/redux/students-thunk';

export default function ScorePage() {
    const student_id = window.location.pathname.split('/')[3];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_student_score_by_pupil_id_thunk(student_id));
    }, [dispatch, student_id]);

    return (
        <InstructorLayout>
            <h1 className="bg-teal-500 p-3 rounded-xl text-white">Pre Exercise</h1>
            <PreExerciseScoreSection />
            <h1 className="bg-teal-500 p-3 rounded-xl text-white">Assessment</h1>
            <AssessmentScoreSection />
        </InstructorLayout>
    );
}
