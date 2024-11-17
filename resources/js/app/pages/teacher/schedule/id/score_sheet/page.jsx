import React from 'react'
import { useEffect } from 'react';
import store from '@/app/pages/store/store';
import ScoreSheetForm from './sections/score-sheet-form';
import { useSelector } from 'react-redux';
import { get_students_by_id_thunk } from '@/app/pages/admin/students/redux/students-thunk';

export default function ScoreSheet() {
const student_id =window.location.pathname.split('/')[5]


  useEffect(() => {
      store.dispatch(get_students_by_id_thunk(student_id))
  }, []);
  return (
    <>
      <ScoreSheetForm />
    </>
  )
}
