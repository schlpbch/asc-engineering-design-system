import TestimonialsGrid from '../patterns/TestimonialsGrid.astro';
import type { Testimonial } from '../utils/types';

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Working with this team was a revelation. They delivered a system that handles our peak load of 200k concurrent users without breaking a sweat.',
    author: 'Sarah Chen',
    title: 'VP Engineering',
    company: 'CloudScale Inc.',
  },
  {
    quote:
      'The architecture they designed cut our infrastructure costs by 40% while improving reliability. I would not hesitate to work with them again.',
    author: 'Marcus Weber',
    title: 'CTO',
    company: 'FinTech Solutions AG',
  },
  {
    quote:
      'An exceptional technical leader who brings both depth and clarity to complex problems. The team delivered ahead of schedule every sprint.',
    author: 'Dr. Priya Nair',
    title: 'Head of Product',
    company: 'MedData Platform',
  },
];

const meta = {
  title: 'Patterns/TestimonialsGrid',
  component: TestimonialsGrid,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Section heading above the testimonial cards.',
    },
  },
};

export default meta;

export const Default = {
  args: {
    testimonials: TESTIMONIALS,
    title: 'Testimonials',
  },
};

export const Single = {
  args: {
    testimonials: [TESTIMONIALS[0]],
    title: 'Testimonials',
  },
};

export const WithCustomTitle = {
  args: {
    testimonials: TESTIMONIALS,
    title: 'What people say',
  },
};
