import Tabs from '../components/Tabs.astro';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['underline', 'pills', 'bordered'],
      description: 'Visual style of the tab list.',
      table: { defaultValue: { summary: 'underline' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Font size and padding of the tab items.',
      table: { defaultValue: { summary: 'md' } },
    },
    activeTab: {
      control: 'text',
      description: 'The `id` of the initially active tab.',
    },
  },
};

export default meta;

export const Underline = {
  args: {
    variant: 'underline',
    size: 'md',
    tabs: [
      { id: 'overview', label: 'Overview' },
      { id: 'analytics', label: 'Analytics' },
      { id: 'settings', label: 'Settings' },
    ],
    activeTab: 'overview',
    panels: {
      overview: '<p style="color:#64748b;padding:0.5rem 0;">Overview panel content goes here.</p>',
      analytics: '<p style="color:#64748b;padding:0.5rem 0;">Analytics panel content goes here.</p>',
      settings: '<p style="color:#64748b;padding:0.5rem 0;">Settings panel content goes here.</p>',
    },
  },
};

export const Pills = {
  args: {
    variant: 'pills',
    size: 'md',
    tabs: [
      { id: 'all', label: 'All' },
      { id: 'active', label: 'Active' },
      { id: 'archived', label: 'Archived' },
    ],
    activeTab: 'all',
    panels: {
      all: '<p style="color:#64748b;padding:0.5rem 0;">Showing all items.</p>',
      active: '<p style="color:#64748b;padding:0.5rem 0;">Showing active items only.</p>',
      archived: '<p style="color:#64748b;padding:0.5rem 0;">Showing archived items.</p>',
    },
  },
};

export const Bordered = {
  args: {
    variant: 'bordered',
    size: 'md',
    tabs: [
      { id: 'profile', label: 'Profile' },
      { id: 'billing', label: 'Billing' },
      { id: 'notifications', label: 'Notifications' },
    ],
    activeTab: 'profile',
    panels: {
      profile: '<p style="color:#64748b;padding:0.5rem 0;">Profile settings content.</p>',
      billing: '<p style="color:#64748b;padding:0.5rem 0;">Billing information content.</p>',
      notifications: '<p style="color:#64748b;padding:0.5rem 0;">Notification preferences content.</p>',
    },
  },
};

export const WithBadge = {
  args: {
    variant: 'underline',
    size: 'md',
    tabs: [
      { id: 'inbox', label: 'Inbox', badge: '12' },
      { id: 'sent', label: 'Sent', badge: '3' },
      { id: 'drafts', label: 'Drafts' },
      { id: 'spam', label: 'Spam', badge: '1' },
    ],
    activeTab: 'inbox',
    panels: {
      inbox: '<p style="color:#64748b;padding:0.5rem 0;">12 unread messages in your inbox.</p>',
      sent: '<p style="color:#64748b;padding:0.5rem 0;">3 sent messages.</p>',
      drafts: '<p style="color:#64748b;padding:0.5rem 0;">No drafts saved.</p>',
      spam: '<p style="color:#64748b;padding:0.5rem 0;">1 item in spam folder.</p>',
    },
  },
};

export const WithDisabled = {
  args: {
    variant: 'underline',
    size: 'md',
    tabs: [
      { id: 'general', label: 'General' },
      { id: 'advanced', label: 'Advanced' },
      { id: 'beta', label: 'Beta Features', disabled: true },
    ],
    activeTab: 'general',
    panels: {
      general: '<p style="color:#64748b;padding:0.5rem 0;">General settings content.</p>',
      advanced: '<p style="color:#64748b;padding:0.5rem 0;">Advanced settings content.</p>',
      beta: '<p style="color:#64748b;padding:0.5rem 0;">Beta features (disabled).</p>',
    },
  },
};

export const SizeSm = {
  name: 'Size / Small',
  args: {
    variant: 'underline',
    size: 'sm',
    tabs: [
      { id: 'tab1', label: 'Tab One' },
      { id: 'tab2', label: 'Tab Two' },
      { id: 'tab3', label: 'Tab Three' },
    ],
    activeTab: 'tab1',
    panels: {
      tab1: '<p style="color:#64748b;font-size:0.875rem;padding:0.5rem 0;">Content for tab one.</p>',
      tab2: '<p style="color:#64748b;font-size:0.875rem;padding:0.5rem 0;">Content for tab two.</p>',
      tab3: '<p style="color:#64748b;font-size:0.875rem;padding:0.5rem 0;">Content for tab three.</p>',
    },
  },
};

export const SizeLg = {
  name: 'Size / Large',
  args: {
    variant: 'pills',
    size: 'lg',
    tabs: [
      { id: 'tab1', label: 'Tab One' },
      { id: 'tab2', label: 'Tab Two' },
      { id: 'tab3', label: 'Tab Three' },
    ],
    activeTab: 'tab1',
    panels: {
      tab1: '<p style="color:#64748b;padding:0.5rem 0;">Content for tab one.</p>',
      tab2: '<p style="color:#64748b;padding:0.5rem 0;">Content for tab two.</p>',
      tab3: '<p style="color:#64748b;padding:0.5rem 0;">Content for tab three.</p>',
    },
  },
};
