import React from 'react'
import AdminLayout from '../../layout'
import { useEffect } from 'react';
import store from '@/app/pages/store/store';
import { get_students_by_id_thunk } from '../redux/students-thunk';
import ScoreSheetForm from './sections/score-sheet-form';
import { useSelector } from 'react-redux';

export default function ScoreSheet() {
const student_id =window.location.pathname.split('/')[4]


  useEffect(() => {
      store.dispatch(get_students_by_id_thunk(student_id))
  }, []);
  return (
    <>
      <ScoreSheetForm />
    </>
  )
}
