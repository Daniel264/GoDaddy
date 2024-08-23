import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Help from "@/components/Help";
import InputBox from "@/components/InputBox";
import LandingPage from "@/components/LandingPage";
import Questions from "@/components/Questions";
import Review from "@/components/Review";
import Templates from "@/components/Templates";
import Testimonials from "@/components/Testimonials";

export default function Home() {
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
