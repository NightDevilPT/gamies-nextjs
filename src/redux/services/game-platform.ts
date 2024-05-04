import { genresDummyData } from '@/dummyData/genres';
import { dummyPlatform } from '@/dummyData/platform';
import { getPlatforms } from '@/services/Request';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchGamePlatform = createAsyncThunk(
  "genres/fetchGamePlatform",
  async () => {
    try {
      const response = await getPlatforms();
      return response;
      // return dummyPlatform;
    } catch (error) {
      throw error; // Throw any errors for handling in the rejected case
    }
  }
);
