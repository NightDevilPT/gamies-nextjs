import { createSlice } from '@reduxjs/toolkit';
import { fetchGameDetails } from '../services/game-details';
import { GameDetailsState } from '@/types/game-details';
import { StatusResponse } from '@/types/type';

const initialState: GameDetailsState = {
  gameDetails: {},
  gameDetailsStatus: StatusResponse.PENDING,
  gameDetailsError: null,
};

export const gameDetailsSlice = createSlice({
  name: 'gameDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGameDetails.pending, (state) => {
      state.gameDetailsStatus = StatusResponse.PENDING;
      state.gameDetailsError = null; // Reset error state when pending
    });
    builder.addCase(fetchGameDetails.fulfilled, (state, action) => {
      state.gameDetailsStatus = StatusResponse.FULLFILLED;
      state.gameDetails[action.payload.id] = action.payload;
      state.gameDetailsError = null;
    });
    builder.addCase(fetchGameDetails.rejected, (state, action) => {
      state.gameDetailsStatus = StatusResponse.REJECTED;
      state.gameDetailsError = action.error.message || 'An error occurred';
    });
  },
});

