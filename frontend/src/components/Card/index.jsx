import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import placeholder from '../../assets/music-book-placeholder.jpeg'

export default function Card({ opus, getFilteredData, updateDetails, loginStatus }) {

    let bulkPrice = opus.price ? `$${opus.price}` : "Not available in bulk"

    return (
        <figure className=" mb-4 text-stone-400 break-inside-avoid-column border-2 border-stone-400 rounded-xl bg-stone-800 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={placeholder} className="card-image rounded-t-xl min-h-[200px] min-w-full object-cover"/>
            <figcaption className="py-2 px-2">
                <h1 className="p-2 text-center">{opus.title}</h1>
                <h1 className="p-2 text-center">
                    {
                        opus.instrumentation.map(instrument => {
                            return (
                                <span>{instrument}, </span>
                            )
                        })
                    }
                </h1>
                <h1 className="p-2 text-center">{opus.composer}</h1>
                <h1 className="p-2 text-center">Bulk price: {bulkPrice}</h1>
            </figcaption>
        </figure>
    )
}