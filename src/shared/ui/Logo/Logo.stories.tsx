import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'UI/Atoms/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    showText: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    showText: true,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    showText: true,
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    showText: true,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    showText: true,
  },
};

export const IconOnly: Story = {
  args: {
    size: 'medium',
    showText: false,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <Logo size="small" showText={true} />
        <Logo size="medium" showText={true} />
        <Logo size="large" showText={true} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <Logo size="small" showText={false} />
        <Logo size="medium" showText={false} />
        <Logo size="large" showText={false} />
      </div>
    </div>
  ),
};
