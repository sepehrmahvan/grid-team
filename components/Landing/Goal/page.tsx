
import React from 'react'

const Goal = () => {
    return (
        <div className='bg-grid-poster-bg p-4 sm:p-6 lg:p-8 min-h-[350px] h-auto lg:h-[350px] w-full flex justify-center items-center'>
            <div className='w-full lg:w-[86%] mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-4 px-4 sm:px-6'>
                {/* left side */}
                <div className='w-full lg:w-auto text-center lg:text-left'>
                    <p className='text-grid-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight'>
                        High‑impact digital products, designed and built end‑to‑end
                    </p>
                    <p className='text-grid-white text-sm sm:text-base lg:text-lg my-3 sm:my-2 leading-relaxed'>
                        From first sketch to final deploy, our team crafts clean, fast and reliable digital
                        experiences that solve real problems and scale with your business.
                    </p>
                </div>
                {/* right side */}
                <div className='flex flex-col sm:flex-row justify-center lg:justify-evenly items-center gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto'>
                    <div className='w-full sm:w-[140px] md:w-[160px] lg:w-45 h-auto sm:h-45 bg-grid-black rounded-lg relative lg:-top-10 flex flex-col justify-center items-center p-4 sm:p-3'>
                        <img className='p-2 sm:p-3 bg-grid-white rounded-lg w-12 h-12 sm:w-auto sm:h-auto' src="/assets/chart-icon.svg" alt="product metrics" />
                        <p className='text-grid-white text-xs sm:text-sm font-medium mt-2 sm:mt-3 text-center px-2'>
                            Product analytics & UX strategy
                        </p>
                    </div>
                    <div className='w-full sm:w-[140px] md:w-[160px] lg:w-45 h-auto sm:h-45 bg-grid-black rounded-lg relative lg:-bottom-10 flex flex-col justify-center items-center p-4 sm:p-3'>
                        <img className='p-2 sm:p-3 bg-grid-white rounded-lg w-12 h-12 sm:w-auto sm:h-auto' src="/assets/receive-icon.svg" alt="development handoff" />
                        <p className='text-grid-white text-xs sm:text-sm font-medium mt-2 sm:mt-3 text-center px-2'>
                            Design‑to‑dev handoff & implementation
                        </p>
                    </div>
                    <div className='w-full sm:w-[140px] md:w-[160px] lg:w-45 h-auto sm:h-45 bg-grid-black rounded-lg flex flex-col justify-center items-center p-4 sm:p-3'>
                        <img className='p-2 sm:p-3 bg-grid-white rounded-lg w-12 h-12 sm:w-auto sm:h-auto' src="/assets/user-icon.svg" alt="user experience" />
                        <p className='text-grid-white text-xs sm:text-sm font-medium mt-2 sm:mt-3 text-center px-2'>
                            UI systems for consistent experiences
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goal