import ModalHeader from '../components/ModalHeader.astro';

const meta = {
  title: 'Components/ModalHeader',
  component: ModalHeader,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Primary heading of the modal.',
    },
    subtitle: {
      control: 'text',
      description: 'Optional description rendered below the title.',
    },
    closeButtonId: {
      control: 'text',
      description: 'DOM id placed on the × button, used by the parent Modal to wire up dismissal.',
    },
  },
};

export default meta;

export const Default = {
  args: {
    title: 'Modal Title',
  },
};

export const WithSubtitle = {
  args: {
    title: 'Edit Configuration',
    subtitle: 'Update the settings for this service.',
  },
};

export const LongTitle = {
  args: {
    title: 'This Is A Very Long Modal Title That May Wrap On Smaller Screens',
    subtitle: 'With a subtitle too.',
  },
};
