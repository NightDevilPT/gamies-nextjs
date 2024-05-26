import { getGames } from "@/services/Request";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPlatformGame = createAsyncThunk(
	"games/fetchPlatformGame",
	async ({
		pageNo,
		limit,
		platform
	}: {
		pageNo?: number;
		limit?: number;
		platform:number;
	}) => {
		try {
			const page = pageNo ? pageNo : 1;
			const pageSize = limit ? limit : 10;
			const response = await getGames(page, pageSize, {
				parent_platforms: [platform],
			});
			return { gameId: platform, data: response };
		} catch (error) {
			throw error; // Throw any errors for handling in the rejected case
		}
	}
);
