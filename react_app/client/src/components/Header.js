import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1 className="main-h1">WALT DISNEY WORLD</h1>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {/* <li>
            <NavLink to="/parks" activeClassName="is-active">
              Parks
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/rides">Rides</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
