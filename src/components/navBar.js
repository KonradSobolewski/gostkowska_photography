import React from 'react';
import '../style/App.css';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <li>
        <Link to="/">Dogs</Link>
      </li>
      <li>
        <Link to="/cats">Cats</Link>
      </li>
      <li>
        <Link to="/sheeps">Sheeps</Link>
      </li>
      <li>
        <Link to="/goats">Goats</Link>
      </li>
    </nav>
  )

}

export default NavBar;