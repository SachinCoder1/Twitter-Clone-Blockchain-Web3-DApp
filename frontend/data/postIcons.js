import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { RiFileGifLine, RiBarChartHorizontalFill } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";



import { BsFillPatchCheckFill } from 'react-icons/bs'
import { FaRegComment, FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'

const style = {
  icon: "mr-2 text-blue-500 cursor-pointer text-lg hover:text-blue-700",
};

export const allTweetIcons = [
  <BsCardImage className={style.icon} />,
  <RiFileGifLine className={style.icon} />,
  <RiBarChartHorizontalFill className={style.icon} />,
  <BsEmojiSmile className={style.icon} />,
  <IoMdCalendar className={style.icon} />,
  <MdOutlineLocationOn className={style.icon} />,
];

export const allPostIcons = [
<FaRegComment className={style.icon} />,
<AiOutlineHeart className={style.icon} />,
<FaRetweet className={style.icon} />,
<FiShare className={style.icon} />,

]