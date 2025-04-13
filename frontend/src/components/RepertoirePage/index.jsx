import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Gallery from '../Gallery'

export default function RepertoirePage({ isMenuOpen, allOpuses, allComposers, allMusicians, setOpusDetails, instruments, scrollToTop }) {
    const [showFilters, setShowFilters] = useState(false)
    const [filterSwitch, setFilterSwitch] = useState({
        repType: [false, ''],
        composer: [false, ''],
        instrumentation: [false, ''],
        keyword: [false, ''],
    })
    const [filteredOpuses, setFilteredOpuses] = useState([])
    const filterDivStyle = 'flex justify-center items-center w-11/12 mx-auto my-2'
    const filterLabelStyle = 'w-1/2 text-right mr-2 text-sm'
    const filterInputStyle = 'w-1/2 text-stone-800 text-sm'
    const btnStyle = 'mx-auto my-5 p-2 border border-stone-800 rounded-xl hover:bg-amber-300 hover:text-stone-700 bg:scale-105 duration-500'

    let composersNameReformat = allComposers.map(composer => {
        let lastSpaceIndex = composer.lastIndexOf(' ')
        return lastSpaceIndex !== -1 ? `${composer.substring(lastSpaceIndex + 1)}, ${composer.substring(0, lastSpaceIndex)}`: composer
    })

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
                    case 'repType':
                        setFilteredOpuses(filteredOpus => filteredOpus.filter(opus => opus.repType.toLowerCase() === switchValue.toLowerCase()))
                        break
                    case 'composer':
                        setFilteredOpuses(filteredOpus => filteredOpus.filter(opus => opus.composer === switchValue))
                        break
                    case 'instrumentation':
                        setFilteredOpuses(filteredOpus => filteredOpus.filter(opus => {
                            let lowerCaseInstrumentation = opus.instrumentation.map(instrument => instrument.toLowerCase())
                            return lowerCaseInstrumentation.includes(switchValue)
                        }))
                        break
                    case 'keyword':
                        setFilteredOpuses(filteredOpus => filteredOpus.filter(opus => {
                            if (opus.movements.length) {
                                let mvmtTitles = opus.movements.map(mvmt => mvmt.movementTitle).join(';')
                                return mvmtTitles.toLowerCase().includes(switchValue.toLowerCase())
                            } else {
                                return opus.title.toLowerCase().includes(switchValue.toLowerCase())
                            }    
                        }))
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
        <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} text-stone-800 font-montserrat min-h-[125vh]`}>
            <h1 className="text-5xl lg:text-6xl font-vibes text-center my-10">Available Repertoire</h1>
            <p className='w-11/12 lg:w-2/3 mx-auto my-10 lg:text-xl'>Start your event request by choosing your desired repertoire below. Our musicians will get back to you as soon as possible with a quote for your event. They may choose to apply discounts at each of their own discretion.</p>
            <p className='w-11/12 lg:w-2/3 mx-auto my-10 lg:text-xl'>Can't find your desired repertoire? We would be happy to add it to our database! Please contact us directly <Link to='/contact' className='underline hover:text-stone-400 duration-500'>here.</Link></p>
            <div className='w-1/2 lg:w-1/6 mx-auto flex justify-around items-center'>
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`${showFilters ? 'text-red-600' : 'text-green-600'} text-center`}
                >{showFilters ? 'HIDE FILTERS' : 'SHOW FILTERS'}</button>
            </div>
            <section className={`${showFilters ? '' : 'hidden'} duration-500 border border-stone-400 rounded-xl my-2 py-2 w-11/12 lg:w-1/2 mx-auto bg-gray-300`}>
                <div className="w-full flex flex-col">
                    <div className={filterDivStyle}>
                        <label className={filterLabelStyle} htmlFor='repType'>REPERTOIRE TYPE</label>
                        <select
                            className={filterInputStyle}
                            name="repType"
                            id="repType"
                            defaultValue={0}
                            onChange={handleChange}>
                            <option key={0} value={0} disabled>Select a type</option>
                            {['Solo', 'Chamber', 'Piano Reduction'].map(type => <option key={type} value={type}>{type}</option>)}
                        </select>
                    </div>
                    <div className={filterDivStyle}>
                        <label className={filterLabelStyle} htmlFor='composer'>COMPOSER</label>
                        <select
                            className={filterInputStyle}
                            name="composer"
                            id="composer"
                            defaultValue={0}
                            onChange={handleChange}>
                            <option key={0} value={0} disabled>Select a composer</option>
                            {composersNameReformat.sort().map(composer => <option key={composer} value={composer.split(', ').reverse().join(' ')}>{composer}</option>)}
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
                        <label className={filterLabelStyle} htmlFor='keyword'>KEYWORD</label>
                        <input
                            className={filterInputStyle}
                            name="keyword"
                            id="keyword"
                            placeholder='keyword'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex justify-around items-center'>
                        <button className={btnStyle} onClick={applyFilters}>APPLY</button>
                        <button className={btnStyle} onClick={() => {
                            setFilteredOpuses(allOpuses)
                            setFilterSwitch({
                                repType: [false, ''],
                                composer: [false, ''],
                                instrumentation: [false, ''],
                                keyword: [false, ''],
                            })
                        }}>CLEAR</button>
                    </div>
                </div>
            </section>
            <section>
                <p className='text-center my-4'>({filteredOpuses.length} item{filteredOpuses.length === 1 ? '' : 's'} found)</p>
            </section>
            <Gallery
                filteredOpuses={filteredOpuses}
                setOpusDetails={setOpusDetails}
                allMusicians={allMusicians}
            />
        </main>
    )
}