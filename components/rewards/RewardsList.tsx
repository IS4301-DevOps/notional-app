import { Reward } from '../../interfaces';
import RewardsListItem from './RewardsListItem';

type Props = {
  data?: Reward[];
};

const RewardsList = ({ data = [] }: Props) => {
  return (
    <ul role='list'>
      {data.map(item => (
        <div key={item.id}>
          <RewardsListItem item={item} />
        </div>
      ))}
    </ul>
  );
};

export default RewardsList;
