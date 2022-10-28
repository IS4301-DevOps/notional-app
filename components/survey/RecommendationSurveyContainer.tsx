import Image from 'next/image';
import React, { useMemo, useState } from 'react'
import classes from '../../styles/components/survey/RecommendationSurveyContainer.module.css';

interface ContainerProps {
  children: JSX.Element[]
}

const RecommendationSurveyContainer = ({children}) => {

  return (

    <section className={classes['container']}>
      {/* Icon */}
      <div className={classes['robot']}>
        <Image alt='Green Robot' width={'68'} height={'66'} src={`/survey/green_robot.svg`}/>
      </div>
      {children}
    </section>
  )
}

export default RecommendationSurveyContainer