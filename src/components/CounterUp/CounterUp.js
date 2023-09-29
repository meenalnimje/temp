import "./CounterUp.scss";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

function CounterUp(props) {
  const [countOn, setCountOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCountOn(true)}
      onExit={() => setCountOn(false)}
    >
      <div
        className="counter"
        style={{
          width: "100%",
          height: "300px",
          background: "#FF6F0F",
          margin: "10px",
          color: "#0a0027",
          padding: "50px",
          border: "2px solid #FF6F0F",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column-reverse",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="counter-content">
          <h2>
            {countOn && (
              <CountUp start={0} end={props.number} duration={2} delay={0} />
            )}
            +<span>{props.content}</span>
          </h2>
          <img src={props.image} alt="" />
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default CounterUp;
