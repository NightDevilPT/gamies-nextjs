import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { FaImages } from "react-icons/fa6";
import { MdVideoLibrary } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { IoGameController } from "react-icons/io5";
import GameScreenshots from "./GameScreenshots";

export default function GameDetailsTab({ id }: { id: number }) {
	return (
		<div className="flex w-full flex-col mt-3">
			<Tabs aria-label="Options" color={"success"} variant="bordered">
				<Tab
					key="games"
					title={
						<div className="h-full flex items-center justify-center space-x-2 font-[500] text-sm">
							<IoGameController className={`w-4 h-4`} />
							<span>Games</span>
						</div>
					}
				/>
				<Tab
					key="photos"
					title={
						<div className="h-full flex items-center justify-center space-x-2 font-[500] text-sm">
							<FaImages className={`w-4 h-4`} />
							<span>Screenshots</span>
						</div>
					}
				>
					<GameScreenshots id={id} />
				</Tab>
				<Tab
					key="videos"
					title={
						<div className="h-full flex items-center justify-center space-x-2 font-[500] text-sm">
							<MdVideoLibrary className={`w-4 h-4`} />
							<span>Videos</span>
						</div>
					}
				/>
				<Tab
					key="posts"
					title={
						<div className="h-full flex items-center justify-center space-x-2 font-[500] text-sm">
							<VscPreview className={`w-4 h-4`} />
							<span>Posts</span>
						</div>
					}
				/>
			</Tabs>
		</div>
	);
}
