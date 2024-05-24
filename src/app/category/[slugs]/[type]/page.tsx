import CustomBreadCrumb from "@/components/common/Breadcrumb";
import BannerFrame from "@/components/ui/BannerFrame";
import { GameTypeLayout } from "@/components/ui/GameTypeLayout";
import { ParamsObject } from "@/types/type";
import React from "react";

const page = ({ params }: ParamsObject) => {
	return (
		<div className={`max-sm:px-5`}>
			<CustomBreadCrumb
				data={[
					{ href: "/", name: "Home" },
					{ href: `/category/${params.slugs}`, name: params?.slugs },
					{ href: `/category/${params.slugs}/${params.type}`, name: params?.type },
				]}
			/>
			<div className="mt-3">
				<BannerFrame />
				<GameTypeLayout slug={params.type} type={params.type} />
			</div>
		</div>
	);
};

export default page;
