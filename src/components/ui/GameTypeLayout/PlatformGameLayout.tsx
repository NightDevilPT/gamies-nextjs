"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { RootState } from "@/redux/store";
import { gameTypeLayoutProps } from "@/types/category-card";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { fetchPlatformGame } from "@/redux/services/platform-games";
import { PlatformGame } from "@/types/platform-game";
import { Platform, PlatformResult } from "@/types/platform";
import GameCards from "../CategoryLayout/GameCards";
import { Button } from "@nextui-org/button";

export const PlatformGameTypeLayout = ({ type, slug }: gameTypeLayoutProps) => {
	const params = usePathname();
	const dispatch = useAppDispatch();
	const [currentPlatform, setCurrentPlatform] = useState<number | null>();
	const { platform } = useAppSelector((state: RootState) => state.platforms);
	const { platformGames } = useAppSelector(
		(state: RootState) => state.platformGames
	);

	function getPageNumber(url: string): number {
		const searchParams = new URLSearchParams(url.split("?")[1]);
		const pageNumber = searchParams.get("page");
		return pageNumber ? parseInt(pageNumber, 10) : 1;
	}

	const addNewGames = () => {
		if (
			currentPlatform &&
			platformGames[currentPlatform] &&
			platformGames[currentPlatform].next
		) {
			dispatch(
				fetchPlatformGame({
					pageNo: getPageNumber(
						platformGames[currentPlatform].next as string
					),
					limit: 10,
					platform: currentPlatform,
				})
			);
		}
	};

	useEffect(() => {
		if (platform.results.length > 0 && params) {
			const lastParams = params.split("/")[params.split("/").length - 1];
			const currentPlatformData = platform.results.filter(
				(items: PlatformResult) =>
					items.platforms.some(
						(items2: Platform) =>
							items2.slug.toLowerCase() ===
							lastParams.toLowerCase()
					)
			)[0];
			setCurrentPlatform(currentPlatformData.id);
			dispatch(
				fetchPlatformGame({
					pageNo: 1,
					limit: 10,
					platform: currentPlatformData.id,
				})
			);
		}
	}, [platform, params]);

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
					platformGames[currentPlatform]?.results.map(
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
					platformGames[currentPlatform] &&
					platformGames[currentPlatform]?.next && (
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
