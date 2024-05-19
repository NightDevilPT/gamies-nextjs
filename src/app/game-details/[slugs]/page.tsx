
import GameDetails from "@/components/ui/GameDetails";
import { ParamsObject } from "@/types/type";
import React from "react";

const page = ({ params }: ParamsObject) => {
	return (
		<div className={`max-sm:px-5 w-full`}>
			<GameDetails id={parseInt(params.slugs)} />
		</div>
	);
};

export default page;
