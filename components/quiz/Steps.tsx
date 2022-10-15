import React from "react";
import classes from "./Steps.module.css";

interface CircleProps {
  number: number,
  color: string,
}

const Circle: React.FC<CircleProps> = ({number, color}) => {

  const circleStyle: React.CSSProperties = {
    backgroundColor: color,
    transition: "background-color 0.6s"
  }
  return (
    <a className={classes["circle"]} style={circleStyle}>
      <strong>{number}</strong>
    </a>
  );
};

interface StepsProps {
  count: number,
  currentStep: number,
  style?: React.CSSProperties
}

const Steps: React.FC<StepsProps> = ({ count, currentStep, style }) => {
  let circles: JSX.Element[] = [];


  for (var i = 1; i < count + 1; i++) {
    const color = i === currentStep ? '#7FB77E' : '#D4D4D4';
    circles.push(
      <Circle key={i} number={i} color={color}/>
    );
  }

  return (
    <div style={style} className={classes["steps"]}>
      {circles}
    </div>
  );
};

export default Steps;