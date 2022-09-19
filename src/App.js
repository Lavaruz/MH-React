import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'

import Navbar from './components/navbar'
import Armors from './views/armors'
import Weapons from './views/weapons';
import ArmorDetail from './views/armor-detail';


function App() {
  return (
    <>
      <Navbar/>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Navigate to='/armor'/>}/>
          <Route path='/armor'>
            <Route index element={<Armors/>}/>
            <Route path=':id' element={<ArmorDetail/>}/>
          </Route>
          <Route path='/weapon' element={<Weapons/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
