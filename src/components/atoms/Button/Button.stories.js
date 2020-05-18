import React from 'react';
import { action } from '@storybook/addon-actions';
import '../../../App.scss';
import Button from './Button';
import ButtonMarkDown from './Button.md';
import BackIcon from '../../../assets/back.svg';

export default {
  title: 'Button',
  component: Button,
  excludeStories: /.*Data$/,
};

export const ButtonData = {
  btnStyle: 'btn--primary',
  children: 'Hello World',
  icon: BackIcon,
};

export const ActionData = {
  onClick: action('You clicked me'),
};

export const Text = () => (
  <Button onClick={ActionData.onClick}>{ButtonData.children}</Button>
);

export const MainButton = () => (
  <Button btnStyle={ButtonData.btnStyle} onClick={ActionData.onClick}>
    {ButtonData.children}
  </Button>
);
export const ButtonWithIcon = () => (
  <Button
    btnStyle={ButtonData.btnStyle}
    onClick={ActionData.onClick}
    icon={ButtonData.icon}>
    {ButtonData.children}
  </Button>
);

Text.story = {
  parameters: {
    notes: { ButtonMarkDown },
  },
};
MainButton.story = {
  parameters: {
    notes: { ButtonMarkDown },
  },
};
ButtonWithIcon.story = {
  parameters: {
    notes: { ButtonMarkDown },
  },
};
