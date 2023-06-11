import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div className="h-screen pt-[60px] background-gradient">
      <main className=" w-[80%] h-full mx-auto grid grid-cols-12 grid-rows-16 gap-2 ">
        <div className=" col-start-1 col-end-8 row-start-1 row-end-[16] p-4 bg-white shadow">
          <div>
            <span className="flex justify-between">
              <h1 className=" font-bold text-3xl">Your trips</h1>
              <Link href="/plan">Add new</Link>
            </span>
            <hr />
          </div>
          <div></div>
        </div>

        <div className=" col-start-9 col-end-13 row-start-1 row-end-[8]  p-4 bg-white rounded-2xl">
          <h2 className=" font-bold text-2xl">Notifications</h2>
          <hr />
        </div>

        <div className=" col-start-9 col-end-13 row-start-[8] row-end-[16] rounded-xl p-4 bg-white">
          <h2 className=" font-bold text-2xl">Your todo list</h2>
          <hr />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
