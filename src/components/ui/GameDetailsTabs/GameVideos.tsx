import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { fetchGameVideos } from "@/redux/services/game-videos";
import { RootState } from "@/redux/store";
import { Screenshot } from "@/types/game-details";
import { Movie } from "@/types/game-videos";
import { Button } from "@nextui-org/react";
import React from "react";

const GameVideos = ({ id }: { id: number }) => {
	const { videos } = useAppSelector((state: RootState) => state.gameVideos);
	const { screenshots } = useAppSelector(
		(state: RootState) => state.gameScreenshots
	);
	const dispatch = useAppDispatch();

	const getRandomImage = (images: Screenshot[]) => {
		if (images && images.length > 0) {
			const randomIndex = Math.floor(Math.random() * images.length);
			return images[randomIndex].image;
		}
		return null; // Return null if no images are available
	};

	function getPageNumber(url: string): number {
		const searchParams = new URLSearchParams(url.split("?")[1]);
		const pageNumber = searchParams.get("page");
		return pageNumber ? parseInt(pageNumber, 10) : 1;
	}

	const addGamesVideos = () => {
		const nextPageUrl = videos[id]?.next;
		if (nextPageUrl) {
			const pageNo = getPageNumber(nextPageUrl) || 1;
			dispatch(fetchGameVideos({ id, pageNo, limit: 10 }));
		}
	};

	return (
		<div
			className={`w-full h-auto grid grid-cols-3 gap-5 max-xl:grid-cols-2 max-sm:grid-cols-1`}
		>
			{(videos[id]?.results.length === 0 || !videos[id]?.results) && (
				<div
					className={`w-full text-left font-[500] text-foreground-900 text-base col-span-full`}
				>
					No Videos available
				</div>
			)}
			{videos[id]?.results.map((items: Movie) => {
				const banner = getRandomImage(screenshots[id]?.results);
				return (
					<div
						className={`w-full aspect-video overflow-hidden`}
						key={items.id}
					>
						<video
							className={`aspect-video w-full`}
							controls
							preload="none"
							poster={banner ? banner : items.preview}
						>
							<source src={items.data.max} type="video/mp4" />
							<track
								src={items.data.max}
								kind="subtitles"
								srcLang="en"
								label="English"
							/>
							Your browser does not support the video tag.
						</video>
					</div>
				);
			})}
			{videos[id]?.next && (
				<Button
					className={`col-span-full w-full`}
					color={"default"}
					onClick={addGamesVideos}
				>
					Load More
				</Button>
			)}
		</div>
	);
};

export default GameVideos;
