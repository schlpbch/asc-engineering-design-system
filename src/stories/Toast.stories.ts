import Toast from '../components/Toast.astro';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info'],
      description: 'Semantic color intent of the notification.',
      table: { defaultValue: { summary: 'info' } },
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'],
      description: 'Corner/edge of the viewport where the toast appears.',
      table: { defaultValue: { summary: 'bottom-right' } },
    },
    dismissible: {
      control: 'boolean',
      description: 'Shows an × button the user can click to close the toast early.',
      table: { defaultValue: { summary: 'true' } },
    },
    duration: {
      control: 'number',
      description: 'Auto-dismiss delay in milliseconds. `0` disables auto-dismiss.',
      table: { defaultValue: { summary: '5000' } },
    },
    title: {
      control: 'text',
      description: 'Optional bold heading line.',
    },
    message: {
      control: 'text',
      description: 'Main notification text.',
    },
  },
};

export default meta;

export const Info = {
  args: {
    intent: 'info',
    message: 'Your session will expire in 10 minutes.',
    dismissible: true,
    duration: 0,
    position: 'bottom-right',
  },
};

export const Success = {
  args: {
    intent: 'success',
    message: 'Your changes have been saved successfully.',
    dismissible: true,
    duration: 0,
    position: 'bottom-right',
  },
};

export const Warning = {
  args: {
    intent: 'warning',
    message: 'You are approaching your storage limit.',
    dismissible: true,
    duration: 0,
    position: 'bottom-right',
  },
};

export const Error = {
  args: {
    intent: 'error',
    message: 'Something went wrong. Please try again.',
    dismissible: true,
    duration: 0,
    position: 'bottom-right',
  },
};

export const WithTitle = {
  args: {
    intent: 'success',
    title: 'Deployment complete',
    message: 'Your application has been deployed to production.',
    dismissible: true,
    duration: 0,
    position: 'bottom-right',
  },
};

export const NoDismiss = {
  args: {
    intent: 'info',
    title: 'Maintenance scheduled',
    message: 'The system will undergo maintenance at 2:00 AM UTC.',
    dismissible: false,
    duration: 0,
    position: 'bottom-right',
  },
};

export const BottomRight = {
  args: {
    intent: 'primary',
    title: 'New feature available',
    message: 'Check out the new dashboard analytics view.',
    dismissible: true,
    duration: 0,
    position: 'bottom-right',
  },
};
