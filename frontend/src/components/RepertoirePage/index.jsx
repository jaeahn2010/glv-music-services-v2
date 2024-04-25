import { useState } from 'react'
import Gallery from '../Gallery'

export default function RepertoirePage({ opuses, setOpuses, allComposers, getFilteredData, updateDetails, loginStatus }) {
    let instruments = ['bassoon', 'cello', 'clarinet', 'contrabass', 'flute', 'guitar', 'harp', 'oboe', 'orchestra', 'piano', 'percussion', 'saxophone', 'trombone', 'trumpet', 'tuba/euphonium', 'viola', 'violin']

    return (
        <main className="text-stone-400">
            <h1 className="mt-5 text-center md:text-3xl text-2xl font-bold">Available Repertoire</h1>
            <h2 className="text-center font-semibold italic my-5">See all available repertoire below, or use the filters to find your desired repertoire.</h2>
            <div className="border-2 border-stone-400 rounded-xl my-2 py-2">
                <p className="text-center underline">FILTERS</p>
                <table className="w-full">
                    <thead>
                        <tr>
                            <td className="text-center w-1/3"><label htmlFor='composerFilter'>COMPOSER</label></td>
                            <td className="text-center w-1/3"><label htmlFor='instrumentationFilter'>INSTRUMENTATION</label></td>
                            <td className="text-center w-1/3"><label htmlFor='priceFilter'>MAXIMUM PRICE</label></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">
                                <select
                                    name="composerFilter"
                                    id="composerFilter"
                                    defaultValue='none'
                                    onChange={evt => getFilteredData('composer', evt.target.value)}>
                                    <option key='0' value='none' disabled>Select a composer</option>
                                    {
                                        allComposers.map(composer => {
                                            return (
                                                <option key={composer} value={composer}>{composer}</option>
                                            )
                                        })
                                    }
                                </select>
                            </td>
                            <td className="text-center">
                                <select
                                    name="instrumentationFilter"
                                    id="instrumentationFilter"
                                    defaultValue='none'
                                    onChange={evt => getFilteredData('instrumentation', evt.target.value)}>
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
                            <td className="text-center">
                                <input
                                    name="priceFilter"
                                    id="priceFilter"
                                    defaultValue={0}
                                    onChange={evt => getFilteredData('price', evt.target.value)}></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Gallery
                opuses={opuses}
                getFilteredData={getFilteredData}
                updateDetails={updateDetails}
                loginStatus={loginStatus}
            />
        </main>
    )
}