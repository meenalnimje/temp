import AnimatedCursor from "react-animated-cursor";
import React from "react";
import cursor from "../../assets/demoPhotos/c2.png";

function Cursor() {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={40}
        color="#333"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        outerStyle={{
          backgroundColor: "transparent",
          border: "2px solid black",
        }}
        innerStyle={{
          backgroundColor: "black",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "p",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
}

export default Cursor;
