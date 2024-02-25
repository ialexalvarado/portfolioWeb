import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

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
    </>
  );
}

export default App;
