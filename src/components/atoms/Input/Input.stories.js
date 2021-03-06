import React from 'react';
import '../../../App.scss';
import Input from './Input';
import InputMarkDown from './Input.md';

export default {
  title: 'Input',
  component: Input,
  excludeStories: /.*Data$/,
};

export const InputData = {
  placeholder: 'Search For Country..',
  value: 'Nigeria',
  type: 'text',
};

export const InputDefault = () => (
  <Input type={InputData.type} placeholder={InputData.placeholder} />
);
export const InputWithText = () => (
  <Input
    type={InputData.type}
    placeholder={InputData.placeholder}
    value={InputData.value}
  />
);

InputDefault.story = {
  parameters: {
    notes: { InputMarkDown },
  },
};

InputWithText.story = {
  parameters: {
    notes: { InputMarkDown },
  },
};
