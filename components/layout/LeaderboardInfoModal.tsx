import React from 'react'
import classes from '../../styles/components/layout/LeaderboardInfoModal.module.css';
import { ICompanyTier, CompanyTiers } from '../../constants/leaderboardinfomodal';
import Image from 'next/image';
import { TransactionTiers } from '../../constants/leaderboardinfomodal';
import { IPointsTier } from '../../constants/dashboardinfomodal';
import { generatePointsTierComponent } from './DashboardInfoModal';

const generateCompanyTierComponent = (tier: ICompanyTier, index: number) => {
  return (
    <div key={index} className={classes['company-tier-row']}>
      <Image
        src={tier.imageUrl}
        alt={"Image of " + tier.label}
      />
      <p>{tier.label} - {tier.description}</p>
    </div>
  )
}


const LeaderboardInfoModal = () => {
  return (
    <div className={classes['leaderboard-info-container']}>
      <h3>Make green purchases and enjoy green rewards!</h3>
      <h3>Company ESG Rating Tier List</h3>
      {/* Leaders, Averages, Laggards */}
      {
        CompanyTiers.map((tier, index) =>
          generateCompanyTierComponent(tier, index)
        )
      }
      <h3>Transactions LiveBetter Points Tier List (Monthly)</h3>
      {/* Tiers */}
      {
        TransactionTiers.map((tier, index) =>
          generatePointsTierComponent(tier, index, 59, 54)
        )
      }
    </div>
  )
}

export default LeaderboardInfoModal
