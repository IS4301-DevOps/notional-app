import React from 'react';
import LeaderboardCard from './LeaderboardCard';

const people = [
  {
    name: 'Chen Jun Hong (Me)',
    badges: ['carbon_50', 'sparkly_trees_25'],
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    ranking: '7',
    treesPlanted: '969',
    color: '#FFFF',
  },
  {
    name: 'Brayden',
    badges: ['carbon_100', 'climate_positive_6', 'sparkly_trees_150'],
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    ranking: '1',
    treesPlanted: '1311',
    color: '#B1D7B4',
  },
  {
    name: 'Eunice',
    badges: ['carbon_100', 'climate_positive_3', 'sparkly_trees_25'],
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    ranking: '2',
    treesPlanted: '1261',
    color: '#FFC090',
  },
  {
    name: 'Simran',
    badges: ['carbon_100', 'climate_positive_12', 'sparkly_trees_25'],
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    ranking: '3',
    treesPlanted: '1223',
    color: '#FFC090',
  },

  // More people...
];

export default function LeaderboardList() {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
      {people.map((person, index) => (
        <LeaderboardCard key={index} index={index} person={person} />
      ))}
    </div>
  );
}
