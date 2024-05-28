import { createSlice } from "@reduxjs/toolkit";
import { StatusResponse } from "@/types/type";
import { PlatformGame, PlatformGamesResponse } from "@/types/platform-game";
import { fetchGenresGame } from "../services/genres-games";

export interface PlatfomeGameList {
	genresGames: Record<number, PlatformGamesResponse>;
	genresGamesStatus: StatusResponse;
	genresGamesError: string | null;
}

const initialState: PlatfomeGameList = {
	genresGames: {},
	genresGamesStatus: StatusResponse.PENDING,
	genresGamesError: null,
};

export const genresGameSlice = createSlice({
	name: "gameVideos",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchGenresGame.pending, (state) => {
			state.genresGamesStatus = StatusResponse.PENDING;
			state.genresGamesError = null; // Reset error state when pending
		});
		builder.addCase(fetchGenresGame.fulfilled, (state, action) => {
			const { gameId, data } = action.payload;
			state.genresGamesStatus = StatusResponse.FULLFILLED;
			state.genresGamesError = null;

			if (!state.genresGames[gameId]) {
				state.genresGames[gameId] = data;
			} else {
				const existingData = state.genresGames[gameId];

				// Create a set of existing screenshot IDs for quick lookup
				const existingIds = new Set(
					existingData.results.map((video:PlatformGame) => video.id)
				);

				// Filter out genresGames that are already in the results array
				const newResults = data.results.filter(
					(video: PlatformGame) => !existingIds.has(video.id)
				);

				state.genresGames[gameId] = {
					...existingData,
					count: existingData.count + newResults.length,
					next: data.next,
					previous: data.previous,
					results: [...existingData.results, ...newResults],
				};
			}
		});
		builder.addCase(fetchGenresGame.rejected, (state, action) => {
			state.genresGamesStatus = StatusResponse.REJECTED;
			state.genresGamesError =
				action.error.message || "An error occurred";
		});
	},
});
