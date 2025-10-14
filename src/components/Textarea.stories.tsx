import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';
import { Label } from './label';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    rows: {
      control: { type: 'number', min: 1, max: 20 },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Enter your message..." />
    </div>
  ),
};

export const WithRows: Story = {
  args: {
    rows: 6,
    placeholder: 'Enter a longer message...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled textarea',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'This is a pre-filled textarea with some content.',
  },
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 w-[400px]">
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <input
          id="subject"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Enter subject"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Enter your message here..."
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="notes">Additional Notes</Label>
        <Textarea
          id="notes"
          rows={3}
          placeholder="Any additional notes..."
        />
      </div>
    </div>
  ),
};

export const CommentBox: Story = {
  render: () => (
    <div className="space-y-2 w-[500px]">
      <Label htmlFor="comment">Leave a comment</Label>
      <Textarea
        id="comment"
        rows={5}
        placeholder="Share your thoughts..."
        className="resize-none"
      />
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>Markdown supported</span>
        <span>0/500 characters</span>
      </div>
    </div>
  ),
};
