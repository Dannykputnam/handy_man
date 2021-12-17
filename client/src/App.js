import {Route, Routes} from 'react-router-dom';
import NavBar from './components/shared/NavBar';
import About from './components/shared/About';
import Home from './components/shared/Home';
import Workers from './components/workers/Workers';
import WorkerShow from './components/workers/WorkerShow';

const App = () => (
  <>  
  <NavBar />
  <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/home' element={<Home/>} />
    <Route exact path='/about' element={<About />} />
    <Route exact path='/workers' element={<Workers />} />
    <Route exact path='/workers/:workerId' element={<WorkerShow />} />
  </Routes>
    {/* <Route exact path='/' element={<Home />} /> */}
  </>
)

export default App;


