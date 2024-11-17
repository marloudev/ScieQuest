import { get_examiner_by_id_thunk } from '@/app/pages/admin/schedule/redux/schedule-thunk';
import store from '@/app/pages/store/store';
import React from 'react'
import { useEffect } from 'react';
import InstructorLayout from '../../layout';
import ExaminerTableSection from './sections/examiner-table-section';

export default function ScheduleIDPage() {

    useEffect(() => {
      store.dispatch(get_examiner_by_id_thunk(window.location.pathname.split('/')[3]))
    }, []);
  return (
    <InstructorLayout>
        <ExaminerTableSection />
    </InstructorLayout>
  )
}
