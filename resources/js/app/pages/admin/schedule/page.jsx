import React from 'react'
import AdminLayout from '../layout'
import CreateScheduleSection from './sections/create-schedule-section'
import store from '../../store/store'
import { get_teachers_thunk } from '../teachers/redux/teachers-thunk'
import { useEffect } from 'react'

export default function AdminSchedulePage() {

  useEffect(()=>{
    store.dispatch(get_teachers_thunk())
  },[])
  return (
    <AdminLayout>
      <CreateScheduleSection />
    </AdminLayout>
  )
}
