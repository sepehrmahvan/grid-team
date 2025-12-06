'use client'

import TitleText from '@/share/TitleText'
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

const categories = [
    {
        id: 1,
        name: 'design',
    },
    {
        id: 2,
        name: 'wordpress',
    },
    {
        id: 3,
        name: 'programming',
    },
]
const priceList = [
    {
        id: 1,
        category: 'design',
        type: 'gold',
        price: 100,
        title: 'Golden Design',
        features: ['100% Responsive', '100% Customizable', '100% Responsive', '100% Customizable'],

    },
    {
        id: 2,
        category: 'design',
        type: 'silver',
        price: 35,
        title: 'Silver Design',
        features: ['100% Responsive', '100% Customizable', '100% Responsive', '100% Customizable'],
    },
    {
        id: 3,
        category: 'design',
        type: 'basic',
        price: 10,
        title: 'Basic Design',
        features: ['100% Responsive', '100% Customizable', '100% Responsive', '100% Customizable'],
    },
    {
        id: 4,
        category: 'wordpress',
        type: 'gold',
        price: 100,
        title: 'Golden Wordpress',
        features: ['100% Responsive', '100% Customizable', '100% Responsive', '100% Customizable'],
    },
    {
        id: 5,
        category: 'wordpress',
        type: 'silver',
        price: 35,
        title: 'Silver Wordpress',
        features: ['100% Responsive', '100% Customizable', '100% Responsive', '100% Customizable'],
    },
    {
        id: 6,
        category: 'wordpress',
        type: 'basic',
        price: 10,
        title: 'Basic Wordpress',
        features: ['100% Responsive', '100% Customizable', '100% Responsive', '100% Customizable'],
    },
    {
        id: 6,
        category: 'programming',
        type: 'gold',
        price: 100,
        title: 'Golden Programming',
        features: ['100% Responsive', '100% Customizable', '100% Responsive', '100% Customizable'],
    },
    {
        id: 7,
        category: 'programming',
        type: 'silver',
        price: 35,
        title: 'Silver Programming',
        features: ['100% Responsive', '100% Customizable', '100% Responsive', '100% Customizable'],
    },
    {
        id: 8,
        category: 'programming',
        type: 'basic',
        price: 10,
        title: 'Basic Programming',
        features: ['100% Responsive', '100% Customizable', '100% Responsive', '100% Customizable'],
    },
]

const PriceList = () => {
    const [activeCategory, setActiveCategory] = useState('design')

    const filteredPriceList = priceList
        .filter((item) => item.category === activeCategory)
        .sort((a, b) => {
            const order = { silver: 0, gold: 1, basic: 2 }
            return order[a.type as keyof typeof order] - order[b.type as keyof typeof order]
        })

    return (
        <div className="mt-[80px] w-screen relative left-1/2 -translate-x-1/2 text-center" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(125, 127, 244, 0.1) 15%, rgba(125, 127, 244, 0.2) 30%, rgba(125, 127, 244, 0.3) 45%, rgba(125, 127, 244, 0.3) 55%, rgba(125, 127, 244, 0.2) 70%, rgba(125, 127, 244, 0.1) 85%, transparent 100%)' }}>
            {/* title text */}
            <div className="max-w-7xl mx-auto px-4">
                <TitleText title="Price List" text="lorem lorem lorem lorem lorem lorem lorem lorem " />
            </div>
            <div className='inline-flex mx-auto p-1 justify-center items-center bg-white rounded-full'>
                {categories.map((item) => (
                    <button 
                        key={item.id} 
                        onClick={() => setActiveCategory(item.name)}
                        className={`rounded-full py-4 px-10 cursor-pointer transition-all duration-300 ${
                            activeCategory === item.name 
                                ? 'bg-black text-white' 
                                : 'bg-white hover:bg-primary hover:text-white'
                        }`}
                    >
                        <h3 className='capitalize'>{item.name}</h3>
                    </button>
                ))}
            </div>
            <div className='bg-transparent flex justify-center items-center gap-10 mt-[40px] items-center w-[86%] mx-auto' >
                {filteredPriceList.map((item) => (
                    <div 
                        key={item.id} 
                        className={`bg-white rounded-xxl py-4 px-[30px] transition-all duration-300 rounded-2xl shadow-lg w-[25%] ${
                            item.type === 'gold' ? 'scale-110 z-10 shadow-xl' : ''
                        }`}
                    >
                        <h3 className={`text-xl font-bold mt-4 letter-spacing-2 tracking-wider ${item.type === 'gold' ? 'text-yellow-600' : 'text-gray-400'}`}>{item.title}</h3>
                        <p className='font-bold text-4xl mt-4 tedxt-grid-black'>{item.price} $</p>
                        <ul className='flex flex-col text-left gap-4 mt-4'>
                            {item.features.map((feature, index) => (
                                <li key={index} className='text-black border-b-1 border-gray-200 pb-2 flex justify-start items-center gap-2'>
                                    <p><FaCheck className='text-green-600' /></p>
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>
                        <button className='bg-transparent border-1 border-black text-black cursor-pointer hover:bg-black hover:text-white transition-all duration-300 rounded-full px-4 py-2 mt-4 w-full' >Order</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PriceList