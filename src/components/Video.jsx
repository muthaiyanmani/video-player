import React from "react";
import Player from "react-player";
const Video = () => {
  return (
    <>
      <div className="ml-5 my-3 h-full">
        <div className="md:text-2xl font-medium my-5">
          <h1>React Video Player Title</h1>
        </div>
        <div className="">
          <Player
            width={"75%"}
            height={"100%"}
            controls
            url={
              "https://torrentdownload-1.s3.ap-south-1.amazonaws.com/bachelor.mkv"
            }
          />
        </div>
        <div className="my-4 md:text-xl">
          <h3>Video Description | Bachelor Movie | Youtube</h3>
        </div>
      </div>
    </>
  );
};

export default Video;
