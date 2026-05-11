import IconContainer from '../components/IconContainer.astro';

const SVG_STAR = '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>';

const SVG_CHECK = '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>';

const SVG_ALERT = '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>';

const meta = {
  title: 'Components/IconContainer',
  component: IconContainer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['accent', 'success', 'warning', 'error', 'info'],
    },
  },
};

export default meta;

export const Accent = {
  args: {
    variant: 'accent',
    slots: { default: SVG_STAR },
  },
};

export const Success = {
  args: {
    variant: 'success',
    slots: { default: SVG_CHECK },
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    slots: { default: SVG_ALERT },
  },
};

export const Error = {
  args: {
    variant: 'error',
    slots: { default: SVG_ALERT },
  },
};

export const Info = {
  args: {
    variant: 'info',
    slots: { default: SVG_STAR },
  },
};
