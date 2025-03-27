import MusiciansCard from '../MusiciansCard'

export default function MusiciansGallery({ allMusicians, getFilteredMusiciansData, setMusicianDetails, loginStatus }) {

    return (
        <section className="w-11/12 mt-10 mx-auto font-montserrat lg:flex lg:justify-around lg:items-center">
            {allMusicians.length
            ? allMusicians.map(musician => <div className='w-2/3 mx-auto lg:w-1/4 hover:scale-110 duration-500' key={musician._id}>
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