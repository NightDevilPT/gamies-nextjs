import React from "react";
import { ParamsObject } from "@/types/type";
import BannerFrame from "@/components/ui/BannerFrame";
import CustomBreadCrumb from "@/components/common/Breadcrumb";
import { PlatformGameTypeLayout } from "@/components/ui/GameTypeLayout/PlatformGameLayout";
import { GenresGameTypeLayout } from "@/components/ui/GameTypeLayout/GenresGameLayout";

const page = ({ params }: ParamsObject) => {
	return (
		<div className={`max-sm:px-5`}>
			<CustomBreadCrumb
				data={[
					{ href: "/", name: "Home" },
					{ href: `/category/${params.slugs}`, name: params?.slugs },
					{
						href: `/category/${params.slugs}/${params.type}`,
						name: params?.type,
					},
				]}
			/>
			<div className="mt-3">
				<BannerFrame />
				{params.slugs === "platform" ? (
					<PlatformGameTypeLayout
						slug={params.type}
						type={params.type}
					/>
				) : (
					<GenresGameTypeLayout
						slug={params.type}
						type={params.type}
					/>
				)}
			</div>
		</div>
	);
};

export default page;
