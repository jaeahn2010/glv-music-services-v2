import { useEffect, useState } from "react"
const csSampleImages = import.meta.glob('../../assets/cs-sample-*.{png,jpg,jpeg}')

class Composition {
    constructor(composer, opusNo, title, nickname, movements = [], yearComposed, instrumentation, price) {
        this.composer = composer
        this.opusNo = opusNo
        this.title = title
        this.nickname = nickname
        this.movements = movements
        this.yearComposed = yearComposed
        this.instrumentation = instrumentation
        this.price = price
    }
}

class Movement {
    constructor(movementNo, movementTitle, movementNickname) {
        this.movementNo = movementNo
        this.movementTitle = movementTitle
        this.movementNickname = movementNickname
    }
}

const ahnBentonAvailableCompositions = [
    ['1', 'Minuetto e Trio', null, [], 2002, 'piano', 2],
    ['2', 'Scherzetto No. 1', null, [], 2002, 'piano', 2],
    ['3', 'Bagatelle No. 1', 'Children\'s March', [], 2002, 'piano', 2],
    ['4', 'Scherzetto No. 2', 'The Runner', [], 2002, 'piano', 2],
    ['5', 'Sonatina No. 1', 'The Weather', [
        new Movement(1, 'I. Fantasia', 'Fog'),
        new Movement(2, 'II. Toccata', 'Rainstorm'),
        new Movement(3, 'III. Intermezzo', 'Changing Weather'),
        new Movement(4, 'IV. Finale', 'Hurricane')
    ], 2002, 'piano', 8],
    ['6', '4 Preludes', null, [
        new Movement(1, 'Prelude No. 1', 'Nostalgia'),
        new Movement(2, 'Prelude No. 2', 'Two Dueling Singers'),
        new Movement(3, 'Prelude No. 3', 'Dance of the Barbarians'),
        new Movement(4, 'Prelude No. 4', 'Sorrow'),
    ], 2002, 'piano', 6],
    ['7', 'Scherzetto No. 3', 'A Sad Clown\'s Day', [], 2002, 'piano', 5],
    ['8', 'Impromptu No. 1', null, [
        new Movement(1, 'Movement 1', null),
        new Movement(2, 'Movement 2', null),
    ], 2002, 'piano', 4],
    ['9', 'Rondo No. 1', null, [], 2002, 'piano', 2],
    ['10', '4 Preludes', null, [
        new Movement(1, 'Prelude No. 5', 'Rain'),
        new Movement(2, 'Prelude No. 6', 'In the Style of Chopin'),
        new Movement(3, 'Prelude No. 7', 'Funeral March'),
        new Movement(4, 'Prelude No. 8', 'Toccatina'),
    ], 2003, 'piano', 6],
    ['11_1', 'Sonatina No. 2', null, [
        new Movement(1, 'I. Allegro maestoso', null),
        new Movement(2, 'II. Andante e semplice', null),
        new Movement(3, 'III. Presto', null),
    ], 2003, 'piano', 12],
    ['11_2', 'Sonatina No. 3', 'The Holidays', [
        new Movement(1, 'I. Allegro non troppo', 'New Year\'s Celebration'),
        new Movement(2, 'II. Vivace', 'Children on Summer Break'),
        new Movement(3, 'III. Largo', 'Ghost of Halloween'),
        new Movement(4, 'IV. Moderato', 'Christmas Carol'),
    ], 2003, 'piano', 13],
    ['12', '2 Preludes', null, [
        new Movement(1, 'Prelude No. 9', null),
        new Movement(2, 'Prelude No. 10', null),
    ], 2003, 'piano', 5],
    ['13', 'Scherzetto No. 4', 'Playful Ghosts', [], 2004, 'piano', 3],
    ['14', 'Nocturne No. 1', null, [], 2004, 'piano', 3],
    ['15', '4 Etudes', 'Four Elements', [
        new Movement(1, 'Etude No. 1', 'Water'),
        new Movement(2, 'Etude No. 2', 'Earth'),
        new Movement(3, 'Etude No. 3', 'Fire'),
        new Movement(4, 'Etude No. 4', 'Wind'),
    ], 2004, 'piano', 19],
    ['21', 'Nocturne No. 2', null, [], 2004, 'piano', 3],
    ['28', '2 Scherzi', 'Halloween', [
        new Movement(1, 'Scherzo No. 1', null),
        new Movement(2, 'Scherzo No. 2', null),
    ], 2004, 'piano', 15],
    ['29', '2 Toccate', null, [
        new Movement(1, 'Toccata No. 1', null),
        new Movement(2, 'Toccata No. 2', null),
    ], 2004, 'piano', 15],
    ['30', '2 Rhapsodies', null, [
        new Movement(1, 'Rhapsody No. 1', 'Pastorale'),
        new Movement(2, 'Rhapsody No. 2', 'A Witch\'s Curse and Dance'),
    ], 2004, 'piano', 15],
    ['32b', 'Theme and Variations No. 2', 'Happy Birthday', [], 2011, 'piano', 10],
    ['50', 'Toccata e Fantasia No. 2', null, [], 2006, 'piano', 10],
    ['52', '2 Preludes', null, [
        new Movement(1, 'Prelude No. 22', null),
        new Movement(2, 'Prelude No. 23', null),
    ], 2007, 'piano', 5],
    ['56', 'Ragtime', 'Ragtime After Gershwin', [], 2007, 'piano', 5],
    ['59', 'Romance No. 1', 'A Passionate Story of Love', [], 2009, 'piano, violin', 5],
    ['60', '24 Preludes for Advanced Students', null, [
        new Movement(1, 'Prelude No. 48', null),
        new Movement(2, 'Prelude No. 49', null),
        new Movement(3, 'Prelude No. 50', null),
        new Movement(4, 'Prelude No. 51', null),
        new Movement(5, 'Prelude No. 52', null),
        new Movement(6, 'Prelude No. 53', null),
        new Movement(7, 'Prelude No. 54', null),
        new Movement(8, 'Prelude No. 55', null),
        new Movement(9, 'Prelude No. 56', null),
        new Movement(10, 'Prelude No. 57', null),
        new Movement(11, 'Prelude No. 58', null),
        new Movement(12, 'Prelude No. 59', null),
        new Movement(13, 'Prelude No. 60', null),
        new Movement(14, 'Prelude No. 61', null),
        new Movement(15, 'Prelude No. 62', null),
        new Movement(16, 'Prelude No. 63', null),
        new Movement(17, 'Prelude No. 64', null),
        new Movement(18, 'Prelude No. 65', null),
        new Movement(19, 'Prelude No. 66', null),
        new Movement(20, 'Prelude No. 67', null),
        new Movement(21, 'Prelude No. 68', null),
        new Movement(22, 'Prelude No. 69', null),
        new Movement(23, 'Prelude No. 70', null),
        new Movement(24, 'Prelude No. 71', null),
    ], 2009, 'piano', 27],
    ['62', 'Romance No. 2', 'Silvery Night and Golden Dreams', [], 2010, 'piano, violin', 8],
    ['64_2', 'Romance No. 4', 'A Letter to You', [], 2010, 'piano', 6],
    ['70', 'Romance No. 5', 'An Old Memory', [], 2011, 'piano, violin', 5],
    ['74', 'Ballade', 'Grief', [], 2011, 'piano, viola', 10],
    ['76', 'Capriccio', 'Impressions of Eastern Europe', [], 2011, 'piano (4 hands)', 7],
    ['77', 'Theme and Variations No. 3 (piano reduction)', 'Dream Variations', [], 2011, 'piano, orchestra', 30],
    ['78', 'Romance No. 6', 'The Unbreakable Bond', [], 2011, 'piano, violin', 8],
    ['79', 'Sonata No. 7', 'Imperialism', [
        new Movement(1, 'I. Lento e minaccioso', 'Subjugation'),
        new Movement(2, 'II. Andante', 'Invocation'),
        new Movement(3, 'III. Prestissimo', 'Annihilation'),
        new Movement(4, 'IV. Andante', 'Lamentation'),
        new Movement(5, 'V. Allegro giusto, alla marcia', 'Submission')
    ], 2017, 'piano', 48],
    ['80', 'Toccata No. 4', null, [], 2011, 'piano, cello', 8],
    ['84', 'Rhapsody No. 5 (full score)', 'Curse and Ritual', [], 2012, 'piano, violin 1, violin 2, viola, cello, contrabass, flute, oboe, clarinet, bassoon', 40],
    ['85', 'Elegy', null, [], 2013, 'piano (left hand)', 10],
    ['86a', 'Sonata for Bassoon and Piano', null, [
        new Movement(1, 'I. Andante', null),
        new Movement(2, 'II. Adagio', null),
        new Movement(3, 'III. Allegretto', null),
    ], 2012, 'piano, bassoon', 30],
    ['86b', 'Sonata for Cello and Piano', null, [
        new Movement(1, 'I. Andante', null),
        new Movement(2, 'II. Adagio', null),
        new Movement(3, 'III. Allegretto', null),
    ], 2019, 'piano, cello', 32],
    ['87', 'Romance No. 7', 'Reminiscence', [], 2012, 'piano', 10],
    ['89', 'Fantasy No. 2 (piano reduction)', null, [], 2014, 'piano, orchestra', 30],
    ['91', 'Theme and Variations No. 4', 'The Haunted Mouse', [], 2013, 'piano', 6],
    ['93', 'Barcarolle', 'Raging Ocean', [], 2014, 'piano, bassoon', 10],
    ['95', 'Opera Trilogy, Part 2 (piano reduction)', 'Remember My Pain', [], 2014, 'voice, orchestra', 30],
    ['96a', 'Theme and Variations No. 5', 'In the Garden', [], 2014, 'piano', 12],
    ['96b', 'Theme and Variations No. 5 (4 hands)', 'In the Garden', [], 2014, 'piano (4 hands)', 18],
    ['99a', 'Theme and Variations No. 6', 'Impressions of Ukraine', [], 2019, 'piano (4 hands)', 15],
    ['99b', 'Theme and Variations No. 6', 'Impressions of Ukraine', [], 2020, 'piano', 18],
]

