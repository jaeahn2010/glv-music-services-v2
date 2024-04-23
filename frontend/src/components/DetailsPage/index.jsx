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
        return (
            <div className="w-4/5 mx-auto min-h-[300px] border-2 border-stone-400 rounded-lg text-stone-400 p-5 m-5 flex-col justify-center bg-stone-700">
                <img src={placeholder} className="rounded-xl mb-5 min-h-[200px] min-w-full object-cover cursor-pointer"/>
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
                <div>
                    <p className="underline">AVAILABLE MOVEMENTS</p>
                        <table className="w-full">
                            <thead>
                                <tr className="w-full">
                                    <td className="w-3/4">MOVEMENT</td>
                                    <td>PRICE</td>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                opus.movements.map(movement => {
                                    return (
                                        <tr key={movement.movementNumber} className="w-full">
                                            <td className="w-3/4">{movement.movementTitle}</td>
                                            <td>${movement.movementPrice}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                </div>
            </div>
        )
    }
}