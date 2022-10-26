import React, { useState, useMemo, useCallback } from 'react';
import * as QUIZ_CONSTANTS from '../../constants';
import Layout from '../../components/layout/Layout';
import { useUserQuery } from '../../hooks/queries';
import Loading from '../../components/common/Loading';
import RecommendationQuizHeader from '../../components/quiz/RecommendationQuizHeader';
import RecommendationQuizContainer from '../../components/quiz/RecommendationQuizContainer';
import { CONTAINER_STATE } from '../../constants/quiz';
import QuizBrief from './quiz-brief';
import { QuizQuestionPanel } from './quiz-questions';
import { useRouter } from 'next/router';
import classes from "../../styles/components/quiz/QuizPage.module.css";

const getContainerComponent = (currentState: CONTAINER_STATE, handleButtonClick: () => void): JSX.Element => {
  switch (currentState) {
    case CONTAINER_STATE.BRIEF:
      return <QuizBrief containerState={currentState} handleButtonClick={handleButtonClick} />;
    case CONTAINER_STATE.QUIZ:
      return <QuizQuestionPanel containerState={currentState} handleButtonClick={handleButtonClick} />;
  }
};

const QuizPage = () => {
  const navigate = useRouter();
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');
  const [containerState, setContainerState] = useState<CONTAINER_STATE>(CONTAINER_STATE.BRIEF);
  const handleButtonClick = useCallback(() => {
    //console.log("Container state: " + containerState);
    switch (containerState) {
      case CONTAINER_STATE.BRIEF:
        setContainerState(containerState + 1);
        break;
      case CONTAINER_STATE.QUIZ:
        navigate.push(`/quiz/recommendations`);
        break;
      default:
        break;
    }
  }, [containerState, navigate]);
  const containerComponent: JSX.Element = useMemo(
    () => getContainerComponent(containerState, handleButtonClick),
    [containerState, handleButtonClick],
  );

  if (userQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError) {
    const errorMessage = userQuery.error.message;
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <Layout title='Livebetter | DBS Bank' heading='LiveBetter' user={userQuery.data}>
      <div className={classes['quiz-container']}>
      {/* Header */}
      <RecommendationQuizHeader title={QUIZ_CONSTANTS.TITLE} />

      {/* Container */}
      <RecommendationQuizContainer>{containerComponent}</RecommendationQuizContainer>
      </div>
    </Layout>
  );
};

export default QuizPage;
