import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>Unpaid</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$350.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV004</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$450.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV005</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$550.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV006</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$200.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV007</TableCell>
          <TableCell>Unpaid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$300.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const UserTable: Story = {
  render: () => (
    <Table>
      <TableCaption>User management table</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
          <TableCell>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
              Active
            </span>
          </TableCell>
          <TableCell className="text-right">
            <button className="text-blue-600 hover:text-blue-800">Edit</button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
          <TableCell>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
              Pending
            </span>
          </TableCell>
          <TableCell className="text-right">
            <button className="text-blue-600 hover:text-blue-800">Edit</button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>User</TableCell>
          <TableCell>
            <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
              Inactive
            </span>
          </TableCell>
          <TableCell className="text-right">
            <button className="text-blue-600 hover:text-blue-800">Edit</button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const ProductTable: Story = {
  render: () => (
    <Table>
      <TableCaption>Product inventory</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Total Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Laptop Pro</TableCell>
          <TableCell>Electronics</TableCell>
          <TableCell>25</TableCell>
          <TableCell>$1,299.00</TableCell>
          <TableCell className="text-right">$32,475.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Wireless Mouse</TableCell>
          <TableCell>Accessories</TableCell>
          <TableCell>150</TableCell>
          <TableCell>$29.99</TableCell>
          <TableCell className="text-right">$4,498.50</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Mechanical Keyboard</TableCell>
          <TableCell>Accessories</TableCell>
          <TableCell>75</TableCell>
          <TableCell>$89.99</TableCell>
          <TableCell className="text-right">$6,749.25</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Monitor 4K</TableCell>
          <TableCell>Electronics</TableCell>
          <TableCell>12</TableCell>
          <TableCell>$399.99</TableCell>
          <TableCell className="text-right">$4,799.88</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const SimpleTable: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Task</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Due Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Complete project</TableCell>
          <TableCell>In Progress</TableCell>
          <TableCell>2024-01-15</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Review code</TableCell>
          <TableCell>Completed</TableCell>
          <TableCell>2024-01-10</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Update documentation</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>2024-01-20</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
