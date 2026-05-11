import FilterButtons from '../patterns/FilterButtons.astro';

const meta = {
  title: 'Patterns/FilterButtons',
  component: FilterButtons,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    label: { control: 'text' },
    multiSelect: { control: 'boolean' },
  },
};

export default meta;

export const SingleSelect = {
  args: {
    label: 'Status:',
    multiSelect: false,
    filters: [
      { id: 'filter-all', label: 'All', active: true },
      { id: 'filter-running', label: 'Running', active: false },
      { id: 'filter-stopped', label: 'Stopped', active: false },
      { id: 'filter-error', label: 'Error', active: false },
    ],
  },
};

export const MultiSelect = {
  args: {
    label: 'Tags:',
    multiSelect: true,
    filters: [
      { id: 'tag-api', label: 'API', active: true },
      { id: 'tag-db', label: 'Database', active: false },
      { id: 'tag-cache', label: 'Cache', active: true },
      { id: 'tag-queue', label: 'Queue', active: false },
      { id: 'tag-worker', label: 'Worker', active: false },
    ],
  },
};

export const NoActiveFilter = {
  args: {
    label: 'Filter by:',
    multiSelect: false,
    filters: [
      { id: 'opt-a', label: 'Option A', active: false },
      { id: 'opt-b', label: 'Option B', active: false },
      { id: 'opt-c', label: 'Option C', active: false },
    ],
  },
};
