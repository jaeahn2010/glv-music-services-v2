import { useState } from 'react'
import MusiciansGallery from '../MusiciansGallery'

export default function MusiciansPage({ musicians, setMusicians, getFilteredData, updateDetails, loginStatus }) {
    let instruments = ['bassoon', 'cello', 'clarinet', 'contrabass', 'flute', 'guitar', 'harp', 'oboe', 'orchestra', 'piano', 'percussion', 'saxophone', 'trombone', 'trumpet', 'tuba/euphonium', 'viola', 'violin']

    return (
        <main className="text-stone-400">
            <h1 className="mt-5 text-center md:text-3xl text-2xl font-bold">Our Musicians</h1>
            <div className="border-2 border-stone-400 rounded-xl my-2 py-2">
                <p className="text-center underline">FILTERS</p>
                <table className="w-full">
                    <thead>
                        <tr>
                            <td className="text-center w-1/3"><label htmlFor='instrumentFilter'>INSTRUMENT</label></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">
                                <select
                                    name="instrumentFilter"
                                    id="instrumentFilter"
                                    defaultValue='none'
                                    onChange={evt => getFilteredData('instrument', evt.target.value)}>
                                    <option key='0' value='none' disabled>Select an instrument</option>
                                    {
                                        instruments.map(instrument => {
                                            return (
                                                <option key={instrument} value={instrument}>{instrument}</option>
                                            )
                                        })
                                    }
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <MusiciansGallery
                musicians={musicians}
                getFilteredData={getFilteredData}
                updateDetails={updateDetails}
                loginStatus={loginStatus}
            />
        </main>
    )
}