import React, { useState } from 'react';
import { NextButton } from '../../components/quiz/NextButton';
import PreviousButton from '../../components/quiz/PreviousButton';
import QuizButton from '../../components/quiz/QuizButton';
import Steps from '../../components/quiz/Steps';
import { CONTAINER_STATE } from '../../constants/quiz'
import classes from '../../styles/pages/quiz/Quiz.module.css';
import { QuizQuestions as quizQuestions } from "../../constants";
import QuizOption from '../../components/quiz/QuizOption';
import quiz from '.';

interface IQuizQuestionPanelProps {
  containerState: CONTAINER_STATE,
  handleButtonClick: () => void
}

interface IQuizResponses {
  [key: string]: boolean;
}

const intToChar = (int: number) => {
  const code = 'A'.charCodeAt(0);

  return String.fromCharCode(code + int);
}

export const QuizResponsesContext = React.createContext(null);

export const QuizQuestionPanel = ({
  containerState,
  handleButtonClick
}: IQuizQuestionPanelProps) => {

  const handleSubmitForm = (e) => {
    e.preventDefault();
    //console.log("revent defaul");
    handleButtonClick();
  }

  const [pageNumber, setPageNumber] = useState<number>(1);


  const [questionResponses, setQuestionResponses] = useState<IQuizResponses>({});

  const handleOptionClick = (id) => {
    setQuestionResponses({...questionResponses, [id]: !questionResponses[id]});
  }


  return (
    <QuizResponsesContext.Provider value={questionResponses}>
      <form className={classes['questions']}>
        {/* Steps */}
        <Steps
          count={5}
          currentStep={pageNumber}
        />
        {/* Question */}
        <h2>{quizQuestions[pageNumber - 1].question}</h2>
        {/* Options */}
        {quizQuestions[pageNumber - 1].options.map((text, index) =>
          <QuizOption
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
          <QuizButton
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

    </QuizResponsesContext.Provider>
  )
}

export default QuizQuestionPanel