import React, { useContext } from "react";
import TweetPost from "./TweetPost";
import Post from "./Post";
import { MainContext } from "../../context/MainContext";

export default function Main() {
  const { currentAccount, currentUser } = useContext(MainContext);
  return (
    <div>
      <TweetPost />
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
