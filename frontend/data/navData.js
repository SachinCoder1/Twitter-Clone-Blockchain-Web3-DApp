import { urls } from "../constants";
import {
  BsBookmark,
  BsBookmarkFill,
  BsPerson,
  BsPersonFill,
} from "react-icons/bs";

import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { FiBell, FiMoreHorizontal } from "react-icons/fi";
import { HiOutlineMail, HiMail } from "react-icons/hi";
import { FaRegListAlt, FaHashtag, FaBell } from "react-icons/fa";

export const navData = [
  {
    name: "Home",
    link: urls.home,
    icon: <RiHome7Fill />,
    selectedIcon: <RiHome7Line />,
  },
  {
    name: "Explore",
    link: urls.explore,
    icon: <FaHashtag />,
    selectedIcon: <BiHash />,
  },
  {
    name: "Notifications",

    link: urls.notification,
    icon: <FaBell />,
    selectedIcon: <FiBell />,
  },
  {
    name: "Message",
    link: urls.message,
    icon: <HiMail />,
    selectedIcon: <HiOutlineMail />,
  },
  {
    name: "Bookmarks",
    link: urls.bookmarks,
    icon: <BsBookmarkFill />,
    selectedIcon: <BsBookmark />,
  },
  {
    name: "List",
    link: urls.list,
    icon: <RiFileList2Fill />,
    selectedIcon: <FaRegListAlt />,
  },
  {
    name: "Profile",
    link: urls.profile,
    icon: <BsPersonFill />,
    selectedIcon: <BsPerson />,
  },
];
