import React from 'react'
import AdminLayout from '../../layout'
import CreateExaminerSection from './sections/create-examiner-section'
import ExaminerTableSection from './sections/examiner-table-section'
import store from '@/app/pages/store/store'
import { get_students_thunk } from '../../students/redux/students-thunk'
import { useEffect } from 'react'
import { get_examiner_by_id_thunk } from '../redux/schedule-thunk'

export default function ScheduleIDPage() {
  useEffect(()=>{
    store.dispatch(get_students_thunk())
    store.dispatch(get_examiner_by_id_thunk(window.location.pathname.split('/')[3]))
  },[])
  return (
    <AdminLayout>
      <div className='flex gap-4'>
        <div className='w-1/3'>
          <CreateExaminerSection />
        </div>
        <div className='w-2/3'>
          <ExaminerTableSection />
        </div>
      </div>
    </AdminLayout>
  )
}
