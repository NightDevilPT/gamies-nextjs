export interface Platform {
	id: number;
	name: string;
	slug: string;
  }
  
  export interface Store {
	id: number;
	name: string;
	slug: string;
  }
  
  export interface Rating {
	id: number;
	title: string;
	count: number;
	percent: number;
  }
  
  export interface Tag {
	id: number;
	name: string;
	slug: string;
	language: string;
	games_count: number;
	image_background: string;
  }
  
  export interface ESRBRating {
	id: number;
	name: string;
	slug: string;
	name_en: string;
	name_ru: string;
  }
  
  export interface ShortScreenshot {
	id: number;
	image: string;
  }
  
  export interface PlatformGame {
	slug: string;
	name: string;
	playtime: number;
	platforms: { platform: Platform }[];
	stores: { store: Store }[];
	released: string;
	tba: boolean;
	background_image: string;
	rating: number | null;
	rating_top: number;
	ratings: Rating[];
	ratings_count: number;
	reviews_text_count: number;
	added: number;
	added_by_status: {
	  yet: number;
	  owned: number;
	  beaten: number;
	  toplay: number;
	  dropped: number;
	  playing: number;
	};
	metacritic: number | null;
	suggestions_count: number;
	updated: string;
	id: number;
	score: number | null;
	clip: any;
	tags: Tag[];
	esrb_rating: ESRBRating;
	user_game: any;
	reviews_count: number;
	saturated_color: string;
	dominant_color: string;
	short_screenshots: ShortScreenshot[];
	parent_platforms: { platform: Platform }[];
	genres: { id: number; name: string; slug: string }[];
  }
  
  export interface PlatformGamesResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: PlatformGame[];
	user_platforms: boolean;
  }
  