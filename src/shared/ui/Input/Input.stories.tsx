import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    error: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    showCharacterCount: {
      control: { type: 'boolean' },
    },
    maxLength: {
      control: { type: 'number' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder text',
  },
};

export const WithError: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder text',
    error: 'This field is required',
  },
};

export const WithCharacterCount: Story = {
  args: {
    label: 'Label',
    placeholder: 'Type something...',
    showCharacterCount: true,
    maxLength: 100,
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    placeholder: 'This field is disabled',
    disabled: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input label="Normal" placeholder="Normal input" />
      <Input label="With Error" placeholder="Input with error" error="This field has an error" />
      <Input label="Disabled" placeholder="Disabled input" disabled />
      <Input label="Required" placeholder="Required input" required />
      <Input
        label="With Character Count"
        placeholder="Type something..."
        showCharacterCount
        maxLength={50}
      />
    </div>
  ),
};
