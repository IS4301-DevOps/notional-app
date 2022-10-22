export interface IPointsTier {
  name: string,
  points: number,
  description: string,
}

export const DashboardTiers: IPointsTier[] = [
  {
    name: 'Tier One',
    points: 350,
    description: 'Below 400kg Emitted'
  },
  {
    name: 'Tier Two',
    points: 250,
    description: '401-600kg Emitted'
  },
  {
    name: 'Tier Three',
    points: 150,
    description: '601-700kg Emitted'
  },
]