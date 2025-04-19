import { useEffect, useState } from "react"
import ahnbentonVenmo from '../../assets/venmo-qr-ahnbenton.jpg'
const csSampleImages = import.meta.glob('../../assets/cs-sample-*.{png,jpg,jpeg}')
import elegantComposition from '../../assets/elegant-composition.jpg'

class Composition {
    constructor(composer, opusNo, title, movements = [], yearComposed, instrumentation = [], price) {
        this.composer = composer
        this.opusNo = opusNo
        this.title = title
        this.movements = movements
        this.yearComposed = yearComposed
        this.instrumentation = instrumentation
        this.price = price
    }
}

function romanConversion(num) {
    if (num === 0) return ''
    const romanNumerals = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ]
    
    let mainNum, partNum
    if (Number.isInteger(num)) {
        mainNum = num
        partNum = 0
    } else {
        mainNum = Math.floor(num)
        partNum = Math.round((num - mainNum) * 10)
    }

    let result = ''
    for (const { value, numeral } of romanNumerals) {
        while (mainNum >= value) {
            result += numeral
            mainNum -= value
        }
    }
    return !partNum ? `${result}. ` : `${result} (Pt. ${Math.floor(partNum)}). `
}

function zeroPad(num) {
    const len = String(num).length
    return len < 3 ? '0'.repeat(3 - len) + String(num) : num
}

function consonants(str) {
    const nonConsonants = new Set(['A', 'E', 'I', 'O', 'U', ' ', '(', ')', ',', ':', '-'])
    let result = ''
    for (let char of str) {
        if (!nonConsonants.has(char)) result += char
    }
    return result
}

const pno = 'piano'
const pno4 = 'piano (4 hands)'
const pnol = 'piano (left hand)'
const vln = 'violin'
const vla = 'viola'
const vlc = 'cello'
const cb = 'contrabass'
const fl = 'flute'
const ob = 'oboe'
const cl = 'clarinet'
const bsn = 'bassoon'
const hn = 'horn'
const tpt = 'trumpet'
const tbn = 'trombone'
const tba = 'tuba'
const voc = 'voice'
const orch = 'orchestra'

const ahnBentonAvailableCompositions = [
    ['1', 'Minuetto e Trio', [], 2002, [pno], 2],
    ['2', 'Scherzetto', [], 2002, [pno], 2],
    ['3', 'Children\'s March', [], 2002, [pno], 2],
    ['4', 'The Runner', [], 2002, [pno], 2],
    ['5', 'The Weather', ['Fog', 'Rainstorm', 'Changing Weather', 'Hurricane'], 2002, [pno], 8],
    ['6', '4 Preludes', ['Nostalgia', 'Two Dueling Singers', 'Dance of the Barbarians', 'Sorrow'], 2002, [pno], 6],
    ['7', 'Ballade of the Sad Clown', [], 2002, [pno], 5],
    ['8', 'Impromptu', ['Allegro assai', 'Andante'], 2002, [pno], 4],
    ['9', 'Rondo', [], 2002, [pno], 2],
    ['10', '4 Preludes', ['Rain', 'In the Style of Chopin', 'Funeral March', 'Toccatina'], 2003, [pno], 6],
    ['11_1', 'Sonatina', ['Allegro maestoso', 'Andante e semplice', 'Presto'], 2003, [pno], 12],
    ['11_2', 'The Holidays', ['New Year\'s Celebration', 'Children on Summer Break', 'Ghost of Halloween', 'Christmas Carol',], 2003, [pno], 13],
    ['12', '2 Preludes', ['Prelude in A minor', 'Prelude in C minor'], 2003, [pno], 5],
    ['13', 'Playful Ghosts', [], 2004, [pno], 3],
    ['14', 'Nocturne', [], 2004, [pno], 3],
    ['15', '4 Elements', ['Water', 'Earth', 'Fire', 'Wind'], 2004, [pno], 19],
    ['21', 'Nocturne', [], 2004, [pno], 3],
    ['28', 'Halloween Mischief', ['Andante', 'Allegro tenebroso'], 2004, [pno], 15],
    ['29', '2 Toccate', ['Toccata in D minor', 'Toccata in A minor'], 2004, [pno], 15],
    ['30', '2 Fantasies', ['Pastorale', 'Witch\'s Curse and Dance'], 2004, [pno], 15],
    ['32b', 'Variations on "Happy Birthday"', [], 2011, [pno], 10],
    ['50', 'Toccata e Fantasia', [], 2006, [pno], 10],
    ['52', '2 Preludes', ['Prelude in C major', 'Prelude in C major'], 2007, [pno], 5],
    ['56', 'Ragtime After Gershwin', [], 2007, [pno], 5],
    ['59', 'A Passionate Story of Love', [], 2009, [pno, vln], 5],
    ['60', '24 Preludes for Advanced Students', ['Prelude in C major', 'Prelude in A minor', 'Prelude in G major', 'Prelude in E minor', 'Prelude in D major', 'Prelude in B minor', 'Prelude in A major', 'Prelude in F-sharp minor', 'Prelude in E major', 'Prelude in C-sharp minor', 'Prelude in B major', 'Prelude in G-sharp minor', 'Prelude in F-sharp major', 'Prelude in E-flat minor', 'Prelude in D-flat major', 'Prelude in B-flat minor', 'Prelude in A-flat major', 'Prelude in F minor', 'Prelude in E-flat major', 'Prelude in C minor', 'Prelude in B-flat major', 'Prelude in G minor', 'Prelude in F major', 'Prelude in D minor'], 2009, [pno], 27],
    ['62', 'Silvery Night and Golden Dreams', [], 2010, [pno, vln], 8],
    ['64_2', 'A Letter', [], 2010, [pno], 6],
    ['70', 'An Old Memory', [], 2011, [pno, vln], 5],
    ['74', 'Grief', [], 2011, [pno, vla], 10],
    ['76', 'Impressions of Eastern Europe', [], 2011, [pno4], 7],
    ['77', 'Dream Variations', [], 2011, [pno, orch], 30],
    ['78', 'The Unbreakable Bond', [], 2011, [pno, vln], 8],
    ['79', 'Sonata imperialista', ['Subjugation', 'Invocation', 'Annihilation', 'Lamentation', 'Submission'], 2017, [pno], 48],
    ['80', 'Toccata', [], 2011, [pno, vlc], 8],
    ['84', 'Curse and Ritual', [], 2012, [pno, vln, vln, vla, vlc, cb, fl, ob, cl, bsn], 40],
    ['85', 'Elegy', [], 2013, [pnol], 10],
    ['86a', 'Sonata', ['Andante', 'Adagio', 'Allegretto'], 2012, [pno, bsn], 30],
    ['86b', 'Sonata', ['Andante', 'Adagio', 'Allegretto'], 2019, [pno, vlc], 32],
    ['87', 'Reminiscence', [], 2012, [pno], 10],
    ['89', 'Fantasy', [], 2014, [pno, orch], 30],
    ['91', 'Variations on The Haunted Mouse', [], 2013, [pno], 6],
    ['93', 'Raging Ocean', [], 2014, [pno, bsn], 10],
    ['95', 'Opera Trilogy, Part 2: Remember My Pain', [], 2014, [voc, orch], 30],
    ['96a', 'Variations on In the Garden', [], 2014, [pno], 12],
    ['96b', 'Variations on In the Garden', [], 2014, [pno4], 18],
    ['99a', 'Impressions of Ukraine', [], 2019, [pno4], 18],
    ['99b', 'Impressions of Ukraine', [], 2020, [pno], 15],
    ['101', 'Variations on God rest ye merry, gentlemen', [], 2024, [pno], 15],
]

