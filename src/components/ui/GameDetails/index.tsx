"use client";

import React, { useEffect, useState } from "react";

import WebImageBanner from "../WebBanner";
import { platformIcons } from "@/config/icons";
import { Rating } from "@/types/game-details";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { fetchGameDetails } from "@/redux/services/game-details";
import CustomBreadCrumb from "@/components/common/Breadcrumb";
import { fetchGameScreenshots } from "@/redux/services/game-screenshots";
import GameDetailsTab from "../GameDetailsTabs";
import { fetchGameVideos } from "@/redux/services/game-videos";
import { fetchSimilarGame } from "@/redux/services/similar-games";
import { fetchGamePosts } from "@/redux/services/game-posts";

const GameDetails = ({ id }: { id: number }) => {
	const [showMore, setShowMore] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const gameDetails = useAppSelector(
		(state) => state.gameDetails.gameDetails
	);
	const gameScreenshots = useAppSelector(
		(state) => state.gameScreenshots.screenshots[id]
	);

	const fetchAllGameDetails = async () => {
		dispatch(fetchGameDetails({ id }));
		dispatch(fetchGameScreenshots({ id }));
		dispatch(fetchGameVideos({ id }));
		dispatch(fetchSimilarGame({ id }));
		dispatch(fetchGamePosts({ id }));
	};

	useEffect(() => {
		fetchAllGameDetails();
	}, []);

	return (
		<div className={`w-full h-auto`}>
			<CustomBreadCrumb
				data={[
					{ href: "/", name: "Home" },
					{ href: `/category/games`, name: "Game" },
					{
						href: `/game-details/${id}`,
						name: `${gameDetails[id]?.name}`,
					},
				]}
			/>
			{gameDetails[id] && (
				<WebImageBanner imageUrl={gameDetails[id]?.background_image} />
			)}
			<div
				className={`flex justify-start items-start flex-col gap-2 mt-3`}
			>
				{/* Platform Images Component */}
				<div
					className={`w-full h-auto flex justify-start items-start gap-3`}
				>
					{gameDetails[id]?.parent_platforms.map((items) => {
						return (
							<div className={`w-3 h-3`} key={items.platform.id}>
								{platformIcons[items.platform.slug]}
							</div>
						);
					})}
				</div>

				{/* Game Name Title */}
				<h1
					className={`text-4xl max-md:text-3xl line-clamp-2 font-[700]`}
				>
					{gameDetails[id]?.name}
				</h1>

				{/* Game Rating Component */}
				<div
					className={`w-full h-auto flex justify-start items-start gap-4 flex-wrap`}
				>
					{gameDetails[id]?.ratings?.map((items: Rating) => {
						return (
							<div
								className={`grid grid-cols-1 min-w-24`}
								key={items.id + "-" + items.title}
							>
								<p
									className={`text-foreground-400 text-sm font-[500] capitalize`}
								>
									{items.title}
								</p>
								<p
									className={`text-foreground-700 text-sm font-[700]`}
								>
									{items.percent}%
								</p>
							</div>
						);
					})}
				</div>

				{/* Game About Component */}
				<div className={`w-full h-auto`}>
					<p
						className={`w-full h-auto text-xl font-[500] text-foreground-700`}
					>
						About
					</p>
					<p
						className={`w-full h-auto ${
							!showMore && "line-clamp-4"
						} text-foreground-400 font-[500] text-sm`}
					>
						{gameDetails[id]?.description_raw}
					</p>
					<button
						className={`text-foreground-700 text-xs font-[400]`}
						onClick={() => {
							setShowMore(!showMore);
						}}
					>
						{showMore ? "Show Less" : "Show More"}
					</button>
				</div>
			</div>
			<GameDetailsTab id={id} />
		</div>
	);
};

export default GameDetails;
