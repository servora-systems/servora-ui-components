import type { Meta, StoryObj } from '@storybook/react';
import { SparklesCore } from './sparkles';

const meta = {
  title: 'Components/Sparkles',
  component: SparklesCore,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    background: {
      control: { type: 'color' },
    },
    particleColor: {
      control: { type: 'color' },
    },
    particleDensity: {
      control: { type: 'range', min: 50, max: 500, step: 10 },
    },
    speed: {
      control: { type: 'range', min: 1, max: 10, step: 0.5 },
    },
    minSize: {
      control: { type: 'range', min: 0.1, max: 5, step: 0.1 },
    },
    maxSize: {
      control: { type: 'range', min: 0.1, max: 10, step: 0.1 },
    },
  },
} satisfies Meta<typeof SparklesCore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    background: '#0d47a1',
    particleColor: '#ffffff',
    particleDensity: 120,
    speed: 4,
    minSize: 1,
    maxSize: 3,
  },
  render: (args) => (
    <div className="h-[400px] w-full bg-black rounded-lg overflow-hidden">
      <SparklesCore {...args} />
    </div>
  ),
};

export const BlueTheme: Story = {
  args: {
    background: '#1e40af',
    particleColor: '#60a5fa',
    particleDensity: 150,
    speed: 3,
    minSize: 0.5,
    maxSize: 2,
  },
  render: (args) => (
    <div className="h-[400px] w-full bg-gradient-to-br from-blue-900 to-blue-600 rounded-lg overflow-hidden">
      <SparklesCore {...args} />
    </div>
  ),
};

export const PurpleTheme: Story = {
  args: {
    background: '#7c3aed',
    particleColor: '#c4b5fd',
    particleDensity: 200,
    speed: 5,
    minSize: 0.8,
    maxSize: 2.5,
  },
  render: (args) => (
    <div className="h-[400px] w-full bg-gradient-to-br from-purple-900 to-purple-600 rounded-lg overflow-hidden">
      <SparklesCore {...args} />
    </div>
  ),
};

export const GreenTheme: Story = {
  args: {
    background: '#059669',
    particleColor: '#6ee7b7',
    particleDensity: 100,
    speed: 2,
    minSize: 1.2,
    maxSize: 4,
  },
  render: (args) => (
    <div className="h-[400px] w-full bg-gradient-to-br from-green-900 to-green-600 rounded-lg overflow-hidden">
      <SparklesCore {...args} />
    </div>
  ),
};

export const TransparentBackground: Story = {
  args: {
    background: 'transparent',
    particleColor: '#ffffff',
    particleDensity: 80,
    speed: 3,
    minSize: 0.5,
    maxSize: 1.5,
  },
  render: (args) => (
    <div className="h-[400px] w-full bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg overflow-hidden">
      <SparklesCore {...args} />
    </div>
  ),
};

export const HighDensity: Story = {
  args: {
    background: '#dc2626',
    particleColor: '#fca5a5',
    particleDensity: 300,
    speed: 6,
    minSize: 0.3,
    maxSize: 1.8,
  },
  render: (args) => (
    <div className="h-[400px] w-full bg-gradient-to-br from-red-900 to-red-600 rounded-lg overflow-hidden">
      <SparklesCore {...args} />
    </div>
  ),
};
