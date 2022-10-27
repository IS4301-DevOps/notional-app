import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import LeaderboardCard from '../leaderboard/LeaderboardCard';

afterEach(() => {
  cleanup();
});

test('should render LeaderboardCard component', () => {
  const person = {
    name: 'David',
    badges: ['carbon_100', 'climate_positive_6'],
    imageUrl:
      'https://images.unsplash.com/profile-1602788303253-d8e1b652c4c9image?dpr=1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    ranking: '4',
    treesPlanted: '1132',
    color: '#FFFF',
  };
  const { getByText } = render(<LeaderboardCard person={person} />);
  getByText('David');
});

test('matches snapshot', () => {
  const person = {
    name: 'David',
    badges: ['carbon_100', 'climate_positive_6'],
    imageUrl:
      'https://images.unsplash.com/profile-1602788303253-d8e1b652c4c9image?dpr=1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    ranking: '4',
    treesPlanted: '1132',
    color: '#FFFF',
  };
  const tree = renderer.create(<LeaderboardCard person={person} />).toJSON();
  expect(tree).toMatchSnapshot();
});
