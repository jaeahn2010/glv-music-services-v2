import { useRef, useEffect, useState } from 'react'
import anyEvent from '../../assets/homepage-any-event.jpg'
import classicallyTrained from '../../assets/homepage-classically-trained.jpg'
import noHiddenFees from '../../assets/homepage-no-hidden-fees.png'
import hassleFreeScheduling from '../../assets/homepage-hassle-free-scheduling.jpg'
import './styles.css'

export default function HomePage({isMenuOpen}) {
    const [visibilities, setVisibilities] = useState([false, false, false, false])
    const domRefs = [useRef(), useRef(), useRef(), useRef()]
    let divElements = [
        ['AVAILABLE FOR HIRE FOR ANY EVENT', anyEvent],
        ['VERSATILE, CLASSICALLY TRAINED MUSICIANS', classicallyTrained],
        ['TRANSPARENT FEES, NO HIDDEN COSTS', noHiddenFees],
        ['HASSLE-FREE, DIRECT SCHEDULING', hassleFreeScheduling]
    ]
    let imgStyle = 'w-[350px] rounded-xl hover:scale-110'
    let pStyle = 'text-center text-lg mt-6'
    let contactDivStyle = 'text-center mx-auto py-3 border-t border-stone-200'
    let aStyle = 'fill-container flex justify-center items-center w-2/3 mx-auto my-5 p-2 border-stone-200 border rounded-3xl'

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

    return (
        <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} mx-auto w-5/6 font-poppins`}>
            <h1 className="text-center text-xl my-5">Welcome to the Greater Las Vegas Music Services (GLVMS)!</h1>
            <p className="tex mx-auto w-11/12">In a need to hire musicians for your event? On this website, you can customize your music setlist to perfectly match your event - weddings, corporate events, open houses, private parties, formal recitals, and more! And the exact cost of the music is disclosed to you up front. No hassle, no ambiguity. Explore our menu above to explore more about us, our musicians, and our available repertoire.</p>
            <section className="w-full">
                {divElements.map(([tagline, img], index) => 
                    <div key={index} className={`w-full flex flex-col justify-center ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
                        <div className={`fade-in my-6 flex flex-col items-center w-3/4 ${visibilities[index] ? 'visible' : ''}`} ref={domRefs[index]}>
                            <img src={img} className={imgStyle}/>
                            <p className={pStyle}>{tagline}</p>
                        </div>
                    </div>
                )}
            </section>
            <section className="w-[vw-100] py-2 font-poppins flex flex-col">
                <p className='w-full mx-auto text-center my-5 text-xl'>CONTACT US</p>
                <div>
                    <div className={contactDivStyle}>
                        <p className="text-sm">Can't find your desired repertoire or have a custom request? Contact us directly!</p>
                        <a href="mailto:glvmusicservices@gmail.com" className={aStyle}>
                            <p className="fill-content text-sm">Email GLVMS</p>
                        </a>
                    </div>
                    <div className={contactDivStyle}>
                        <p className="text-sm">Problems or questions about using this site? Contact the site admin!</p>
                        <a href="mailto:jaeahn2010@gmail.com" className={aStyle}>
                            <p className="fill-content text-sm">Email site admin</p>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}