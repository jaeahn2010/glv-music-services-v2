import { useState } from 'react'
import Gallery from '../Gallery'

export default function RepertoirePage({ isMenuOpen, opuses, setOpuses, allComposers, getFilteredData, updateDetails, loginStatus }) {
    let instruments = ['bassoon', 'cello', 'clarinet', 'contrabass', 'flute', 'guitar', 'harp', 'oboe', 'orchestra', 'piano', 'percussion', 'saxophone', 'trombone', 'trumpet', 'tuba/euphonium', 'viola', 'violin']
    let filterDivStyle = 'flex justify-center items-center w-11/12 mx-auto my-2'
    let filterLabelStyle = 'w-1/2 text-right mr-2 text-sm'
    let filterInputStyle = 'w-1/2 text-stone-800 text-sm'

    return (
        <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} text-stone-200 font-poppins`}>
            <h1 className="mt-5 text-center text-2xl font-bold">Available Repertoire</h1>
            <h2 className="text-center font-semibold italic my-5">See all available repertoire below, or use the filters to find your desired repertoire.</h2>
            <section className="border border-stone-400 rounded-xl my-2 py-2 w-11/12 lg:w-1/2 mx-auto">
                <p className="text-center underline">FILTERS</p>
                <div className="w-full">
                    <div className={filterDivStyle}>
                        <label className={filterLabelStyle} htmlFor='composerFilter'>COMPOSER</label>
                        <select
                            className={filterInputStyle}
                            name="composerFilter"
                            id="composerFilter"
                            defaultValue='none'
                            onChange={evt => getFilteredData('composer', evt.target.value)}>
                            <option key='0' value='none' disabled>Select a composer</option>
                            {allComposers.map(composer => <option key={composer} value={composer}>{composer}</option>)}
                        </select>
                    </div>
                    <div className={filterDivStyle}>
                        <label className={filterLabelStyle} htmlFor='instrumentationFilter'>INSTRUMENTATION</label>
                        <select
                            className={filterInputStyle}
                            name="instrumentationFilter"
                            id="instrumentationFilter"
                            defaultValue='none'
                            onChange={evt => getFilteredData('instrumentation', evt.target.value)}>
                            <option key='0' value='none' disabled>Select an instrument</option>
                            {instruments.map(instrument => <option key={instrument} value={instrument}>{instrument}</option>)}
                        </select>
                    </div>
                    <div className={filterDivStyle}>
                        <label className={filterLabelStyle} htmlFor='priceFilter'>MAXIMUM PRICE</label>
                        <input
                            className={filterInputStyle + ' px-1'}
                            name="priceFilter"
                            id="priceFilter"
                            defaultValue={0}
                            onChange={evt => getFilteredData('price', evt.target.value)}
                        />
                    </div>
                </div>
            </section>
            <Gallery
                opuses={opuses}
                getFilteredData={getFilteredData}
                updateDetails={updateDetails}
                loginStatus={loginStatus}
            />
        </main>
    )
}