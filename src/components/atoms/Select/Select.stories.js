import React from 'react';
import { action } from '@storybook/addon-actions';
import '../../../App.scss';
import Select from './Select.tsx';
import SelectMarkDown from './Select.md';

export default {
  title: 'Select',
  component: Select,
  excludeStories: /.*Data$/,
};

export const SelectData = {
  options: ['Africa', 'Europe', 'Asia', 'Americas'],
  placeholder: 'Select region',
};

export const ActionData = {
  handleChange: action('I will handle when a change is made'),
};

export const SelectDropdown = () => (
  <Select
    handleChange={ActionData.onClick}
    options={SelectData.options}
    placeholder={SelectData.placeholder}
  />
);

SelectDropdown.story = {
  parameters: {
    notes: { SelectMarkDown },
  },
};
