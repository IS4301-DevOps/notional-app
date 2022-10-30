import React from 'react'
import * as SURVEY_CONSTANTS from "../../constants";
import classes from "../../styles/pages/survey/Survey.module.css";
import { InfoRowContents as infoRows, PromptContents as promptContents } from '../../constants';
import InformationRow from '../../components/survey/InformationRow';
import { CONTAINER_STATE } from '../../constants/survey';
import SurveyButton from '../../components/survey/SurveyButton';

interface ISurveyBrief {
  containerState: CONTAINER_STATE
  handleButtonClick: () => void
}

/**
 * Content for Survey Briefing
 */
const SurveyBrief = ({
  containerState,
  handleButtonClick
}: ISurveyBrief) => {
  
  return (
    <div className={classes['brief']}>
      {/* title */}
      <h1>{SURVEY_CONSTANTS.BRIEF_TITLE}</h1>
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
        <h2>{SURVEY_CONSTANTS.BRIEF_PROMPT}</h2>
        {/* brief list */}
        <ul>
          {promptContents.map((promptContent, index) => 
            <li key={index}>{promptContent.prompt}</li>
          )}
        </ul>
      </section>
        <SurveyButton
          state={containerState}
          onClickHandler={handleButtonClick}
        />
    </div>
  )
}

export default SurveyBrief 