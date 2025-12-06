'use client'
import Header from '@/share/Header'
import React from 'react'
import OurServices from './OurServices/page'
import Portfolio from './Portfolio/page'
import PriceList from './PriceList/page'
import Comments from './Comments/page'
import Blog from './Blog/page'
import FAQ from './FAQ/page'
import Footer from './Footer/page'

const LandingPage = () => {
  return (
    <div className='w-[86%] mx-auto' >
        <Header width={100} />
        <OurServices />
        <Portfolio />
        <PriceList />
        <Comments />
        <Blog />
        <FAQ />
        <Footer />
    </div>
  )
}

export default LandingPage