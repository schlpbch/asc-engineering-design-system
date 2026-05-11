import Dropdown from '../components/Dropdown.astro';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'ghost', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    align: {
      control: 'select',
      options: ['left', 'right'],
    },
    label: { control: 'text' },
  },
};

export default meta;

export const Default = {
  args: {
    label: 'Actions',
    variant: 'default',
    size: 'md',
    align: 'left',
    slots: {
      default: `
        <a href="#">View details</a>
        <a href="#">Edit</a>
        <a href="#">Duplicate</a>
        <a href="#">Archive</a>
      `,
    },
  },
};

export const WithIcons = {
  args: {
    label: 'Options',
    variant: 'outline',
    size: 'md',
    align: 'left',
    slots: {
      default: `
        <a href="#">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
          View
        </a>
        <a href="#">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
          Edit
        </a>
        <a href="#">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
          Duplicate
        </a>
        <a href="#" style="color:#ef4444;">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
          Delete
        </a>
      `,
    },
  },
};

export const GhostTrigger = {
  args: {
    label: 'More',
    variant: 'ghost',
    size: 'md',
    align: 'left',
    slots: {
      default: `
        <a href="#">Report issue</a>
        <a href="#">Share</a>
        <a href="#">Export</a>
      `,
    },
  },
};

export const RightAligned = {
  args: {
    label: 'Account',
    variant: 'outline',
    size: 'md',
    align: 'right',
    slots: {
      default: `
        <a href="#">Profile</a>
        <a href="#">Team settings</a>
        <a href="#">Help &amp; support</a>
        <a href="#" style="color:#ef4444;">Sign out</a>
      `,
    },
  },
};

export const AsUserMenu = {
  args: {
    variant: 'ghost',
    size: 'md',
    align: 'right',
    slots: {
      trigger: `
        <span style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.25rem 0.5rem;border-radius:9999px;cursor:pointer;">
          <span style="display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;border-radius:9999px;background:#14b8a6;color:white;font-size:0.75rem;font-weight:600;">JD</span>
          <span style="font-size:0.875rem;font-weight:500;color:#334155;">John Doe</span>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </span>
      `,
      default: `
        <a href="#">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
          Your Profile
        </a>
        <a href="#">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>
          Settings
        </a>
        <a href="#" style="color:#ef4444;">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
          Sign out
        </a>
      `,
    },
  },
};
