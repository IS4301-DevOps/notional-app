import React from 'react';
import { CompanyRating } from '../../interfaces';
import RatingListItem from './RatingListItem';

type Props = {
  data?: CompanyRating[];
};

const RatingList = ({ data = [] }: Props) => {
  return (
    <ul role='list' className='divide-y divide-gray-200'>
      {data.map(item => (
        <div key={item.company}>
          <RatingListItem item={item} />
        </div>
      ))}
    </ul>
  );
};

export default RatingList;
