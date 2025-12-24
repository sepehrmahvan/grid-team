import TitleText from '@/share/TitleText'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import BlogCard, { blogPosts } from './BlogCard'

const Blog = () => {
    return (
        <div className="w-screen relative left-1/2 -translate-x-1/2 text-center py-8" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(125, 127, 244, 0.1) 15%, rgba(125, 127, 244, 0.2) 30%, rgba(125, 127, 244, 0.3) 45%, rgba(125, 127, 244, 0.3) 55%, rgba(125, 127, 244, 0.2) 70%, rgba(125, 127, 244, 0.1) 85%, transparent 100%)' }}>
            {/* title text */}
            <div className="max-w-7xl mx-auto px-4">
                <TitleText title="Blog" text="lorem lorem lorem lorem lorem lorem lorem lorem " />

                {/* Blog Grid - asymmetric rows */}
                <div className="flex flex-col gap-6 mt-10 text-left">
                    {/* Row 1: narrow-wide */}
                    <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-6">
                        <BlogCard post={blogPosts[0]} colorFirst="#D9D8F7" colorSecond="#E5E5F7" />
                        <BlogCard post={blogPosts[1]} colorFirst="#D9D8F7" colorSecond="#E5E5F7" />
                    </div>
                    {/* Row 2: wide-narrow */}
                    <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-6">
                        <BlogCard post={blogPosts[2]} colorFirst="#D9D8F7" colorSecond="#E5E5F7" />
                        <BlogCard post={blogPosts[3]} colorFirst="#D9D8F7" colorSecond="#E5E5F7" />
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