import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { submitForm } from "../../../utils/backend"

export default function ContactPage({ isMenuOpen, isMobile, scrollToTop }) {
	const [formData, setFormData] = useState({
        topic: '',
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	})
    const [isRecaptchaReady, setRecaptchaReady] = useState(false)
    const navigate = useNavigate()

    useEffect(() => { // wait until recaptcha is available
        scrollToTop()
        const checkRecaptcha = setInterval(() => {
            if (window.grecaptcha && typeof window.grecaptcha.ready === "function") {
                clearInterval(checkRecaptcha)
                setRecaptchaReady(true)
                console.log("reCAPTCHA script loaded successfully.")
            }
        }, 500)

        return () => clearInterval(checkRecaptcha)
    }, [])

    const topics = ['General', 'Account', 'Employment', 'Mobile Piano Concert Series', 'New Compositions', 'Repertoire', 'Performances & Events', 'Subscription', 'Website']

	let divStyle = 'w-full my-2 flex items-center'
	let labelStyle = 'w-1/3 md:w-1/4 lg:w-1/3 text-right mr-5 text-sm md:text-xl'
	let inputStyle = 'w-2/3 text-stone-800 bg-stone-300 text-sm md:text-xl p-1 rounded-xl'

    function handleChange(evt) {
        const { name, value } = evt.target
        setFormData({ ...formData, [name]: value })
    }

    async function handleSubmit(evt) {
        evt.preventDefault()
        if (!isRecaptchaReady || !window.grecaptcha) {
            alert("reCAPTCHA is not ready. Please try again.")
            return
        }
        try {
            if (!window.grecaptcha) {
                alert("reCAPTCHA failed to load. Please refresh the page.")
                return
            }
            const token = await window.grecaptcha.execute("6LcXZAMrAAAAAPjCkXBkmMBJkCS6h4P1wRXi9Gcl", { action: "submit" })
            submitForm({
                requestType: 'generic',
                topic: formData.topic,
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                message: formData.message,
                captchaValue: token,
            })
            setFormData({
                topic: '',
                firstName: '',
                lastName: '',
                email: '',
                message: '',
            })
            alert('Message successfully sent! We will be contacting you shortly.')
            navigate('/')
        } catch(err) {
            console.log(err)
            alert('Failed to send message. Please try again later.')
        }
    }
  
	return (
		<div className={`${isMenuOpen ? 'z-0 opacity-5' : ''} text-stone-800 font-montserrat min-h-[125vh]`}>
            <h1 className="text-6xl font-vibes text-center my-10">Contact Us</h1>
            <p className="lg:text-xl text-center my-10">Have questions or concerns? Please fill out this form, and we will get back to you as soon as possible!</p>
			<form className="w-11/12 lg:w-1/2 mx-auto flex flex-col justify-center items-center py-5" onSubmit={handleSubmit}>
                <div className={divStyle}>
                    <label className={labelStyle} htmlFor='topic'>Topic:</label>
                    <select
                        className={inputStyle}
                        name="topic"
                        id="topic"
                        defaultValue={0}
                        onChange={handleChange}
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
						onChange={handleChange}
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
						onChange={handleChange}
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
						onChange={handleChange}
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
						onChange={handleChange}
						className={inputStyle + ' h-[30vh]'}
						required
					/>
				</div>
				<button type="submit" className="border-stone-800 border rounded-xl px-3 py-1 my-2 hover:scale-105 hover:cursor-pointer hover:bg-amber-300 hover:text-stone-900 hover:duration-500">Submit</button>
			</form>
		</div>
	)
}