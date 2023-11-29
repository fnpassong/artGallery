import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Location } from './pages/Location';

import './App.scss'


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/location' element = {<Location />} />

      </Routes>
    </>
  )
}

export default App
