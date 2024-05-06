import { createSlice } from "@reduxjs/toolkit";
import { fetchGamePlatform } from "../services/game-platform";
import { PlatformsResponse } from "@/types/platform";
import { StatusResponse } from "@/types/type";

export const gamePlatformSlice = createSlice({
	name: "gamePlatformSlice",
	initialState: {
		platform: {} as PlatformsResponse,
		platformStatus: StatusResponse.PENDING,
		platformError: null as string | null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchGamePlatform.pending, (state) => {
			state.platformStatus = StatusResponse.PENDING;
			state.platformError = null; // Reset platformError state when pending
		});
		builder.addCase(fetchGamePlatform.fulfilled, (state, action:any) => {
			state.platformStatus = StatusResponse.FULLFILLED;
			state.platform = action.payload;
			state.platformError = null;
		});
		builder.addCase(fetchGamePlatform.rejected, (state, action) => {
			state.platformStatus = StatusResponse.REJECTED;
			state.platformError =
				action.error.message || "An platformError occurred";
		});
	},
});
