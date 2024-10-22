import { useState } from 'react'
import placeholder from '../../assets/musicians-placeholder.jpeg'
import jaeHeadshot from '../../assets/jae-9.jpg'
import mariaHeadshot from '../../assets/maria-9.jpg'

export default function Card({ musician, getFilteredData, updateDetails, loginStatus }) {
    const [showDetails, setShowDetails] = useState(false)
    let instruments = ''
    for (let instrument of musician.instruments) {
        if (musician.instruments.indexOf(instrument) === musician.instruments.length - 1) {
            instruments += instrument
        } else {
            instruments += `${instrument}, `
        }
    }

    let headshot, bio
    switch(musician.lastName) {
        case 'Ahn-Benton':
            headshot = jaeHeadshot
            bio = 'Jae Ahn-Benton, born in South Korea, first studied piano at the age of 5. He continued his studies with Roger Bushell in Las Vegas, NV, where he started to participate in various competitions and performances, such as MTNA and Henderson Symphony Orchestra Young Artists Competition. He continued studying piano in college with Dr. Mykola Suk at UNLV, performing Rachmaninov’s Rhapsody on a Theme by Paganini with their orchestra. As a solo pianist, Jae has given concerts for various causes locally, including benefit concerts for family members, as well as nonprofit organizations. As a collaborative pianist, Jae has serviced over 900 individual music clients since 2010, both locally and abroad. Since 2014, he has been working as a staff pianist at the Institute for Young Dramatic Voices, a program founded by renowned dramatic mezzo-soprano Dolora Zajick. As a self-taught composer and arranger, Jae has written nearly 100 original compositions and more than 30 arrangements. He has recently premiered his own "Sonata in F minor for Cello and Piano”, Op.86 with cellist Jeremy Russo, and “Variations on a Theme by Maykapar, Op. 96” with his wife, pianist Maria Kolesnyk.'
            break
        case 'Kolesnyk':
            headshot = mariaHeadshot
            bio = 'Maria Kolesnyk is a Ukrainian-born pianist who began her piano studies at age 5. During her years in Ukraine, Maria collaborated with various orchestras to perform concertos and symphonic works by Mozart, Liszt, and Turina. In 2013, she moved to the United States to study under the guidance of Dr. Mykola Suk at the University of Nevada, Las Vegas (UNLV).  During her undergraduate years, Maria participated in numerous competitions and performances. She was awarded scholarships to attend Vianden Music Festival and School in Luxembourg and the International Keyboard Institute & Festival in New York. While participating in many masterclasses over the years, she worked with internationally renowned musicians such as Jerome Rose, Jerome Lowenthal, Lang Lang, as well as collaborating with a flutist in a masterclass with Sir James Galway. Maria has also been featured as a soloist with different orchestras, performing Gershwin\'s Rhapsody in Blue with the Henderson Symphony Orchestra and Rachmaninov\'s Piano Concerto No. 3 with the Academic Symphonic Orchestra of Chernihiv (Ukraine), as well as the UNLV Symphony Orchestra. She has also been invited to give solo recitals in numerous venues in Las Vegas, as well as San Juan, Puerto Rico and Kyiv, Ukraine. Currently, Maria works as a piano instructor and collaborative pianist at the Nevada School of The Arts in Las Vegas. She is also an active freelance participant in the music community of Las Vegas, working closely with many private violin, cello, flute studios and local opera companies as an accompanist, as well as maintaining a private studio designed for students of varying ages, levels, backgrounds, and goals.'
            break
        default:
            headshot = placeholder
            bio = ''
            break
    }

    return (
        <figure className={`relative my-12 w-full lg:w-1/2 min-h-[75vh] mx-auto p-2 text-stone-400 border-2 border-stone-200 rounded-xl bg-stone-700 font-poppins flex justify-center items-center`}>
            <div className={`h-[90%] ${showDetails ? 'hidden' : 'block'}`}>
                <img src={headshot} className="rounded-xl mx-auto lg:w-1/2"/>
                <figcaption className="p-2 w-full text-stone-200 flex flex-col items-center justify-center">
                    <h1 className="mt-2 font-bold text-center">{`${musician.firstName} ${musician.lastName}`}</h1>
                    <p className='text-center'>{instruments}</p>
                    <button onClick={() => setShowDetails(true)} className='border border-stone-200 text-stone-200 p-2 rounded-xl w-1/2 mx-auto my-5 hover:bg-amber-400'>BIOGRAPHY</button>
                </figcaption>
            </div>
            <div className={`overflow-y-auto text-sm p-2 flex flex-col justify-center items-center ${showDetails ? 'block' : 'hidden'}`}>
                <p>{bio}</p>
                <button onClick={() => setShowDetails(false)} className='border border-stone-200 text-stone-200 p-2 rounded-xl w-1/2 mx-auto my-5 hover:bg-amber-400'>CLOSE</button>
            </div>  
        </figure>
    )
}