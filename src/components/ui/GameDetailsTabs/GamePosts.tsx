import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { fetchGamePosts } from "@/redux/services/game-posts";
import { RootState } from "@/redux/store";
import { GamePost } from "@/types/game-posts";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { IoMdLink } from "react-icons/io";

const GamePosts = ({ id }: { id: number }) => {
	const { posts } = useAppSelector((state: RootState) => state.gamePosts);
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
			dispatch(fetchGamePosts({ id, pageNo, limit: 10 }));
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
			{posts[id]?.results.map((items: GamePost) => {
				if (!items.text) return;
				return (
					<GamePostCards
						key={items.id + "-" + items.name}
						url={items.url}
						username={items.username}
						username_url={items.username_url}
						name={items.name}
						created={items.created}
						text={items.text}
						id={0}
						image={null}
					/>
				);
			})}
			{posts[id]?.next && (
				<Button
					className={`col-span-full w-full`}
					color={"default"}
					onClick={addGamesVideos}
				>
					Load More
				</Button>
			)}
		</div>
	);
};

export default GamePosts;

export const GamePostCards = ({
	username,
	username_url,
	text,
	name,
	url,
	created,
	image,
	id,
}: GamePost) => {
	const date = new Date(created);
	const formattedDate = `${String(date.getDate()).padStart(2, "0")}/${String(
		date.getMonth() + 1
	).padStart(2, "0")}/${date.getFullYear()}`;

	return (
		<Card className="gap-0 space-y-0">
			<CardHeader className="py-0 mt-3 relative flex justify-start items-start gap-1">
				<h1
					className={`w-full h-auto text-primary-900 font-[400] text-sm line-clamp-1`}
				>
					{name}
				</h1>
				<a href={url} target="_blank" rel="noopener noreferrer">
					<IoMdLink className={`w-5 h-5 text-primary-400`} />
				</a>
			</CardHeader>
			<CardBody className={"py-0 mt-1"}>
				<p
					dangerouslySetInnerHTML={{
						__html: text,
					}}
					className=" line-clamp-3 text-xs text-foreground-400"
				></p>
			</CardBody>
			<CardFooter
				className={"py-3 h-auto flex justify-between items-center"}
			>
				<a
					className="line-clamp-3 text-xs text-primary-400 cursor-pointer"
					target="_blank"
					rel="noopener noreferrer"
					href={username_url}
				>
					{username.split("/")[2]}
				</a>
				<p className=" line-clamp-3 text-xs text-foreground-400">
					{formattedDate}
				</p>
			</CardFooter>
		</Card>
	);
};
