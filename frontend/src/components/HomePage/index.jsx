import { useState } from 'react'
import Gallery from '../Gallery'

export default function HomePage({ opuses, setOpuses, getFilteredData, updateDetails, loginStatus }) {
    let composers = [] //fill w/ available composers
    let instruments = ['bassoon', 'cello', 'clarinet', 'contrabass', 'flute', 'guitar', 'harp', 'oboe', 'orchestra', 'piano', 'percussion', 'saxophone', 'trombone', 'trumpet', 'tuba/euphonium', 'viola', 'violin']
    return (
        <main className="rer-font-body text-stone-400">
            <h1 className="mt-5 text-center md:text-3xl text-2xl font-bold">Greater Las Vegas Music Services</h1>
            <h2 className="text-center md:text-xl text-lg font-semibold italic">See all available repertoire below.</h2>
            <Gallery
                opuses={opuses}
                getFilteredData={getFilteredData}
                updateDetails={updateDetails}
                loginStatus={loginStatus}
            />
        </main>
    )
}