import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  recommended: null,
  newStuff: null,
  original: null,
  trending: null,
}

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommended = action.payload.recommend
      state.newStuff = action.payload.newStuff
      state.original = action.payload.original
      state.trending = action.payload.trending
    },
  },
})

export const { setMovies } = movieSlice.actions

export const setRecommended = (state) => state.movie.recommended
export const setNewStuff = (state) => state.movie.newStuff
export const setOriginal = (state) => state.movie.original
export const setTrending = (state) => state.movie.trending
export default movieSlice.reducer
