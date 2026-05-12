import ModalFooter from '../components/ModalFooter.astro';

const meta = {
  title: 'Components/ModalFooter',
  component: ModalFooter,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    closeText: {
      control: 'text',
      description: 'Label for the dismiss button.',
      table: { defaultValue: { summary: 'Close' } },
    },
    helpText: {
      control: 'text',
      description: 'Optional secondary text shown to the left of the action buttons.',
    },
    closeButtonId: {
      control: 'text',
      description: 'DOM id placed on the close button, used by the parent Modal to wire up dismissal.',
    },
  },
};

export default meta;

export const Default = {
  args: {
    closeText: 'Close',
  },
};

export const WithHelpText = {
  args: {
    closeText: 'Cancel',
    helpText: 'Changes will not be saved.',
  },
};

export const WithActions = {
  args: {
    closeText: 'Cancel',
    helpText: 'This action cannot be undone.',
    slots: {
      actions: '<button style="background:#ef4444;color:white;padding:8px 16px;border-radius:6px;font-size:14px;font-weight:500;border:none;cursor:pointer">Delete</button>',
    },
  },
};
