import React from "react";
import { news } from "../../data";
import Search from "../../subcomponents/Search";


const style = {
  wrapper: `p-4`,
  section: `my-6 rounded-xl overflow-hidden`,
  title: `p-2 font-bold text-lg`,
  showMore: `p-2 text-[#1d9bf0] text-sm cursor-pointer hover:bg-gray-200`,
  item: `flex items-center p-3 my-2 hover:bg-gray-200 cursor-pointer`,
  newsItemLeft: `flex-1`,
  newsItemCategory: `text-[#8899a6] text-xs font-semibold`,
  newsItemTitle: `text-sm font-bold`,
  newsItemRight: `w-1/5 ml-3`,
  newsItemImage: `rounded-xl h-14 w-14 object-cover`,
  followAvatarContainer: `w-1/6`,
  followAvatar: `rounded-full h-[40px] w-[40px]`,
  profileDetails: `flex-1`,
  name: `font-bold`,
  handle: `text-[#8899a6]`,
  followButton: `bg-white text-black px-3 py-1 rounded-full text-xs font-bold`,
}

export default function Widget() {
  return (
    <div>
      <Search />
      <div className={style.section}>
        <div className={style.title}>What's happening</div>
        {news.map((item, index) => (
          <div key={index} className={style.item}>
            <div className={style.newsItemLeft}>
              <div className={style.newsItemCategory}>{item.category}</div>
              <div className={style.newsItemTitle}>{item.title}</div>
            </div>
            <div className={style.newsItemRight}>
              <img
                src={item.image}
                alt={item.category}
                className={style.newsItemImage}
              />
            </div>
          </div>
        ))}
        <div className={style.showMore}>Show more</div>
      </div>
    </div>
  );
}
