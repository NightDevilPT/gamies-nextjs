import { genresDummyData } from '@/dummyData/genres';
import { getGenres } from '@/services/Request';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchGameGenres = createAsyncThunk(
  "genres/fetchGameGenres",
  async () => {
    try {
      const response = await getGenres();
      return response;
    } catch (error) {
      throw error; // Throw any errors for handling in the rejected case
    }
  }
);
