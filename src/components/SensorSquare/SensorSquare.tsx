import * as React from "react";

export const SensorSquare: React.FC<{ index: number }> = ({ index }) => {
  return <div className="sensorSquare" id={`sensor${index}`}></div>;
};
