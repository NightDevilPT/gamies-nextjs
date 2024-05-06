"use client";

import React, { useState } from "react";
import { Selection } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";

import { SidebarShowProps } from "@/types/type";
import ListBoxWrapper from "./ListBoxWrapper";

import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

const SidebarFrame = () => {
	const [selectedKey, setSelectedKeys] = useState<Selection>(new Set([]));
	const [show, setShow] = useState<SidebarShowProps>({
		showGenres: true,
		showPlatforms: false,
	});
	const { genres } = useAppSelector((state: RootState) => state.genres);
	const { platform } = useAppSelector((state: RootState) => state.platforms);

	return (
		<div className={`w-60 h-[100%-4rem] grid grid-cols-1 bg-default-50 gap-2 p-2 rounded-md`}>
			<div
				className={`w-full h-auto transition-all duration-300 grid grid-cols-1 bg-default-100 rounded-md overflow-hidden`}
			>
				<button
					className={`text-left px-3 py-2 text-xm font-[500] text-foreground-500 hover:text-foreground-700 transition-all duration-300 flex justify-between items-center`}
					onClick={() => {
						setShow({
							showGenres: !show.showGenres,
							showPlatforms: false,
						});
					}}
				>
					All Genres
					<IoIosArrowForward
						className={`w-4 h-4 ${
							show.showGenres && "rotate-90"
						} transition-all duration-300`}
					/>
				</button>
				<ListBoxWrapper
					data={genres.results}
					show={show.showGenres}
					setSelectedKey={setSelectedKeys}
					selectedKey={selectedKey}
				/>
			</div>

			<div
				className={`w-full h-auto transition-all duration-300 grid grid-cols-1 bg-default-100 rounded-md overflow-hidden`}
			>
				<button
					className={`text-left px-3 py-2 text-xm font-[500] text-foreground-500 hover:text-foreground-700 transition-all duration-300 flex justify-between items-center`}
					onClick={() => {
						setShow({
							showGenres: false,
							showPlatforms: !show.showPlatforms,
						});
					}}
				>
					All Platforms
					<IoIosArrowForward
						className={`w-4 h-4 ${
							show.showPlatforms && "rotate-90"
						} transition-all duration-300`}
					/>
				</button>
				<ListBoxWrapper
					data={platform.results}
					show={show.showPlatforms}
					setSelectedKey={setSelectedKeys}
					selectedKey={selectedKey}
				/>
			</div>

			<div
				className={`w-full h-auto transition-all duration-300 grid grid-cols-1 bg-default-100 rounded-md overflow-hidden`}
			>
				<button
					className={`text-left px-3 py-2 text-xm font-[500] text-foreground-500 hover:text-foreground-700 transition-all duration-300`}
					onClick={() => {
						setShow({
							showPlatforms: false,
							showGenres: false,
						});
					}}
				>
					All Games
				</button>
			</div>

			<div
				className={`w-full h-auto transition-all duration-300 grid grid-cols-1 bg-default-100 rounded-md overflow-hidden`}
			>
				<button
					className={`text-left px-3 py-2 text-xm font-[500] text-foreground-500 hover:text-foreground-700 transition-all duration-300`}
					onClick={() => {
						setShow({
							showPlatforms: false,
							showGenres: false,
						});
					}}
				>
					Developers
				</button>
			</div>

			<div
				className={`w-full h-auto transition-all duration-300 grid grid-cols-1 bg-default-100 rounded-md overflow-hidden`}
			>
				<button
					className={`text-left px-3 py-2 text-xm font-[500] text-foreground-500 hover:text-foreground-700 transition-all duration-300`}
					onClick={() => {
						setShow({
							showPlatforms: false,
							showGenres: false,
						});
					}}
				>
					Publishers 
				</button>
			</div>
			
			<div
				className={`w-full h-auto transition-all duration-300 grid grid-cols-1 bg-default-100 rounded-md overflow-hidden`}
			>
				<button
					className={`text-left px-3 py-2 text-xm font-[500] text-foreground-500 hover:text-foreground-700 transition-all duration-300`}
					onClick={() => {
						setShow({
							showPlatforms: false,
							showGenres: false,
						});
					}}
				>
					Creators 
				</button>
			</div>
		</div>
	);
};

export default SidebarFrame;
