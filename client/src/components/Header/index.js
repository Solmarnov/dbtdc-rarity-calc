import React from 'react'
import './style.css'
import logo from '../../assets/images/dbtdc-logo-512x512.png'

const Header = () => {

  return (
    <header className="primary-header">
      <div>
        <a className="logo-wrap" href="https://sites.google.com/dayum.com.au/dropbears/home">
          <img src={logo} className="logo" aria-label="Site home"/>
          <span className="logo-text">The Dropbears Tree Diving Club</span>
        </a>
      </div>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <nav className="menu">
          <div>
            <div>
              <ul>
                <li><a href="https://sites.google.com/dayum.com.au/dropbears/home">Home</a></li>
                <li><a className="active" href="https://sites.google.com/dayum.com.au/dropbears/rarity">Rarity</a></li>
                <li><a href="https://sites.google.com/dayum.com.au/dropbears/events">Events</a></li>
                <li><a href="https://sites.google.com/dayum.com.au/dropbears/whats-a-dropbear">What's a Dropbear?</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;
