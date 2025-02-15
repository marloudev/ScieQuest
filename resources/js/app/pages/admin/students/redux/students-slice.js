import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    students: {
      data: []
    },
    student: {},
    answers: []
  },
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload
    },
    setStudent: (state, action) => {
      state.student = action.payload
    },
    setAnswers: (state, action) => {
      state.answers = action.payload
    },
  },
})
export const {
  setStudents,
  setStudent,
  setAnswers
} = studentsSlice.actions

export default studentsSlice.reducer
