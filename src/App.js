import React from 'react';
import { Switch, Route, BrowserRouter as Router, NavLink, Redirect } from 'react-router-dom';
import './style/App.css';
import Founder from './pages/Founder';
import BODirectors from './pages/BODirectors';
import CleanAwakening from './pages/CleanAwakening';
import header_logo from './images/header.png';

function App() {
  return (
    <Router>
      <div className="container">
        <img src={header_logo} className="header_image" alt="Header Logo" />
        <ul>
          <li><NavLink exact to='/founders' activeStyle={{
            fontWeight: "bold",
            color: "black"
          }} className="nav_link">
            Founders
					</NavLink></li>
          <li><NavLink exact to='/board_of_directors' activeStyle={{
            fontWeight: "bold",
            color: "black"
          }} className="nav_link">
            Board of Directors
					</NavLink></li>
          <li><NavLink exact to='/clean_awakening' activeStyle={{
            fontWeight: "bold",
            color: "black"
          }} className="nav_link">
            Clean Awakening
					</NavLink></li>
        </ul>
        <Switch>
          <Redirect exact from="/" to="/clean_awakening" />
          <Route exact path="/founders" component={Founder} />
          <Route exact path="/board_of_directors" component={BODirectors} />
          <Route exact path="/clean_awakening" component={CleanAwakening} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
