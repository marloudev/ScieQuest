import React from 'react'
import AdminLayout from '../layout'
import CreateScheduleSection from './sections/create-schedule-section'

export default function AdminSchedulePage() {
  return (
    <AdminLayout>
      <CreateScheduleSection />
    </AdminLayout>
  )
}
