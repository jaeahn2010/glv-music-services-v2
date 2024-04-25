import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { signUp, logIn } from "../../../utils/backend"

export default function AuthFormPage({ setLoginStatus }) {
    const { formType } = useParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        birthdate: new Date(),
        instruments: [],
        category: '',
    })
    let instrumentsArr = ['bassoon', 'cello', 'clarinet', 'composer', 'conductor', 'contrabass', 'flute', 'guitar', 'harp', 'oboe', 'piano', 'percussion', 'saxophone', 'trombone', 'trumpet', 'tuba/euphonium', 'viola', 'violin', 'other']

    async function handleSubmit(event) {
        event.preventDefault()
        if (formType === 'login') { //if logging in
            try {
                const userCredentials = await logIn(formData)
                localStorage.setItem('userToken', userCredentials.token)
                localStorage.setItem('userCategory', userCredentials.userCategory)
                localStorage.setItem('email', userCredentials.email)
                localStorage.setItem('firstName', userCredentials.firstName)
                localStorage.setItem('lastName', userCredentials.lastName)
                localStorage.setItem('birthdate', userCredentials.birthdate)
                localStorage.setItem('instrumentation', userCredentials.instrumentation)
                setLoginStatus(true)
                navigate('/')
            } catch(error) {
                alert(error)
                navigate('/auth/login')
            }
        } else { //if signing up
            try {
                const userCredentials = await signUp(formData)
                localStorage.setItem('userToken', userCredentials.token)
                localStorage.setItem('userCategory', userCredentials.userCategory)
                localStorage.setItem('email', userCredentials.email)
                localStorage.setItem('firstName', userCredentials.firstName)
                localStorage.setItem('lastName', userCredentials.lastName)
                localStorage.setItem('birthdate', userCredentials.birthdate)
                localStorage.setItem('instrumentation', userCredentials.instrumentation)
                setLoginStatus(true)
                navigate('/')
            } catch(error) {
                alert(error) 
                navigate('/auth/login')
            }
        }
    }

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    let btnText, signupFields, categoryText

    formType === 'login' ? btnText = 'Log In' : btnText = 'Sign Up'
    formType === 'login' ? categoryText = 'Are you logging in as a client or a musician?' : categoryText = 'Are you signing up as a new client or a new musician?'
    if (formType !== 'login') {
        signupFields = 
            <div>
                <div className="auth-div">
                    <label className="block text-gray-100 font-bold mb-2" htmlFor="email">
                        First name
                    </label>
                    <input
                        className="w-full p-2 text-gray-800 rounded-md focus:outline-none focus:ring focus:border-blue-600 text-gray-200"
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="auth-div">
                    <label className="block text-gray-00 font-bold mb-2" htmlFor="email">
                        Last name
                    </label>
                    <input
                        className="w-full p-2 text-gray-800 rounded-md focus:outline-none focus:ring focus:border-blue-600 text-gray-200"
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="auth-div">
                    <label className="block text-gray-100 font-bold mb-2" htmlFor="birthdate">
                        Birthdate
                    </label>
                    <input
                        className="w-full p-2 text-gray-800 rounded-md focus:outline-none focus:ring focus:border-blue-600 text-gray-200"
                        id="birthdate"
                        name="birthdate"
                        type="date"
                        required
                        placeholder={new Date()}
                        value={formData.birthdate}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className="block text-gray-100 font-bold mb-2" htmlFor="instrument">
                        Your primary instrument
                    </label>
                    <select
                        name="instrument"
                        id="instrument"
                        defaultValue='none'
                        onChange={handleInputChange}>
                        <option key='0' value='none' disabled>Select an instrument</option>
                        {
                            instrumentsArr.map(instrument => {
                                return (
                                    <option key={instrument} value={instrument}>{instrument}</option>
                                )
                            })
                        }
                    </select>
                </div>
                
            </div>
    }
    return (
        <div className="py-12">
            <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md mx-auto grid place-items-center">
                <h2 className="text-3xl text-center font-bold text-gray-100 mb-8">{btnText}</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="auth-div">
                        <label className="block text-gray-100 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full p-2 text-gray-800 rounded-md focus:outline-none focus:ring focus:border-blue-600"
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="auth-div">
                        <label className="block text-gray-100 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full p-2 text-gray-800 rounded-md focus:outline-none focus:ring focus:border-blue-600"
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
                    <div>
                        <p className='auth-p text-center'>{categoryText}</p>
                        <table className="auth-table text-gray-100">
                            <tbody>
                                <tr>
                                    <td><input
                                        id="categoryClient"
                                        name="category"
                                        type="radio"
                                        required
                                        value="client"
                                        onChange={handleInputChange}
                                    /></td>
                                    <td><label htmlFor="categoryClient" className="text-gray-200">Client</label></td>
                                </tr>
                                <tr>
                                    <td><input
                                        id="categoryMusician"
                                        name="category"
                                        type="radio"
                                        required
                                        value="musician"
                                        onChange={handleInputChange}
                                    /></td>
                                    <td><label htmlFor="categoryMusician" className="text-gray-200">Musician</label></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-1/2 my-5 py-2 px-4 bg-green-700 text-gray-100 rounded-md hover:bg-green-500 transition duration-300">
                            {btnText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}