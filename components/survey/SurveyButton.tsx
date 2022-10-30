import React, { useEffect } from 'react';
import { CONTAINER_STATE } from '../../constants/survey';
import classes from '../../styles/components/survey/SurveyButton.module.css';

interface ISurveyButtonProps {
  state: CONTAINER_STATE
  onClickHandler: (e) => void;
}

const SurveyButton = ({
  state,
  onClickHandler 
}: ISurveyButtonProps) => {

  
  return (
    <button
      className={classes['survey-button']}
      type={state === CONTAINER_STATE.BRIEF ? 'button' : 'submit'}
      onClick={(e) => onClickHandler(e)}
    >
      {state === CONTAINER_STATE.BRIEF ? 'Begin!' : 'Submit'}
    </button>
  )
}

export default SurveyButton