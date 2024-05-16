import { createSlice } from "@reduxjs/toolkit";
import { StatusResponse } from "@/types/type";
import { fetchGame } from "../services/games";
import { GameResponse } from "@/types/games";

export const gamesSlice = createSlice({
	name: "games",
	initialState: {
		games: {} as GameResponse,
		gamesStatus: StatusResponse.PENDING as StatusResponse,
		gamesError: null as string | null, // Initialize error state
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchGame.pending, (state, action) => {
			state.gamesStatus = StatusResponse.PENDING;
			state.gamesError = null; // Reset error state when pending
		});
		builder.addCase(fetchGame.fulfilled, (state, action: any) => {
			state.gamesStatus = StatusResponse.FULLFILLED;
			if (state.games.results) {
				state.games = {
					...action.payload,
					results: [
						...state.games.results,
						...action.payload.results,
					],
				};
			} else {
				state.games = action.payload;
			}

			state.gamesError = null;
		});
		builder.addCase(fetchGame.rejected, (state, action) => {
			state.gamesStatus = StatusResponse.REJECTED;
			state.gamesError = action.error.message || "An error occurred";
		});
	},
});
