import React, { useState, useEffect, useMemo } from 'react';
import classes from "./quiz.module.css";
import * as QUIZ_CONSTANTS from "./constants";
import Layout from '../../components/layout/Layout';
import { useUserQuery } from '../../hooks/queries';
import Loading from '../../components/common/Loading';
import RecommendationQuizHeader from '../../components/quiz/RecommendationQuizHeader';
import RecommendationDetails from '../../components/quiz/RecommendationDetails';
import RecommendationQuizContainer from '../../components/quiz/RecommendationQuizContainer';
import { CONTAINER_STATE } from './constants/quiz';
import QuizBrief from './quiz-brief';


const getContainerComponent = (currentState: CONTAINER_STATE): JSX.Element => {
  switch (currentState) {
    case CONTAINER_STATE.BRIEF:
      return <QuizBrief/>
      break;
    case CONTAINER_STATE.QUIZ:
      return <QuizBrief/>
      break;
    default:
      break;
  }
}

const quiz = () => {
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');

  const [containerState, setContainerState] = useState<CONTAINER_STATE>(CONTAINER_STATE.BRIEF);
  const containerComponent:JSX.Element = useMemo(() => getContainerComponent(containerState), [containerState]);

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

      <RecommendationQuizContainer>
        {containerComponent}
      </RecommendationQuizContainer>

    </Layout>
  )
}

export default quiz