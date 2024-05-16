"use client";

import React, { useState } from "react";

import { RootState } from "@/redux/store";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import CategoryCards from "./CategoryCard";
import { Genre, StatusResponse } from "@/types/type";
import { Platform, PlatformResult } from "@/types/platform";
import { categoryLayoutProps } from "@/types/category-card";
import LoadingBoundry from "../LoadingBoudry";
import ErrorBoundry from "../ErorBoundry";
import GameCards from "./GameCards";
import { Game } from "@/types/games";
import { Button } from "@nextui-org/button";
import { fetchGame } from "@/redux/services/games";

const CategoryLayout = ({ title }: categoryLayoutProps) => {
	return (
		<div className={`w-full h-auto space-y-3 my-5`}>
			<h1
				className={`w-full h-auto text-3xl font-[600] text-forground-800 capitalize`}
			>
				{title}
			</h1>
			<div
				className={`w-full h-auto relative grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-2 max-[450px]:grid-cols-1 gap-5`}
			>
				{title.toLowerCase() === "platform" ? (
					<PlatformCards />
				) : title.toLowerCase() === "genres" ? (
					<GenresCards />
				) : (
					<GamesCards />
				)}
			</div>
		</div>
	);
};

const PlatformCards = () => {
	const { platform, platformError, platformStatus } = useAppSelector(
		(state: RootState) => state.platforms
	);
	if (platformStatus === StatusResponse.PENDING) {
		return <LoadingBoundry />;
	} else if (platformStatus === StatusResponse.REJECTED && platformError) {
		return <ErrorBoundry error={platformError} />;
	}

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
	const { genres, genresError, genresStatus } = useAppSelector(
		(state: RootState) => state.genres
	);
	if (genresStatus !== StatusResponse.FULLFILLED) {
		return <LoadingBoundry />;
	} else if (genresError) {
		return <ErrorBoundry error={genresError} />;
	}
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

const GamesCards = () => {
	const { games, gamesError, gamesStatus } = useAppSelector(
		(state: RootState) => state.games
	);
	const dispatch = useAppDispatch();

	function getPageNumber(url: string): number {
		const searchParams = new URLSearchParams(url.split("?")[1]);
		const pageNumber = searchParams.get("page");
		return pageNumber ? parseInt(pageNumber, 10) : 1;
	}

	const addNewGames = () => {
		if (games.next) {
			console.log(getPageNumber(games.next), "PageNext");
			dispatch(
				fetchGame({ page: getPageNumber(games.next), page_size: 10 })
			);
		}
	};

	return (
		<React.Fragment>
			{games?.results?.map((game: Game) => (
				<GameCards
					key={game.id + "-" + game.slug}
					released={game.released}
					id={game.id}
					name={game.name}
					slug={game.slug}
					image={game.background_image}
					genres={game.genres}
					parent_platforms={game.parent_platforms}
				/>
			))}
			{gamesStatus === StatusResponse.FULLFILLED && (
				<Button
					className={`col-span-full w-full`}
					color={"default"}
					onClick={addNewGames}
				>
					Load More
				</Button>
			)}
			{gamesStatus === StatusResponse.PENDING && (
				<div className={`col-span-full`}>
					<LoadingBoundry />
				</div>
			)}
		</React.Fragment>
	);
};

export default CategoryLayout;
