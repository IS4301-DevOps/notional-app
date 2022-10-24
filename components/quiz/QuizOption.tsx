import React, { useContext, useState } from 'react'
import { Circle } from './Steps';
import classes from '../../styles/components/quiz/QuizOption.module.css';
import { QuizResponsesContext } from '../../pages/quiz/quiz-questions';

interface IQuizOption {
  id: string;
  option: string;
  text: string;
  handleOptionClick: (id:string) => void;
}

const QuizOption = ({
  id,
  option,
  text,
  handleOptionClick
}: IQuizOption) => {

  const quizData = useContext(QuizResponsesContext);

  const [isChosen, setIsChosen] = useState<boolean>(false);
  return (
    <button 
      className={classes['option-row']}
      type='button'
      onClick={() => handleOptionClick(id)}
    >
      <Circle
        option={option}
        color={!!quizData[id] ? '#7FB77E' : '#D4D4D4'}
      />
      <span>{text}</span>
    </button>
  )
}

export default QuizOption
