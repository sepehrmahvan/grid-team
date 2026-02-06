'use client'

import TitleText from '@/share/TitleText'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { useState } from 'react'

const tabs = [
    'General',
    'Our Process',
    'Design & UX',
    'Technology',
    'Timeline',
    'Pricing',
    'Maintenance',
    'Security',
    'Collaboration',
    'Ownership & IP',
]

type FAQItem = {
    id: number
    question: string
    answer: string
}

const faqByTab: Record<string, FAQItem[]> = {
    General: [
        {
            id: 1,
            question: 'What type of digital products do you build?',
            answer:
                'We design and develop web and mobile applications, SaaS platforms, internal dashboards and marketing websites tailored to your business goals.',
        },
        {
            id: 2,
            question: 'Do you work with early‑stage ideas or only mature products?',
            answer:
                'We work with both. We can help you validate a new idea with an MVP, or scale and improve an existing product that is already in the market.',
        },
        {
            id: 3,
            question: 'Can you join an existing team and work on an ongoing product?',
            answer:
                'Yes. We often plug into existing teams, clean up the codebase, add new features and help establish better processes and architecture.',
        },
    ],
    'Our Process': [
        {
            id: 1,
            question: 'How does a typical project with your team start and progress?',
            answer:
                'We start with a discovery workshop, define the scope and priorities, create a roadmap, then move into design, implementation, testing and launch.',
        },
        {
            id: 2,
            question: 'Can you work in an agile / sprint‑based way?',
            answer:
                'Yes, most of our projects run in 1–2 week sprints with clear goals, demos at the end of each sprint and transparent backlog management.',
        },
        {
            id: 3,
            question: 'How often will I see progress on my product?',
            answer:
                'You get access to a staging environment and weekly or bi‑weekly demos so you can review new features early and give feedback quickly.',
        },
    ],
    'Design & UX': [
        {
            id: 1,
            question: 'Do you handle UX/UI design or should I bring my own designer?',
            answer:
                'We can do end‑to‑end UX/UI: user flows, wireframes, high‑fidelity designs and design systems. We can also collaborate with your in‑house designers.',
        },
        {
            id: 2,
            question: 'How do you make sure the product is easy to use?',
            answer:
                'We focus on simple user flows, consistent components, accessibility and quick user testing sessions to validate key interactions.',
        },
        {
            id: 3,
            question: 'Can you work with an existing brand or design system?',
            answer:
                'Absolutely. We can extend your current brand guidelines and design system, or help you create one if you are starting from scratch.',
        },
    ],
    Technology: [
        {
            id: 1,
            question: 'What technologies do you typically use?',
            answer:
                'We mainly use React, Next.js and TypeScript on the front‑end, with Node.js or serverless back‑ends, and modern tooling like Tailwind, Prisma and PostgreSQL.',
        },
        {
            id: 2,
            question: 'Can you work with my existing tech stack?',
            answer:
                'In most cases yes. We review your current stack and codebase first, then propose how we can integrate without breaking what already works.',
        },
        {
            id: 3,
            question: 'Do you support scalable architectures?',
            answer:
                'We design APIs, databases and front‑end architecture with scalability in mind, using best practices for performance, caching and cloud infrastructure.',
        },
    ],
    Timeline: [
        {
            id: 1,
            question: 'How long does it take to launch an MVP?',
            answer:
                'For a focused MVP with a clear scope, we usually aim for 4–8 weeks from kickoff to first usable version, depending on complexity.',
        },
        {
            id: 2,
            question: 'Can you work with tight deadlines?',
            answer:
                'We can, as long as we adjust the scope realistically. We help you prioritize the smallest set of features that create value and can be shipped safely.',
        },
        {
            id: 3,
            question: 'What impacts the delivery timeline the most?',
            answer:
                'Clarity of requirements, speed of feedback, integration with third‑party services and the number of revisions have the biggest impact on timelines.',
        },
    ],
    Pricing: [
        {
            id: 1,
            question: 'How do you price your projects?',
            answer:
                'Most projects are priced either as a fixed‑scope package or on a monthly retainer for a dedicated team. We choose the model that fits your situation best.',
        },
        {
            id: 2,
            question: 'Is there a minimum engagement size?',
            answer:
                'We usually start from a small discovery or MVP engagement, then extend based on results. This keeps the initial commitment low and transparent.',
        },
        {
            id: 3,
            question: 'What is included in your estimates?',
            answer:
                'Our estimates include design, development, basic QA and project management. Infrastructure costs like cloud hosting are billed directly to you.',
        },
    ],
    Maintenance: [
        {
            id: 1,
            question: 'Do you offer ongoing maintenance after launch?',
            answer:
                'Yes. We can stay on as your product team to handle bug fixes, minor improvements, monitoring and small feature requests.',
        },
        {
            id: 2,
            question: 'Can you take over maintenance of an existing product?',
            answer:
                'We start with a technical audit, fix critical issues, then set up a regular maintenance plan with clear response times and priorities.',
        },
        {
            id: 3,
            question: 'How do you handle updates and refactors over time?',
            answer:
                'We plan refactors in small, low‑risk steps and keep dependencies updated regularly so the codebase stays healthy and easier to extend.',
        },
    ],
    Security: [
        {
            id: 1,
            question: 'How do you approach security for digital products?',
            answer:
                'We follow best practices such as secure authentication, proper access control, encrypted communication and regular dependency checks.',
        },
        {
            id: 2,
            question: 'Can you work with sensitive or regulated data?',
            answer:
                'Yes. We design architectures that respect data‑protection regulations and can work with your legal or compliance teams when needed.',
        },
        {
            id: 3,
            question: 'Do you conduct code reviews and testing for security issues?',
            answer:
                'All code goes through review and automated checks, and for higher‑risk products we can integrate additional security scans or external audits.',
        },
    ],
    Collaboration: [
        {
            id: 1,
            question: 'How will we communicate during the project?',
            answer:
                'We typically use Slack or Teams for day‑to‑day communication, plus regular stand‑ups and review calls to keep everyone aligned.',
        },
        {
            id: 2,
            question: 'Will I have direct access to the developers and designers?',
            answer:
                'Yes. You work directly with the people building your product, not just a project manager, so questions and decisions are handled quickly.',
        },
        {
            id: 3,
            question: 'Can you work in our existing tools and workflows?',
            answer:
                'We are flexible and can adapt to your tools for issue tracking, design and documentation, or set up a lightweight stack if you prefer.',
        },
    ],
    'Ownership & IP': [
        {
            id: 1,
            question: 'Who owns the code and designs when the project is finished?',
            answer:
                'You own the final code, designs and documentation once the project is paid for. We transfer all relevant repositories and files to your accounts.',
        },
        {
            id: 2,
            question: 'Will you reuse our code or designs for other clients?',
            answer:
                'We never reuse your proprietary logic, domain knowledge or visual identity. Only generic internal libraries and tools are shared across projects.',
        },
        {
            id: 3,
            question: 'Can you help us set up our own repositories and infrastructure?',
            answer:
                'Yes. We prefer that everything runs under your organization accounts so you have full control over access, billing and long‑term ownership.',
        },
    ],
}

