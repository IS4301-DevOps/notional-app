import React, { useContext, useState } from 'react'
import { Circle } from './Steps';
import classes from '../../styles/components/survey/SurveyOption.module.css';
import { SurveyResponsesContext } from '../../pages/survey/survey-questions';

interface ISurveyOption {
  id: string;
  option: string;
  text: string;
  handleOptionClick: (id:string) => void;
}

const SurveyOption = ({
  id,
  option,
  text,
  handleOptionClick
}: ISurveyOption) => {

  const surveyData = useContext(SurveyResponsesContext);

  const [isChosen, setIsChosen] = useState<boolean>(false);
  return (
    <button 
      className={classes['option-row']}
      type='button'
      onClick={() => handleOptionClick(id)}
    >
      <Circle
        option={option}
        color={!!surveyData[id] ? '#7FB77E' : '#D4D4D4'}
      />
      <span>{text}</span>
    </button>
  )
}

export default SurveyOption
