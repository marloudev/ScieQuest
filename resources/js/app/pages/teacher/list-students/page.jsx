import React from 'react'
import ListOfStudentsTableSection from './sections/list-of-students-table-section'
import { useEffect } from 'react';
import store from '@/app/pages/store/store';
import InstructorLayout from '../layout';
import { get_students_by_id_thunk } from '../../admin/students/redux/students-thunk';
import { useSelector } from 'react-redux';
import { get_teachers_thunk } from '../../admin/teachers/redux/teachers-thunk';
import CreateSection from '../../admin/students/sections/create-section';
import SearchSection from './sections/search-section';

export default function ListStudentsPage() {
    const { user } = useSelector((state) => state.app);
    const teacher_id = user?.user_id;
    useEffect(() => {
        store.dispatch(get_students_by_id_thunk(teacher_id))
        store.dispatch(get_teachers_thunk());
    }, []);
    return (
        <InstructorLayout>
            <div className='mt-4'>
                <ListOfStudentsTableSection />
            </div>
        </InstructorLayout>
    )
}
