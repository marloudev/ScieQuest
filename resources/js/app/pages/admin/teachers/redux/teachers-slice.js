import current_academic_year from '@/app/lib/current-academic-year';
import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const teachersSlice = createSlice({
  name: 'teachers',
  initialState: {
    teachers: {
      data: []
    },
    teachers: {},
    search: {
      academic_year: current_academic_year(),
      section_id: '1'
    },
    students: []
  },
  reducers: {
    setTeachers: (state, action) => {
      state.teachers = action.payload
    },
    setTeacher: (state, action) => {
      state.teachers = action.payload
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setStudents: (state, action) => {
      state.students = action.payload
    },
  },
})
export const {
  setTeachers,
  setTeacher,
  setSearch,
  setStudents
} = teachersSlice.actions

export default teachersSlice.reducer
