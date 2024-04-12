import { useState } from 'react';
import './App.css';
import AboutMe from "./components/AboutMe";
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Skills from './components/Skills';

function App() {
  const [projects, setProjects] = useState([]);
  
  const currentProjects = [
    ...projects,
    {
      projectName:"PokeApi" ,
      projectDetails:"A single project to request information about Pokemon's and show information retrieved",
      projectLink:"https://github.com/ialexalvarado/reactBooksApp"
    },
    {
      projectName:"PokeApi" ,
      projectDetails:"A single project to request information about Pokemon's and show information retrieved",
      projectLink:"https://github.com/ialexalvarado/reactBooksApp"
    },
    {
      projectName:"PokeApi" ,
      projectDetails:"A single project to request information about Pokemon's and show information retrieved",
      projectLink:"https://github.com/ialexalvarado/reactBooksApp"
    },
    {
      projectName:"PokeApi" ,
      projectDetails:"A single project to request information about Pokemon's and show information retrieved",
      projectLink:"https://github.com/ialexalvarado/reactBooksApp"
    },
    {
      projectName:"PokeApi" ,
      projectDetails:"A single project to request information about Pokemon's and show information retrieved",
      projectLink:"https://github.com/ialexalvarado/reactBooksApp"
    },
  ]

  const renderedProjects= currentProjects.map((proj)=>{
    return (
      <div className='col-lg-6 col-md-6 col-sm-12' style={{paddingBottom: "30px"}}>
        <Projects projectName={proj.projectName} projectDetails={proj.projectDetails} projectLink={proj.projectLink}  />
      </div>
    )
  })


  return (
    <>
      <nav className="navbar navbar-expand-lg ui-colors-bg-disabled">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Expertise</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">My Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{paddingTop: "110px"}}></div>
      <AboutMe/>
      <h2 className="text-left" style={{paddingBottom:"30px"}} >Projects</h2>
      <div className='projects-list row'>
        {renderedProjects}
      </div>
      <Timeline/>
      <Skills/>
    </>
  );
}

export default App;
