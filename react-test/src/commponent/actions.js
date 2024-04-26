import { configureStore, createSlice } from '@reduxjs/toolkit'



export const setLoginUserName = (username) => ({
    type: 'SET_LOGIN_USER_NAME',
    payload: username,
  });