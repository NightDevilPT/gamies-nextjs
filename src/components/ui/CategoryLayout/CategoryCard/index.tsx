import React from "react";
// import { Image } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

import { categoryCardProps } from "@/types/category-card";
import Image from "next/image";

const CategoryCards = ({
	name,
	id,
	slug,
	image_background,
	games_count,
}: categoryCardProps) => {
	return (
		<Card
			className={`w-full h-60 flex justify-start items-start relative group cursor-pointer`}
		>
			<Image
				src={image_background}
				className="absolute left-0 top-0 w-full h-60 object-cover group-hover:scale-110 transition-all duration-400"
				alt=""
				fill
			/>
			<CardBody
				className={`relative z-10 w-full h-full bg-gradient-to-b from-background/30 to-background/80 flex justify-end items-end flex-col gap-2`}
			>
				<CardHeader className={`line-clamp-1 p-0`}>{name}</CardHeader>
				<Divider className="" />
				<CardFooter
					className={`w-full h-auto grid grid-cols-1 gap-1 p-0 pb-3`}
				>
					<div
						className={`w-full h-auto flex justify-between items-center`}
					>
						<span className={`text-xs font-[500]`}>Games</span>
						<span className={`text-xs font-[500]`}>
							{games_count}
						</span>
					</div>
					<div
						className={`w-full h-auto flex justify-between items-center`}
					>
						<span className={`text-xs font-[500]`}>Slug</span>
						<span className={`text-xs font-[500]`}>{slug}</span>
					</div>
				</CardFooter>
			</CardBody>
		</Card>
	);
};

export default CategoryCards;
