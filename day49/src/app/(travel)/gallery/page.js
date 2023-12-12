import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import AllGallery from '../../../components/AllGallery'

export const metadata = {
    title: "gallery | KieuDuyTung",
    description: "My travel",
  };


const page = () => {
  return (
    <div>
        <Header />
        <AllGallery />
        <Footer />
    </div>
  )
}

export default page