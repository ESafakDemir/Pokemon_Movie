// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import moviesReducer from './moviesSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;