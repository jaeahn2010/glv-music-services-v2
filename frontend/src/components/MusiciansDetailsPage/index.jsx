import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getMusicianById } from '../../../utils/backend'
import placeholder from '../../assets/musicians-placeholder.jpeg'
import jaeHeadshot from '../../assets/jae-head.jpg'
import mariaHeadshot from '../../assets/maria-head.jpg'

export default function MusiciansDetailsPage({isMenuOpen, musicianDetails, loginStatus, userCart, setUserCart}) {
    const [musician, setMusician] = useState({ ...musicianDetails })
    const [bioModal, setBioModal] = useState(false)
    const params = useParams()
    const navigate = useNavigate()
    const btnStyle = 'lg:w-1/3 border border-stone-800 rounded-xl p-2 my-3 mx-auto hover:bg-amber-300 hover:scale-105 duration-500'

    async function getMusicianData() {
        const musicianData = await getMusicianById(params.musicianId)
        setMusician(musicianData)
    }

    useEffect(() => {
        getMusicianData()
    }, [])

    let headshot, bio, specialties
    switch(musician.lastName) {
        case 'Ahn-Benton':
            headshot = jaeHeadshot
            bio = 'Jae Ahn-Benton, born in South Korea, first studied piano at the age of 5. He continued his studies with Roger Bushell in Las Vegas, NV, where he started to participate in various competitions and performances, such as MTNA and Henderson Symphony Orchestra Young Artists Competition. He continued studying piano in college with Dr. Mykola Suk at UNLV, performing Rachmaninov’s Rhapsody on a Theme by Paganini with their orchestra. As a solo pianist, Jae has given concerts for various causes locally, including benefit concerts for family members, as well as nonprofit organizations. Recently, he was featured as a soloist with the Southern Nevada Musical Arts Society to perform Beethoven\'s Piano Concerto No. 3 under the direction of Randy Pagel. As a collaborative pianist, Jae has serviced nearly 1,000 individual music clients since 2010, both locally and abroad. Since 2014, he has been working as a staff pianist at the Institute for Young Dramatic Voices, a program founded by renowned dramatic mezzo-soprano Dolora Zajick. As a self-taught composer and arranger, Jae has written over 100 original compositions and more than 30 arrangements. Recent premieres include his own "Sonata in F minor for Cello and Piano”, Op.86 with cellist Jeremy Russo, “Variations on a Theme by Maykapar, Op. 96” with his wife, pianist Maria Kolesnyk, and "Variations on \'God rest ye merry, gentlemen\'", Op. 101.'
            specialties = ['accompanying - cello repertoire', 'accompanying - saxophone repertoire', 'accompanying - viola repertoire', 'accompanying - violin repertoire', 'accompanying - voice repertoire (opera)', 'arranging', 'composing', 'diction - English', 'diction - Korean', 'diction - Russian', 'diction - Spanish', 'ear training', 'improvisation', 'live background music', 'solo piano performance', 'wedding music']
            break
        case 'Kolesnyk':
            headshot = mariaHeadshot
            bio = 'Maria Kolesnyk is a Ukrainian-born pianist who began her piano studies at age 5. During her years in Ukraine, Maria collaborated with various orchestras to perform concertos and symphonic works by Mozart, Liszt, and Turina. In 2013, she moved to the United States to study under the guidance of Dr. Mykola Suk at the University of Nevada, Las Vegas (UNLV).  During her undergraduate years, Maria participated in numerous competitions and performances. She was awarded scholarships to attend Vianden Music Festival and School in Luxembourg and the International Keyboard Institute & Festival in New York. While participating in many masterclasses over the years, she worked with internationally renowned musicians such as Jerome Rose, Jerome Lowenthal, Lang Lang, as well as collaborating with a flutist in a masterclass with Sir James Galway. Maria has also been featured as a soloist with different orchestras, performing Gershwin\'s Rhapsody in Blue with the Henderson Symphony Orchestra and Rachmaninov\'s Piano Concerto No. 3 with the Academic Symphonic Orchestra of Chernihiv (Ukraine), as well as the UNLV Symphony Orchestra. She has also been invited to give solo recitals in numerous venues in Las Vegas, as well as San Juan, Puerto Rico and Kyiv, Ukraine. Currently, Maria works as a piano instructor and collaborative pianist at the Nevada School of The Arts in Las Vegas. She is also an active freelance participant in the music community of Las Vegas, working closely with many private violin, cello, flute studios and local opera companies as an accompanist, as well as maintaining a private studio designed for students of varying ages, levels, backgrounds, and goals.'
            specialties = ['accompanying - cello repertoire', 'accompanying - double bass repertoire', 'accompanying - flute repertoire', 'accompanying - trumpet repertoire', 'accompanying - violin repertoire', 'diction - English', 'diction - Russian', 'diction - Ukrainian', 'Jewish High Holidays music', 'music theory', 'private piano lessons', 'solo piano performance']
            break
        default:
            headshot = placeholder
            bio = ''
            specialties = []
            break
    }

    if (musician.email) {
        let instruments = ''
        for (let instrument of musician.instruments) {
            musician.instruments.indexOf(instrument) === musician.instruments.length - 1 ? instruments += instrument : instruments += `${instrument}, `
        }
        return (
            <section className={`${isMenuOpen ? 'z-0 opacity-5' : ''} flex flex-col justify-center items-center font-bodoni min-h-[150vh]`}>
                <div className={`relative w-11/12 lg:w-2/3 mx-auto border border-stone-600 rounded-lg text-stone-700 my-5 bg-gradient-to-r from-stone-300 via-stone-400 to-stone-300 flex flex-col ${bioModal ? 'opacity-25' : ''}`}>
                    <section className="flex flex-col lg:flex-row justify-center items-center">
                        <div className="flex flex-col w-2/3 my-2 lg:w-1/3 mx-3">
                            <img src={headshot} className="rounded-xl my-2"/>
                            <p className="text-xl text-center">{musician.firstName} {musician.lastName}</p>
                            <p className="text-lg text-center">{instruments}</p>
                        </div>
                        <div className="flex flex-col lg:w-2/3 justify-center items-center h-1/6">
                            <p className="text-xl underline my-3">SPECIALTIES</p>
                            <ul className="list-disc list-inside lg:text-lg">
                                {specialties.map(specialty => <li key={specialty}>{specialty}</li>)}
                            </ul>
                        </div>
                    </section>
                    <button className={btnStyle} onClick={() => setBioModal(true)}>BIOGRAPHY</button>
                </div>
                <button onClick={() => navigate('/musicians')} className={btnStyle}>BACK TO MUSICIANS GALLERY</button>
                <div className={`${bioModal ? 'absolute border border-stone-800 bg-stone-300 rounded-xl w-11/12 h-5/6 lg:w-1/2 lg:h-3/4 overflow-auto mx-auto flex flex-col justify-center items-center -translate-y-[2rem] pt-[600px] lg:pt-0' : 'hidden'}`}>
                    <p className="m-6 py-6">{bio}</p>
                    <button onClick={() => setBioModal(false)} className={btnStyle}>CLOSE</button>
                </div>
            </section>
        )
    }
}