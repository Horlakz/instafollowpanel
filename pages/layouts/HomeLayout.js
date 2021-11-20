import React from "react";
import Link from "next/link";

export default function Nav({ children }) {
  return (
    <>
    <div className="">
      <nav className="flex flex-col sm:flex-row justify-between p-3 bg-gray-700">
        {/* Page Title  */}
        <h1 className="text-3xl font-base w-full text-center p-3 sm:p-1 font-bold text-purple-200">InstaFollowPanel</h1>

        {/* Navigation  */}
        <div className="flex justify-between w-full">
          <Link href="/"><span className="nav-links">Home</span></Link>
          <Link href="/SignIn"><span className="nav-links">Sign In</span></Link>
          <Link href="/T&C"><span className="nav-links">Terms & Condition</span></Link>
          <Link href="/Services"><span className="nav-links">Services</span></Link>
        </div>
      </nav>
      {children}
      <footer className="w-full text-center bottom-0 relative text-lg p-4 bg-gray-700 text-white">
        <p className=""> Copyright &copy;2021</p>
      </footer>
    </div>
    </>
  );
}
