import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../Card';
import { Typography } from '../Typography';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'UI/Layout/Container',
  component: Container,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    as: {
      control: { type: 'select' },
      options: ['div', 'section', 'main', 'article'],
    },
    children: {
      control: false,
      description: 'The content to be rendered inside the container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <Typography variant="heading2">Container Content</Typography>
        <Typography variant="body">
          This is content inside a container. The container centers content and sets a maximum
          width.
        </Typography>
      </div>
    ),
    size: 'xl',
  },
};

export const Small: Story = {
  args: {
    children: (
      <div>
        <Typography variant="heading3">Small Container</Typography>
        <Typography variant="body">Max width: 640px</Typography>
      </div>
    ),
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: (
      <div>
        <Typography variant="heading3">Medium Container</Typography>
        <Typography variant="body">Max width: 768px</Typography>
      </div>
    ),
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: (
      <div>
        <Typography variant="heading3">Large Container</Typography>
        <Typography variant="body">Max width: 1024px</Typography>
      </div>
    ),
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    children: (
      <div>
        <Typography variant="heading3">Extra Large Container</Typography>
        <Typography variant="body">Max width: 1120px (Figma standard)</Typography>
      </div>
    ),
    size: 'xl',
  },
};

export const Full: Story = {
  args: {
    children: (
      <div>
        <Typography variant="heading3">Full Width Container</Typography>
        <Typography variant="body">No max width constraint</Typography>
      </div>
    ),
    size: 'full',
  },
};

export const WithCards: Story = {
  args: {
    children: (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
        }}
      >
        <Card>
          <div style={{ padding: '1rem' }}>
            <Typography variant="heading3">Card 1</Typography>
            <Typography variant="body">Content in container</Typography>
          </div>
        </Card>
        <Card>
          <div style={{ padding: '1rem' }}>
            <Typography variant="heading3">Card 2</Typography>
            <Typography variant="body">Content in container</Typography>
          </div>
        </Card>
        <Card>
          <div style={{ padding: '1rem' }}>
            <Typography variant="heading3">Card 3</Typography>
            <Typography variant="body">Content in container</Typography>
          </div>
        </Card>
      </div>
    ),
    size: 'xl',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Container size="sm">
        <div
          style={{
            background: 'var(--color-figma-gray-100)',
            padding: '1rem',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <Typography variant="bodySemibold">Small (640px)</Typography>
        </div>
      </Container>
      <Container size="md">
        <div
          style={{
            background: 'var(--color-figma-gray-100)',
            padding: '1rem',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <Typography variant="bodySemibold">Medium (768px)</Typography>
        </div>
      </Container>
      <Container size="lg">
        <div
          style={{
            background: 'var(--color-figma-gray-100)',
            padding: '1rem',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <Typography variant="bodySemibold">Large (1024px)</Typography>
        </div>
      </Container>
      <Container size="xl">
        <div
          style={{
            background: 'var(--color-figma-gray-100)',
            padding: '1rem',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <Typography variant="bodySemibold">Extra Large (1120px) - Figma Standard</Typography>
        </div>
      </Container>
    </div>
  ),
};
