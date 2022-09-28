import { Carousel as CarouselComponent } from '@mantine/carousel';
import { createStyles, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import CarouselCard from './CarouselCard';

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

type CarouselData = {
  image: string;
  title: string;
  category: string;
};

type Props = {
  data?: CarouselData[];
};

const Carousel = ({ data = [] }: Props) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map(item => (
    <CarouselComponent.Slide key={item.title}>
      <CarouselCard {...item} />
    </CarouselComponent.Slide>
  ));

  return (
    <CarouselComponent
      slideSize='50%'
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap='xl'
      align='start'
      slidesToScroll={mobile ? 1 : 2}
      classNames={classes}
    >
      {slides}
    </CarouselComponent>
  );
};

export default Carousel;
