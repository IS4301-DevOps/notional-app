import React, { useState } from 'react';
import { NextButton } from '../../components/survey/NextButton';
import PreviousButton from '../../components/survey/PreviousButton';
import SurveyButton from '../../components/survey/SurveyButton';
import Steps from '../../components/survey/Steps';
import { CONTAINER_STATE } from '../../constants/survey'
import classes from '../../styles/pages/survey/Survey.module.css';
import { SurveyQuestions as surveyQuestions } from "../../constants";
import SurveyOption from '../../components/survey/SurveyOption';
import survey from '.';

interface ISurveyQuestionPanelProps {
  containerState: CONTAINER_STATE,
  handleButtonClick: () => void
}

interface ISurveyResponses {
  [key: string]: boolean;
}

const intToChar = (int: number) => {
  const code = 'A'.charCodeAt(0);

  return String.fromCharCode(code + int);
}

export const SurveyResponsesContext = React.createContext(null);

export const SurveyQuestionPanel = ({
  containerState,
  handleButtonClick
}: ISurveyQuestionPanelProps) => {

  const handleSubmitForm = (e) => {
    e.preventDefault();
    //console.log("revent defaul");
    handleButtonClick();
  }

  const [pageNumber, setPageNumber] = useState<number>(1);


  const [questionResponses, setQuestionResponses] = useState<ISurveyResponses>({});

  const handleOptionClick = (id) => {
    setQuestionResponses({...questionResponses, [id]: !questionResponses[id]});
  }


  return (
    <SurveyResponsesContext.Provider value={questionResponses}>
      <form className={classes['questions']}>
        {/* Steps */}
        <Steps
          count={5}
          currentStep={pageNumber}
        />
        {/* Question */}
        <h2>{surveyQuestions[pageNumber - 1].question}</h2>
        {/* Options */}
        {surveyQuestions[pageNumber - 1].options.map((text, index) =>
          <SurveyOption
            id={text + index}
            key={text + index}
            option={intToChar(index)}
            text={text}
            handleOptionClick={handleOptionClick}
          />
        )} 
        <div className={classes['bottom-nav']}>
          <PreviousButton pageNumber={pageNumber}
            onClickHandler={(e) => setPageNumber(pageNumber - 1)}
          />
          {pageNumber === 5 &&
          <SurveyButton
            state={containerState}
            onClickHandler={(e) => handleSubmitForm(e)}
          />
          }
          <NextButton
            pageNumber={pageNumber}
            onClickHandler={(e) => setPageNumber(pageNumber + 1)}
          />
        </div>
      </form>

    </SurveyResponsesContext.Provider>
  )
}

export default SurveyQuestionPanel