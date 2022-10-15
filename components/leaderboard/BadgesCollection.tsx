import React from 'react';
import Image from 'next/image';

export default function BadgesCollection(props) {
  return (
    <div className='rounded shadow-lg mt-3 bg-[#efe6e6] pt-4 pl-4 pr-4 pb-4'>
      <div className='grid grid-cols-3 gap-y-4 text-center'>
        {/* row one */}

        {props.list.map((badge, idx) => (
          <div key={idx}>
            <Image alt='me' width='100' height='100' src={`/badges/${badge}.svg`} />
          </div>
        ))}
      </div>
    </div>
  );
}
