import type { Meta, StoryObj } from '@storybook/react';
import { Cover } from './cover';

const meta = {
  title: 'Components/Cover',
  component: Cover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Cover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Hover me',
  },
};

export const Button: Story = {
  render: () => (
    <Cover>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Click me
      </button>
    </Cover>
  ),
};

export const Text: Story = {
  render: () => (
    <Cover className="text-2xl font-bold">
      Amazing Text Effect
    </Cover>
  ),
};

export const Card: Story = {
  render: () => (
    <Cover className="p-6 rounded-lg border">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Interactive Card</h3>
        <p className="text-gray-600">Hover to see the magic!</p>
      </div>
    </Cover>
  ),
};

export const MultipleCovers: Story = {
  render: () => (
    <div className="flex gap-4">
      <Cover>
        <div className="px-4 py-2 bg-purple-500 text-white rounded-md">
          Cover 1
        </div>
      </Cover>
      <Cover>
        <div className="px-4 py-2 bg-green-500 text-white rounded-md">
          Cover 2
        </div>
      </Cover>
      <Cover>
        <div className="px-4 py-2 bg-orange-500 text-white rounded-md">
          Cover 3
        </div>
      </Cover>
    </div>
  ),
};

export const LargeCover: Story = {
  render: () => (
    <Cover className="p-8 rounded-xl border-2 border-dashed border-gray-300">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Large Interactive Area</h2>
        <p className="text-lg text-gray-600 mb-6">
          This is a larger cover component with more content
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg">
            Action 1
          </button>
          <button className="px-6 py-3 bg-gray-500 text-white rounded-lg">
            Action 2
          </button>
        </div>
      </div>
    </Cover>
  ),
};
