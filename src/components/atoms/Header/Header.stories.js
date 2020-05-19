import React from 'react';
import '../../../App.scss';
import Header from './Header';
import HeaderMarkDown from './Header.md';

export default {
  title: 'Header',
  component: Header,
  excludeStories: /.*Data$/,
};

export const HeaderData = {
  hearderSizeLg: 'lg',
  hearderSizeMd: 'md',
  children: 'Hello World',
};

export const Defaults = () => (
  <div>
    <Header headerSize={HeaderData.hearderSizeLg}>{HeaderData.children}</Header>
    <Header headerSize={HeaderData.hearderSizeMd}>{HeaderData.children}</Header>
  </div>
);

Defaults.story = {
  parameters: {
    notes: { HeaderMarkDown },
  },
};
