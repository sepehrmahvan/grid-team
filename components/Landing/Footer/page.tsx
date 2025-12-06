import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-screen h-[60vh] mt-[40px] relative left-1/2 -translate-x-1/2 text-center py-8" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(125, 127, 244, 0.1) 15%, rgba(125, 127, 244, 0.2) 30%, rgba(125, 127, 244, 0.3) 45%, rgba(125, 127, 244, 0.3) 55%, rgba(125, 127, 244, 0.2) 70%, rgba(125, 127, 244, 0.1) 85%, transparent 100%)' }}>
        <div className='w-[86%] mx-auto relative'>
           <div className='bg-grid-black rounded-[20px] h-[50vh] w-full flex justify-between items-start p-4'>
                <div className='flex flex-col justify-start items-start text-white'>
                    <h4 className='font-100'>Call</h4>
                    <h5 className='font-bold'>+98 919096 0683</h5>
                </div>
                <div className='flex flex-col justify-start items-start text-white'>
                    <h4 className='font-100'>Email</h4>
                    <h5 className='font-bold'>siminwdnii@yahoo.comm</h5>
                </div>
                <div className='flex flex-col justify-start items-start text-white'>
                    <h4 className='font-100'>Hours of work</h4>
                    <h5 className='font-bold'>9 Am-6 Pm</h5>
                </div>
                <div className='flex items-center gap-2'>
                    <Link className='rounded-full bg-white text-black p-2 text-xl hover:bg-primary hover:text-white transition-all duration-300' href="/"><FaLinkedinIn /></Link>
                    <Link className='rounded-full bg-white text-black p-2 text-xl hover:bg-primary hover:text-white transition-all duration-300' href="/"><FaInstagram /></Link>
                    <Link className='rounded-full bg-white text-black p-2 text-xl hover:bg-primary hover:text-white transition-all duration-300' href="/"><FaTwitter /></Link>
                    <Link className='rounded-full bg-white text-black p-2 text-xl hover:bg-primary hover:text-white transition-all duration-300' href="/"><FaFacebookF /></Link>
                </div>
           </div>
           <div className='bg-white shadow-xl rounded-[20px] h-[50vh] w-full absolute top-[80px] right-0'></div>
        </div>
    </div>
  )
}

export default Footer