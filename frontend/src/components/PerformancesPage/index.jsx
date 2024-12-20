import { useState, useEffect } from 'react'
import { getPerformances, getMusicians } from '../../../utils/backend'
import './styles.css'

export default function PerformancesPage({ isMenuOpen }) {
    const [performances, setPerformances] = useState([])
    const [musicians, setMusicians] = useState([])

    async function getPerformancesData() {
        try {
            const allPerformances = await getPerformances()
            setPerformances(allPerformances.sort((a, b) => {
                const dateA = a.date
                const dateB = b.date
                if (dateA < dateB) return -1
                if (dateA > dateB) return 1
                if (dateA === dateB) {
                    const [hourA, minuteA] = a.time.split(':')
                    const [hourB, minuteB] = b.time.split(':')
                    const timeA = hourA + minuteA * 60
                    const timeB = hourB + minuteB * 60
                    if (timeA < timeB) return -1
                    if (timeA > timeB) return 1
                    return 0
                }
            }))
        } catch(err) {
			alert('Cannot load performances data at this time. Please check your internet connection. If the problem persists, please contact the site administrator.')
		}
    }

    async function getMusiciansData() {
        try {
            const allMusicians = await getMusicians()
            setMusicians(allMusicians)
        } catch(err) {
            alert('Cannot load musicians data at this time. Please check your internet connection. If the problem persists, please contact the site administrator.')
        }
    }

    function nonMilitaryTime(time) {
        const [h, m] = time.split(':')
        if (Number(h) < 12) {
            return Number(h) === 0 ? `12:${m} AM` : `${h}:${m} AM`
        } else {
            return Number(h) === 12 ? `12:${m} PM` : `${h - 12}:${m} PM`
        }
    }

    useEffect(() => {
		getPerformancesData()
        getMusiciansData()
	}, [])

    return (
        <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} font-poppins min-h-[125vh]`}>
            <h1 className="text-xl text-center my-10 lg:text-3xl">Our performances</h1>
            <p className='w-3/4 mx-auto my-10'>Come check out our fantastic musicians in action! Hover over each card to see other featured musicians and a short description of each performance. Performance dates in red indicate past events, whereas those in green indicate upcoming performances.</p>
            {performances.length
            ? <section className="career-items my-24 min-h-[25rem]">
                {performances.map((performance, index) => 
                    <div key={index} className='card-flip flex my-10 w-11/12 md:w-3/4 h-[5rem] md:h-[15rem] mx-auto border border-stone-200 rounded-xl bg-gradient-to-r from-stone-800 via-stone-500 to-stone-800'>
                        <div className="card-front flex w-full">
                            <div className="w-full flex flex-col items-center justify-center">
                                <p className="text-sm md:text-2xl underline">{performance.title}</p>
                                <div className='flex justify-between items-center w-5/6 my-8 text-lg'>
                                    <p>{performance.locationName} ({performance.city}, {performance.state})</p>
                                    <p className={new Date(new Date(performance.date).getTime() + 8 * 60 * 60 * 1000) > new Date() ? 'text-green-300' : 'text-red-300'}>{new Date(new Date(performance.date).getTime() + 8 * 60 * 60 * 1000).toLocaleDateString()}, {nonMilitaryTime(performance.time)}</p>
                                </div>
                                <p>Featured GLVMS Musician(s): {performance.featuredGLVMSMusicians.map((musicianId, index) => {
                                    let musician = musicians.find(musician => musician._id === musicianId)
                                    return musician
                                    ? <span key={musician._id}>{index === performance.featuredGLVMSMusicians.length - 1 ? `${musician.firstName} ${musician.lastName}` : `${musician.firstName} ${musician.lastName}, `}</span>
                                    : ''
                                })}</p>
                            </div>
                        </div>
                        <div className="hidden card-back flex flex-col items-center justify-center w-full h-full">
                            <div className='w-11/12 mx-auto'>  
                                {performance.collaborators.length
                                ? <>
                                    <p className='text-center underline'>Also featuring:</p>
                                    <div className={`${performance.collaborators.length > 5 ? 'columns-2' : ''}`}>
                                        {performance.collaborators.map(collaborator =>
                                            <p key={collaborator.collaboratorLastName + collaborator.collaboratorFirstName} className='text-center'>{collaborator.collaboratorFirstName} {collaborator.collaboratorLastName} ({collaborator.collaboratorInstrument})</p>
                                        )}
                                    </div>              
                                </>
                                : ''}
                                <p className='my-3'>{performance.description}</p>
                                <div className='flex justify-between my-3 text-lg'>
                                    <p className={performance.openToPublic ? 'text-green-300' : 'text-red-300'}>{performance.openToPublic ? 'Open to Public' : 'Private Event'}</p>
                                    <p>Ticket price range: <span className={!performance.minPrice && !performance.maxPrice ? 'text-green-300' : 'text-amber-300'}>{!performance.minPrice && !performance.maxPrice ? 'Free event' : `$${performance.minPrice}-$${performance.maxPrice}`}</span></p>
                                </div>
                            </div>	
                        </div>
                    </div>
                )}
            </section>
            : <p className='text-center my-10'>No performances found. Please check your internet connection. If the problem persists, please contact the site administrator.</p>}
        </main>
    )
}