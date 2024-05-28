import { configureStore } from "@reduxjs/toolkit";

import { gamesSlice } from "./slices/games-slice";
import { gamePostsSlice } from "./slices/game-posts-slice";
import { gameVideosSlice } from "./slices/game-videos-slice";
import { gameGenresSlice } from "./slices/game-genres-slice";
import { gameDetailsSlice } from "./slices/game-details-slice";
import { similarGamesSlice } from "./slices/similar-games-slice";
import { platformGameSlice } from "./slices/platform-games-slice";
import { gamePlatformSlice } from "./slices/game-platforms-slice";
import { gameScreenshotsSlice } from "./slices/game-screenshots-slice";
import { genresGameSlice } from "./slices/genres-games.slice";

export const store = configureStore({
	reducer: {
		games: gamesSlice.reducer,
		genres: gameGenresSlice.reducer,
		gamePosts: gamePostsSlice.reducer,
		gameVideos: gameVideosSlice.reducer,
		platforms: gamePlatformSlice.reducer,
		gameDetails: gameDetailsSlice.reducer,
		genresGames:genresGameSlice.reducer,
		similarGames: similarGamesSlice.reducer,
		platformGames: platformGameSlice.reducer,
		gameScreenshots: gameScreenshotsSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
