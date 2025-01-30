import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const lessonSlice = createSlice({
  name: 'lesson',
  initialState: {
    lessons: [],
    lesson: {},
  },
  reducers: {
    setLessons: (state, action) => {
      state.lessons = action.payload
    },
    setLesson: (state, action) => {
      state.lesson = action.payload
    },
    
  },
})
export const { 
    setLessons,
    setLesson,
 } = lessonSlice.actions

export default lessonSlice.reducer
