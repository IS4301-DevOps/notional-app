import React, { useEffect } from 'react';
import { CONTAINER_STATE } from '../../pages/quiz/constants/quiz';
import classes from './QuizButton.module.css';

interface IQuizButtonProps {
  state: CONTAINER_STATE
  onClickHandler: () => void;
}

const QuizButton = ({
  state,
  onClickHandler 
}: IQuizButtonProps) => {

  
  return (
    <button
      className={classes['quiz-button']}
      type={state === CONTAINER_STATE.BRIEF ? 'button' : 'submit'}
      onClick={() => onClickHandler()}
    >
      {state === CONTAINER_STATE.BRIEF ? 'Begin!' : 'Submit'}
    </button>
  )
}

export default QuizButton