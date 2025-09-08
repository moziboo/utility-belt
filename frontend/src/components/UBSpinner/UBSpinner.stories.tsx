import type { Meta, StoryObj } from '@storybook/react-vite';
import UBSpinner from './UBSpinner';

const meta: Meta<typeof UBSpinner> = {
  title: 'UBSpinner',
  component: UBSpinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg'],
    },
    speed: {
      control: 'select',
      options: ['slow', 'normal', 'fast'],
    },
    showLabel: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof UBSpinner>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    showLabel: true,
    label: 'Loading content...',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    showLabel: true,
    label: 'Loading...',
  },
};

export const FastSpin: Story = {
  args: {
    speed: 'fast',
    size: 'md',
    showLabel: true,
    label: 'Fast loading...',
  },
};

export const SlowSpin: Story = {
  args: {
    speed: 'slow',
    size: 'md',
    showLabel: true,
    label: 'Slow loading...',
  },
};
