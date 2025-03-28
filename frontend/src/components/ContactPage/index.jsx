import { useState } from "react"
import { sendEmail } from "../../../utils/backend"

export default function ContactPage({ isMenuOpen, isMobile }) {
	const [formData, setFormData] = useState({
        topic: '',
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	})

    const topics = ['General', 'Account', 'Employment', 'Mobile Piano Concert Series', 'New Compositions', 'Repertoire', 'Performances & Events', 'Subscription', 'Website']

	let divStyle = 'w-full my-2 flex items-center'
	let labelStyle = 'w-1/3 md:w-1/4 lg:w-1/3 text-right mr-5 text-sm md:text-xl'
	let inputStyle = 'w-2/3 text-stone-800 bg-stone-300 text-sm md:text-xl p-1 rounded-xl'

    // function handleSubmit(evt) {
    //     evt.preventDefault()
    //     try {
    //         let [musicianLastName, musicianFirstName] = currentConcert.pianist.split(', ')
    //         sendEmail({
    //             requestType: 'main',
    //             clientEmail: localStorage.getItem('email'),
    //             musicianEmail: allMusicians.find(musician => musician.lastName === musicianLastName && musician.firstName === musicianFirstName).email,
    //             eventName: currentConcert.title,
    //             eventLocation: {
    //                 locationName: concertRequestData.locationName,
    //                 address: concertRequestData.address,
    //                 city: concertRequestData.city,
    //                 state: concertRequestData.state,
    //                 zipCode: concertRequestData.zipCode,
    //             },
    //             eventDate: concertRequestData.eventDate,
    //             eventStartTime: concertRequestData.eventStartTime,
    //             eventEndTime: concertRequestData.eventEndTime,
    //             requestedRepertoire: currentConcert.program,
    //             additionalComments: concertRequestData.additionalComments,
    //             status: 'pending',
    //         })
    //         setFormData({
    //             topic: '',
    //             firstName: '',
    //             lastName: '',
    //             email: '',
    //             message: '',
    //         })
    //         alert('Message successfully sent! We will be contacting you shortly.')
    //     } catch(err) {
    //         console.log(err)
    //         alert('Failed to send message. Please try again later.')
    //     }
    // }
  
	return (
		<div className={`${isMenuOpen ? 'z-0 opacity-5' : ''} text-stone-800 font-montserrat min-h-[125vh]`}>
            <p className="lg:text-xl text-center my-10">Have questions or concerns? Please fill out this form, and we will get back to you as soon as possible!</p>
			<form name="contact" className="contact-form w-11/12 lg:w-1/2 mx-auto flex flex-col justify-center items-center py-5">
                <div className={divStyle}>
                    <label className={labelStyle} htmlFor='topic'>Topic:</label>
                    <select
                        className={inputStyle}
                        name="topic"
                        id="topic"
                        defaultValue={0}
                        onChange={(evt) => setFormData({...formData, topic: evt.target.value})}
                        required
                    >
                        <option key={0} value={0} disabled>Select a topic</option>
                        {topics.map(topic => <option key={topic} value={topic}>{topic}</option>)}
                    </select>
                </div>
				<div className={divStyle}>
					<label htmlFor="firstName" className={labelStyle}>First Name:</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						placeholder="Your first name"
						value={formData.firstName}
						onChange={(evt) => setFormData({...formData, firstName: evt.target.value})}
						className={inputStyle}
						required
					/>
				</div>
				<div className={divStyle}>
					<label htmlFor="lastName" className={labelStyle}>Last Name:</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						placeholder="Your last name"
						value={formData.lastName}
						onChange={(evt) => setFormData({...formData, lastName: evt.target.value})}
						className={inputStyle}
						required
					/>
				</div>
				<div className={divStyle}>
					<label htmlFor="email" className={labelStyle}>Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="youremail@email.com"
						value={formData.email}
						onChange={(evt) => setFormData({...formData, email: evt.target.value})}
						className={inputStyle}
						required
					/>
				</div>
				<div className={divStyle}>
					<label htmlFor="message" className={labelStyle}>Your Message:</label>
					<textarea
						id="message"
						name="message"
						placeholder="Your message"
						value={formData.message}
						onChange={(evt) => setFormData({...formData, message: evt.target.value})}
						className={inputStyle + ' h-[30vh]'}
						required
					/>
				</div>
				<button type="submit" className="border-stone-800 border rounded-xl px-3 py-1 my-2 hover:scale-105 hover:cursor-pointer hover:bg-amber-300 hover:text-stone-900 hover:duration-500">Submit</button>
			</form>
		</div>
	)
}