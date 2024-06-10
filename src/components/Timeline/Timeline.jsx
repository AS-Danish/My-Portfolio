import React, { Fragment, useEffect } from 'react';
import { motion, useAnimation, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Circle = ({ year }) => {
    const { scrollYProgress } = useScroll();
    
    return (
        <div className='flex items-center justify-center rounded-full w-12 h-12 text-white mx-auto'>
            <motion.span
                style={{ opacity: scrollYProgress }}
                className='text-4xl font-bold'
            >
                {year}
            </motion.span>
        </div>
    );
};

const Pillar = () => {
    const { scrollYProgress: completionProgress } = useScroll();
    return (
        <div className='rounded-t-full rounded-b-full w-1 h-full bg-gray-500 mx-auto'>
            <motion.div
                className='origin-top bg-gradient-to-b rounded-t-full rounded-b-full w-1 h-full from-purple-500 to-blue-500 mx-auto'
                style={{ scaleY: completionProgress }}
            />
        </div>
    );
};

const EventCard = ({ heading, subHeading }) => {
    return (
        <div className='bg-background flex flex-col gap-y-2 border-3 border-purple-400 shadow-md rounded-xl p-4'>
            <div className='text-white font-bold text-xl text-justify'>{heading}</div>
            <div className='text-l text-gray-400 text-justify'>{subHeading}</div>
        </div>
    );
};


const AnimatedEventCard = ({ direction, heading, subHeading }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, x: 0 });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
            animate={controls}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className={`flex ${direction === 'left' ? 'justify-end pr-4' : 'justify-start pl-4'}`}
        >
            <EventCard heading={heading} subHeading={subHeading} />
        </motion.div>
    );
};

const Timeline = ({ events }) => {
    return (
        <>
            <div className='text-center items-center justify-center my-10'>
                <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    <span className="underline underline-offset-20 decoration-8 decoration-purple-400 dark:decoration-purple-600">Education</span>
                </h1>
            </div>
            <div className='flex flex-col items-center gap-y-3 w-full my-4'>
                {events.map((event, key) => (
                    <Fragment key={key}>
                        <Circle year={event.year} />
                        <div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center w-full max-w-4xl mx-auto'>
                            {event.direction === 'left' ? (
                                <AnimatedEventCard direction='left' heading={event.heading} subHeading={event.subHeading} />
                            ) : (
                                <div></div>
                            )}
                            <Pillar />
                            {event.direction === 'right' ? (
                                <AnimatedEventCard direction='right' heading={event.heading} subHeading={event.subHeading} />
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </Fragment>
                ))}
                <Circle year={null} /> {/* Add an empty circle at the end */}
            </div>
        </>
    );
};

export default Timeline;
