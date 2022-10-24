import Image from 'next/image';
import React from 'react'
import { IPointsTier } from '../../constants/dashboardinfomodal';
import { ILeaderBoardCard } from '../../constants/leaderboardinfomodal';
import classes from "../../styles/components/layout/LeaderboardInfoModal.module.css";
import { generatePointsTierComponent } from './DashboardInfoModal';
import { LeaderboardCards } from '../../constants/leaderboardinfomodal';

interface CardComponentProps extends ILeaderBoardCard {
  index: number
}

const LeaderboardCardComponent = ({
  title,
  iconUrl,
  tierList,
  index
}:CardComponentProps) => {
  return (
    <div key={index} className={classes['card-container']}>
      <div className={classes['title']}>
        <Image src={iconUrl} alt={"Image of globe"}/>
        <h3>{title}</h3>
      </div>
      {
        tierList.map((tier,index) =>
        generatePointsTierComponent(tier,index, tier.treeHeight, tier.treeWidth)
        )
      }
    </div>
  )
}

const LeaderboardInfoModal = () => {
  return (
    <div className={classes['leaderboard-info-container']}>
      {/* Main Title */}
      <h3>Earn LiveBetter points from making ESG-friendly decisions and use them to redeem rewards!</h3>
      {
        LeaderboardCards.map((card, index) => 
        <LeaderboardCardComponent
          index={index}
          key={index}
          title={card.title}
          iconUrl={card.iconUrl}
          tierList={card.tierList}
        />
        )
      }
    </div>
  )
}

export default LeaderboardInfoModal