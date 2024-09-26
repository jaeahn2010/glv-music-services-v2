import { useState } from 'react'
import MusiciansCard from '../MusiciansCard'

export default function MusiciansGallery({ musicians, getFilteredData, updateDetails, loginStatus }) {
    const [endDisplayIndex, setEndDisplayIndex] = useState(10)
    let galleryContent = musicians.length > 0
    ? musicians
        .slice(0, endDisplayIndex)
        .map(musician => <MusiciansCard
            key={musician._id}
            musician={musician}
            getFilteredData={getFilteredData}
            updateDetails={updateDetails}
            loginStatus={loginStatus}
        />)
    : <p>None found</p>
    window.onscroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight && endDisplayIndex < musicians.length) setEndDisplayIndex(endDisplayIndex + 10)
    }

    return (
        <div className="w-11/12 mt-10 mx-auto font-poppins">
            {galleryContent}
        </div>
    )
}