import { useState } from 'react'
import Card from '../Card'

export default function Gallery({ opuses, setOpusDetails }) {
    const [endDisplayIndex, setEndDisplayIndex] = useState(20)
    let galleryContent = <p className='text-center my-10'>No repertoire found. Please check your internect connection. If the problem persists, please contact the site administrator.</p>
    if (opuses.length > 0) {
        galleryContent = opuses
            .slice(0, endDisplayIndex)
            .map(opus => <Card
                key={opus._id}
                opus={opus}
                setOpusDetails={setOpusDetails}
            />)
    }
    window.onscroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight && endDisplayIndex < opuses.length) setEndDisplayIndex(endDisplayIndex + 20)
    }

    return (
        <div className="w-11/12 lg:w-1/2 mt-10 mx-auto font-poppins">
            {galleryContent}
        </div>
    )
}