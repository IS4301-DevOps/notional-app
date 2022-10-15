import { ColorInput } from "@mantine/core";
import React, { useMemo } from "react";
import classes from "../../styles/components/quiz/Steps.module.css";

interface CircleProps {
  option: string,
  color: string,
}

export const Circle: React.FC<CircleProps> = ({option, color}) => {

  const circleStyle: React.CSSProperties = {
    backgroundColor: color,
    transition: "background-color 0.6s"
  }
  return (
    <a className={classes["circle"]} style={circleStyle}>
      <strong>{option}</strong>
    </a>
  );
};

interface StepsProps {
  count: number,
  currentStep: number,
  style?: React.CSSProperties
}

const Steps: React.FC<StepsProps> = ({ count, currentStep, style }) => {
  const getHandleStyle = () => {
    //Dynamically generate linear gradient
    const interval = 20;
    let currPercentage = 0;
    let linearGradient = "linear-gradient(to right,"
    for (let i = 1; i <=5; i++) {
      const colourCode = i === currentStep ? "#7FB77E" : "#D4D4D4";
      linearGradient += " " + colourCode + " " + Math.round(currPercentage) + "%,";
      currPercentage += interval;
      linearGradient += " " + colourCode + " " + Math.round(currPercentage) + "%";
      if (i !== 5) {
        linearGradient += ",";
      } else {
        linearGradient += ")"
      }
    }

    const lineStyle: React.CSSProperties = {
      background: linearGradient,
      backgroundImage: linearGradient
    };
    //console.log(lineStyle);

    return lineStyle;
  }
  let circles: JSX.Element[] = [];
  const lineStyle = useMemo<React.CSSProperties>(() => getHandleStyle(), [currentStep, getHandleStyle])

  for (let i = 1; i < count + 1; i++) {
    const color = i === currentStep ? '#7FB77E' : '#D4D4D4';
    circles.push(
      <Circle key={i} option={`${i}`} color={color}/>
    );
  }


  return (
    <div className={classes['container']}>
      <div style={style} className={classes["steps"]}>
        {circles}
      </div>
      <hr style={lineStyle}/>
    </div>
  );
};

export default Steps;