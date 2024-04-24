import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOpusById } from '../../../utils/backend'
import placeholder from '../../assets/music-book-placeholder.jpeg'

export default function DetailsPage(props) {
    const [opus, setOpus] = useState({ ...props.opus })
    const [loginStatus, setLoginStatus] = useState({ ...props.loginStatus })
    const params = useParams()

    async function getOpusData() {
        const opusData = await getOpusById(params.opusId)
        setOpus(opusData)
    }

    useEffect(() => {
        getOpusData()
    }, [])

    if (opus.title) {
        let bulkPrice = opus.price ? `$${opus.price}` : "Not available in bulk"
        let instrumentation = ''
        for (let instrument of opus.instrumentation) {
            if (opus.instrumentation.indexOf(instrument) === opus.instrumentation.length - 1) {
                instrumentation += instrument
            } else {
                instrumentation += `${instrument}, `
            }
        }

        let movementsDisplay
        if (opus.movements.length > 0) {
            movementsDisplay =
            <section>
                <p className="underline text-center">AVAILABLE MOVEMENTS</p>
                <table className="w-full border-separate border-spacing-y-2">
                    <thead>
                        <tr className="w-full">
                            <td className="w-3/4 underline">MOVEMENT</td>
                            <td className="underline">PRICE</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        opus.movements.map(movement => {
                            return (
                                <tr key={movement.movementNumber} className="w-full hover:scale-105 hover:cursor-pointer hover:bg-amber-400 hover:text-stone-900 hover:duration-500">
                                    <td className="w-3/4 border-stone-400 border-y-2 border-l-2 p-2 rounded-l-xl">{movement.movementTitle}</td>
                                    <td className="border-stone-400 border-y-2 border-r-2 rounded-r-xl">${movement.movementPrice}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </section>
        }

        return (
            <div className="w-4/5 mx-auto min-h-[300px] border-2 border-stone-400 rounded-lg text-stone-400 p-5 m-5 flex-col justify-center bg-stone-700">
                <div className='flex'>
                    <section className="flex justify-center items-center w-1/2">
                        <img src={placeholder} className="rounded-xl mb-5 h-[250px]"/>
                    </section>
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
                        <div>
                            <p className="underline">BULK PRICE</p>
                            <p>{bulkPrice}</p>
                        </div>
                        <br/>
                    </section>
                </div>
                {movementsDisplay}
            </div>
        )
    }
}