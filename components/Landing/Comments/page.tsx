import TitleText from '@/share/TitleText'
import React from 'react'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'

const topRowComments = [
    {
        id: 1,
        name: 'Alireza Roshanaei',
        company: 'Medatis co',
        comment: 'Hello Medatis company hereby expresses its satisfaction and appreciation for the services provided, including menu design, brochure design, business card design, flag design and website design, which were provided by Mrs. Simin Vahdani in a project-oriented manner during this 2-year period We hope that we can have a useful cooperation with you in future projects.',
        image: '/assets/alireza.png',
    },
    {
        id: 2,
        name: 'Alireza Roshanaei',
        company: 'Medatis co',
        comment: 'Hello Medatis company hereby expresses its satisfaction and appreciation for the services provided, including menu design, brochure design, business card design, flag design and website design, which were provided by Mrs. Simin Vahdani in a project-oriented manner during this 2-year period We hope that we can have a useful cooperation with you in future projects.',
        image: '/assets/alireza.png',
    },
    {
        id: 3,
        name: 'Alireza Roshanaei',
        company: 'Medatis co',
        comment: 'Hello Medatis company hereby expresses its satisfaction and appreciation for the services provided, including menu design, brochure design, business card design, flag design and website design, which were provided by Mrs. Simin Vahdani in a project-oriented manner during this 2-year period We hope that we can have a useful cooperation with you in future projects.',
        image: '/assets/alireza.png',
    },
    {
        id: 4,
        name: 'Alireza Roshanaei',
        company: 'Medatis co',
        comment: 'Hello Medatis company hereby expresses its satisfaction and appreciation for the services provided, including menu design, brochure design, business card design, flag design and website design, which were provided by Mrs. Simin Vahdani in a project-oriented manner during this 2-year period We hope that we can have a useful cooperation with you in future projects.',
        image: '/assets/alireza.png',
    },
]

const bottomRowComments = [
    {
        id: 5,
        name: 'Alireza Roshanaei',
        company: 'Medatis co',
        comment: 'Hello Medatis company hereby expresses its satisfaction and appreciation for the services provided, including menu design, brochure design, business card design, flag design and website design, which were provided by Mrs. Simin Vahdani in a project-oriented manner during this 2-year period We hope that we can have a useful cooperation with you in future projects.',
        image: '/assets/alireza.png',
    },
    {
        id: 6,
        name: 'Alireza Roshanaei',
        company: 'Medatis co',
        comment: 'Hello Medatis company hereby expresses its satisfaction and appreciation for the services provided, including menu design, brochure design, business card design, flag design and website design, which were provided by Mrs. Simin Vahdani in a project-oriented manner during this 2-year period We hope that we can have a useful cooperation with you in future projects.',
        image: '/assets/alireza.png',
    },
    {
        id: 7,
        name: 'Alireza Roshanaei',
        company: 'Medatis co',
        comment: 'Hello Medatis company hereby expresses its satisfaction and appreciation for the services provided, including menu design, brochure design, business card design, flag design and website design, which were provided by Mrs. Simin Vahdani in a project-oriented manner during this 2-year period We hope that we can have a useful cooperation with you in future projects.',
        image: '/assets/alireza.png',
    },
    {
        id: 8,
        name: 'Alireza Roshanaei',
        company: 'Medatis co',
        comment: 'Hello Medatis company hereby expresses its satisfaction and appreciation for the services provided, including menu design, brochure design, business card design, flag design and website design, which were provided by Mrs. Simin Vahdani in a project-oriented manner during this 2-year period We hope that we can have a useful cooperation with you in future projects.',
        image: '/assets/alireza.png',
    },
]

// Comment card component
const CommentCard = ({ comment }: { comment: typeof topRowComments[0] }) => {
    return (
        <div className="bg-white rounded-2xl p-6 w-[420px] shrink-0 shadow-sm border border-gray-100">
            <p className="text-grid-gray text-sm leading-relaxed mb-6">
                {comment.comment}
            </p>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                        <Image
                            src={comment.image}
                            alt={comment.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="text-grid-black font-medium text-base">{comment.name}</h4>
                        <p className="text-primary text-sm">{comment.company}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Comments = () => {
    return (
        <div className='mt-[80px] w-full overflow-hidden'>
            <TitleText title="Customer Opinion" text="lorem lorem lorem lorem lorem lorem lorem" />
            
            {/* Top carousel - scrolling left */}
            <div className="mt-12 overflow-hidden">
                <div className="carousel-track animate-scroll-left flex gap-6" style={{ width: 'fit-content' }}>
                    {/* Original items */}
                    {topRowComments.map((comment) => (
                        <CommentCard key={comment.id} comment={comment} />
                    ))}
                    {/* Duplicated items for seamless loop */}
                    {topRowComments.map((comment) => (
                        <CommentCard key={`dup-${comment.id}`} comment={comment} />
                    ))}
                </div>
            </div>

            {/* Bottom carousel - scrolling right */}
            <div className="mt-6 overflow-hidden mb-12">
                <div className="carousel-track animate-scroll-right flex gap-6" style={{ width: 'fit-content' }}>
                    {/* Original items */}
                    {bottomRowComments.map((comment) => (
                        <CommentCard key={comment.id} comment={comment} />
                    ))}
                    {/* Duplicated items for seamless loop */}
                    {bottomRowComments.map((comment) => (
                        <CommentCard key={`dup-${comment.id}`} comment={comment} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Comments
