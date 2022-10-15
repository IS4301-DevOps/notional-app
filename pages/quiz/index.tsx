import React, { useState, useEffect, useMemo } from 'react';
import * as QUIZ_CONSTANTS from "../../constants";
import Layout from '../../components/layout/Layout';
import { useUserQuery } from '../../hooks/queries';
import Loading from '../../components/common/Loading';
import RecommendationQuizHeader from '../../components/quiz/RecommendationQuizHeader';
import RecommendationQuizContainer from '../../components/quiz/RecommendationQuizContainer';
import { CONTAINER_STATE } from '../../constants/quiz';
import QuizBrief from './quiz-brief';
import { QuizQuestionPanel } from './quiz-questions';
import { useRouter } from 'next/router';

const getContainerComponent = (currentState: CONTAINER_STATE, handleButtonClick: () => void): JSX.Element => {
  switch (currentState) {
    case CONTAINER_STATE.BRIEF:
      return <QuizBrief containerState={currentState} handleButtonClick={handleButtonClick}/>
      break;
    case CONTAINER_STATE.QUIZ:
      return <QuizQuestionPanel containerState={currentState} handleButtonClick={handleButtonClick}/>
      break;
    default:
      break;
  }
}

const QuizPage = () => {
  const navigate = useRouter();
  const handleButtonClick = () => {
    //console.log("Container state: " + containerState);
    switch (containerState) {
      case CONTAINER_STATE.BRIEF:
        setContainerState(containerState + 1);
        break;
      case CONTAINER_STATE.QUIZ:
        navigate.push(`/quiz/recommendations`)
        break;
      default:
        break;
    }
  }
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');
  const [containerState, setContainerState] = useState<CONTAINER_STATE>(CONTAINER_STATE.BRIEF);
  const containerComponent:JSX.Element = useMemo(() => getContainerComponent(containerState, handleButtonClick), [containerState, handleButtonClick]);



  if (userQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError) {
    const errorMessage = userQuery.error.message;
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <Layout title='Livebetter | DBS Bank' heading='LiveBetter' user={userQuery.data}>
      {/* Header */}
      <RecommendationQuizHeader
        title={QUIZ_CONSTANTS.TITLE}
      />

      {/* Container */}
      <RecommendationQuizContainer>
        {containerComponent}    
      </RecommendationQuizContainer>


    </Layout>
  )
}

export default QuizPage