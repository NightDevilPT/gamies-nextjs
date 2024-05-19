"use client";

import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export interface BannerIprops {
	imageUrl?: string;
}

const BannerFrame = ({ imageUrl }: BannerIprops) => {
	const params = usePathname();
	const [image, setImage] = useState<string>("");
	const { genres } = useAppSelector((state: RootState) => state.genres);
	const { games } = useAppSelector((state: RootState) => state.games);
	const { platform } = useAppSelector((state: RootState) => state.platforms);

	useEffect(() => {
		if (imageUrl) {
			setImage(imageUrl);
		} else if (params === "/category/platform") {
			const randomResultsIndex = Math.floor(
				Math.random() * (platform?.results?.length ?? 0)
			);
			const randomPlatformsIndex = Math.floor(
				Math.random() *
					(platform?.results?.[randomResultsIndex]?.platforms
						?.length ?? 0)
			);
			setImage(
				platform?.results?.[randomResultsIndex]?.platforms?.[
					randomPlatformsIndex
				]?.image_background
			);
		} else if (params === "/category/genres") {
			const randomIndex = Math.floor(
				Math.random() * genres.results.length
			);
			setImage(genres.results[randomIndex].image_background);
		} else {
			if (games.results) {
				const randomIndex = Math.floor(
					Math.random() * games.results.length
				);
				setImage(games.results[randomIndex].background_image);
			}
		}
	}, [params, platform, genres, games]);

	return (
		<div
			className={`w-full h-96 rounded-md overflow-hidden bg-default-50 relative`}
		>
			<Image
				src={image}
				className={`w-full h-full object-cover`}
				alt=""
				fill
			/>
		</div>
	);
};

export default BannerFrame;
