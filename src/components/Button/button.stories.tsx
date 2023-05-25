import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const TextButton: ComponentStory<typeof Button> = () => {
  const theme = useTheme();

  const color = theme.isV3 ? theme.colors.inversePrimary : theme.colors.primary;

  return (
    <View style={styles.row}>
      <Button onPress={() => {}} style={styles.button}>
        Default
      </Button>
      <Button textColor={color} onPress={() => {}} style={styles.button}>
        Custom
      </Button>
      <Button disabled onPress={() => {}} style={styles.button}>
        Disabled
      </Button>
      <Button icon="camera" onPress={() => {}} style={styles.button}>
        Icon
      </Button>
      <Button loading onPress={() => {}} style={styles.button}>
        Loading
      </Button>
      <Button icon="camera" onPress={() => {}} style={styles.button} contentStyle={styles.flexReverse}>
        Icon right
      </Button>
    </View>
  );
};

export const ContainedTonalButton: ComponentStory<typeof Button> = () => {
  const theme = useTheme();

  const color = theme.isV3 ? theme.colors.inversePrimary : theme.colors.primary;
  return (
    <View style={styles.row}>
      <Button mode="contained-tonal" onPress={() => {}} style={styles.button}>
        Default
      </Button>
      <Button mode="contained-tonal" buttonColor={color} onPress={() => {}} style={styles.button}>
        Custom
      </Button>
      <Button mode="contained-tonal" disabled onPress={() => {}} style={styles.button}>
        Disabled
      </Button>
      <Button mode="contained-tonal" icon="camera" onPress={() => {}} style={styles.button}>
        Icon
      </Button>
      <Button mode="contained-tonal" loading onPress={() => {}} style={styles.button}>
        Loading
      </Button>
      <Button
        mode="contained-tonal"
        icon="camera"
        onPress={() => {}}
        style={styles.button}
        contentStyle={styles.flexReverse}
      >
        Icon right
      </Button>
    </View>
  );
};

export const OutlinedButton: ComponentStory<typeof Button> = () => {
  const theme = useTheme();

  const color = theme.isV3 ? theme.colors.inversePrimary : theme.colors.primary;
  return (
    <View style={styles.row}>
      <Button mode="outlined" onPress={() => {}} style={styles.button}>
        Default
      </Button>
      <Button mode="outlined" textColor={color} onPress={() => {}} style={styles.button}>
        Custom
      </Button>
      <Button mode="outlined" disabled onPress={() => {}} style={styles.button}>
        Disabled
      </Button>
      <Button mode="outlined" icon="camera" onPress={() => {}} style={styles.button}>
        Icon
      </Button>
      <Button mode="outlined" loading onPress={() => {}} style={styles.button}>
        Loading
      </Button>
      <Button mode="outlined" icon="camera" onPress={() => {}} style={styles.button} contentStyle={styles.flexReverse}>
        Icon right
      </Button>
    </View>
  );
};

export const ContainedButton: ComponentStory<typeof Button> = () => {
  const theme = useTheme();

  const color = theme.isV3 ? theme.colors.inversePrimary : theme.colors.primary;
  return (
    <View style={styles.row}>
      <Button mode="contained" onPress={() => {}} style={styles.button}>
        Default
      </Button>
      <Button mode="contained" buttonColor={color} onPress={() => {}} style={styles.button}>
        Custom
      </Button>
      <Button mode="contained" disabled onPress={() => {}} style={styles.button}>
        Disabled
      </Button>
      <Button mode="contained" icon="camera" onPress={() => {}} style={styles.button}>
        Icon
      </Button>
      <Button mode="contained" loading onPress={() => {}} style={styles.button}>
        Loading
      </Button>
      <Button mode="contained" icon="camera" onPress={() => {}} style={styles.button} contentStyle={styles.flexReverse}>
        Icon right
      </Button>
    </View>
  );
};

export const ElevatedButton: ComponentStory<typeof Button> = () => {
  const theme = useTheme();

  const color = theme.isV3 ? theme.colors.inversePrimary : theme.colors.primary;
  return (
    <View style={styles.row}>
      <Button mode="elevated" onPress={() => {}} style={styles.button}>
        Default
      </Button>
      <Button mode="elevated" buttonColor={color} onPress={() => {}} style={styles.button}>
        Custom
      </Button>
      <Button mode="elevated" disabled onPress={() => {}} style={styles.button}>
        Disabled
      </Button>
      <Button mode="elevated" icon="camera" onPress={() => {}} style={styles.button}>
        Icon
      </Button>
      <Button mode="elevated" loading onPress={() => {}} style={styles.button}>
        Loading
      </Button>
      <Button mode="elevated" icon="camera" onPress={() => {}} style={styles.button} contentStyle={styles.flexReverse}>
        Icon right
      </Button>
    </View>
  );
};

export const Custom: ComponentStory<typeof Button> = () => {
  const theme = useTheme();

  return (
    <View style={styles.row}>
      <Button
        mode="outlined"
        icon={{
          uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400',
        }}
        onPress={() => {}}
        style={styles.button}
      >
        Remote image
      </Button>
      <Button
        icon="heart"
        mode="outlined"
        onPress={() => {}}
        style={styles.button}
        labelStyle={[styles.fontStyles, theme.isV3 && styles.md3FontStyles]}
      >
        Custom Font
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  button: {
    margin: 4,
  },
  flexReverse: {
    flexDirection: 'row-reverse',
  },
  md3FontStyles: {
    lineHeight: 32,
  },
  fontStyles: {
    fontWeight: '800',
    fontSize: 24,
  },
});
