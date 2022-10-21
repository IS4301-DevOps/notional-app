import { createStyles, Paper, Text, Title } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles(theme => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    cursor: 'pointer',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
    textShadow: '2px 2px 4px black',
  },

  category: {
    color: theme.white,
    fontWeight: 1000,
    textTransform: 'uppercase',
    textShadow: '1px 1px 2px black',
  },
}));

type Props = {
  id: string;
  image: string;
  title: string;
  category: string;
};

const CarouselCard = ({ id, image, title, category }: Props) => {
  const { classes } = useStyles();

  return (
    <Link
      href={{
        pathname: '/article',
        query: { id: id},
      }}
    >
      <Paper shadow='md' p='xl' radius='md' sx={{ backgroundImage: `url(${image})` }} className={classes.card}>
        <div>
          <Text className={classes.category} size='xs'>
            {category}
          </Text>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
        </div>
      </Paper>
    </Link>
  );
};

export default CarouselCard;
