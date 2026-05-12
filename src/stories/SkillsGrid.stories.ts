import SkillsGrid from '../patterns/SkillsGrid.astro';
import type { Skill } from '../utils/types';

const SKILLS: Record<string, Skill[]> = {
  Languages: [
    { name: 'TypeScript', level: 'expert' },
    { name: 'Python', level: 'expert' },
    { name: 'Rust', level: 'proficient' },
    { name: 'Go', level: 'proficient' },
    { name: 'Elm', level: 'familiar' },
  ],
  Infrastructure: [
    { name: 'AWS', level: 'expert' },
    { name: 'Kubernetes', level: 'expert' },
    { name: 'Terraform', level: 'proficient' },
    { name: 'Pulumi', level: 'familiar' },
  ],
  Frontend: [
    { name: 'React', level: 'expert' },
    { name: 'Astro', level: 'proficient' },
    { name: 'Svelte', level: 'familiar' },
  ],
};

const meta = {
  title: 'Patterns/SkillsGrid',
  component: SkillsGrid,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Section heading above the skills grid.',
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
    skills: SKILLS,
    title: 'Skills',
  },
};

export const SingleCategory = {
  args: {
    skills: { Languages: SKILLS.Languages },
    title: 'Skills',
  },
};

export const WithBorder = {
  args: {
    skills: SKILLS,
    title: 'Skills',
    border: true,
  },
};
