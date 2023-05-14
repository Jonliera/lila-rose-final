import React from "react";

const Header = () => {
  return (
    <div className="header navbar bg-primary text-primary-content ">
      <div className="header__navbar navbar-start">
        <div className="header__dropdown dropdown">
          <label tabIndex={0} className="header_btn btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="header__measurments h-5 w-5"
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
            tabIndex={0}
            className="header__menu menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/" className="header__link justify-between">
                Home
              </a>
            </li>
            <li tabIndex={0}>
              <a href="products" className="header__link justify-between">
                Our Hats
              </a>
            </li>
            <li tabIndex={0}>
              <a href="about" className="header__link justify-between">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <a
          href="/"
          className="header__logobtn btn btn-ghost normal-case text-xl"
        >
          Lila & Rose
        </a>
      </div>
      <div className="header__navbar navbar-center hidden lg:flex">
        <ul className="header__menu menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li tabIndex={0}>
            <a href="products" className="header__link justify-between">
              Our Hats{" "}
            </a>
          </li>
          <li tabIndex={0}>
            <a href="about" className="header__link justify-between">
              About Us
            </a>
          </li>
        </ul>
      </div>
      <div className="header_navbar navbar-end">
        <a className="header__loginbtn btn bg-secondary">Login</a>
      </div>
    </div>
  );
};

export default Header;
