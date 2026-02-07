'use client'

import TitleText from '@/share/TitleText'
import { useState } from 'react'
import { GoPlusCircle } from 'react-icons/go'

const categories = [
    {
        id: 1,
        name: 'uiux',
        label: 'Ui/Ux',
    },
    {
        id: 2,
        name: 'wordpress',
        label: 'Wordpress',
    },
    {
        id: 3,
        name: 'programming',
        label: 'Programming',
    },
]

const priceList = [
    // UI/UX design plans
    {
        id: 1,
        category: 'uiux',
        type: 'silver',
        price: 650,
        title: 'Starter UI Kit',
        features: [
            'Up to 5 key screens (web or mobile)',
            'Brand-aligned colors & typography',
            'Responsive layout for desktop & mobile',
            'Delivery in Figma with organized components',
        ],
    },
    {
        id: 2,
        category: 'uiux',
        type: 'gold',
        price: 1500,
        title: 'Product UI/UX',
        features: [
            'Up to 12 product screens (web or mobile)',
            'User flow & wireframes before design',
            'Design system: buttons, forms, states',
            'Hand-off package for developers',
        ],
    },
    {
        id: 3,
        category: 'uiux',
        type: 'basic',
        price: 2800,
        title: 'SaaS Dashboard Pro',
        features: [
            'Complex dashboard with up to 18 screens',
            'Data visualization & chart components',
            'Design tokens & full UI library',
            '2 feedback rounds included',
        ],
    },
    // WordPress plans
    {
        id: 4,
        category: 'wordpress',
        type: 'silver',
        price: 850,
        title: 'Starter Website',
        features: [
            'Up to 5 pages (Home, About, Services, Blog, Contact)',
            'Custom Elementor layout (no generic theme)',
            'Mobile responsive & speed optimized',
            'Basic on-page SEO setup',
        ],
    },
    {
        id: 5,
        category: 'wordpress',
        type: 'gold',
        price: 2200,
        title: 'Business Website',
        features: [
            'Up to 10 pages with custom sections',
            'Blog, contact forms & basic integrations',
            'Conversion-focused landing page',
            'Training on how to edit your own content',
        ],
    },
    {
        id: 6,
        category: 'wordpress',
        type: 'basic',
        price: 4200,
        title: 'E‑commerce Pro',
        features: [
            'WooCommerce shop with up to 40 products',
            'Custom product, cart & checkout templates',
            'Payment gateway & shipping setup',
            'Email + WhatsApp support for 30 days',
        ],
    },
    // Programming / development plans
    {
        id: 7,
        category: 'programming',
        type: 'silver',
        price: 1200,
        title: 'Landing Page Build',
        features: [
            'Pixel-perfect build from your design',
            'Next.js + responsive Tailwind layout',
            'SEO-ready meta tags & Open Graph',
            'Basic analytics integration',
        ],
    },
    {
        id: 8,
        category: 'programming',
        type: 'gold',
        price: 3800,
        title: 'Web App MVP',
        features: [
            'Auth, dashboard & 2–3 core features',
            'API integration or simple backend',
            'Reusable, clean component structure',
            'Deployed on Vercel or similar hosting',
        ],
    },
    {
        id: 9,
        category: 'programming',
        type: 'basic',
        price: 8500,
        title: 'Full Product Build',
        features: [
            'Custom web app for your product idea',
            'Design + frontend + basic backend',
            'Performance & accessibility best practices',
            'Support & small iterations for 30 days',
        ],
    },
]

const PriceList = () => {
    const [activeCategory, setActiveCategory] = useState('uiux')

    const filteredPriceList = priceList
        .filter((item) => item.category === activeCategory)
        .sort((a, b) => {
            const order = { silver: 0, gold: 1, basic: 2 }
            return order[a.type as keyof typeof order] - order[b.type as keyof typeof order]
        })

    return (
        <section className="mt-12 sm:mt-16 md:mt-20 lg:mt-[80px] w-full text-center">
            {/* title text */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <TitleText title="Price list" text="Choose a plan that fits your project. We design and build modern brands, websites and digital products." />
            </div>

            {/* category pills */}
            <div className="mt-6 sm:mt-8 flex justify-center overflow-x-auto px-4">
                <div className="inline-flex mx-auto p-1 justify-center items-center bg-white/90 rounded-full shadow-[0_15px_40px_rgba(15,23,42,0.15)] backdrop-blur-sm">
                    {categories.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveCategory(item.name)}
                            className={`rounded-full py-2 sm:py-2.5 md:py-3 px-4 sm:px-6 md:px-8 lg:px-10 cursor-pointer text-xs sm:text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                                activeCategory === item.name
                                    ? 'bg-grid-black text-white shadow-[0_15px_40px_rgba(15,23,42,0.45)]'
                                    : 'text-grid-gray hover:bg-primary hover:text-white'
                            }`}
                        >
                            <h3 className="capitalize">{item.label}</h3>
                        </button>
                    ))}
                </div>
            </div>

            {/* price cards */}
            <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-6 lg:gap-8 w-full sm:w-[90%] md:w-[86%] mx-auto px-4 sm:px-6">
                {filteredPriceList.map((item) => {
                    const isFeatured = item.type === 'gold'

                    return (
                        <div
                            key={item.id}
                            className={`relative transition-all duration-300 w-full sm:flex-1 max-w-[320px] sm:max-w-none mx-auto sm:mx-0 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] ${
                                isFeatured
                                    ? 'bg-grid-black text-white sm:scale-105 shadow-[0_30px_80px_rgba(15,23,42,0.5)] py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8'
                                    : 'bg-white text-grid-black shadow-[0_25px_60px_rgba(15,23,42,0.18)] py-6 sm:py-7 lg:py-8 px-4 sm:px-6 lg:px-7'
                            }`}
                        >
                            {/* header block */}
                            <div
                                className={`rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] px-4 sm:px-5 lg:px-6 py-4 sm:py-5 mb-4 sm:mb-5 lg:mb-6 ${
                                    isFeatured ? 'bg-white text-grid-black' : 'bg-grid-black text-white'
                                }`}
                            >
                                <h3 className="text-base sm:text-lg font-semibold tracking-wide">{item.title}</h3>
                                <p className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold tracking-wide">
                                    ${item.price}
                                </p>
                            </div>

                            {/* features */}
                            <ul className="flex flex-col text-left gap-3 sm:gap-4 mt-2">
                                {item.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className={` pb-2 sm:pb-3 flex justify-start items-start gap-2 sm:gap-3 ${
                                            isFeatured ? 'text-white' : 'text-grid-black'
                                        }`}
                                    >
                                        <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full flex-shrink-0 mt-0.5 font-bold">
                                            <GoPlusCircle className="text-lg sm:text-2xl font-bold" />
                                        </span>
                                        <p className="text-xs sm:text-sm leading-relaxed">{feature}</p>
                                    </li>
                                ))}
                            </ul>

                            {/* button */}
                            <button
                                className={`mt-6 sm:mt-8 w-full rounded-full text-xs sm:text-sm font-semibold py-2.5 sm:py-3 transition-all duration-300 ${
                                    isFeatured
                                        ? 'bg-white text-grid-black hover:bg-gray-100'
                                        : 'bg-grid-black text-white hover:bg-grid-black/90'
                                }`}
                            >
                                Submit
                            </button>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default PriceList