const FAQ = () => {
    const [activeTab, setActiveTab] = useState<string>('General')
    const [expandedId, setExpandedId] = useState<number | null>(null)

    const items = faqByTab[activeTab] ?? []

    return (
        <div className='w-full sm:w-[90%] md:w-[86%] mx-auto px-4 sm:px-6'>
            <TitleText title="FAQ" text="Frequently Asked Questions" />

            <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col lg:flex-row gap-6 lg:gap-10">
                {/* Left side gradient line + tabs */}
                <div className="flex gap-4 sm:gap-6">
                    {/* Vertical gradient line - hidden on mobile */}
                    <div className="hidden lg:block w-px self-stretch bg-gradient-to-b from-transparent via-[#6F63FF] to-transparent" />

                    {/* Tabs - horizontal scroll on mobile, vertical on desktop */}
                    <div className="lg:w-[220px] w-full lg:w-auto">
                        {/* Mobile: horizontal scrollable tabs */}
                        <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 -mx-4 px-4" style={{ scrollbarWidth: 'thin' }}>
                            {tabs.map((tab) => {
                                const isActive = tab === activeTab
                                return (
                                    <button
                                        key={tab}
                                        type="button"
                                        onClick={() => setActiveTab(tab)}
                                        className={`flex items-center gap-2 py-2 px-4 rounded-full whitespace-nowrap transition-colors ${
                                            isActive 
                                                ? 'text-[#6F63FF] font-semibold bg-[#6F63FF]/10' 
                                                : 'text-[#555555] bg-gray-100 hover:bg-gray-200'
                                        }`}
                                    >
                                        <span
                                            className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                                                isActive ? 'bg-[#6F63FF]' : 'bg-[#9E9E9E]'
                                            }`}
                                        />
                                        <span className="text-xs sm:text-sm">
                                            {tab}
                                        </span>
                                    </button>
                                )
                            })}
                        </div>
                        {/* Desktop: vertical tabs */}
                        <div className="hidden lg:block w-[220px]">
                            {tabs.map((tab) => {
                                const isActive = tab === activeTab

                                return (
                                    <button
                                        key={tab}
                                        type="button"
                                        onClick={() => setActiveTab(tab)}
                                        className={`flex items-center gap-3 py-2 w-full text-left transition-colors ${
                                            isActive ? 'text-[#6F63FF] font-semibold' : 'text-[#555555]'
                                        }`}
                                    >
                                        <span
                                            className={`h-1.5 w-1.5 rounded-full ${
                                                isActive ? 'bg-[#6F63FF]' : 'bg-[#9E9E9E]'
                                            }`}
                                        />
                                        <span className="text-sm md:text-base">
                                            {tab}
                                        </span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Right side accordions for active tab */}
                <div className="flex-1 min-w-0">
                    <div className="space-y-3 sm:space-y-4">
                        {items.map((item) => {
                            const isExpanded = expandedId === item.id

                            return (
                                <div key={item.id}>
                                    <Accordion
                                        disableGutters
                                        square
                                        expanded={isExpanded}
                                        onChange={() =>
                                            setExpandedId(prev => (prev === item.id ? null : item.id))
                                        }
                                        sx={{
                                            boxShadow: 'none',
                                            backgroundColor: 'transparent',
                                            '&:before': { display: 'none' },
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={
                                                <span className="text-[#6F63FF] text-lg sm:text-xl leading-none flex-shrink-0">
                                                    {isExpanded ? '-' : '+'}
                                                </span>
                                            }
                                            sx={{
                                                px: 0,
                                                minHeight: 'auto',
                                                '& .MuiAccordionSummary-content': {
                                                    margin: 0,
                                                    marginRight: '12px',
                                                },
                                            }}
                                        >
                                            <p className="text-xs sm:text-sm md:text-base text-[#4A4A4A] pr-2">
                                                {item.question}
                                            </p>
                                        </AccordionSummary>
                                        <AccordionDetails
                                            sx={{
                                                px: 0,
                                                pt: 1,
                                                pb: 2,
                                            }}
                                        >
                                            <p className="text-xs sm:text-sm text-[#7A7A7A] leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </AccordionDetails>
                                    </Accordion>
                                    <div className="mt-2 sm:mt-3 border-b border-dashed border-[#C4C4C4]" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