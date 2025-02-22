import React from 'react'
import InstructorLayout from '../layout'
import VisionSection from '../../admin/dashboard/sections/vision-section'
import MissionSection from '../../admin/dashboard/sections/mission-section'
import GoalSection from '../../admin/dashboard/sections/goal-section'

export default function InstructorDashboardPage() {
  return (
    <InstructorLayout>
      <div className='flex items-center justify-center gap-24 mt-20' style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 1)' }}>
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
    </InstructorLayout>
  )
}
