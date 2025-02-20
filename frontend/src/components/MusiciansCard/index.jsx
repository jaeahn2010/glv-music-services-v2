import { Link } from 'react-router-dom'
import placeholder from '../../assets/musicians-placeholder.jpeg'
import jaeHeadshot from '../../assets/jae-head.jpg'
import mariaHeadshot from '../../assets/maria-head.jpg'

export default function MusiciansCard({ musician, getFilteredMusiciansData, setMusicianDetails, loginStatus }) {
    let instruments = ''
    for (let instrument of musician.instruments) {
        musician.instruments.indexOf(instrument) === musician.instruments.length - 1 ? instruments += instrument : instruments += `${instrument}, `
    }

    let headshotSrc

    switch(musician.lastName) {
        case 'Ahn-Benton':
            headshotSrc = jaeHeadshot
            break
        case 'Kolesnyk':
            headshotSrc = mariaHeadshot
            break
    }

    return (
        <Link to={"/musician/details/" + musician._id} onClick={() => setMusicianDetails(musician)}>
            <figure className={`my-12 w-full mx-auto p-2 border border-stone-800 rounded-xl bg-gradient-to-r from-stone-200 via-stone-400 to-stone-200 font-bodoni flex justify-center items-center`}>
                <div>
                    <img src={headshotSrc} className="rounded-xl mx-auto lg:w-full"/>
                    <figcaption className="p-2 w-full text-stone-800 flex flex-col items-center justify-center">
                        <h1 className="mt-2 font-bold text-center">{`${musician.firstName} ${musician.lastName}`}</h1>
                        <p className='text-center'>{instruments}</p>
                    </figcaption>
                </div>
            </figure>
        </Link>
    )
}