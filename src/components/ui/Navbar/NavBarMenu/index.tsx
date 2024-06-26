import React from "react";
import { Divider } from "@nextui-org/react";
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";

import SocialNavBar from "../SocialNavbar";
import Link from "next/link";

const menuItems = ["Genres", "Platforms", "Games", "Browse"];

const NavBarMenu = () => {
	return (
		<NavbarMenu>
			{menuItems.map((item, index) => (
				<NavbarMenuItem key={`${item}-${index}`}>
					<Link
						className="w-full text-foreground-900 hover:text-success-500 text-sm font-[500]"
						href={`/category/${item.toLowerCase()}`}
					>
						{item}
					</Link>
				</NavbarMenuItem>
			))}
			<Divider className="my-3" />
			<SocialNavBar />
		</NavbarMenu>
	);
};

export default NavBarMenu;
