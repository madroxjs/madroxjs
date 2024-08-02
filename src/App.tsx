import { Block } from '@/components/Pages/block'
import { IndexPage } from '@/components/Pages/_index'
import { IndexPage as CharactersPage } from '@/components/Pages/characters'
import { Theme } from '@radix-ui/themes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/globals.css'

function App() {
  return (
    <Theme className='flex justify-center align-center' accentColor="crimson" grayColor="sand" radius="large" scaling="95%" style={{width: '100vw'}}>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />        
          <Route path="/block" element={<Block />} />
          <Route path="/characters" element={<CharactersPage />} />
        </Routes>
      </Router>
    </Theme>
  )
}

export default App
