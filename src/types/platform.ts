export interface Platform {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
	image: string;
	year_start: number;
	year_end: number;
}

export interface PlatformResult {
	id: number;
	name: string;
	slug: string;
	platforms: Platform[];
}

export interface PlatformsResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: PlatformResult[];
}
