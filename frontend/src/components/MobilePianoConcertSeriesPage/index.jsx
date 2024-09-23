import { useState } from "react"
import { Link } from "react-router-dom"
import allAmerican1 from '../../assets/mpcs-all-american-1.jpg'
import ballroom1 from '../../assets/mpcs-dance-floor-1.jpg'
import ballroom2 from '../../assets/mpcs-dance-floor-2.jpg'
import airEarth from '../../assets/mpcs-elements-air-earth.jpg'
import fireWater from '../../assets/mpcs-elements-fire-water.png'
import zookeeper from '../../assets/mpcs-zookeeper.png'
import ukraineResistance from '../../assets/mpcs-ukraine-resistance.png'
import impostorsThieves from '../../assets/mpcs-impostors-thieves.png'

class Concert {
    constructor(pianist, title, program = [], duration, basePrice, poster) {
        this.pianist = pianist
        this.title = title
        this.program = program
        this.duration = duration
        this.basePrice = basePrice
        this.poster = poster
    }
}

const availableConcerts = [
    ['American Pride 1', [
        ['Stars and Stripes Forever (arr. Horowitz)', 'John Philip Sousa'],
        ['Excursions, Op. 20', 'Samuel Barber'],
        ['Maple Leaf Rag', 'Scott Joplin'],
        ['Excerpts from "West Side Story" (arr. Ahn-Benton)', 'Leonard Bernstein'],
        ['Rhapsody in Blue', 'George Gershwin']
    ], 65, 150, allAmerican1],
    ['Ballroom 1', [
        ['Waltz in E-flat major, Op. 18', 'Frederic Chopin'],
        ['Arabian Dance from "The Nutcraker"', 'Piotr Tchaikovsky'],
        ['Fantastic Dances, Op. 5', 'Dmitri Shostakovich'],
        ['Mephisto Waltz No. 1', 'Franz Liszt'],
        ['Hungarian Dance No. 5', 'Johannes Brahms'],
        ['3 Viennese Dances (arr. Ahn-Benton)', 'Fritz Kreisler'],
        ['Oblivion (arr. Ahn-Benton)', 'Astor Piazzolla'],
        ['Danzas argentinas', 'Alberto Ginastera'],
        ['Carmen variations', 'HVladimir Horowitz'],
    ], 55, 150, ballroom1],
    ['Ballroom 2', [
        ['Waltz of the Flowers from "The Nutcracker"', 'Piotr Tchaikovsky'],
        ['Romanian folk dances', 'Bela Bartok'],
        ['Danse macabre (arr. Liszt)', 'Camille Saint-Saëns'],
        ['Sabre Dance (arr. Cziffra)', 'Aram Khachaturian'],
        ['Mazurka in F-sharp minor, Op. 6, No. 1', 'Frederic Chopin'],
        ['Mazurka in A minor, Op. 17, No. 4', 'Frederic Chopin'],
        ['Mazurka in B-flat major, Op. 7, No. 1', 'Frederic Chopin'],
        ['Libertango (arr. Ahn-Benton)', 'Astor Piazzolla'],
        ['Tarantella', 'Franz Liszt']
    ], 55, 150, ballroom2],
    ['Four Elements: Air & Earth', [
        ['Sonata No. 17 in D minor "Tempest"', 'Ludwig van Beethoven'],
        ['Etude in F-sharp minor, Op. 15, No. 2 "Earth"', 'Jae Young Ahn-Benton'],
        ['Orage', 'Franz Liszt'],
        ['Erda\'s Warning from "Das Rheingold" (arr. Ahn-Benton)', 'Richard Wagner'],
        ['Etude in F-sharp major, Op. 15, No. 4 "Air"', 'Jae Young Ahn-Benton'],
        ['Isle of the Dead, Op. 29', 'Sergei Rachmaninov'],
        ['Etude in A minor, Op. 25, No. 11 "Winter Wind"', 'Frederic Chopin'],
    ], 70, 150, airEarth],
    ['Four Elements: Water & Fire', [
        ['Etude in C major, Op. 10, No. 1 "Waterfall"', 'Frederic Chopin'],
        ['Vers la flamme', 'Aleksandr Scriabin'],
        ['Etude in D-flat major, Op. 15, No. 1 "Water"', 'Jae Young Ahn-Benton'],
        ['Danza ritual del fuego', 'Manuel de Falla'],
        ['Jardins sous la pluie from "Estampes"', 'Claude Debussy'],
        ['Etude in G minor, Op. 15, No. 3 "Fire"', 'Jae Young Ahn-Benton'],
        ['Jeux d\'eau', 'Maurice Ravel'],
        ['The Firebird', 'Igor Stravinsky'],
    ], 60, 175, fireWater],
    ['Impostors and Thieves', [
        ['Transcription of J.S. Bach\'s "Chaconne"', 'Ferruccio Busoni'],
        ['Aria (arr. Ahn-Benton)', 'Eugene Bozza'],
        ['Etude in A-flat major, Op. 25, No. 1 "Aeolian Harp"', 'Frederic Chopin'],
        ['Etude in C-sharp minor, Op. 25, No. 7 "Cello"', 'Frederic Chopin'],
        ['La Campanella', 'Franz Liszt'],
        ['Prelude, Fugue, and Variation, Op. 18', 'César Franck'],
        ['Transcription of Vivaldi\'s "Winter"', 'Jae Young Ahn-Benton'],
        ['Vocalise, Op. 34, No. 14', 'Sergei Rachmaninov'],
        ['Paganini Variations, Op. 35, No. 1', 'Johannes Brahms'],
    ], 75, 150, impostorsThieves],
    ['Ukrainian Resistance', [
        ['Overture from "Taras Bulba"', 'Mykola Lysenko'],
        ['Kitsch-Musyka', 'Valentin Silvestrov'],
        ['2 Preludes, Op. 7', 'Lev Revutsky'],
        ['Theme and Variations, Op. 99 "Impressions of Ukraine"', 'Jae Young Ahn-Benton'],
        ['Burleska', 'Myroslav Skoryk'],
        ['5 Preludes', 'Boris Lyatoshynsky'],
        ['Sonata No. 2 in C-sharp minor', 'Viktor Kosenko',]
    ], 75, 175, ukraineResistance],
    ['Zookeeper', [
        ['Theme from "Swan Lake"', 'Piotr Tchaikovsky'],
        ['Oiseaux tristes', 'Maurice Ravel'],
        ['La poule', 'Jean-Philippe Rameau'],
        ['Poissons d\'or', 'Claude Debussy'],
        ['Etude in F minor, Op. 25, No. 2 "Bees"', 'Frederic Chopin'],
        ['Sonata No. 25 in G major, Op. 79 "Cuckoo"', 'Ludwig van Beethoven'],
        ['Sonata No. 30 in G minor "Cat Fugue"', 'Scarlatti, Domenico Scarlatti'],
        ['Etude in G-flat major, Op. 25, No. 9 "Butterfly"', 'Chopin, Frederic Chopin'],
        ['The Lark (arr. Balakirev)', 'Mikhael Glinka'],
        ['Le cygne', 'Camille Saint-Saëns'],
        ['Variations on "The haunted mouse" by Faber, Op. 91', 'Jae Young Ahn-Benton'],
        ['The flight of the bumblebee (arr. Cziffra)', 'Nikolai Rimsky-Korsakov']
    ], 60, 125, zookeeper],
]

