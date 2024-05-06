import { GrWindows } from "react-icons/gr";
import { GiSpiderWeb } from "react-icons/gi";
import { MdOutlineDesktopMac } from "react-icons/md";
import { BsAndroid2, BsNintendoSwitch } from "react-icons/bs";
import { SiAtari, SiCommodore, SiD3Dotjs, SiSega } from "react-icons/si";
import { FaPlaystation, FaXbox, FaAppStoreIos, FaLinux } from "react-icons/fa";

const classStyle = "w-full min-w-full h-full";

export const platformIcons: any = {
	pc: <GrWindows className={classStyle} />,
	playstation: <FaPlaystation className={classStyle} />,
	xbox: <FaXbox className={classStyle} />,
	ios: <FaAppStoreIos className={classStyle} />,
	android: <BsAndroid2 className={classStyle} />,
	mac: <MdOutlineDesktopMac className={classStyle} />,
	linux: <FaLinux className={classStyle} />,
	nintendo: <BsNintendoSwitch className={classStyle} />,
	atari: <SiAtari className={classStyle} />,
	"commodore-amiga": <SiCommodore className={classStyle} />,
	sega: <SiSega className={classStyle} />,
	"3do": <SiD3Dotjs className={classStyle} />,
	web: <GiSpiderWeb className={classStyle} />,
};
