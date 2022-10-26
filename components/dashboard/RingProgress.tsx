import { RingProgress as RingProgressComponent, Text, Group, RingProgressProps } from '@mantine/core';
import { ReactNode } from 'react';

type Props = {
  size?: number
  label?: ReactNode;
  sections?: RingProgressProps['sections'];
};

const RingProgress = ({ size = 170, label, sections }: Props) => {
  return (
    <Group position='center'>
      <RingProgressComponent size={size} thickness={16} roundCaps label={label} sections={sections} />
    </Group>
  );
};

export default RingProgress;
