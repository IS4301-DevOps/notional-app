import React from 'react';
import Loading from '../../components/common/Loading';
import { useUserQuery } from '../../hooks/queries';
import Layout from '../../components/layout/Layout';
import { useRouter } from 'next/router';
import quiz from '../../components/knowledge/knowledge-quiz';
import Quiz from '../../components/knowledge/Quiz';

export default function Knowledge() {
  const router = useRouter();
  const rank = Number(router.query.rank);
  const [quizResult, setQuizResult] = React.useState();

  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');

  if (userQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError) {
    const errorMessage = userQuery.error.message;
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <>
      <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={userQuery.data}>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div>
            <div className='flex justify-between mb-5'>
              <strong>ESG Quiz</strong>
            </div>
            <Quiz
              quiz={quiz}
              shuffle
              // showInstantFeedback
              // continueTillCorrect
              onComplete={setQuizResult}
              onQuestionSubmit={obj => console.log('user question results:', obj)}
              disableSynopsis
              showDefaultResult={undefined}
              customResultPage={undefined}
              showInstantFeedback={undefined}
              continueTillCorrect={undefined}
              revealAnswerOnSubmit={undefined}
              allowNavigation={undefined} // revealAnswerOnSubmit
              // allowNavigation
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
