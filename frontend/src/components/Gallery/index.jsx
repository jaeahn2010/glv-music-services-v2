import { useState } from 'react'
import Card from '../Card'

export default function Gallery({ opuses, getFilteredData, updateDetails, loginStatus }) {
    const [endDisplayIndex, setEndDisplayIndex] = useState(20)
    let galleryContent = <p>None found</p>
    if (opuses.length) {
        if (opuses[0].length > 0) {
            galleryContent = opuses[0]
                .slice(0, endDisplayIndex)
                .map(opus => <Card
                    key={opus._id}
                    opus={opus}
                    getFilteredData={getFilteredData}
                    updateDetails={updateDetails}
                    loginStatus={loginStatus}
                />)
        }
        window.onscroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight && endDisplayIndex < opuses[0].length) {
                setEndDisplayIndex(endDisplayIndex + 20)
            }
        }
    } 

    return (
        <div className="w-4/5 mt-10 mx-auto xl:columns-4 lg:columns-3 md:columns-2 max-h-24">
            {galleryContent}
        </div>
    )
}