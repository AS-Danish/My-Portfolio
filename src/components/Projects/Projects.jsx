import React from 'react'

const Projects = () => {
    const Proj = [
        { image:'', tags: '', heading: '', date: '', description: '' }
    ];
    return (
        <>
            <div className='bg-secondary p-10 mx-auto'>
                <h1 className='text-6xl text-center font-bold p-10 pt-20 py-0'>Projects</h1>
                <p className='text-xl text-center p-10 py-5 mb-4 text-gray-400'>I have worked on a wide range of projects from Web Apps to Android Apps. <br />Here are some of my projects</p>



                <div className='flex flex-wrap text-center items-center justify-around mb-10'>



                    <div
                        className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-card bg-clip-border text-gray-300 shadow-xl shadow-black mb-16">
                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-48">
                            <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                        </div>
                        <div className='flex flex-wrap p-4 py-1 mt-4 mr-4'>
                            <span class="bg-purple-100 text-purple-800 text-xs font-regular me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300 mb-4">Purple</span>
                        </div>
                        <div className="p-6 pt-1 text-left">
                            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-gray-300">
                                UI/UX Review Check
                            </h4>
                            <p className="block mt-3 font-sans text-sm antialiased font-normal leading-relaxed text-gray-400">
                                Apr 2023 - May 2024
                            </p>
                            <p className="block mt-3 font-sans text-lg antialiased font-normal leading-relaxed text-gray-400">
                                Because it&apos;s about motivating the doers. Because I&apos;m here to
                                follow my dreams and inspire others.
                            </p>
                        </div>
                        <div className="flex items-center justify-between p-6 pt-2">
                            <div className="flex items-center -space-x-3">
                                <img alt="natali craig"
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                                    className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
                                <img alt="Tania Andrew"
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                                    className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
                            </div>
                        </div>
                    </div>

                    

                </div>





            </div>
        </>
    )
}

export default Projects