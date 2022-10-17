import { Carousel } from '@mantine/carousel';
import { createStyles, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((_theme, _params, getRef) => ({
  controls: {
    ref: getRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  root: {
    '&:hover': {
      [`& .${getRef('controls')}`]: {
        opacity: 1,
      },
    },
  },
}));

type CarouselData = { id: number; name: string };

type Props = {
  data?: CarouselData[];
};

const months = [
  { id: 1, name: 'January' },
  { id: 2, name: 'February' },
  { id: 3, name: 'March' },
  { id: 4, name: 'April' },
  { id: 5, name: 'May' },
  { id: 6, name: 'June' },
  { id: 7, name: 'July' },
  { id: 8, name: 'August' },
  { id: 9, name: 'September' },
  { id: 10, name: 'October' },
  { id: 11, name: 'November' },
  { id: 12, name: 'December' },
];

const MonthCarousel = ({ data = [] }: Props) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const slides = months.map(item => (
    <Carousel.Slide key={item.id} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '100%' }}>
      <div className='flex flex-col justify-center'>
        <h2 className='text-base font-medium text-gray-900' id={item.name}>
          {item.name}
        </h2>
      </div>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      sx={{ maxWidth: 320 }}
      mx='auto'
      height={50}
    >
      {slides}
    </Carousel>
  );
};

export default MonthCarousel;
