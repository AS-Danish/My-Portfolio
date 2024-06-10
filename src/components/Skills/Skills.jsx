import React from 'react';
import htmlIcon from '../../assets/icons/html.png';
import cssIcon from '../../assets/icons/css.png';
import jsIcon from '../../assets/icons/js.png';
import angularIcon from '../../assets/icons/angular.png'
import expressJsIcon from '../../assets/icons/expressjs.png'
import figmaIcon from '../../assets/icons/figma.png'
import firebaseIcon from '../../assets/icons/firebase.png'
import javaIcon from '../../assets/icons/java.png'
import reactIcon from '../../assets/icons/react.png'
import pythonIcon from '../../assets/icons/python.png'
import tailwindIcon from '../../assets/icons/tailwind.png'
import mongodbIcon from '../../assets/icons/mongoDB.svg'
import nodeJsIcon from '../../assets/icons/nodejs.png'
import mysqlIcon from '../../assets/icons/mySql.png'
import backVideo from '../../assets/video/skillsBG.mp4'
import Waves from '../../assets/waves/wavesOpacity.svg'

const Skills = () => {
    const skillsImg = [
        { src: htmlIcon, alt: 'HTML' },
        { src: cssIcon, alt: 'CSS' },
        { src: jsIcon, alt: 'JavaScript' },
        { src: angularIcon, alt: 'Angular' },
        { src: figmaIcon, alt: 'Figma' },
        { src: firebaseIcon, alt: 'Firebase' },
        { src: reactIcon, alt: 'React' },
        { src: pythonIcon, alt: 'Python' },
        { src: tailwindIcon, alt: 'Tailwind CSS' },
        { src: mongodbIcon, alt: 'MongoDB' },
        { src: javaIcon, alt: 'Java' },
        { src: nodeJsIcon, alt: 'NodeJS' }
    ];

    const frontEndSkills = [
        { src: htmlIcon, alt: 'HTML' },
        { src: cssIcon, alt: 'CSS' },
        { src: jsIcon, alt: 'JS' },
        { src: reactIcon, alt: 'React' },
        { src: tailwindIcon, alt: 'Tailwind' },
        { src: figmaIcon, alt: 'Figma' },
        { src: pythonIcon, alt: 'Python' },
        { src: angularIcon, alt: 'Angular' }
    ];

    const backEndSkills = [
        { src: nodeJsIcon, alt: 'NodeJs' },
        { src: mongodbIcon, alt: 'MongoDB' },
        { src: firebaseIcon, alt: 'Firebase' },
        { src: mysqlIcon, alt: 'mySQL' },
        { src: angularIcon, alt: 'AngularJS' },
    ];

    const skills = [
        { src: expressJsIcon, alt: 'ExpressJS' },
    ];

    return (

        <>
            <svg className='absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#060417" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,133.3C384,117,480,75,576,53.3C672,32,768,32,864,64C960,96,1056,160,1152,202.7C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

            <div className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'>
                <h1 className='text-6xl mb-4 font-extrabold'>Skills</h1>
                <p className='text-gray-400 text-xl mx-20 px-20 text-center mb-6 flex flex-wrap'>I use cutting-edge technologies to create practical applications that solve real-life problems. Explore my portfolio to see modern tech in action</p>
                <div className="p-5 flex flex-row justify-around wt-5 gap-5 items-center flex-wrap">
                    {skillsImg.map((img, index) => (
                        <img key={index} src={img.src} alt={img.alt} className="w-auto h-14" />
                    ))}
                </div>
                <div className="p-5 flex flex-row justify-around wt-5 gap-5 items-center flex-wrap">
                    {frontEndSkills.map((img, index) => (
                        <img key={index} src={img.src} alt={img.alt} className="w-auto h-14" />
                    ))}
                </div>
                <div className="p-5 flex flex-row justify-around wt-5 gap-5 items-center flex-wrap">
                    {backEndSkills.map((img, index) => (
                        <img key={index} src={img.src} alt={img.alt} className="w-auto h-14" />
                    ))}
                </div>
                <div className="p-5 flex flex-row justify-around wt-5 gap-5 items-center flex-wrap">
                    {skills.map((img, index) => (
                        <img key={index} src={img.src} alt={img.alt} className="w-auto h-14" />
                    ))}
                </div>

                <div className='w-full h-full absolute'>
                    <div className='w-full h-full z-[-10] opacity-10 absolute flex items-center justify-center bg-cover'>
                        <video
                            className='w-full h-auto'
                            preload='false'
                            playsInline
                            loop
                            muted
                            autoPlay
                            src={backVideo} />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Skills;
