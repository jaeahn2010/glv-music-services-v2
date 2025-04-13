import { useState } from 'react'
import Card from '../Card'

export default function Gallery({ filteredOpuses, setOpusDetails, allMusicians }) {
    const [endDisplayIndex, setEndDisplayIndex] = useState(20)
    let galleryContent = <p className='text-center my-10'>No repertoire found. Please clear your filters. If the problem persists, please check your internet connection or contact the site administrator.</p>

    if (filteredOpuses.length > 0) {
        galleryContent = filteredOpuses
            .slice(0, endDisplayIndex)
            .map(opus => <Card
                key={opus._id}
                opus={opus}
                setOpusDetails={setOpusDetails}
                allMusicians={allMusicians}
            />)
    }
    
    window.onscroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight && endDisplayIndex < filteredOpuses.length) setEndDisplayIndex(endDisplayIndex + 20)
    }

    return (
        <div className="w-11/12 lg:w-2/3 mt-10 mx-auto font-montserrat">
            {galleryContent}
        </div>
    )
}