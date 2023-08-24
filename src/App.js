import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/MyNavbar'
import MyHeader from './components/MyHeader';

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar name="Edward's portfolio"/>
      </nav>
      <header>
        <MyHeader text="Welcome to my portfolio"/>
      </header>
    </div>
  );
}

export default App;
