'use client'

import TitleText from '@/share/TitleText'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { IoChevronDown } from 'react-icons/io5'
import { useState } from 'react'

const faq = [
    {
        id: 1,
        question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answer: 'The best way to learn React is to build projects.',
    },
    {
        id: 2,
        question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answer: 'The best way to learn React is to build projects.',
    },
    {
        id: 3,
        question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answer: 'The best way to learn React is to build projects.',
    },
    {
        id: 4,
        question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answer: 'The best way to learn React is to build projects.',
    },
    {
        id: 5,
        question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answer: 'The best way to learn React is to build projects.',
    },
]

const FAQ = () => {
    const [expanded, setExpanded] = useState<number | false>(false)

    const handleChange = (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <div className='w-full'>
            <TitleText title="FAQ" text="Frequently Asked Questions" />
            <div className="flex flex-col gap-4 mt-8 w-full mx-auto">
                {faq.map((item) => (
                    <Accordion
                        key={item.id}
                        expanded={expanded === item.id}
                        onChange={handleChange(item.id)}
                        sx={{
                            boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
                            borderRadius: '12px !important',
                            overflow: 'hidden',
                            backgroundColor: '#fff',
                            paddingLeft: '20px',
                            borderLeft: '15px solid var(--color-grid-black)',
                            '&:before': {
                                display: 'none',
                            },
                            '&.Mui-expanded': {
                                margin: 0,
                            },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<IoChevronDown className="text-gray-500 text-xl" />}
                            sx={{
                                padding: '0 24px 0 0',
                                '& .MuiAccordionSummary-content': {
                                    margin: '16px 0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                },
                            }}
                        >
                            <span className="text-gray-700 text-base">
                                {item.question}
                            </span>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                padding: '0 24px 20px 40px',
                                color: '#6b7280',
                            }}
                        >
                            {item.answer}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    )
}

export default FAQ