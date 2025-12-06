'use client'
import Header from '@/share/Header'
import React from 'react'
import OurServices from './OurServices/page'
import Portfolio from './Portfolio/page'
import PriceList from './PriceList/page'
import Comments from './Comments/page'
import Blog from './Blog/page'

const LandingPage = () => {
  return (
    <div className='w-[86%] mx-auto' >
        <Header width={100} />
        <OurServices />
        <Portfolio />
        <PriceList />
        <Comments />
        <Blog />
    </div>
  )
}

export default LandingPage