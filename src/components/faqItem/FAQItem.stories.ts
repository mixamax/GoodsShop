import { FAQItem } from './FAQItem'

const FAQItemProps = {
  question: 'How can I track the status of my order?',
  content:
    'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the `My Orders` section to track your delivery status.',
}
export default {
  component: FAQItem,
  title: 'Components/FAQItem',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
}

export const Default = {
  args: {
    question: FAQItemProps.question,
    content: FAQItemProps.content,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
