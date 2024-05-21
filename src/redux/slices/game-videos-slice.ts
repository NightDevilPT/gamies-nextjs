import { createSlice } from "@reduxjs/toolkit";
import { StatusResponse } from "@/types/type";
import { fetchGameVideos } from "../services/game-videos";
import { Movie, MovieList } from "@/types/game-videos";

export interface GameVideosList {
	videos: Record<number, MovieList>;
	videosStatus: StatusResponse;
	videosError: string | null;
}

const initialState: GameVideosList = {
	videos: {},
	videosStatus: StatusResponse.PENDING,
	videosError: null,
};

export const gameVideosSlice = createSlice({
	name: "gameVideos",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchGameVideos.pending, (state) => {
			state.videosStatus = StatusResponse.PENDING;
			state.videosError = null; // Reset error state when pending
		});
		builder.addCase(fetchGameVideos.fulfilled, (state, action) => {
			const { gameId, data } = action.payload;
			state.videosStatus = StatusResponse.FULLFILLED;
			state.videosError = null;

			if (!state.videos[gameId]) {
				state.videos[gameId] = data;
			} else {
				const existingData = state.videos[gameId];

				// Create a set of existing screenshot IDs for quick lookup
				const existingIds = new Set(
					existingData.results.map((video:Movie) => video.id)
				);

				// Filter out videos that are already in the results array
				const newResults = data.results.filter(
					(video: Movie) => !existingIds.has(video.id)
				);

				state.videos[gameId] = {
					...existingData,
					count: existingData.count + newResults.length,
					next: data.next,
					previous: data.previous,
					results: [...existingData.results, ...newResults],
				};
			}
		});
		builder.addCase(fetchGameVideos.rejected, (state, action) => {
			state.videosStatus = StatusResponse.REJECTED;
			state.videosError =
				action.error.message || "An error occurred";
		});
	},
});
