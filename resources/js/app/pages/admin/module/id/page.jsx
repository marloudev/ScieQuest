import React from 'react'
import AdminLayout from '../../layout'
import CreateExaminationSection from './_sections/create-examination-section'
import { useEffect } from 'react';
import store from '@/app/pages/store/store';
import { get_booklet_by_id_thunk, get_examinations_by_id_thunk } from '../redux/booklet-thunk';
import ExaminationsTableSection from './_sections/examination-table-section';
import { useSelector } from 'react-redux';

export default function BookletIDPage() {
    const booklet_id = window.location.pathname.split('/')[3]
    const {booklet}=useSelector((store)=>store.booklets)
    useEffect(() => {
        store.dispatch(get_booklet_by_id_thunk(booklet_id))
        store.dispatch(get_examinations_by_id_thunk(booklet_id));
    }, []);


    return (
        <AdminLayout>
            <CreateExaminationSection />
            <div className='py-5'>
                <ExaminationsTableSection />
            </div>
        </AdminLayout>
    )
}
