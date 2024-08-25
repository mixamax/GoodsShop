import type { Meta, StoryObj } from '@storybook/react'
import { CartQuantity } from './CartQuantity'

const meta = {
  title: 'CartQuantity',
  component: CartQuantity,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    totalItemsCount: {
      description: 'Количество товаров в корзине',
    },
  },
} satisfies Meta<typeof CartQuantity>

export default meta
type Story = StoryObj<typeof meta>

export const Component: Story = {
  args: {
    totalItemsCount: 0,
  },
}
