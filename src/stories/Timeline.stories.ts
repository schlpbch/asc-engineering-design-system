import Timeline from '../patterns/Timeline.astro';
import type { TimelineItem } from '../utils/types';

const ITEMS: TimelineItem[] = [
  {
    title: 'Principal Engineer',
    company: 'Acme Corp',
    location: 'Zurich, Switzerland',
    period: 'Jan 2023 – Present',
    bullets: [
      'Led architecture for a distributed event-driven platform processing 50M events/day.',
      'Grew and mentored a team of 8 engineers across three squads.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Bright Systems',
    location: 'Bern, Switzerland',
    period: 'Mar 2020 – Dec 2022',
    bullets: [
      'Designed and built a GraphQL federation layer consolidating 12 upstream services.',
      'Reduced p99 API latency from 800ms to 120ms through query planning improvements.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'StartupXYZ',
    location: 'Basel, Switzerland',
    period: 'Jun 2017 – Feb 2020',
    bullets: [
      'Full-stack development on a SaaS product with React, Node.js, and PostgreSQL.',
    ],
  },
];

const meta = {
  title: 'Patterns/Timeline',
  component: Timeline,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Section heading above the timeline.',
    },
    border: {
      control: 'boolean',
      description: 'Adds a top border to the section.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

export const Default = {
  args: {
    items: ITEMS,
    title: 'Experience',
  },
};

export const SingleItem = {
  args: {
    items: [ITEMS[0]],
    title: 'Experience',
  },
};

export const WithCustomTitle = {
  args: {
    items: ITEMS,
    title: 'Career History',
    border: true,
  },
};
