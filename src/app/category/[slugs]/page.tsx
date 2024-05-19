import CustomBreadCrumb from "@/components/common/Breadcrumb";
import BannerFrame from "@/components/ui/BannerFrame";
import CategoryLayout from "@/components/ui/CategoryLayout";
import { ParamsObject } from "@/types/type";
import React from "react";

const page = ({ params }: ParamsObject) => {
	return (
		<div className={`max-sm:px-5`}>
			<CustomBreadCrumb
				data={[
					{ href: "/", name: "Home" },
					{ href: `/category/${params.slugs}`, name: params.slugs },
				]}
			/>
			<div className="mt-3">
				<BannerFrame />
				<CategoryLayout title={params.slugs} />
			</div>
		</div>
	);
};

export default page;
