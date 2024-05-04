import { configureStore } from '@reduxjs/toolkit'
import { gameGenresSlice } from './slices/game-genres-slice';
import { gamePlatformSlice } from './slices/game-platforms-slice';

export const store = configureStore({
  reducer: {
    genres:gameGenresSlice.reducer,
    platforms:gamePlatformSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;