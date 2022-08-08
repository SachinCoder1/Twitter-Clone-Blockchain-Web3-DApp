import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../context/MainContext";
import { allTweetIcons } from "../../data";
import { client } from "../../sanity-client/client";
import Button from "../../subcomponents/btns/Button";
import SmImage from "../../subcomponents/img/SmImage";
import Input from "../../subcomponents/inputs/Input";

export default function TweetPost({ onChange }) {
  const [tweetText, settweetText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { currentAccount, currentUser } = useContext(MainContext);

  const handleTweetClick = async () => {
    // e.preventDefault();
    console.log("btnClicked");
    setIsLoading(true);

    console.log("Before tweetText return");
    if (!tweetText) {
      setIsLoading(false);
      return;
    }
    console.log("After tweetText return");

    const tweetId = `${currentAccount}_${Date.now()}`;

    const tweetDoc = {
      _type: "tweets",
      _id: tweetId,
      tweet: tweetText,
      timestamp: new Date(Date.now()).toISOString(),
      owner: {
        _key: tweetId,
        _type: "reference",
        _ref: currentAccount,
      },
    };

    console.log("Before Creating tweet");
    await client.createIfNotExists(tweetDoc);
    await client
      .patch(currentAccount)
      .setIfMissing({ tweets: [] })
      .insert("after", "tweets[-1]", [
        {
          _key: tweetId,
          _type: "reference",
          _ref: tweetId,
        },
      ])
      .commit();
    console.log("After Creating tweet");

    settweetText("");

    setIsLoading(false);
  };
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="flex items-start">
      <SmImage
        src={currentUser.profileImage}
        alt="image"
        isNFTImage={currentUser.isProfileImageNft}
      />
      <div className="flex flex-col w-full gap-y-5">
        <textarea
          className="flex-1 placeholder:text-lg px-2 mx-2 my-1 border-none outline-none h-auto"
          name="tweet"
          id="tweet"
          cols="20"
          rows="3"
          value={tweetText}
          onChange={(e) => settweetText(e.target.value)}
          placeholder="What's Happening"
        />
        <div className="flex w-full justify-between items-center border-t border-t-gray-200 py-2">
          <div className="flex gap-x-2">
            {allTweetIcons?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div>
            <Button
              text="Tweet"
              onClick={handleTweetClick}
              className="rounded-full"
              disabled={isLoading}
              fullWidth={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
