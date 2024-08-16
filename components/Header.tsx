import React from "react";

const Header = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-row justify-between">
        <h1 className="font-semibold text-3xl mr-4">GoDaddy</h1>
        <div className="hidden md:flex flex-row space-x-6">
          <ul className="flex flex-row space-x-6 items-center">
            <li>Domain Names</li>
            <li>Websites & Hosting</li>
            <li>Commerce</li>
            <li>Email & Marketing</li>
            <li>Expert Services</li>
            <li>More</li>
          </ul>
        </div>
        <div className="flex">
          <ul className="flex space-x-4">
            <li>Help Center</li>
            <li>Sign in</li>
          </ul>
        </div>
        <label
          htmlFor="my-drawer"
          className="btn btn-square btn-ghost md:hidden"
        >
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>Domain Names</li>
          <li>Websites & Hosting</li>
          <li>Commerce</li>
          <li>Email & Marketing</li>
          <li>Expert Services</li>
          <li>More</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
