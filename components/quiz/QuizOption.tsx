import React, { useState } from 'react'
import { Circle } from './Steps';
import classes from './QuizOption.module.css';

interface IQuizOption {
  option: string;
  text: string;
}

const QuizOption = ({
  option,
  text
}: IQuizOption) => {

  const [isChosen, setIsChosen] = useState<boolean>(false);
  return (
    <button 
      className={classes['option-row']}
      type='button'
      onClick={() => setIsChosen(!isChosen)}
    >
      <Circle
        option={option}
        color={isChosen ? '#7FB77E' : '#D4D4D4'}
      />
      <span>{text}</span>
    </button>
  )
}

export default QuizOption
