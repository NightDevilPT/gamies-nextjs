import { Action, createSlice } from "@reduxjs/toolkit";
import { fetchGamePlatform } from "../services/game-platform";
import { PlatformsResponse } from "@/types/platform";


export const gamePlatformSlice = createSlice({
  name: "gamePlatformSlice",
  initialState: {
    platform: {} as PlatformsResponse,
    platformStatus: "loading" as string,
    platformError: null as string | null, // Initialize platformError state
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchGamePlatform.pending,
      (state, action: Action<any>) => {
        state.platformStatus = "pending";
        state.platformError = null; // Reset platformError state when pending
      }
    );
    builder.addCase(fetchGamePlatform.fulfilled, (state, action) => {
      state.platformStatus = "fulfilled";
      state.platform = action.payload;
      state.platformError = null;
    });
    builder.addCase(fetchGamePlatform.rejected, (state, action) => {
      state.platformStatus = "rejected";
      state.platformError = action.error.message || "An platformError occurred";
    });
  },
});
