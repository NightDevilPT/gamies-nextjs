import { configureStore } from "@reduxjs/toolkit";
import { gameGenresSlice } from "./slices/game-genres-slice";
import { gamePlatformSlice } from "./slices/game-platforms-slice";
import { gamesSlice } from "./slices/games-slice";
import { gameDetailsSlice } from "./slices/game-details-slice";
import { gameScreenshotsSlice } from "./slices/game-screenshots-slice";
import { gameVideosSlice } from "./slices/game-videos-slice";
import { similarGamesSlice } from "./slices/similar-games-slice";
import { gamePostsSlice } from "./slices/game-posts-slice";

export const store = configureStore({
	reducer: {
		genres: gameGenresSlice.reducer,
		platforms: gamePlatformSlice.reducer,
		games: gamesSlice.reducer,
		gameDetails: gameDetailsSlice.reducer,
		gameScreenshots: gameScreenshotsSlice.reducer,
		gameVideos: gameVideosSlice.reducer,
		similarGames: similarGamesSlice.reducer,
		gamePosts: gamePostsSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
