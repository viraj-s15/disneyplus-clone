import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  name: "",
  email: "",
  photo: "",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsersLoginDetails: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.photo = action.payload.photo
    },
    setSignOutState: (state) => {
      state.name = null
      state.email = null
      state.photo = null
    },
  },
})

export const { setUsersLoginDetails, setSignOutState } = userSlice.actions
export const userName = (state) => state.user.name
export const userEmail = (state) => state.user.email
export const userPhoto = (state) => state.user.photo
export default userSlice.reducer
