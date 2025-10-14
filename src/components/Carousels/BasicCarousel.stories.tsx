import type { Meta, StoryObj } from '@storybook/react';
import { BasicCarousel } from './basicCarousel';

const meta = {
  title: 'Components/Carousels/BasicCarousel',
  component: BasicCarousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BasicCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ImageCarousel: Story = {
  render: () => (
    <div className="bg-gray-100 p-8 rounded-lg">
      <BasicCarousel />
    </div>
  ),
};
