import React from 'react'
import AdminLayout from '../layout'
import CreateScheduleSection from './sections/create-schedule-section'
import store from '../../store/store'
import { get_teachers_thunk } from '../teachers/redux/teachers-thunk'
import { useEffect } from 'react'
import { get_schedule_thunk } from './redux/schedule-thunk'
import ScheduleTableSection from './sections/schedule-table-section'
import { get_learning_centers_thunk } from '../learning_center/redux/learning-center-thunk'
import { get_booklet_thunk } from '../booklet/redux/booklet-thunk'

export default function AdminSchedulePage() {

  useEffect(() => {
    store.dispatch(get_teachers_thunk())
    store.dispatch(get_schedule_thunk())
    store.dispatch(get_learning_centers_thunk())
    store.dispatch(get_booklet_thunk())
  }, [])
  return (
    <AdminLayout>
      <div className='flex gap-4 flex-col'>
        <div className='w-1/5'>
          <CreateScheduleSection />
        </div>
        <ScheduleTableSection />
      </div>
    </AdminLayout>
  )
}