const ahnBentonCompositionObjs = ahnBentonAvailableCompositions.map(composition => new Composition ('Jae Young Ahn-Benton', composition[0], composition[1], composition[2], composition[3], composition[4], composition[5]))

export default function NewCompositionsPage({ isMenuOpen, loginStatus, scrollToTop }) {
    const [showDetails, setShowDetails] = useState(false)
    const [currentComposition, setCurrentComposition] = useState({})
    const [currentSamplePage, setCurrentSamplePage] = useState('')
    const [showPaymentInfo, setShowPaymentInfo] = useState(false)
    const [showCompositions, setShowCompositions] = useState(false)
    const [showArrangements, setShowArrangements] = useState(false)

    let tdStyle = 'border border-stone-800 text-center py-1'
    let btnStyle = 'border border-stone-800 rounded-xl p-2 m-3 hover:bg-amber-300 hover:text-stone-800 shadow-lg'
    let subsectionDivStyle = `${showDetails ? 'z-0 opacity-5' : ''} flex justify-between items-center border border-stone-800 w-3/4 bg-stone-100 my-6 mx-auto px-5 rounded-xl hover:bg-amber-300 duration-500 hover:cursor-pointer shadow-lg`
    let subsectionStyle = 'text-center text-2xl my-6 font-vibes'
    
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
        <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} relative font-montserrat`}>
            {currentComposition.composer
            ? <div className={`${showDetails ? 'z-50' : 'hidden'} absolute w-11/12 left-[4.17%] top-[5%] lg:w-1/2 lg:left-1/4 border border-stone-800 flex flex-col justify-center items-center bg-stone-300 rounded-3xl overflow-y-auto`}>
                <p className="font-bold text-lg my-2">{currentComposition.composer}</p>
                <p className="text-lg lg:text-3xl my-2 font-bold text-center">{currentComposition.title}</p>
                <p className="text-xl">Op. <span>{Number.isInteger(currentComposition.opusNo)
                    ? currentComposition.opusNo
                    : String(currentComposition.opusNo).split('_')[1]
                        ? `${String(currentComposition.opusNo).split('_')[0]}, No. ${String(currentComposition.opusNo).split('_')[1]}`
                        : currentComposition.opusNo}</span></p>
                <p className="italic">for {currentComposition.instrumentation.map((instrument, index) => index !== currentComposition.instrumentation.length - 1 ? `${instrument}, ` : instrument).join('')}</p>
                <img className="border border-stone-800 rounded-xl w-11/12 lg:w-2/3 my-5" src={currentSamplePage} alt={`Sample page: Op.${currentComposition.opusNo}`}/>
                <p className="underline">Movements</p>
                <div>{currentComposition.movements.length
                    ? currentComposition.movements.map((mvmt, idx) => <p key={`${mvmt}-${idx}`}>{`${romanConversion(idx + 1)}${mvmt}`}</p>)
                    : 'None'}</div>
                <p className="my-6">Year composed: {currentComposition.yearComposed}</p>
                <div>
                    <button className={btnStyle} onClick={() => {
                        setShowPaymentInfo(true)
                    }}>BUY THIS COMPOSITION</button>
                    <button className={btnStyle} onClick={() => {
                        setShowDetails(false)
                        setShowPaymentInfo(false)
                    }}>CLOSE</button>
                </div>
                {showPaymentInfo
                ? <section className="flex flex-col justify-center items-center border border-stone-800 bg-stone-100 rounded-xl mx-4 my-6 p-2">
                    <p>The official payment portal is still under construction. We are sorry for the inconvenience. For now, please use the QR code below to be connected to the Forte & Piano Venmo account. Please write the below "Order Shortcode" for the Venmo description. Once the correct payment is confirmed, we will send you the PDF as soon as possible, no later than within 24 hours. Please contact us directly if you would like to use a different payment method.</p>
                    <img src={ahnbentonVenmo} alt="Venmo QR code" className="w-1/2 m-5 rounded-xl"/>
                    <p>Order shortcode: {currentComposition.composer.toLowerCase().slice(0, 3) + zeroPad(currentComposition.opusNo) + consonants(currentComposition.title.toUpperCase()).split('').reverse().join('').slice(0, 11)}</p>
                </section>
                : ''}
            </div>
            : ''}
            <div className={`${showDetails ? 'z-0 opacity-5' : ''} text-center text-3xl my-24`}>
                <h1 className='text-lg'>Forte & Piano's</h1>
                <h2 className='mt-5 text-4xl lg:text-6xl font-vibes'>New Compositions Store</h2>
            </div>
            <img src={elegantComposition} alt="elegant-composition" className="w-11/12 lg:w-1/2 rounded-xl mx-auto"/>
            <p className={`${showDetails ? 'z-0 opacity-5' : ''} w-11/12 lg:w-3/4 mx-auto my-10 text-lg`}>Browse our new compositions store, where talented and creative composers of Forte & Piano offer a variety of original works and clever arrangements featuring all kinds of atmosphere, instruments, and styles of music.</p>
            <div className={subsectionDivStyle} onClick={() => setShowCompositions(!showCompositions)}>
                <p className={subsectionStyle}>Original Compositions</p>
                <p className={`mx-3 hover:cursor-pointer duration-300 ${showCompositions ? 'rotate-180' : ''}`}>&#9660;</p>
            </div>
            <table className={`${showDetails ? 'opacity-20 z-0' : 'z-50'} ${showCompositions ? '' : 'hidden'} border border-stone-200 text-[0.7em] lg:text-sm w-11/12 mx-auto mb-12 table-fixed`}>
                <thead>
                    <tr className="font-bold border border-stone-800 bg-gradient-to-r from-stone-300 via-stone-400 to-stone-300 lg:h-[50px] lg:text-lg">
                        <td className={tdStyle + ' w-[20%] lg:w-[15%]'}>Composer</td>
                        <td className={tdStyle + ' w-[10%] lg:w-[10%]'}>Opus</td>
                        <td className={tdStyle + ' w-[35%] lg:w-[50%]'}>Title</td>
                        <td className={tdStyle + ' w-[25%] lg:w-[20%]'}>Instrumentation</td>
                        <td className={tdStyle + ' w-[10%] lg:w-[5%]'}>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {ahnBentonCompositionObjs.map(composition => 
                    <tr key={composition.composer + composition.opusNo} className="bg-stone-100 hover:bg-amber-300 hover:cursor-pointer lg:h-[3rem] lg:text-lg" onClick={() => {
                        setShowDetails(true)
                        setCurrentComposition(composition)
                        scrollToTop()
                    }}>
                        <td className={tdStyle}>{composition.composer.split(' ')[0]}</td>
                        <td className={tdStyle}>{composition.opusNo.replace('_', '.')}</td>
                        <td className='border border-stone-800 p-1 text-center'>{composition.title}</td>
                        <td className={tdStyle}>{composition.instrumentation.map((instrument, index) => index !== composition.instrumentation.length - 1 ? `${instrument}, ` : instrument).join('')}</td>
                        <td className={tdStyle}>${composition.price}</td>
                    </tr>)}
                </tbody>
            </table>
            <div className={subsectionDivStyle} onClick={() => setShowArrangements(!showArrangements)}>
                <p className={subsectionStyle}>Arrangements & Transcriptions</p>
                <p className={`mx-3 hover:cursor-pointer duration-300 ${showArrangements ? 'rotate-180' : ''}`}>&#9660;</p>
            </div>
        </main>
    )
}