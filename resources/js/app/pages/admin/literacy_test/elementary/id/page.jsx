import React from 'react'
import AdminLayout from '../../../layout'
import CreateQuestionnaireSection from './sections/create-questionnaire-section'
import QuestionnaireCardSection from './sections/questionnaire-card-section'
import { useEffect } from 'react'
import store from '@/app/pages/store/store'
import { get_questionnaires_thunk } from '../../_redux/questionaires-thunk'

export default function LiteracyTestIDPage() {


  useEffect(()=>{
    store.dispatch(get_questionnaires_thunk());
  },[])
  return (
    <AdminLayout>
      <div className='my-3'>
      <CreateQuestionnaireSection />
      </div>
      <div>
        <QuestionnaireCardSection />
      </div>
    </AdminLayout>
  )
}
