import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faSquareInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faDownload } from '@fortawesome/free-solid-svg-icons'


export const Hero = () => {

  const [typeEffect] = useTypewriter({
    words: ['React Developer', 'App Developer', 'Software Developer'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  })
  return (
    <section className='h-full'>
      <div className='container mx-auto px-32 h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-2 xl:pb-30'>
          <div className='pb-20 text-center xl:text-left'>
            <h1 className="py-0 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mb-0">Hi, It's</h1>
            <h1 className='text-[110px] font-extrabold uppercase font-sans mt-0 py-0 text-orange-500 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-600'>Danish</h1>
            <span className='text-4xl font-sans font-bold'>I am a </span><span className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 font-extrabold'>{typeEffect}</span>
            <div>
              <FontAwesomeIcon className='text-4xl m-5 cursor-pointer hover:text-orange-600' icon={faGithub} />
              <FontAwesomeIcon className='text-4xl m-5 cursor-pointer hover:text-orange-600' icon={faSquareInstagram} />
              <FontAwesomeIcon className='text-4xl m-5 cursor-pointer hover:text-orange-600' icon={faLinkedin} />
              <FontAwesomeIcon className='text-4xl m-5 cursor-pointer hover:text-orange-600' icon={faYoutube} />
            </div>
            <div className='ml-5 mt-2'>
              <button class="uppercase mx-auto relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-24 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download CV<FontAwesomeIcon className='ml-1' icon={faDownload} />
                </span>
              </button>
            </div>
          </div>
          <div className='flex flex-col'>

          </div>
          <div><img src="../../../assets/images/mainIconsdark.svg" alt="" /></div>
        </div>
      </div>
    </section>
  )
}
