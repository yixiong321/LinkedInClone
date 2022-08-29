import {  createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null
  },
  reducers: {
    //dispatch action to user
    login: (state,action) => {
      state.user = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    logout: (state) => {
      state.user = null
    },
  },
});

export const { login ,logout } = userSlice.actions;
//Selectors to retrive state from slice
export const selectUser = (state) => {
  console.log(state)
  return state.user.user
}; 

export default userSlice.reducer;
