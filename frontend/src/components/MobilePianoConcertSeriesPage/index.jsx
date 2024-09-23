import { useState } from "react"

class Concert {
    constructor(pianist, title, program = [], duration, basePrice) {
        this.pianist = pianist
        this.title = title
        this.program = program
        this.duration = duration
        this.basePrice = basePrice
    }
}

const availableConcerts = [
    ['All-American 1', [
        ['Stars and Stripes Forever (arr. Horowitz)', 'Sousa, John Philip'],
        ['Excursions, Op. 20', 'Barber, Samuel'],
        ['Maple Leaf Rag', 'Joplin, Scott'],
        ['Excerpts from "West Side Story" (arr. Ahn-Benton)', 'Bernstein, Leonard'],
        ['Rhapsody in Blue', 'Gershwin, George']
    ], 65, 150],
    ['Dance Floor 1', [
        ['Waltz in E-flat major, Op. 18', 'Chopin, Frederic'],
        ['Arabian Dance from "The Nutcraker"', 'Tchaikovsky, Piotr'],
        ['Fantastic Dances, Op. 5', 'Shostakovich, Dmitri'],
        ['Mephisto Waltz No. 1', 'Liszt, Franz'],
        ['Hungarian Dance No. 5', 'Brahms, Johannes'],
        ['3 Viennese Dances (arr. Ahn-Benton)', 'Kreisler, Fritz'],
        ['Oblivion (arr. Ahn-Benton)', 'Piazzolla, Astor'],
        ['Danzas argentinas', 'Ginastera, Alberto'],
        ['Carmen variations', 'Horowitz, Vladimir'],
    ], 55, 150],
    ['Dance Floor 2', [
        ['Waltz of the Flowers from "The Nutcracker"', 'Tchaikovsky, Piotr'],
        ['Romanian folk dances', 'Bartok, Bela'],
        ['Danse macabre (arr. Liszt)', 'Saint-Saëns, Camille'],
        ['Sabre Dance (arr. Cziffra)', 'Khachaturian, Aram'],
        ['Mazurka in F-sharp minor, Op. 6, No. 1', 'Chopin, Frederic'],
        ['Mazurka in A minor, Op. 17, No. 4', 'Chopin, Frederic'],
        ['Mazurka in B-flat major, Op. 7, No. 1', 'Chopin, Frederic'],
        ['Libertango (arr. Ahn-Benton)', 'Piazzolla, Astor'],
        ['Tarantella', 'Liszt, Franz']
    ], 55, 150],
    ['Four Elements: Air & Earth', [
        ['Sonata No. 17 in D minor "Tempest"', 'Beethoven, Ludwig van'],
        ['Etude in F-sharp minor, Op. 15, No. 2 "Earth"', 'Ahn-Benton, Jae'],
        ['Orage', 'Liszt, Franz'],
        ['Erda\'s Warning from "Das Rheingold" (arr. Ahn-Benton)', 'Wagner, Richard'],
        ['Etude in F-sharp major, Op. 15, No. 4 "Air"', 'Ahn-Benton, Jae'],
        ['Isle of the Dead, Op. 29', 'Rachmaninov, Sergei'],
        ['Etude in A minor, Op. 25, No. 11 "Winter Wind"', 'Chopin, Frederic'],
    ], 70, 150],
    ['Four Elements: Water & Fire', [
        ['Etude in C major, Op. 10, No. 1 "Waterfall"', 'Chopin, Frederic'],
        ['Vers la flamme', 'Scriabin, Aleksandr'],
        ['Etude in D-flat major, Op. 15, No. 1 "Water"', 'Ahn-Benton, Jae'],
        ['Danza ritual del fuego', 'Falla, Manuel de'],
        ['Jardins sous la pluie from "Estampes"', 'Debussy, Claude'],
        ['Etude in G minor, Op. 15, No. 3 "Fire"', 'Ahn-Benton, Jae'],
        ['Jeux d\'eau', 'Ravel, Maurice'],
        ['The Firebird', 'Stravinsky, Igor'],
    ], 60, 175],
    ['Zookeeper', [
        ['Theme from "Swan Lake"', 'Tchaikovsky, Piotr'],
        ['Oiseaux tristes', 'Ravel, Maurice'],
        ['La poule', 'Rameau, Jean-Philippe'],
        ['Poissons d\'or', 'Debussy, Claude'],
        ['Etude in F minor, Op. 25, No. 2 "Bees"', 'Chopin, Frederic'],
        ['Sonata No. 25 in G major, Op. 79 "Cuckoo"', 'Beethoven, Ludwig van'],
        ['Sonata No. 30 in G minor "Cat Fugue"', 'Scarlatti, Domenico'],
        ['Etude in G-flat major, Op. 25, No. 9 "Butterfly"', 'Chopin, Frederic'],
        ['The Lark (arr. Balakirev)', 'Glinka, Mikhael'],
        ['Le cygne', 'Saint-Saëns, Camille'],
        ['Variations on "The haunted mouse" by Faber, Op. 91', 'Ahn-Benton, Jae'],
        ['The flight of the bumblebee (arr. Cziffra)', 'Rimsky-Korsakov, Nikolai']
    ], 60, 125],
]

const concertObjs = availableConcerts.map(concert => new Concert ('Ahn-Benton, Jae', concert[0], concert[1], concert[2], concert[3]))
let tdStyle = 'border border-stone-200 text-center py-1'
let btnStyle = 'border border-stone-200 rounded-xl p-2 m-3 hover:bg-amber-400 hover:text-stone-800'

export default function MobilePianoConcertSeriesPage({ isMenuOpen }) {
    const [showDetails, setShowDetails] = useState(false)
    const [currentConcert, setCurrentConcert] = useState({})
    return (
        <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} relative`}>
            {currentConcert.pianist
            ? <div className={`${showDetails ? 'z-50' : 'hidden'} absolute w-3/4 h-[75%] left-[12.5%] top-[10%] border border-stone-200 flex flex-col justify-center items-center bg-stone-700 rounded-3xl overflow-y-auto py-6`}>
                <p className="text-3xl my-6 font-bold text-center">{currentConcert.title}</p>
                <p className="italic my-2">presented by</p>
                <p>{`${currentConcert.pianist.split(', ')[1]} ${currentConcert.pianist.split(', ')[0]}`}, piano</p>
                <img className="border border-stone-200 rounded-xl min-h-[30vh] h-1/2 w-1/2 my-5" src="" alt=""/>
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
            <p>Bring a professional-caliber classical piano performance right to your doorstep! Simply pick a concert from the below menu, and request a date, time, and location. Once confirmed by GLVMS, one of our pianists will show up at your designated location at the designated date and time, and will perform the requested concert. That's it! No hassle, no confusion.</p>
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
            <aside>
                <p>Disclaimers:</p>
                <ul className="list-disc list-inside">
                    <li>These concerts are primarily designed for intimate home settings, either completely private just for 1 person, or up to an audience size of 10 people. For large-scale performance requests, please visit the main GLVMS repertoire page.</li>
                    <li>Light snacks may be added for your enjoyment during the concert for a small fee.</li>
                    <li>No piano at home? No problem. Our pianist will bring a fully functional electric keyboard.</li>
                    <li>Please allow up to 15 minutes of setup and strike-down time before and after the requested performance timeframe.</li>
                    <li>A travel fee ranging from $5 to $25 may apply depending on the requested location within the greater Las Vegas area. Additional fees may apply for performance requests outside of the greater Las Vegas area.</li>
                    <li>Repertoire substitutions may be allowed. Additional fees may apply.</li>
                </ul>
            </aside>
        </main>
    )
}