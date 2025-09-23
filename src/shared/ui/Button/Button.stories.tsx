import type { Meta, StoryObj } from '@storybook/react';
import { HomeIcon, PlusIcon, TrashIcon } from '../icons';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'icon'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    loadingText: {
      control: { type: 'text' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
    size: 'medium',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Button with Icon',
    variant: 'primary',
    size: 'medium',
    icon: <PlusIcon size={24} aria-label="Plus icon" />,
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="icon" icon={<PlusIcon size={20} aria-label="Plus icon" />} />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    children: 'Loading...',
    variant: 'primary',
    size: 'medium',
    loading: true,
  },
};

export const IconButton: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button variant="icon" size="small" icon={<PlusIcon size={16} aria-label="Plus icon" />} />
      <Button variant="icon" size="medium" icon={<HomeIcon size={20} aria-label="Home icon" />} />
      <Button variant="icon" size="large" icon={<TrashIcon size={24} aria-label="Trash icon" />} />
    </div>
  ),
};
