import type { Meta, StoryObj } from '@storybook/react';
import { CopyButton } from './CopyButton';

const meta: Meta<typeof CopyButton> = {
  title: 'UI/Molecules/CopyButton',
  component: CopyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    className: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'This text will be copied to clipboard',
    variant: 'ghost',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    text: 'Small copy button',
    variant: 'ghost',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    text: 'Large copy button',
    variant: 'ghost',
    size: 'large',
  },
};

export const LongText: Story = {
  args: {
    text: 'This is a very long text that will be copied to clipboard when the button is clicked. It contains multiple sentences and demonstrates how the copy button handles longer content.',
    variant: 'ghost',
    size: 'medium',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <CopyButton text="Small" size="small" variant="ghost" />
      <CopyButton text="Medium" size="medium" variant="ghost" />
      <CopyButton text="Large" size="large" variant="ghost" />
    </div>
  ),
};

export const WithCallback: Story = {
  args: {
    text: 'Text with callback',
    variant: 'ghost',
    size: 'medium',
    onCopy: () => {
      alert('Text copied! Callback executed.');
    },
  },
};
