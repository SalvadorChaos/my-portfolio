import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="header-container">
      <div className="header-titles">
        <h1>
          Salvador Martinez
          <span className="hide-when-narrow"> Jr</span>
        </h1>
        <p>
          Web Developer
        </p>
      </div>
      
      <div className="header-nav">
        <div className="nav-item">
          <NavLink to="/" activeClassName="is-active" className="home-link link" exact={true}>
            <i class="fas fa-home"></i>
            <div>
              <p>Home</p>
            </div>
          </NavLink>
        </div>

        <div className="nav-item">
          <NavLink to="/portfolio" activeClassName="is-active" className="folder-link link" exact={true}>
            <i class="fas fa-folder"></i>
            <div>
              <p>Portfolio</p>
            </div>
          </NavLink>
        </div>

        <div className="nav-item-end">
          <NavLink to="/contact" activeClassName="is-active" className="contact-link link">
            <i class="fas fa-at"></i>
            <div>
              <p>Contact</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  </header>
);

export default Header;