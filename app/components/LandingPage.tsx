import React from "react";
import FeatureCard from "@/components/FeatureCard";
import Lottie from "lottie-react";
import lottieAnimation from "../../public/lottieAnimation.json";
import Link from "next/link";

const features = [
  {
    imageName: "schedule.svg",
    header: "Schedule",
    subtext: "Effortless coordination for unforgettable dates",
  },
  {
    imageName: "list.svg",
    header: "Plan",
    subtext: "Seamless travel planning and organization.",
  },
  {
    imageName: "route.svg",
    header: "Route",
    subtext: "Efficient navigation made easy",
  },
  {
    imageName: "collaborate.svg",
    header: "Collaborate",
    subtext: "Powerful collaboration for streamlined teamwork.",
  },
];

function LandingPage() {
  return (
    <div className=" background-gradient  ">
      <header className=" max-w-[90%] mx-auto ">
        {/* Header text */}
        <div className="grid grid-cols-12 grid-rows-16 h-screen pt-[48px]">
          <div className=" bg-white p-2 rounded-sm border-2 border-black py-4 flex flex-col gap-2 col-start-2 col-end-6 row-start-2 row-end-[10] box_shadow">
            <h1 className="font-bold text-3xl">Welcome to Wnder!</h1>
            <p className=" text-gray-400">
              Plan your perfect travel adventure with ease using Wnder, the
              ultimate itinerary app that streamlines the entire planning
              process, from creating personalized schedules to organizing travel
              details, all in one place. Say goodbye to the hassle of juggling
              multiple apps and enjoy a seamless and unforgettable travel
              experience.
            </p>
            <Link
              href="/signup"
              className=" font-bold relative border-2 border-b-4 border-r-4 border-black px-4 bg-yellow-200 rounded-sm self-end mt-auto"
            >
              Sign up
            </Link>
          </div>
          {/* Header text end */}

          <h1 className="col-start-7 col-end-12 w-full row-start-2 row-end-3 text-3xl">
            Your next adventure awaits
          </h1>

          {/* Lottie */}
          <div className="col-start-7 col-end-12 row-start-4 row-end-[10]">
            <Lottie animationData={lottieAnimation} />
          </div>
          {/* lottie end */}
          {/* Featurelist */}
          <div className="flex col-start-2 col-end-12 row-start-[12] row-end-[16] justify-between gap-2">
            {features.map((feature) => (
              <FeatureCard feature={feature} key={feature.header} />
            ))}
          </div>
        </div>
      </header>
      {/* <main>
        <Container>
          <p>text</p>
          <p>text</p>
        </Container>
      </main> */}
    </div>
  );
}

export default LandingPage;
