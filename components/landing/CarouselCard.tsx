import { Button, createStyles, Paper, Text, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
    textShadow: '2px 2px 4px black'
  },

  category: {
    color: theme.white,
    fontWeight: 1000,
    textTransform: 'uppercase',
    textShadow: '1px 1px 2px black'
  },
}));

type Props = {
  image: string;
  title: string;
  category: string;
}

const CarouselCard = ({ image, title, category }: Props) => {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}

export default CarouselCard