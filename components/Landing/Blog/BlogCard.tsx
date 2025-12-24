import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

interface BlogPost {
    title: string
    description: string
    image: string
    link: string
}

interface BlogCardProps {
    post: BlogPost
    colorFirst?: string
    colorSecond?: string
}

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

const BlogCard = ({ post, colorFirst, colorSecond }: BlogCardProps) => {
    // Define color classes based on props or defaults
    const getNotchColor = () => {
        if (colorFirst && colorSecond) {
            return post === blogPosts[2] || post === blogPosts[3] ? colorFirst : colorSecond;
        }
        return post === blogPosts[2] || post === blogPosts[3] ? '#D9D8F7' : '#E5E5F7';
    };

    const notchColor = getNotchColor();

    return (
        <div className="relative rounded-2xl overflow-hidden bg-white">
            {/* Notch cutout at top right */}
            <div
                className="absolute top-0 right-0 w-16 h-16 rounded-bl-[28px]"
                style={{ backgroundColor: notchColor }}
            />

            {/* Div attached to left of notch cutout */}
            <div
                className="absolute top-0 right-16 w-16 h-16 rounded-bl-full "
                style={{ backgroundColor: notchColor }}
            >
                <div className='w-full h-full bg-white rounded-tr-2xl'></div>
            </div>

            {/* Div below the notch cutout */}
            <div
                className="absolute top-16 right-0 w-16 h-16 rounded-bl-full"
                style={{ backgroundColor: notchColor }}
            >
                <div className='w-full h-full bg-white rounded-tr-2xl'></div>
            </div>

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
                <p className="text-sm text-gray-500 line-clamp-2 mt-4">{post.description}</p>
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

export default BlogCard
export { blogPosts }
export type { BlogPost }
