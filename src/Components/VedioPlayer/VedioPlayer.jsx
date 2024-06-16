import React, { useRef } from "react";
import "./VedioPlayer.css";
import vedio from "../../assets/video-player.mp4";

const VedioPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closedplayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  return (
    <div
      className={`vedio-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closedplayer}
    >
      <video
        src={vedio}
        style={{ width: "70%", height: "80%", border: "4px solid #fff" }}
        autoPlay
        muted
        controls
      ></video>
    </div>
  );
};

export default VedioPlayer;
