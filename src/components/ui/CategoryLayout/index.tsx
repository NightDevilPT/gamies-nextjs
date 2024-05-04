"use client";

import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { categoryLayoutProps } from "@/types/category-card";
import { Platform, PlatformResult } from "@/types/platform";
import React from "react";
import CategoryCards from "./CategoryCard";
import { Genre } from "@/types/type";

const CategoryLayout = ({ title }: categoryLayoutProps) => {
	return (
		<div className={`w-full h-auto space-y-3`}>
			<h1
				className={`w-full h-auto text-3xl font-[600] text-success-500 capitalize`}
			>
				{title}
			</h1>
			<div
				className={`w-full h-auto grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-[450px]:grid-cols-1 gap-5`}
			>
				{title.toLowerCase() === "platform" ? (
					<PlatformCards />
				) : (
					<GenresCards />
				)}
			</div>
		</div>
	);
};

const PlatformCards = () => {
	const { platform } = useAppSelector((state: RootState) => state.platforms);
	return platform?.results?.map((platformResult: PlatformResult) => {
		return platformResult.platforms.map(
			({ id, name, slug, games_count, image_background }: Platform) => {
				return (
					<CategoryCards
						key={slug + id}
						id={id}
						name={name}
						slug={slug}
						games_count={games_count}
						image_background={image_background}
					/>
				);
			}
		);
	});
};

const GenresCards = () => {
	const { genres } = useAppSelector((state: RootState) => state.genres);
	return genres?.results?.map(
		({ id, name, slug, games_count, image_background }: Genre) => {
			return (
				<CategoryCards
					key={slug + id}
					id={id}
					name={name}
					slug={slug}
					games_count={games_count}
					image_background={image_background}
				/>
			);
		}
	);
};

export default CategoryLayout;
