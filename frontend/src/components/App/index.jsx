import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import HomePage from '../HomePage'
import AboutPage from '../AboutPage'
import NewCompositionsPage from '../NewCompositionsPage'
import MobilePianoConcertSeriesPage from '../MobilePianoConcertSeriesPage'
import NotFoundPage from '../NotFoundPage'
import AuthFormPage from '../AuthFormPage'
import RepertoirePage from '../RepertoirePage'
import RequestPage from '../RequestPage'
import MusiciansPage from '../MusiciansPage'
import AdminPage from '../AdminPage'
import DetailsPage from '../DetailsPage'
import MusiciansDetailsPage from '../MusiciansDetailsPage'
import PerformancesPage from '../PerformancesPage'
import ClientProfilePage from '../ClientProfilePage'
import CurrentCart from '../CurrentCart'
import { getOpuses, getMusicians } from '../../../utils/backend'
import './styles.css'
import cartIcon from '../../assets/cart-icon.jpeg'

let allComposers = []
const categories = ['accompanist', 'arranger', 'audio / sound engineer', 'baroque music specialist', 'composer', 'conductor',  'diction & language specialist', 'ear training specialist', 'instructor (private institution or studio)', 'instructor (public institution)', 'instrument repairperson', 'jazz specialist', 'music director', 'music history specialist', 'music theory specialist', 'performer - brass',  'performer - keyboard', 'performer - percussion', 'performer - string', 'performer - woodwind', 'performer - voice', 'piano tuner', 'vocal coach', 'other']
const instruments = ['bassoon', 'cello', 'clarinet', 'composer', 'conductor', 'contrabass', 'flute', 'guitar', 'harmonica', 'harp', 'horn', 'oboe', 'orchestra', 'piano', 'percussion', 'saxophone', 'trombone', 'trumpet', 'tuba/euphonium', 'viola', 'violin', 'voice']
const instrumentsExtended = ['accordion', 'bandoneon', 'banjo', 'bass clarinet', 'bass drum', 'bassoon', 'beatboxing', 'bongo', 'bugle', 'cannon', 'castanets', 'celeste', 'cello', 'chimes', 'chime tree', 'clarinet (A)', 'clarinet (B-flat)', 'contrabassoon', 'cornet', 'cymbals', 'double bass', 'drum set', 'electric bass', 'electric guitar', 'English horn', 'euphonium', 'flugelhorn', 'flute', 'flute (alto)', 'flute (bass)', 'French horn', 'glockenspiel', 'guitar', 'handbell', 'harmonica', 'harmonium', 'harp', 'harpsichord', 'keytar', 'mandolin', 'maracas', 'marimba', 'oboe', 'organ', 'piano', 'piccolo', 'saxophone (soprano)', 'saxophone (alto)', 'saxophone (tenor)', 'saxophone (baritone)', 'snare drum', 'synthesizer', 'tambourine', 'tam-tam', 'timpani', 'triangle', 'trombone (tenor)', 'trombone (bass)', 'trumpet (B-flat)', 'trumpet (C)', 'trumpet (D)', 'tuba (B-flat)', 'tuba (C)', 'tuba (E-flat)', 'tuba (F)', 'ukelele', 'viola', 'violin', 'woodblocks', 'vibraphone', 'voice (soprano)', 'voice (mezzo-soprano)', 'voice (contralto)', 'voice (countertenor)', 'voice (tenor)', 'voice (baritone)', 'voice (bass-baritone)', 'voice (bass)', 'xylophone', 'other']
const states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'WA', 'WV', 'WI', 'WY']

const scrollToTop = () => 
	window.scrollTo({
		top: 100,
		behavior: "smooth",
	})

