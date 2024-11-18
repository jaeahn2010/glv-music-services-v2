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
            {performances.length
            ? <section className="career-items my-24 min-h-[25rem]">
                <h1 className="text-xl text-center my-10 lg:text-3xl">Our performances</h1>
                {performances.map((performance, index) => 
                    <div key={index} className='card-flip flex my-5 w-11/12 md:w-3/4 h-[5rem] md:h-[10rem] mx-auto border border-stone-200 rounded-xl bg-gradient-to-r from-stone-800 via-stone-500 to-stone-800'>
                        <div className="card-front flex w-full">
                            <div className="w-full flex flex-col items-center justify-center">
                                <p className="text-sm md:text-2xl my-3">{performance.title}</p>
                                <div className='flex justify-between items-center w-5/6'>
                                    <p>{performance.locationName} ({performance.city}, {performance.state})</p>
                                    <p className={performance.date > new Date() ? 'text-green-300' : 'text-red-403'}>{new Date(new Date(performance.date).getTime() + 8 * 60 * 60 * 1000).toLocaleDateString()}, {nonMilitaryTime(performance.time)}</p>
                                </div>
                                <p className='my-3'>Featured GLVMS Musician(s): {performance.featuredGLVMSMusicians.map((musicianId, index) => {
                                    let musician = musicians.find(musician => musician._id === musicianId)
                                    return <span key={musician._id}>{index === performance.featuredGLVMSMusicians.length - 1 ? `${musician.firstName} ${musician.lastName}` : `${musician.firstName} ${musician.lastName}, `}</span>
                                })}</p>
                            </div>
                        </div>
                        <div className="hidden card-back flex flex-col items-center justify-center w-full h-full">
                            <div className='w-11/12 mx-auto'>  
                                {performance.collaborators.length
                                ? <>
                                    <p className='text-center underline'>Also featuring:</p>
                                    {performance.collaborators.map(collaborator =>
                                        <p key={collaborator.collaboratorLastName + collaborator.collaboratorFirstName} className='text-center'>{collaborator.collaboratorFirstName} {collaborator.collaboratorLastName} ({collaborator.collaboratorInstrument})</p>
                                    )}
                                    <p className='my-3'>{performance.description}</p>
                                </>
                                : ''}
                            </div>	
                        </div>
                    </div>
                )}
            </section>
            : <p className='text-center my-10'>No performances found. Please check your internet connection. If the problem persists, please contact the site administrator.</p>}
        </main>
    )
}