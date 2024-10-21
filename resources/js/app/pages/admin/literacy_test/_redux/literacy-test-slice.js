import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const literacyTestSlice = createSlice({
  name: 'literacy_tests',
  initialState: {
    literacyTests: [],
    literacyTest: {},
  },
  reducers: {
    setLiteracyTests: (state, action) => {
      state.literacyTests = action.payload
    },
    setLiteracyTest: (state, action) => {
      state.literacyTest = action.payload
    },
  },
})
export const { 
  setLiteracyTests,
  setLiteracyTest
 } = literacyTestSlice.actions

export default literacyTestSlice.reducer
