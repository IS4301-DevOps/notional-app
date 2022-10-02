import { Tip } from "@prisma/client";

type Props = {
  data?: Tip;
};

const TipCard = ({ data }: Props) => {
  return (
    <div className=''>
      <div className='flex items-center justify-center'>
        <div className='rounded-full bg-yellow-500 max-w-max absolute'>
          <p className='text-[10px] font-bold p-1'>TIP OF THE DAY</p>
        </div>
      </div>

      <div className='border border-yellow-500 rounded-lg bg-yellow-100 px-4 py-5 sm:px-6 text-center'>
        <h3 className='text-sm font-semibold leading-6'>{data.message}</h3>
      </div>
    </div>
  );
};

export default TipCard;
