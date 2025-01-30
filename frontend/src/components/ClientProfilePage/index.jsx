import { useEffect, useState } from "react"
import { getClientByEmail } from "../../../utils/backend"

export default function ClientProfilePage({ isMenuOpen, loginStatus, setLoginStatus, setClientDetails, userType, setUserType }){
    const [loggedInUser, setLoggedInUser] = useState({})
    let trStyle = 'h-12 border-stone-400 border-y-2'

    async function getClientInfo() {
        if (loginStatus && userType === 'client') {
            try {
                const clientInfo = await getClientByEmail(localStorage.getItem('email'))
                if (clientInfo) setLoggedInUser(clientInfo)
            } catch (err) {
                alert('Could not get client info. Please try again.')
            }
        }
    }

    useEffect(() => {
        getClientInfo()
	}, [loginStatus])

    return loginStatus && userType === 'client' 
    ? (
        <section className={`${isMenuOpen ? 'z-0 opacity-5' : ''} w-11/12 mx-auto font-poppins h-[200vh]`}>
            <h1 className="text-3xl text-center my-24">Your Account Information</h1>
            <p className="text-2xl"></p>
            <table className="w-full lg:w-3/4 mx-auto mb-24 table-fixed">
                <tbody>
                    <tr className={trStyle}>
                        <td className="w-1/3 text-sm">Name</td>
                        <td className="w-1/2">{loggedInUser.clientName}</td>
                    </tr>
                    <tr className={trStyle}>
                        <td className='w-1/3 text-sm'>Primary Instrument</td>
                        <td className="w-1/2">{loggedInUser.clientInstrument}</td>
                    </tr>
                    <tr className={trStyle}>
                        <td className="w-1/3 text-sm">Email</td>
                        <td>{loggedInUser.clientEmail}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
    : <h1 className={`${isMenuOpen ? 'z-0 opacity-5' : ''} text-3xl text-center min-h-[100vh] mt-24`}>Please sign up or log in to access this part of the site.</h1>
}