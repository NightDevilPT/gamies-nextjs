export interface categoryCardProps {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
	image?: string;
	title:string
}

export interface categoryLayoutProps {
	title:string;
}

export interface gameTypeLayoutProps {
	slug:string;
	type:string;
}