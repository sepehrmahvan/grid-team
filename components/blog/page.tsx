"use client"

import React from 'react'
import Header from "@/share/Header"
import TitleText from "@/share/TitleText"
import BlogCard, { BlogPost } from '@/components/Landing/Blog/BlogCard'
import Footer from '../Landing/Footer/page'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// Mock blog data
const blogPosts: BlogPost[] = [
    {
        title: 'The Future of Web Design: Trends to Watch in 2024',
        description: 'Explore the latest trends shaping the web design landscape, from AI-driven interfaces to immersive 3D experiences.',
        image: '/assets/b1.png',
        link: '/blog/future-web-design-2024',
    },
    {
        title: 'Mastering UI/UX Principles for Better User Experience',
        description: 'Learn the fundamental principles of user interface and user experience design that create exceptional digital products.',
        image: '/assets/b2.png',
        link: '/blog/ui-ux-principles',
    },
    {
        title: 'The Power of Minimalist Design in Modern Branding',
        description: 'Discover how minimalist design principles can elevate your brand identity and create lasting impressions.',
        image: '/assets/b3.png',
        link: '/blog/minimalist-design-branding',
    },
    {
        title: 'Mobile-First Development: Building for Tomorrow',
        description: 'A comprehensive guide to mobile-first development strategies and responsive design techniques.',
        image: '/assets/b4.png',
        link: '/blog/mobile-first-development',
    },
    {
        title: 'Color Psychology in Digital Marketing',
        description: 'Understanding how colors influence user behavior and how to leverage them effectively in your marketing campaigns.',
        image: '/assets/b1.png',
        link: '/blog/color-psychology-marketing',
    },
    {
        title: 'The Rise of Interactive Web Experiences',
        description: 'Exploring innovative interactive elements that engage users and create memorable web experiences.',
        image: '/assets/b2.png',
        link: '/blog/interactive-web-experiences',
    },
    {
        title: 'Typography Best Practices for Web Designers',
        description: 'Master the art of typography and learn how to choose, combine, and implement fonts effectively in web design.',
        image: '/assets/b3.png',
        link: '/blog/typography-best-practices',
    },
    {
        title: 'SEO-Friendly Web Design: Balancing Aesthetics and Performance',
        description: 'Learn how to create visually appealing websites that also perform exceptionally well in search engine rankings.',
        image: '/assets/b4.png',
        link: '/blog/seo-friendly-web-design',
    },
    {
        title: 'The Evolution of E-commerce User Interfaces',
        description: 'Tracing the evolution of e-commerce interfaces and exploring cutting-edge solutions for online shopping experiences.',
        image: '/assets/b1.png',
        link: '/blog/ecommerce-ui-evolution',
    }
];

