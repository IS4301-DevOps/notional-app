import React from 'react';
import Loading from '../../../components/common/Loading';
import RewardsLayout from '../../../components/layout/RewardsLayout';
import { useUserQuery } from '../../../hooks/queries';

const RewardsRedeemed = () => {
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');
  if (userQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError) {
    const errorMessage = userQuery.error.message;
    return <div>Error: {errorMessage}</div>;
  }
  return <RewardsLayout user={userQuery.data}></RewardsLayout>;
};

export default RewardsRedeemed;
