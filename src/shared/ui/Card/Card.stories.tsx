import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { PlusIcon, RepeatIcon, TrashIcon } from '../icons';
import { Card, LetterCard } from './Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'The content to be rendered inside the card',
    },
    className: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <div style={{ padding: '1.5rem' }}>
        <h3>Card Title</h3>
        <p>This is some card content with multiple elements.</p>
        <Button variant="primary" size="small">
          Action
        </Button>
      </div>
    ),
  },
};

export const CardWithActions: Story = {
  render: () => (
    <Card>
      <div style={{ padding: '1rem' }}>
        <h3>Card with Actions</h3>
        <p>This card demonstrates various action buttons.</p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
          <Button variant="primary" size="small">
            <PlusIcon size={16} aria-label="Plus icon" />
            Add
          </Button>
          <Button variant="secondary" size="small">
            <RepeatIcon size={16} aria-label="Refresh icon" />
            Refresh
          </Button>
          <Button variant="ghost" size="small">
            <TrashIcon size={16} aria-label="Delete icon" />
            Delete
          </Button>
        </div>
      </div>
    </Card>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1rem',
      }}
    >
      <Card>
        <div style={{ padding: '1rem' }}>
          <h3>Card 1</h3>
          <p>First card content</p>
        </div>
      </Card>
      <Card>
        <div style={{ padding: '1rem' }}>
          <h3>Card 2</h3>
          <p>Second card content</p>
        </div>
      </Card>
      <Card>
        <div style={{ padding: '1rem' }}>
          <h3>Card 3</h3>
          <p>Third card content</p>
        </div>
      </Card>
    </div>
  ),
};

// LetterCard Stories
export const LetterCardExample: Story = {
  render: () => (
    <LetterCard
      text="Dear Stripe team, I am a highly skilled product designer with a passion for creating intuitive, user-centered designs. I have a strong background in design systems and am excited about the opportunity to join the Stripe product design team and work on building out the design system for the platform. I am particularly drawn to Stripe's mission of making it easy for businesses to sell online and am confident that my experience in creating user-friendly designs will be an asset to the team. I have experience in conducting user research, creating wireframes, and prototyping interactive designs, as well as working closely with engineers to ensure that my designs are implemented correctly. I am a strong collaborator and have experience working in cross-functional teams to bring new products and features to market. I'm confident that I can help improve Stripe's user experience and make it even more accessible to businesses. I would love the opportunity to speak with you further about my qualifications and how I can contribute to the Stripe team. Thank you for considering my application."
      onDelete={() => console.log('Delete clicked')}
      onCopy={() => console.log('Copy clicked')}
    />
  ),
};
