import React from "react";
import Link from "next/link";
import SignInPage from "./layouts/SignInPage";

export default function SignUp() {
  return (
    <SignInPage>
      <h1 className="text-2xl underline text-center w-full">Sign Up</h1>
      <div className="sm:flex sm:flex-row-reverse">
        <form className="w-full">
          <div className="form-group sm:w-full">
            <label className="form-label">Username</label>
            <input className="form-input" type="text" />
          </div>
          <div className="form-group sm:relative sm:w-full">
            <label className="form-label">Email</label>
            <input className="form-input sm:absolute sm:right-[-2.2em]" type="email" />
          </div>
          <div className="form-group sm:w-full">
            <label className="form-label">Password</label>
            <input className="form-input" type="password" />
          </div>
          <div className="form-group sm:w-full">
            <label className="form-label sm:w-full">Confirm Password</label>
            <input className="form-input" type="password" />
          </div>

          <button type="submit" className="btn">Sign Up</button>
        </form>

        <p className="p-2 text-[#444] text-lg sm:ml-4 w-full">Already have an account? <br />Click on the <Link href="/SignIn"><span className="text-blue-500">Sign In tab</span></Link> above</p>
      </div>
    </SignInPage>
  );
}
