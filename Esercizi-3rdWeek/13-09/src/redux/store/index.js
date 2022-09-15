import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favourite'
import jobReducer from '../reducers/job'
import userReducer from '../reducers/userReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'

const persistConfig = {
  key: 'root', // il livello da cui vogliamo cominciare a far persistere i dati
  storage, // come dire --> storage: storage, seleziona lo storage engine da utilizzare
  blacklist: ['job'],
  transforms: [
    // elenco delle trasformazioni (plugin) applicabili a redux-persist
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
    }),
  ],
}

const bigReducer = combineReducers({
  favourite: favouriteReducer,
  job: jobReducer,
  user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, bigReducer)
// una versione "persistente" di bigReducer

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // <-- lo spegne
    }),
})

export const persistor = persistStore(store)
