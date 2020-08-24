import React from 'react';
import { Switch, Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import './App.css';
import Founder from './pages/Founder';
import BODirectors from './pages/BODirectors';
import CleanAwakening from './pages/CleanAwakening';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <NavLink exact to="/">
        </NavLink>
        <NavLink exact to='/founders'>
          Founder
					</NavLink>
        <NavLink exact to='/board_of_directors'>
          About
					</NavLink>
        <NavLink exact to='/clean_awakening' activeClassName='is-active'>
          Posts
					</NavLink>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/founders" component={Founder} />
          <Route exact path="/board_of_directors" component={BODirectors} />
          <Route exact path="/clean_awakening" component={CleanAwakening} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
