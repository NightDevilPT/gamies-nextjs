// axiosInstance.js

import { env } from "@/config/env";
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: env.URL,
	timeout: 5000,
	headers: {
		"Content-Type": "application/json", // Adjust headers as needed
	},
});

const concatenateUrl = (url: string) => {
	return url + `?key=` + env.API;
};

export const getGenres = async () => {
	const response = await axiosInstance.get(`/genres?key=` + env.API);
	return response.data;
};

export const getPlatforms = async () => {
	const response = await axiosInstance.get(
		`/platforms/lists/parents?key=` + env.API
	);
	return response.data;
};

export const getGames = async (page: number, page_size: number = 10) => {
	const response = await axiosInstance.get(
		`/games?key=` + env.API + `&page=${page}&page_size=${page_size}`
	);
	return response.data;
};

export const getGameDetails = async (id: number) => {
	const response = await axiosInstance.get(`/games/${id}?key=` + env.API);
	return response.data;
};

export const getGameScreenshots = async (id: number) => {
	const response = await axiosInstance.get(
		`/games/${id}/screenshots?key=` + env.API
	);
	return response.data;
};

export const getGameVideos = async (
	id: number,
	pageNo: number,
	limit: number
) => {
	const response = await axiosInstance.get(
		`/games/${id}/movies?key=` +
			env.API +
			`&page=${pageNo}&page_size=${limit}`
	);
	return response.data;
};

export const getSimilarGames = async (
	id: number,
	pageNo: number,
	limit: number
) => {
	const response = await axiosInstance.get(
		`/games/${id}/game-series?key=` +
			env.API +
			`&page=${pageNo}&page_size=${limit}`
	);
	return response.data;
};

export const getGamePosts = async (
	id: number,
	pageNo: number,
	limit: number
) => {
	const response = await axiosInstance.get(
		`/games/${id}/reddit?key=` +
			env.API +
			`&page=${pageNo}&page_size=${limit}`
	);
	return response.data;
};
