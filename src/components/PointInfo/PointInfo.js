import React from "react";
import "./PointInfo.scss";
function PointInfo(props) {
  return (
    <div className="pointinfo">
      <div className="serial-no">{props?.serialNo + 1}</div>
      <div className="category">Category: {props?.gameInfo?.category}</div>
      <div className="opponent">
        <span className="vs">Vs</span>
        <span className="name">{props?.gameInfo?.college1}</span>
      </div>
      <div className="point">Point: {props?.gameInfo?.point}</div>
      <div className="sportname">Sport Name: {props?.gameInfo?.sportName}</div>
    </div>
  );
}

export default PointInfo;
