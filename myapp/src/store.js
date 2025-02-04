import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterReducer';
import counterReducer from './redux2.js'

const store = configureStore({
  reducer: {
    counter: counterReducer, 
  },
});

export default store;
