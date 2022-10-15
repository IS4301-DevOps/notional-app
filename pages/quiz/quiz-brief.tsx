import React from 'react'
import * as QUIZ_CONSTANTS from "./constants";
import classes from "./quiz.module.css";
import { InfoRowContents as infoRows, PromptContents as promptContents } from './constants/';
import InformationRow from '../../components/quiz/InformationRow';
import { CONTAINER_STATE } from './constants/quiz';
import QuizButton from '../../components/quiz/QuizButton';

interface IQuizBrief {
  containerState: CONTAINER_STATE
  handleButtonClick: () => void
}

/**
 * Content for Quiz Briefing
 */
const QuizBrief = ({
  containerState,
  handleButtonClick
}: IQuizBrief) => {
  
  return (
    <div className={classes['brief']}>
      {/* title */}
      <h1>{QUIZ_CONSTANTS.BRIEF_TITLE}</h1>
      {/* information list */}
      {infoRows.map((infoRow, index) => 
        <InformationRow
          key={index}
          index={index}
          imageUrl={infoRow.imageUrl}
          imageAlt={infoRow.imageAlt}
          mainText={infoRow.mainText}
          secondaryText={infoRow.secondaryText}
        />
      )}
      <section>
        {/* brief prompt */}
        <h2>{QUIZ_CONSTANTS.BRIEF_PROMPT}</h2>
        {/* brief list */}
        <ul>
          {promptContents.map((promptContent, index) => 
            <li key={index}>{promptContent.prompt}</li>
          )}
        </ul>
      </section>
      <QuizButton
        state={containerState}
        onClickHandler={handleButtonClick}
      />
    </div>
  )
}

export default QuizBrief 