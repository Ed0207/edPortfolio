import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home'
import Test from './routes/Test'
import {useRoutes} from 'react-router-dom'

function App() {

  const routes = useRoutes([
    {
      path:"/",
      element: <Home/>  
    },
    {
      path:"/test",
      element: <Test/>
    }
  ])

  return (
      <div className="App">
        {routes}
      </div>
  );
}

export default App;
