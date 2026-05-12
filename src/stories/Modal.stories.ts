import Modal from '../components/Modal.astro';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Maximum width of the modal panel.',
      table: { defaultValue: { summary: 'md' } },
    },
    title: {
      control: 'text',
      description: 'Heading rendered in the modal header.',
    },
    description: {
      control: 'text',
      description: 'Subtitle rendered below the title.',
    },
    open: {
      control: 'boolean',
      description: 'Controls modal visibility. Pass `true` to show the modal in Storybook.',
      table: { defaultValue: { summary: 'false' } },
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Renders an × button in the top-right corner of the header.',
      table: { defaultValue: { summary: 'true' } },
    },
  },
};

export default meta;

export const Default = {
  args: {
    open: true,
    size: 'md',
    title: 'Modal Title',
    description: 'A brief description of this modal.',
    showCloseButton: true,
    slots: {
      default: '<p style="color:#475569;font-size:14px">Modal body content goes here. You can put any content inside.</p>',
    },
  },
};

export const Small = {
  args: {
    open: true,
    size: 'sm',
    title: 'Confirm',
    showCloseButton: true,
    slots: {
      default: '<p style="color:#475569;font-size:14px">Are you sure you want to continue?</p>',
    },
  },
};

export const Large = {
  args: {
    open: true,
    size: 'lg',
    title: 'Detailed View',
    description: 'A larger modal for more content.',
    showCloseButton: true,
    slots: {
      default: '<p style="color:#475569;font-size:14px;margin-bottom:12px">This modal has a larger width for displaying more detailed content, forms, or data tables.</p><p style="color:#475569;font-size:14px">Additional content can go here.</p>',
    },
  },
};

export const NoCloseButton = {
  args: {
    open: true,
    size: 'md',
    title: 'Required Action',
    description: 'This modal must be dismissed via the buttons below.',
    showCloseButton: false,
    slots: {
      default: '<p style="color:#475569;font-size:14px">You must take an action to close this modal.</p>',
    },
  },
};

export const NoHeader = {
  args: {
    open: true,
    size: 'md',
    showCloseButton: false,
    slots: {
      default: '<p style="color:#475569;font-size:14px">A modal without a title or description.</p>',
    },
  },
};
