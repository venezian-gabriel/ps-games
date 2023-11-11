'use client';
import Navbar from './components/global/Navbar';
import Hero from './components/home/Hero';
import Footer from './components/global/Footer';
import ShoppingInfo from './components/home/ShoppingInfo';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShoppingInfo />
      <Footer />
    </>
  );
}
