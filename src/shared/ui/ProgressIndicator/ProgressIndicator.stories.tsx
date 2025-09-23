import type { Meta, StoryObj } from '@storybook/react';
import { ProgressIndicator } from './ProgressIndicator';

const meta: Meta<typeof ProgressIndicator> = {
  title: 'UI/Organisms/ProgressIndicator',
  component: ProgressIndicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    current: {
      control: { type: 'number', min: 0, max: 10 },
    },
    total: {
      control: { type: 'number', min: 1, max: 10 },
    },
    variant: {
      control: { type: 'select' },
      options: ['dots', 'bars'],
    },
    showText: {
      control: { type: 'boolean' },
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
    current: 3,
    total: 5,
    variant: 'dots',
    showText: true,
  },
};

export const Dots: Story = {
  args: {
    current: 2,
    total: 5,
    variant: 'dots',
    showText: true,
  },
};

export const Bars: Story = {
  args: {
    current: 4,
    total: 5,
    variant: 'bars',
    showText: true,
  },
};

export const WithoutText: Story = {
  args: {
    current: 3,
    total: 5,
    variant: 'dots',
    showText: false,
  },
};

export const Complete: Story = {
  args: {
    current: 5,
    total: 5,
    variant: 'dots',
    showText: true,
  },
};

export const AlmostComplete: Story = {
  args: {
    current: 4,
    total: 5,
    variant: 'dots',
    showText: true,
  },
};

export const JustStarted: Story = {
  args: {
    current: 1,
    total: 5,
    variant: 'dots',
    showText: true,
  },
};

export const DifferentTotals: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ProgressIndicator current={1} total={3} variant="dots" showText />
      <ProgressIndicator current={2} total={5} variant="dots" showText />
      <ProgressIndicator current={7} total={10} variant="dots" showText />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ProgressIndicator current={3} total={5} variant="dots" showText />
      <ProgressIndicator current={3} total={5} variant="bars" showText />
    </div>
  ),
};

export const ProgressStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ProgressIndicator current={0} total={5} variant="dots" showText />
      <ProgressIndicator current={1} total={5} variant="dots" showText />
      <ProgressIndicator current={2} total={5} variant="dots" showText />
      <ProgressIndicator current={3} total={5} variant="dots" showText />
      <ProgressIndicator current={4} total={5} variant="dots" showText />
      <ProgressIndicator current={5} total={5} variant="dots" showText />
    </div>
  ),
};
