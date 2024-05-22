import { createSlice } from "@reduxjs/toolkit";
import { StatusResponse } from "@/types/type";
import { GamePost, GamePostsResponse } from "@/types/game-posts";
import { fetchGamePosts } from "../services/game-posts";

export interface GamePosts {
	posts: Record<number, GamePostsResponse>;
	postsStatus: StatusResponse;
	postsError: string | null;
}

const initialState: GamePosts = {
	posts: {},
	postsStatus: StatusResponse.PENDING,
	postsError: null,
};

export const gamePostsSlice = createSlice({
	name: "gamePosts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchGamePosts.pending, (state) => {
			state.postsStatus = StatusResponse.PENDING;
			state.postsError = null; // Reset error state when pending
		});
		builder.addCase(fetchGamePosts.fulfilled, (state, action) => {
			const { gameId, data } = action.payload;
			state.postsStatus = StatusResponse.FULLFILLED;
			state.postsError = null;

			if (!state.posts[gameId]) {
				state.posts[gameId] = data;
			} else {
				const existingData = state.posts[gameId];

				// Create a set of existing screenshot IDs for quick lookup
				const existingIds = new Set(
					existingData.results.map((posts:GamePost) => posts.id)
				);

				// Filter out posts that are already in the results array
				const newResults = data.results.filter(
					(posts: GamePost) => !existingIds.has(posts.id)
				);

				state.posts[gameId] = {
					...existingData,
					count: existingData.count + newResults.length,
					next: data.next,
					previous: data.previous,
					results: [...existingData.results, ...newResults],
				};
			}
		});
		builder.addCase(fetchGamePosts.rejected, (state, action) => {
			state.postsStatus = StatusResponse.REJECTED;
			state.postsError =
				action.error.message || "An error occurred";
		});
	},
});
