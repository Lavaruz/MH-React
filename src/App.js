import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'

import Navbar from './components/navbar'
import Armors from './views/armors'
import Weapons from './views/weapons';
import ArmorDetail from './views/armor-detail';
import Footer from './components/footer';
import WeaponDetail from './views/weapon-detail';


function App() {
  return (
    <>
      <Navbar/>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Navigate to='/armors'/>}/>
          <Route path='/armors'>
            <Route index element={<Armors/>}/>
            <Route path=':id' element={<ArmorDetail/>}/>
          </Route>
          <Route path='/weapons'>
            <Route index element={<Weapons/>}/>
            <Route path=':id' element={<WeaponDetail/>}/>
          </Route>
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
