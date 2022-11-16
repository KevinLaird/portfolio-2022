import React from 'react';
import ContentTabs from '../components/UI/Tabs/ContentTabs';

const DUMMY_JSX: { id: string, title: string, content: string; }[] = [
  {
    id: 't1',
    title: 'Title 1',
    content: 'Content',
  },
  {
    id: 't2',
    title: 'Title 2',
    content: 'Content',
  },
];

const About = (): JSX.Element => (
  <>
    <h1>hello world</h1>
    About
    <ContentTabs content={DUMMY_JSX} />
  </>
);

export default About;
