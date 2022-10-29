import { render, cleanup } from '@testing-library/react';
import Tabs from '../dashboard/Tabs';

afterEach(() => {
  cleanup();
});

test('should render Tabs component', () => {
  const tabs = [
    { name: 'Carbon Emission', href: '', current: true },
    { name: 'Cashback', href: '/dashboard/cashback', current: false },
  ];
  const { getByText } = render(<Tabs tabs={tabs} />);
  getByText('Carbon Emission');
});
