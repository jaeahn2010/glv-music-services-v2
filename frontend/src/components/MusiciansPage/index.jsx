import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MusiciansGallery from '../MusiciansGallery'
import { submitForm } from '../../../utils/backend'

export default function MusiciansPage({ isMenuOpen, isMobile, allMusicians, setMusicianDetails, loginStatus, categories, instrumentsExtended }) {
    const [showForm, setShowForm] = useState(false)
    const [filteredMusicians, setFilteredMusicians] = useState([])
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        categories: [],
        instruments: [],
        resume: null
    })
    const [resume, setResume] = useState(null)
    const [fileMessage, setFileMessage] = useState('')
    const [isRecaptchaReady, setRecaptchaReady] = useState(false)
    const navigate = useNavigate()
    const divStyle = 'my-2 w-11/12 mx-auto'
    const divStyle2 = 'my-2 text-sm lg:text-md w-full lg:w-1/2 mx-auto flex items-center lg:pr-10'
    const pStyle = 'my-3 text-center text-sm lg:text-base'
    const labelStyle = 'w-1/3 mx-2 text-right lg:text-base'
    const inputStyle = 'w-2/3 mx-2 p-1 rounded-xl text-stone-800 lg:text-base'
    const btnStyle = 'border border-stone-800 px-2 py-1 my-6 rounded-xl hover:bg-amber-300 hover:cursor-pointer duration-500 hover:scale-105'

    useEffect(() => { // wait until recaptcha is available
        const checkRecaptcha = setInterval(() => {
            if (window.grecaptcha && typeof window.grecaptcha.ready === "function") {
                clearInterval(checkRecaptcha)
                setRecaptchaReady(true)
                console.log("reCAPTCHA script loaded successfully.")
            }
        }, 500)

        return () => clearInterval(checkRecaptcha)
    }, [])

    //get full list of musicians, or filter by instrument
	function getFilteredMusiciansData(filter) {
		try {
			let filteredMusiciansData = []
			filter === 'none' ? filteredMusiciansData = musiciansData : filteredMusiciansData = musiciansData.filter(musician => musician.instrumentation.includes(filter))
			setFilteredMusicians(filteredMusiciansData)
		} catch {
			alert('Cannot load musicians data at this time. Please check your internet connection. If the problem persists, please contact the site administrator.')
		}
	}

    function handleChange(evt) {
        if (['email', 'firstName', 'lastName'].includes(evt.target.name)) {
            setFormData({...formData, [evt.target.name]: evt.target.value})
        } else if (['categories', 'instruments'].includes(evt.target.name)) {
            if (evt.target.checked && !formData[evt.target.name].includes(evt.target.value)) {
                setFormData({...formData, [evt.target.name]: formData[evt.target.name].concat(evt.target.value)})
            } else if (!evt.target.checked && formData[evt.target.name].includes(evt.target.value)) {
                setFormData({...formData, [evt.target.name]: formData[evt.target.name].filter(item => item !== evt.target.value)})
            }
        } else { // resume
            setResume(evt.target.files[0])
            setFormData({...formData, [evt.target.name]: evt.target.files[0]})
        }
    }

    async function handleSubmit(evt) {
        evt.preventDefault()
        if (!isRecaptchaReady || !window.grecaptcha) {
            alert("reCAPTCHA is not ready. Please try again.")
            return
        }
        if (!resume) return setFileMessage('Please select a file first.')

        const officialFormData = new FormData()
        officialFormData.append('resume', resume)
        officialFormData.append('requestType', 'joinUs')
        officialFormData.append('clientEmail', formData.email)
        officialFormData.append('firstName', formData.firstName)
        officialFormData.append('lastName', formData.lastName)
        officialFormData.append('categories', formData.categories)        
        officialFormData.append('instruments', formData.instruments)

        try {
            if (!window.grecaptcha) {
                alert("reCAPTCHA failed to load. Please refresh the page.")
                return
            }
            const token = await window.grecaptcha.execute("6LcXZAMrAAAAAPjCkXBkmMBJkCS6h4P1wRXi9Gcl", { action: "submit" })
            officialFormData.append('captchaValue', token)
            submitForm(officialFormData)
                .then((res) => {
                    setFileMessage(res.message)
                    alert('Successfully sent resume! We will get back to you as soon as we can.')
                    navigate('/')
                })
                .catch((err) => {
                    setFileMessage(err.response?.data?.error || 'File upload failed.')
                })
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} font-montserrat min-h-[125vh]`}>
            <h1 className="text-xl text-center my-10 lg:text-3xl">Our Musicians</h1>
            <MusiciansGallery
                allMusicians={allMusicians}
                getFilteredMusiciansData={getFilteredMusiciansData}
                setMusicianDetails={setMusicianDetails}
                loginStatus={loginStatus}
            />
            <section className='border-t border-stone-800 my-12 py-12 mx-auto w-5/6 flex flex-col justify-center'>
                <h2 className='text-2xl text-center my-4'>JOIN THE FORTE & PIANO TEAM</h2>
                <p className='lg:text-lg'>Are you a music performer, teacher, composer, or arranger based in Las Vegas, NV? Are you looking to grow your studio, clientele, or sell more of your works? Join our team! Fill out the form below, and we will contact you for a phone interview. If we resonate well with each other, we will then schedule an in-person interview in a semi-formal audition setting, where we will further assess how we fit each other's needs.</p>
                <form onSubmit={handleSubmit} className={showForm ? 'w-11/12 lg:w-5/6 mx-auto my-6 py-10 flex flex-col items-center border border-stone-800 rounded-xl bg-gray-300' : 'hidden'} encType="multipart/form-data">
                        <div className={divStyle2}>
                            <label htmlFor="email" className={labelStyle}>Email:</label>
                            <input
                                type='email'
                                className={inputStyle}
                                name='email'
                                id='email'
                                defaultValue={formData.email}
                                placeholder='email@email.com'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={divStyle2}>
                            <label htmlFor="firstName" className={labelStyle}>First Name:</label>
                            <input
                                className={inputStyle}
                                name='firstName'
                                id='firstName'
                                defaultValue={formData.firstName}
                                placeholder='First Name'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={divStyle2}>
                            <label htmlFor="lastName" className={labelStyle}>Last Name:</label>
                            <input
                                className={inputStyle}
                                name='lastName'
                                id='lastName'
                                defaultValue={formData.lastName}
                                placeholder='Last Name'
                                onChange={handleChange}
                                required
                            />
                        </div>
                    <p className={pStyle}>Please check as many of the following categories as it applies to you:</p>
                    <div className={divStyle + `${isMobile ? '' : ' columns-2'}`}>
                        {categories.map(category => 
                            <div key={category} className='flex items-center mx-auto'>
                                <input
                                    type="checkbox"
                                    className='mx-2'
                                    name='categories'
                                    id={category}
                                    value={category}
                                    onChange={handleChange}
                                />
                                <label htmlFor={category}>{category}</label>
                            </div>
                        )}
                    </div>
                    <p className={pStyle}>Please check all instruments you can play professionally:</p>
                    <div className={divStyle + `${isMobile ? '' : ' columns-3'}`}>
                        {instrumentsExtended.map(instrument => 
                            <div key={instrument} className='flex items-center mx-auto'>
                                <input
                                    type="checkbox"
                                    className='mx-2'
                                    name='instruments'
                                    id={instrument}
                                    value={instrument}
                                    onChange={handleChange}
                                />
                                <label htmlFor={instrument}>{instrument}</label>
                            </div>
                        )}
                    </div>
                    <p className={pStyle}>Please upload your latest resume:</p>
                    <div className='text-center'>
                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className='w-11/12 text-sm border border-stone-800 p-3 rounded-xl'
                            name='resume'
                            id='resume'
                            onChange={handleChange}
                        />
                    </div>
                    <input type="submit" value='Submit' className={btnStyle}/>
                    {fileMessage && <p className='text-red-400'>{fileMessage}</p>}
                </form>
                <button className={btnStyle + ' lg:w-1/6 mx-auto'} onClick={() => setShowForm(!showForm)}>{showForm ? 'CLOSE FORM' : 'OPEN FORM'}</button>
            </section>
        </main>
    )
}