import type { Preview } from '@storybook/react'
import React from 'react'
import '../src/index.css'
import { withRouter } from 'storybook-addon-remix-react-router'
import { reactRouterParameters } from 'storybook-addon-remix-react-router'
import { Provider } from 'react-redux'
import { store } from '../src/store/store'

const preview: Preview = {
  decorators: [
    withRouter,
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    reactRouter: reactRouterParameters({ routing: { path: '/' } }),
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview

// (Story) => (
//     <Provider theme="default">
//       <Story />
//     </Provider>
//   ),
