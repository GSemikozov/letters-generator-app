import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Atoms/Textarea',
  component: Textarea,
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
    rows: {
      control: { type: 'number' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message here...',
    rows: 4,
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message here...',
    error: 'This field is required',
    rows: 4,
  },
};

export const WithCharacterCount: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type something...',
    showCharacterCount: true,
    maxLength: 200,
    rows: 4,
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    placeholder: 'This field is disabled',
    disabled: true,
    rows: 4,
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
      <Textarea label="Normal" placeholder="Normal textarea" rows={4} />
      <Textarea
        label="With Error"
        placeholder="Textarea with error"
        error="This field has an error"
        rows={4}
      />
      <Textarea label="Disabled" placeholder="Disabled textarea" disabled rows={4} />
      <Textarea label="Required" placeholder="Required textarea" required rows={4} />
      <Textarea
        label="With Character Count"
        placeholder="Type something..."
        showCharacterCount
        maxLength={100}
        rows={4}
      />
    </div>
  ),
};
