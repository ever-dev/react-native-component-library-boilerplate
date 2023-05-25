import { PaperProvider } from 'react-native-paper';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <PaperProvider>
      <Story />
    </PaperProvider>
  ),
];