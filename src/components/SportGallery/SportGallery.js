import "./SportGallery.scss";

import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import galleryPhotos from "../../utils/galleryPhotos";

function SportGallery() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  function getImg(imgSrc) {
    setTempImgSrc(imgSrc);
    setModel(true);
  }
  return (
    <div class="container-gallery">
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="Loading..." />
        <AiOutlineClose onClick={() => setModel(false)} className="icon" />
      </div>
      {galleryPhotos.map((item) => {
        return item.isHeading ? (
          <div className={`gallery-container ${item.cname}`}>
            <div className="heading">{item.text}</div>
          </div>
        ) : (
          <div className={`gallery-container ${item.cname}`}>
            <div className="gallery-item" onClick={() => getImg(item.imgScr)}>
              <div className="image">
                <img src={item.imgScr} alt={item.imgText} />
              </div>
              <div className="text">{item.imgText}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SportGallery;
