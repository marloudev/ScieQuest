import React from 'react'
import AdminLayout from '../../layout'
import ListOfStudentsTableSection from './sections/list-of-students-table-section'
import { useEffect } from 'react';
import store from '@/app/pages/store/store';
import { get_students_by_id_thunk } from '../../students/redux/students-thunk';

export default function ListStudentsPage() {
    const teacher_id = window.location.pathname.split('/')[4]
    useEffect(() => {
        store.dispatch(get_students_by_id_thunk(teacher_id))
    }, []);
    return (
        <AdminLayout>
            <ListOfStudentsTableSection />
        </AdminLayout>
    )
}
