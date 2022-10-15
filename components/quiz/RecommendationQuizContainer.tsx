import Image from 'next/image';
import React from 'react'
import classes from './RecommendationQuizContainer.module.css';

interface ContainerProps {
  children: JSX.Element[]
}

/**
 * Reusable container for Quiz
 */
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