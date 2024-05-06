"use client";

import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarMenuToggle,
} from "@nextui-org/navbar";
import React, { useState } from "react";

import NavBarContent from "./NavBarContent";
import NavBarMenu from "./NavBarMenu";
import LogoFrame from "./NavBarLogo";
import SocialNavBar from "./SocialNavbar";

const NavbarFrame = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	return (
		<Navbar
			className={`w-full`}
			onMenuOpenChange={setIsMenuOpen}
			maxWidth={`full`}
			isBordered
			isBlurred
			position="sticky"
		>
			<div className={`container flex justify-center items-center`}>
				<NavbarBrand>
					<LogoFrame />
				</NavbarBrand>
				<NavBarContent />
				<NavbarContent justify="end">
					<div className={`max-sm:hidden`}>
						<SocialNavBar />
					</div>
					<NavbarMenuToggle
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						className="hidden max-md:flex h-6"
					/>
					<NavBarMenu />
				</NavbarContent>
			</div>
		</Navbar>
	);
};

export default NavbarFrame;
