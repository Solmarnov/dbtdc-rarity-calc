import './style.css'

const Header = () => {

  return (
    <header class="primary-header">
      <div>
        <img src="" class="logo" />
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
                <li><a href="https://sites.google.com/dayum.com.au/dropbears/rarity?authuser=0">Rarity</a></li>
                <li><a href="https://sites.google.com/dayum.com.au/dropbears/events?authuser=0">Events</a></li>
                <li><a href="https://sites.google.com/dayum.com.au/dropbears/whats-a-dropbear?authuser=0">What's a Dropbear?</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
        <span class="sr-only">Menu</span>
      </button>

      <nav>
        <ul id="primary-navigation" class="primary-navigation">
          <li class="active">
            <a class="ff-sans-cond uppercase text-white letter-spacing-2" href="https://sites.google.com/dayum.com.au/dropbears/home">
              Home
            </a>
          </li>
          <li>
            <a class="ff-sans-cond uppercase text-white letter-spacing-2" href="#">
              Rarity
            </a>
          </li>
          <li>
            <a class="ff-sans-cond uppercase text-white letter-spacing-2" href="https://sites.google.com/dayum.com.au/dropbears/events">
              Events
            </a>
          </li>
          <li>
            <a class="ff-sans-cond uppercase text-white letter-spacing-2" href="https://sites.google.com/dayum.com.au/dropbears/whats-a-dropbear">
              What's a Dropbear?
            </a>
          </li>
        </ul>
      </nav> */}
    </header>
  )
}

export default Header;