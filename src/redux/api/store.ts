import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import userInfoReducer from '../feature/userInfo/userInfoSlice'
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist'
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key:"userInfo",
  storage
}
const persistetAuthReducer = persistReducer(persistConfig,userInfoReducer)
export const store = configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      user: persistetAuthReducer
    },
    middleware:getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware)
  });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistoer = persistStore(store)