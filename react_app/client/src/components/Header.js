import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  // const activeStyle = {
  //   color: aquamarine
  // }
  return (
    <header>
      <div>
        <ul>
          <li>
            <NavLink to="/" activeClassName="is-active">
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/parks" activeClassName="is-active">
              Parks
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/rides" activeClassName="is-active">
              Rides
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
