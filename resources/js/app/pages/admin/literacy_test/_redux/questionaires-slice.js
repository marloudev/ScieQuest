import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const questionnairesSlice = createSlice({
  name: 'questionnaires',
  initialState: {
    questionnaires: {
      data:[]
    },
    questionnaire: {},
    specifications:{
      data:[]
    },
    questionnaire:{}
  },
  reducers: {
    setQuestionnaires: (state, action) => {
      state.questionnaires.data = action.payload
    },
    setSpecifications: (state, action) => {
      state.specifications.data = action.payload
    },
    setSpecification: (state, action) => {
      state.specification.data = action.payload
    },
    setQuestionnaire: (state, action) => {
      state.questionnaire = action.payload
    },
  },
})
export const { 
  setQuestionnaires,
  setQuestionnaire
 } = questionnairesSlice.actions

export default questionnairesSlice.reducer
