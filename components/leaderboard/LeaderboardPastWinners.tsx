import React from 'react';
import LeaderboardPastWinnerCard from './LeaderboardPastWinnerCard';
import Loading from '../../components/common/Loading';
import { useUserQuery } from '../../hooks/queries';

const people = [
  {
    name: 'Brayden',
    badges: ['sparkly_trees_150', 'climate_positive_6', 'carbon_100'],
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    date: '08/22',
    treesPlanted: '1311',
  },
  {
    name: 'Eunice',
    badges: ['sparkly_trees_25', 'climate_positive_3', 'carbon_100'],
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    date: '07/22',
    treesPlanted: '1261',
  },
  {
    name: 'Simran',
    badges: ['sparkly_trees_150', 'climate_positive_12'],
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    date: '06/22',
    treesPlanted: '1223',
  },

  // More people...
];

export default function LeaderboardPastWinners() {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
      {people.map((person, index) => (
        <LeaderboardPastWinnerCard key={index} index={index} person={person} />
      ))}
    </div>
  );
}