const ahnBentonCompositionObjs = ahnBentonAvailableCompositions.map(composition => new Composition ('Ahn-Benton, Jae', composition[0], composition[1], composition[2], composition[3], composition[4], composition[5], composition[6]))

let tdStyle = 'border border-stone-200 text-center py-1'
let btnStyle = 'border border-stone-200 rounded-xl p-2 m-3 hover:bg-amber-400 hover:text-stone-800'

export default function NewCompositionsPage({ isMenuOpen, loginStatus, scrollToTop }) {
    const [showDetails, setShowDetails] = useState(false)
    const [currentComposition, setCurrentComposition] = useState({})
    const [currentSamplePage, setCurrentSamplePage] = useState('')
    
    useEffect(() => {
        if (currentComposition.opusNo) {
            const matchingPath = Object.keys(csSampleImages).find(path => path.split('-')[2].split('.')[0] === currentComposition.opusNo)
            if (matchingPath) {
                csSampleImages[matchingPath]().then((module) => {
                    setCurrentSamplePage(module.default) // Set the resolved image URL
                })
            }
        }
    }, [currentComposition])

    return (
        <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} relative font-poppins`}>
            {currentComposition.composer
            ? <div className={`${showDetails ? 'z-50' : 'hidden'} absolute w-11/12 left-[4.17%] top-[5%] lg:w-1/2 lg:left-1/4 border border-stone-200 flex flex-col justify-center items-center bg-stone-700 rounded-3xl overflow-y-auto`}>
                <p className="font-bold text-lg my-2">{currentComposition.composer}</p>
                <p className="text-lg lg:text-3xl my-2 font-bold text-center">{currentComposition.title}
                    {currentComposition.nickname
                    ? <span> "{currentComposition.nickname}"</span>
                    : ''}
                </p>
                <p className="text-xl">Op. <span>{Number.isInteger(currentComposition.opusNo)
                    ? currentComposition.opusNo
                    : String(currentComposition.opusNo).split('_')[1]
                        ? `${String(currentComposition.opusNo).split('_')[0]}, No. ${String(currentComposition.opusNo).split('_')[1]}`
                        : currentComposition.opusNo}</span></p>
                <p className="italic">for {currentComposition.instrumentation}</p>
                <img className="border border-stone-200 rounded-xl w-11/12 lg:w-2/3 my-5" src={currentSamplePage} alt={`Sample page: Op.${currentComposition.opusNo}`}/>
                <p className="underline">Movements</p>
                <div>{currentComposition.movements.length
                    ? currentComposition.movements.map(movement => <p key={movement.movementNo}>{movement.movementTitle} {movement.movementNickname
                        ? <span>&#40;{movement.movementNickname}&#41;</span>
                        : ''}</p>)
                    : 'None'}</div>
                <p className="my-6">Year composed: {currentComposition.yearComposed}</p>
                <div>
                    <button className={btnStyle}>BUY THIS COMPOSITION</button>
                    <button className={btnStyle} onClick={() => {
                        setShowDetails(false)
                    }}>CLOSE</button>
                </div>
            </div>
            : ''}
            <h1 className="text-center text-3xl my-24">GLVMS New Compositions Store</h1>
            <table className={`${showDetails ? 'opacity-20 z-0' : 'z-50'} border border-stone-200 text-[0.7em] lg:text-sm w-11/12 mx-auto mb-12 table-fixed`}>
                <thead>
                    <tr className="font-bold border border-stone-200 bg-gradient-to-r from-green-950 via-green-700 to-green-950">
                        <td className={tdStyle + ' w-[25%] lg:w-[15%]'}>Composer</td>
                        <td className={tdStyle + ' w-[20%] lg:w-[10%]'}>Opus</td>
                        <td className={tdStyle + ' w-[30%] lg:w-[50%]'}>Title</td>
                        <td className={tdStyle + ' w-[35%] lg:w-[20%]'}>Instrumentation</td>
                        <td className={tdStyle + ' w-[10%] lg:w-[5%]'}>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {ahnBentonCompositionObjs.map(composition => 
                    <tr key={composition.composer + composition.opusNo} className="hover:bg-stone-600 hover:cursor-pointer" onClick={() => {
                        setShowDetails(true)
                        setCurrentComposition(composition)
                        scrollToTop()
                    }}>
                        <td className={tdStyle}>{composition.composer}</td>
                        <td className={tdStyle}>{'Op. ' + composition.opusNo.replace('_', ', No. ')}</td>
                        <td className='border border-stone-200 p-1 text-center lg:text-left'>{composition.nickname
                            ? composition.title + ` "${composition.nickname}"`
                            : composition.title}</td>
                        <td className={tdStyle}>{composition.instrumentation}</td>
                        <td className={tdStyle}>${composition.price}</td>
                    </tr>)}
                </tbody>
            </table>
        </main>
    )
}