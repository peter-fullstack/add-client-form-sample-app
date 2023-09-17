import { configureStore } from '@reduxjs/toolkit'
import companiesReducer from './slices/companiesSlice';

const reducer = {
   companies: companiesReducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export type AppDispatch = typeof store.dispatch

export default store;