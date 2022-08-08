import React, { useContext, useEffect } from "react";
import TweetPost from "./TweetPost";
import Post from "./Post";
import { MainContext } from "../../context/MainContext";

export default function Main() {
  const { currentAccount, fetchTweets, allTweets } = useContext(MainContext);
  useEffect(() => {
    let fetchData = async () => {
      await fetchTweets();

    }
    fetchData();
  

  }, [])
  
  return (
    <div>
      <TweetPost />
      <div className="overflow-y-auto">
        {allTweets?.map((item, index) => {
          console.log(allTweets);
          return (

            <Post
            key={index}
            name={item?.owner?.name}
            img={item?.owner?.profileImage}
            isNFTImage={item?.owner?.isProfileImageNft}
            description={item?.tweet}
            timestamp={item?.timestamp}
            address={item?.owner?.walletAddress}
            />
            )
})}
      </div>
    </div>
  );
}
