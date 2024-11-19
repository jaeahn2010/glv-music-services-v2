import { useState, useEffect } from 'react'
import Gallery from '../Gallery'

export default function RepertoirePage({ isMenuOpen, allOpuses, allComposers, setOpusDetails, loginStatus, instruments, scrollToTop, sortObjects }) {
    const [filteredOpuses, setFilteredOpuses] = useState([])
    const filterDivStyle = 'flex justify-center items-center w-11/12 mx-auto my-2'
    const filterLabelStyle = 'w-1/2 text-right mr-2 text-sm'
    const filterInputStyle = 'w-1/2 text-stone-800 text-sm'
    
    // get filtered opus data
	function getFilteredOpusData(category, filter) {
        let filteredOpusData = []
        switch(category) {
            case 'composer':
                filteredOpusData = allOpuses.filter(opus => opus.composer === filter)
                break
            case 'instrumentation':
                filteredOpusData = allOpuses.filter(opus => opus.instrumentation.includes(filter))
                break
            case 'price':
                filteredOpusData = allOpuses.filter(opus => opus.price <= filter && opus.price !== null)
                break
            case 'keyword':
                filteredOpusData = allOpuses.filter(opus => opus.title.includes(filter))
                break
        }
        setFilteredOpuses(sortObjects(filteredOpusData))
	}

    useEffect(() => {
        setFilteredOpuses(allOpuses)
        scrollToTop()
    }, [])

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
                            defaultValue={0}
                            onChange={evt => getFilteredOpusData('composer', evt.target.value)}>
                            <option key={0} value={0} disabled>Select a composer</option>
                            {allComposers.sort().map(composer => <option key={composer} value={composer}>{composer}</option>)}
                        </select>
                    </div>
                    <div className={filterDivStyle}>
                        <label className={filterLabelStyle} htmlFor='instrumentationFilter'>INSTRUMENTATION</label>
                        <select
                            className={filterInputStyle}
                            name="instrumentationFilter"
                            id="instrumentationFilter"
                            defaultValue={0}
                            onChange={evt => getFilteredOpusData('instrumentation', evt.target.value)}>
                            <option key={0} value={0} disabled>Select an instrument</option>
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
                    <button className='mx-auto my-5 p-2 border border-stone-200 rounded-xl hover:bg-amber-400 hover:text-stone-800 bg:scale-105' onClick={() => setFilteredOpuses(allOpuses)}>CLEAR</button>
                </div>
            </section>
            <Gallery
                filteredOpuses={filteredOpuses}
                setOpusDetails={setOpusDetails}
            />
        </main>
    )
}