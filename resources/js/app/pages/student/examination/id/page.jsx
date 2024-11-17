import React from 'react'
import StudentLayout from '../../layout'
import QuestionnaireCardSection from './sections/questionnaire-card-section'
import store from '@/app/pages/store/store';
import { useEffect } from 'react';
import { get_questionnaires_by_id_thunk } from '@/app/pages/admin/literacy_test/_redux/questionaires-thunk';
import { get_booklet_by_id_thunk } from '@/app/pages/admin/booklet/redux/booklet-thunk';

export default function ExaminationPageID() {

  const booklet_id = window.location.pathname.split("/")[3];
  useEffect(() => {
      // store.dispatch(get_questionnaires_by_id_thunk(examination_id));
      store.dispatch(get_booklet_by_id_thunk(booklet_id))
  }, []);
  return (
    <StudentLayout>
      <QuestionnaireCardSection />
    </StudentLayout>
  )
}
