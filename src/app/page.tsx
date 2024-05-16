import BannerFrame from "@/components/ui/BannerFrame";
import CategoryLayout from "@/components/ui/CategoryLayout";

export default function index() {
	return (
		<div className={`w-full h-full`}>
			<BannerFrame />
			<CategoryLayout title="Games" />
		</div>
	);
}
