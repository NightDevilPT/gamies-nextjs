export interface Game {
	id: number;
	slug: string;
	name: string;
	released: string;
	tba: boolean;
	background_image: string;
	rating: number;
	rating_top: number;
	ratings: Rating[];
	ratings_count: number;
	reviews_text_count: number;
	added: number;
	added_by_status: AddedByStatus;
	metacritic: number | null;
	playtime: number;
	suggestions_count: number;
	updated: string;
	user_game: null | unknown;
	reviews_count: number;
	saturated_color: string;
	dominant_color: string;
	platforms: Platform[];
	parent_platforms: ParentPlatform[];
	genres: Genre[];
	stores: Store[];
	clip: null | unknown;
	tags: Tag[];
	esrb_rating: EsrbRating;
	short_screenshots: ShortScreenshot[];
}

export interface Rating {
	id: number;
	title: string;
	count: number;
	percent: number;
}

export interface AddedByStatus {
	yet: number;
	owned: number;
	beaten: number;
	toplay: number;
	dropped: number;
	playing: number;
}

export interface Platform {
	platform: PlatformDetail;
	released_at: string;
	requirements_en: null | Requirements;
	requirements_ru: null | Requirements;
}

export interface PlatformDetail {
	id: number;
	name: string;
	slug: string;
	image: null | unknown;
	year_end: null | number;
	year_start: null | number;
	games_count: number;
	image_background: string;
}

export interface Requirements {
	minimum: string;
	recommended: string;
}

export interface ParentPlatform {
	platform: PlatformDetail;
}

export interface Genre {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
}

export interface Store {
	id: number;
	store: StoreDetail;
}

export interface StoreDetail {
	id: number;
	name: string;
	slug: string;
	domain: string;
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

export interface EsrbRating {
	id: number;
	name: string;
	slug: string;
}

export interface ShortScreenshot {
	id: number;
	image: string;
}

export interface Filter {
	years: YearFilter[];
	nofollow_collections: string[];
}

export interface YearFilter {
	from: number;
	to: number;
	filter: string;
	decade: number;
	years: YearCount[];
	nofollow: boolean;
	count: number;
}

export interface YearCount {
	year: number;
	count: number;
	nofollow: boolean;
}

export interface GameResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: Game[];
}
