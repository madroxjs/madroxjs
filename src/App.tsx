/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from '@radix-ui/themes';
import './styles/globals.css'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import * as pages from './components/Pages'

/**
 * Router documentation https://reactrouter.com/en/main/routers/create-hash-router
 */
const router = createHashRouter(Object.entries(pages).map(([_, Element]) => ({
  ...Element,
  element: <Element />,
})));


function App() {
  return (
    <Theme className='flex justify-center align-center' accentColor="crimson" grayColor="sand" radius="large" scaling="95%" style={{width: '100vw'}}>
      <RouterProvider router={router} />
    </Theme>
  )
}

export default App
