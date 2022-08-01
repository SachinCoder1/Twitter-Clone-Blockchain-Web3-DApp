import React from "react";
import SmImage from "../../subcomponents/img/SmImage";
import { allPostIcons } from "../../data";
import { format } from "timeago.js";

export default function Post({
  img,
  isNFTImage,
  name,
  description,
  timestamp,
  address,
}) {
  return (
    <div>
      <div className="flex items-start">
        <SmImage src={img} alt={name} isNFTImage={isNFTImage} />
        <div>
          <div className="pt-1 px-4">
            <span className="font-bold">Name</span>{" "}
            <span className="text-gray-500 ml-2 text-sm">
              {address.slice(0, 6)}...{address.slice(address.length - 4)} •{" "}
            </span>
            <span className="text-gray-500 text-sm">
              {format(new Date(timestamp).getTime())}
            </span>
          </div>
        </div>
      </div>
      <div className="pl-10 pb-4">{description}</div>
      <div className="flex w-full justify-between items-center border-t border-t-gray-200 py-2">
        <div className="flex justify-between w-full gap-x-2 pl-10">
          {allPostIcons?.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
