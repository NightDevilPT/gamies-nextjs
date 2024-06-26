export type ChildProps = {
	children: React.ReactNode;
};

export interface Game {
	id: number;
	slug: string;
	name: string;
	added: number;
}

export interface Genre {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
	games: Game[];
}

export interface GenresApiResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: Genre[];
}

export enum StatusResponse {
	PENDING = "PENDING",
	REJECTED = "REJECTED",
	FULLFILLED = "FULLFILLED",
}

type Params = {
	slugs: string;
	type:string;
};

export interface ParamsObject{
	params: Params;
};

export interface SidebarIprops {
	id: string;
	name: string;
	slug: string;
	image: string;
}

export interface SidebarShowProps{
	showGenres:boolean;
	showPlatforms:boolean;
}