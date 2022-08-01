import React from "react";
import { allTweetIcons } from "../../data";
import Button from "../../subcomponents/btns/Button";
import SmImage from "../../subcomponents/img/SmImage";
import Input from "../../subcomponents/inputs/Input";

export default function TweetPost({ onChange }) {
  return (
    <div className="flex items-start">
      <SmImage
        src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
        alt="image"
        isNFTImage={true}
      />
      <div className="flex flex-col w-full gap-y-5">
        <textarea
          className="flex-1 placeholder:text-lg px-2 mx-2 my-1 border-none outline-none h-auto"
          name="tweet"
          id="tweet"
          cols="20"
          rows="3"
          placeholder="What's Happening"
        ></textarea>
        <div className="flex w-full justify-between items-center border-t border-t-gray-200 py-2">
          <div className="flex gap-x-2">
            {allTweetIcons?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div>
            <Button
              text="Tweet"
              //   onClick={}
              className="rounded-full"
              disabled={false} // If true it enables the loading.
              fullWidth={false} // If true it automatically takes width.
            />
          </div>
        </div>
      </div>
    </div>
  );
}
