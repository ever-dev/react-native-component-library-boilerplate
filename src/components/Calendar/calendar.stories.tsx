import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';

export default {
  title: 'components/Calendar',
  component: Calendar,
} as ComponentMeta<typeof Calendar>;

export const Default: ComponentStory<typeof Calendar> = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      onDayPress={(day) => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: { selected: true, disableTouchEvent: true },
      }}
    />
  );
};
