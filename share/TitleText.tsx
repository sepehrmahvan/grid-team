'use client'
import React from 'react'

const TitleText = ({title, text}: {title: string, text: string}) => {
  return (
    <div className='w-full text-center my-[40px]'>
        <h2 className='text-4xl font-bold text-grid-black'>{title}</h2>
        <p className='text-grid-light-gray text-sm font-medium mt-3 tracking-widest '>{text}</p>
    </div>
  )
}

export default TitleText