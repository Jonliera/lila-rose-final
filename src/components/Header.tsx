import React from "react";
import Link from "next/link";
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
              <Link href="/" className="header__link justify-between">
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <Link href="products" className="header__link justify-between">
                Our Hats
              </Link>
            </li>
            <li tabIndex={0}>
              <Link href="about" className="header__link justify-between">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="header__logobtn btn btn-ghost normal-case text-xl"
        >
          Lila & Rose
        </Link>
      </div>
      <div className="header__navbar navbar-center hidden lg:flex">
        <ul className="header__menu menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link href="products" className="header__link justify-between">
              Our Hats{" "}
            </Link>
          </li>
          <li tabIndex={0}>
            <Link href="about" className="header__link justify-between">
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="header_navbar navbar-end">
        <Link
          href="login"
          className="header__loginbtn btn rounded-md bg-green-200 text-white border border-solid border-green-200 hover:bg-green-300 hover:border-green-300 transition-colors duration-300"
        >
          Login / Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Header;
