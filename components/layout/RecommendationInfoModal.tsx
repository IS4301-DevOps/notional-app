import React from 'react'
import classes from '../../styles/components/layout/RecommendationInfoModal.module.css';
import { ICompanyTier, CompanyTiers } from '../../constants/recommendationinfomodal';
import Image from 'next/image';
import { TransactionTiers } from '../../constants/recommendationinfomodal';
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


const RecommendationInfoModal = () => {
  return (
    <div className={classes['recommendation-info-container']}>
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
          generatePointsTierComponent(tier, index, tier.treeHeight, tier.treeWidth)
        )
      }
    </div>
  )
}

export default RecommendationInfoModal
