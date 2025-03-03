import { useState, useEffect } from 'react'
import Gallery from '../Gallery'

export default function RepertoirePage({ isMenuOpen, allOpuses, allComposers, allMusicians, setOpusDetails, instruments, scrollToTop }) {
    const [showFilters, setShowFilters] = useState(false)
    const [filterSwitch, setFilterSwitch] = useState({
        composer: [false, ''],
        instrumentation: [false, ''],
        price: [false, 0],
        keyword: [false, ''],
    })
    const [filteredOpuses, setFilteredOpuses] = useState([])
    const filterDivStyle = 'flex justify-center items-center w-11/12 mx-auto my-2'
    const filterLabelStyle = 'w-1/2 text-right mr-2 text-sm'
    const filterInputStyle = 'w-1/2 text-stone-800 text-sm'
    const btnStyle = 'mx-auto my-5 p-2 border border-stone-800 rounded-xl hover:bg-stone-300 hover:text-stone-700 bg:scale-105'
    const arrowStyle = `text-xl duration-500 ${showFilters ? 'rotate-180' : ''}`

    function handleChange(evt) {
        setFilterSwitch({
            ...filterSwitch,
            [evt.target.id]: [true, evt.target.value]
        })
    }

    function applyFilters(evt) {
        for (let category in filterSwitch) {
            let [switchOn, switchValue] = filterSwitch[category]
            if (switchOn) {
                switch(category) {
                    case 'composer':
                        setFilteredOpuses(filteredOpus => filteredOpus.filter(opus => opus.composer === switchValue))
                        break
                    case 'instrumentation':
                        setFilteredOpuses(filteredOpus => filteredOpus.filter(opus => opus.instrumentation.includes(switchValue)))
                        break
                    case 'price':
                        setFilteredOpuses(filteredOpus => filteredOpus.filter(opus => opus.price <= switchValue && opus.price !== null))
                        break
                    case 'keyword':
                        setFilteredOpuses(filteredOpus => filteredOpus.filter(opus => opus.title.includes(switchValue)))
                        break
                }
            }
        }
    }

    useEffect(() => {
        setFilteredOpuses(allOpuses)
        scrollToTop()
    }, [])

    useEffect(() => {
        setFilteredOpuses(allOpuses)
    }, [filterSwitch])

    return (
        <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} text-stone-800 font-bodoni min-h-[125vh]`}>
            <h1 className="text-xl text-center my-10 lg:text-3xl">Available Repertoire</h1>
            <p className='w-11/12 lg:w-2/3 mx-auto my-10 lg:text-xl'>Start your event request by choosing your desired repertoire below. Our musicians will get back to you as soon as possible with a quote for your event. They may choose to apply discounts at each of their own discretion.</p>
            <div className='w-1/2 lg:w-1/6 mx-auto flex justify-around items-center'>
                <p className={arrowStyle}>&#10507;</p>
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`${showFilters ? 'text-red-600' : 'text-green-600'} text-center`}
                >{showFilters ? 'HIDE FILTERS' : 'SHOW FILTERS'}</button>
                <p className={arrowStyle}>&#10507;</p>
            </div>
            <section className={`${showFilters ? '' : 'hidden'} duration-500 border border-stone-400 rounded-xl my-2 py-2 w-11/12 lg:w-1/2 mx-auto bg-gray-300`}>
                <div className="w-full flex flex-col">
                    <div className={filterDivStyle}>
                        <label className={filterLabelStyle} htmlFor='composer'>COMPOSER</label>
                        <select
                            className={filterInputStyle}
                            name="composer"
                            id="composer"
                            defaultValue={0}
                            onChange={handleChange}>
                            <option key={0} value={0} disabled>Select a composer</option>
                            {allComposers.sort().map(composer => <option key={composer} value={composer}>{composer}</option>)}
                        </select>
                    </div>
                    <div className={filterDivStyle}>
                        <label className={filterLabelStyle} htmlFor='instrumentation'>INSTRUMENTATION</label>
                        <select
                            className={filterInputStyle}
                            name="instrumentation"
                            id="instrumentation"
                            defaultValue={0}
                            onChange={handleChange}>
                            <option key={0} value={0} disabled>Select an instrument</option>
                            {instruments.map(instrument => <option key={instrument} value={instrument}>{instrument}</option>)}
                        </select>
                    </div>
                    <div className={filterDivStyle}>
                        <label className={filterLabelStyle} htmlFor='price'>MAXIMUM PRICE</label>
                        <input
                            className={filterInputStyle + ' px-1'}
                            name="price"
                            id="price"
                            defaultValue={0}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex justify-around items-center'>
                        <button className={btnStyle} onClick={applyFilters}>APPLY</button>
                        <button className={btnStyle} onClick={() => {
                            setFilteredOpuses(allOpuses)
                            setFilterSwitch({
                                composer: [false, ''],
                                instrumentation: [false, ''],
                                price: [false, 0],
                                keyword: [false, ''],
                            })
                        }}>CLEAR</button>
                    </div>
                </div>
            </section>
            <Gallery
                filteredOpuses={filteredOpuses}
                setOpusDetails={setOpusDetails}
                allMusicians={allMusicians}
            />
        </main>
    )
}