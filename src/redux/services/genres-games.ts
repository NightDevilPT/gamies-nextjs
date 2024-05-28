import { getGames } from "@/services/Request";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGenresGame = createAsyncThunk(
	"games/fetchGenresGame",
	async ({
		pageNo,
		limit,
		genres
	}: {
		pageNo?: number;
		limit?: number;
		genres:number;
	}) => {
		try {
			const page = pageNo ? pageNo : 1;
			const pageSize = limit ? limit : 10;
			const response = await getGames(page, pageSize, {
				genres:[genres],
			});
			return { gameId: genres, data: response };
		} catch (error) {
			throw error; // Throw any errors for handling in the rejected case
		}
	}
);
