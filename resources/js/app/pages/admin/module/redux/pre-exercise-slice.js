import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const assessmentSlice = createSlice({
  name: 'assessment',
  initialState: {
    assessments: [],
    assessment: {},
  },
  reducers: {
    setAssessments: (state, action) => {
      state.assessments = action.payload
    },
    setAssessment: (state, action) => {
      state.assessment = action.payload
    },

  },
})
export const {
  setAssessments,
  setAssessment,
} = assessmentSlice.actions

export default assessmentSlice.reducer
