import { getGameVideos } from "@/services/Request";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGameVideos = createAsyncThunk(
	"games/fetchGameVideos",
	async ({ id,pageNo,limit }: { id: number;pageNo?:number;limit?:number }) => {
		try {
			const page = pageNo?pageNo:1;
			const pageSize = limit?limit:10
			const response = await getGameVideos(id,page,pageSize);
			return { gameId: id, data: response };
		} catch (error) {
			throw error; // Throw any errors for handling in the rejected case
		}
	}
);
