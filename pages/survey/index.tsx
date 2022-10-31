import React, { useState, useMemo, useCallback } from 'react';
import * as SURVEY_CONSTANTS from '../../constants';
import Layout from '../../components/layout/Layout';
import { useUserQuery } from '../../hooks/queries';
import Loading from '../../components/common/Loading';
import RecommendationSurveyHeader from '../../components/survey/RecommendationSurveyHeader';
import RecommendationSurveyContainer from '../../components/survey/RecommendationSurveyContainer';
import { CONTAINER_STATE } from '../../constants/survey';
import SurveyBrief from './survey-brief';
import { SurveyQuestionPanel } from './survey-questions';
import { useRouter } from 'next/router';
import classes from "../../styles/components/survey/SurveyPage.module.css";

const getContainerComponent = (currentState: CONTAINER_STATE, handleButtonClick: () => void): JSX.Element => {
  switch (currentState) {
    case CONTAINER_STATE.BRIEF:
      return <SurveyBrief containerState={currentState} handleButtonClick={handleButtonClick} />;
    case CONTAINER_STATE.SURVEY:
      return <SurveyQuestionPanel containerState={currentState} handleButtonClick={handleButtonClick} />;
  }
};

const SurveyPage = () => {
  const navigate = useRouter();
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');
  const [containerState, setContainerState] = useState<CONTAINER_STATE>(CONTAINER_STATE.BRIEF);
  const handleButtonClick = useCallback(() => {
    //console.log("Container state: " + containerState);
    switch (containerState) {
      case CONTAINER_STATE.BRIEF:
        setContainerState(containerState + 1);
        break;
      case CONTAINER_STATE.SURVEY:
        navigate.push(`/survey/recommendations`);
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
      <div className={classes['survey-container']}>
      {/* Header */}
      <RecommendationSurveyHeader title={SURVEY_CONSTANTS.TITLE} />

      {/* Container */}
      <RecommendationSurveyContainer>{containerComponent}</RecommendationSurveyContainer>
      </div>
    </Layout>
  );
};

export default SurveyPage;
