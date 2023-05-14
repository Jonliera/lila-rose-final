import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Login from "@/components/Login";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Carousel />
      <Products />
      <About />
      <Footer />
      <Login />
    </>
  );
}
