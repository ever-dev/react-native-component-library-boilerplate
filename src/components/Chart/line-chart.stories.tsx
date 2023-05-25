import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { VictoryLine, VictoryChart, VictoryLabel } from 'victory-native';

export default {
  title: 'components/Charts/LineChart',
  component: VictoryLine,
} as ComponentMeta<typeof VictoryLine>;

export const Default: ComponentStory<typeof VictoryLine> = () => (
  <VictoryChart>
    <VictoryLine
      data={[
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 5 },
        { x: 4, y: 4 },
        { x: 5, y: 6 },
      ]}
    />
  </VictoryChart>
);

export const WithInterpolation: ComponentStory<typeof VictoryLine> = () => (
  <VictoryChart>
    <VictoryLine
      interpolation="natural"
      data={[
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 5 },
        { x: 4, y: 4 },
        { x: 5, y: 6 },
      ]}
    />
  </VictoryChart>
);

export const WithLabel: ComponentStory<typeof VictoryLine> = () => (
  <VictoryChart>
    <VictoryLine
      interpolation="natural"
      data={[
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 5 },
        { x: 4, y: 4 },
        { x: 5, y: 6 },
      ]}
      labels={({ datum }) => datum.y}
      labelComponent={<VictoryLabel renderInPortal dy={-20} />}
    />
  </VictoryChart>
);
