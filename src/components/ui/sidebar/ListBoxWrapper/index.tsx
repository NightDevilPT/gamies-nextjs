import { platformIcons } from "@/config/icons";
import { PlatformResult } from "@/types/platform";
import { Genre } from "@/types/type";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import { Image, Selection } from "@nextui-org/react";
import React from "react";

export interface ListBoxWrapperIprops {
	selectedKey: Selection;
	setSelectedKey: React.Dispatch<React.SetStateAction<Selection>>;
	show: boolean;
	data: Genre[] | PlatformResult[];
}

const ListBoxWrapper = ({
	selectedKey,
	show,
	setSelectedKey,
	data,
}: ListBoxWrapperIprops) => {
	return (
		<Listbox
			aria-label="Multiple selection example"
			variant="flat"
			disallowEmptySelection
			selectionMode="single"
			selectedKeys={selectedKey}
			className={`${
				show ? " h-72 overflow-y-auto" : "h-0 overflow-hidden p-0"
			} transition-all duration-300`}
			onSelectionChange={setSelectedKey}
		>
			{data?.map((items: Genre | PlatformResult) => (
				<ListboxItem
				className={`w-auto line-clamp-1`}
					key={items.id}
					description={items.slug}
					startContent={
						"image_background" in items ? (
							<Image src={items.image_background} alt="Listbox image" className={`w-7 h-7 min-w-7 rounded-full overflow-hidden`} />
						) : (
							<div className={`w-4 h-4`}>{platformIcons[items.slug]}</div>
						)
					}
				>
					{items.name}
				</ListboxItem>
			))}
		</Listbox>
	);
};

export default ListBoxWrapper;
