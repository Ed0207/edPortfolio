import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home'
import Test from './routes/Test'
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
      <div className="App">
        <Routes>
          <Route path="/edPortfolio" element={<Home/>}/>
          <Route path='/edPortfolio/test' element={<Test/>}/>
        </Routes>
      </div>
  );
}

export default App;
