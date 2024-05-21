export interface GamePostsResponse {
    count: number;
    next: string;
    previous: string | null;
    results: GamePost[];
}

export interface GamePost {
    id: number;
    name: string;
    text: string;
    image: string | null;
    url: string;
    username: string;
    username_url: string;
    created: string;
}
