import { NextPage } from 'next';
import Carousel from '../components/landing/Carousel';
import Layout from '../components/layout/Layout';
import ActionPanel from '../components/landing/ActionPanel';

const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  role: 'Human Resources Manager',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const stats = [
  { label: 'Vacation days left', value: 12 },
  { label: 'Sick days left', value: 4 },
  { label: 'Personal days left', value: 2 },
];

const announcements = [
  {
    id: 1,
    title: 'Office closed on July 2nd',
    href: '#',
    preview:
      'Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.',
  },
  {
    id: 2,
    title: 'New password policy',
    href: '#',
    preview:
      'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
  },
  {
    id: 3,
    title: 'Office closed on July 2nd',
    href: '#',
    preview:
      'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.',
  },
];

const Home: NextPage = () => {
  return (
    <Layout title='LiveBetter | DBS Bank' user={user}>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='sr-only'>Profile</h1>

        {/* Main 3 column grid */}
        <div className='grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8'>
          {/* Left column */}
          <div className='grid grid-cols-1 gap-4 lg:col-span-2'>
            {/* Welcome panel */}
            {/* <section aria-labelledby='profile-overview-title'>
              <WelcomeCard user={user} />
            </section> */}
            <section aria-labelledby='article-carousel'>
              <Carousel />
            </section>

            {/* Actions panel */}
            <section aria-labelledby='quick-links-title'>
              <ActionPanel />
            </section>
          </div>

          {/* Right column */}
          <div className='grid grid-cols-1 gap-4'>
            {/* Announcements */}
            <section aria-labelledby='announcements-title'>
              <div className='overflow-hidden rounded-lg bg-white shadow'>
                <div className='p-6'>
                  <h2 className='text-base font-medium text-gray-900' id='announcements-title'>
                    Dashboard
                  </h2>
                  <div className='mt-6 flow-root'>
                    <ul role='list' className='-my-5 divide-y divide-gray-200'>
                      {announcements.map(announcement => (
                        <li key={announcement.id} className='py-5'>
                          <div className='relative focus-within:ring-2 focus-within:ring-cyan-500'>
                            <h3 className='text-sm font-semibold text-gray-800'>
                              <a href={announcement.href} className='hover:underline focus:outline-none'>
                                {/* Extend touch target to entire panel */}
                                <span className='absolute inset-0' aria-hidden='true' />
                                {announcement.title}
                              </a>
                            </h3>
                            <p className='mt-1 text-sm text-gray-600 line-clamp-2'>{announcement.preview}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='mt-6'>
                    <a
                      href='#'
                      className='flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50'
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
