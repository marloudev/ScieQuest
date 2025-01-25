import React from 'react'
import AdminLayout from '../layout'
import BookletCreateSection from './sections/module-create-section'
import { useEffect } from 'react';
import store from '../../store/store';
// import { get_booklet_thunk } from './redux/booklet-thunk';
import BookletTableSection from './sections/module-table-section';
import { get_module_thunk } from './redux/booklet-thunk';

export default function BookletPage() {

    useEffect(() => {
        store.dispatch(get_module_thunk())
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
