import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import HomePage from '../HomePage'
import AboutPage from '../AboutPage'
import NotFoundPage from '../NotFoundPage'
import AuthFormPage from '../AuthFormPage'
import RepertoirePage from '../RepertoirePage'
import MusiciansPage from '../MusiciansPage'
import DetailsPage from '../DetailsPage'
import ClientProfilePage from '../ClientProfilePage'
import MusicianProfilePage from '../MusicianProfilePage'
import { getOpuses, getMusicians } from '../../../utils/backend'
import './styles.css'
import cartIcon from '../../assets/cart-icon.jpeg'
import emailIcon from '../../assets/email-icon.png'
let allComposers = []

export default function App() {
	const [opuses, setOpuses] = useState([])
	const [musicians, setMusicians] = useState([])
	const [userCart, setUserCart] = useState([])
	const [detailsData, setDetailsData] = useState({})
	const [loginStatus, setLoginStatus] = useState(false)
	const navigate = useNavigate()

    for (let opus of opuses) {
        if (!allComposers.includes(opus.composer)) {
            allComposers.push(opus.composer)
        }
    }

	//get full list of available opuses, or filter by musician/composer/instrumentation/price
	async function getOpusData(category, filter) {
		const opusData = await getOpuses()
		let allOpusData = opusData[0]
		let filteredOpusData = []
		if (category === 'none' && filter === 'none') {
			filteredOpusData = allOpusData
		} else if (category === 'composer') {
			filteredOpusData = allOpusData.filter(opus => opus.composer === filter)
		} else if (category === 'instrumentation') {
			filteredOpusData = allOpusData.filter(opus => opus.instrumentation.includes(filter))
		} else if (category === 'price') {
			filteredOpusData = allOpusData.filter(opus => opus.price <= filter && opus.price !== null)
		}
		setOpuses(filteredOpusData)
	}

	//get full list of musicians, or filter by instrument
	async function getMusiciansData(filter) {
		const musiciansData = await getMusicians()
		let filteredMusiciansData = []
		if (filter === 'none') {
			filteredMusiciansData = musiciansData
		} else {
			filteredMusiciansData = musiciansData.filter(musician => musician.instrumentation.includes(filter))
		}
		setMusicians(filteredMusiciansData)
	}

	useEffect(() => {
		getOpusData("none", "none")
		getMusiciansData("none")
	}, [])

	let authLink =
		<div className="flex lg:gap-5 md:gap-4 sm:gap-3 gap-2">
			<Link to="/auth/signup">
				<h2 className="text-white md:text-md sm:text-sm">Sign Up</h2>
			</Link>
			<Link to="/auth/login">
				<h2 className="text-white md:text-md sm:text-sm">Log In</h2>
			</Link>
		</div>
	let profileLink = ''
	let userGreeting = ''

	if (loginStatus) {
		authLink =
			<div className="flex lg:gap-5 md:gap-4 sm:gap-3 gap-2">
				<button
					className="text-white md:text-md sm:text-sm"
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
			<h1 className="bg-stone-700 z-10 text-white text-right text-sm sticky top-0">{`Hello, ${localStorage.getItem("firstName")} ${localStorage.getItem("lastName")}!`}</h1>
		if (localStorage.getItem("userCategory") === "musician") {
			profileLink =
				<div className="flex lg:gap-5 md:gap-4 sm:gap-3 gap-2">
					<Link to={"/musicianProfile/" + localStorage.getItem("userToken")}>
						<h2 className="text-white md:text-md sm:text-sm">My Musician Profile</h2>
					</Link>
				</div>
		} else if (localStorage.getItem("userCategory") === "client") {
		  	profileLink =
				<div className="flex lg:gap-5 md:gap-4 sm:gap-3 gap-2">
					<Link to={"/clientProfile/" + localStorage.getItem('userToken')}>
						<h2 className="text-white md:text-md sm:text-sm">My Client Profile</h2>
					</Link>
				</div>
		}
	} else if (localStorage.userToken) {
		setLoginStatus(true)
	}
	
	return (
		<>
			<nav className="flex items-center justify-between h-16 bg-green-950 shadow-lg lg:px-9 md:px-6 px-3">
				<Link to="/">
					<h2 className="text-white font-bold md:text-2xl sm:text-xl">Greater Las Vegas Music Services</h2>
				</Link>
				<Link to="/about">
					<h2 className="text-white md:text-md sm:text-sm">About</h2>
				</Link>
				<Link to="/repertoire" onClick={(evt) => {
					getOpusData("none", "none")
				}}>
					<h2 className="text-white md:text-md sm:text-sm">See All Available Repertoire</h2>
				</Link>
				<Link to="/musicians">
					<h2 className="text-white md:text-md sm:text-sm">See All Musicians</h2>
				</Link>
				{profileLink}
				{authLink}
			</nav>
			{userGreeting}
			<main className="pt-[50px] pb-[200px]">
				<Routes>
					<Route path="/" element={
						<HomePage
						/>}
					/>
					<Route path="/repertoire" element={
						<RepertoirePage
							opuses={opuses}
							setOpuses={setOpuses}
							allComposers={allComposers}
							getFilteredData={getOpusData}
							updateDetails={setDetailsData}
							loginStatus={loginStatus}
						/>}
					/>
					<Route path="/musicians" element={
						<MusiciansPage
							musicians={musicians}
							setMusicians={setMusicians}
							getFilteredData={getMusiciansData}
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
							userCart={userCart}
							setUserCart={setUserCart}
						/>}
					/>
					<Route path="/*" element={
						<NotFoundPage
						/>} 
					/>
				</Routes>
			</main>
			<div className='fixed bottom-5 right-5 w-[50px] h-[50px] bg-amber-400 text-white rounded-full flex align-center justify-center cursor-pointer hover:animate-bounce z-10'>
                <img src={cartIcon} className="rounded-full p-1"/>
            </div>
			<footer className="fixed left-0 bottom-0 w-full py-2 bg-green-950 z-0">
				<section className="flex justify-around">
					<div className="w-1/2 text-center flex flex-col justify-center items-center py-3">
						<p className="text-xs">Can't find your desired repertoire or have a custom request? Contact us directly!</p>
						<a href="mailto:glvmusicservices@gmail.com" className="flex justify-center items-center">
							<img className="w-[40px]" src={emailIcon}/>
							<p className="text-xs">Email GLVMS</p>
						</a>
					</div>
					<div className="w-1/2 text-center flex flex-col justify-center items-center py-3">
						<p className="text-xs">Problems or questions about using this site? Contact the site admin!</p>
						<a href="mailto:jaeahn2010@gmail.com" className="flex justify-center items-center">
							<img className="w-[40px]" src={emailIcon}/>
							<p className="text-xs">Email site admin</p>
						</a>
					</div>
				</section>
                <p className="text-center border-t-2 border-black text-xs">Copyright &#169; 2024 Greater Las Vegas Music Services</p>
            </footer>
		</>
	)
}