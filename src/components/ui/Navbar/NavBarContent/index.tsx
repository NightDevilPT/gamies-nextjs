import React from "react";
import Link from "next/link";
import { NavbarContent, NavbarItem } from "@nextui-org/navbar";

const NavBarContent = () => {
	return (
		<NavbarContent justify="center" className={`flex max-md:hidden`}>
			<NavbarItem
				className={`hover:text-success-500 hover:underline underline-offset-8 transition-all duration-300`}
			>
				<Link href={"/category/genres"}>Genres</Link>
			</NavbarItem>
			<NavbarItem
				className={`hover:text-success-500 hover:underline underline-offset-8 transition-all duration-300`}
			>
				<Link href={"/category/platform"}>Platform</Link>
			</NavbarItem>
			<NavbarItem
				className={`hover:text-success-500 hover:underline underline-offset-8 transition-all duration-300`}
			>
				<Link href={"/category/games"}>Games</Link>
			</NavbarItem>
			<NavbarItem
				className={`hover:text-success-500 hover:underline underline-offset-8 transition-all duration-300`}
			>
				<Link href={"#"}>Browse</Link>
			</NavbarItem>
		</NavbarContent>
	);
};

export default NavBarContent;
