import { RingProgress as RingProgressComponent, Text, Group, RingProgressProps } from '@mantine/core';
import { ReactNode } from 'react';

type Props = {
  label?: ReactNode;
  sections?: RingProgressProps['sections'];
};

const RingProgress = ({ label, sections }: Props) => {
  return (
    <Group position='center'>
      <RingProgressComponent size={170} thickness={16} roundCaps label={label} sections={sections} />
    </Group>
  );
};

export default RingProgress;