const concertObjs = availableConcerts.map(concert => new Concert ('Ahn-Benton, Jae', concert[0], concert[1], concert[2], concert[3], concert[4]))
let tdStyle = 'border border-stone-200 text-center py-1'
let btnStyle = 'border border-stone-200 rounded-xl p-2 m-3 hover:bg-amber-400 hover:text-stone-800'

export default function MobilePianoConcertSeriesPage({ isMenuOpen }) {
    const [showDetails, setShowDetails] = useState(false)
    const [currentConcert, setCurrentConcert] = useState({})
    return (
        <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} relative`}>
            {currentConcert.pianist
            ? <div className={`${showDetails ? 'z-50' : 'hidden'} absolute w-3/4 h-[75%] left-[12.5%] border border-stone-200 flex flex-col justify-center items-center bg-stone-700 rounded-3xl overflow-y-auto py-6`}>
                <p className="text-3xl my-6 font-bold text-center">{currentConcert.title}</p>
                <p className="italic my-2">presented by</p>
                <p>{`${currentConcert.pianist.split(', ')[1]} ${currentConcert.pianist.split(', ')[0]}`}, piano</p>
                <img className="border border-stone-200 rounded-xl min-h-[50vh] h-1/2 w-1/2 my-5" src={currentConcert.poster} alt='poster'/>
                <div className="border border-stone-200 rounded-xl w-11/12">
                    <p className="text-2xl underline text-center my-2">Program</p>
                    {currentConcert.program.map(opus => <div key={opus[0] + opus[1]} className="flex justify-between m-1 p-1 text-sm">
                        <p className="w-3/4">{opus[0]}</p>
                        <p className="w-1/4">{opus[1]}</p>
                    </div>)}
                </div>
                <p className="mt-3">Approximate Duration: <span className="font-bold">{currentConcert.duration} minutes</span></p>
                <p className="mb-3">Base Price: <span className="font-bold">${currentConcert.basePrice}</span></p>
                <div>
                    <button className={btnStyle}>BOOK THIS CONCERT</button>
                    <button className={btnStyle} onClick={() => {
                        setShowDetails(false)
                    }}>CLOSE</button>
                </div>
            </div>
            : ''}
            <h1 className="text-center text-3xl my-24">GLVMS Mobile Piano Concert Series</h1>
            <p className="w-11/12 mx-auto text-lg">Bring a professional classical piano performance right to your doorstep! Simply pick a concert from the menu below, and request a date, time, and location. Once confirmed by GLVMS and payment is made, the designated pianist will show up at your location at the specified date and time, and will perform the requested concert. That's it! No hassle, no confusion.</p>
            <table className={`border border-stone-200 text-sm w-11/12 mx-auto mb-12 table-fixed my-12`}>
                <thead>
                    <tr className="font-bold border border-stone-200 bg-stone-700" >
                        <td className={tdStyle + ' w-[20%]'}>Pianist</td>
                        <td className={tdStyle + ' w-[50%]'}>Title</td>
                        <td className={tdStyle + ' w-[15%]'}>Approximate Duration</td>
                        <td className={tdStyle + ' w-[15%]'}>Base Price</td>
                    </tr>
                </thead>
                <tbody>
                    {concertObjs.map(concert => <tr key={concert.title} className="hover:bg-stone-600 hover:cursor-pointer" onClick={() => {
                        setShowDetails(true)
                        setCurrentConcert(concert)
                    }}>
                        <td className={tdStyle}>{concert.pianist}</td>
                        <td className={tdStyle}>{concert.title}</td>
                        <td className={tdStyle}>{concert.duration} minutes</td>
                        <td className={tdStyle}>${concert.basePrice}</td>
                    </tr>)}
                </tbody>
            </table>
            <aside className="w-11/12 mx-auto">
                <p className="text-2xl underline text-center my-6">Disclaimers</p>
                <ul className="list-disc list-inside text-sm mb-10">
                    <li>These mobile concerts are primarily designed for intimate home settings, either completely private just for 1 person, or up to an audience size of 10 people. They are not recommended for large audiences or for the general public. For large-scale performance requests, please visit the main GLVMS repertoire page <Link to="/repertoire" className="underline hover:text-amber-600">here</Link>.</li>
                    <li>Light snacks and/or ambience lighting may be added for your enjoyment during the concert for a small fee.</li>
                    <li>No piano at home? No problem. Our pianist will bring a fully functional electric keyboard.</li>
                    <li>Please allow up to 15 minutes of setup and strike-down time before and after the requested performance timeframe.</li>
                    <li>A travel fee ranging from $5 to $25 may apply depending on the requested location within the greater Las Vegas area. Additional fees may apply for performance requests outside of the greater Las Vegas area.</li>
                    <li>Repertoire substitutions may be allowed upon request. Additional fees may apply.</li>
                </ul>
            </aside>
        </main>
    )
}