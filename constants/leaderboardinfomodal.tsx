import Leaders from "../public/infomodal/leaders.svg";
import Averages from "../public/infomodal/averages.svg";
import Laggards from "../public/infomodal/laggards.svg";
import { IPointsTier } from "./dashboardinfomodal";
export interface ICompanyTier {
  label: string,
  imageUrl: string,
  description: string,
}

export const CompanyTiers: ICompanyTier[] = [
  {
    label: 'Leaders',
    imageUrl: Leaders,
    description: '8.0 and above'
  },
  {
    label: 'Averages',
    imageUrl: Averages,
    description: 'Between 5.0 and 8.0'
  },
  {
    label: 'Laggards',
    imageUrl: Laggards,
    description: 'Below 5.0'
  },
]


export const TransactionTiers: IPointsTier[] = [
  {
    name: 'Tier One',
    points: 400,
    description: '70% of transactions from Leaders/Averages'
  },
  {
    name: 'Tier Two',
    points: 250,
    description: '50% of transactions from Leaders/Averages'
  },
]