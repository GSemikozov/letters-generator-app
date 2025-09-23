import type { Meta, StoryObj } from '@storybook/react';
import {
  CheckIcon,
  CopyIcon,
  HomeIcon,
  LoadingIcon,
  PlusIcon,
  RepeatIcon,
  TrashIcon,
} from './index';

const meta: Meta = {
  title: 'UI/Icons',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
      }}
    >
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <CheckIcon size={24} />
        <span>CheckIcon</span>
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <CopyIcon size={24} />
        <span>CopyIcon</span>
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <HomeIcon size={24} />
        <span>HomeIcon</span>
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <LoadingIcon size={24} />
        <span>LoadingIcon</span>
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <PlusIcon size={24} />
        <span>PlusIcon</span>
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <RepeatIcon size={24} />
        <span>RepeatIcon</span>
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <TrashIcon size={24} />
        <span>TrashIcon</span>
      </div>
    </div>
  ),
};

export const IconSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ minWidth: '100px' }}>Small (16px):</span>
        <PlusIcon size={16} />
        <HomeIcon size={16} />
        <TrashIcon size={16} />
        <CopyIcon size={16} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ minWidth: '100px' }}>Medium (20px):</span>
        <PlusIcon size={20} />
        <HomeIcon size={20} />
        <TrashIcon size={20} />
        <CopyIcon size={20} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ minWidth: '100px' }}>Large (24px):</span>
        <PlusIcon size={24} />
        <HomeIcon size={24} />
        <TrashIcon size={24} />
        <CopyIcon size={24} />
      </div>
    </div>
  ),
};

export const LoadingAnimation: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <LoadingIcon size={24} />
        <span>Loading (24px)</span>
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <LoadingIcon size={32} />
        <span>Loading (32px)</span>
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <LoadingIcon size={48} />
        <span>Loading (48px)</span>
      </div>
    </div>
  ),
};

export const CheckIconVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <CheckIcon size={20} />
        <span>Check (20px)</span>
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <CheckIcon size={24} />
        <span>Check (24px)</span>
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <CheckIcon size={28} />
        <span>Check (28px)</span>
      </div>
    </div>
  ),
};
