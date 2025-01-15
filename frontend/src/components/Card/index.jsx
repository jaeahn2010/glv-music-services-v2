import { Link } from 'react-router-dom'

export default function Card({ opus, setOpusDetails, allMusicians }) {
    let h1Style = 'p-2 text-stone-200 font-bold'
    let musicianObjs = opus.offeringMusicians.map(id => allMusicians.find(musician => musician._id === id))
    let musicianNames = musicianObjs.map(musician => `${musician.firstName} ${musician.lastName}`)

    return (
        <Link to={"/opus/details/" + opus._id} onClick={() => setOpusDetails(opus)}>
            <figure className="flex my-5 p-2 text-stone-400 border-2 border-stone-400 rounded-xl bg-stone-800 shadow-lg hover:scale-105 hover:cursor-pointer hover:bg-amber-400 hover:text-stone-900 hover:duration-500 font-poppins">
                <figcaption className="py-2 px-2 w-full">
                    <div className='flex justify-between bg-stone-600'>
                        <h1 className={h1Style}>{opus.title.toUpperCase()}</h1>
                        <h1 className={h1Style}>{opus.composer}</h1>
                    </div>
                    <table className="w-full">
                        <tbody>
                            <tr className="h-12">
                                <td className='w-1/2'>Instrumentation</td>
                                <td className="w-1/2">{opus.instrumentation.join(', ')}</td>
                            </tr>
                            <tr className="h-12 border-stone-400 border-y-2">
                                <td>Repertoire available from:</td>
                                <td>{musicianNames.join(', ')}</td>
                            </tr>
                        </tbody>
                    </table>
                </figcaption>
            </figure>
        </Link>
    )
}