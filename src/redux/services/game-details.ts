import { gamesDummy } from "@/dummyData/games";
import { genresDummyData } from "@/dummyData/genres";
import { getGameDetails, getGames } from "@/services/Request";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGameDetails = createAsyncThunk(
	"genres/fetchGameDetails",
	async ({ id }: { id: number; }) => {
		try {
			const response = await getGameDetails(id);
			return response;
		} catch (error) {
			throw error; // Throw any errors for handling in the rejected case
		}
	}
);
