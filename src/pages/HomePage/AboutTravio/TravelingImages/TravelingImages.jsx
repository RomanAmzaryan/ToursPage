import React, { useState } from "react";

import "./travelingImages.css";

export default function TravelingImages() {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
  };
  return (
    <div className="travelingImages">
      <div className="topImages">
        <img src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/shape-3.png" alt="" className="birds" />
        <div className="smartdemowpBorder">
          <img src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/about-1.jpg" alt="" />
        </div>
      </div>
      <div className="bottomImages">
        <div className="bottomImg">
          <img src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/about-2.jpg" alt="" />
        </div>
        <div className="FindYourBestDestination">
          <h1 className="Find">Find Your Best Destination</h1>

          {showVideo ? (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/nfP5N9Yc72A?si=SNO8tkx5rTPl_P_s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          ) : (
            <i className="bx bx-play-circle videoIcon" onClick={openVideo} style={{ color: "#e68d00" }}></i>
          )}
        </div>
      </div>
    </div>
  );
}
