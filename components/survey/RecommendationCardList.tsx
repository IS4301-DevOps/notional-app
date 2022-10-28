import React from 'react';
import RecommendationCard from './RecommendationCard';

const shops = [
  {
    name: 'H&M',
    type: 'Multiple Outlets',
    imageURL: 'H&M',
  },
  {
    name: "Levi's",
    type: 'Multiple Outlets',
    imageURL: 'Levi',
  },
  {
    name: 'The North Face',
    type: 'Multiple Outlets',
    imageURL: 'TheNorthFace',
  },
];

const shopElements = shops.map((shop, index) => <RecommendationCard key={index} shop={shop} />);

//Used for list of recommonedation results

export default function RecommendationCardList() {
  return <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>{shopElements}</div>;
}
