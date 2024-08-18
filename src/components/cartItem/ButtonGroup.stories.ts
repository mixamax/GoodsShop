import { ButtonGroup } from './CartItem'
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
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const NoItems: Story = {
  args: { quantity: 0 },
}

export const WithItem: Story = {
  args: { quantity: 1 },
}

export const WithItems: Story = {
  args: { quantity: 2 },
}
