"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Help from "@/components/Help";
import InputBox from "@/components/InputBox";
import LandingPage from "@/components/LandingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import Questions from "@/components/Questions";
import Review from "@/components/Review";
import Templates from "@/components/Templates";
import Testimonials from "@/components/Testimonials";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the animation duration here
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Header />
      <InputBox />
      <LandingPage />
      <Templates />
      <Testimonials />
      <Review />
      <Help />
      <Questions />
      <Footer />
    </>
  );
}
