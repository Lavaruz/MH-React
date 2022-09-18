import './App.css';
import {Routes, Route} from 'react-router-dom'

import Navbar from './components/navbar'
import Armors from './views/armors'
import Sidebar from './views/sidebar'
import Weapons from './views/weapons';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <div className='main-content'>
            <Sidebar/>
            <Armors/>
          </div>
        }/>

        <Route path='/weapon' element={
          <div className='main-content'>
            <Sidebar/>
            <Weapons/>
          </div>
        }/>
      </Routes>
    </>
  );
}

export default App;
