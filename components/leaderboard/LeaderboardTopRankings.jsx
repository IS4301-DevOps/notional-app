import React from 'react';
import LeaderboardVerticalCard from './LeaderboardVerticalCard';

const people = [
  {
    name: 'Eunice',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    ranking: '2',
    treesPlanted: '1261',
    color: '#FFC090',
  },
  {
    name: 'Brayden',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    ranking: '1',
    treesPlanted: '1311',
    color: '#B1D7B4',
  },
  {
    name: 'Simran',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    ranking: '3',
    treesPlanted: '1223',
    color: '#FFC090',
  },
];

export default function LeaderboardTopRankings() {
  return (
    <div className='flex'>
      {people.map((person, index) => (
        <LeaderboardVerticalCard key={index} index={index} person={person} />
      ))}
    </div>
  );
}
