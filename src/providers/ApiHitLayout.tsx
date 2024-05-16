"use client";

import LoaderFrame from "@/components/common/LoaderFrame";
import ErrorBoundry from "@/components/ui/ErorBoundry";
import LogoFrame from "@/components/ui/Navbar/NavBarLogo";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { fetchGameGenres } from "@/redux/services/game-genres";
import { fetchGamePlatform } from "@/redux/services/game-platform";
import { fetchGame } from "@/redux/services/games";
import { RootState } from "@/redux/store";
import { ChildProps, StatusResponse } from "@/types/type";
import React, { useEffect } from "react";

const ApiHitProvide = ({ children }: ChildProps) => {
    const dispatch = useAppDispatch();
    const { gamesError, gamesStatus } = useAppSelector((state: RootState) => state.games);
    const { platformError, platformStatus } = useAppSelector((state: RootState) => state.platforms);
    const { genresError, genresStatus } = useAppSelector((state: RootState) => state.genres);

    const fetchAllData = async () => {
        await Promise.all([
            dispatch(fetchGameGenres()),
            dispatch(fetchGamePlatform()),
            dispatch(fetchGame({ page: 1, page_size: 10 })),
        ]);
    };

    useEffect(() => {
        fetchAllData();
    }, [dispatch]);

    if (
        genresStatus === StatusResponse.PENDING ||
        platformStatus === StatusResponse.PENDING
    ) {
        return (
            <div className={`fixed w-full h-full left-0 top-0 bg-background flex justify-center items-center`}>
                <LogoFrame />
                <LoaderFrame />
            </div>
        );
    } else if (genresError || gamesError || platformError) {
        return <ErrorBoundry error={"Some Error occurred"} />; // Corrected component name
    }

    return <React.Fragment>{children}</React.Fragment>;
};

export default ApiHitProvide;
