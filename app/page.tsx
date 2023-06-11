"use client";
import { useAuthContext } from "@/context/AuthContext";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";

export default function Home() {
  const { user } = useAuthContext();

  return user ? <HomePage /> : <LandingPage />;
}
