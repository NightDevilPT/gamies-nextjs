export interface TagGame {
	id: number;
	slug: string;
	name: string;
	added: number;
  }
  
  export interface Tag {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
	language: string;
	games: TagGame[];
  }
  
  export interface TagsResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: Tag[];
  }
  