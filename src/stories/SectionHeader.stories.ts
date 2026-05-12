import SectionHeader from '../components/SectionHeader.astro';

const SVG_ICON = '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>';

const meta = {
  title: 'Components/SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Section heading text.',
    },
  },
};

export default meta;

export const Default = {
  args: {
    title: 'Section Title',
  },
};

export const WithIcon = {
  args: {
    title: 'Services',
    slots: { icon: SVG_ICON },
  },
};

export const LongTitle = {
  args: {
    title: 'Running Processes and Background Services',
  },
};
