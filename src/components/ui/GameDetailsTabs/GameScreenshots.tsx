import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { Screenshot } from "@/types/game-details";
import { Image } from "@nextui-org/react";
import React from "react";

const GameScreenshots = ({ id }: { id: number }) => {
	const { screenshots } = useAppSelector(
		(state: RootState) => state.gameScreenshots
	);
	return (
		<div
			className={`w-full h-auto grid grid-cols-4 gap-3 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1`}
		>
			{(screenshots[id]?.results.length===0 || !screenshots[id]?.results)  && (
				<div
					className={`w-full text-left font-[500] text-foreground-900 text-base col-span-full`}
				>
					No Screenshots available
				</div>
			)}
			{screenshots[id]?.results.map((items: Screenshot) => (
				<div
					className={`w-full aspect-video overflow-hidden`}
					key={items.id}
				>
					<Image
						src={items.image}
						className={`w-full h-auto object-cover aspect-video`}
					/>
				</div>
			))}
		</div>
	);
};

export default GameScreenshots;
