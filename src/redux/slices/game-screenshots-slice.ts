// store/slices/gameScreenshotsSlice.ts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { StatusResponse } from "@/types/type";
import { fetchGameScreenshots } from "../services/game-screenshots";
import { Screenshot, ScreenshotApiResponse } from "@/types/game-details";

export interface GameScreenshotsState {
	screenshots: Record<number, ScreenshotApiResponse>;
	screenshotsStatus: StatusResponse;
	screenshotsError: string | null;
}

const initialState: GameScreenshotsState = {
	screenshots: {},
	screenshotsStatus: StatusResponse.PENDING,
	screenshotsError: null,
};

export const gameScreenshotsSlice = createSlice({
	name: "gameScreenshots",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchGameScreenshots.pending, (state) => {
			state.screenshotsStatus = StatusResponse.PENDING;
			state.screenshotsError = null; // Reset error state when pending
		});
		builder.addCase(fetchGameScreenshots.fulfilled, (state, action) => {
			const { gameId, data } = action.payload;
			state.screenshotsStatus = StatusResponse.FULLFILLED;
			state.screenshotsError = null;

			if (!state.screenshots[gameId]) {
				state.screenshots[gameId] = data;
				console.log("IF ");
			} else {
				const existingData = state.screenshots[gameId];

				// Create a set of existing screenshot IDs for quick lookup
				const existingIds = new Set(
					existingData.results.map((screenshot) => screenshot.id)
				);

				// Filter out screenshots that are already in the results array
				const newResults = data.results.filter(
					(screenshot: Screenshot) => !existingIds.has(screenshot.id)
				);

				state.screenshots[gameId] = {
					...existingData,
					count: existingData.count + newResults.length,
					next: data.next,
					previous: data.previous,
					results: [...existingData.results, ...newResults],
				};
			}
		});
		builder.addCase(fetchGameScreenshots.rejected, (state, action) => {
			state.screenshotsStatus = StatusResponse.REJECTED;
			state.screenshotsError =
				action.error.message || "An error occurred";
		});
	},
});
