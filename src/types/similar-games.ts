export interface SimilarGameSeriesResponse {
    count: number;
    next: string;
    previous: string | null;
    results: SimilarGame[];
}

export interface SimilarGame {
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
    user_game: null | UserGame;
    reviews_count: number;
    community_rating: number;
    saturated_color: string;
    dominant_color: string;
    platforms: PlatformInfo[];
    parent_platforms: ParentPlatform[];
    genres: Genre[];
    stores: Store[];
    clip: null | Clip;
    tags: Tag[];
    esrb_rating: EsrbRating;
    short_screenshots: Screenshot[];
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
    toplay: number;
    playing: number;
}

export interface UserGame {
    id: number;
    slug: string;
    name: string;
}

export interface PlatformInfo {
    platform: Platform;
    released_at: string | null;
    requirements_en: Requirements | null;
    requirements_ru: Requirements | null;
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
    image: string | null;
    year_end: number | null;
    year_start: number;
    games_count: number;
    image_background: string;
}

export interface Requirements {
    minimum: string;
    recommended: string;
}

export interface ParentPlatform {
    platform: Platform;
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
    store: StoreDetails;
}

export interface StoreDetails {
    id: number;
    name: string;
    slug: string;
}

export interface Clip {
    clip: string;
    clips: Clips;
    video: string;
    preview: string;
}

export interface Clips {
    '320': string;
    '640': string;
    full: string;
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

export interface Screenshot {
    id: number;
    image: string;
}
