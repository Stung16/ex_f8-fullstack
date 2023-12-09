import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import FormTravel from './components/FormTravel';
import Sale from './components/Sale';
import SpecialOffers from './components/SpecialOffers';
import Services from './components/Services';
import Gallery from './components/Gallery';

export const metadata = {
  title: "Travel | KieuDuyTung",
  description: "My travel",
};
const page = () => {
  return (
    <div className='overflow-y-hidden'>
      <Header />
      <Slider />
      <FormTravel />
      <Sale />
      <SpecialOffers />
      <Services />
      <Gallery />
      <Footer />
    </div>
  )
}

export default page