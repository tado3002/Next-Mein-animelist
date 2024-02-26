"use client";
import { XCircle, YoutubeLogo } from "@phosphor-icons/react";
import React, { useState } from "react";
import YouTube from "react-youtube";

const YoutubePlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const opt = {
    width: "200",
    height: "150",
  };
  function clickHandler() {
    setIsOpen((prevState) => !prevState);
  }
  const Player = () => {
    return (
      <div className="fixed bottom-0 right-0 flex flex-col items-end gap-1 p-1">
        <XCircle size={25} onClick={() => clickHandler()} />
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={opt}
        />
      </div>
    );
  };
  const ButtonOpenPlayer = () => {
    return(
    <div className="fixed bottom-0 right-0 flex flex-col items-end gap-1 p-3 mx-2 mb-3 rounded-full">
      <YoutubeLogo
        size={32}
        onClick={() => clickHandler()}
        
      />

    </div>)
  }
  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default YoutubePlayer;
