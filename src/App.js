import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/MyNavbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ProjectCard from './components/ProjectCard';


function App() {

  return (
      <div className="App">
        <Navbar name="Edward's portfolio"/>
        <Hero text={"Welcome"}/>
        <AboutMe/>
        <ProjectCard/>
      </div>
  );
}

export default App;
