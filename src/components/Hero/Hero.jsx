import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

export const Hero = () => {

  const [typeEffect] = useTypewriter({
    words:['React Developer', 'App Developer', 'Software Developer'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40
  })
  return (
    <section className='h-full'>
      <div className='container mx-auto px-32 h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-24'>
          <div className='text-center xl:text-left'>
            <h1 className="py-0 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mb-0">Hi, It's</h1>
            <h1 className='text-[110px] font-extrabold uppercase font-sans mt-0 py-0 text-orange-500 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-600'>Danish</h1>
            <span className='text-4xl font-sans font-bold'>I am a </span><span className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 font-extrabold'>{typeEffect}</span>
          </div>
          <div className='flex flex-col'>

          </div>
          <div><img data-tilt src="../../../assets/images/Myself.png" alt="" /></div>
        </div>
      </div>
    </section>
  )
}
