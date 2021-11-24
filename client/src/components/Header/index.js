import './style.css'

const Header = () => {

  return (
    <header className="primary-header">
      <div>
        <a className="logo-wrap" href="#">
          <img src="" className="logo" role="img" aria-label="Site home"/>
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
                <li><a href="https://sites.google.com/dayum.com.au/dropbears/home?authuser=0">Home</a></li>
                <li><a class="active" href="https://sites.google.com/dayum.com.au/dropbears/rarity?authuser=0">Rarity</a></li>
                <li><a href="https://sites.google.com/dayum.com.au/dropbears/events?authuser=0">Events</a></li>
                <li><a href="https://sites.google.com/dayum.com.au/dropbears/whats-a-dropbear?authuser=0">What's a Dropbear?</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;
