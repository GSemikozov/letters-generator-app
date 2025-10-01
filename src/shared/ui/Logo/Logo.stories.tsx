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
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const IconOnly: Story = {
  args: {
    size: 'medium',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <Logo size="small" />
        <Logo size="medium" />
        <Logo size="large" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} />
    </div>
  ),
};
