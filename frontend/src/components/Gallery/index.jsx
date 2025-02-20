import { useState } from 'react'
import Card from '../Card'

export default function Gallery({ filteredOpuses, setOpusDetails, allMusicians }) {
    const [endDisplayIndex, setEndDisplayIndex] = useState(20)
    let galleryContent = <p className='text-center my-10'>No repertoire found. Please check your internect connection. If the problem persists, please contact the site administrator.</p>

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
        <div className="w-11/12 lg:w-1/2 mt-10 mx-auto font-bodoni">
            {galleryContent}
        </div>
    )
}