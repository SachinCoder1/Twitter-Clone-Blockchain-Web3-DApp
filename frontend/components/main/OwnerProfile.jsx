import React, { useContext } from "react";
import TweetPost from "./TweetPost";
import Post from "./Post";
import { MainContext } from "../../context/MainContext";
import SmImage from "../../subcomponents/img/SmImage";

export default function OwnerProfile() {
  const { currentAccount, currentUser } = useContext(MainContext);
  return (
    <div>
      <div className="relative mb-5">
        <img
          className="w-full h-60"
          src={currentUser.coverImage}
          alt="cover image"
        />
        <SmImage
          src={currentUser?.profileImage}
          isNFTImage={currentUser.isProfileImageNft}
          className="!absolute bottom-0 left-4 w-20 h-20 rounded-full"
          classNameImg="w-20 h-20"
        />
      </div>
      <div>
        <h4 className="font-bold text-lg ">
            {currentUser?.name}
        </h4>
        <p className="group cursor-pointer mb-10"><span className="group-hover:hidden text-gray-600">
        {currentAccount.slice(0,6)}...{currentAccount.slice(currentAccount.length-4)}
            </span>
              <span className="hidden group-hover:inline-block bg-gray-200">
                  {currentAccount}
              </span>
            </p>
      </div>

      <div className="overflow-y-auto">
        {currentUser?.tweets?.map((item, index) => (
          <Post
            key={index}
            img={currentUser.profileImage}
            isNFTImage={currentUser.isProfileImageNft}
            name={currentUser.name}
            description={item.tweet}
            timestamp={item.timestamp}
            address={currentAccount}
          />
        ))}
      </div>
    </div>
  );
}
