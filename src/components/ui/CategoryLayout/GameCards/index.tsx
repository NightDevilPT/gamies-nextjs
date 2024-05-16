import { platformIcons } from "@/config/icons";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { Genre, ParentPlatform } from "@/types/games";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export interface GameCardIprops {
	id: number;
	image: string;
	name: string;
	slug: string;
	released: string;
	genres: Genre[];
	parent_platforms: ParentPlatform[];
}

const GameCards = ({
	id,
	image,
	parent_platforms,
	name,
	slug,
	genres,
	released,
}: GameCardIprops) => {
	console.log(image, parent_platforms, "###");
	return (
		<Link href={`/game-details/${id}`}>
			<Card
				className={`w-full h-auto rounded-md space-y-2 cursor-pointer`}
			>
				<div
					className={`w-full aspect-video overflow-hidden rounded-md`}
				>
					<Image
						src={image}
						className="w-full h-full object-cover group-hover:scale-110 transition-all duration-400"
						alt=""
					/>
				</div>
				<CardBody>
					<h1 className={`text-base line-clamp-1 font-[600]`}>
						{name}
					</h1>
					<div
						className={`flex justify-between items-center gap-2 py-1`}
					>
						<div className={`w-auto h-auto flex gap-2`}>
							{parent_platforms.map((items: ParentPlatform) => (
								<div
									className={`w-3 h-3`}
									key={id + "-" + items.platform.id}
								>
									{platformIcons[items.platform.slug]}
								</div>
							))}
						</div>
					</div>
					<Divider className="my-2" />
					<div
						className={`flex justify-between items-center gap-4 w-full text-[14px] font-[400]`}
					>
						<span className={`text-foreground-500`}>
							Release Date :
						</span>
						<span>
							{new Date(released).toLocaleDateString("en-GB", {
								day: "2-digit",
								month: "short",
								year: "numeric",
							})}
						</span>
					</div>
					<Divider className="my-2" />
					<div
						className={`flex justify-between items-center gap-4 w-full text-[14px] font-[400]`}
					>
						<span className={`text-foreground-500`}>Genres :</span>
						<span>
							{genres
								.map((genre, index) => genre.slug)
								.join(", ")}
						</span>
					</div>
				</CardBody>
			</Card>
		</Link>
	);
};

export default GameCards;
