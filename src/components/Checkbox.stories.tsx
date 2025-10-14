import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';
import { Label } from './label';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const CheckboxList: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox id="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option2" defaultChecked />
        <Label htmlFor="option2">Option 2 (checked)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option3" disabled />
        <Label htmlFor="option3">Option 3 (disabled)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option4" disabled defaultChecked />
        <Label htmlFor="option4">Option 4 (disabled, checked)</Label>
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 w-[300px]">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Preferences</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="email-notifications" />
            <Label htmlFor="email-notifications">Email notifications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="sms-notifications" defaultChecked />
            <Label htmlFor="sms-notifications">SMS notifications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="marketing-emails" />
            <Label htmlFor="marketing-emails">Marketing emails</Label>
          </div>
        </div>
      </div>
    </div>
  ),
};
