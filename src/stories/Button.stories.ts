import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // Tambahkan argTypes untuk membuat kontrol UI untuk props size
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Story dasar dengan size default
export const Primary: Story = {
  args: {
    variant: 'default',
    size: 'default', // Tambahkan prop size
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'Secondary Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    children: 'Destructive Button',
  },
};

// Tambahkan stories khusus untuk ukuran
export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    children: 'Large Button',
  },
};

export const IconButton: Story = {
  args: {
    variant: 'default',
    size: 'icon',
    children: '🔍', // Contoh dengan emoji, lebih baik gunakan komponen ikon sebenarnya
  },
};

// // Anda juga bisa membuat stories yang menunjukkan semua kombinasi
// export const AllSizes: Story = {
//   render: () => (
//     <div className='flex flex-col gap-4'>
//       <div className='flex items-center gap-4'>
//         <Button size='sm'>Small</Button>
//         <Button size='default'>Default</Button>
//         <Button size='lg'>Large</Button>
//         <Button size='icon'>🔍</Button>
//       </div>
//     </div>
//   ),
// };
