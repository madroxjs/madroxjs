/* eslint-disable @typescript-eslint/no-unused-vars */
// import { IndexPage } from '@/components/Pages/_index'
import { Theme } from '@radix-ui/themes';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/globals.css'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import * as pages from './components/Pages'



const router = createHashRouter(Object.entries(pages).map(([_, Element]) => ({
  path: Element.pathName,
  element: <Element />,
})));


/**
 * Router documentation https://reactrouter.com/en/main/route/route
 */
function App() {
  return (
    <Theme className='flex justify-center align-center' accentColor="crimson" grayColor="sand" radius="large" scaling="95%" style={{width: '100vw'}}>
      {/* <Router>
        <Routes>
          <Route path="/madroxjs/" element={<IndexPage />} />
          {Object.entries(pages).map(([_, Element], key) => {
            console.log(`/madroxjs${Element.pathName}`)
            return (
              <Route key={key} path={`/madroxjs${Element.pathName}`} element={<Element />} />
            )
          })}
        </Routes>
      </Router> */}
      <RouterProvider router={router} />

    </Theme>
  )
}

export default App
