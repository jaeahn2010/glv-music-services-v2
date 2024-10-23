import { useState } from 'react'
import jae2 from '../../assets/jae-2.jpg'
import jae3 from '../../assets/jae-3.jpg'
import jae4 from '../../assets/jae-4.jpg'
import jae5 from '../../assets/jae-5.jpg'
import jae6 from '../../assets/jae-6.jpg'
import jae7 from '../../assets/jae-7.jpg'
import jae8 from '../../assets/jae-8.jpg'
import jae9 from '../../assets/jae-9.jpg'
import maria2 from '../../assets/maria-2.jpg'
import maria3 from '../../assets/maria-3.jpg'
import maria4 from '../../assets/maria-4.jpg'
import maria5 from '../../assets/maria-5.jpg'
import maria6 from '../../assets/maria-6.jpg'
import maria7 from '../../assets/maria-7.jpg'
import maria8 from '../../assets/maria-8.jpg'
import maria9 from '../../assets/maria-9.jpg'
import jaeMaria1 from '../../assets/jae-maria-1.jpg'

export default function AboutPage({isMenuOpen}) {
    const [carouselIndex, setCarouselIndex] = useState(0)
    const musicPhotos = [
        { src: jaeMaria1, alt: 'Jae & Maria 1' },
        { src: jae2, alt: 'Jae 2' },
        { src: jae3, alt: 'Jae 3' },
        { src: jae4, alt: 'Jae 4' },
        { src: jae5, alt: 'Jae 5' },
        { src: jae6, alt: 'Jae 6' },
        { src: jae7, alt: 'Jae 7' },
        { src: jae8, alt: 'Jae 8' },
        { src: maria2, alt: 'Maria 2' },
        { src: maria3, alt: 'Maria 3' },
        { src: maria4, alt: 'Maria 4' },
        { src: maria5, alt: 'Maria 5' },
        { src: maria6, alt: 'Maria 6' },
        { src: maria7, alt: 'Maria 7' },
        { src: maria8, alt: 'Maria 8' },
    ]

    function handleCarouselIndex(evt) {
        if (evt.target.id === 'left-arrow') {
            carouselIndex === 0 ? setCarouselIndex(musicPhotos.length - 1) : setCarouselIndex(carouselIndex - 1)
        } else {
            carouselIndex === musicPhotos.length - 1 ? setCarouselIndex(0) : setCarouselIndex(carouselIndex + 1)
        }
    }

    return (
        <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} flex flex-col items-center justify-center text-stone-200 font-poppins`}>
            <h1 className="text-xl text-center my-10 lg:text-3xl">About the Greater Las Vegas Music Services</h1>
            <article className='relative w-11/12 lg:w-1/2 mx-auto lg:text-xl'>
                <img className='rounded-xl mr-2 my-1 w-1/2 lg:w-1/3 float-left' src={maria9} alt="maria-headshot" />
                <p>The <span className="font-bold">Greater Las Vegas Music Services (GLVMS)</span> is an all-encompassing music business owned by a husband-and-wife team of classically trained pianists: <span className='font-bold'>Jae Ahn-Benton</span> and <span className='font-bold'>Maria Kolesnyk</span>. Jae (from South Korea) and Maria (from Ukraine) met while studying music in college in Las Vegas, NV. Jae had started his music business in 2010, mainly focusing on collaboration with opera singers, composing/arranging, and providing music for weddings. Maria had started her music business in 2013, mainly focusing on building her private piano studio, as well as collaboration with violinists, violists, cellists, double bassists, flutists, and trumpeters.</p>
                <img className='rounded-xl ml-2 my-1 w-1/2 lg:w-1/3 float-right' src={jae9} alt="jae-headshot"/>
                <p>Jae and Maria got married in 2017 and combined their music businesses into one, many times collaborating with each other. They have collectively served nearly 2,000 individual musical clients, appearing on various stages hundreds of times locally and abroad, encompassing a vast amount of various types of repertoire from popular tunes to movie scores to classical concertos.</p>
                
            </article>
            <div className='w-11/12 lg:w-1/2 mx-auto my-10 flex justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" className='hover:cursor-pointer' id='left-arrow' onClick={handleCarouselIndex}>
                        <polygon points='30,20 20,25 30,30' fill='white'/>
                    </svg>
                </div>
                {musicPhotos.map((photo, index) => (
                    <div key={index}>
                        <img src={photo.src} alt={photo.alt} className={`${index !== carouselIndex ? 'hidden' : ''} mx-auto rounded-xl`}/>
                    </div>
                ))}
                <div className='flex justify-center items-center'>
                    <svg width="50" height="50" className='hover:cursor-pointer' id='right-arrow' onClick={handleCarouselIndex}>
                        <polygon points='20,20 30,25 20,30' fill='white'/>
                    </svg>
                </div>
            </div>
        </main>
    )
}