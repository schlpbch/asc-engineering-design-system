import Table from '../components/Table.astro';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    striped: { control: 'boolean' },
    hoverable: { control: 'boolean' },
    bordered: { control: 'boolean' },
    stickyHeader: { control: 'boolean' },
    caption: { control: 'text' },
  },
};

export default meta;

const defaultHeaders = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status', align: 'center' as const },
];

const defaultRows = [
  { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active' },
  { name: 'Carol White', email: 'carol@example.com', role: 'Viewer', status: 'Inactive' },
  { name: 'David Brown', email: 'david@example.com', role: 'Editor', status: 'Active' },
  { name: 'Eve Davis', email: 'eve@example.com', role: 'Admin', status: 'Pending' },
];

const badgeRows = [
  {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'Admin',
    status: '<span style="display:inline-flex;align-items:center;padding:0.125rem 0.625rem;border-radius:9999px;font-size:0.75rem;font-weight:500;background:#dcfce7;color:#166534;">Active</span>',
  },
  {
    name: 'Bob Smith',
    email: 'bob@example.com',
    role: 'Editor',
    status: '<span style="display:inline-flex;align-items:center;padding:0.125rem 0.625rem;border-radius:9999px;font-size:0.75rem;font-weight:500;background:#dcfce7;color:#166534;">Active</span>',
  },
  {
    name: 'Carol White',
    email: 'carol@example.com',
    role: 'Viewer',
    status: '<span style="display:inline-flex;align-items:center;padding:0.125rem 0.625rem;border-radius:9999px;font-size:0.75rem;font-weight:500;background:#f1f5f9;color:#475569;">Inactive</span>',
  },
  {
    name: 'David Brown',
    email: 'david@example.com',
    role: 'Editor',
    status: '<span style="display:inline-flex;align-items:center;padding:0.125rem 0.625rem;border-radius:9999px;font-size:0.75rem;font-weight:500;background:#fef9c3;color:#854d0e;">Pending</span>',
  },
  {
    name: 'Eve Davis',
    email: 'eve@example.com',
    role: 'Admin',
    status: '<span style="display:inline-flex;align-items:center;padding:0.125rem 0.625rem;border-radius:9999px;font-size:0.75rem;font-weight:500;background:#fee2e2;color:#991b1b;">Suspended</span>',
  },
];

export const Default = {
  args: {
    headers: defaultHeaders,
    rows: defaultRows,
    striped: false,
    hoverable: true,
    bordered: false,
    stickyHeader: false,
  },
};

export const Striped = {
  args: {
    headers: defaultHeaders,
    rows: defaultRows,
    striped: true,
    hoverable: true,
    bordered: false,
  },
};

export const Bordered = {
  args: {
    headers: defaultHeaders,
    rows: defaultRows,
    striped: false,
    hoverable: true,
    bordered: true,
  },
};

export const WithBadges = {
  args: {
    headers: defaultHeaders,
    rows: badgeRows,
    striped: false,
    hoverable: true,
    bordered: false,
    caption: 'User management overview',
  },
};

export const Hoverable = {
  args: {
    headers: defaultHeaders,
    rows: defaultRows,
    striped: false,
    hoverable: true,
    bordered: false,
  },
};

export const StickyHeader = {
  args: {
    headers: defaultHeaders,
    rows: [
      ...defaultRows,
      { name: 'Frank Miller', email: 'frank@example.com', role: 'Viewer', status: 'Active' },
      { name: 'Grace Lee', email: 'grace@example.com', role: 'Editor', status: 'Inactive' },
      { name: 'Henry Wilson', email: 'henry@example.com', role: 'Admin', status: 'Active' },
      { name: 'Iris Chen', email: 'iris@example.com', role: 'Viewer', status: 'Pending' },
      { name: 'Jack Taylor', email: 'jack@example.com', role: 'Editor', status: 'Active' },
    ],
    striped: true,
    hoverable: true,
    bordered: false,
    stickyHeader: true,
    caption: 'Scroll to see sticky header in action',
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithCaption = {
  args: {
    headers: [
      { key: 'metric', label: 'Metric' },
      { key: 'value', label: 'Value', align: 'right' as const },
      { key: 'change', label: 'Change', align: 'right' as const },
    ],
    rows: [
      { metric: 'Total Users', value: '12,450', change: '+5.2%' },
      { metric: 'Active Sessions', value: '3,721', change: '+12.1%' },
      { metric: 'Revenue', value: '$48,200', change: '+8.4%' },
      { metric: 'Churn Rate', value: '2.3%', change: '-0.5%' },
    ],
    striped: false,
    hoverable: true,
    bordered: false,
    caption: 'Monthly performance metrics — April 2026',
  },
};
