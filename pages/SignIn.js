import React from "react";
import Link from "next/link";
import Head from "next/head";
import SignInPage from "./layouts/SignInPage";

export default function SignIn() {
  return (
    <SignInPage>
      <Head>
        <title>InstaFollowPanel || Sign In</title>
      </Head>
        <h1 className="text-2xl underline text-center w-full">Sign In</h1>
      <div className="sm:flex sm:justify-around sm:p-4">
        <form className="sm:w-4/5">
          <div className="form-group">
            <label className="form-label">Username:</label>
            <input className="form-input" type="text" />
          </div>
          <div className="form-group">
            <label className="form-label">Password:</label>
            <input className="form-input" type="password" />
          </div>

          <button type="submit" className="btn sm:w-">Sign In</button>
        </form>

        <p className="p-2 text-[#444] text-lg mytransition sm:ml-10 w-full">
          Don't have an account? <br />
          Click on the <Link href="/SignUp"><span className="text-blue-500 cursor-pointer">Sign Up tab</span></Link> above
        </p>
      </div>
    </SignInPage>
  );
}

SignIn.getLayout = (page) => <SignInPage children={page} />;
