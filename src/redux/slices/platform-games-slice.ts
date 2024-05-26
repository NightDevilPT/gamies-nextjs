import { createSlice } from "@reduxjs/toolkit";
import { StatusResponse } from "@/types/type";
import { PlatformGame, PlatformGamesResponse } from "@/types/platform-game";
import { fetchPlatformGame } from "../services/platform-games";

export interface PlatfomeGameList {
	platformGames: Record<number, PlatformGamesResponse>;
	platformGamesStatus: StatusResponse;
	platformGamesError: string | null;
}

const initialState: PlatfomeGameList = {
	platformGames: {},
	platformGamesStatus: StatusResponse.PENDING,
	platformGamesError: null,
};

export const platformGameSlice = createSlice({
	name: "gameVideos",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPlatformGame.pending, (state) => {
			state.platformGamesStatus = StatusResponse.PENDING;
			state.platformGamesError = null; // Reset error state when pending
		});
		builder.addCase(fetchPlatformGame.fulfilled, (state, action) => {
			const { gameId, data } = action.payload;
			state.platformGamesStatus = StatusResponse.FULLFILLED;
			state.platformGamesError = null;

			if (!state.platformGames[gameId]) {
				state.platformGames[gameId] = data;
			} else {
				const existingData = state.platformGames[gameId];

				// Create a set of existing screenshot IDs for quick lookup
				const existingIds = new Set(
					existingData.results.map((video:PlatformGame) => video.id)
				);

				// Filter out platformGames that are already in the results array
				const newResults = data.results.filter(
					(video: PlatformGame) => !existingIds.has(video.id)
				);

				state.platformGames[gameId] = {
					...existingData,
					count: existingData.count + newResults.length,
					next: data.next,
					previous: data.previous,
					results: [...existingData.results, ...newResults],
				};
			}
		});
		builder.addCase(fetchPlatformGame.rejected, (state, action) => {
			state.platformGamesStatus = StatusResponse.REJECTED;
			state.platformGamesError =
				action.error.message || "An error occurred";
		});
	},
});
