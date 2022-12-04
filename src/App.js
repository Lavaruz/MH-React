import './App.css';
import {Routes, Route} from 'react-router-dom'

import Navbar from './components/navbar'
import Armors from './views/armors'
import Weapons from './views/weapons';
import ArmorDetail from './views/armor-detail';
// import Footer from './components/footer';
import WeaponDetail from './views/weapon-detail';
import Events from './views/events';
import Home from './views/home';
import About from './views/about';
import Blog from './views/blog';
import Blog1 from './views/blog/blog1';
import Blog2 from './views/blog/blog2';
import Databases from './views/databases';
import Monsters from './views/databases/monsters';
// import TipsDetail from './views/tips-detail';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Navbar/>
      <div className='main'>
        <Routes>

          <Route path='/'>
            <Route index element={<Home/>}/>
          </Route>

          <Route path='/about'>
            <Route index element={<About/>}/>
          </Route>
          
          <Route path='/armors'>
            <Route index element={<Armors/>}/>
            <Route path=':id' element={<ArmorDetail/>}/>
          </Route>

          <Route path='/weapons'>
            <Route index element={<Weapons/>}/>
            <Route path=':id' element={<WeaponDetail/>}/>
          </Route>

          <Route path='/database'>
            <Route index element={<Databases/>}/>
            <Route path='monsters' element={<Monsters/>}/>
            <Route path='events' element={<Events/>}/>
            {/* <Route path=':id' element={<WeaponDetail/>}/> */}
          </Route>

          <Route path='/blog'>
            <Route index element={<Blog/>}/>
            <Route path='1' element={<Blog1/>}/>
            <Route path='2' element={<Blog2/>}/>
          </Route>
          
        </Routes>
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default App;
