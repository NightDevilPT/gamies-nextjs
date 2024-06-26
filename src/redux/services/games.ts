import { gamesDummy } from "@/dummyData/games";
import { genresDummyData } from "@/dummyData/genres";
import { getGames } from "@/services/Request";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGame = createAsyncThunk(
	"genres/fetchGame",
	async ({ page, page_size }: { page: number; page_size: number }) => {
		try {
			const response = await getGames(page,page_size);
			return response;
			return gamesDummy;
		} catch (error) {
			throw error; // Throw any errors for handling in the rejected case
		}
	}
);
