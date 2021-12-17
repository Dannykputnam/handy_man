import {Route, Routes} from 'react-router-dom';
import NavBar from './components/shared/NavBar';
import About from './components/shared/About';
import Home from './components/shared/Home';
import Workers from './components/workers/Workers';

const App = () => (
  <>  
  <NavBar />
  <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/home' element={<Home/>} />
    <Route exact path='/about' element={<About />} />
    <Route exact path='/workers' element={<Workers />} />
  </Routes>
    {/* <Route exact path='/' element={<Home />} /> */}
  </>
)

export default App;


