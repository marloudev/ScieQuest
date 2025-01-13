import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const bookletSlice = createSlice({
  name: 'booklets',
  initialState: {
    booklets: [],
    booklet: {},
    examinations:[]
  },
  reducers: {
    setBooklets: (state, action) => {
      state.booklets = action.payload
    },
    setBooklet: (state, action) => {
      state.booklet = action.payload
    },
    setExaminations: (state, action) => {
      state.examinations = action.payload
    },
  },
})
export const { 
  setBooklets,
  setBooklet,
  setExaminations
 } = bookletSlice.actions

export default bookletSlice.reducer
