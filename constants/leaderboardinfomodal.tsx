import { DashboardTiers, IPointsTier } from "./dashboardinfomodal";
import globeIcon from "../public/infomodal/globe.svg";
import transactionIcon from "../public/infomodal/transaction.svg";
import { TransactionTiers } from "./recommendationinfomodal";

export interface ILeaderBoardCard {
  title: string,
  iconUrl: string,
  tierList: IPointsTier[]
}

export const LeaderboardCards: ILeaderBoardCard[] = [
  {
    title: 'Carbon Emission Points Tiers (Monthly)',
    iconUrl: globeIcon,
    tierList: DashboardTiers
  },
  {
    title: 'Transactions Points Tiers (Monthly)',
    iconUrl: transactionIcon,
    tierList: TransactionTiers 
  },
]