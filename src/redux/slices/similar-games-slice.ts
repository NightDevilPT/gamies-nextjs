import { createSlice } from "@reduxjs/toolkit";
import { StatusResponse } from "@/types/type";
import { fetchSimilarGame } from "../services/similar-games";
import { SimilarGame, SimilarGameSeriesResponse } from "@/types/similar-games";

export interface SimilarGameList {
	similarGames: Record<number, SimilarGameSeriesResponse>;
	similarGamesStatus: StatusResponse;
	similarGamesError: string | null;
}

const initialState: SimilarGameList = {
	similarGames: {},
	similarGamesStatus: StatusResponse.PENDING,
	similarGamesError: null,
};

export const similarGamesSlice = createSlice({
	name: "similarGames",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchSimilarGame.pending, (state) => {
			state.similarGamesStatus = StatusResponse.PENDING;
			state.similarGamesError = null; // Reset error state when pending
		});
		builder.addCase(fetchSimilarGame.fulfilled, (state, action) => {
			const { gameId, data } = action.payload;
			state.similarGamesStatus = StatusResponse.FULLFILLED;
			state.similarGamesError = null;

			if (!state.similarGames[gameId]) {
				state.similarGames[gameId] = data;
			} else {
				const existingData = state.similarGames[gameId];

				// Create a set of existing screenshot IDs for quick lookup
				const existingIds = new Set(
					existingData.results.map((similarGame:SimilarGame) => similarGame.id)
				);

				// Filter out similarGames that are already in the results array
				const newResults = data.results.filter(
					(similarGame: SimilarGame) => !existingIds.has(similarGame.id)
				);

				state.similarGames[gameId] = {
					...existingData,
					count: existingData.count + newResults.length,
					next: data.next,
					previous: data.previous,
					results: [...existingData.results, ...newResults],
				};
			}
		});
		builder.addCase(fetchSimilarGame.rejected, (state, action) => {
			state.similarGamesStatus = StatusResponse.REJECTED;
			state.similarGamesError =
				action.error.message || "An error occurred";
		});
	},
});
