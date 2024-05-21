import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { fetchSimilarGame } from "@/redux/services/similar-games";
import { RootState } from "@/redux/store";
import { GamePost } from "@/types/game-posts";
import { Card, CardBody } from "@nextui-org/card";

const GamePosts = ({ id }: { id: number }) => {
	const { posts } = useAppSelector(
		(state: RootState) => state.gamePosts
	);
	const dispatch = useAppDispatch();

	function getPageNumber(url: string): number {
		const searchParams = new URLSearchParams(url.split("?")[1]);
		const pageNumber = searchParams.get("page");
		return pageNumber ? parseInt(pageNumber, 10) : 1;
	}

	const addGamesVideos = () => {
		const nextPageUrl = posts[id]?.next;
		if (nextPageUrl) {
			const pageNo = getPageNumber(nextPageUrl) || 1;
			dispatch(fetchSimilarGame({ id, pageNo, limit: 10 }));
		}
	};

	return (
		<div
			className={`w-full h-auto grid grid-cols-3 gap-5 max-xl:grid-cols-2 max-sm:grid-cols-1`}
		>
			{(posts[id]?.results.length === 0 || !posts[id]?.results) && (
				<div
					className={`w-full text-left font-[500] text-foreground-900 text-base col-span-full`}
				>
					No Posts available
				</div>
			)}
			{posts[id]?.results.map((items:GamePost)=>{
				return <div className={`w-full h-auto`} key={items.id+'-'+items.name}>
					<Card>
						<CardBody>
							<h1 className={`w-full h-auto text-primary-900 font-[400] text-sm line-clamp-1`}>{items.name}</h1>
							<pre>{items.text}</pre>
						</CardBody>
					</Card>
				</div>
			})}
		</div>
	);
};

export default GamePosts;
