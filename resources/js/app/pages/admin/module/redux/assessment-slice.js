import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const preExerciseSlice = createSlice({
  name: 'pre_exercise',
  initialState: {
    pre_exercises: [],
    pre_exercise: {},
  },
  reducers: {
    setPreExercises: (state, action) => {
      state.pre_exercises = action.payload
    },
    setPreExercise: (state, action) => {
      state.pre_exercise = action.payload
    },

  },
})
export const {
  setPreExercises,
  setPreExercise,
} = preExerciseSlice.actions

export default preExerciseSlice.reducer
