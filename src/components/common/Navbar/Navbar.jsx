import { useState } from 'react';
import { NAV_ITEMS } from '../../../constants/data';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="navbar__logo">
          <div className="navbar__logo-icon">হে</div>
          <div className="navbar__logo-text">
            <h1>Hello Nabiganj</h1>
            <p>নবীগঞ্জের মানুষ, নবীগঞ্জের গল্প</p>
          </div>
        </a>

        <div className="navbar__menu">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`navbar__menu-item ${item.active ? 'navbar__menu-item--active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="navbar__search">
          <input type="text" placeholder="সার্চ করুন..." />
          <button className="navbar__search-btn" aria-label="Search">
            <FiSearch />
          </button>
        </div>

        <button
          className="navbar__mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
