import React from 'react'
import AdminLayout from '../layout'
import VisionSection from './sections/vision-section'
import MissionSection from './sections/mission-section'
import GoalSection from './sections/goal-section'

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className='px-72 flex flex-col gap-5' style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 1)' }}>
        <div className='flex items-center justify-center'>
          <img src="/images/logo2.png" className='h-32 w-32' alt="" />
        </div>
        <div>
          <VisionSection />
        </div>
        <div>
          <MissionSection />
        </div>
        <div>
          <GoalSection />
        </div>
      </div>
    </AdminLayout>
  )
}
