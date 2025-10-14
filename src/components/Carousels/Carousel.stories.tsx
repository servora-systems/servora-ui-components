import type { Meta, StoryObj } from '@storybook/react';
import { CarouselDemo } from './carousel';

const meta = {
  title: 'Components/Carousels/Carousel',
  component: CarouselDemo,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CarouselDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithQuotes: Story = {
  render: () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-6xl px-4">
        <CarouselDemo />
      </div>
    </div>
  ),
};
