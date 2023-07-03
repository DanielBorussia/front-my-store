import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import userReducer from "../../modules/auth";


const store = configureStore({
  reducer :{
    user: userReducer
  },
});


export default store;
