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

const concatenateUrl = (url:string)=>{
	return url+`?key=`+env.API
}

export const getGenres = async () => {
	const response = await axiosInstance.get(`/genres?key=`+env.API);
	console.log(response.data);
	return response.data
};

export const getPlatforms = async () => {
	const response = await axiosInstance.get(`/platforms/lists/parents?key=`+env.API);
	console.log(response.data);
	return response.data
};
