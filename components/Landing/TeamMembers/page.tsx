'use client'

import TitleText from '@/share/TitleText'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

type TeamMember = {
    id: number
    name: string
    role: string
    bio: string
    image: string
    social: {
        linkedin?: string
        github?: string
        twitter?: string
        instagram?: string
    }
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Lead Product Designer',
        bio: 'Specializes in creating intuitive user experiences and beautiful interfaces for web and mobile applications.',
        image: '/assets/team-1.png',
        social: {
            linkedin: 'https://linkedin.com',
            github: 'https://github.com',
            twitter: 'https://twitter.com',
        },
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Full Stack Developer',
        bio: 'Expert in building scalable web applications using modern frameworks and cloud technologies.',
        image: '/assets/team-2.png',
        social: {
            linkedin: 'https://linkedin.com',
            github: 'https://github.com',
        },
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        role: 'UX Researcher',
        bio: 'Passionate about understanding user needs and translating insights into actionable design solutions.',
        image: '/assets/team-3.png',
        social: {
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com',
        },
    },
    {
        id: 4,
        name: 'David Kim',
        role: 'Frontend Architect',
        bio: 'Focused on building performant, accessible, and maintainable frontend applications.',
        image: '/assets/team-4.png',
        social: {
            linkedin: 'https://linkedin.com',
            github: 'https://github.com',
            twitter: 'https://twitter.com',
        },
    },
    {
        id: 5,
        name: 'Lisa Anderson',
        role: 'UI Designer',
        bio: 'Creates visually stunning designs that balance aesthetics with functionality and brand identity.',
        image: '/assets/team-5.png',
        social: {
            linkedin: 'https://linkedin.com',
            instagram: 'https://instagram.com',
        },
    },
    {
        id: 6,
        name: 'James Wilson',
        role: 'Backend Engineer',
        bio: 'Designs robust APIs and database architectures that power scalable digital products.',
        image: '/assets/team-6.png',
        social: {
            linkedin: 'https://linkedin.com',
            github: 'https://github.com',
        },
    },
]

const TeamMembers = () => {
    const [failedImages, setFailedImages] = useState<Set<number>>(new Set())

    const getImageSrc = (member: TeamMember) => {
        if (failedImages.has(member.id)) {
            return `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=7D7FF4&color=fff&size=128`
        }
        return member.image
    }

    const handleImageError = (memberId: number) => {
        setFailedImages((prev) => new Set(prev).add(memberId))
    }

    return (
        <section className="mt-[80px] w-[86%] mx-auto">
            <TitleText
                title="Our Team"
                text="Meet the talented individuals who bring your digital product ideas to life"
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                    <div
                        key={member.id}
                        className="group rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    >
                        {/* Profile Image */}
                        <div className="relative w-24 h-24 mx-auto mb-4">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-[#9B8DFF] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors duration-300">
                                <Image
                                    src={getImageSrc(member)}
                                    alt={member.name}
                                    fill
                                    sizes="96px"
                                    className="object-cover"
                                    onError={() => handleImageError(member.id)}
                                    unoptimized={failedImages.has(member.id)}
                                />
                            </div>
                        </div>

                        {/* Name and Role */}
                        <div className="text-center mb-3">
                            <h3 className="text-lg font-bold text-grid-black mb-1">
                                {member.name}
                            </h3>
                            <p className="text-sm text-primary font-medium">
                                {member.role}
                            </p>
                        </div>

                        {/* Bio */}
                        <p className="text-sm text-grid-gray text-center mb-4 leading-relaxed line-clamp-3">
                            {member.bio}
                        </p>

                        {/* Social Links */}
                        <div className="flex justify-center items-center gap-3 pt-4 border-t border-gray-100">
                            {member.social.linkedin && (
                                <a
                                    href={member.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-gray-50 hover:bg-primary flex items-center justify-center text-grid-gray hover:text-white transition-all duration-300 group-hover:scale-110"
                                    aria-label={`${member.name}'s LinkedIn`}
                                >
                                    <FaLinkedinIn className="text-sm" />
                                </a>
                            )}
                            {member.social.github && (
                                <a
                                    href={member.social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-gray-50 hover:bg-primary flex items-center justify-center text-grid-gray hover:text-white transition-all duration-300 group-hover:scale-110"
                                    aria-label={`${member.name}'s GitHub`}
                                >
                                    <FaGithub className="text-sm" />
                                </a>
                            )}
                            {member.social.twitter && (
                                <a
                                    href={member.social.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-gray-50 hover:bg-primary flex items-center justify-center text-grid-gray hover:text-white transition-all duration-300 group-hover:scale-110"
                                    aria-label={`${member.name}'s Twitter`}
                                >
                                    <FaTwitter className="text-sm" />
                                </a>
                            )}
                            {member.social.instagram && (
                                <a
                                    href={member.social.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-gray-50 hover:bg-primary flex items-center justify-center text-grid-gray hover:text-white transition-all duration-300 group-hover:scale-110"
                                    aria-label={`${member.name}'s Instagram`}
                                >
                                    <FaInstagram className="text-sm" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TeamMembers
