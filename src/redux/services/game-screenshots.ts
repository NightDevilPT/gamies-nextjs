import { dummyGameScreenshots } from "@/dummyData/game-screenshots";
import { getGameScreenshots } from "@/services/Request";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGameScreenshots = createAsyncThunk(
	"genres/fetchGameScreenshots",
	async ({ id }: { id: number; }) => {
		try {
			const response = await getGameScreenshots(id);
			return { gameId: id, data: response };
		} catch (error) {
			throw error; // Throw any errors for handling in the rejected case
		}
	}
);
