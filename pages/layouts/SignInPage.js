import React from 'react'
import Link from 'next/link'


export default function SignInPage({ children }) {
    return (
        <div className="p-4 flex flex-col items-center bg-[#ccc] h-[35rem]">
            <div className="text-lg font-semibold flex w-full justify-around p-2 border-white border-2 shadow-md m-2 divide-x-2">
                <Link href="/SignIn"><span className="w-full text-center hover:text-blue-800 hover:scale-90 cursor-pointer mytransition">Sign In</span></Link>
                <Link href="/SignUp"><span className="w-full text-center hover:text-blue-800 hover:scale-90 cursor-pointer mytransition">Sign Up</span></Link>
            </div>
            <div className="p-4">{children}</div>
        </div>
    )
}

