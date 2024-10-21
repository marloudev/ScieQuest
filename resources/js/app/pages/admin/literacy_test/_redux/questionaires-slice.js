import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const questionnairesSlice = createSlice({
  name: 'questionnaires',
  initialState: {
    questionaires: {
      data:[]
    },
    questionaire: {},
  },
  reducers: {
    setQuestionaires: (state, action) => {
      state.questionaires = action.payload
    },
    setQuestionaire: (state, action) => {
      state.questionaire = action.payload
    },
  },
})
export const { 
  setQuestionaires,
  setQuestionaire
 } = questionnairesSlice.actions

export default questionnairesSlice.reducer
