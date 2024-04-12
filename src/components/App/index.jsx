import { useEffect } from 'react'
import './styles.css'

export default function App() {
	useEffect(() => {
		async function getComposersData() {
			const res = await fetch('https://api.openopus.org/composer/list/rec.json')
			const resObj = await res.json()
			console.log(resObj.composers)
		}
		getComposersData()
	}, [])
	return <h1>GLVMS-v2</h1>
}