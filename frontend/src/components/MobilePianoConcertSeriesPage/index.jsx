import { useState } from "react"
import { Link } from "react-router-dom"
import allAmerican1 from '../../assets/mpcs-all-american-1.jpg'
import ballroom1 from '../../assets/mpcs-dance-floor-1.jpg'
import ballroom2 from '../../assets/mpcs-dance-floor-2.jpg'
import carnival from '../../assets/mpcs-carnival.png'
import airEarth from '../../assets/mpcs-elements-air-earth.jpg'
import fireWater from '../../assets/mpcs-elements-fire-water.png'
import zookeeper from '../../assets/mpcs-zookeeper.png'
import ukraineResistance from '../../assets/mpcs-ukraine-resistance.png'
import impostorsThieves from '../../assets/mpcs-impostors-thieves.png'
import classics1 from '../../assets/mpcs-classics-1.jpg'
import classics2 from '../../assets/mpcs-classics-2.jpg'
import classics3 from '../../assets/mpcs-classics-3.jpg'
import valentine1 from '../../assets/mpcs-valentine-1.png'
import halloween1 from '../../assets/mpcs-halloween-1.png'
import lullaby from '../../assets/mpcs-lullaby.png'
import botanical from '../../assets/mpcs-botanical.png'
import opera1 from '../../assets/mpcs-opera-1.png'
import opera2 from '../../assets/mpcs-opera-2.png'
import ocean from '../../assets/mpcs-ocean.png'
import bach from '../../assets/mpcs-bach.jpeg'
import beethoven from '../../assets/mpcs-beethoven.jpeg'
import brahms from '../../assets/mpcs-brahms.jpeg'
import chopin from '../../assets/mpcs-chopin.jpeg'
import liszt from '../../assets/mpcs-liszt.jpeg'
import mozart from '../../assets/mpcs-mozart.jpeg'
import rachmaninov from '../../assets/mpcs-rachmaninov.jpeg'
import shostakovich from '../../assets/mpcs-shostakovich.jpeg'

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
        ['Selections from "West Side Story" (arr. Ahn-Benton)', 'Leonard Bernstein'],
        ['Rhapsody in Blue', 'George Gershwin'],
    ], 65, 150, allAmerican1],
    ['At the Carnival', [
        ['Alborada del gracioso', 'Maurice Ravel'],
        ['Scaramouche (arr. Ahn-Benton)', 'Darius Milhaud'],
        ['Petrushka', 'Igor Stravinsky'],
        ['Transcription of Khachaturian\'s "Sabre Dance"', 'Gyorgy Cziffra'],
        ['Scherzetto No. 3 "A Sad Clown\'s Day"', 'Jae Young Ahn-Benton'],
        ['Carnaval, Op. 9', 'Robert Schumann'],
    ], 75, 200, carnival],
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
    ['Beethoven Blast', [
        ['Sonata No. 8 in C minor "Pathétique", Op. 13', 'Ludwig van Beethoven'],
        ['Rondo a capriccio, Op. 129', 'Ludwig van Beethoven'],
        ['Für Elise', 'Ludwig van Beethoven'],
        ['6 Bagatelles, Op. 33', 'Ludwig van Beethoven'],
        ['Sonata No. 23 in F minor "Appassionata", Op. 57', 'Ludwig van Beethoven']
    ], 70, 125, beethoven],
    ['Botanical Garden', [
        ['Lilacs', 'Sergei Rachmaninov'],
        ['Pastorale', 'Alberto Ginastera'],
        ['Blumenlied, Op. 39', 'Gustav Lange'],
        ['Sonata No. 15 in D major "Pastoral"', 'Ludwig van Beethoven'],
        ['"Flower Song" from "Carmen" (arr. Ahn-Benton)', 'Georges Bizet'],
        ['"Pastorale" from "Années de Pélérinage"', 'Franz Liszt'],
        ['"Waltz of the Flowers" from "The Nutcracker"', 'Piotr Tchaikovsky'],
        ['Variations on "In the Garden" by Maykapar, Op. 96', 'Jae Young Ahn-Benton']
    ], 60, 125, botanical],
    ['Chopin Cart', [
        ['Polonaise in A-flat major, Op. 53 "Heroic"', 'Frederic Chopin'],
        ['2 Nocturnes, Op. 48', 'Frederic Chopin'],
        ['4 Mazurkas, Op. 17', 'Frederic Chopin'],
        ['Barcarolle, Op. 60', 'Frederic Chopin'],
        ['3 Waltzes, Op. 70', 'Frederic Chopin'],
        ['Scherzo No. 4 in E major, Op. 54', 'Frederic Chopin']
    ], 65, 125, chopin],
    ['The Classics 1', [
        ['Hungarian Rhapsody No. 2', 'Franz Liszt'],
        ['Salut d\'amour, Op. 12', 'Edward Elgar'],
        ['Humoresque in G-flat major, Op. 101, No. 7', 'Antonin Dvořák'],
        ['Clair de lune', 'Claude Debussy'],
        ['Prelude in C-sharp minor, Op. 3, No. 2', 'Sergei Rachmaninov'],
        ['The entertainer', 'Scott Joplin'],
        ['Canon in D (arr. Ahn-Benton)', 'Johann Pachelbel'],
        ['Fantaisie-Impromptu, Op. 66', 'Frederic Chopin'],
        ['"Spring" from "The Four Seasons" (arr. Ahn-Benton', 'Antonio Vivaldi'],
        ['Concert Paraphrase on Mozart\'s "Turkish March"', 'Arcadi Volodos']
    ], 65, 125, classics1],
    ['The Classics 2', [
        ['Radetzky March', 'Johann Strauss II'],
        ['Für Elise', 'Ludwig van Beethoven'],
        ['Liebestraum No. 3', 'Franz Liszt'],
        ['"June" from "The Seasons, Op. 37"', 'Piotr Tchaikovsky'],
        ['"Meditation" from "Thaïs" (arr. Ahn-Benton)', 'Jules Massenet'],
        ['Maple Leaf Rag', 'Scott Joplin'],
        ['Nocturne in E-flat major, Op. 9, No. 2', 'Frederic Chopin'],
        ['Rhapsody in Blue', 'George Gershwin'],
    ], 55, 100, classics2],
    ['The Classics 3', [
        ['Prelude and Fugue in C major, WTC 1', 'Johann Sebastian Bach'],
        ['Sonata in C minor, Op. 13 "Pathétique"', 'Ludwig van Beethoven'],
        ['Wiegenlied, Op. 49, No. 4', 'Johannes Brahms'],
        ['Ballade No. 1 in G minor, Op. 23', 'Frederic Chopin'],
        ['Blue Danube Waltz', 'Johann Strauss II'],
        ['"Winter" from "The Four Seasons" (arr. Ahn-Benton)', 'Antonio Vivaldi'],
        ['"Largo" from "New World Symphony" (arr. Juon)', 'Antonin Dvořák'],
        ['Transcription of Mendelssohn\'s "Wedding March"', 'Vladimir Horowitz'],
    ], 75, 150, classics3],
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
    ['Halloween Special', [
        ['Transcription of J.S. Bach\'s "Toccata and Fugue in D minor"', 'Ferruccio Busoni'],
        ['Sonata No. 14 in C-sharp minor "Moonlight"', 'Ludwig van Beethoven'],
        ['Selections from "Harry Potter" (arr. Ahn-Benton)', 'John Williams'],
        ['Theme from "Halloween" (arr. Ahn-Benton)', 'John Carpenter'],
        ['2 Scherzi, Op. 28 "Halloween Mischief"', 'Jae Young Ahn-Benton'],
        ['Nocturne in C-sharp minor, Op. 27, No. 1', 'Frederic Chopin'],
        ['Totentanz', 'Franz Liszt']
    ], 75, 175, halloween1],
    ['I\'ll Be Bach', [
        ['Passacaglia and Fugue (arr. d\'Albert)', 'Johann Sebastian Bach'],
        ['"Air" from "Orchestral Suite No. 3" (arr. Martucci)', 'Johann Sebastian Bach'],
        ['Chromatic Fantasy and Fugue', 'Johann Sebastian Bach'],
        ['Partita No. 2 in C minor', 'Johann Sebastian Bach'],
        ['Transcription of J.S. Bach\'s "Toccata and Fugue in D minor"', 'Ferruccio Busoni'],
    ], 60, 150, bach],
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
    ['Lisztomania', [
        ['Hungarian Rhapsody No. 2 in C-sharp minor', 'Franz Liszt'],
        ['Consolation No. 3 in D-flat major', 'Franz Liszt'],
        ['La Campanella', 'Franz Liszt'],
        ['Années de pélérinage, Italie - Venezia', 'Franz Liszt'],
        ['Liebestraum No. 3', 'Franz Liszt'],
        ['Sonata in B minor', 'Franz Liszt'],
    ], 75, 200, liszt],
    ['Lullaby Collection', [
        ['Consolation No. 3 in D-flat major', 'Franz Liszt'],
        ['"Adagio sostenuto" from "Sonata No. 14 in C-sharp Minor"', 'Ludwig van Beethoven'],
        ['Berceuse, Op. 57', 'Frederic Chopin'],
        ['Clair de lune', 'Claude Debussy'],
        ['Sonata No. 87 in B minor', 'Domenico Scarlatti'],
        ['Träumerei', 'Robert Schumann'],
        ['Wiegenlied, Op. 49, No. 4', 'Johannes Brahms'],
        ['"Adagio" from "Sonata No. 1 in F minor"', 'Ludwig van Beethoven'],
        ['Nocturne in E-flat major, Op. 9, No. 2', 'Frederic Chopin'],
        ['Rêverie', 'Claude Debussy'],
        ['Solveigs Sang', 'Edvard Grieg'],
        ['Prelude No. 2', 'George Gershwin'],
        ['"Air" from "Orchestra Suite No. 3" (arr. Martucci)', 'Johann Sebastian Bach'],
        ['Triste', 'Alberto Ginastera'],
        ['"Prelude" from "Prelude and Fugue in C major, WTC 1"', 'Johann Sebastian Bach'],
        ['Chanson triste', 'Vasily Kalinnikov'],
        ['Vocalise, Op. 34, No. 14 (arr. Ahn-Benton)', 'Sergei Rachmaninov'],
        ['Salut d\'amour', 'Edward Elgar'],
    ], 75, 100, lullaby],
    ['Mozart Mastermind', [
        ['Overture from "Don Giovanni"', 'Wolfgang Amadeus Mozart'],
        ['Piano Sonata No. 12 in F major', 'Wolfgang Amadeus Mozart'],
        ['Adagio in B minor, K. 540', 'Wolfgang Amadeus Mozart'],
        ['12 Variations on "Ah vous dirai-je, Maman"', 'Wolfgang Amadeus Mozart'],
        ['Piano Sonata No. 8 in A minor', 'Wolfgang Amadeus Mozart'],
        ['Concert Paraphrase on Mozart\'s "Turkish March"', 'Arcadi Volodos'],
    ], 75, 150, mozart],
    ['Ocean Waves', [
        ['Silvery Waves', 'Addison Wyman'],
        ['Etude-Tableau in A minor, Op. 39, No. 2', 'Sergei Rachmaninov'],
        ['Une barque sur l\'ocean', 'Maurice Ravel'],
        ['Etude in C minor, Op. 25, No. 12 "Ocean"', 'Frederic Chopin'],
        ['"Lamentation" from "Sonata No. 7 in C-sharp minor, Op. 79"', 'Jae Young Ahn-Benton'],
        ['La mer (arr. Garban)', 'Claude Debussy'],
    ], 65, 125, ocean],
    ['The Opera House 1', [
        ['Overture from "Le nozze di Figaro"', 'Wolfgang Amadeus Mozart'],
        ['Isoldes Liebestod (arr. Liszt)', 'Richard Wagner'],
        ['Carmen Variations', 'Vladimir Horowitz'],
        ['Overture from "La forza del destino"', 'Giuseppe Verdi'],
        ['Selections from the Songbook', 'George Gershwin'],
        ['Vocalise, Op. 34, No. 14 (arr. Ahn-Benton)', 'Sergei Rachmaninov'],
        ['Fantasy on Themes from Mozart\'s "Le nozze di Figaro"', 'Franz Liszt'],
    ], 60, 150, opera1],
    ['The Opera House 2', [
        ['Overture from "Guillaume Tell" (arr. Liszt)', 'Gioachino Rossini'],
        ['Solveigs Sang', 'Edvard Grieg'],
        ['Variations on "Là ci darem la mano"', 'Frederic Chopin'],
        ['"Intermezzo" from "Cavalleria Rusticana"', 'Pietro Mascagni'],
        ['Overture from "Taras Bulba"', 'Mykola Lysenko'],
        ['Selections from "Carmen"', 'Georges Bizet'],
        ['Erlkönig (arr. Liszt)', 'Franz Schubert'],
        ['Rigoletto-Paraphrase', 'Franz Liszt'],
    ], 65, 150, opera2],
    ['Raisin Brahms', [
        ['Sonata No. 1 in C major, Op. 1', 'Johannes Brahms'],
        ['Intermezzo, Op. 118, No. 2', 'Johannes Brahms'],
        ['Paganini Variations, Op. 35, No. 1', 'Johannes Brahms'],
        ['Wiegenlied, Op. 49, No. 4', 'Johannes Brahms'],
        ['Hungarian Dance No. 5', 'Johannes Brahms'],
        ['Variations on a Theme by Händel, Op. 24', 'Johannes Brahms'],
    ], 75, 175, brahms],
    ['Rockin\' with Rachmaninov', [
        ['Etude-Tableau in C minor, Op. 39, No. 1', 'Sergei Rachmaninov'],
        ['Etude-Tableau in E-flat minor, Op. 39, No. 5', 'Sergei Rachmaninov'],
        ['Etude-Tableau in A minor, Op. 39, No. 6', 'Sergei Rachmaninov'],
        ['Elegie in E-flat minor, Op. 3, No. 1', 'Sergei Rachmaninov'],
        ['Moment musical in B minor, Op. 16, No. 3', 'Sergei Rachmaninov'],
        ['Moment musical in E minor, Op. 16, No. 4', 'Sergei Rachmaninov'],
        ['Prelude in G minor, Op. 23, No. 5', 'Sergei Rachmaninov'],
        ['Prelude in B minor, Op. 32, No. 10', 'Sergei Rachmaninov'],
        ['Etude-Tableau in E-flat minor, Op. 33, No. 5', 'Sergei Rachmaninov'],
        ['Vocalise, Op. 34, No. 14 (arr. Ahn-Benton)', 'Sergei Rachmaninov'],
        ['Sonata No. 2 in B-flat minor, Op. 36', 'Sergei Rachmaninov'],
    ], 75, 200, rachmaninov],
    ['Shadow of Shostakovich', [
        ['Prelude and Fugue in D minor, Op. 87, No. 24', 'Dmitri Shostakovich'],
        ['3 Fantastic Dances, Op. 5', 'Dmitri Shostakovich'],
        ['Piano Sonata No. 2, Op. 61', 'Dmitri Shostakovich'],
        ['24 Preludes, Op. 34', 'Dmitri Shostakovich'],
        ['"Allegro non troppo" from "Symphony No. 5, Op. 47"', 'Dmitri Shostakovich'],
    ], 80, 200, shostakovich],
    ['Ukrainian Resistance', [
        ['Overture from "Taras Bulba"', 'Mykola Lysenko'],
        ['Kitsch-Musyka', 'Valentin Silvestrov'],
        ['2 Preludes, Op. 7', 'Lev Revutsky'],
        ['Theme and Variations, Op. 99 "Impressions of Ukraine"', 'Jae Young Ahn-Benton'],
        ['Burleska', 'Myroslav Skoryk'],
        ['5 Preludes', 'Boris Lyatoshynsky'],
        ['Sonata No. 2 in C-sharp minor', 'Viktor Kosenko',]
    ], 75, 175, ukraineResistance],
    ['Valentine\'s Day Special', [
        ['A Letter to You, Op. 64, No. 2', 'Jae Young Ahn-Benton'],
        ['"Pas de deux" from "The Nutcracker"', 'Piotr Tchaikovsky'],
        ['Ballade No. 3 in A-flat major', 'Frederic Chopin'],
        ['Can You Feel the Love Tonight (arr. Ahn-Benton)', 'Elton John'],
        ['Liebestraum No. 3', 'Franz Liszt'],
        ['Love Me Tender (arr. Ahn-Benton)', 'Elvis Presley'],
        ['"Intermezzo" from "Cavalleria Rusticana"', 'Pietro Mascagni'],
        ['Transcription of Mendelssohn\'s "Wedding March"', 'Vladimir Horowitz'],
        ['Isoldes Liebestod (arr. Liszt)', 'Richard Wagner'],
        ['Reminiscence, Op. 87', 'Jae Young Ahn-Benton'],
    ], 60, 125, valentine1],
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
        ['The flight of the bumblebee (arr. Cziffra)', 'Nikolai Rimsky-Korsakov'],
    ], 60, 125, zookeeper],
]

