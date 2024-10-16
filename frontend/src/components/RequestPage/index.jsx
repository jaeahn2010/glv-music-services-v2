import { useState } from "react"
import { sendEmail } from "../../../utils/backend"

export default function RequestPage({ isMenuOpen, musicians, loginStatus, userCart, totalPrice, states }) {
    const [requestData, setRequestData] = useState({
        clientEmail: '',
        musicianEmail: '',
        eventName: '',
        eventLocation: {
            locationName: '',
            address: '',
            city: '',
            state: '',
            zipCode: 0,
        },
        eventDate: new Date(),
        eventStartTime: '',
        eventEndTime: '',
        requestedRepertoire: [],
        additionalComments: '',
        status: 'pending',
    })
    let divStyle = 'w-1/2 mx-auto flex'
    let labelStyle = 'w-1/2 text-right m-2'
    let inputStyle = 'w-1/2 text-left m-2 p-1 bg-stone-200 text-stone-800 rounded-lg'

    function handleChange(evt) {
        setRequestData({
            ...requestData,
            [evt.target.name]: evt.target.value
        })
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        sendEmail({
            clientEmail: localStorage.getItem('email'),
            musicianEmail: requestData.musicianEmail,
            eventName: requestData.eventName,
            eventLocation: {
                locationName: requestData.locationName,
                address: requestData.address,
                city: requestData.city,
                state: requestData.state,
                zipCode: requestData.zipCode,
            },
            eventDate: requestData.eventDate,
            eventStartTime: requestData.eventStartTime,
            eventEndTime: requestData.eventEndTime,
            requestedRepertoire: userCart,
            additionalComments: requestData.additionalComments,
            status: 'pending',
        })
        setRequestData({
            clientEmail: '',
            musicianEmail: '',
            eventName: '',
            eventLocation: {
                locationName: '',
                address: '',
                city: '',
                state: '',
                zipCode: 0,
            },
            eventDate: new Date(),
            eventStartTime: '',
            eventEndTime: '',
            requestedRepertoire: [],
            additionalComments: '',
            status: 'pending',
        })
    }

    return (
        <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} font-poppins`}>
            <div className="flex flex-col justify-center items-center w-11/12 mx-auto my-6">
                <p className="text-xl">Please fill out the form below to finalize your request.</p>
            </div>
            <form onSubmit={handleSubmit} className="w-11/12 mx-auto my-12 flex flex-col justify-center items-center">
                <div className={divStyle}>
                    <label htmlFor="musicianEmail" className={labelStyle}>Requested musician:</label>
                    <select
                        name="musicianEmail"
                        id="musicianEmail"
                        className={`text-stone-800 ${inputStyle}`}
                        defaultValue={0}
                        onChange={handleChange}
                    >
                        <option value="0" disabled>Choose a musician</option>
                        {musicians.map(musician => <option key={musician._id} value={musician.email}>{musician.lastName}, {musician.firstName}</option>)}
                    </select>
                </div>
                <div className={divStyle}>
                    <label htmlFor="eventName" className={labelStyle}>Event Name:</label>
                    <input
                        name='eventName'
                        id='eventName'
                        className={inputStyle}
                        defaultValue={requestData.eventName}
                        placeholder="Event Name"
                        onChange={handleChange}
                    />
                </div>
                <section className="w-full my-4">
                    <p className="text-center underline text-xl">Event location</p>
                    <div className={divStyle}>
                        <label htmlFor="locationName" className={labelStyle}>Location Name:</label>
                        <input
                            name='locationName'
                            id='locationName'
                            className={inputStyle}
                            defaultValue={requestData.eventLocation.locationName}
                            placeholder="Location Name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={divStyle}>
                        <label htmlFor="address" className={labelStyle}>Address:</label>
                        <input
                            name='address'
                            id='address'
                            className={inputStyle}
                            defaultValue={requestData.eventLocation.address}
                            placeholder="Location Address"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={divStyle}>
                        <label htmlFor="city" className={labelStyle}>City:</label>
                        <input
                            name='city'
                            id='city'
                            className={inputStyle}
                            defaultValue={requestData.eventLocation.city}
                            placeholder="City"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={divStyle}>
                        <label htmlFor="state" className={labelStyle}>State:</label>
                        <select
                            name="state"
                            id="state"
                            className={`text-stone-800 ${inputStyle}`}
                            defaultValue={0}
                            onChange={handleChange}
                        >
                            <option value="0" disabled>Choose a state</option>
                            {states.map(state => <option key={state} value={state}>{state}</option>)}
                        </select>
                    </div>
                    <div className={divStyle}>
                        <label htmlFor="zipCode" className={labelStyle}>Zip Code:</label>
                        <input
                            name='zipCode'
                            type='number'
                            id='zipCode'
                            className={inputStyle}
                            defaultValue={requestData.eventLocation.zipCode}
                            placeholder="Zip Code"
                            onChange={handleChange}
                        />
                    </div>
                </section>
                <div className={divStyle}>
                    <label htmlFor="eventDate" className={labelStyle}>Event Date:</label>
                    <input
                        name='eventDate'
                        type='date'
                        id='eventDate'
                        className={inputStyle}
                        defaultValue={requestData.eventDate}
                        placeholder={new Date()}
                        onChange={handleChange}
                    />
                </div>
                <div className={divStyle}>
                    <label htmlFor="eventStartTime" className={labelStyle}>Event Start Time:</label>
                    <input
                        name='eventStartTime'
                        type='time'
                        id='eventStartTime'
                        className={inputStyle}
                        defaultValue={requestData.eventStartTime}
                        onChange={handleChange}
                    />
                </div>
                <div className={divStyle}>
                    <label htmlFor="eventEndTime" className={labelStyle}>Event End Time:</label>
                    <input
                        name='eventEndTime'
                        type='time'
                        id='eventEndTime'
                        className={inputStyle}
                        defaultValue={requestData.eventEndTime}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex w-1/2 mx-auto'>
                    <p className={labelStyle}>Requested Repertoire:</p>
                    <div className="w-1/2">
                        {userCart.map(opusInCart => <div key={opusInCart._id} className="border border-stone-200 p-2 rounded-xl bg-stone-700">
                            <p className="underline">{opusInCart.composer}: {opusInCart.title}</p>
                            {opusInCart.movements.map(movement => <p key={movement.movementTitle}>{movement.movementTitle}</p>)}
                        </div>)}
                    </div>
                </div>
                <p className="text-center my-5">Total price: ${totalPrice}</p>
                <div className={divStyle}>
                    <label htmlFor="additionalComments" className={labelStyle + ' min-h-[30vh]'}>Additional Comments:</label>
                    <textarea
                        name="additionalComments"
                        id="additionalComments"
                        className={inputStyle}
                        defaultValue={requestData.additionalComments}
                        onChange={handleChange}
                    />
                </div>
                <input type="hidden" name="status" value="pending"/>
                <input type="submit" value="SUBMIT REQUEST" className="w-1/4 my-5 border border-stone-200 rounded-xl hover:bg-amber-400 hover:text-stone-800 hover:cursor-pointer"/>
            </form>
        </main>
    )
}