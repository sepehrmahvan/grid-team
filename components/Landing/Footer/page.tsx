import { TextField } from '@mui/material'
import Link from 'next/link'
import { BiSend } from 'react-icons/bi'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const contactLinks = {
    call: '+98 919096 0683',
    email: 'siminwdnii@yahoo.comm',
    hours: '9 Am-6 Pm',
    linkedin: 'https://www.linkedin.com/in/siminwdnii',
    instagram: 'https://www.instagram.com/siminwdnii',
    twitter: 'https://www.twitter.com/siminwdnii',
    facebook: 'https://www.facebook.com/siminwdnii',
}

const Footer = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('submitted')
    }
  return (
    <div className="w-full mx-auto bg-grid-poster-bg p-4 sm:p-6 lg:p-8 mt-8 sm:mt-10">
        <div className='w-full sm:w-[90%] md:w-[86%] mx-auto px-4 sm:px-6'>
            {/* get newsletter section */}
            <div className='flex flex-col lg:flex-row w-full justify-between items-start lg:items-center gap-6 lg:gap-4'>
                {/* left side */}
                <div className='flex flex-col gap-2 justify-start items-start text-grid-white w-full lg:w-[45%]'>
                    <span className='text-2xl sm:text-3xl md:text-4xl font-bold leading-tight'>Get the Latest News and Updates</span>
                    <p className='text-xs sm:text-sm leading-relaxed'>Subscribe with your email to get our newsletter and latest information</p>
                </div>
                {/* right side */}
                <div className='flex flex-col gap-2 justify-start items-start text-grid-white w-full lg:w-[45%]'>
                    <p className='text-xs sm:text-sm font-light'>Stay Updated with Us</p>
                    <form onSubmit={handleSubmit} className='relative w-full flex justify-between items-center rounded-full'>
                        <TextField size='small' sx={{
                            '& .MuiInputBase-input': {
                                padding: '8px 16px',
                                fontSize: '12px',
                                fontWeight: '400',
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                '@media (min-width: 640px)': {
                                    padding: '10px 20px',
                                    fontSize: '14px',
                                },
                            },
                        }} placeholder='Enter your email' className='w-full' />
                        <button type='submit' className='bg-primary text-white rounded-full p-1.5 sm:p-2 absolute right-1.5 sm:right-2 hover:bg-primary/80 transition-all duration-300 cursor-pointer'><BiSend className='text-base sm:text-lg' /> </button>
                    </form>
                </div>
            </div>
            {/* nav links section */}
            <div className='flex flex-col md:flex-row w-full justify-between items-start mt-8 sm:mt-10 gap-6 md:gap-4'>
                <div className='bg-grid-black p-4 sm:p-5 lg:p-6 rounded-lg w-full md:w-[48%] lg:w-[50%]'>
                    <img src="/assets/logo-h.png" alt="logo" className='w-32 sm:w-40 md:w-48 lg:w-55 h-auto' />
                    <p className='text-grid-white text-xs sm:text-sm my-3 sm:my-4 leading-relaxed'>We develop innovative digital products, from web applications to mobile apps, helping businesses transform their ideas into scalable solutions.</p>
                </div>
                <div className='flex flex-col gap-2 justify-start items-start text-grid-white w-full md:w-[24%] lg:w-[20%]'>
                    <p className='text-base sm:text-lg font-bold'> Quick Links </p>
                    <Link href={"/about-us"} className='text-xs sm:text-sm hover:text-primary transition-colors' >About Us</Link>
                    <Link href={"/contatc-us"} className='text-xs sm:text-sm hover:text-primary transition-colors' >Contact Us</Link>
                    <Link href={"#FAQ"} className='text-xs sm:text-sm hover:text-primary transition-colors' >FAQ</Link>
                </div>
                <div className='flex flex-col gap-2 justify-start items-start text-grid-white w-full md:w-[24%] lg:w-[20%]'>
                    <p className='text-base sm:text-lg font-bold'> Contact Us </p>
                    <p className='text-xs sm:text-sm break-all'>{contactLinks.call}</p>
                    <p className='text-xs sm:text-sm break-all'>{contactLinks.email}</p>
                    <p className='text-xs sm:text-sm'>{contactLinks.hours}</p>
                </div>
            </div>
            {/* social links section */}
            <div className='flex flex-col sm:flex-row w-full justify-between items-center gap-4 sm:gap-0 mt-8 sm:mt-10'>
                <p className='text-xs sm:text-sm text-grid-white text-center sm:text-left'>©2025 Gridteam.com. All rights reserved.</p>
                <div className='flex gap-3 sm:gap-4 justify-center sm:justify-start items-center'>
                    <Link className='text-2xl sm:text-3xl text-grid-white hover:text-primary transition-colors'  href={contactLinks.linkedin}><FaLinkedinIn /></Link>
                    <Link className='text-2xl sm:text-3xl text-grid-white hover:text-primary transition-colors' href={contactLinks.instagram}><FaInstagram /></Link>
                    <Link className='text-2xl sm:text-3xl text-grid-white hover:text-primary transition-colors' href={contactLinks.twitter}><FaTwitter /></Link>
                    <Link className='text-2xl sm:text-3xl text-grid-white hover:text-primary transition-colors' href={contactLinks.facebook}><FaFacebookF /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer