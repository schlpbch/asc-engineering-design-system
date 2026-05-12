import ProjectGrid from '../patterns/ProjectGrid.astro';
import type { Project } from '../utils/types';

const PROJECTS: Project[] = [
  {
    name: 'Distributed Event Bus',
    description:
      'High-throughput event streaming infrastructure processing 50M events/day with sub-10ms p99 latency using Kafka and Go.',
    tech: ['Go', 'Kafka', 'Kubernetes', 'Terraform'],
    href: 'https://github.com',
  },
  {
    name: 'GraphQL Federation Layer',
    description:
      'Unified API gateway consolidating 12 upstream microservices into a single typed schema with automatic persisted queries.',
    tech: ['TypeScript', 'Apollo', 'GraphQL', 'Node.js'],
    href: 'https://github.com',
  },
  {
    name: 'ML Feature Store',
    description:
      'Real-time feature serving platform for machine learning models with point-in-time correctness and 99.99% availability.',
    tech: ['Python', 'Redis', 'PostgreSQL', 'AWS'],
    href: 'https://github.com',
  },
  {
    name: 'Design System',
    description:
      'Component library for Astro with 30+ primitives, TailwindCSS v4, dark mode, Storybook documentation, and strict TypeScript.',
    tech: ['Astro', 'TypeScript', 'TailwindCSS', 'Storybook'],
    href: 'https://github.com',
  },
];

const meta = {
  title: 'Patterns/ProjectGrid',
  component: ProjectGrid,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Section heading above the project cards.',
    },
    border: {
      control: 'boolean',
      description: 'Adds a top border to the section.',
      table: { defaultValue: { summary: 'false' } },
    },
    featured: {
      control: 'boolean',
      description: 'Uses a 2-column featured layout instead of the standard grid.',
      table: { defaultValue: { summary: 'false' } },
    },
    viewAllHref: {
      control: 'text',
      description: 'URL for a "View all" link shown in the section header. Omit to hide.',
    },
  },
};

export default meta;

export const Default = {
  args: {
    projects: PROJECTS,
    title: 'Projects',
  },
};

export const Featured = {
  args: {
    projects: PROJECTS.slice(0, 2),
    title: 'Featured Work',
    featured: true,
    border: true,
    viewAllHref: '/work',
  },
};

export const Single = {
  args: {
    projects: [PROJECTS[0]],
    title: 'Projects',
  },
};