const BlogComponent = () => {
    const [activeButton, setActiveButton] = React.useState<string>('all');
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 6;

    // Calculate pagination
    const totalPages = Math.ceil(blogPosts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPosts = blogPosts.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    return(
        <div className="min-h-screen relative overflow-hidden">
            {/* Floating geometric shapes */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Shapes positioned on left side */}
                <div className="absolute top-20 left-8 w-16 h-16 bg-[#E6E6FA]/60 rounded-full animate-bounce delay-100"></div>
                <div className="absolute bottom-40 left-12 w-20 h-20 bg-[#E6E6FA]/60 rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-40 left-16 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-[#E6E6FA]/60 animate-pulse delay-200"></div>
                <div className="absolute top-3/4 left-6 w-0 h-0 border-l-[18px] border-r-[18px] border-b-[31px] border-l-transparent border-r-transparent border-b-[#E6E6FA]/60 animate-bounce delay-900"></div>
                <div className="absolute bottom-60 left-20 w-10 h-10 bg-[#E6E6FA]/60 animate-pulse delay-600 hexagon"></div>

                {/* Shapes positioned on right side */}
                <div className="absolute top-32 right-8 w-10 h-10 bg-[#E6E6FA]/60 rotate-45 animate-spin delay-500" style={{animationDuration: '3s'}}></div>
                <div className="absolute bottom-32 right-12 w-12 h-12 bg-[#E6E6FA]/60 rotate-12 animate-bounce delay-700"></div>
                <div className="absolute top-60 right-16 w-14 h-14 bg-[#E6E6FA]/60 rotate-30 animate-spin delay-400 hexagon" style={{animationDuration: '4s'}}></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <Header width={86} />
                <TitleText title="Blog" text="Latest news, tips, and stories from our team." />

                {/* Filter buttons */}
                <div className="rounded-full bg-grid-white flex justify-center items-center gap-4 p-2 w-fit mx-auto mb-12">
                    <button
                        className={`px-8 py-3 rounded-full cursor-pointer transition-all duration-300 ${
                            activeButton === 'all'
                                ? 'bg-primary text-white shadow-lg'
                                : 'text-primary hover:bg-primary hover:text-white hover:shadow-md'
                        }`}
                        onClick={() => setActiveButton('all')}
                    >
                        All
                    </button>
                    <button
                        className={`px-8 py-3 rounded-full cursor-pointer transition-all duration-300 ${
                            activeButton === 'ui-ux'
                                ? 'bg-primary text-white shadow-lg'
                                : 'text-primary hover:bg-primary hover:text-white hover:shadow-md'
                        }`}
                        onClick={() => setActiveButton('ui-ux')}
                    >
                        UI/UX
                    </button>
                    <button
                        className={`px-8 py-3 rounded-full cursor-pointer transition-all duration-300 ${
                            activeButton === 'programming'
                                ? 'bg-primary text-white shadow-lg'
                                : 'text-primary hover:bg-primary hover:text-white hover:shadow-md'
                        }`}
                        onClick={() => setActiveButton('programming')}
                    >
                        Programming
                    </button>
                    <button
                        className={`px-8 py-3 rounded-full cursor-pointer transition-all duration-300 ${
                            activeButton === 'wordpress'
                                ? 'bg-primary text-white shadow-lg'
                                : 'text-primary hover:bg-primary hover:text-white hover:shadow-md'
                        }`}
                        onClick={() => setActiveButton('wordpress')}
                    >
                        Wordpress
                    </button>
                    <button
                        className={`px-8 py-3 rounded-full cursor-pointer transition-all duration-300 ${
                            activeButton === 'graphic-design'
                                ? 'bg-primary text-white shadow-lg'
                                : 'text-primary hover:bg-primary hover:text-white hover:shadow-md'
                        }`}
                        onClick={() => setActiveButton('graphic-design')}
                    >
                        Graphic Design
                    </button>
                </div>

                {/* Blog Cards Grid - First row: 2 cards, Other rows: 3 cards */}
                <div className="w-[86%] mx-auto">
                    {/* First row: 2 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {currentPosts.slice(0, 2).map((post, index) => (
                            <BlogCard key={index} post={post} colorFirst="#F9F8F8" colorSecond="#F9F8F8" />
                        ))}
                    </div>

                    {/* Remaining rows: 3 cards per row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentPosts.slice(2).map((post, index) => (
                            <BlogCard key={`remaining-${index}`} post={post} colorFirst="#F9F8F8" colorSecond="#F9F8F8" />
                        ))}
                    </div>
                </div>

                {/* Beautiful Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-3 mt-16 mb-12">
                        {/* Previous Button */}
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className={`group relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-500 transform ${
                                currentPage === 1
                                    ? 'bg-gray-100 text-gray-300 cursor-not-allowed scale-95'
                                    : 'bg-gradient-to-r from-white to-gray-50 text-primary hover:from-primary hover:to-primary hover:text-white hover:scale-105 shadow-lg hover:shadow-2xl border-2 border-primary/20 hover:border-primary'
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <FaChevronLeft className={`w-4 h-4 transition-transform duration-300 ${currentPage === 1 ? '' : 'group-hover:-translate-x-1'}`} />
                                <span className="hidden sm:inline">Previous</span>
                            </div>
                            {/* Glow effect */}
                            {currentPage !== 1 && (
                                <div className="absolute inset-0 bg-primary/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                            )}
                        </button>

                        {/* Page Numbers */}
                        <div className="flex gap-2 bg-white/60 backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/50">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`relative px-5 py-3 rounded-full font-bold text-sm transition-all duration-500 transform ${
                                        currentPage === page
                                            ? 'bg-gradient-to-r from-primary to-primary text-white scale-110 shadow-xl'
                                            : 'bg-transparent text-primary hover:bg-primary hover:text-white hover:scale-105 shadow-md hover:shadow-lg'
                                    }`}
                                >
                                    {page}
                                    {/* Active indicator */}
                                    {currentPage === page && (
                                        <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-20"></div>
                                    )}
                                    {/* Hover effect */}
                                    <div className="absolute inset-0 bg-primary/20 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className={`group relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-500 transform ${
                                currentPage === totalPages
                                    ? 'bg-gray-100 text-gray-300 cursor-not-allowed scale-95'
                                    : 'bg-gradient-to-r from-white to-gray-50 text-primary hover:from-primary hover:to-primary hover:text-white hover:scale-105 shadow-lg hover:shadow-2xl border-2 border-primary/20 hover:border-primary'
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <span className="hidden sm:inline">Next</span>
                                <FaChevronRight className={`w-4 h-4 transition-transform duration-300 ${currentPage === totalPages ? '' : 'group-hover:translate-x-1'}`} />
                            </div>
                            {/* Glow effect */}
                            {currentPage !== totalPages && (
                                <div className="absolute inset-0 bg-primary/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                            )}
                        </button>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    )
}

export default BlogComponent