import React from 'react';
import classes from '../../styles/components/layout/DashboardInfoModal.module.css';
import { DashboardTiers, IPointsTier } from '../../constants/dashboardinfomodal';
import PointsContainer from '../common/PointsContainer';


export const generatePointsTierComponent = (dashboardTier: IPointsTier, index: number, treeHeight?: number, treeWidth?: number) => {
  return (
    <div className={classes['tier-component']} key={index}>
      <h3>{dashboardTier.name}</h3>
      <div className={classes['tier-column']}>
        <PointsContainer
          height={treeHeight}
          width={treeWidth}
          points={dashboardTier.points}
        />
        <span>- {dashboardTier.description}</span>
      </div>
    </div>
  )
}

const DashboardInfoModal = ({}) => {
  return (
    <div className={classes['dashboard-info-container']}>
      <h3>Singaporeans contribute approximately 692kg of carbon emissions monthly.</h3>
      <h3>We want you to get rewarded for making a difference.</h3>
      <h3>Carbon Emissions LiveBetter Points Tier List (Monthly)</h3>
      {
        DashboardTiers.map((dashboardTier, index) => generatePointsTierComponent(dashboardTier, index))
      }

    </div>
  );
};

export default DashboardInfoModal;
