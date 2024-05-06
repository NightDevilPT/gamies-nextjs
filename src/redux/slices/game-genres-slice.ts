import { createSlice } from "@reduxjs/toolkit";
import { fetchGameGenres } from "../services/game-genres";
import { GenresApiResponse, StatusResponse } from "@/types/type";


export const gameGenresSlice = createSlice({
  name: "genres",
  initialState: {
    genres: {} as GenresApiResponse,
    genresStatus: StatusResponse.PENDING as StatusResponse,
    genresError: null as string | null, // Initialize error state
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchGameGenres.pending,
      (state, action) => {
        state.genresStatus = StatusResponse.PENDING;
        state.genresError = null; // Reset error state when pending
      }
    );
    builder.addCase(fetchGameGenres.fulfilled, (state, action) => {
      state.genresStatus = StatusResponse.FULLFILLED;
      state.genres = action.payload;
      state.genresError = null;
    });
    builder.addCase(fetchGameGenres.rejected, (state, action) => {
      state.genresStatus = StatusResponse.REJECTED;
      state.genresError = action.error.message || "An error occurred";
    });
  },
});
