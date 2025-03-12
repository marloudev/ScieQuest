import React, { useEffect } from 'react';
import InstructorLayout from '../layout';
import PreExerciseScoreSection from './sections/pre-exercise-score-section';
import AssessmentScoreSection from './sections/assessment-score-section';
import { useDispatch } from 'react-redux';
import { get_student_score_by_pupil_id_thunk } from '../../admin/students/redux/students-thunk';
import FilterModuleSection from './sections/filter-module-section';
import { get_module_thunk } from '../module/redux/booklet-thunk';

export default function ScorePage() {
    const student_id = window.location.pathname.split('/')[3];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_student_score_by_pupil_id_thunk(student_id));
        dispatch(get_module_thunk());
    }, [dispatch, student_id]);

    return (
        <InstructorLayout>
            <div>
                <FilterModuleSection />
            </div>
            <h1 className="bg-teal-500 p-3 rounded-xl text-white">Pre Exercise</h1>
            <PreExerciseScoreSection />
            <h1 className="bg-teal-500 p-3 rounded-xl text-white">Assessment</h1>
            <AssessmentScoreSection />
        </InstructorLayout>
    );
}
