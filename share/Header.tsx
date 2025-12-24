'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Header = ({width}:{width:number}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigation = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'Services',
            href: '/services'
        },
        {
            name: 'Portfolio',
            href: '/portfolio'
        },
        {
            name: 'Price',
            href: '/price'
        },
        {
            name: 'Blog',
            href: '/blog'
        },
        {
            name: 'About Us',
            href: '/about-us'
        },
        {
            name: 'Call Us',
            href: '/call-us'
        },
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }


  return (
    <>
        <div className={`w-[${width}%] mx-auto p-[20px] shadow-sm rounded-[10px] mt-[13px] bg-white/90 backdrop-blur-sm flex justify-between items-center relative`}>
            {/* logo */}
            <div>
                <Image src="/assets/logo-h.png" alt="grid-team" width={130} height={130} className="max-w-[100px] md:max-w-[130px]" />
            </div>
            
            {/* Desktop navigation */}
            <div className='hidden md:flex items-center gap-5'>
                {navigation.map((item, index) => (
                    <Link className='tracking-widest text-sm font-medium text-grid-black hover:text-primary transition-colors' href={item.href} key={index}>
                        {item.name}
                    </Link>
                ))}
            </div>

            {/* Desktop controls */}
            <div className='hidden md:flex items-center gap-4'>
                <button className='group relative bg-gradient-to-r from-primary to-primary text-white px-8 py-3 rounded-full cursor-pointer hover:from-primary hover:to-primary hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 text-sm font-semibold letter-spacing-2 overflow-hidden border-2 border-primary/20 hover:border-primary transform hover:scale-105'>
                    <span className='relative z-10'>Book Session</span>
                    {/* Glow effect */}
                    <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                    {/* Animated border */}
                    <div className='absolute inset-0 rounded-full border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse'></div>
                    {/* Shine effect */}
                    <div className='absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-700 ease-out'></div>
                </button>
            </div>

            {/* Mobile hamburger button */}
            {!isMenuOpen && (
                <button 
                    onClick={toggleMenu}
                    className='md:hidden flex flex-col gap-1.5 p-2 cursor-pointer z-50 relative'
                    aria-label="Toggle menu"
                >
                    <span className="w-6 h-0.5 bg-grid-black"></span>
                    <span className="w-6 h-0.5 bg-grid-black"></span>
                    <span className="w-6 h-0.5 bg-grid-black"></span>
                </button>
            )}
        </div>

        {/* Mobile menu overlay */}
        <div 
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={closeMenu}
        ></div>

        {/* Mobile sliding menu */}
        <div
            className={`fixed top-0 left-0 h-full w-[280px] bg-white/95 backdrop-blur-sm z-50 md:hidden transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            {/* Close button - fixed at top */}
            <button
                onClick={closeMenu}
                className='absolute top-6 left-6 p-2 text-grid-black hover:text-primary transition-colors z-10'
                aria-label="Close menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Scrollable content area */}
            <div className='flex-1 overflow-y-auto pt-20 pb-6 px-6'>
                {/* Mobile navigation links */}
                <nav className='flex flex-col gap-6'>
                    {navigation.map((item, index) => (
                        <Link
                            className='letter-spacing-[4px] text-base font-medium text-grid-black hover:text-primary transition-colors py-2 border-b border-gray-100'
                            href={item.href}
                            key={index}
                            onClick={closeMenu}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile button - fixed at bottom */}
            <div className='p-6 pt-0 border-t border-gray-100'>
                <button
                    onClick={closeMenu}
                    className='group relative bg-gradient-to-r from-primary to-primary text-white px-6 py-3 rounded-full cursor-pointer hover:from-primary hover:to-primary hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 text-sm font-semibold letter-spacing-2 w-full overflow-hidden border-2 border-primary/20 hover:border-primary'
                >
                    <span className='relative z-10'>Book Session</span>
                    {/* Glow effect */}
                    <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                    {/* Shine effect */}
                    <div className='absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-700 ease-out'></div>
                </button>
            </div>
        </div>
    </>
  )
}

export default Header