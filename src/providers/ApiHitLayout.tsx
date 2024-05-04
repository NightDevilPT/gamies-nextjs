"use client";

import LoaderFrame from "@/components/common/LoaderFrame";
import LogoFrame from "@/components/ui/Navbar/NavBarLogo";
import { useAppDispatch } from "@/redux/hook";
import { fetchGameGenres } from "@/redux/services/game-genres";
import { fetchGamePlatform } from "@/redux/services/game-platform";
import { ChildProps } from "@/types/type";
import React, { useEffect, useState } from "react";

const ApiHitProvide = ({ children }: ChildProps) => {
	const dispatch = useAppDispatch();
	const [loading, setLoading] = useState<boolean>(false);

	const fetchAllData = async () => {
		setLoading(true);
		await new Promise((resolve) => setTimeout(resolve, 3000));
		await dispatch(fetchGameGenres());
		await dispatch(fetchGamePlatform());
		setLoading(false);
	};

	useEffect(() => {
		fetchAllData();
	}, []);

	if (loading) {
		return (
			<div
				className={`fixed w-full h-full left-0 top-0 bg-background flex justify-center items-center`}
			>
				<LogoFrame />
				<LoaderFrame />
			</div>
		);
	}

	return <React.Fragment>{children}</React.Fragment>;
};

export default ApiHitProvide;
