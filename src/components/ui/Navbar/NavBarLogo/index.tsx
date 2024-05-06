import React from "react";
import { Link } from "@nextui-org/react";

const LogoFrame = () => {
	return (
		<React.Fragment>
			<Link href="/">
				<p className="font-bold text-inherit text-[2.8rem] text-success-500">
					G
				</p>
				<div className={`space-y-0 grid grid-cols-1 gap-0`}>
					<span className="font-bold text-inherit text-2xl !text-foreground-900">
						amies
					</span>
					<span className="relative -top-1 font-[500] text-inherit text-xs text-success-500">
						amers World
					</span>
				</div>
			</Link>
		</React.Fragment>
	);
};

export default LogoFrame;
