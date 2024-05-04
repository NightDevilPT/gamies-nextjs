"use client";

import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarMenuToggle,
} from "@nextui-org/navbar";
import React, { useEffect, useState } from "react";


import NavBarLogo from "./NavBarLogo";
import NavBarContent from "./NavBarContent";
import { getGenres } from "@/services/Request";
import NavBarMenu from "./NavBarMenu";
import LogoFrame from "./NavBarLogo";


const NavbarFrame = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	return (
		<Navbar
			className={`w-full container`}
			onMenuOpenChange={setIsMenuOpen}
			maxWidth="2xl"
			isBordered
			isBlurred
			shouldHideOnScroll
			position="sticky"
		>
			<NavbarBrand>
				<LogoFrame />
			</NavbarBrand>
			<NavBarContent />
			<NavbarContent justify="end">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="hidden max-md:flex"
				/>
				<NavBarMenu />
			</NavbarContent>
		</Navbar>
	);
};

export default NavbarFrame;
