import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Bar, VictoryBar, VictoryChart, VictoryTheme, VictoryTooltip } from 'victory-native';

const data = [
  { x: 1, y: 13000 },
  { x: 2, y: 16500 },
  { x: 3, y: 14250 },
  { x: 4, y: 19000 },
];

export default {
  title: 'components/Charts/BarChart',
  component: VictoryBar,
} as ComponentMeta<typeof VictoryBar>;

export const Default: ComponentStory<typeof VictoryBar> = () => (
  <View style={styles.container}>
    <VictoryChart width={350} theme={VictoryTheme.material}>
      <VictoryBar data={data} />
    </VictoryChart>
  </View>
);

export const WithLabels: ComponentStory<typeof VictoryBar> = () => (
  <View style={styles.container}>
    <VictoryChart domainPadding={{ x: 40, y: 40 }}>
      <VictoryBar
        style={{ data: { fill: '#c43a31' } }}
        data={data}
        labels={({ datum }) => `y: ${datum.y}`}
        labelComponent={<VictoryTooltip />}
        dataComponent={<Bar tabIndex={0} ariaLabel={({ datum }) => `x: ${datum.x}`} />}
      />
    </VictoryChart>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});
