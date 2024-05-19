import React from "react";
import Image from "next/image";

const WebImageBanner = ({ imageUrl }: { imageUrl?: string }) => {	
	return (
		<div
			className={`fixed left-0 top-0 -z-10 w-full h-[600px] rounded-md overflow-hidden bg-default-50`}
		>
			{imageUrl && (
				<Image
					src={imageUrl}
					className={`w-full h-full object-cover`}
					alt=""
					fill
				/>
			)}
			<div className={`w-full h-full bg-black/70 absolute left-0 top-0`}></div>
			<div className={`w-full h-full bg-gradient-to-t from-black to-transparent relative z-0`}></div>
		</div>
	);
};

export default WebImageBanner;
