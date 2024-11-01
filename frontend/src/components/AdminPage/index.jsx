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
    const labelStyle = 'w-1/3 lg:w-1/2 text-right m-2'
    const inputStyle = 'w-2/3 lg:w-1/2 text-left m-2 p-1 bg-stone-200 text-stone-800 rounded-lg'

    let addFields
    let editFields = []
    let tempInstrumentationList = []
    let movementsModal = <section className={showMovementsModal ? 'absolute left-1/4 z-40 border border-stone-200 w-1/2 flex flex-col justify-center items-center p-4 bg-stone-600' : 'hidden'}>
        <div className={divStyle + ' w-11/12'}>
            <label htmlFor="movementNumber" className={labelStyle}>Movement Number:</label>
            <input
                name='movementNumber'
                id='movementNumber'
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

    function handleCRUD(evt) {
        console.log(evt.target.id, crudItem)
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        console.log(opusFormData)
    }

    switch(crudItem) {
        case 'opus':
            editFields = allOpuses
            addFields = <form onSubmit={handleSubmit}>
                <div className={''}>
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
                <div className={''}>
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
                <button onClick={() => setShowMovementsModal(true)} className={btnStyle}>Add movement</button>
                {showMovementsModal ? movementsModal : ''}
                <div className={''}>
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
                <div className={''}>
                    <label htmlFor="price" className={labelStyle}>Price:</label>
                    <input
                        type='number'
                        name='price'
                        id='price'
                        className={inputStyle}
                        defaultValue={opusFormData.price}
                        placeholder='price'
                        onChange={handleChange}
                    />
                </div>
                <input type="submit" value='Submit'/>
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
        setAllComposers(tempComposers.sort())
    }, [allOpuses])

    return adminLogin
    ? <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} text-xl min-h-[100vh]`}>
        <h1>This is the GLVMS admin page. Use it to CRUD sensitive data (opuses, musicians, clients).</h1>
        <section className="flex items-center justify-around my-12">
            <button className={btnStyle} onClick={() => setCrudItem('opus')}>ADD/EDIT OPUS</button>
            <button className={btnStyle} onClick={() => setCrudItem('musician')}>ADD/EDIT MUSICIAN</button>
            <button className={btnStyle} onClick={() => setCrudItem('client')}>ADD/EDIT CLIENT</button>
        </section>
        <section className="flex my-12">
            <div className={divStyle}>
                <p className="text-center my-3 underline">ADD</p>
                <button onClick={handleCRUD} id='add' className={btnStyle + ' text-sm w-1/3'}>Add new {crudItem}</button>
                {addFields}
            </div>
            <div className={divStyle}>
                <p className="text-center my-3 underline">EDIT/DELETE</p>
                {crudItem
                ? crudItem !== 'opus'
                    ? <select className="text-stone-900" defaultValue={0}>
                        <option value={0} disabled>Select {crudItem}</option>
                        {editFields.map(item => <option key={item._id} value={item._id}>{item.lastName}, {item.firstName}</option>)}
                    </select>
                    : <>
                        <select className="text-stone-900" defaultValue={0} onChange={(evt) => setCurrentComposer(evt.target.value)}>
                            <option value={0} disabled>Select composer</option>
                            {allComposers.map(composer => <option key={composer}>{composer}</option>)}
                        </select>
                        <select className="text-stone-900" defaultValue={0}>
                            <option value={0} disabled>Select opus</option>
                            {sortObjects(editFields.filter(opus => opus.composer === currentComposer)).map(opus => <option key={opus._id} value={opus._id}>{opus.title}</option>)}
                        </select>
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