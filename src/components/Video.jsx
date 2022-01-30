import React from "react";
import Player from "react-player";
const Video = ({
  title = "My Video Title",
  description = "My Video Description",
  url = "https://torrentdownload-1.s3.ap-south-1.amazonaws.com/bachelor.mkv",
}) => {
  return (
    <>
      <div className=" my-3 h-full">
        <div className="md:text-2xl font-medium my-5">
          <h1>{title}</h1>
        </div>
        <div className="">
          <Player width={"95%"} height={"100%"} controls url={url} />
        </div>
        <div className="my-4 md:text-xl">
          <h3>{description}</h3>
        </div>
      </div>
    </>
  );
};

export default Video;
