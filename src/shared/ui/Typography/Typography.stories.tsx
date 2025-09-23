import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'UI/Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['heading1', 'heading2', 'heading3', 'body', 'bodyLarge', 'caption', 'small'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'muted', 'error', 'success'],
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'medium', 'semibold', 'bold'],
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: 'heading1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'heading2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'heading3',
    children: 'Heading 3',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const BodyLarge: Story = {
  args: {
    variant: 'bodyLarge',
    children: 'Large body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text',
  },
};

export const Small: Story = {
  args: {
    variant: 'small',
    children: 'Small text',
  },
};

export const WithColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="body" color="primary">
        Primary color text
      </Typography>
      <Typography variant="body" color="secondary">
        Secondary color text
      </Typography>
      <Typography variant="body" color="tertiary">
        Tertiary color text
      </Typography>
      <Typography variant="body" color="error">
        Error color text
      </Typography>
      <Typography variant="body" color="success">
        Success color text
      </Typography>
    </div>
  ),
};

export const WithWeights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="body" weight="light">
        Light weight text
      </Typography>
      <Typography variant="body" weight="medium">
        Medium weight text
      </Typography>
      <Typography variant="body" weight="semibold">
        Semibold weight text
      </Typography>
      <Typography variant="body" weight="bold">
        Bold weight text
      </Typography>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="heading1">Heading 1</Typography>
      <Typography variant="heading2">Heading 2</Typography>
      <Typography variant="heading3">Heading 3</Typography>
      <Typography variant="bodyLarge">Large Body Text</Typography>
      <Typography variant="body">Body Text</Typography>
      <Typography variant="caption">Caption Text</Typography>
      <Typography variant="small">Small Text</Typography>
    </div>
  ),
};

export const SemanticElements: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="heading1" as="h1">
        H1 Element
      </Typography>
      <Typography variant="heading2" as="h2">
        H2 Element
      </Typography>
      <Typography variant="heading3" as="h3">
        H3 Element
      </Typography>
      <Typography variant="body" as="p">
        Paragraph Element
      </Typography>
      <Typography variant="caption" as="span">
        Span Element
      </Typography>
    </div>
  ),
};
