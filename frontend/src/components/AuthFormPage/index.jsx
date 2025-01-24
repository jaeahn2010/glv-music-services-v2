import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { signUp, clientLogIn, adminLogIn } from "../../../utils/backend"

export default function AuthFormPage({ isMenuOpen, setLoginStatus, adminLogin, setAdminLogin, scrollToTop }) {
    const { formType } = useParams()
    const navigate = useNavigate()
    const [isAdmin, setIsAdmin] = useState(false)
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

    async function handleSubmit(evt) {
        evt.preventDefault()
        if (formType === 'login') { // if logging in
            if (!isAdmin) { // if logging in as client
                try {
                    const userCredentials = await clientLogIn(formData)
                    setLoginStatus(true)
                    navigate('/')
                } catch (err) {
                    console.log(err)
                    alert('Incorrect email or password.')
                    navigate('/auth/login')
                }
            } else { // if logging in as admin
                try {
                    const adminCredentials = await adminLogIn(formData)
                    console.log(adminCredentials)
                    setAdminLogin(true)
                    setLoginStatus(true)
                    navigate('/admin')
                } catch(err) {
                    console.log(err)
                    alert('Incorrect email or password.')
                }
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
        evt.target.name === 'adminCheckbox' ? setIsAdmin(evt.target.checked) : setFormData({ ...formData, [evt.target.name]: evt.target.value })
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
    let adminField = formType === 'login'
    ? <section className="flex items-center justify-center">
        <input
            className='mr-2 my-4'
            id='adminCheckbox'
            name='adminCheckbox'
            type='checkbox'
            value={formData.isAdmin}
            onChange={handleInputChange}
        />
        <label htmlFor="adminCheckbox">Click here if logging in as admin</label>
    </section>
    : ''

    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <section className={`${isMenuOpen ? 'z-0 opacity-5' : ''} bg-stone-800 rounded-xl border border-stone-200 p-8 lg:w-1/3 mx-auto mt-24 mb-48 font-poppins`}>
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
                {adminField}
                <button
                    type="submit"
                    className="w-1/2 mx-auto border border-stone-200 my-5 rounded-xl duration-500 hover:bg-gradient-to-r from-green-950 via-green-500 to-green-950 py-1">
                    {btnText}
                </button>
                <p className="text-center pt-2 hover:text-green-400 hover:cursor-pointer" onClick={() => {
                    scrollToTop()
                    formType === 'login' ? navigate('/auth/signup') : navigate('/auth/login')
                }}>{formType === 'login' ? 'Don\'t have an account? Click here to sign up.' : 'Already have an account? Click here to log in.'}</p>
            </form>
        </section>
    )
}