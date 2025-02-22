import React from 'react'
import AdminLayout from '../layout'
import VisionSection from './sections/vision-section'
import MissionSection from './sections/mission-section'
import GoalSection from './sections/goal-section'

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className='flex flex-col ml-20 md:flex-row items-center justify-center md:gap-2 md:mt-20' style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 1)' }}>
        <div className="w-full md:w-1/3">
          <VisionSection />
        </div>
        <div className="w-full md:w-1/3">
          <MissionSection />
        </div>
        <div className="w-full md:w-1/3">
          <GoalSection />
        </div>
      </div>
    </AdminLayout>
  )
}
