import Gallery from '../Gallery'

export default function RepertoirePage({ isMenuOpen, opuses, allComposers, getFilteredOpusData, setOpusDetails, loginStatus }) {
    let instruments = ['bassoon', 'cello', 'clarinet', 'contrabass', 'flute', 'guitar', 'harp', 'oboe', 'orchestra', 'piano', 'percussion', 'saxophone', 'trombone', 'trumpet', 'tuba/euphonium', 'viola', 'violin']
    let filterDivStyle = 'flex justify-center items-center w-11/12 mx-auto my-2'
    let filterLabelStyle = 'w-1/2 text-right mr-2 text-sm'
    let filterInputStyle = 'w-1/2 text-stone-800 text-sm'

    return (
        <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} text-stone-200 font-poppins min-h-[125vh]`}>
            <h1 className="text-xl text-center my-10 lg:text-3xl">Available Repertoire</h1>
            <section className="border border-stone-400 rounded-xl my-2 py-2 w-11/12 lg:w-1/2 mx-auto">
                <p className="text-center underline">FILTERS</p>
                <div className="w-full flex flex-col">
                    <div className={filterDivStyle}>
                        <label className={filterLabelStyle} htmlFor='composerFilter'>COMPOSER</label>
                        <select
                            className={filterInputStyle}
                            name="composerFilter"
                            id="composerFilter"
                            defaultValue='none'
                            onChange={evt => getFilteredOpusData('composer', evt.target.value)}>
                            <option key='0' value='none' disabled>Select a composer</option>
                            {allComposers.sort().map(composer => <option key={composer} value={composer}>{composer}</option>)}
                        </select>
                    </div>
                    <div className={filterDivStyle}>
                        <label className={filterLabelStyle} htmlFor='instrumentationFilter'>INSTRUMENTATION</label>
                        <select
                            className={filterInputStyle}
                            name="instrumentationFilter"
                            id="instrumentationFilter"
                            defaultValue='none'
                            onChange={evt => getFilteredOpusData('instrumentation', evt.target.value)}>
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
                            onChange={evt => getFilteredOpusData('price', evt.target.value)}
                        />
                    </div>
                    <button className='mx-auto my-5 p-2 border border-stone-200 rounded-xl hover:bg-amber-400 hover:text-stone-800 bg:scale-105' onClick={evt => getFilteredOpusData('none', 'none')}>CLEAR</button>
                </div>
            </section>
            <Gallery
                opuses={opuses}
                setOpusDetails={setOpusDetails}
            />
        </main>
    )
}