export default function App() {
	const [allOpuses, setAllOpuses] = useState([])
	const [allMusicians, setAllMusicians] = useState([])
	const [userCart, setUserCart] = useState([])
	const [opusDetails, setOpusDetails] = useState({})
	const [musicianDetails, setMusicianDetails] = useState({})
	const [clientDetails, setClientDetails] = useState({})
	const [loginStatus, setLoginStatus] = useState(false)
	const [adminLogin, setAdminLogin] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isMobile, setIsMobile] = useState(false)
	const [userType, setUserType] = useState('')
	const navigate = useNavigate()
	const h2Style = "text-stone-200 my-5 hover:scale-110 duration-500"
	const linkStyle = "border-t border-stone-200 lg:w-1/2 mx-auto"
	const pCategoryStyle = 'underline font-bold text-2xl p-2'
	const hamburgerMenuBaseStyle = "border-stone-200 border-y-2 w-[5vw] lg:w-[30px] min-w-[30px] my-1.5 rounded-3xl duration-500"

	// composers list
	for (let opus of allOpuses) {
		if (!allComposers.includes(opus.composer)) allComposers.push(opus.composer)
	}

	// sort opuses by title
	function sortObjects(objs) {
		return objs.sort((a, b) => {
			const titleA = a.title.toUpperCase()
			const titleB = b.title.toUpperCase()
			if (titleA < titleB) return -1
			if (titleA > titleB) return 1
			return 0
		})
	}

	// get full data for opus, musicians
	async function getInitialData() {
		try {
			const allOpusData = await getOpuses()
			const allMusiciansData = await getMusicians()
			setAllOpuses(sortObjects(allOpusData))
			setAllMusicians(allMusiciansData)
		} catch(err) {
			alert('Cannot load data at this time. Please check your internet connection. If the problem persists, please contact the site administrator.')
		}
	}

	// get initial data
	useEffect(() => {
		getInitialData()
	}, [])

	// for responsive design
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768)
		}
		handleResize()
		window.addEventListener("resize", handleResize)
		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	// for user auth & role
	useEffect(() => {
		const token = localStorage.getItem('token')
		const role = localStorage.getItem('role')
		if (token && role) {
			setUserType(role)
			setLoginStatus(true)
		}
	}, [])

	let authLink =
		<div className='border-t border-stone-200 pt-3 lg:w-1/2 mx-auto'>
			<p className={pCategoryStyle}>ACCOUNT</p>
			<Link onClick={() => setIsMenuOpen(false)} to="/auth/signup">
				<h2 className={h2Style}>Sign Up</h2>
			</Link>
			<Link onClick={() => setIsMenuOpen(false)} to="/auth/login">
				<h2 className={h2Style}>Log In</h2>
			</Link>
		</div>
	let profileLink = ''

	if (loginStatus) {
		authLink =
			<div className={linkStyle}>
				<button
					className={h2Style}
					onClick={() => {
						if (confirm("Are you sure you would like to log out?")) {
							localStorage.clear()
							setUserType('')
							setLoginStatus(false)
							setIsMenuOpen(false)
							navigate('/')
						}
					}}>Log Out</button>
			</div>
		profileLink =
			<div className={linkStyle}>
				{userType === 'admin'
				? <Link to='/admin' onClick={() => setIsMenuOpen(false)}><h1 className={h2Style}>Admin Page</h1></Link>
				: <Link onClick={() => setIsMenuOpen(false)} to={"/clientProfile"}><h2 className={h2Style}>My Account</h2></Link>
				}	
				{/* include musician profile page later */}
			</div>
	}
	
	return (
		<>
			<nav className="flex items-center justify-between h-16 bg-gradient-to-r from-green-950 via-green-500 to-green-950 shadow-lg lg:px-9 md:px-6 px-3 font-poppins">
				<Link to="/">
					<h2 onClick={() => setIsMenuOpen(false)} className="text-white font-bold md:text-2xl sm:text-xl">Greater Las Vegas Music Services</h2>
				</Link>
				<div className="text-3xl hover:cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<div className={`${hamburgerMenuBaseStyle} ${isMenuOpen ? '-rotate-45 translate-y-[10px]' : ''}`}></div>
					<div className={`${hamburgerMenuBaseStyle} ${isMenuOpen ? 'rotate-45' : ''}`}></div>
					<div className={`${hamburgerMenuBaseStyle} ${isMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></div>
				</div>
			</nav>
			<div className={`${isMenuOpen ? 'opacity-100 z-50' : 'hidden'} duration-500 absolute left-[12.5%] top-1/4 w-3/4 text-xl text-center font-poppins`}>
				<p className={pCategoryStyle}>INFORMATION</p>
				<Link to='/about' onClick={() => setIsMenuOpen(false)}><h1 className={h2Style}>About GLVMS</h1></Link>
				<Link to='/repertoire' onClick={() => setIsMenuOpen(false)}><h1 className={h2Style}>Repertoire List</h1></Link>
				<Link to='/musicians' onClick={() => setIsMenuOpen(false)}><h1 className={h2Style}>Our Musicians</h1></Link>
				<Link to='/performances' onClick={() => setIsMenuOpen(false)}><h1 className={h2Style}>Our Performances</h1></Link>
				<div className='border-t pt-3 border-stone-200 lg:w-1/2 mx-auto'>
					<p className={pCategoryStyle}>STORES</p>
					<Link onClick={() => setIsMenuOpen(false)} to="/ncs">
						<h2 className={h2Style}>New Compositions Store</h2>
					</Link>
					<Link onClick={() => setIsMenuOpen(false)} to="/mpcs">
						<h2 className={h2Style}>Mobile Piano Concert Series</h2>
					</Link>
				</div>
				{profileLink}
				{authLink}
			</div>
			<Routes>
				<Route path="/" element={
					<HomePage
						isMenuOpen={isMenuOpen}
						isMobile={isMobile}
					/>
				}/>
				<Route path="/about" element={
					<AboutPage
						isMenuOpen={isMenuOpen}
					/>}
				/>
				<Route path="/auth/:formType" element={
					<AuthFormPage
						isMenuOpen={isMenuOpen}
						setLoginStatus={setLoginStatus}
						adminLogin={adminLogin}
						setAdminLogin={setAdminLogin}
						scrollToTop={scrollToTop}
						setUserType={setUserType}
					/>}
				/>
				<Route path="/repertoire" element={
					<RepertoirePage
						isMenuOpen={isMenuOpen}
						allOpuses={allOpuses}
						allComposers={allComposers}
						allMusicians={allMusicians}
						setOpusDetails={setOpusDetails}
						instruments={instruments}
						scrollToTop={scrollToTop}
					/>}
				/>
				<Route path="/opus/details/:opusId" element={
					<DetailsPage
						isMenuOpen={isMenuOpen}
						opusDetails={opusDetails}
						loginStatus={loginStatus}
						userCart={userCart}
						setUserCart={setUserCart}
						scrollToTop={scrollToTop}
					/>}
				/>
				<Route path="/cart" element={
					<CurrentCart
						isMenuOpen={isMenuOpen}
						allOpuses={allOpuses}
						allMusicians={allMusicians}
						loginStatus={loginStatus}
						userCart={userCart}
						setUserCart={setUserCart}
						scrollToTop={scrollToTop}
						userType={userType}
					/>}
				/>
				<Route path="/request" element={
					<RequestPage
						isMenuOpen={isMenuOpen}
						allMusicians={allMusicians}
						loginStatus={loginStatus}
						userCart={userCart}
						states={states}
						userType={userType}
					/>}
				/>
				<Route path="/musicians" element={
					<MusiciansPage
						isMenuOpen={isMenuOpen}
						allMusicians={allMusicians}
						setMusicianDetails={setMusicianDetails}
						loginStatus={loginStatus}
						categories={categories}
						instrumentsExtended={instrumentsExtended}
					/>}
				/>
				<Route path="/musician/details/:musicianId" element={
					<MusiciansDetailsPage
						isMenuOpen={isMenuOpen}
						musicianDetails={musicianDetails}
						loginStatus={loginStatus}
						userCart={userCart}
						setUserCart={setUserCart}
					/>}
				/>
				<Route path="/performances" element={
					<PerformancesPage
						isMenuOpen={isMenuOpen}
						loginStatus={loginStatus}
					/>}
				/>
				<Route path="/clientProfile" element={
					<ClientProfilePage
						isMenuOpen={isMenuOpen}
						loginStatus={loginStatus}
						setLoginStatus={setLoginStatus}
						setClientDetails={setClientDetails}
						userType={userType}
						setUserType={setUserType}
					/>}
				/>
				<Route path="/ncs" element={
					<NewCompositionsPage
						isMenuOpen={isMenuOpen}
						loginStatus={loginStatus}
						scrollToTop={scrollToTop}
					/>}
				/>
				<Route path="/mpcs" element={
					<MobilePianoConcertSeriesPage
						isMenuOpen={isMenuOpen}
						allMusicians={allMusicians}
						loginStatus={loginStatus}
						states={states}
						scrollToTop={scrollToTop}
						userType={userType}
					/>}
				/>
				<Route path='/admin' element={
					<AdminPage
						isMenuOpen={isMenuOpen}
						sortObjects={sortObjects}
						instruments={instruments}
						states={states}
						scrollToTop={scrollToTop}
						userType={userType}
					/>}
				/>
				<Route path="/*" element={<NotFoundPage/>} />
			</Routes>
			{userType === 'client'
			? <>
				<div className='fixed bottom-5 right-5 w-[50px] h-[50px] bg-gradient-to-r from-green-600 via-green-400 to-green-600 rounded-full flex align-center justify-center cursor-pointer hover:animate-bounce z-10'>
					<Link to="/cart"><img src={cartIcon} className="rounded-full p-1 cursor-pointer"/></Link>
				</div>
				<p className="fixed bottom-4 right-4 bg-red-500 rounded-full w-[22.5px] h-[20px] z-10 text-center pb-6">{userCart.length}</p>
			</>
			: ''
			}
			<footer className={`w-full py-2 bg-gradient-to-r from-green-950 via-green-500 to-green-950 font-poppins`}>
                <p className="text-center text-xs">Copyright &#169; 2024 DMZ.DEV</p>
            </footer>
		</>
	)
}