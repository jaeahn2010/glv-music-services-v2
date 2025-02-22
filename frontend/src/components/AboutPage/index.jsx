import { useState, useEffect } from 'react'
import jaeHead from '../../assets/jae-head.jpg'
import mariaHead from '../../assets/maria-head.jpg'
const musicPhotos = import.meta.glob('../../assets/{duet,jae,maria}-*.{png,jpg,jpeg}')
const imagePaths = []
for (const [path, importFunction] of Object.entries(musicPhotos)) {
    importFunction().then((module) => {
        imagePaths.push(module.default)
    }).catch((err) => {
        console.error('Error importing image:', path, err)
    })
}

export default function AboutPage({isMenuOpen}) {
    const [carouselIndex, setCarouselIndex] = useState(0)
    const [loadedImages, setLoadedImages] = useState([])
    const svgStyle = 'hover:cursor-pointer hover:scale-110 duration-500'

    function handleCarouselIndex(evt) {
        if (evt.currentTarget.id === 'left-arrow') {
            carouselIndex === 0 ? setCarouselIndex(loadedImages.length - 1) : setCarouselIndex(carouselIndex - 1)
        } else {
            carouselIndex === loadedImages.length - 1 ? setCarouselIndex(0) : setCarouselIndex(carouselIndex + 1)
        }
    }

    useEffect(() => {
        const loadImages = async () => {
            const paths = []
            for (const importFunction of Object.values(musicPhotos)) {
                const module = await importFunction()
                paths.push(module.default)
            }
            setLoadedImages(paths)
        }
        loadImages()
    }, [])
    
    return (
        <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} flex flex-col items-center justify-center text-stone-800 font-bodoni`}>
            <h1 className="text-xl text-center my-10 lg:text-3xl">About Us</h1>
            <article className='relative w-11/12 lg:w-1/2 mx-auto lg:text-xl'>
                <img className='rounded-xl mr-5 my-2 w-1/2 lg:w-1/3 float-left' src={mariaHead} alt="maria-headshot" />
                <p className='leading-loose'><span className="font-bold">Forte & Piano</span> is an all-encompassing music business owned by a husband-and-wife team of classically trained pianists: <span className='font-bold'>Jae Ahn-Benton</span> and <span className='font-bold'>Maria Kolesnyk</span>. Jae (from South Korea) and Maria (from Ukraine) met while studying music in college in Las Vegas, NV. Jae had started his music business in 2010, mainly focusing on collaboration with opera singers, composing/arranging, and providing music for weddings. Maria had started her music business in 2013, mainly focusing on building her private piano studio, as well as collaboration with violinists, violists, cellists, double bassists, flutists, and trumpeters.</p>
                <img className='rounded-xl ml-5 my-2 w-1/2 lg:w-1/3 float-right' src={jaeHead} alt="jae-headshot"/>
                <p className='leading-loose'>Jae and Maria got married in 2017 and combined their music businesses into one, many times collaborating with each other. They have collectively served nearly 2,000 individual musical clients, appearing on various stages hundreds of times locally and abroad, encompassing a vast amount of various types of repertoire from popular tunes to movie scores to classical concertos.</p>
            </article>
            <div className='w-11/12 lg:w-2/3 mx-auto my-10 flex justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <svg width="50" height="50" className={svgStyle + ' mr-3'} id='left-arrow' onClick={handleCarouselIndex}>
                        <polygon points='40,15 20,25 40,35 33,25' fill='black'/>
                    </svg>
                </div>
                <div className='h-[50vh] w-[75vw]'>
                    {loadedImages.map((photo, index) => <img key={index} src={photo} className={`${index !== carouselIndex ? 'hidden' : ''} mx-auto rounded-xl h-full w-auto`}/>)}
                </div>
                <div className='flex justify-center items-center'>
                    <svg width="50" height="50" className={svgStyle + ' ml-3'} id='right-arrow' onClick={handleCarouselIndex}>
                        <polygon points='10,15 30,25 10,35 17,25' fill='black'/>
                    </svg>
                </div>
            </div>
        </main>
    )
}