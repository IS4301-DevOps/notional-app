import { useState } from 'react';
import { NextButton } from '../../components/quiz/NextButton';
import PreviousButton from '../../components/quiz/PreviousButton';
import QuizButton from '../../components/quiz/QuizButton';
import { CONTAINER_STATE } from './constants/quiz'
import classes from './quiz.module.css';

interface IQuizQuestionPanelProps {
  containerState: CONTAINER_STATE,
  handleButtonClick: () => void
}

export const QuizQuestionPanel = ({
  containerState,
  handleButtonClick
}: IQuizQuestionPanelProps) => {

  const [pageNumber, setPageNumber] = useState<number>(1);

  return (
    <div className={classes['questions']}>
      {/* Steps */}
      {/* Question */}
      <div className={classes['bottom-nav']}>
        <PreviousButton pageNumber={pageNumber}
          onClickHandler={(e) => setPageNumber(pageNumber - 1)}
        />
        <QuizButton
          state={containerState}
          onClickHandler={() => handleButtonClick()}
        />
        <NextButton
          pageNumber={pageNumber}
          onClickHandler={(e) => setPageNumber(pageNumber + 1)}
        />
      </div>
    </div>
  )
}
