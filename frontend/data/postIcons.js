import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { RiFileGifLine, RiBarChartHorizontalFill } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";

const style = {
  icon: "mr-2 text-blue-500 cursor-pointer text-lg hover:text-blue-700",
};

export const allPostIcons = [
  <BsCardImage className={style.icon} />,
  <RiFileGifLine className={style.icon} />,
  <RiBarChartHorizontalFill className={style.icon} />,
  <BsEmojiSmile className={style.icon} />,
  <IoMdCalendar className={style.icon} />,
  <MdOutlineLocationOn className={style.icon} />,
];
