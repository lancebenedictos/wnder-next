"use client";
// import { currentUser } from "@/lib/Firebase";
import Link from "next/link";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { signOutUser } from "@/lib/Firebase";

function Navbar() {
  const { user } = useAuthContext();

  return (
    <nav className=" border-b-2 w-full border-black fixed top-0 h-12 flex items-center bg-white z-50 ">
      {/* Options */}
      <div className=" w-[80%] mx-auto flex">
        {/* Left */}
        <span className="flex gap-2 items-center">
          <Link href="/">Wnder</Link>
          <p className=" bg-yellow-200 rounded-xl px-4 border-2 border-black">
            Beta
          </p>
        </span>

        {/* Right */}
        <span className=" ml-auto flex gap-4 items-center">
          <p className=" font-bold">About</p>
          {user ? (
            <>
              <button onClick={signOutUser}>Logout</button>
            </>
          ) : (
            <>
              <Link className=" font-bold" href="/login">
                Login
              </Link>
              <Link
                className=" font-bold relative border-2 border-b-4 border-r-4 border-black px-4 bg-yellow-200 rounded-sm"
                href="/signup"
              >
                Signup
              </Link>
            </>
          )}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
