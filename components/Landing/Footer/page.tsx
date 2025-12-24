import Link from 'next/link'
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
  return (
    <div className="w-screen h-[60vh] mt-[40px] relative left-1/2 -translate-x-1/2 text-center py-8" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(125, 127, 244, 0.1) 15%, rgba(125, 127, 244, 0.2) 30%, rgba(125, 127, 244, 0.3) 45%, rgba(125, 127, 244, 0.3) 55%, rgba(125, 127, 244, 0.2) 70%, rgba(125, 127, 244, 0.1) 85%, transparent 100%)' }}>
        <div className='w-[86%] mx-auto relative'>
           <div className='bg-grid-black rounded-[20px] h-[20vh] w-full flex justify-between items-start py-4 px-[40px]'>
                <div className='flex flex-col justify-start items-start text-white'>
                    <h4 className='font-100'>Call</h4>
                    <h5 className='font-bold'>{contactLinks.call}</h5>
                </div>
                <div className='flex flex-col justify-start items-start text-white'>
                    <h4 className='font-100'>Email</h4>
                    <h5 className='font-bold'>{contactLinks.email}</h5>
                </div>
                <div className='flex flex-col justify-start items-start text-white'>
                    <h4 className='font-100'>Hours of work</h4>
                    <h5 className='font-bold'>{contactLinks.hours}</h5>
                </div>
                <div className='flex items-center gap-2'>
                    <Link className='rounded-full bg-white text-black p-2 text-xl hover:bg-primary hover:text-white transition-all duration-300' href={contactLinks.linkedin}><FaLinkedinIn /></Link>
                    <Link className='rounded-full bg-white text-black p-2 text-xl hover:bg-primary hover:text-white transition-all duration-300' href={contactLinks.instagram}><FaInstagram /></Link>
                    <Link className='rounded-full bg-white text-black p-2 text-xl hover:bg-primary hover:text-white transition-all duration-300' href={contactLinks.twitter}><FaTwitter /></Link>
                    <Link className='rounded-full bg-white text-black p-2 text-xl hover:bg-primary hover:text-white transition-all duration-300' href={contactLinks.facebook}><FaFacebookF /></Link>
                </div>
           </div>
           <div className='bg-white shadow-xl py-8 px-[40px] rounded-[20px] w-full absolute top-[80px] right-0 flex justify-between items-start'>
            <div className='bg-grid-black rounded-lg p-4 flex flex-col justify-start items-start gap-3 w-[23%]'>
                <img className='w-[200px]' src="/assets/logo-footer.png" alt="logo" />
                <p className='text-white font-100 text-xs'>24H: {contactLinks.call}</p>
                <p className='text-white font-100 text-xs'>Email: {contactLinks.email}</p>
                <p className='text-white text-start font-100 text-xs break-words'>
                  To see the portfolio and learn more about the projects,<br />visit Dribbble site.
                </p>
            </div>
            <div className='flex flex-col justify-start items-start gap-2 w-[23%]'>
                <h3 className='text-grid-black font-900 text-lg'>Services</h3>
                <h4 className='text-grid-black font-100 text-sm'>UI/UX Design</h4>
                <h4 className='text-grid-black font-100 text-sm'>Wordpress</h4>
                <h4 className='text-grid-black font-100 text-sm'>Programming</h4>
                <h4 className='text-grid-black font-100 text-sm'>Graphic Design</h4>
                <h4 className='text-grid-black font-100 text-sm'>Blog</h4>
            </div>
            <div className='flex flex-col justify-start items-start gap-2 w-[23%]'>
                <h3 className='text-grid-black font-900 text-lg'>Latest Blog Posts</h3>
                <Link href="/blog" className='text-grid-black font-100 text-sm hover:text-primary transition-all duration-300'>Blog 1</Link>
                <Link href="/blog" className='text-grid-black font-100 text-sm hover:text-primary transition-all duration-300'>Blog 2</Link>
                <Link href="/blog" className='text-grid-black font-100 text-sm hover:text-primary transition-all duration-300'>Blog 3</Link>
                <Link href="/blog" className='text-grid-black font-100 text-sm hover:text-primary transition-all duration-300'>Blog 4</Link>
            </div>
            <div className='flex flex-col justify-start items-start gap-2 w-[23%]' >
                <h3 className='text-grid-black font-900 text-lg'>Shortcut Links</h3>
                <Link href="/" className='text-grid-black font-100 text-sm hover:text-primary transition-all duration-300'>Home</Link>
                <Link href="#OurServices" className='text-grid-black font-100 text-sm hover:text-primary transition-all duration-300'>Services</Link>
                <Link href="#Portfolio" className='text-grid-black font-100 text-sm hover:text-primary transition-all duration-300'>Portfolio</Link>
                <Link href="#PriceList" className='text-grid-black font-100 text-sm hover:text-primary transition-all duration-300'>Price</Link>
                <Link href="#Blog" className='text-grid-black font-100 text-sm hover:text-primary transition-all duration-300'>Blog</Link>
                <Link href="#AboutUs" className='text-grid-black font-100 text-sm hover:text-primary transition-all duration-300'>About Us</Link>
                <Link href="#CallUs" className='text-grid-black font-100 text-sm hover:text-primary transition-all duration-300'>Call Us</Link>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Footer