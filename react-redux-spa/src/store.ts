import { configureStore } from '@reduxjs/toolkit'
import companiesReducer from './slices/companiesSlice';
import companiesListReducer from './slices/companiesListSlice';
const reducer = {
   companies: companiesReducer,
   companiesList: companiesListReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export type AppDispatch = typeof store.dispatch

export default store;