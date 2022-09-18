import './App.css';
import Navbar from './components/navbar'
import Armors from './views/armors'
import Sidebar from './views/sidebar'

function App() {
  return (
    <>
      <Navbar/>
      <hr></hr>
      <div className='main-content'>
        <Sidebar/>
        <Armors/>
      </div>
    </>
  );
}

export default App;
