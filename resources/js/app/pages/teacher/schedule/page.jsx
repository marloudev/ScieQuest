import React from 'react'
import InstructorLayout from '../layout'
import { useEffect } from 'react';
import store from '../../store/store';
import { get_schedule_by_id_thunk } from '../../admin/schedule/redux/schedule-thunk';
import ScheduleTableSection from './sections/schedule-table-section';

export default function TeacherPage({auth}) {

  useEffect(() => {
    store.dispatch(get_schedule_by_id_thunk(auth.user.id))
  }, []);
  return (
    <InstructorLayout>
        <ScheduleTableSection />
    </InstructorLayout>
  )
}
