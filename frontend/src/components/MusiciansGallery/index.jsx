import { useState } from 'react'
import MusiciansCard from '../MusiciansCard'

export default function MusiciansGallery({ musicians, getFilteredMusiciansData, setMusicianDetails, loginStatus }) {
    const [endDisplayIndex, setEndDisplayIndex] = useState(10)
    let galleryContent = musicians.length > 0
    ? musicians
        .slice(0, endDisplayIndex)
        .map(musician => <MusiciansCard
            key={musician._id}
            musician={musician}
            getFilteredMusiciansData={getFilteredMusiciansData}
            setMusicianDetails={setMusicianDetails}
            loginStatus={loginStatus}
        />)
    : <p className='text-center my-10'>No musicians found. Please check your internet connection. If the problem persists, please contact the site administrator.</p>
    window.onscroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight && endDisplayIndex < musicians.length) setEndDisplayIndex(endDisplayIndex + 10)
    }

    return (
        <div className="w-11/12 mt-10 mx-auto font-poppins">
            {galleryContent}
        </div>
    )
}