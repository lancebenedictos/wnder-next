// import { currentUser } from "@/lib/Firebase";
import Link from "next/link";
import React from "react";
import NavbarRight from "./NavbarRight";

function Navbar() {
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
        <NavbarRight />
      </div>
    </nav>
  );
}

export default Navbar;
