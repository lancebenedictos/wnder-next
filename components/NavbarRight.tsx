"use client";
import { useAuthContext } from "@/context/AuthContext";
import { signOutUser } from "@/lib/Firebase";
import React from "react";
import Link from "next/link";

function NavbarRight() {
  const { user } = useAuthContext();

  return (
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
  );
}

export default NavbarRight;
