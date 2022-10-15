import React from 'react'
import * as QUIZ_CONSTANTS from "./constants";
import classes from "./quiz.module.css";


/**
 * Content for Quiz Briefing
 */
const QuizBrief = () => {
  return (
    <div className={classes['brief']}>
      {/* title */}
      <h1>{QUIZ_CONSTANTS.BRIEF_TITLE}</h1>
      {/* information list */}
      {/* brief prompt */}
      {/* brief list */}
    </div>
  )
}

export default QuizBrief 