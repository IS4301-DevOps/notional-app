import React from 'react';
import Image from 'next/image';

//Used for Levi Recommendation Details

export default function RecommendationDetails() {
  return (
    <div className='relative  rounded-lg border border-gray-300 bg-white px-6 py-5 drop-shadow-md focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400'>
      <div className='align-middle; text-center'>
        <Image objectFit='cover' width='350px' height='100px' src='/recommendation-results/levi.svg' alt='' />
      </div>
      <div className='min-w-0 flex-1'>{/* <Image width='350px' height='350' src='/recommendation-results/ratings.svg' alt='' /> */}</div>
      {/* /Planet/ */}
      <div className='grid grid-cols-3 align-middle; text-center mt-2'>
        <div>
          <p>Planet</p>
        </div>
        <div></div>
        <div></div>
        <div>
          <Image width='37px' height='37px' src='/recommendation-results/view-recommendation/PlanetIcon.svg' alt='' />
        </div>
        <div>
          <Image
            layout='fixed'
            width='100px'
            height='30px'
            src='/recommendation-results/view-recommendation/PlanetProgressBar.svg'
            alt=''
          />
        </div>
        <div>
          <p>4 out of 5</p>
        </div>
      </div>
      {/* // */}
      {/* /People/ */}
      <div className='grid grid-cols-3 align-middle; text-center'>
        <div>
          <p>People</p>
        </div>
        <div></div>
        <div></div>
        <div>
          <Image width='37px' height='37px' src='/recommendation-results/view-recommendation/PeopleIcon.svg' alt='' />
        </div>
        <div>
          <Image
            layout='fixed'
            width='100px'
            height='30px'
            src='/recommendation-results/view-recommendation/PeopleProgressBar.svg'
            alt=''
          />
        </div>
        <div>
          <p>2 out of 5</p>
        </div>
      </div>
      {/* // */}
      {/* /Animals/ */}
      <div className='grid grid-cols-3 align-middle; text-center'>
        <div>
          <p>Animals</p>
        </div>
        <div></div>
        <div></div>
        <div>
          <Image width='37px' height='37px' src='/recommendation-results/view-recommendation/AnimalsIcon.svg' alt='' />
        </div>
        <div>
          <Image
            layout='fixed'
            width='100px'
            height='30px'
            src='/recommendation-results/view-recommendation/AnimalsProgressBar.svg'
            alt=''
          />
        </div>
        <div>
          <p>2 out of 5</p>
        </div>
      </div>
      {/* // */}
      <div className='h-[6px] mt-2 bg-gray-100'></div>
      <div>
        <h2 className='text-[#0FAC74] font-semibold mt-4'>ENVIRONMENT</h2>
        <ul className='list-disc ml-8 mt-2 mb-4'>
          <li>Uses eco-friendly materials including recycle materials.</li>
          <li>Has a science-based target to reduce greenhouse gas emissions generated from its supply chain.</li>
          <li>Implements water reduction initiatives throughout supply chain.</li>
          <li>
            Met Zero Discharge of Hazardous Chemicals Group (ZHDC) target to eliminate hazardous chemicals from most of its supply chain.
          </li>
        </ul>
      </div>
      <div className='h-[6px] bg-gray-100'></div>
      <div>
        <h2 className='text-[#0FAC74] font-semibold mt-4'>LABOUR</h2>
        <ul className='list-disc ml-8 mt-2 mb-4'>
          <li>Implements gender equality and empowerment initiatives in its supply chain.</li>
          <li>Discloses policies to protect suppliers in its supply chain from the impact of COVID-19 but not workers.</li>
        </ul>
      </div>
      <div className='h-[6px] bg-gray-100'></div>
      <div>
        <h2 className='text-[#0FAC74] font-semibold mt-4'>ANIMAL</h2>
        <ul className='list-disc ml-8 mt-2 mb-4'>
          <li>It has a formal animal welfare policy aligned with Five Freedoms.</li>
          <li>It has a policy to source wool from non-mulesed sheep.</li>
          <li>It does not use fur, angora, exotic animal hair or exotic animal skin.</li>
          <li>It traces some animal products to the first stage of production.</li>
        </ul>
      </div>
    </div>
  );
}
