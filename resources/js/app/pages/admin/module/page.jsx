import React from 'react'
import AdminLayout from '../layout'
import BookletCreateSection from './sections/module-create-section'
import { useEffect } from 'react';
import store from '../../store/store';
import { get_booklet_thunk } from './redux/booklet-thunk';
import BookletTableSection from './sections/module-table-section';

export default function BookletPage() {

    useEffect(() => {
        store.dispatch(get_booklet_thunk())
    }, []);
    return (
        <AdminLayout>
            <BookletCreateSection />
            <div className='py-5'>
                <BookletTableSection />
            </div>
        </AdminLayout>
    )
}
