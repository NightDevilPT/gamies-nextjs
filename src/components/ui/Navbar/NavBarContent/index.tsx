import { NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import React from "react";

import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

const NavBarContent = () => {
	const { genres, genresError, genresStatus } = useAppSelector(
		(state: RootState) => state.genres
	);
	const { platform, platformError, platformStatus } = useAppSelector(
		(state: RootState) => state.platforms
	);

	return (
		<NavbarContent justify="center" className={`flex max-md:hidden`}>
			<NavbarItem>
				<Link href={"/category/genres"}>Genres</Link>
			</NavbarItem>
			<NavbarItem>
				<Link href={"/category/platform"}>Platform</Link>
			</NavbarItem>
			<NavbarItem>
				<Link href={"#"}>Games</Link>
			</NavbarItem>
			<NavbarItem>
				<Link href={"#"}>Browse</Link>
			</NavbarItem>
		</NavbarContent>
	);
};

export default NavBarContent;
