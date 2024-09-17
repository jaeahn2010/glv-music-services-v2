import { useState } from 'react'
import MusiciansGallery from '../MusiciansGallery'

export default function MusiciansPage({ isMenuOpen, musicians, setMusicians, getFilteredData, updateDetails, loginStatus }) {
    let instruments = ['bassoon', 'cello', 'clarinet', 'contrabass', 'flute', 'guitar', 'harp', 'oboe', 'orchestra', 'piano', 'percussion', 'saxophone', 'trombone', 'trumpet', 'tuba/euphonium', 'viola', 'violin']

    return (
        <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} text-stone-400"`}>
            <h1 className="mt-5 text-center md:text-3xl text-2xl font-bold">Our Musicians</h1>
            <section className="flex flex-col justify-center items-center my-2 py-2">
                <label htmlFor='instrumentFilter'>FILTER BY INSTRUMENT</label>
                <select
                    className='mt-2'
                    name="instrumentFilter"
                    id="instrumentFilter"
                    defaultValue='none'
                    onChange={evt => getFilteredData('instrument', evt.target.value)}>
                    <option key='0' value='none' disabled>Select an instrument</option>
                    {instruments.map(instrument => <option key={instrument} value={instrument}>{instrument}</option>)}
                </select>
            </section>
            <MusiciansGallery
                musicians={musicians}
                getFilteredData={getFilteredData}
                updateDetails={updateDetails}
                loginStatus={loginStatus}
            />
        </main>
    )
}