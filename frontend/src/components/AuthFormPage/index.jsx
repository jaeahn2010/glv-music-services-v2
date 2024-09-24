import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { signUp, logIn } from "../../../utils/backend"

export default function AuthFormPage({ isMenuOpen, setLoginStatus }) {
    const { formType } = useParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordRetype: '',
        firstName: "",
        lastName: "",
        instrument: '',
    })
    let instrumentsArr = ['bassoon', 'cello', 'clarinet', 'contrabass', 'flute', 'guitar', 'harp', 'oboe', 'piano', 'percussion', 'saxophone', 'trombone', 'trumpet', 'tuba/euphonium', 'viola', 'violin', 'other']
    let labelStyle = 'block font-bold mt-4 mb-2'
    let inputStyle = 'text-stone-800 w-full p-2 rounded-md focus:outline-none focus:ring focus:border-blue-600'

    async function handleSubmit(event) {
        event.preventDefault()
        if (formType === 'login') { //if logging in
            try {
                const userCredentials = await logIn(formData)
                console.log(userCredentials)
                localStorage.setItem('email', userCredentials.email)
                localStorage.setItem('firstName', userCredentials.firstName)
                localStorage.setItem('lastName', userCredentials.lastName)
                localStorage.setItem('instrument', userCredentials.instrument)
                setLoginStatus(true)
                navigate('/')
            } catch (err) {
                alert(err)
                navigate('/auth/login')
            }
        } else { //if signing up
            if (formData.password !== formData.passwordRetype) {
                alert('Your passwords don\'t match. Please try again.')
                navigate('/auth/signup')
            } else {
                try {
                    const userCredentials = await signUp(formData)
                    localStorage.setItem('email', userCredentials.email)
                    localStorage.setItem('firstName', userCredentials.firstName)
                    localStorage.setItem('lastName', userCredentials.lastName)
                    localStorage.setItem('instrument', userCredentials.instrument)
                    setLoginStatus(true)
                    navigate('/')
                } catch (err) {
                    alert(err) 
                    navigate('/auth/signup')
                }
            }
        }
    }

    const handleInputChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    let btnText = formType === 'login' ? 'Log In' : 'Sign Up'
    let signupFields = formType !== 'login'
    ? <section>
        <div>
            <label className={labelStyle} htmlFor="passwordRetype">Retype Password</label>
            <input
                className={inputStyle}
                id="passwordRetype"
                name="passwordRetype"
                type="password"
                minLength="8"
                required
                placeholder="Retype Password"
                value={formData.passwordRetype}
                onChange={handleInputChange}
            />
        </div>
        <div>
            <label className={labelStyle} htmlFor="firstName">First name</label>
            <input
                className={inputStyle}
                id="firstName"
                name="firstName"
                type="text"
                required
                placeholder="Your first name"
                value={formData.firstName}
                onChange={handleInputChange}
            />
        </div>
        <div>
            <label className={labelStyle} htmlFor="lastName">Last name</label>
            <input
                className={inputStyle}
                id="lastName"
                name="lastName"
                type="text"
                required
                placeholder="Your last name"
                value={formData.lastName}
                onChange={handleInputChange}
            />
        </div>
        <div>
            <label className={labelStyle} htmlFor="instrument">Your primary instrument</label>
            <select
                name="instrument"
                id="instrument"
                defaultValue='none'
                className={inputStyle}
                onChange={handleInputChange}
            >
                <option key='0' value='none' disabled>Select an instrument</option>
                {instrumentsArr.map(instrument => <option key={instrument} value={instrument}>{instrument}</option>)}
            </select>
        </div>
    </section>
    : ''

    return (
        <section className={`${isMenuOpen ? 'z-0 opacity-5' : ''} bg-stone-800 rounded-xl border border-stone-200 p-8 w-1/3 mx-auto my-24 font-poppins`}>
            <h2 className="text-3xl text-center font-bold mb-8">{btnText}</h2>
            <form className="w-full flex flex-col" onSubmit={handleSubmit}>
                <div>
                    <label className={labelStyle} htmlFor="email">Email</label>
                    <input
                        className={inputStyle}
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className={labelStyle} htmlFor="password">Password</label>
                    <input
                        className={inputStyle}
                        id="password"
                        name="password"
                        type="password"
                        minLength="8"
                        required
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>
                {signupFields}
                <button
                    type="submit"
                    className="w-1/2 mx-auto border border-stone-200 my-5 rounded-xl duration-500 hover:bg-gradient-to-r from-green-950 via-green-500 to-green-950 py-1">
                    {btnText}
                </button>
            </form>
        </section>
    )
}