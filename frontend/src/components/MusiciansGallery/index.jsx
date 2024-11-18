import { useState } from 'react'
import MusiciansCard from '../MusiciansCard'

export default function MusiciansGallery({ musicians, getFilteredMusiciansData, setMusicianDetails, loginStatus }) {
    const [endDisplayIndex, setEndDisplayIndex] = useState(10)

    return (
        <section className="w-11/12 mt-10 mx-auto font-poppins flex justify-around items-center">
            {musicians.length
            ? musicians.map(musician => <div className='w-1/4 hover:scale-110 duration-500' key={musician._id}>
                <MusiciansCard
                    musician={musician}
                    getFilteredMusiciansData={getFilteredMusiciansData}
                    setMusicianDetails={setMusicianDetails}
                    loginStatus={loginStatus}
                />
            </div>)
            : <p className='text-center my-10'>No musicians found. Please check your internet connection. If the problem persists, please contact the site administrator.</p>}
        </section>
    )
}