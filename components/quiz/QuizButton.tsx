import React, { useEffect } from 'react';
import { CONTAINER_STATE } from '../../constants/quiz';
import classes from '../../styles/components/quiz/QuizButton.module.css';

interface IQuizButtonProps {
  state: CONTAINER_STATE
  onClickHandler: (e) => void;
}

const QuizButton = ({
  state,
  onClickHandler 
}: IQuizButtonProps) => {

  
  return (
    <button
      className={classes['quiz-button']}
      type={state === CONTAINER_STATE.BRIEF ? 'button' : 'submit'}
      onClick={(e) => onClickHandler(e)}
    >
      {state === CONTAINER_STATE.BRIEF ? 'Begin!' : 'Submit'}
    </button>
  )
}

export default QuizButton