import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import userReducer from "../../modules/auth";


export const store = configureStore({
  reducer :{
    user: userReducer
  },
})
