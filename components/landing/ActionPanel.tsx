import Link from 'next/link';

const actions = [
  {
    name: 'Cashback',
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
  },
  {
    name: 'Transactions',
    description: 'Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
  },
  {
    name: 'Recommend',
    description: "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
  },
];

const ActionPanel = () => {
  return (
    <div className='overflow-hidden rounded-lg bg-white shadow'>
      <div className='mx-auto max-w-7xl py-12 sm:px-2 sm:py-32 lg:px-4'>
        <div className='mx-auto grid max-w-2xl grid-cols-3 gap-y-10 gap-x-8 px-4 lg:max-w-none'>
          {actions.map(action => (
            <Link key={action.name} href='#'>
              <div className='text-center hover:cursor-pointer sm:flex sm:text-left lg:block lg:text-center'>
                <div className='sm:flex-shrink-0'>
                  <div className='flow-root'>
                    <img className='mx-auto h-24 w-28' src={action.imageSrc} alt='' />
                  </div>
                </div>
                <div className='mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0'>
                  <h3 className='text-sm font-medium text-gray-900'>{action.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ActionPanel;
