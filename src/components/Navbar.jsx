import React from 'react';
import logo from '../assets/singlogo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'; // ✅ Import correctly

const Navbar = () => {
  const links = (
    <>
      <li><AnchorLink className="anchor-link text-lg font-semibold" offset="50" href="#home">Home</AnchorLink></li>
      <li><AnchorLink className="anchor-link text-lg font-semibold" offset="50" href="#aboutme">About Me</AnchorLink></li>
      <li><AnchorLink className="anchor-link text-lg font-semibold" offset="50" href="#skill">Skills</AnchorLink></li>
      <li><AnchorLink className="anchor-link text-lg font-semibold" offset="50" href="#project">Projects</AnchorLink></li>
      <li><AnchorLink className="anchor-link text-lg font-semibold" offset="50" href="#contact">Contact</AnchorLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-50  px-6 pt-2">
      <div className="navbar-start">
        <img src={logo} alt="Logo" className="h-12 w-auto p-1 m-1 rounded-md" />
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <ul className="menu menu-horizontal pr-8 hidden lg:flex">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
