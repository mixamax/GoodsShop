import { ButtonGroup } from './ButtonGroup'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    quantity: {
      description: 'Количество',
    },
    cartId: {
      description: 'ID корзины',
    },
    productId: {
      description: 'ID продукта',
    },
    place: {
      description: 'из какого компонента',
    },
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const NoItemsInCatalog: Story = {
  args: { quantity: 0, productId: 1, cartId: 1, place: 'catalog' },
}

export const WithItemInCatalog: Story = {
  args: { quantity: 1, productId: 1, cartId: 1, place: 'catalog' },
}

export const WithItemsInCatalog: Story = {
  args: { quantity: 2, productId: 1, cartId: 1, place: 'catalog' },
}
