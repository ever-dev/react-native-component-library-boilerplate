import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { VictoryPie } from 'victory-native';

export default {
  title: 'components/Charts/PieChart',
  component: VictoryPie,
} as ComponentMeta<typeof VictoryPie>;

export const Default: ComponentStory<typeof VictoryPie> = () => (
  <VictoryPie
    height={400}
    data={[
      { x: 'Cats', y: 35 },
      { x: 'Dogs', y: 40 },
      { x: 'Birds', y: 55 },
    ]}
  />
);

export const WithColors: ComponentStory<typeof VictoryPie> = () => (
  <VictoryPie
    height={400}
    colorScale={['tomato', 'orange', 'gold']}
    data={[
      { x: 'Cats', y: 35 },
      { x: 'Dogs', y: 40 },
      { x: 'Birds', y: 55 },
    ]}
  />
);

export const WithInnerRadius: ComponentStory<typeof VictoryPie> = () => (
  <VictoryPie
    height={400}
    innerRadius={80}
    data={[
      { x: 'Cats', y: 35 },
      { x: 'Dogs', y: 40 },
      { x: 'Birds', y: 55 },
    ]}
  />
);
