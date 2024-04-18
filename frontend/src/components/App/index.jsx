import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import AboutPage from '../AboutPage'
import NotFoundPage from '../NotFoundPage'
import HomePage from '../HomePage'
import DetailsPage from '../DetailsPage'
import AuthFormPage from '../AuthFormPage'
import ClientProfilePage from '../ClientProfilePage'
import MusicianProfilePage from '../MusicianProfilePage'
import { getOpuses } from '../../../utils/backend'
import './styles.css'

export default function App() {
	const [opuses, setOpuses] = useState([])
	const [username, setUsername] = useState('')
	const [detailsData, setDetailsData] = useState({})
	const [loginStatus, setLoginStatus] = useState(false)
	const navigate = useNavigate()

	//get entire list of available opuses, or filter by musician, composer, instrumentation, or price range
	async function getOpusData(category, filter) {
		const data = await getOpuses()
		let filteredData = data
		//code filters here
		setOpuses(filteredData)
	}

	//get current user data
	//write getUserData function here & update backend

	useEffect(() => {
		getOpusData("none", "none")
		// if (loginStatus) getUserData()
	}, [])

	let authLink =
		<div className="flex lg:gap-5 md:gap-4 sm:gap-3 gap-2">
			<Link to="/auth/signup">
				<h2 className="text-white md:text-lg sm:text-md">Sign Up</h2>
			</Link>
			<Link to="/auth/login">
				<h2 className="text-white md:text-lg sm:text-md">Log In</h2>
			</Link>
		</div>
	let profileLink = ''
	let userGreeting = ''

	if (loginStatus) {
		authLink =
			<div className="flex lg:gap-5 md:gap-4 sm:gap-3 gap-2">
				<button
					className="text-white md:text-lg sm:text-md"
					onClick={() => {
						if (confirm("Are you sure you would like to log out?")) {
							localStorage.clear()
							setLoginStatus(false)
							navigate('/')
						}
					}}>
					Log Out
				</button>
			</div>
		userGreeting =
			<h1 className="bg-stone-700 z-10 text-white text-right text-sm sticky top-0">Hello, {username}!</h1>
		if (localStorage.getItem("userCategory") === "musician") {
			profileLink =
				<div className="flex lg:gap-5 md:gap-4 sm:gap-3 gap-2">
					<Link to={"/musicianProfile/" + localStorage.getItem("userToken")}>
						<h2 className="text-white md:text-lg sm:text-md">My Musician Profile</h2>
					</Link>
				</div>
		} else if (localStorage.getItem("userCategory") === "client") {
		  	profileLink =
				<div className="flex lg:gap-5 md:gap-4 sm:gap-3 gap-2">
					<Link to="/clientProfile">
						<h2 className="text-white md:text-lg sm:text-md">My Client Profile</h2>
					</Link>
				</div>
		}
	} else if (localStorage.userToken) {
		setLoginStatus(true)
	}
	
	return (
		<>
			<nav className="flex items-center justify-between h-16 bg-gray-800 shadow-lg lg:px-9 md:px-6 px-3">
				<Link to="/" onClick={(evt) => {
					getOpusData("none", "none")
				}}>
					<h1 className="text-white font-bold md:text-3xl sm:text-2xl">Greater Las Vegas Music Services</h1>
				</Link>
				<Link to="/about">
					<h2 className="text-white md:text-lg sm:text-md">About</h2>
				</Link>
				{profileLink}
				{authLink}
			</nav>
			{userGreeting}
			<Routes>
				<Route path="/" element={
					<HomePage
						opuses={opuses}
						setOpuses={setOpuses}
						getFilteredData={getOpusData}
						updateDetails={setDetailsData}
						loginStatus={loginStatus}
					/>}
				/>
				<Route path="/musicianProfile/:userId" element={
					<MusicianProfilePage
						loginStatus={loginStatus}
						opuses={opuses}
						setOpuses={setOpuses}
						getFilteredData={getOpusData}
						updateDetails={setDetailsData}
					/>}
				/>
				<Route path="/clientProfile/:userId" element={
					<ClientProfilePage
						loginStatus={loginStatus}
						opuses={opuses}
						setOpuses={setOpuses}
						getFilteredData={getOpusData}
						updateDetails={setDetailsData}
					/>}
				/>
				<Route path="/auth/:formType" element={
					<AuthFormPage
						setLoginStatus={setLoginStatus}
					/>}
				/>
				<Route path="/about" element={
					<AboutPage
					/>}
				/>
				<Route path="/details/:opusId" element={
					<DetailsPage
						opus={detailsData}
						loginStatus={loginStatus}
					/>}
				/>
				<Route path="/*" element={
					<NotFoundPage
					/>} 
				/>
			</Routes>
		</>
	)
}