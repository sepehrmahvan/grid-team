'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Header = ({width}:{width:number}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

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
        <div 
            className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-0 rounded-[10px] mt-[18px] bg-transparent backdrop-blur-sm flex justify-between items-center relative z-30"
            style={{ width: `${width}%` }}
        >
            {/* logo */}
            <div className="flex-shrink-0">
                <Link href="/">
                    <Image 
                        src="/assets/logo-h.png" 
                        alt="grid-team" 
                        width={200} 
                        height={200}
                        className="w-32 h-auto sm:w-40 md:w-[200px]"
                        priority
                    />
                </Link>
            </div>
            
            {/* Desktop navigation */}
            <div className='hidden lg:flex items-center gap-4 xl:gap-6 bg-white px-8 xl:px-16 rounded-full h-12'>
                {navigation.map((item, index) => (
                    <Link 
                        className='tracking-widest text-xs xl:text-sm font-medium text-grid-black hover:text-primary transition-colors whitespace-nowrap' 
                        href={item.href} 
                        key={index}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            {/* Desktop controls - Book a Meeting button */}
            <div className='hidden lg:flex items-center gap-4'>
                <button className='group relative bg-grid-black text-grid-white px-6 xl:px-8 rounded-full h-12 flex items-center cursor-pointer hover:bg-grid-black/90 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 text-xs xl:text-sm font-semibold tracking-widest overflow-hidden border-2 border-white/20 hover:border-white hover:text-white'>
                    <span className='relative z-10'>Book a Meeting</span>
                    {/* Glow effect */}
                    <div className='absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                    {/* Shine effect */}
                    <div className='absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-700 ease-out'></div>
                </button>
            </div>

            {/* Mobile hamburger button */}
            <button 
                onClick={toggleMenu}
                className={`lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer z-50 relative transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
        </div>

        {/* Mobile menu overlay */}
        <div 
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={closeMenu}
            aria-hidden={!isMenuOpen}
        ></div>

        {/* Mobile sliding menu */}
        <div
            className={`fixed top-0 left-0 h-full w-[280px] sm:w-[320px] bg-white/95 backdrop-blur-sm z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            aria-hidden={!isMenuOpen}
        >
            {/* Header with logo and close button */}
            <div className='flex items-center justify-between p-6 border-b border-gray-100'>
                <Link href="/" onClick={closeMenu}>
                    <Image 
                        src="/assets/logo-h.png" 
                        alt="grid-team" 
                        width={120} 
                        height={40}
                        className="h-8 w-auto"
                    />
                </Link>
                <button
                    onClick={closeMenu}
                    className='p-2 text-grid-black hover:text-primary transition-colors'
                    aria-label="Close menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Scrollable content area */}
            <div className='flex-1 overflow-y-auto pt-6 pb-6 px-6'>
                {/* Mobile navigation links */}
                <nav className='flex flex-col gap-2'>
                    {navigation.map((item, index) => (
                        <Link
                            className='tracking-widest text-base font-medium text-grid-black hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-gray-50'
                            href={item.href}
                            key={index}
                            onClick={closeMenu}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile button - Book Session */}
            <div className='p-6 pt-0 border-t border-gray-100'>
                <button
                    onClick={closeMenu}
                    className='group relative bg-grid-black text-grid-white px-6 rounded-full h-12 flex items-center justify-center cursor-pointer hover:bg-grid-black/90 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 text-sm font-semibold tracking-widest w-full overflow-hidden border-2 border-white/20 hover:border-primary'
                >
                    <span className='relative z-10'>Book Session</span>
                    <div className='absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                    <div className='absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-700 ease-out'></div>
                </button>
            </div>
        </div>
    </>
  )
}

export default Header