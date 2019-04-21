import React from 'react';

import './App.css';

class Section extends React.Component {
  render() {
    return (
      <div className="col-sm-9 col-sm-offset-3" data-spy="scroll" data-target=".navbar" data-offset="50">
        <div id="section1" className="container-fluid bg-success">
        <h1>Simon</h1>
        <p>A simple memory skilled game.</p>
        <a href="https://12developer.github.io/" target="blank"><img src="IMAGES/SimonPortfolio.png" className="img-responsive" width="200" alt="simonpicture"></img></a>
        <p>Technology:</p>
        <img src="img/techlogos/Jquery.png" className="techlogo" width="100"alt="logo"></img>
				<img src="img/techlogos/html.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/js.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/css.png" className="techlogo" width="100" alt="logo"></img>
        </div>
        <div id="section2" className="container-fluid bg-warning">
        <h1>Playlistr</h1>
        <p>Playlistr is an app for creating customizable and social playlist. It uses the Last.fm API to search from a catalog and music and features a filter to allow you to serach for specific keywords in titles or artists.</p>
        <a href="https://csa-music-app.herokuapp.com/" target="blank"><img src="IMAGES/Playlistr.png" className="img-responsive" width="200" alt="playlistrpicture"></img></a>
        <p>Technology:</p>
        <img src="img/techlogos/mongodb.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/express.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/angular.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/node.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/heroku.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/html.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/css.png" className="techlogo" width="100" alt="logo"></img>
        </div>
        <div id="section3" className="container-fluid bg-secondary">
        <h1>Quitter </h1>
        <p>Quitter is a social media app for the non-committal type. Feel free to communicate with everyone on Quitter about the things that you have failed to get done..</p>
        <a href="https://quitter-app.herokuapp.com/" target="blank"><img src="IMAGES/quitter.png" className="img-responsive" width="200" alt="quitterpicture"></img></a>
        <p>Technology:</p>
        <img src="img/techlogos/rails.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/react.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/ruby.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/heroku.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/postgres.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/js.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/html.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/css.png" className="techlogo" width="100" alt="logo"></img>
        </div>
        <div id="section41" className="container-fluid bg-danger">
        <h1>Brainstorm</h1>
        <p>Brainstorm is an app where users can store their ideas to their account.</p>
        <a href="https://agile-sierra-89921.herokuapp.com/" target="blank"><img src="IMAGES/brainstorm.png" className="img-responsive" width="200" alt="brainstormpicture"></img></a>
        <p>Technology:</p>
        <img src="img/techlogos/rails.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/react.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/ruby.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/heroku.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/postgres.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/js.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/html.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/css.png" className="techlogo" width="100" alt="logo"></img>
        </div>
        <div id="section42" className="container-fluid bg-info">
        <h1>Flee Cobain</h1>
        <p>Flee Cobain is a web app that allows you to listen to the Flee Cobain mixtape.</p>
        <a href="https://12developer.github.io/flee/index.html" target="blank"><img src="IMAGES/flee.png" class="img-responsive" width="200" alt="FleeCobainPicture"></img></a>
        <p>Technology:</p>
        <img src="img/techlogos/html.png" className="techlogo" width="100" alt="logo"></img>
				<img src="img/techlogos/css.png" className="techlogo" width="100" alt="logo"></img>
        </div>
      </div>
    );
  }
}
export default Section;
