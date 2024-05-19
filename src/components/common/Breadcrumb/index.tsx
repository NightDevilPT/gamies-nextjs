"use client";

import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Link from "next/link";

export interface BreadcrumbData {
	href: string;
	name: string;
}

export interface BreadcrumbIprops {
	data: BreadcrumbData[];
}

export default function CustomBreadCrumb({ data }: BreadcrumbIprops) {
	const [currentPage, setCurrentPage] = React.useState("music");

	return (
		<Breadcrumbs
			size="sm"
			onAction={(key) => setCurrentPage(key as string)}
			classNames={{
				list: "gap-2",
			}}
		>
			{data.map((items: BreadcrumbData) => (
				<BreadcrumbItem key={items.name} isCurrent={currentPage === "home"}>
					<Link className={`text-foreground-900 text-xs capitalize`} href={items.href}>{items.name}</Link>
				</BreadcrumbItem>
			))}
		</Breadcrumbs>
	);
}
