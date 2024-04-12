import { useState, useEffect } from 'react'
import Card from '../Card'
import './styles.css'

export default function App() {
	const [composers, setComposers] = useState([])

	useEffect(() => {
		async function getComposersData() {
			const res = await fetch('https://api.openopus.org/composer/list/rec.json')
			const resObj = await res.json()
			const composers = resObj.composers
			setComposers(composers)
		}
		getComposersData()
	}, [])

	return (
		<>
			<h1 className="text-4xl text-center">Greater Las Vegas Music Services</h1>
			<div className="w-4/5 mt-10 mx-auto xl:columns-4 lg:columns-3 md:columns-2">
				{composers.length > 0 ? composers.map(composer => <Card key={composer.id} composer={composer} />) : <p>Composers are loading</p>}
			</div>
		</>
	)
}