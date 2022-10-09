import { BreakdownByUser } from "../../interfaces";
import BreakdownListItem from "./BreakdownListItem";

type Props = {
  data?: BreakdownByUser[];
  value: 'cashback' | 'carbon';
};

const BreakdownList = ({ data, value }: Props) => {
  return (
    <ul role='list' className='divide-y divide-gray-200'>
      {data.map(item => (
        <div key={item.category}>
          <BreakdownListItem item={item} value={value} />
        </div>
      ))}
    </ul>
  );
};

export default BreakdownList;
