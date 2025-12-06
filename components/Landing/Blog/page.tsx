import TitleText from '@/share/TitleText'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

const blogPosts = [
    {
        title: 'What is ui design?',
        description: 'User interface design or user interface engineering is the design of user interfaces for machines and software...',
        image: '/assets/b1.png',
        link: '/blog1',
    },
    {
        title: 'What is ui design?',
        description: 'User interface design or user interface engineering is the design of user interfaces for machines and software...',
        image: '/assets/b2.png',
        link: '/blog2',
    },
    {
        title: 'What is ui design?',
        description: 'User interface design or user interface engineering is the design of user interfaces for machines and software...',
        image: '/assets/b3.png',
        link: '/blog3',
    },
    {
        title: 'What is ui design?',
        description: 'User interface design or user interface engineering is the design of user interfaces for machines and software...',
        image: '/assets/b4.png',
        link: '/blog4',
    }
]

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => {
    return (
        <div className="relative rounded-2xl overflow-hidden bg-white">
            {/* Notch cutout at top right */}
            <div className={`absolute top-0 right-0 w-16 h-16 rounded-bl-[28px] ${post === blogPosts[2] || post === blogPosts[3]
                ? 'bg-[#D9D8F7]'
                : 'bg-[#E5E5F7]'
                }`} />

            {/* Arrow link button */}
            <Link
                href={post.link}
                className="absolute top-1 right-1 w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-sm hover:bg-bg-hover hover:scale-105 duration-500 transition-colors z-10"
            >
                <FiArrowUpRight className="w-5 h-5 text-white" />
            </Link>

            {/* Content */}
            <div className="p-5 pr-16">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{post.description}</p>
            </div>

            {/* Image */}
            <div className="px-3 pb-3">
                <div className="relative w-full h-48 rounded-xl overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

const Blog = () => {
    return (
        <div className="w-screen relative left-1/2 -translate-x-1/2 text-center py-16" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(125, 127, 244, 0.1) 15%, rgba(125, 127, 244, 0.2) 30%, rgba(125, 127, 244, 0.3) 45%, rgba(125, 127, 244, 0.3) 55%, rgba(125, 127, 244, 0.2) 70%, rgba(125, 127, 244, 0.1) 85%, transparent 100%)' }}>
            {/* title text */}
            <div className="max-w-7xl mx-auto px-4">
                <TitleText title="Blog" text="lorem lorem lorem lorem lorem lorem lorem lorem " />

                {/* Blog Grid - asymmetric rows */}
                <div className="flex flex-col gap-6 mt-10 text-left">
                    {/* Row 1: narrow-wide */}
                    <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-6">
                        <BlogCard post={blogPosts[0]} />
                        <BlogCard post={blogPosts[1]} />
                    </div>
                    {/* Row 2: wide-narrow */}
                    <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-6">
                        <BlogCard post={blogPosts[2]} />
                        <BlogCard post={blogPosts[3]} />
                    </div>
                </div>
            </div>
            <div className="flex justify-end mt-10 w-[86%] mx-auto">
                <button className="text-black flex items-center gap-2 px-6 py-2 rounded-full cursor-pointer hover:text-primary transition-all duration-300 text-sm">
                    <p>See More</p>
                    <p><FaArrowRight className="text-sm -rotate-45" /></p>
                </button>
            </div>
        </div>
    )
}

export default Blog;