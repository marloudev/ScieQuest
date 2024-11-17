import React from 'react'
import AdminLayout from '../layout'
import { useEffect } from 'react';
import store from '../../store/store';
import { get_learning_centers_thunk } from './redux/learning-center-thunk';
import ScheduleTableSection from './sections/learning-center-table';
import CreateLearningCenterSection from './sections/create-learning-center-table';

export default function LearningCenterPage() {

  useEffect(() => {
      store.dispatch(get_learning_centers_thunk())
  }, []);
  return (
    <AdminLayout>
      <CreateLearningCenterSection />
        <ScheduleTableSection />
    </AdminLayout>
  )
}
