import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { fetchSimilarGame } from "@/redux/services/similar-games";
import { RootState } from "@/redux/store";
import { SimilarGame } from "@/types/similar-games";
import { Button } from "@nextui-org/react";
import React from "react";
import GameCards from "../CategoryLayout/GameCards";

const SimilarGames = ({ id }: { id: number }) => {
	const { similarGames } = useAppSelector(
		(state: RootState) => state.similarGames
	);
	const dispatch = useAppDispatch();

	function getPageNumber(url: string): number {
		const searchParams = new URLSearchParams(url.split("?")[1]);
		const pageNumber = searchParams.get("page");
		return pageNumber ? parseInt(pageNumber, 10) : 1;
	}

	const addGamesVideos = () => {
		const nextPageUrl = similarGames[id]?.next;
		if (nextPageUrl) {
			const pageNo = getPageNumber(nextPageUrl) || 1;
			dispatch(fetchSimilarGame({ id, pageNo, limit: 10 }));
		}
	};

	return (
		<div
			className={`w-full h-auto grid grid-cols-3 gap-5 max-xl:grid-cols-2 max-sm:grid-cols-1`}
		>
			{(similarGames[id]?.results.length === 0 ||
				!similarGames[id]?.results) && (
				<div
					className={`w-full text-left font-[500] text-foreground-900 text-base col-span-full`}
				>
					No Screenshots available
				</div>
			)}
			{similarGames[id]?.results.map((items: SimilarGame) => {
				return (
					<div
						className={`w-full h-auto`}
						key={items.id}
					>
						<GameCards
							id={items.id}
							image={items.background_image}
							parent_platforms={items.parent_platforms}
							name={items.name}
							slug={items.slug}
							genres={items.genres}
							released={items.released}
						/>
					</div>
				);
			})}
			{similarGames[id]?.next && (
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

export default SimilarGames;
