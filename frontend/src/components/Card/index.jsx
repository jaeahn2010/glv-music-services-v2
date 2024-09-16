import { Link } from 'react-router-dom'
import placeholder from '../../assets/music-book-placeholder.jpeg'

export default function Card({ opus, getFilteredData, updateDetails, loginStatus }) {
    let bulkPrice = opus.price ? `$${opus.price}` : "Not available in bulk"
    let instrumentation = ''
    for (let instrument of opus.instrumentation) {
        opus.instrumentation.indexOf(instrument) === opus.instrumentation.length - 1 ? instrumentation += instrument : instrumentation += `${instrument}, `
    }

    return (
        <Link to={"/details/" + opus._id} onClick={() => updateDetails(opus)}>
            <figure className="flex my-5 p-2 text-stone-400 border-2 border-stone-400 rounded-xl bg-stone-800 shadow-lg hover:scale-105 hover:cursor-pointer hover:bg-amber-400 hover:text-stone-900 hover:duration-500">
                <figcaption className="py-2 px-2 w-full">
                    <h1 className="p-2 bg-stone-600 text-stone-200 font-bold">{opus.title.toUpperCase()}</h1>
                    <table className="w-full">
                        <tbody>
                            <tr className="h-12">
                                <td className='w-1/2'>Instrumentation</td>
                                <td className="w-1/2">{instrumentation}</td>
                            </tr>
                            <tr className="h-12 border-stone-400 border-y-2">
                                <td>Composer</td>
                                <td>{opus.composer}</td>
                            </tr>
                            <tr className="h-12">
                                <td>Bulk price</td>
                                <td>{bulkPrice}</td>
                            </tr>
                        </tbody>
                    </table>
                </figcaption>
            </figure>
        </Link>
    )
}