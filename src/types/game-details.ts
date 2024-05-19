import { StatusResponse } from "./type";

export interface Platform {
	id: number;
	name: string;
	slug: string;
	image: string | null;
	year_end: number | null;
	year_start: number | null;
	games_count: number;
	image_background: string;
}

export interface MetacriticPlatform {
	metascore: number;
	url: string;
	platform: Platform;
}

export interface Rating {
	id: number;
	title: string;
	count: number;
	percent: number;
}

export interface ParentPlatform {
	platform: Platform;
}

export interface Requirements {
	minimum?: string;
	recommended?: string;
}

export interface Store {
	id: number;
	url: string;
	store: {
		id: number;
		name: string;
		slug: string;
		domain: string;
		games_count: number;
		image_background: string;
	};
}

export interface Developer {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
}

export interface Genre {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
}

export interface Tag {
	id: number;
	name: string;
	slug: string;
	language: string;
	games_count: number;
	image_background: string;
}

export interface Publisher {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
}

export interface EsrbRating {
	id: number;
	name: string;
	slug: string;
}

export interface GameDetails {
	id: number;
	slug: string;
	name: string;
	name_original: string;
	description: string;
	metacritic: number;
	metacritic_platforms: MetacriticPlatform[];
	released: string;
	tba: boolean;
	updated: string;
	background_image: string;
	background_image_additional: string;
	website: string;
	rating: number;
	rating_top: number;
	ratings: Rating[];
	reactions: Record<string, number>;
	added: number;
	added_by_status: Record<string, number>;
	playtime: number;
	screenshots_count: number;
	movies_count: number;
	creators_count: number;
	achievements_count: number;
	parent_achievements_count: number;
	reddit_url: string;
	reddit_name: string;
	reddit_description: string;
	reddit_logo: string;
	reddit_count: number;
	twitch_count: number;
	youtube_count: number;
	reviews_text_count: number;
	ratings_count: number;
	suggestions_count: number;
	alternative_names: string[];
	metacritic_url: string;
	parents_count: number;
	additions_count: number;
	game_series_count: number;
	user_game: any; // Update this type if needed
	reviews_count: number;
	saturated_color: string;
	dominant_color: string;
	parent_platforms: ParentPlatform[];
	platforms: {
		platform: Platform;
		released_at: string;
		requirements: Requirements;
	}[];
	stores: Store[];
	developers: Developer[];
	genres: Genre[];
	tags: Tag[];
	publishers: Publisher[];
	esrb_rating: EsrbRating;
	clip: any; // Update this type if needed
	description_raw: string;
}

export interface GameDetailsState {
	gameDetails: Record<number, GameDetails>;
	gameDetailsStatus: StatusResponse;
	gameDetailsError: string | null;
}

// types/screenshots.ts
export interface Screenshot {
	id: number;
	image: string;
	width: number;
	height: number;
	is_deleted: boolean;
}

export interface ScreenshotApiResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: Screenshot[];
}
