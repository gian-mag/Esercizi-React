import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favouriteReducer'
import isFavReducer from '../reducers/isFavReducer'

const bigReducer = combineReducers({
  favourite: favouriteReducer,
  jobs: isFavReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
