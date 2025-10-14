import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedTooltip } from './animated-tooltip';

const meta = {
  title: 'Components/AnimatedTooltip',
  component: AnimatedTooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AnimatedTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Product Manager",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Bob Johnson",
    designation: "Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Alice Brown",
    designation: "Marketing Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const TeamMembers: Story = {
  args: {
    items: [
      {
        id: 1,
        name: "Sarah Wilson",
        designation: "Frontend Developer",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      },
      {
        id: 2,
        name: "Mike Chen",
        designation: "Backend Developer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      },
      {
        id: 3,
        name: "Emily Davis",
        designation: "UX Designer",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      },
    ],
  },
};

export const LargeTeam: Story = {
  args: {
    items: [
      {
        id: 1,
        name: "Alex Rodriguez",
        designation: "CEO",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      },
      {
        id: 2,
        name: "Maria Garcia",
        designation: "CTO",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      },
      {
        id: 3,
        name: "David Kim",
        designation: "Lead Developer",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      },
      {
        id: 4,
        name: "Lisa Wang",
        designation: "Product Designer",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      },
      {
        id: 5,
        name: "Tom Anderson",
        designation: "Marketing Director",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
      },
      {
        id: 6,
        name: "Rachel Green",
        designation: "Sales Manager",
        image: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100&h=100&fit=crop&crop=face",
      },
    ],
  },
};
