import { useRef, useEffect, useState } from 'react'
import anyEvent from '../../assets/homepage-any-event.jpg'
import classicallyTrained from '../../assets/homepage-classically-trained.jpg'
import noHiddenFees from '../../assets/homepage-no-hidden-fees.png'
import hassleFreeScheduling from '../../assets/homepage-hassle-free-scheduling.jpg'
import logo from '../../assets/logo-transparent-wide.png'
import './styles.css'

export default function HomePage({isMenuOpen, isMobile}) {
    const [currentServiceDisplay, setCurrentServiceDisplay] = useState({
        description: `Click on any of the services to the left for more details.`,
        index: -1,
        feeType: '',
    })
    const [feeModalDisplay, setFeeModalDisplay] = useState(false)
    const [visibilities, setVisibilities] = useState([false, false, false, false])
    const domRefs = [useRef(), useRef(), useRef(), useRef()]
    const divElements = [
        ['AVAILABLE FOR HIRE FOR ANY EVENT', anyEvent],
        ['VERSATILE, CLASSICALLY TRAINED MUSICIANS', classicallyTrained],
        ['TRANSPARENT FEES, NO HIDDEN COSTS', noHiddenFees],
        ['HASSLE-FREE, DIRECT CONTACT WITH MUSICIANS', hassleFreeScheduling]
    ]
    const services = [ // [service, description, fee type]
        ['AUDITIONS, COMPETITIONS, JURIES, & EXAMS', 'Increase your chances of success by hiring our collaborative pianists. They are highly experienced in representing your best musical interests in a high-importance and/or high-stress settings, such as a college audition, state or national level competition, or a music school examinations or jury.', 'flat'],
        ['COMPOSING & ARRANGING', 'Commission a composition with a composer on our team. Our composers are versatile and creative - they can customize it to perfectly fit your vision, in terms of style, instrumentation, duration, theme, and/or atmosphere. Already found the perfect music or song, but not quite the right instrumentation? No problem! Our composers can expertly arrange the original for your desired instrumentation.', 'repertoire'],
        ['FORMAL RECITALS & CONCERTS', 'Need an accompanist for your academic recital or formal concert? We have a vast amount of repertoire under our belts, ready to go at a moment\'s notice. Available for all instruments (piano, strings, woodwinds, brass, percussion, and voice), as well as for conductors and composers.', 'repertoire'],
        ['PRIVATE HOME & MOBILE CONCERTS', 'Love classical piano music, but don\'t really enjoy public concert setting? Bring a professional caliber performance right to your doorstep! Simply pick a concert from our designated menu, and request a date, time, and location. Once confirmed, a pianist from our team will show up at your location at the specified date and time, and will perform the requested concert.', 'flat'],
        ['PRIVATE MUSIC LESSONS', 'Whether you would like private music lessons for your children or for yourself, you will be in good hands with our musicians. We only hire professionally trained, college educated musicians with proven experience and expertise in their field. Currently offering lessons in solo piano, collaborative piano, ear training, and music theory. Suitable for both children and adults of any level.', 'hourly'],
        ['RECORDING SESSIONS', 'Recording an album or in need to send recordings for an audition round? Look no further. Our musicians are highly experienced in being in professional recordings, whether recording live takes of entire selections or individual parts with a click track. Struggling to find a good recording venue? Ask for recommendations!', 'hourly'],
        ['REHEARSALS, LESSONS, & CLASSES', 'Hire a pianist to accompany you at a rehearsal, a lesson with your private instructor, a studio class of all of your private students, or a public masterclass. Both individual one-time sessions and repeating sessions (weekly, biweekly, monthly, etc.) are available.', 'hourly'],
        ['VOCAL & FOREIGN LANGUAGE COACHING', 'Are you a current or an aspiring opera singer who is in need of role study or general coaching? Our coaches offer expertise in a variety of operatic styles, art songs, and diction. Language coaching offered in English, Spanish, Italian, French, German, Russian, Ukrainian, and Korean.', 'hourly'],
        ['WEDDING & PARTY MUSIC', 'We provide fully customized sets of music for any special occasion, from weddings to private home parties. We offer traditional classical tunes, popular songs, and everything in between, whether you need full-pledged performances, intermittent ceremonial musical inserts, or continuous atmospheric background music.', 'repertoire'],
    ]
    const FAQs = [ // [question, answer, tags]
        ['Can you explain the different fee types, with some examples?', `Fee types describe how an event is charged. A ${<span className='font-bold'>flat</span>} fee is a smaller one-time fee that covers a small performance usually with a time limit, such as an audition or a competition. For example, one of our collaborative pianists might charge a flat $50 fee for their performance alongside a student at Solo and Ensemble, regardless of the complexity of the repertoire being performed. A ${<span className='font-bold'>repertoire</span>} fee is a larger, custom-quoted fee that covers a full performance that depends on a variety of factors such as difficulty of the repertoire, duration of the performance, distance traveled, amount of time given to prepare the music, and equipment setup. For example, if a cellist asks one of our pianists to prepare the first movement of Beethoven's Cello Sonata No. 2 ($120) and the entire Elgar Cello Concerto ($175 bulk fee), the total fee charged to the cellist for the pianist to prepare the above repertoire would be $295. An ${<span className='font-bold'>hourly</span>} fee is solely dependent on the duration of the event that would have a designated time frame, such as a rehearsal, lesson, or a class. For example, if one of our musicians who charges $60/hr is asked to be in a recording session for 1.5 hours, the resulting fee would be $90, regardless of the complexity of the repertoire. It is important to remember that each musician has the right to make variations, exceptions, or discounts to these fees as they see fit on a case-by-case basis.`, 'fees'],
        ['']
    ]
    const imgStyle = 'w-[350px] rounded-xl hover:scale-110 duration-500'
    const pStyle = 'text-center text-lg mt-6 hover:text-green-300'
    const contactDivStyle = 'text-center mx-auto py-3 lg:w-1/2 lg:mx-10'
    const aStyle = 'fill-container flex justify-center items-center w-2/3 lg:w-1/2 mx-auto my-5 p-1 lg:p-2 border-stone-800 border rounded-3xl'

    useEffect(() => {
        const observers = domRefs.map((domRef, index) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibilities((prev) => {
                            const newVisibilities = [...prev]
                            newVisibilities[index] = true
                            return newVisibilities
                        })
                    }
                })
            })
            if (domRef.current) observer.observe(domRef.current)
            return observer
        })

        return () => {
            domRefs.forEach((domRef, index) => {
                if (domRef.current) observers[index].unobserve(domRef.current)
            })
        }
    }, [])

    useEffect(() => {
        setCurrentServiceDisplay(prev => ({
            ...prev,
            description: `Click on any of the services ${isMobile ? 'above' : 'to the left'} for more details.`,
        }))
      }, [isMobile])

    return (
        <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} mx-auto w-5/6 font-bodoni`}>
            <h1 className="text-center text-xl lg:text-3xl my-20">Forte & Piano</h1>
            <p className="lg:text-xl lg:leading-loose mx-auto w-5/6">In a need to hire musicians for your special event? On this website, you can customize your music setlist to perfectly match your event - weddings, corporate events, open houses, private parties, formal recitals, and more! And the exact cost of the music is disclosed to you up front. No hassle, no ambiguity. Explore our menu above to explore more about us, our musicians, and our available repertoire.</p>
            <section className="w-full my-10">
                {divElements.map(([tagline, img], index) => 
                    <div key={index} className={`w-full flex flex-col justify-center ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
                        <div className={`fade-in my-6 flex flex-col items-center w-3/4 ${visibilities[index] ? 'visible' : ''}`} ref={domRefs[index]}>
                            <img src={img} className={imgStyle}/>
                            <p className={pStyle}>{tagline}</p>
                        </div>
                    </div>
                )}
            </section>
            <h2 className='text-center text-xl my-6'>OUR SERVICES</h2>
            <section className={`py-2 font-bodoni ${isMobile ? '' : 'flex items-center'}`}>
                <ul className={`flex flex-col p-2 list-disc list-inside text-sm ${isMobile ? 'w-full' : 'w-1/2'}`}>
                    {services.map(([service, description, feeType], index) => 
                        <li key={index} className={`${isMobile ? 'w-full' : 'w-3/4'} mx-auto my-2 hover:cursor-pointer hover:scale-105 duration-500 ${currentServiceDisplay.index === -1 ? 'text-stone-800' : currentServiceDisplay.index === index ? 'text-stone-800' : 'text-stone-300'}`} onClick={() => {
                            setCurrentServiceDisplay({
                                description: description,
                                index: index,
                                feeType: feeType,
                            })
                        }}>{service}</li>
                    )}
                </ul>
                <div className={`${isMobile ? 'w-full' : 'w-1/2'} mx-1 my-10 p-2 border border-stone-800 bg-stone-300 rounded-xl ${currentServiceDisplay.index === -1 ? 'flex justify-center items-center' : ''}`}>
                    {currentServiceDisplay.description}
                    {currentServiceDisplay.index !== -1
                    ? <div className='my-5 flex justify-center items-center relative'>
                        <p>Fee type</p>
                        <p className='border border-stone-800 rounded-full text-[9px] mr-1 px-1 -translate-y-2 hover:bg-amber-300 hover:cursor-pointer' onMouseEnter={() => setFeeModalDisplay(true)} onMouseLeave={() => setFeeModalDisplay(false)}>?</p>
                        <p>: {currentServiceDisplay.feeType}</p>
                        <p className={`${feeModalDisplay ? 'absolute top-3/4 z-50 lg:left-[16.67%] w-full lg:w-3/4 mx-auto text-xs border border-stone-800 p-2 rounded-xl bg-amber-300 leading-5 lg:leading-6' : 'hidden'}`}>
                            Fee types describe how an event is charged. A <span className='font-bold'>flat</span> fee is a small one-time fee that covers a small performance usually with a time limit, such as an audition or a competition. A <span className='font-bold'>repertoire</span> fee is a larger, custom-quoted fee that covers a full performance that depends on a variety of factors such as difficulty of the repertoire, duration of the performance, distance traveled, and equipment setup. An <span className='font-bold'>hourly</span> fee is solely dependent on the duration of the event that would have a designated time frame, such as a rehearsal, lesson, or a class.
                        </p>
                    </div>
                    : ''}
                </div>
            </section>
            <section className="w-[vw-100] py-2 mt-12 font-bodoni flex flex-col">
                <p className='w-full mx-auto text-center my-5 text-xl'>CONTACT US</p>
                <div className='lg:flex'>
                    <div className={contactDivStyle}>
                        <p className="text-xs lg:text-sm">Can't find your desired music or have a custom request?</p>
                        <a href="mailto:forteandpiano702@gmail.com" className={aStyle}>
                            <p className="fill-content text-sm">Email Forte & Piano</p>
                        </a>
                    </div>
                    <div className={contactDivStyle}>
                        <p className="text-xs lg:text-sm">Problems or questions about using this site?</p>
                        <a href="mailto:jaeahnbenton@gmail.com" className={aStyle}>
                            <p className="fill-content text-sm">Email site admin</p>
                        </a>
                    </div>
                </div>
            </section>
            {/* add FAQs */}
            <section className='my-10 flex flex-col items-center justify-center'>
                <img src={logo} alt="logo" />
                <p className='text-xs lg:text-sm'>Copyright &copy; 2025 Forte & Piano. All rights reserved.</p>
            </section>
        </main>
    )
}