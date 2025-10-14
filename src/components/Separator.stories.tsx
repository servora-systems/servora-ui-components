import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Home</div>
      <Separator {...args} />
      <div>Components</div>
      <Separator {...args} />
      <div>Separator</div>
    </div>
  ),
};

export const InContent: Story = {
  render: () => (
    <div className="space-y-4 w-[400px]">
      <div>
        <h3 className="text-lg font-semibold">Section 1</h3>
        <p className="text-sm text-gray-600">This is the first section content.</p>
      </div>
      <Separator />
      <div>
        <h3 className="text-lg font-semibold">Section 2</h3>
        <p className="text-sm text-gray-600">This is the second section content.</p>
      </div>
      <Separator />
      <div>
        <h3 className="text-lg font-semibold">Section 3</h3>
        <p className="text-sm text-gray-600">This is the third section content.</p>
      </div>
    </div>
  ),
};

export const NavigationSeparator: Story = {
  render: () => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <a href="#" className="hover:text-gray-900">Home</a>
      <Separator orientation="vertical" />
      <a href="#" className="hover:text-gray-900">Products</a>
      <Separator orientation="vertical" />
      <a href="#" className="hover:text-gray-900">About</a>
      <Separator orientation="vertical" />
      <a href="#" className="hover:text-gray-900">Contact</a>
    </div>
  ),
};

export const FormSeparator: Story = {
  render: () => (
    <div className="space-y-6 w-[400px]">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Personal Information</h3>
        <div className="space-y-2">
          <label className="text-sm font-medium">Name</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Enter name" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Enter email" />
        </div>
      </div>
      
      <Separator />
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Preferences</h3>
        <div className="space-y-2">
          <label className="text-sm font-medium">Theme</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Light</option>
            <option>Dark</option>
            <option>System</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Language</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>
    </div>
  ),
};
