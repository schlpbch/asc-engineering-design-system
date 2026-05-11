import ConfirmDialog from '../patterns/ConfirmDialog.astro';

const meta = {
  title: 'Patterns/ConfirmDialog',
  component: ConfirmDialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reusable `<dialog>` element. Call `window.showConfirmDialog({ title, message, variant })` to open it programmatically.',
      },
    },
  },
};

export default meta;

export const Default = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `<ConfirmDialog />\n\n<script>\n  // Trigger programmatically:\n  const confirmed = await window.showConfirmDialog({\n    title: 'Confirm Action',\n    message: 'Are you sure you want to proceed?',\n    confirmText: 'Yes, proceed',\n    cancelText: 'Cancel',\n    variant: 'danger',\n  });\n<\/script>`,
        language: 'astro',
      },
    },
  },
};
