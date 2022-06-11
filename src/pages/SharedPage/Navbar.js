import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../img/logo-01.png";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <NavLink activeClassName="" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="" to="/portfolio">
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="" to="/blog">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="" to="/contact">
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-accent text-white md:px-24 px-4 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="normal-case text-xl">
          <img className="w-1/2" src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-end space-x-2">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div>
          <a href="https://drive.google.com/file/d/1miR7bZt_BtArdVg4Hc_EhAhqb4kjey3p/view?usp=sharing" target='_blank' className="btn text-white bg-gradient-to-r from-primary caret-secondary to-secondary normal-case tracking-wide font-semibold ">Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
