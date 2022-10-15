import Image from 'next/image';
import React, { useMemo, useState } from 'react'
import { CONTAINER_STATE } from '../../pages/quiz/constants/quiz';
import QuizBrief from '../../pages/quiz/quiz-brief';
import { NextButton } from './NextButton';
import PreviousButton from './PreviousButton';
import QuizButton from './QuizButton';
import classes from './RecommendationQuizContainer.module.css';

interface ContainerProps {
  children: JSX.Element[]
}

// const getContainerComponent = (currentState: CONTAINER_STATE, handleButtonClick: () => void): JSX.Element => {
//   switch (currentState) {
//     case CONTAINER_STATE.BRIEF:
//       return <QuizBrief containerState={currentState} handleButtonClick={handleButtonClick}/>
//       break;
//     case CONTAINER_STATE.QUIZ:
//       return <QuizBrief containerState={currentState} handleButtonClick={handleButtonClick}/>
//       break;
//     default:
//       break;
//   }
// }

const RecommendationQuizContainer = ({children}) => {

  return (

    <section className={classes['container']}>
      {/* Icon */}
      <div className={classes['robot']}>
        <Image alt='Green Robot' width={'68'} height={'66'} src={`/quiz/green_robot.svg`}/>
      </div>
      {children}
    </section>
  )
}

export default RecommendationQuizContainer