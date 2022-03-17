import {configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducerSlice';


const store = configureStore({
    reducer: {
       counter: counterReducer,
    },
});


export default store
