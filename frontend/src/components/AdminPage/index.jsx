import { useState, useEffect } from "react"
import { getOpuses, getClients, getMusicians, postOpus, postMusician, updateOpus, updateMusician, updateClient, deleteOpus, deleteClient, deleteMusician } from "../../../utils/backend"

/*
opus: title, composer, movements [{movementNumber, movementTitle, movementPrice}], instrumentation [], price,
client: firstName, lastName, instrument, email, password,
musician: firstName, lastName, instruments [], email, availableRepertoire [Opus ref],
*/


export default function AdminPage({ isMenuOpen, adminLogin, sortObjects, instruments }) {
    const [crudItem, setCrudItem] = useState('')
    const [allOpuses, setAllOpuses] = useState([])
    const [allMusicians, setAllMusicians] = useState([])
    const [allClients, setAllClients] = useState([])
    const [allComposers, setAllComposers] = useState([])
    const [currentOpus, setCurrentOpus] = useState({})
    const [currentMusician, setCurrentMusician] = useState({})    
    const [currentClient, setCurrentClient] = useState({})
    const [currentComposer, setCurrentComposer] = useState('')
    const [showMovementsModal, setShowMovementsModal] = useState(false)
    const [movementToBeAdded, setMovementToBeAdded] = useState({
        movementNumber: 0,
        movementTitle: '',
        movementPrice: 0,
    })
    const [opusFormData, setOpusFormData] = useState({
        title: '',
        composer: '',
        movements: [],
        instrumentation: [],
        price: 0,
    })
    const [musicianFormData, setMusicianFormData] = useState({
        firstName: '',
        lastName: '',
        instruments: [],
        email: '',
        availableRepertoire: [],
    })
    const [clientFormData, setClientFormData] = useState({
        firstName: '',
        lastName: '',
        instrument: '',
        email: '',
        password: '',
    })
    const btnStyle = 'border border-stone-200 rounded-xl p-2 mx-auto my-4 hover:scale-110 hover:bg-gradient-to-r from-green-700 via-green-500 to-green-700'
    const divStyle = 'border border-stone-200 w-1/2 flex flex-col justify-center p-1 m-2 rounded-xl'
    const labelStyle = 'w-1/4 text-right m-2'
    const inputStyle = 'w-3/4 text-left m-2 p-1 bg-stone-200 text-stone-800 rounded-lg'
    const pStyle = 'text-center my-3 underline'
    const selectStyle = 'text-stone-900 my-3 w-3/4 mx-auto'

    let addFields
    let editFields = []
    let movementsModal = <section className={showMovementsModal ? 'absolute left-1/4 z-40 border border-stone-200 w-1/2 flex flex-col justify-center items-center p-4 bg-stone-600' : 'hidden'}>
        <div className={divStyle + ' w-11/12'}>
            <label htmlFor="movementNumber" className={labelStyle}>Movement Number:</label>
            <input
                name='movementNumber'
                id='movementNumber'
                type='number'
                className={inputStyle}
                placeholder='movementNumber'
                onChange={handleMovementChange}
            />
        </div>
        <div className={divStyle + ' w-11/12'}>
            <label htmlFor="movementTitle" className={labelStyle}>Movement Title:</label>
            <input
                name='movementTitle'
                id='movementTitle'
                className={inputStyle}
                placeholder='movementTitle'
                onChange={handleMovementChange}
            />
        </div>
        <div className={divStyle + ' w-11/12'}>
            <label htmlFor="movementPrice" className={labelStyle}>Movement Price:</label>
            <input
                name='movementPrice'
                type='number'
                id='movementPrice'
                className={inputStyle}
                placeholder='movementPrice'
                onChange={handleMovementChange}
            />
        </div>
        <button className={btnStyle} onClick={() => {
            setOpusFormData({
                ...opusFormData,
                movements: opusFormData.movements.concat(movementToBeAdded)
            })
            setMovementToBeAdded({
                movementNumber: 0,
                movementTitle: '',
                movementPrice: 0,
            })
            setShowMovementsModal(false)
        }}>ADD</button>
        <button className={btnStyle} onClick={() => setShowMovementsModal(false)}>CLOSE</button>
    </section>

    async function getAllData() {
        try {
            const opusData = await getOpuses()
            const musiciansData = await getMusicians()
            const clientsData = await getClients()
            setAllOpuses(opusData[0])
            setAllMusicians(musiciansData)
            setAllClients(clientsData)
        } catch {
            alert('Cannot load necessary data at this time. Please check your internet connection and/or the source code.')
        }
    }

    function handleMovementChange(evt) {
        setMovementToBeAdded({...movementToBeAdded, [evt.target.name]: evt.target.value})
    }

    function handleChange(evt) {
        if (evt.target.name !== 'instruments') {
            setOpusFormData({...opusFormData, [evt.target.name]: evt.target.value})
        } else {
            if (evt.target.checked && !opusFormData.instrumentation.includes(evt.target.id)) {
                setOpusFormData({...opusFormData, instrumentation: opusFormData.instrumentation.concat(evt.target.id)})
            } else if (!evt.target.checked && opusFormData.instrumentation.includes(evt.target.id)) {
                setOpusFormData({...opusFormData, instrumentation: opusFormData.instrumentation.filter(instrument => instrument !== evt.target.id)})
            }
        }
    }

    async function handleCRUD(evt) {
        if (evt.target.id === 'edit') {
            console.log('editing ' + crudItem)
        } else {
            if (confirm(`Are you sure you would like to delete this ${crudItem}?`)) {
                switch(crudItem) {
                    case 'opus':
                        const deletedOpus = await deleteOpus(currentOpus._id)
                        console.log(deletedOpus)
                        alert('Successfully deleted this opus.')
                        break
                    case 'musician':
                        break
                    case 'client':
                        break
                }
            }
        }
    }

    async function handleSubmit(evt) {
        evt.preventDefault()
        if (confirm(`Are you sure you would like to add this new ${crudItem}?`)) {
            try {
                const newOpus = await postOpus(opusFormData)
                if (newOpus) alert(`Successfully created new ${crudItem}.`)
            } catch(err) {
                alert(`Could not add new ${crudItem}: ${err}`)
                console.error(err)
            }
        }
    }

    switch(crudItem) {
        case 'opus':
            editFields = allOpuses
            addFields = <form onSubmit={handleSubmit} className="flex flex-col">
                <div className={'mx-auto w-11/12 flex justify-center items-center p-1 m-2 rounded-xl'}>
                    <label htmlFor="title" className={labelStyle}>Title:</label>
                    <input
                        name='title'
                        id='title'
                        className={inputStyle}
                        defaultValue={opusFormData.title}
                        placeholder='title'
                        onChange={handleChange}
                    />
                </div>
                <div className={'mx-auto w-11/12 flex justify-center items-center p-1 m-2 rounded-xl'}>
                    <label htmlFor="composer" className={labelStyle}>Composer:</label>
                    <input
                        name='composer'
                        id='composer'
                        className={inputStyle}
                        defaultValue={opusFormData.composer}
                        placeholder='composer'
                        onChange={handleChange}
                    />
                </div>
                <button onClick={(evt) => {
                    evt.preventDefault()
                    setShowMovementsModal(true)
                }} className={btnStyle + ' text-center'}>Add movement</button>
                {opusFormData.movements.length
                ? opusFormData.movements.map(mvmt => <div key={mvmt.movementNumber} className="border border-stone-200 rounded-xl w-3/4 mx-auto p-2 my-3">
                    <p className="border-b border-stone-200 font-bold text-center">{mvmt.movementNumber}</p>
                    <p>{mvmt.movementTitle}</p>
                    <p>${mvmt.movementPrice}</p>
                </div>)
                : ''}
                {showMovementsModal ? movementsModal : ''}
                <p className="underline text-center my-2">INSTRUMENTATION</p>
                <div className={'mx-auto my-3 w-1/3'}>
                    {instruments.map(instrument => 
                        <div key={instrument}>
                            <input
                                type='checkbox'
                                name='instruments'
                                id={instrument}
                                className={''}
                                onChange={handleChange}
                            />
                            <label htmlFor="instruments" className={labelStyle}>{instrument}</label>
                        </div>
                    )}
                </div>
                <div className={'mx-auto w-11/12 flex justify-center items-center p-1 m-2 rounded-xl'}>
                    <label htmlFor="price" className={labelStyle}>Price:</label>
                    $<input
                        type='number'
                        name='price'
                        id='price'
                        className={inputStyle}
                        defaultValue={opusFormData.price}
                        placeholder='price'
                        onChange={handleChange}
                    />
                </div>
                <input type="submit" value='Submit' className={btnStyle}/>
            </form>
            break
        case 'musician':
            editFields = allMusicians
            break
        case 'client':
            editFields = allClients
            break
    }

    useEffect(() => {
        if (adminLogin) getAllData()
    }, [])

    useEffect(() => {
        let tempComposers = []
        for (let opus of allOpuses) {
            if (!tempComposers.includes(opus.composer)) tempComposers.push(opus.composer)
        }
        setAllComposers(tempComposers.map(composer => composer.toUpperCase()).sort())
    }, [allOpuses])

    return adminLogin
    ? <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} text-xl min-h-[100vh]`}>
        <h1 className="text-center my-6">This is the GLVMS admin page. Use it to CRUD sensitive data (opuses, musicians, clients).</h1>
        <section className="flex items-center justify-around my-12">
            <button className={btnStyle} onClick={() => setCrudItem('opus')}>ADD/EDIT OPUS</button>
            <button className={btnStyle} onClick={() => setCrudItem('musician')}>ADD/EDIT MUSICIAN</button>
            <button className={btnStyle} onClick={() => setCrudItem('client')}>ADD/EDIT CLIENT</button>
        </section>
        <section className={crudItem ? 'flex my-12' : 'hidden'}>
            <div className={divStyle}>
            <p className={pStyle}>Add {crudItem}</p>
                {addFields}
            </div>
            <div className={divStyle}>
                <p className={pStyle}>Edit / Delete {crudItem}</p>
                {crudItem
                ? crudItem !== 'opus'
                    ? <select className={selectStyle} defaultValue={0}>
                        <option value={0} disabled>Select {crudItem}</option>
                        {editFields.map(item => <option key={item._id} value={item._id}>{item.lastName}, {item.firstName}</option>)}
                    </select>
                    : <>
                        <select className={selectStyle} defaultValue={0} onChange={(evt) => setCurrentComposer(evt.target.value)}>
                            <option value={0} disabled>Select composer</option>
                            {allComposers.map(composer => <option key={composer}>{composer}</option>)}
                        </select>
                        <select className={selectStyle} defaultValue={0} onChange={(evt) => setCurrentOpus(allOpuses.find(opus => opus._id === evt.target.value))}>
                            <option value={0} disabled>Select opus</option>
                            {sortObjects(editFields.filter(opus => opus.composer.toUpperCase() === currentComposer)).map(opus => <option key={opus._id} value={opus._id}>{opus.title}</option>)}
                        </select>
                        {currentOpus.title
                        ? <section>
                            <p className="underline text-center my-3">Details of the currently selected opus</p>
                            <p>Title: {currentOpus.title}</p>
                            <p>Composer: {currentOpus.composer}</p>
                            <div>{currentOpus.movements.length ? 'Available ' : ''}Movements: {currentOpus.movements.length
                                ? currentOpus.movements.map(mvmt => 
                                    <div key={mvmt.movementNumber} className="flex">
                                        <p className="ml-10">{mvmt.movementTitle}</p>
                                        <p className="ml-3">(${mvmt.movementPrice})</p>
                                    </div>
                                )
                                : 'None'}
                            </div>
                            <p>Instrumentation: {currentOpus.instrumentation.map((instrument, index) => <span key={index}>{index === 0 ? instrument : `, ${instrument}`}</span>)}</p>
                            <p>{currentOpus.movements.length ? 'Bulk ' : ''}Price: {currentOpus.price ? `$${currentOpus.price}` : 'Not available in bulk'}</p>
                        </section>
                        : ''}
                    </>
                : ''}
                <div className="flex justify-around items-center">
                    <button onClick={handleCRUD} id='edit' className={btnStyle + ' text-sm w-1/3 from-yellow-700 via-yellow-500 to-yellow-700'}>Edit this {crudItem}</button>
                    <button onClick={handleCRUD} id='delete' className={btnStyle + ' text-sm w-1/3 from-red-700 via-red-500 to-red-700'}>Delete this {crudItem}</button>
                </div>
            </div>
        </section>
    </main>
    : <h1 className={`${isMenuOpen ? 'z-0 opacity-5' : ''} text-center text-3xl my-24 h-[100vh]`}>ACCESS 
    DENIED. PLEASE LOG IN AS A GLVMS ADMIN.</h1>
}