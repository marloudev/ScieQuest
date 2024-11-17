import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const scheduleSlice = createSlice({
  name: 'schedules',
  initialState: {
    schedules: [],
    schedule: {},
    examiners:[],
  },
  reducers: {
    setSchedules: (state, action) => {
      state.schedules = action.payload
    },
    setSchedule: (state, action) => {
      state.schedule = action.payload
    },
    setExaminers: (state, action) => {
      state.examiners = action.payload
    },
  },
})
export const { 
  setSchedules,
  setSchedule,
  setExaminers
 } = scheduleSlice.actions

export default scheduleSlice.reducer
