import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import placeholder from '../../assets/musicians-placeholder.jpeg'

export default function Card({ musician, getFilteredData, updateDetails, loginStatus }) {
    const [portrait, setPortrait] = useState('')
    let instruments = ''
    for (let instrument of musician.instruments) {
        if (musician.instruments.indexOf(instrument) === musician.instruments.length - 1) {
            instruments += instrument
        } else {
            instruments += `${instrument}, `
        }
    }

    return (
        <Link to={"/musicianProfile/" + musician._id} onClick={() => updateDetails(musician)}>
            <figure className="flex my-5 p-2 text-stone-400 border-2 border-stone-400 rounded-xl bg-stone-800 shadow-lg hover:scale-110 hover:cursor-pointer hover:bg-amber-400 hover:text-stone-900 hover:duration-500">
                <div className="flex justify-center items-center">
                    <img src={placeholder} className="rounded-xl h-[200px] w-[300px]"/>
                </div>
                <figcaption className="py-2 px-2 w-full">
                    <h1 className="p-2 bg-stone-600 text-stone-200 font-bold">{`${musician.firstName} ${musician.lastName}`}</h1>
                    <table className="w-full">
                        <tbody>
                            <tr className="h-12">
                                <td className='w-1/2'>Instruments</td>
                                <td className="w-1/2">{instruments}</td>
                            </tr>
                            <tr className="h-12 border-stone-400 border-y-2">
                                <td>Birthdate</td>
                                <td>{musician.birthdate}</td>
                            </tr>
                            <tr className="h-12 border-stone-400 border-y-2">
                                <td>Email</td>
                                <td>{musician.email}</td>
                            </tr>
                            <tr className="h-12 border-stone-400 border-y-2">
                                <td>Description/Bio</td>
                                <td>{musician.description}</td>
                            </tr>
                            <tr className="h-12 border-stone-400 border-y-2">
                                <td>Available Repertoire</td>
                                <td>{musician.availableRepertoire}</td>
                            </tr>
                        </tbody>
                    </table>
                </figcaption>
            </figure>
        </Link>
    )
}