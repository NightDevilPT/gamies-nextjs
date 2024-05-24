"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { RootState } from "@/redux/store";
import { gameTypeLayoutProps } from "@/types/category-card";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export const GameTypeLayout = ({ type, slug }: gameTypeLayoutProps) => {
	const dispatch = useAppDispatch();
	const params = usePathname();
	const { platform } = useAppSelector((state: RootState) => state.platforms);

	useEffect(() => {
		if (platform.results.length > 0) {
			const lastParams = params.split("/")[params.split("/").length - 1];
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
			></div>
		</div>
	);
};