const concertObjs = availableConcerts.map(concert => new Concert ('Ahn-Benton, Jae', concert[0], concert[1], concert[2], concert[3], concert[4]))
let tdStyle = 'border border-stone-200 text-center py-1'
let btnStyle = 'border border-stone-200 rounded-xl p-2 m-3 hover:bg-amber-400 hover:text-stone-800'

export default function MobilePianoConcertSeriesPage({ isMenuOpen }) {
    const [showDetails, setShowDetails] = useState(false)
    const [currentConcert, setCurrentConcert] = useState({})
    return (
        <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} relative font-poppins`}>
            {currentConcert.pianist
            ? <div className={`${showDetails ? 'z-50' : 'hidden'} absolute w-3/4 h-[75%] left-[12.5%] border border-stone-200 flex flex-col justify-center items-center bg-stone-700 rounded-3xl overflow-y-auto py-6`}>
                <p className="text-3xl my-6 font-bold text-center">{currentConcert.title}</p>
                <p className="italic my-2">presented by</p>
                <p>{`${currentConcert.pianist.split(', ')[1]} ${currentConcert.pianist.split(', ')[0]}`}, piano</p>
                <img className="border border-stone-200 rounded-xl min-h-[60vh] h-1/2 w-1/2 my-5" src={currentConcert.poster} alt='poster'/>
                <div className="border border-stone-200 rounded-xl w-11/12 bg-stone-500">
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
            <table className={`border border-stone-200 w-11/12 lg:w-2/3 mx-auto mb-12 table-fixed my-12`}>
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