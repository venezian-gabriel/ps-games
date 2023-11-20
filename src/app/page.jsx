"use client";
import Navbar from "./components/global/Navbar";
import Hero from "./components/home/Hero";
import Games from "./components/home/Games";
import Badges from "./components/home/Badges";
import Banner from "./components/home/Banner";
import ShoppingInfo from "./components/home/ShoppingInfo";
import WhatsAppCTA from "./components/global/WhatsAppCTA";
import Footer from "./components/global/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Games />
      <Badges />
      <Banner />
      <ShoppingInfo />
      <WhatsAppCTA />
      <Footer />
    </>
  );
}
