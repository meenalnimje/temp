import "./CounterUpPage.scss";

import React, { useState } from "react";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterUpPage = () => {
  const [countersOn, setCountersOn] = useState([false, false, false]);

  return (
    <ScrollTrigger
      onEnter={() => setCountersOn([true, true, true])}
      onExit={() => setCountersOn([false, false, false])}
    >
      <div className="counterUp">
        <h1>
          {countersOn[0] && (
            <CountUp start={1} end={7} duration={1} delay={0} />
          )}
          + Sports
        </h1>
      </div>
      <div className="counterUp">
        <h1>
          {countersOn[1] && (
            <CountUp start={1} end={12} duration={2} delay={0} />
          )}
          + Colleges
        </h1>
      </div>
      <div className="counterUp">
        <h1>
          {countersOn[2] && (
            <CountUp start={500} end={2000} duration={2} delay={0} />
          )}
          + Footfall
        </h1>
      </div>
    </ScrollTrigger>
  );
};

export default CounterUpPage;
