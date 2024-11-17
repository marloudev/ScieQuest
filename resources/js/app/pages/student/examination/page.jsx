import React from 'react'
import StudentLayout from '../layout'
import { useEffect } from 'react';
import store from '../../store/store';
import { useSelector } from 'react-redux';
import { get_examiner_by_examiner_id_thunk } from '../../admin/schedule/redux/schedule-thunk';
import ExaminationSection from './sections/examination-section';

export default function ExaminationPage() {
  const { user } = useSelector((store) => store.app)
  console.log('user', user)
  useEffect(() => {
    if (user?.id) {
      store.dispatch(get_examiner_by_examiner_id_thunk(user.id))
    }
  }, [user?.id]);
  return (
    <StudentLayout>
      <ExaminationSection />
    </StudentLayout>
  )
}
