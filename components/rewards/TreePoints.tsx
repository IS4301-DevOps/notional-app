import Image from 'next/image';

type Props = {
  points?: number;
};

const TreePoints = ({ points }: Props) => {
  return (
    <div className='mt-2 relative flex justify-center items-center'>
      <div className='absolute -top-1 -left-4 z-0'>
        <Image alt='tree-icon' width={30} height={30} src='/badges/leaderboardtree.png' />
      </div>
      {points && <span className='inline-flex justify-center px-2 py-0.5 font-bold rounded-lg bg-white text-sm text-gray-800'>{points}</span>}
    </div>
  );
};

export default TreePoints;
