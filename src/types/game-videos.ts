export interface MovieData {
	"480": string;
	max: string;
}

export interface Movie {
	id: number;
	name: string;
	preview: string;
	data: MovieData;
}

export interface MovieList {
	count: number;
	next: string | null;
	previous: string | null;
	results: Movie[];
}
