import { useRef, useEffect, useState } from 'react'
import anyEvent from '../../assets/homepage-any-event.jpg'
import classicallyTrained from '../../assets/homepage-classically-trained.jpg'
import noHiddenFees from '../../assets/homepage-no-hidden-fees.png'
import hassleFreeScheduling from '../../assets/homepage-hassle-free-scheduling.jpg'
import './styles.css'

export default function HomePage() {
    const [visibilities, setVisibilities] = useState([false, false, false, false])
    const domRefs = [useRef(), useRef(), useRef(), useRef()]
    let divElements = [
        ['AVAILABLE FOR HIRE FOR ANY EVENT', anyEvent],
        ['VERSATILE, CLASSICALLY TRAINED MUSICIANS', classicallyTrained],
        ['TRANSPARENT FEES, NO HIDDEN COSTS', noHiddenFees],
        ['HASSLE-FREE, DIRECT SCHEDULING', hassleFreeScheduling]
    ]
    let imgStyle = 'w-[350px] rounded-xl hover:scale-110'
    let pStyle = 'text-center text-2xl mt-10'

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
        <main className="mx-auto w-5/6">
            <h1 className="text-center text-4xl my-5">Welcome to the Greater Las Vegas Music Services (GLVMS)!</h1>
            <p className="text-2xl leading-10 mx-auto w-3/4">In a need to hire musicians for your event? On this website, you can customize your music setlist to perfectly match your event - weddings, corporate events, open houses, private parties, formal recitals, and more! And the exact cost of the music is disclosed to you up front. No hassle, no ambiguity. Explore our menu above to explore more about us, our musicians, and our available repertoire.</p>
            <section className="relative h-[150vh]">
                {divElements.map(([tagline, img], index) => 
                    <div
                        key={index}
                        className={`fade-in absolute my-10 flex flex-col items-center w-1/2 ${visibilities[index] ? 'visible' : ''}`}
                        ref={domRefs[index]}
                        style={{top: `${index * 250}px`, left: index % 2 === 0 ? '0' : 'auto', right: index % 2 === 1 ? '0' : 'auto',}}
                    >
                        <img src={img} className={imgStyle}/>
                        <p className={pStyle}>{tagline}</p>
                    </div>
                )}
            </section>
        </main>
    )
}