import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { PaperProvider } from 'react-native-paper';

export const decorators = [
  withBackgrounds,
  (Story) => (
    <PaperProvider>
      <Story />
    </PaperProvider>
  ),
];
export const parameters = {
  backgrounds: {
    default: 'plain',
    values: [{ name: 'plain', value: 'white' }],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
