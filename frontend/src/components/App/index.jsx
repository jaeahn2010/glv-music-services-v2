import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import HomePage from '../HomePage'
import AboutPage from '../AboutPage'
import NotFoundPage from '../NotFoundPage'
import AuthFormPage from '../AuthFormPage'
import RepertoirePage from '../RepertoirePage'
import RequestPage from '../RequestPage'
import MusiciansPage from '../MusiciansPage'
import DetailsPage from '../DetailsPage'
import ClientProfilePage from '../ClientProfilePage'
import CurrentCart from '../CurrentCart'
import MusicianProfilePage from '../MusicianProfilePage'
import { getOpuses, getMusicians } from '../../../utils/backend'
import './styles.css'
import cartIcon from '../../assets/cart-icon.jpeg'
let allComposers = []

export default function App() {
	const [opuses, setOpuses] = useState([])
	const [musicians, setMusicians] = useState([])
	const [userCart, setUserCart] = useState([])
	const [detailsData, setDetailsData] = useState({})
	const [loginStatus, setLoginStatus] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const navigate = useNavigate()
	let totalPrice = 0

    for (let opus of opuses) {
        if (!allComposers.includes(opus.composer)) allComposers.push(opus.composer)
    }

	for (let item of userCart) {
        let fullOpus = opuses.find(opus => opus._id === item._id)
        if (fullOpus.movements.length === item.movements.length) {
            totalPrice += fullOpus.price
        } else {
            for (let mvmt of item.movements) {
                totalPrice += mvmt.movementPrice
            }
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
		filter === 'none' ? filteredMusiciansData = musiciansData : filteredMusiciansData = musiciansData.filter(musician => musician.instrumentation.includes(filter))
		setMusicians(filteredMusiciansData)
	}

	useEffect(() => {
		getOpusData("none", "none")
		getMusiciansData("none")
	}, [])

	let h2Style = "text-stone-200 my-5 hover:scale-110 duration-500"
	let authLink =
		<div>
			<Link to="/auth/signup">
				<h2 className={h2Style}>Sign Up</h2>
			</Link>
			<Link to="/auth/login">
				<h2 className={h2Style}>Log In</h2>
			</Link>
		</div>
	let profileLink = ''
	let userGreeting = ''

	if (loginStatus) {
		authLink =
			<div className="flex lg:gap-5 md:gap-4 sm:gap-3 gap-2">
				<button
					className={h2Style}
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
						<h2 className={h2Style}>My Musician Profile</h2>
					</Link>
				</div>
		} else if (localStorage.getItem("userCategory") === "client") {
		  	profileLink =
				<div className="flex lg:gap-5 md:gap-4 sm:gap-3 gap-2">
					<Link to={"/clientProfile/" + localStorage.getItem('userToken')}>
						<h2 className={h2Style}>My Client Profile</h2>
					</Link>
				</div>
		}
	} else if (localStorage.userToken) {
		setLoginStatus(true)
	}
	
	return (
		<>
			<nav className="flex items-center justify-between h-16 bg-gradient-to-r from-green-950 via-green-500 to-green-950 shadow-lg lg:px-9 md:px-6 px-3 font-poppins">
				<Link to="/">
					<h2 onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white font-bold md:text-2xl sm:text-xl">Greater Las Vegas Music Services</h2>
				</Link>
				<div className="text-3xl hover:cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<div className={`border-stone-200 border-y-2 w-[5vw] min-w-[30px] my-1.5 rounded-3xl duration-500 ${isMenuOpen ? '-rotate-45 translate-y-[10px]' : ''}`}></div>
					<div className={`border-stone-200 border-y-2 w-[5vw] min-w-[30px] my-1.5 rounded-3xl duration-500 ${isMenuOpen ? 'rotate-45' : ''}`}></div>
					<div className={`border-stone-200 border-y-2 w-[5vw] min-w-[30px] my-1.5 rounded-3xl duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></div>
				</div>
			</nav>
			<div className={`${isMenuOpen ? 'opacity-100 z-50' : 'hidden'} duration-500 absolute left-1/4 top-1/4 w-1/2 text-xl text-center`}>
				<Link to='/about' onClick={() => setIsMenuOpen(false)}><h1 className={h2Style}>About GLVMS</h1></Link>
				<Link to='/repertoire' onClick={() => setIsMenuOpen(false)}><h1 className={h2Style}>Repertoire List</h1></Link>
				<Link to='/musicians' onClick={() => setIsMenuOpen(false)}><h1 className={h2Style}>Our Musicians</h1></Link>
				{profileLink}
				{authLink}
			</div>
			{userGreeting}
			<Routes>
				<Route path="/" element={
					<HomePage
						isMenuOpen={isMenuOpen}
					/>
				}/>
				<Route path="/repertoire" element={
					<RepertoirePage
						isMenuOpen={isMenuOpen}
						opuses={opuses}
						setOpuses={setOpuses}
						allComposers={allComposers}
						getFilteredData={getOpusData}
						updateDetails={setDetailsData}
						loginStatus={loginStatus}
					/>}
				/>
				<Route path="/request" element={
					<RequestPage
						isMenuOpen={isMenuOpen}
						opuses={opuses}
						musicians={musicians}
						getFilteredData={getOpusData}
						updateDetails={setDetailsData}
						loginStatus={loginStatus}
						userCart={userCart}
						setUserCart={setUserCart}
						totalPrice={totalPrice}
					/>}
				/>
				<Route path="/musicians" element={
					<MusiciansPage
						isMenuOpen={isMenuOpen}
						musicians={musicians}
						setMusicians={setMusicians}
						getFilteredData={getMusiciansData}
						updateDetails={setDetailsData}
						loginStatus={loginStatus}
					/>}
				/>
				<Route path="/musicianProfile/:userId" element={
					<MusicianProfilePage
						isMenuOpen={isMenuOpen}
						loginStatus={loginStatus}
						opuses={opuses}
						setOpuses={setOpuses}
						getFilteredData={getOpusData}
						updateDetails={setDetailsData}
					/>}
				/>
				<Route path="/clientProfile/:userId" element={
					<ClientProfilePage
						isMenuOpen={isMenuOpen}
						loginStatus={loginStatus}
						opuses={opuses}
						setOpuses={setOpuses}
						getFilteredData={getOpusData}
						updateDetails={setDetailsData}
					/>}
				/>
				<Route path="/auth/:formType" element={
					<AuthFormPage
						isMenuOpen={isMenuOpen}
						setLoginStatus={setLoginStatus}
					/>}
				/>
				<Route path="/about" element={
					<AboutPage
						isMenuOpen={isMenuOpen}
					/>}
				/>
				<Route path="/details/:opusId" element={
					<DetailsPage
						isMenuOpen={isMenuOpen}
						thisOpus={detailsData}
						loginStatus={loginStatus}
						userCart={userCart}
						setUserCart={setUserCart}
					/>}
				/>
				<Route path="/cart" element={
					<CurrentCart
						isMenuOpen={isMenuOpen}
						opuses={opuses}
						loginStatus={loginStatus}
						userCart={userCart}
						setUserCart={setUserCart}
						getOpusData={getOpusData}
						totalPrice={totalPrice}
					/>}
				/>
				<Route path="/*" element={<NotFoundPage/>} />
			</Routes>
			<div className='fixed bottom-5 right-5 w-[50px] h-[50px] bg-amber-400 text-white rounded-full flex align-center justify-center cursor-pointer hover:animate-bounce z-10'>
				<Link to="/cart">
					<img src={cartIcon} className="rounded-full p-1 cursor-pointer"/>
				</Link>
            </div>
			<p className="fixed bottom-4 right-4 bg-red-500 rounded-full w-[20px] h-[20px] z-10 text-center pb-6">{userCart.length}</p>
			<footer className={`w-full py-2 bg-gradient-to-r from-green-950 via-green-500 to-green-950 font-poppins`}>
                <p className="text-center text-xs">Copyright &#169; 2024 Greater Las Vegas Music Services</p>
            </footer>
		</>
	)
}