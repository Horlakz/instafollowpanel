import React, { useState } from "react";
import Link from "next/link";

export default function Nav({ children }) {

  // function to show and open nav menu with same button
  const [show, setShow] = useState(true);

  const showMenu = () => {
    setShow(!show);
  };




  return (
    <>
      <div className="">
        <nav className="flex flex-col sm:flex-row justify-between p-3 bg-gray-700">
          {/* Page Title  */}
          <h1 className="text-3xl font-base w-full text-center p-3 sm:p-1 font-bold text-purple-200">
            InstaFollowPanel
          </h1>

          {/* Navigation  */}
          <div className="flex justify-between w-full">
            {/* <Link href="/"><span className="nav-links">Home</span></Link>
          <Link href="/SignIn"><span className="nav-links">Sign In</span></Link>
          <Link href="/T&C"><span className="nav-links">Terms & Condition</span></Link>
          <Link href="/Services"><span className="nav-links">Services</span></Link> */}
            <span className="text-base sm:p-2 bg-gray-600 mytransition text-blue-50 shadow-inner cursor-pointer sm:hidden">
              <span onClick={showMenu}>
                <svg width="30" height="30" className="m-3" >
                  <path d="M0,5 30,5" stroke="#fff" stroke-width="5" />
                  <path d="M0,14 30,14" stroke="#fff" stroke-width="5" />
                  <path d="M0,23 30,23" stroke="#fff" stroke-width="5" />
                </svg>
              </span>
              3+
            </span>
            <>
              <span className="text-base p-3 sm:p-2 shadow-inner cursor-pointer bg-[#71d652ad] text-green-100">
                N500
              </span>
            </>
            <Link href="/account/Dashboard">
              <span className="nav-links">Account</span>
            </Link>
            <Link href="/">
              <span className="nav-links">Logout</span>
            </Link>
            <Link href="/Services">
              <span className="nav-links">Services</span>
            </Link>
          </div>
        </nav>
        <div>

        <div className="relative">
          {/* Drop Down Menu */}
          <div id="dropdown" className={show ? "closeMenu" : "showMenu"}>
            <Link href="/" className="w-full p-2 pl-4 list-none"><div>dropdown menu</div></Link>
            <Link href="/" className="w-full p-2 pl-4 list-none"><div>dropdown menu</div></Link>
            <Link href="/" className="w-full p-2 pl-4 list-none"><div>dropdown menu</div></Link>
            <Link href="/" className="w-full p-2 pl-4 list-none"><div>dropdown menu</div></Link>
            <Link href="/" className="w-full p-2 pl-4 list-none"><div>dropdown menu</div></Link>
            <Link href="/" className="w-full p-2 pl-4 list-none"><div>dropdown menu</div></Link>
            <Link href="/" className="w-full p-2 pl-4 list-none"><div>dropdown menu</div></Link>
          </div>
        </div>
        
        {children}
        </div>
        <footer className="w-full text-center bottom-0 relative text-lg p-4 bg-gray-700 text-white">
          <p className=""> Copyright &copy;2021</p>
        </footer>
      </div>
    </>
  );
}
