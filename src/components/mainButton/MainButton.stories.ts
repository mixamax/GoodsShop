import type { Meta, StoryObj } from '@storybook/react'
import { MainButton } from './MainButton'

const meta = {
  title: 'MainButton',
  component: MainButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: 'Выбор иконки',
    },
    type: {
      description: 'Выбор кнопки с текстом или иконкой',
    },
    disabled: {
      description: 'Отключение кнопки',
    },
  },
} satisfies Meta<typeof MainButton>

export default meta
type Story = StoryObj<typeof meta>

export const TextButton: Story = {
  args: {
    type: 'text',
    text: 'Button',
    callBack: () => {},
  },
}

export const DisabledTextButton: Story = {
  args: {
    type: 'text',
    text: 'Button',
    disabled: true,
    callBack: () => {},
  },
}

export const BigPlusButton: Story = {
  args: {
    type: 'largeIcon',
    icon: 'plus',
    callBack: () => {},
  },
}

export const BigMinusButton: Story = {
  args: {
    type: 'largeIcon',
    icon: 'minus',
    callBack: () => {},
  },
}

export const SmallPlusButton: Story = {
  args: {
    type: 'smallIcon',
    icon: 'plus',
    callBack: () => {},
  },
}

export const SmallMinusButton: Story = {
  args: {
    type: 'smallIcon',
    icon: 'minus',
    callBack: () => {},
  },
}

export const BigCartButton: Story = {
  args: {
    type: 'largeIcon',
    icon: 'cart',
    callBack: () => {},
  },
}

export const SmallCartButton: Story = {
  args: {
    type: 'smallIcon',
    icon: 'cart',
    callBack: () => {},
  },
}
