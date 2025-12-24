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
import Poster from './Poster/page'

const LandingPage = () => {
  return (
    <div>
        {/* Poster with full width at top */}
        <div className="relative">
            <Poster />
            <div className="absolute top-0 left-0 right-0 z-50">
                <div className='w-[86%] mx-auto'>
                    <Header width={100} />
                </div>
            </div>
        </div>

        {/* Other components with container */}
        <div className='w-[86%] mx-auto' >
            <OurServices />
            <Portfolio />
            <PriceList />
            <Comments />
            <Blog />
            <FAQ />
            <Footer />
        </div>
    </div>
  )
}

export default LandingPage