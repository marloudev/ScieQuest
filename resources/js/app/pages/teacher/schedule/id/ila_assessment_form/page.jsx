
import React from 'react'
import ILAFormSection from './sections/ila-form-section'
import store from '@/app/pages/store/store';
import { useEffect } from 'react';
import { get_students_by_id_thunk } from '@/app/pages/admin/students/redux/students-thunk';

export default function ILAAssessmentForm() {

  const student_id =window.location.pathname.split('/')[5]


  useEffect(() => {
      store.dispatch(get_students_by_id_thunk(student_id))
  }, []);
  return (
    <ILAFormSection />
  )
}
