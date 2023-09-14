import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/MyNavbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';


function App() {

  return (
      <div className="App">
        <Navbar name="Edward's portfolio"/>
        <Hero text={"Welcome"}/>
        <AboutMe/>
        <ProjectCard/>
        <Footer/>
      </div>
  );
}

export default App;
