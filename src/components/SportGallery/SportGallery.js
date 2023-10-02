import "./SportGallery.scss";

import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

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
      <div class="gallery-container w-3 h-2">
        <div class="gallery-item">
          <div
            class="image"
            onClick={() =>
              getImg("https://source.unsplash.com/1600x900/?nature")
            }
          >
            <img
              src="https://source.unsplash.com/1600x900/?nature"
              alt="nature"
            />
          </div>
          <div class="text">Nature</div>
        </div>
      </div>
      <div class="gallery-container w-3 h-3">
        <div class="gallery-item">
          <div class="image">
            <img
              src="https://source.unsplash.com/1600x900/?people"
              alt="people"
            />
          </div>
          <div class="text">People</div>
        </div>
      </div>

      <div class="gallery-container h-2">
        <div class="gallery-item">
          <div class="image">
            <img
              src="https://source.unsplash.com/1600x900/?sport"
              alt="sport"
            />
          </div>
          <div class="text">Sport</div>
        </div>
      </div>

      <div class="gallery-container w-2">
        <div class="gallery-item">
          <div class="image">
            <img
              src="https://source.unsplash.com/1600x900/?fitness"
              alt="fitness"
            />
          </div>
          <div class="text">Fitness</div>
        </div>
      </div>

      <div class="gallery-container w-4 h-1">
        <div class="gallery-item">
          <div class="image">
            <img src="https://source.unsplash.com/1600x900/?food" alt="food" />
          </div>
          <div class="text">Food</div>
        </div>
      </div>
      <div class="gallery-container">
        <div class="gallery-item">
          <div class="image">
            <img
              src="https://source.unsplash.com/1600x900/?travel"
              alt="travel"
            />
          </div>
          <div class="text">Travel</div>
        </div>
      </div>
      <div class="gallery-container">
        <div class="gallery-item">
          <div class="image">
            <img
              src="https://source.unsplash.com/1600x900/?travel"
              alt="travel"
            />
          </div>
          <div class="text">Travel</div>
        </div>
      </div>

      <div class="gallery-container h-2">
        <div class="gallery-item">
          <div class="image">
            <img src="https://source.unsplash.com/1600x900/?art" alt="art" />
          </div>
          <div class="text">Art</div>
        </div>
      </div>

      <div class="gallery-container h-2">
        <div class="gallery-item">
          <div class="image">
            <img src="https://source.unsplash.com/1600x900/?art" alt="art" />
          </div>
          <div class="text">car1</div>
        </div>
      </div>
      <div class="gallery-container w-2 h-3">
        <div class="gallery-item">
          <div class="image">
            <img src="https://source.unsplash.com/1600x900/?cars" alt="cars" />
          </div>
          <div class="text">Car3</div>
        </div>
      </div>
      <div class="gallery-container w-1 h-3">
        <div class="gallery-item">
          <div class="image">
            <img src="https://source.unsplash.com/1600x900/?cars" alt="cars" />
          </div>
          <div class="text">Car4</div>
        </div>
      </div>
      <div class="gallery-container w-3 h-2">
        <div class="gallery-item">
          <div class="image">
            <img src="https://source.unsplash.com/1600x900/?cars" alt="cars" />
          </div>
          <div class="text">Car5</div>
        </div>
      </div>
      <div class="gallery-container w-3 h-2">
        <div class="gallery-item">
          <div class="image">
            <img src="https://source.unsplash.com/1600x900/?cars" alt="cars" />
          </div>
          <div class="text">Car6</div>
        </div>
      </div>
      <div class="gallery-container w-1 h-1">
        <div class="gallery-item">
          <div class="image">
            <img src="https://source.unsplash.com/1600x900/?cars" alt="cars" />
          </div>
          <div class="text">Car7</div>
        </div>
      </div>
      <div class="gallery-container w-1 h-3">
        <div class="gallery-item">
          <div class="image">
            <img src="https://source.unsplash.com/1600x900/?cars" alt="cars" />
          </div>
          <div class="text">Car8</div>
        </div>
      </div>
      <div class="gallery-container h-1 w-2">
        <div class="gallery-item">
          <div class="image">
            <img src="https://source.unsplash.com/1600x900/?cars" alt="cars" />
          </div>
          <div class="text">Car9</div>
        </div>
      </div>
      <div class="gallery-container h-1 w-2">
        <div class="gallery-item">
          <div class="image">
            <img src="https://source.unsplash.com/1600x900/?cars" alt="cars" />
          </div>
          <div class="text">Car11</div>
        </div>
      </div>
      <div class="gallery-container h-2 w-3">
        <div class="gallery-item">
          <div class="image">
            <img src="https://source.unsplash.com/1600x900/?cars" alt="cars" />
          </div>
          <div class="text">Car11</div>
        </div>
      </div>
      <div class="gallery-container h-1 w-2">
        <div class="gallery-item">
          <div class="image">
            <img src="https://source.unsplash.com/1600x900/?cars" alt="cars" />
          </div>
          <div class="text">Car11</div>
        </div>
      </div>
      <div class="gallery-container w-6 h-2">
        <div class="gallery-item">
          <div class="image">
            <img src="https://source.unsplash.com/1600x900/?cars" alt="cars" />
          </div>
          <div class="text">Car12</div>
        </div>
      </div>
      <div class="gallery-container w-3 h-2">
        <div class="gallery-item">
          <div
            class="image"
            onClick={() =>
              getImg("https://source.unsplash.com/1600x900/?nature")
            }
          >
            <img
              src="https://source.unsplash.com/1600x900/?nature"
              alt="nature"
            />
          </div>
          <div class="text">Nature</div>
        </div>
      </div>
      <div class="gallery-container w-3 h-3">
        <div class="gallery-item">
          <div class="image">
            <img
              src="https://source.unsplash.com/1600x900/?people"
              alt="people"
            />
          </div>
          <div class="text">People</div>
        </div>
      </div>
      <div class="gallery-container h-2">
        <div class="gallery-item">
          <div class="image">
            <img
              src="https://source.unsplash.com/1600x900/?sport"
              alt="sport"
            />
          </div>
          <div class="text">Sport</div>
        </div>
      </div>
      <div class="gallery-container h-2">
        <div class="gallery-item">
          <div class="image">
            <img
              src="https://source.unsplash.com/1600x900/?sport"
              alt="sport"
            />
          </div>
          <div class="text">Sport</div>
        </div>
      </div>

      <div class="gallery-container w-2">
        <div class="gallery-item">
          <div class="image">
            <img
              src="https://source.unsplash.com/1600x900/?fitness"
              alt="fitness"
            />
          </div>
          <div class="text">Fitness</div>
        </div>
      </div>

      <div class="gallery-container w-4 h-2">
        <div class="gallery-item">
          <div class="image">
            <img src="https://source.unsplash.com/1600x900/?food" alt="food" />
          </div>
          <div class="text">Food</div>
        </div>
      </div>
      <div class="gallery-container w-2 h-3">
        <div class="gallery-item">
          <div class="image">
            <img src="https://source.unsplash.com/1600x900/?food" alt="food" />
          </div>
          <div class="text">Food</div>
        </div>
      </div>
      <div class="gallery-container">
        <div class="gallery-item">
          <div class="image">
            <img
              src="https://source.unsplash.com/1600x900/?travel"
              alt="travel"
            />
          </div>
          <div class="text">Travel</div>
        </div>
      </div>
    </div>
  );
}

export default SportGallery;
