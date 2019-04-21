import React from 'react';

import './App.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="container-fluid navbar" data-spy="scroll" data-target="#myScrollspy" data-offset="1">
        <img className="profile-pic img-responsive" src="cd.png" alt="profile"></img>
          <div className="col-sm-3 icon">
          <div className="name">
          <h1>Cordero Dixon</h1>
          <h2>Web Developer</h2>
          <h3>Atlanta, GA</h3>
            <a href="https://www.linkedin.com/in/corderodixon/" className="cta-icon"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/12Developer" className="cta-icon"><i className="fab fa-github"></i></a>
              </div>
                <nav className="col-sm-3 col-4" id="myScrollspy">
                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                      <a className="nav-link active" href="#section1">Simon</a>
                    </li>
                      <li className="nav-item">
                    <a className="nav-link" href="#section2">Playlistr</a>
                    </li>
                <li className="nav-item">
              <a className="nav-link" href="#section3">Quitter</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="*">Other</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#section41">Brainstorm</a>
                    <a className="dropdown-item" href="#section42"> Link 2</a>
                      </div>
                    </li>
                </ul>
            </nav>
          </div>
      </div>


    );
  }
}

export default NavBar;
