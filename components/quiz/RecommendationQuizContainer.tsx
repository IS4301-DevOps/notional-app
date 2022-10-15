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
  // const [containerState, setContainerState] = useState<CONTAINER_STATE>(CONTAINER_STATE.BRIEF);
  // const [pageNumber, setPageNumber] = useState<number>(1);
  // const containerComponent:JSX.Element = useMemo(() => getContainerComponent(containerState, handleButtonClick), [containerState]);

  // const handleButtonClick = () => {
  //   switch (containerState) {
  //     case CONTAINER_STATE.BRIEF:
  //       setContainerState(containerState + 1);
  //       break;
  //     case CONTAINER_STATE.QUIZ:
  //       //!! Navigate to completion stage
  //       break;
  //     default:
  //       break;
  //   }
  // }

  return (

    <section className={classes['container']}>
      {/* Icon */}
      <div className={classes['robot']}>
        <Image alt='Green Robot' width={'68'} height={'66'} src={`/quiz/green_robot.svg`}/>
      </div>

      {children}

      {/* <div className={classes['bottom-nav']}>
        {containerState === CONTAINER_STATE.QUIZ &&
        <PreviousButton
          pageNumber={pageNumber}
          onClickHandler={(e) => setPageNumber(pageNumber - 1)}
        />
        }
        {containerState === CONTAINER_STATE.QUIZ &&
        <NextButton
          pageNumber={pageNumber}
          onClickHandler={(e) => setPageNumber(pageNumber + 1)}
        />
        }
      </div> */}
    </section>
  )
}

export default RecommendationQuizContainer