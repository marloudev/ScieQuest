import React from 'react'
import AdminLayout from '../layout'
import VisionSection from './sections/vision-section'
import MissionSection from './sections/mission-section'
import GoalSection from './sections/goal-section'

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className='px-72' style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 1)' }}>
        <VisionSection />
        <MissionSection />
        <GoalSection />
      </div>
    </AdminLayout>
  )
}
