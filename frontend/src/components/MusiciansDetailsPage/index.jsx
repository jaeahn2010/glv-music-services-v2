import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getMusicianById } from '../../../utils/backend'

export default function MusiciansDetailsPage({isMenuOpen, musicianDetails, loginStatus, userCart, setUserCart}) {
    const [musician, setMusician] = useState({ ...musicianDetails })
    const params = useParams()
    const navigate = useNavigate()

    async function getMusicianData() {
        const musicianData = await getMusicianById(params.musicianId)
        setMusician(musicianData)
    }

    useEffect(() => {
        getMusicianData()
    }, [])

    if (musician.email) {
        return (
            <section className={`${isMenuOpen ? 'z-0 opacity-5' : ''} flex flex-col justify-center items-center font-poppins min-h-[150vh]`}>
                <div className={`w-11/12 lg:w-1/2 mx-auto border border-stone-400 rounded-lg text-stone-300 p-5 m-5 flex-col justify-center bg-stone-600`}>
                    <section>
                        <div>
                            <p className="underline">TITLE</p>
                            <p>{opus.title}</p>
                        </div>
                        <br/>
                        <div>
                            <p className="underline">COMPOSER</p>
                            <p>{opus.composer}</p>
                        </div>
                        <br/>
                        <div>
                            <p className="underline">INSTRUMENTATION</p>
                            <p>{instrumentation}</p>
                        </div>
                        <br/>
                        <div className="flex justify-between">
                            <div className="w-1/3">
                                <p className="underline">BULK PRICE</p>
                                <p>{bulkPrice}</p>
                            </div>
                            <div className="w-2/3 flex justify-center items-center">{bulkPriceBtn}</div>
                        </div>
                        <br/>
                    </section>
                </div>
                <button onClick={() => navigate('/musicians')} className="border border-stone-200 p-2 rounded-xl my-6 mx-auto hover:bg-amber-400 hover:text-stone-800 hover:scale-105 duration-500">BACK TO MUSICIANS GALLERY</button>
            </section>

        )
    }
}