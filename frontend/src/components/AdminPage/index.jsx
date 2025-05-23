import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getOpuses, getClients, getMusicians, getPerformances, postOpus, postMusician, postPerformance, updateOpus, updateMusician, updateClient, updatePerformance, deleteOpus, deleteClient, deleteMusician, deletePerformance } from "../../../utils/backend"

export default function AdminPage({ isMenuOpen, sortObjects, instruments, states, scrollToTop, userType }) {
    const [crudItem, setCrudItem] = useState('')
    const [allOpuses, setAllOpuses] = useState([])
    const [allMusicians, setAllMusicians] = useState([])
    const [allClients, setAllClients] = useState([])
    const [allPerformances, setAllPerformances] = useState([])
    const [allComposers, setAllComposers] = useState([])
    const [currentOpus, setCurrentOpus] = useState({})
    const [currentMusician, setCurrentMusician] = useState({})    
    const [currentClient, setCurrentClient] = useState({})
    const [currentPerformance, setCurrentPerformance] = useState({})
    const [currentComposer, setCurrentComposer] = useState('')
    const [currentCollaborator, setCurrentCollaborator] = useState('')
    const [showMovementsModal, setShowMovementsModal] = useState(false)
    const [showCollaboratorModal, setShowCollaboratorModal] = useState(false)
    const [movementToBeAdded, setMovementToBeAdded] = useState({
        movementTitle: '',
        movementOfferingMusicians: [],
    })
    const [collaboratorToBeAdded, setCollaboratorToBeAdded] = useState({
        collaboratorLastName: '',
        collaboratorFirstName: '',
        collaboratorInstrument: '',
    })
    const [opusFormData, setOpusFormData] = useState({
        repType: '',
        composer: '',
        title: '',
        movements: [],
        instrumentation: [],
        offeringMusicians: [],
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
    const [performanceFormData, setPerformanceFormData] = useState({
        title: '',
        locationName: '',
        city: '',
        state: '',
        date: new Date(),
        time: '',
        featuredGLVMSMusicians: [],
        collaborators: [],
        openToPublic: true,
        minPrice: 0,
        maxPrice: 0,
        ticketsLink: '',
        description: '',
    })
    const navigate = useNavigate()
    const btnStyle = 'border border-stone-800 rounded-xl p-2 mx-auto my-4 hover:scale-105 hover:bg-amber-300 duration-500'
    const divStyle = 'border border-stone-800 w-1/2 flex flex-col justify-center p-1 m-2 rounded-xl'
    const labelStyle = 'w-1/4 text-right m-2'
    const inputStyle = 'w-3/4 text-left m-2 p-1 border border-stone-800 bg-stone-200 text-stone-800 rounded-lg'
    const pStyle = 'text-center my-3 underline'
    const selectStyle = 'text-stone-900 my-3 w-3/4 mx-auto'

    let addFields
    let editFields = []
    let movementsModal = <section className={showMovementsModal ? 'absolute left-1/4 z-40 border border-stone-800 w-1/2 flex flex-col justify-center items-center p-4 bg-stone-300' : 'hidden'}>
        <div className='text-center'>
            <label htmlFor="movementTitle">Movement Title</label>
            <input
                name='movementTitle'
                id='movementTitle'
                className={inputStyle}
                placeholder='Movement Title'
                onChange={handleMovementChange}
            />
        </div>
        <p className="underline text-center my-2">MUSICIAN(S) OFFERING THIS MOVEMENT</p>
            <div className={'mx-auto my-3 w-1/3'}>
                {allMusicians.map(musician => 
                    <div key={musician._id}>
                        <input
                            type='checkbox'
                            name='movementOfferingMusicians'
                            id={musician._id}
                            defaultValue={musician._id}
                            onChange={handleMovementChange}
                        />
                        <label htmlFor="movementOfferingMusicians" className={labelStyle}>{musician.lastName}, {musician.firstName}</label>
                    </div>
                )}
            </div>
        <button className={btnStyle} onClick={(evt) => {
            evt.preventDefault()
            if (!movementToBeAdded.movementTitle || !movementToBeAdded.movementOfferingMusicians.length) {
                alert('Please ensure that the title isn\'t empty and that there is at least 1 musician offering this movement.')
            } else {
                setOpusFormData({
                    ...opusFormData,
                    movements: opusFormData.movements.concat(movementToBeAdded)
                })
                setMovementToBeAdded({
                    movementTitle: '',
                    movementOfferingMusicians: [],
                })
                setShowMovementsModal(false)
            }
        }}>ADD</button>
        <button className={btnStyle} onClick={() => setShowMovementsModal(false)}>CLOSE</button>
    </section>
    let collaboratorsModal = <section className={showCollaboratorModal ? 'absolute left-1/4 z-40 border border-stone-200 w-1/2 flex flex-col justify-center items-center p-4 bg-stone-600' : 'hidden'}>
        <p className="text-center underline">Collaborator information</p>
        <div className='w-11/12 flex justify-center items-center p-1 m-2 rounded-xl'>
            <label htmlFor="collaboratorLastName" className={labelStyle}>Last name:</label>
            <input
                name='collaboratorLastName'
                id='collaboratorLastName'
                className={inputStyle}
                placeholder='Collaborator last name'
                onChange={handleCollaboratorChange}
            />
        </div>
        <div className='w-11/12 flex justify-center items-center p-1 m-2 rounded-xl'>
            <label htmlFor="collaboratorFirstName" className={labelStyle}>First name:</label>
            <input
                name='collaboratorFirstName'
                id='collaboratorFirstName'
                className={inputStyle}
                placeholder='Collaborator first name'
                onChange={handleCollaboratorChange}
            />
        </div>
        <div className='w-11/12 flex justify-center items-center p-1 m-2 rounded-xl'>
            <label htmlFor="collaboratorInstrument" className={labelStyle}>Instrument:</label>
            <select
                name='collaboratorInstrument'
                id='collaboratorInstrument'
                className={inputStyle}
                defaultValue={0}
                onChange={handleCollaboratorChange}
            >
                <option value={0} disabled>Select an instrument</option>
                {instruments.map(instrument => <option key={instrument} value={instrument}>{instrument}</option>)}
            </select>
        </div>
        <div className="flex justify-around items-center w-full">
            <button className={btnStyle} onClick={() => {
                setPerformanceFormData({
                    ...performanceFormData,
                    collaborators: performanceFormData.collaborators.concat(collaboratorToBeAdded)
                })
                setCollaboratorToBeAdded({
                    collaboratorLastName: '',
                    collaboratorFirstName: '',
                    collaboratorInstrument: '',
                })
                setShowCollaboratorModal(false)
            }}>ADD</button>
            <button className={btnStyle} onClick={(evt) => {
                evt.preventDefault()
                setShowCollaboratorModal(false)
            }}>CLOSE</button>
        </div>

    </section>

    async function getAllData() {
        try {
            const opusData = await getOpuses()
            const musiciansData = await getMusicians()
            const clientsData = await getClients()
            const performancesData = await getPerformances()
            setAllOpuses(opusData)
            setAllMusicians(musiciansData)
            setAllClients(clientsData)
            setAllPerformances(performancesData)
        } catch {
            alert('Cannot load necessary data at this time. Please check your internet connection and/or the source code.')
        }
    }

    function handleMovementChange(evt) {
        if (evt.target.name === 'movementOfferingMusicians') {
            if (evt.target.checked && !movementToBeAdded.movementOfferingMusicians.includes(evt.target.id)) {
                setMovementToBeAdded({...movementToBeAdded, movementOfferingMusicians: movementToBeAdded.movementOfferingMusicians.concat(evt.target.id)})
            } else if (!evt.target.checked && movementToBeAdded.movementOfferingMusicians.includes(evt.target.id)) {
                setMovementToBeAdded({...movementToBeAdded, movementOfferingMusicians: movementToBeAdded.movementOfferingMusicians.filter(musician => musician !== evt.target.id)})
            }
        } else {
            setMovementToBeAdded({...movementToBeAdded, [evt.target.name]: evt.target.value})
        }
    }

    function handleCollaboratorChange(evt) {
        setCollaboratorToBeAdded({...collaboratorToBeAdded, [evt.target.name]: evt.target.value})
    }

    function handleChange(evt) {
        switch(crudItem) {
            case 'opus':
                if (evt.target.name === 'instruments') {
                    if (evt.target.checked && !opusFormData.instrumentation.includes(evt.target.id)) {
                        setOpusFormData({...opusFormData, instrumentation: opusFormData.instrumentation.concat(evt.target.id)})
                    } else if (!evt.target.checked && opusFormData.instrumentation.includes(evt.target.id)) {
                        setOpusFormData({...opusFormData, instrumentation: opusFormData.instrumentation.filter(instrument => instrument !== evt.target.id)})
                    }
                } else if (evt.target.name === 'offeringMusicians') {
                    if (evt.target.checked && !opusFormData.offeringMusicians.includes(evt.target.id)) {
                        setOpusFormData({...opusFormData, offeringMusicians: opusFormData.offeringMusicians.concat(evt.target.id)})
                    } else if (!evt.target.checked && opusFormData.instrumentation.includes(evt.target.id)) {
                        setOpusFormData({...opusFormData, offeringMusicians: opusFormData.offeringMusicians.filter(musician => musician !== evt.target.id)})
                    }
                } else {
                    setOpusFormData({...opusFormData, [evt.target.name]: evt.target.value})
                }
                break
            case 'musician':
                break
            case 'client':
                break
            case 'performance':
                if (evt.target.name !== 'featuredGLVMSMusicians') {
                    setPerformanceFormData({...performanceFormData, [evt.target.name]: evt.target.value})
                } else {
                    if (evt.target.checked && !performanceFormData.featuredGLVMSMusicians.includes(evt.target.value)) {
                        setPerformanceFormData({...performanceFormData, featuredGLVMSMusicians: performanceFormData.featuredGLVMSMusicians.concat(evt.target.value)})
                    } else if (!evt.target.checked && performanceFormData.featuredGLVMSMusicians.includes(evt.target.value)) {
                        setPerformanceFormData({...performanceFormData, featuredGLVMSMusicians: performanceFormData.featuredGLVMSMusicians.filter(musicianId => musicianId !== evt.target.value)})
                    }
                }
                break
        }
    }

    async function handleCRUD(evt) {
        if (evt.target.id === 'edit') {
            console.log('editing ' + crudItem)
            console.log('under construction')
        } else {
            if (confirm(`Are you sure you would like to delete this ${crudItem}?`)) {
                let deletedItem
                switch(crudItem) {
                    case 'opus':
                        deletedItem = await deleteOpus(currentOpus._id)
                        break
                    case 'musician':
                        deletedItem = await deleteMusician(currentMusician._id)
                        break
                    case 'client':
                        deletedItem = await deleteClient(currentClient._id)
                        break
                    case 'performance':
                        deletedItem = await deletePerformance(currentPerformance._id)
                        break
                }
                console.log('Successfully deleted: ', deletedItem)
                alert(`Successfully deleted this ${crudItem}`)
            }
        }
    }

    async function handleSubmit(evt) {
        evt.preventDefault()
        if (confirm(`Are you sure you would like to add this new ${crudItem}?`)) {
            try {
                let newItem
                switch(crudItem) {
                    case 'opus':
                        newItem = await postOpus(opusFormData)
                        setOpusFormData({
                            repType: '',
                            composer: '',
                            title: '',
                            movements: [],
                            instrumentation: [],
                            offeringMusicians: [],
                        })
                        break
                    case 'musician':
                        newItem = await postMusician(musicianFormData)
                        setMusicianFormData({
                            firstName: '',
                            lastName: '',
                            instruments: [],
                            email: '',
                            availableRepertoire: [],
                        })
                        break
                    case 'performance':
                        newItem = await postPerformance(performanceFormData)
                        setPerformanceFormData({
                            title: '',
                            locationName: '',
                            city: '',
                            state: '',
                            date: new Date(),
                            time: '',
                            featuredGLVMSMusicians: [],
                            collaborators: [],
                            openToPublic: true,
                            minPrice: 0,
                            maxPrice: 0,
                            ticketsLink: '',
                            description: '',
                        })
                        break
                }
                if (newItem) alert(`Successfully created new ${crudItem}.`)
                navigate('/')
            } catch (err) {
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
                    <label htmlFor="repType" className={labelStyle}>Repertoire Type:</label>
                    <select
                        name='repType'
                        id='repType'
                        className={inputStyle}
                        defaultValue={0}
                        onChange={handleChange}
                    >
                        <option value={0} disabled>Select a repertoire type</option>
                        {['Solo', 'Chamber Music', 'Piano Reduction'].map(type => <option key={type} value={type}>{type}</option>)}
                    </select>
                </div>
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
                ? opusFormData.movements.map((mvmt, idx) => <div key={idx} className="border border-stone-200 rounded-xl w-3/4 mx-auto">
                    <p>
                        {idx + 1}. {mvmt.movementTitle}&nbsp;
                        <span>({mvmt.movementOfferingMusicians.map((musicianId, index) => {
                            let foundMusician = allMusicians.find(musician => musician._id === musicianId)
                            return <span key={musicianId}>{index === mvmt.movementOfferingMusicians.length - 1 ? `${foundMusician.firstName} ${foundMusician.lastName}` : `${foundMusician.firstName} ${foundMusician.lastName}, `}</span>
                    })})</span>
                    </p>
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
                                defaultValue={instrument}
                                onChange={handleChange}
                            />
                            <label htmlFor="instruments" className={labelStyle}>{instrument}</label>
                        </div>
                    )}
                </div>
                <p className="underline text-center my-2">MUSICIAN(S) OFFERING THIS REPERTOIRE</p>
                <div className={'mx-auto my-3 w-1/3'}>
                    {allMusicians.map(musician => 
                        <div key={musician._id}>
                            <input
                                type='checkbox'
                                name='offeringMusicians'
                                id={musician._id}
                                defaultValue={musician._id}
                                onChange={handleChange}
                            />
                            <label htmlFor="offeringMusicians" className={labelStyle}>{musician.lastName}, {musician.firstName}</label>
                        </div>
                    )}
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
        case 'performance':
            editFields = allPerformances
            addFields = <form onSubmit={handleSubmit} className="flex flex-col">
                <div className={'mx-auto w-11/12 flex justify-center items-center p-1 m-2 rounded-xl'}>
                    <label htmlFor="title" className={labelStyle}>Title:</label>
                    <input
                        name='title'
                        id='title'
                        className={inputStyle}
                        defaultValue={performanceFormData.title}
                        placeholder='Title'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={'mx-auto w-11/12 flex justify-center items-center p-1 m-2 rounded-xl'}>
                    <label htmlFor="locationName" className={labelStyle}>Location Name:</label>
                    <input
                        name='locationName'
                        id='locationName'
                        className={inputStyle}
                        defaultValue={performanceFormData.locationName}
                        placeholder='Location Name'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={'mx-auto w-11/12 flex justify-center items-center p-1 m-2 rounded-xl'}>
                    <label htmlFor="city" className={labelStyle}>City:</label>
                    <input
                        name='city'
                        id='city'
                        className={inputStyle}
                        defaultValue={performanceFormData.city}
                        placeholder='City'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={'mx-auto w-11/12 flex justify-center items-center p-1 m-2 rounded-xl'}>
                    <label htmlFor="state" className={labelStyle}>State:</label>
                    <select
                        name='state'
                        id='state'
                        className={inputStyle}
                        defaultValue={0}
                        onChange={handleChange}
                        required
                    >
                        <option value={0} disabled>Select a state</option>
                        {states.map(state => <option key={state} value={state}>{state}</option>)}
                    </select>
                </div>
                <div className={'mx-auto w-11/12 flex justify-center items-center p-1 m-2 rounded-xl'}>
                    <label htmlFor="date" className={labelStyle}>Date:</label>
                    <input
                        type='date'
                        name='date'
                        id='date'
                        className={inputStyle}
                        defaultValue={performanceFormData.date}
                        placeholder={new Date()}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={'mx-auto w-11/12 flex justify-center items-center p-1 m-2 rounded-xl'}>
                    <label htmlFor="time" className={labelStyle}>Time:</label>
                    <input
                        type='time'
                        name='time'
                        id='time'
                        className={inputStyle}
                        defaultValue={performanceFormData.time}
                        placeholder='12:00'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={'mx-auto w-11/12 p-1 m-2'}>
                    <p className="text-center underline">Featured Forte & Piano Musicians</p>
                    {allMusicians.map(musician => 
                        <div key={musician._id} className="flex justify-start items-center mx-auto w-1/2">
                            <input
                                type='checkbox'
                                id={musician._id}
                                name='featuredGLVMSMusicians'
                                value={musician._id}
                                className='m-2 p-1 bg-stone-200 text-stone-800 rounded-lg'
                                onChange={handleChange}
                            />
                            <label htmlFor={musician._id} className='text-right m-2'>{musician.lastName}, {musician.firstName}</label>
                        </div>
                    )}
                </div>
                <p className="text-center underline">Collaborators</p>
                <button onClick={(evt) => {
                    evt.preventDefault()
                    setShowCollaboratorModal(true)
                    scrollToTop()
                }} className={btnStyle + ' text-center'}>Add collaborator</button>
                {performanceFormData.collaborators.length
                ? <ul className="list-decimal list-inside p-2 my-3 w-3/4 mx-auto"> {performanceFormData.collaborators.map((collaborator, index) => 
                    <div key={index} className="flex justify-between items-center border-b border-stone-200">
                        <li>{collaborator.collaboratorLastName}, {collaborator.collaboratorFirstName} ({collaborator.collaboratorInstrument})</li>
                        <button className='my-1 text-sm hover:text-red-300' onClick={(evt) => {
                            evt.preventDefault()
                            setPerformanceFormData({
                                ...performanceFormData,
                                collaborators: performanceFormData.collaborators.filter(collaboratorToBeDeleted => collaboratorToBeDeleted.collaboratorLastName !== collaborator.collaboratorLastName || collaboratorToBeDeleted.collaboratorFirstName !== collaborator.collaboratorFirstName || collaboratorToBeDeleted.collaboratorInstrument !== collaborator.collaboratorInstrument)
                            })
                            setCollaboratorToBeAdded({
                                collaboratorLastName: '',
                                collaboratorFirstName: '',
                                collaboratorInstrument: '',
                            })
                        }}>DELETE</button>
                    </div>
                )}</ul>
                : ''}
                {showCollaboratorModal ? collaboratorsModal : ''}
                <div className={'mx-auto w-11/12 p-1 m-2'}>
                    <p className="text-center underline">Open to Public</p>
                    {[true, false].map(bool => 
                        <div key={bool} className="flex justify-start items-center mx-auto w-1/2">
                            <input
                                type='radio'
                                id={'openToPublic-' + bool}
                                name='openToPublic'
                                value={bool}
                                className='m-2 p-1 bg-stone-200 text-stone-800 rounded-lg'
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor={'openToPublic-' + bool} className='text-right m-2'>{bool ? 'Yes' : 'No'}</label>
                        </div>
                    )}
                </div>
                <div className={'mx-auto w-11/12 flex justify-center items-center p-1 m-2 rounded-xl'}>
                    <label htmlFor="minPrice" className={labelStyle}>Minimum ticket price:</label>
                    <input
                        type='number'
                        name='minPrice'
                        id='minPrice'
                        className={inputStyle}
                        defaultValue={performanceFormData.minPrice}
                        placeholder={0}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={'mx-auto w-11/12 flex justify-center items-center p-1 m-2 rounded-xl'}>
                    <label htmlFor="maxPrice" className={labelStyle}>Maximum ticket price:</label>
                    <input
                        type='number'
                        name='maxPrice'
                        id='maxPrice'
                        className={inputStyle}
                        defaultValue={performanceFormData.maxPrice}
                        placeholder={0}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={'mx-auto w-11/12 flex justify-center items-center p-1 m-2 rounded-xl'}>
                    <label htmlFor="ticketsLink" className={labelStyle}>Tickets URL:</label>
                    <input
                        name='ticketsLink'
                        id='ticketsLink'
                        className={inputStyle}
                        defaultValue={performanceFormData.ticketsLink}
                        placeholder='Tickets URL'
                        onChange={handleChange}
                    />
                </div>
                <div className={'mx-auto w-11/12 flex justify-center items-center p-1 m-2 rounded-xl'}>
                    <label htmlFor="description" className={labelStyle}>Description:</label>
                    <textarea
                        name='description'
                        id='description'
                        className={inputStyle}
                        defaultValue={performanceFormData.description}
                        placeholder='Description'
                        onChange={handleChange}
                    />
                </div>
                <input type="submit" value='Submit' className={btnStyle}/>
            </form>
            break
    }

    useEffect(() => {
        if (userType === 'admin') getAllData()
    }, [])

    useEffect(() => {
        let tempComposers = []
        for (let opus of allOpuses) {
            if (!tempComposers.includes(opus.composer)) tempComposers.push(opus.composer)
        }
        setAllComposers(tempComposers.map(composer => composer.toUpperCase()).sort())
    }, [allOpuses])

    return userType === 'admin'
    ? <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} text-xl min-h-[100vh] font-montserrat`}>
        <h1 className="text-center my-6">This is the Forte & Piano admin page. Use it to CRUD sensitive data (opuses, musicians, clients, performances).</h1>
        <section className="flex items-center justify-around my-12">
            <button className={btnStyle} onClick={() => setCrudItem('opus')}>ADD/EDIT OPUS</button>
            <button className={btnStyle} onClick={() => setCrudItem('musician')}>ADD/EDIT MUSICIAN</button>
            <button className={btnStyle} onClick={() => setCrudItem('client')}>ADD/EDIT CLIENT</button>
            <button className={btnStyle} onClick={() => setCrudItem('performance')}>ADD/EDIT PERFORMANCE</button>
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
                                    <div key={mvmt.movementTitle} className="flex">
                                        <p className="ml-10">{mvmt.movementTitle}</p>
                                    </div>
                                )
                                : 'None'}
                            </div>
                            <p>Instrumentation: {currentOpus.instrumentation.map((instrument, index) => <span key={index}>{index === 0 ? instrument : `, ${instrument}`}</span>)}</p>
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
    : <h1 className={`${isMenuOpen ? 'z-0 opacity-5' : ''} text-center text-3xl my-24 h-[100vh] font-bodoni`}>ACCESS 
    DENIED. PLEASE LOG IN AS A FORTE & PIANO ADMIN.</h1>
}