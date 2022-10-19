import React from 'react';
import LeaderboardCard from './LeaderboardCard';

const people = [
  {
    name: 'Steven Lim (Me)',
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
  {
    name: 'David',
    badges: ['carbon_100', 'climate_positive_6'],
    imageUrl:
      'https://images.unsplash.com/profile-1602788303253-d8e1b652c4c9image?dpr=1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    ranking: '4',
    treesPlanted: '1132',
    color: '#FFFF',
  },
  {
    name: 'Jamie',
    badges: ['carbon_100', 'sparkly_trees_25'],
    imageUrl:
      'https://images.unsplash.com/profile-fb-1617439910-9ab0cf41c860.jpg?dpr=1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    ranking: '5',
    treesPlanted: '1067',
    color: '#FFFF',
  },
  {
    name: 'Bob',
    badges: ['carbon_50', 'climate_positive_3'],
    imageUrl:
      'https://images.unsplash.com/profile-1584566982645-74be0a12137eimage?dpr=1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    ranking: '6',
    treesPlanted: '957',
    color: '#FFFF',
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
