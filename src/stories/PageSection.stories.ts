import PageSection from '../patterns/PageSection.astro';

const CONTENT =
  '<p style="color:#475569;font-size:14px;line-height:1.6">This is the section body content. It can contain any HTML, components, or text that belongs inside the section.</p>';

const meta = {
  title: 'Patterns/PageSection',
  component: PageSection,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Section heading.',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle shown below the heading.',
    },
    border: {
      control: 'boolean',
      description: 'Adds a top border to visually separate sections.',
      table: { defaultValue: { summary: 'false' } },
    },
    padding: {
      control: 'text',
      description: 'Tailwind padding class overriding the default (e.g. `py-8`).',
    },
  },
};

export default meta;

export const Default = {
  args: {
    title: 'Section Title',
    slots: { default: CONTENT },
  },
};

export const WithSubtitle = {
  args: {
    title: 'Section Title',
    subtitle: 'A short description that provides additional context for this section.',
    slots: { default: CONTENT },
  },
};

export const WithBorder = {
  args: {
    title: 'Section Title',
    border: true,
    slots: { default: CONTENT },
  },
};

export const CustomPadding = {
  args: {
    title: 'Compact Section',
    padding: 'py-8',
    slots: { default: CONTENT },
  },
};
