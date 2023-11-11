'use client';
import Navbar from './components/global/Navbar';
import Hero from './components/home/Hero';
import Badges from './components/home/Badges';
import Banner from './components/home/Banner';
import ShoppingInfo from './components/home/ShoppingInfo';
import Footer from './components/global/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Badges />
      <Banner />
      <ShoppingInfo />
      <Footer />
    </>
  );
}
