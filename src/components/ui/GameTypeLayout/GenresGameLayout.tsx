"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { RootState } from "@/redux/store";
import { gameTypeLayoutProps } from "@/types/category-card";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { PlatformGame } from "@/types/platform-game";
import GameCards from "../CategoryLayout/GameCards";
import { Button } from "@nextui-org/button";
import { fetchGenresGame } from "@/redux/services/genres-games";
import { Genre } from "@/types/type";

export const GenresGameTypeLayout = ({ type, slug }: gameTypeLayoutProps) => {
	const params = usePathname();
	const dispatch = useAppDispatch();
	const [currentPlatform, setCurrentPlatform] = useState<number | null>();
	const { genres } = useAppSelector((state: RootState) => state.genres);
	const { genresGames } = useAppSelector(
		(state: RootState) => state.genresGames
	);

	function getPageNumber(url: string): number {
		const searchParams = new URLSearchParams(url.split("?")[1]);
		const pageNumber = searchParams.get("page");
		return pageNumber ? parseInt(pageNumber, 10) : 1;
	}

	const addNewGames = () => {
		if (
			currentPlatform &&
			genresGames[currentPlatform] &&
			genresGames[currentPlatform].next
		) {
			dispatch(
				fetchGenresGame({
					pageNo: getPageNumber(
						genresGames[currentPlatform].next as string
					),
					limit: 10,
					genres: currentPlatform,
				})
			);
		}
	};

	useEffect(() => {
		if (genres.results.length > 0 && params) {
			const currentPlatformData = genres.results.filter(
				(items: Genre) => items.slug.toLowerCase()===type.toLowerCase()
			)[0];

			setCurrentPlatform(currentPlatformData.id);
			dispatch(
				fetchGenresGame({
					pageNo: 1,
					limit: 10,
					genres: currentPlatformData.id,
				})
			);
		}
	}, [genres, params]);

	return (
		<div className={`w-full h-auto space-y-3 my-5`}>
			<h1
				className={`w-full h-auto text-3xl font-[600] text-forground-800 capitalize`}
			>
				{slug} Games
			</h1>
			<div
				className={`w-full h-auto relative grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-2 max-[450px]:grid-cols-1 gap-5`}
			>
				{currentPlatform &&
					genresGames[currentPlatform]?.results.map(
						(items: PlatformGame) => {
							return (
								<GameCards
									key={items.id + "-" + items.slug}
									released={items.released}
									id={items.id}
									name={items.name}
									slug={items.slug}
									image={items.background_image}
									genres={items.genres}
									parent_platforms={items.parent_platforms}
								/>
							);
						}
					)}
				{currentPlatform &&
					genresGames[currentPlatform] &&
					genresGames[currentPlatform]?.next && (
						<Button
							className={`col-span-full w-full`}
							color={"default"}
							onClick={addNewGames}
						>
							Load More
						</Button>
					)}
			</div>
		</div>
	);
};
