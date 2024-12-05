import { useState } from "react"
import { Link } from "react-router-dom"
import { sendEmail } from "../../../utils/backend"
import allAmerican1 from '../../assets/mpcs-all-american-1.jpg'
import allAmerican2 from '../../assets/mpcs-all-american-2.png'
import ballroom1 from '../../assets/mpcs-dance-floor-1.jpg'
import ballroom2 from '../../assets/mpcs-dance-floor-2.jpg'
import ballroom3 from '../../assets/mpcs-ballroom-3.jpg'
import carnival from '../../assets/mpcs-carnival.png'
import airEarth from '../../assets/mpcs-elements-air-earth.jpg'
import fireWater from '../../assets/mpcs-elements-fire-water.png'
import zookeeper1 from '../../assets/mpcs-zookeeper.png'
import zookeeper2 from '../../assets/mpcs-zookeeper-2.png'
import ukraineResistance1 from '../../assets/mpcs-ukraine-resistance.png'
import ukraineResistance2 from '../../assets/mpcs-ukrainian-resistance-2.png'
import impostorsThieves from '../../assets/mpcs-impostors-thieves.png'
import classics1 from '../../assets/mpcs-classics-1.jpg'
import classics2 from '../../assets/mpcs-classics-2.jpg'
import classics3 from '../../assets/mpcs-classics-3.jpg'
import valentine1 from '../../assets/mpcs-valentine-1.png'
import valentine2 from '../../assets/mpcs-valentine-2.png'
import valentine3 from '../../assets/mpcs-valentine-3.png'
import halloween1 from '../../assets/mpcs-halloween-1.png'
import halloween2 from '../../assets/mpcs-halloween-2.png'
import lullaby from '../../assets/mpcs-lullaby.png'
import botanical from '../../assets/mpcs-botanical.png'
import opera1 from '../../assets/mpcs-opera-1.png'
import opera2 from '../../assets/mpcs-opera-2.png'
import ocean from '../../assets/mpcs-ocean.png'
import bachPortrait from '../../assets/mpcs-bach.jpeg'
import beethovenPortrait from '../../assets/mpcs-beethoven.jpeg'
import brahmsPortrait from '../../assets/mpcs-brahms.jpeg'
import chopinPortrait from '../../assets/mpcs-chopin.jpeg'
import lisztPortrait from '../../assets/mpcs-liszt.jpeg'
import mozartPortrait from '../../assets/mpcs-mozart.jpeg'
import rachmaninovPortrait from '../../assets/mpcs-rachmaninov.jpeg'
import prokofievPortrait from '../../assets/mpcs-prokofiev.jpeg'
import shostakovichPortrait from '../../assets/mpcs-shostakovich.jpeg'
import remembrance from '../../assets/mpcs-remembrance.jpg'
import traveling from '../../assets/mpcs-traveling.png'
import march from '../../assets/mpcs-march.png'
import meditation from '../../assets/mpcs-meditation.png'
import tragedy from '../../assets/mpcs-tragedy.png'
import womenPower from '../../assets/mpcs-women-power.png'
import kanto1 from '../../assets/mpcs-pokemon-kanto.jpeg'
import kanto2 from '../../assets/mpcs-pokemon-kanto-2.jpeg'
import heroesVillains from '../../assets/mpcs-heroes-villains.png'
import goodbye from '../../assets/mpcs-goodbye.png'
import winter from '../../assets/mpcs-winter.png'

class Concert {
    constructor(pianist, title, description, program = [], duration, basePrice, poster) {
        this.pianist = pianist
        this.title = title
        this.description = description
        this.program = program
        this.duration = duration
        this.basePrice = basePrice
        this.poster = poster
    } // add suggested atmosphere (snacks, drinks, lighting, attire, etc)
}

const ahnbenton = 'Jae Young Ahn-Benton'
const babadjanian = 'Arno Babadjanian'
const bachCPE = 'Carl Philipp Emanuel Bach'
const bachJC = 'Johann Christian Bach'
const bachJS = 'Johann Sebastian Bach'
const badarzewska = 'Tekla Badarzewska-Baranowska'
const balakirev = 'Mily Balakirev'
const barber = 'Samuel Barber'
const bartok = 'Béla Bartók'
const beach = 'Amy Beach'
const beethoven = 'Ludwig van Beethoven'
const bellini = 'Vincenzo Bellini'
const bernstein = 'Leonard Bernstein'
const bizet = 'Georges Bizet'
const bolcom = 'William Bolcom'
const bonis = 'Mel Bonis'
const bortkevych = 'Sergei Bortkevych'
const boulanger = 'Lili Boulanger'
const bozza = 'Eugene Bozza'
const brahms = 'Johannes Brahms'
const bruch = 'Max Bruch'
const busoni = 'Ferruccio Busoni'
const carpenter = 'John Carpenter'
const casterede = 'Jacques Castérède'
const chaminade = 'Cécile Chaminade'
const chopin = 'Frédéric Chopin'
const clementi = 'Muzio Clementi'
const crumb = 'George Crumb'
const cziffra = 'György Cziffra'
const davidov = 'Karl Davidov'
const davis = 'Katherine Kannicott Davis'
const debussy = 'Claude Debussy'
const dussek = 'Jan Ladislav Dussek'
const dutilleux = 'Henri Dutilleux'
const dvorak = 'Antonin Dvořák'
const elfman = 'Danny Elfman'
const elgar = 'Edward Elgar'
const fain = 'Sammy Fain'
const falla = 'Manuel de Falla'
const faure = 'Gabriel Fauré'
const franck = 'César Franck'
const gershwin = 'George Gershwin'
const ginastera = 'Alberto Ginastera'
const glinka = 'Mikhail Glinka'
const granados = 'Enrique Granados'
const grieg = 'Edvard Grieg'
const hahn = 'Reynaldo Hahn'
const haydn = 'Franz Joseph Haydn'
const heggie = 'Jake Heggie'
const hindemith = 'Paul Hindemith'
const hogan = 'Moses Hogan'
const holst = 'Gustav Holst'
const horowitz = 'Vladimir Horowitz'
const hummel = 'Johann Nepomuk Hummel'
const humperdinck = 'Engelbert Humperdinck'
const john = 'Elton John'
const johnson = 'Hall Johnson'
const jonasson = 'Johan Emanuel Jonasson'
const joplin = 'Scott Joplin'
const kabalevsky = 'Dmitri Kabalevsky'
const kalinnikov = 'Vasily Kalinnikov'
const kapustin = 'Nikolai Kapustin'
const key = 'Francis Scott Key'
const kosenko = 'Viktor Kosenko'
const kosma = 'Joseph Kosma'
const kreisler = 'Fritz Kreisler'
const lange = 'Gustav Lange'
const lecuona = 'Ernesto Lecuona'
const ligeti = 'György Ligeti'
const liszt = 'Franz Liszt'
const lopezes = 'Kristen Anderson-Lopez & Robert Lopez'
const lyatoshynsky = 'Boris Lyatoshynsky'
const lysenko = 'Mykola Lysenko'
const marks = 'Johnny Marks'
const mascagni = 'Pietro Mascagni'
const massenet = 'Jules Massenet'
const masuda = 'Junichi Masuda'
const mendelssohnFa = 'Fanny Mendelssohn'
const mendelssohnFe = 'Felix Mendelssohn'
const menken = 'Alan Menken'
const milhaud = 'Darius Milhaud'
const moore = 'Undine Smith Moore'
const mozart = 'Wolfgang Amadeus Mozart'
const mussorgsky = 'Modest Mussorgsky'
const pachelbel = 'Johann Pachelbel'
const paganini = 'Niccolo Paganini'
const piazzolla = 'Astor Piazzolla'
const presley = 'Elvis Presley'
const price = 'Florence Price'
const poulenc = 'Francis Poulenc'
const prokofiev = 'Sergei Prokofiev'
const puccini = 'Giacomo Puccini'
const rachmaninov = 'Sergei Rachmaninov'
const radcliffe = 'Roger Radcliffe'
const ravel = 'Maurice Ravel'
const revutsky = 'Lev Revutsky'
const rimskyKorsakov = 'Nikolai Rimsky-Korsakov'
const rollins = 'Walter "Jack" Rollins'
const rossini = 'Gioachino Rossini'
const rzewski = 'Frederic Rzewski'
const saintSaens = 'Camille Saint-Saëns'
const sarasate = 'Pablo de Sarasate'
const scarlatti = 'Domenico Scarlatti'
const schubert = 'Franz Schubert'
const schumannC = 'Clara Schumann'
const schumannR = 'Robert Schumann'
const scriabin = 'Aleksandr Scriabin'
const shchedrin = 'Rodion Shchedrin'
const shostakovich = 'Dmitri Shostakovich'
const sibelius = 'Jean Sibelius'
const silvestrov = 'Valentin Silvestrov'
const skoryk = 'Myroslav Skoryk'
const still = 'Willam Grant Still'
const straussJ = 'Johann Strauss II'
const straussR = 'Richard Strauss'
const stravinsky = 'Igor Stravinsky'
const tchaikovsky = 'Piotr Tchaikovsky'
const verdi = 'Giuseppe Verdi'
const villaLobos = 'Heitor Villa-Lobos'
const vivaldi = 'Antonio Vivaldi'
const volodos = 'Arcadi Volodos'
const wagner = 'Richard Wagner'
const walton = 'William Walton'
const webber = 'Andrew Lloyd Webber'
const weber = 'Carl Maria von Weber'
const wieniawski = 'Henryk Wieniawski'
const williams = 'John Williams'
const williamsR = 'Ralph Vaughan Williams'
const wolf = 'Hugo Wolf'
const wyman = 'Addison Wyman'

const adiosNonino = ['Adios nonino (arr. Ahn-Benton)', piazzolla]
const ahnbenton1 = ['Minuetto e Trio in E major, Op. 1', ahnbenton]
const ahnbenton3 = ['Bagatelle in F major, Op. 3 "Children\'s March"', ahnbenton]
const ahnbenton5 = ['Sonatina No. 1 in C major, Op. 5 "The Weather"', ahnbenton]
const ahnbenton6_1 = ['Prelude in C major, Op. 6, No. 1 "Nostalgia"', ahnbenton]
const ahnbenton6_3 = ['Prelude in C-sharp minor, Op. 6, No. 3 "Dance of the Barbarians"', ahnbenton]
const ahnbenton6_4 = ['Prelude in C minor, Op. 6, No. 4 "Sorrow"', ahnbenton]
const ahnbenton7 = ['Scherzetto No. 3 "A Sad Clown\'s Day"', ahnbenton]
const ahnbenton10_3 = ['Prelude in C minor, Op. 10, No. 3 "Funeral March"', ahnbenton]
const ahnbenton11_1 = ['Sonatina No. 2 in C minor', ahnbenton]
const ahnbenton11_2 = ['Sonatina No. 3 in G major "The Holidays"', ahnbenton]
const ahnbenton11_2_3 = ['"Ghost of Halloween" from "Sonatina in G major, Op. 11, No. 2"', ahnbenton]
const ahnbenton11_2_4 = ['"Christmas Carol" from "Sonatina in G major, Op. 11, No. 2"', ahnbenton]
const ahnbenton13 = ['Scherzetto No. 5 in C minor, Op. 13 "Playful Ghosts"', ahnbenton]
const ahnbenton15_1 = ['Etude in D-flat major, Op. 15, No. 1 "Water"', ahnbenton]
const ahnbenton15_2 = ['Etude in F-sharp minor, Op. 15, No. 2 "Earth"', ahnbenton]
const ahnbenton15_3 = ['Etude in G minor, Op. 15, No. 3 "Fire"', ahnbenton]
const ahnbenton15_4 = ['Etude in F-sharp major, Op. 15, No. 4 "Air"', ahnbenton]
const ahnbenton28 = ['2 Scherzi, Op. 28 "Halloween Mischief"', ahnbenton]
const ahnbenton29 = ['2 Toccate, Op. 29', ahnbenton]
const ahnbenton30 = ['2 Rhapsodies, Op. 30', ahnbenton]
const ahnbenton32b = ['Variations on "Happy Birthday" (Version 2)', ahnbenton]
const ahnbenton40 = ['3 Grotesque Dances, Op. 40', ahnbenton]
const ahnbenton50 = ['Toccata e Fantasia No. 2 in A minor, Op. 50', ahnbenton]
const ahnbenton54 = ['24 Preludes for Young Professionals, Op. 54', ahnbenton]
const ahnbenton56 = ['"Ragtime After Gershwin"', ahnbenton]
const ahnbenton60 = ['24 Preludes for Advanced Students, Op. 60', ahnbenton]
const ahnbenton64_2 = ['A Letter to You, Op. 64, No. 2', ahnbenton]
const ahnbenton76 = ['Capriccio in D minor, Op. 76', ahnbenton]
const ahnbenton77 = ['Dream Variations, Op. 77', ahnbenton]
const ahnbenton79 = ['Sonata No. 7 in C-sharp minor, Op. 79 "Imperialism"', ahnbenton]
const ahnbenton79_4 = ['"Lamentation" from "Sonata No. 7 in C-sharp minor, Op. 79"', ahnbenton]
const ahnbenton85 = ['Elegy in C-sharp minor (piano LH), Op. 85', ahnbenton]
const ahnbenton87 = ['Reminiscence, Op. 87', ahnbenton]
const ahnbenton91 = ['Variations on "The Haunted Mouse" by Faber, Op. 91', ahnbenton]
const ahnbenton96 = ['Variations on "In the Garden" by Maykapar, Op. 96', ahnbenton]
const ahnbenton99 = ['Theme and Variations, Op. 99 "Impressions of Ukraine"', ahnbenton]
const ahnbenton101 = ['Variations on "Shchedryk" by Leontovych', ahnbenton]
const americanInParis = ['An American in Paris', gershwin]
const americanPreludes2 = ['American Prelude No. 2 "Triste"', ginastera]
const americanPreludes3 = ['American Prelude No. 3 "Danza criolla"', ginastera]
const americanPreludes6 = ['American Prelude No. 6 "Homenaje a Roberto Garcia Morillo"', ginastera]
const americanPreludes8 = ['American Prelude No. 8 "Homenaje a Juan Jose Castro"', ginastera]
const americanPreludes9 = ['American Prelude No. 9 "Homenaje a Aaron Copland"', ginastera]
const americanPreludes10 = ['American Prelude No. 10 "Pastorale"', ginastera]
const annaKarenina = ['"Prologue and Horse Race" from "Anna Karenina"', shchedrin]
const arabianDance = ['Arabian Dance from "The Nutcraker"', tchaikovsky]
const aveMaria = ['Ave Maria (arr. Liszt)', 'Franz Schubert']
const aWholeNewWorld = ['"A Whole New World" from "Aladdin" (arr. Ahn-Benton)', menken]
const babbino = ['"O mio babbino caro" from "Gianni Schicchi" (arr. Ahn-Benton)', puccini]
const babadjanianElegy = ['Elegy in G minor', babadjanian]
const bachAir = ['"Air" from "Orchestral Suite No. 3" (arr. Martucci)', bachJS]
const bachChaconne = ['Transcription of J.S. Bach\'s "Chaconne"', busoni]
const bachMinuet = ['Minuet in G major', bachJS]
const bachPartita2 = ['Partita No. 2 in C minor', bachJS]
const bachPartita6 = ['Partita No. 6 in E minor', bachJS]
const bachToccata = ['Transcription of J.S. Bach\'s "Toccata and Fugue in D minor"', busoni]
const bachWTC1_1_1 = ['"Prelude" from "Prelude and Fugue in C major, WTC 1"', bachJS]
const bachWTC1_1 = ['Prelude and Fugue in C major, WTC 1', bachJS]
const balkanVariations = ['Variations on a Balkan Theme, Op. 60', beach]
const batmanSelections = ['Selections from "Batman Suite"', elfman]
const beachBallade = ['Ballade, Op. 6', beach]
const beautyAndTheBeast = ['Beauty and the Beast', menken]
const beethovenBagatelles33 = ['6 Bagatelles, Op. 33', beethoven]
const beethovenMinuet = ['Minuet in G major', beethoven]
const beethovenRondo = ['Rondo a capriccio, Op. 129', beethoven]
const beethovenSonata1 = ['Sonata No. 1 in F minor, Op. 2, No. 1', beethoven]
const beethovenSonata1_2 = ['"Adagio" from "Sonata No. 1 in F minor"', beethoven]
const beethovenSonata1_4 = ['"Prestissimo" from "Sonata No. 1 in F minor"', beethoven]
const beethovenSonata2 = ['Sonata No. 2 in A major, Op. 2, No. 2', beethoven]
const beethovenSonata3 = ['Sonata No. 3 in C major, Op. 2, No. 3', beethoven]
const beethovenSonata4 = ['Sonata No. 4 in E-flat major, Op. 7 "Grand Sonata"', beethoven]
const beethovenSonata5 = ['Sonata No. 5 in C minor, Op. 10, No. 1', beethoven]
const beethovenSonata5_3 = ['"Finale" from "Sonata No. 5 in C minor, Op. 10, No. 1', beethoven]
const beethovenSonata6 = ['Sonata No. 6 in F major, Op. 10, No. 2', beethoven]
const beethovenSonata7 = ['Sonata No. 7 in D major, Op. 10, No. 3', beethoven]
const beethovenSonata7_2 = ['"Largo e mesto" from "Sonata No. 7 in D major, Op. 10, No. 3"', beethoven]
const beethovenSonata8 = ['Sonata No. 8 in C minor "Pathétique", Op. 13', beethoven]
const beethovenSonata11 = ['Sonata No. 11 in B-flat major, Op. 22', beethoven]
const beethovenSonata12_3 = ['"Maestoso andante" from "Sonata No. 12 in A-flat major"', beethoven]
const beethovenSonata14 = ['Sonata No. 14 in C-sharp minor "Moonlight"', beethoven]
const beethovenSonata14_1 = ['"Adagio sostenuto" from "Sonata No. 14 in C-sharp Minor"', beethoven]
const beethovenSonata15 = ['Sonata No. 15 in D major "Pastoral"', beethoven]
const beethovenSonata17 = ['Sonata No. 17 in D minor "Tempest"', beethoven]
const beethovenSonata17_1 = ['"Allegro" from "Sonata No. 17 in D minor "Tempest"', beethoven]
const beethovenSonata21 = ['Sonata No. 21 in C major "Waldstein"', beethoven]
const beethovenSonata23 = ['Sonata No. 23 in F minor "Appassionata", Op. 57', beethoven]
const beethovenSonata23_3 = ['"Allegro ma non troppo" from "Sonata No. 23 in F minor "Appassionata", Op. 57"', beethoven]
const beethovenSonata25 = ['Sonata No. 25 in G major, Op. 79 "Cuckoo"', beethoven]
const beethovenSonata26 = ['Sonata No. 26 in E-flat major, Op. 81 "Les adieux"', beethoven]
const beethovenSonata27 = ['Sonata No. 27 in E minor, Op. 90', beethoven]
const beethovenSonata28 = ['Sonata No. 28 in A major, Op. 101', beethoven]
const beethovenSonata29 = ['Sonata No. 29 in B-flat major, Op. 106 "Hammerklavier"', beethoven]
const beethovenSonata30 = ['Sonata No. 30 in E major, Op. 109', beethoven]
const beethovenSonata32 = ['Sonata No. 32 in C minor, Op. 111', beethoven]
const beethovenSymphony3 = ['Symphony No. 3 in E-flat major "Eroica" (arr. Ahn-Benton)', beethoven]
const beethovenSymphony5 = ['Symphony No. 5 in C minor (arr. Ahn-Benton)', beethoven]
const beethovenTurkish = ['Turkish March', beethoven]
const bePrepared = ['"Be Prepared" from "The Lion King"', john]
const blueDanube = ['Blue Danube Waltz', straussJ]
const blumenlied = ['Blumenlied, Op. 39', lange]
const bonisBarcarolle = ['Barcarolle, Op. 71', bonis]
const bortkevychMorceaux = ['3 Morceaux, Op. 24', bortkevych]
const boulangerMorceaux = ['3 Morceaux', boulanger]
const bozzaAria = ['Aria (arr. Ahn-Benton)', bozza]
const brahmsHandel = ['Variations on a Theme by Händel, Op. 24', brahms]
const brahmsIntermezzo118_2 = ['Intermezzo, Op. 118, No. 2', brahms]
const brahmsLullaby = ['Wiegenlied, Op. 49, No. 4', brahms]
const brahmsPaganini1 = ['Paganini Variations, Op. 35, No. 1', brahms]
const brahmsPaganini2 = ['Paganini Variations, Op. 35, No. 2', brahms]
const brahmsRhapsody1 = ['Rhapsody No. 1 in B minor, Op. 79, No. 1', brahms]
const brahmsRhapsody2 = ['Rhapsody No. 2 in G minor, Op. 79, No. 2', brahms]
const brahmsSonata1 = ['Sonata No. 1 in C major, Op. 1', brahms]
const brahmsSonata1_3 = ['"Scherzo" from "Sonata No. 1 in C major, Op. 1', brahms]
const brahmsSonata3 = ['Sonata No. 3 in F minor, Op. 5', brahms]
const bridalMarch = ['Bridal March (arr. Liszt)', wagner]
const bumblebee = ['The flight of the bumblebee (arr. Cziffra)', rimskyKorsakov]
const canon = ['Canon in D (arr. Ahn-Benton)', pachelbel]
const cantHelpFallingInLove = ['"Can\'t help falling in love" (arr. Ahn-Benton)', presley]
const canYouFeelTheLoveTonight = ['Can You Feel the Love Tonight (arr. Ahn-Benton)', john]
const carmenVariations = ['Carmen variations', horowitz]
const carmenSelections = ['Selections from "Carmen"', bizet]
const carnaval = ['Carnaval, Op. 9', schumannR]
const carnavalDesAnimaux = ['Le carnaval des animaux', saintSaens]
const chaminadeBallade = ['Ballade in A minor, Op. 86', chaminade]
const chaminadePiecesHumoristiques = ['6 Pièces humoristiques, Op. 87', chaminade]
const chansonTriste = ['Chanson triste', kalinnikov]
const childrensCorner1 = ['Doctor Gradus ad Parnassum', debussy]
const childrensCorner4 = ['The Snow is Dancing', debussy]
const chineseDance = ['Chinese Dance from "The Nutcraker"', tchaikovsky]
const chopinBallade1 = ['Ballade No. 1 in G minor, Op. 23', chopin]
const chopinBallade2 = ['Ballade No. 2 in F major, Op. 38', chopin]
const chopinBallade3 = ['Ballade No. 3 in A-flat major, Op. 47', chopin]
const chopinBallade4 = ['Ballade No. 4 in F minor, Op. 52', chopin]
const chopinBarcarolle = ['Barcarolle, Op. 60', chopin]
const chopinBerceuse = ['Berceuse, Op. 57', chopin]
const chopinFuneral = ['"Funeral March" from "Sonata No. 2 in B-flat minor, Op. 35"', chopin]
const chopinGiovanni = ['Variations on "Là ci darem la mano"', chopin]
const chopinEtude10_1 = ['Etude in C major, Op. 10, No. 1 "Waterfall"', chopin]
const chopinEtude10_3 = ['Etude in E major, Op. 10, No. 3 "Farewell"', chopin]
const chopinEtude10_4 = ['Etude in C-sharp minor, Op. 10, No. 4', chopin]
const chopinEtude10_5 = ['Etude in G-flat major, Op. 10, No. 5 "Black Keys"', chopin]
const chopinEtude10_12 = ['Etude in C minor, Op. 10, No. 12 "Revolutionary"', chopin]
const chopinEtude25_1 = ['Etude in A-flat major, Op. 25, No. 1 "Aeolian Harp"', chopin]
const chopinEtude25_2 = ['Etude in F minor, Op. 25, No. 2 "Bees"', chopin]
const chopinEtude25_3 = ['Etude in F major, Op. 25, No. 3 "Horsemen"', chopin]
const chopinEtude25_7 = ['Etude in C-sharp minor, Op. 25, No. 7 "Cello"', chopin]
const chopinEtude25_9 = ['Etude in G-flat major, Op. 25, No. 9 "Butterfly"', chopin]
const chopinEtude25_10 = ['Etude in B minor, Op. 25, No. 10', chopin]
const chopinEtude25_11 = ['Etude in A minor, Op. 25, No. 11 "Winter Wind"', chopin]
const chopinEtude25_12 = ['Etude in C minor, Op. 25, No. 12 "Ocean"', chopin]
const chopinMazurka6_1 = ['Mazurka in F-sharp minor, Op. 6, No. 1', chopin]
const chopinMazurka7_1 = ['Mazurka in B-flat major, Op. 7, No. 1', chopin]
const chopinMazurka7_3 = ['Mazurka in F minor, Op. 7, No. 3', chopin]
const chopinMazurka17_1 = ['Mazurka in B-flat major, Op. 17, No. 1', chopin]
const chopinMazurka17_2 = ['Mazurka in E minor, Op. 17, No. 2', chopin]
const chopinMazurka17_3 = ['Mazurka in A-flat major, Op. 17, No. 3', chopin]
const chopinMazurka17_4 = ['Mazurka in A minor, Op. 17, No. 4', chopin]
const chopinMazurkas17 = ['4 Mazurkas, Op. 17', chopin]
const chopinMazurka24_1 = ['Mazurka in G minor, Op. 24, No. 1', chopin]
const chopinMazurka24_4 = ['Mazurka in B-flat minor, Op. 24, No. 4', chopin]
const chopinMazurka30_3 = ['Mazurka in D-flat major, Op. 30, No. 3', chopin]
const chopinMazurka30_4 = ['Mazurka in C-sharp minor, Op. 30, No. 4', chopin]
const chopinMazurka33_2 = ['Mazurka in D major, Op. 33, No. 2', chopin]
const chopinMazurka33_4 = ['Mazurka in B minor, Op. 33, No. 4', chopin]
const chopinMazurka50_1 = ['Mazurka in G major, Op. 50, No. 1', chopin]
const chopinMazurka50_3 = ['Mazurka in C-sharp minor, Op. 50, No. 3', chopin]
const chopinMazurka56_1 = ['Mazurka in B major, Op. 56, No. 1', chopin]
const chopinMazurka59_3 = ['Mazurka in F-sharp minor, Op. 59, No. 3', chopin]
const chopinMazurka63_1 = ['Mazurka in B major, Op. 63, No. 1', chopin]
const chopinMazurka67_2 = ['Mazurka in G minor, Op. 67, No. 2', chopin]
const chopinMazurka67_3 = ['Mazurka in C major, Op. 67, No. 3', chopin]
const chopinMazurka68_2 = ['Mazurka in A minor, Op. 68, No. 2', chopin]
const chopinNocturne9_2 = ['Nocturne in E-flat major, Op. 9, No. 2', chopin]
const chopinNocturne15_1 = ['Nocturne in F major, Op. 15, No. 1', chopin]
const chopinNocturne15_2 = ['Nocturne in F-sharp major, Op. 15, No. 2', chopin]
const chopinNocturne27_1 = ['Nocturne in C-sharp minor, Op. 27, No. 1', chopin]
const chopinNocturne27_2 = ['Nocturne in D-flat major, Op. 27, No. 2', chopin]
const chopinNocturne37_1 = ['Nocturne in G minor, Op. 37, No. 1', chopin]
const chopinNocturnes48 = ['2 Nocturnes, Op. 48', chopin]
const chopinNocturne48_1 = ['Nocturne in C minor, Op. 48, No. 1', chopin]
const chopinNocturne48_2 = ['Nocturne in F-sharp minor, Op. 48, No. 2', chopin]
const chopinNocturne55_1 = ['Nocturne in F minor, Op. 55, No. 1', chopin]
const chopinNocturne62_1 = ['Nocturne in B major, Op. 62, No. 1', chopin]
const chopinNocturne62_2 = ['Nocturne in E major, Op. 62, No. 2', chopin]
const chopinNocturne72_1 = ['Nocturne in E minor, Op. 72, No. 1', chopin]
const chopinNocturneLento = ['Lento con gran espressione, Op. Posth', chopin]
const chopinPolonaise40_1 = ['Polonaise in A major, Op. 40, No. 1 "Military"', chopin]
const chopinPolonaise44 = ['Polonaise in F-sharp minor, Op. 44 "Tragic"', chopin]
const chopinPolonaise53 = ['Polonaise in A-flat major, Op. 53 "Heroic"', chopin]
const chopinPreludes = ['24 Preludes, Op. 28', chopin]
const chopinPrelude4 = ['Prelude in E minor, Op. 28, No. 4', chopin]
const chopinPrelude8 = ['Prelude in F-sharp minor, Op. 28, No. 8', chopin]
const chopinPrelude10 = ['Prelude in C-sharp minor, Op. 28, No. 10', chopin]
const chopinPrelude12 = ['Prelude in G-sharp minor, Op. 28, No. 12', chopin]
const chopinPrelude15 = ['Prelude in D-flat major, Op. 28, No. 15 "Raindrops"', chopin]
const chopinPrelude16 = ['Prelude in B-flat minor, Op. 28, No. 16', chopin]
const chopinPrelude17 = ['Prelude in A-flat major, Op. 28, No. 17', chopin]
const chopinPrelude20 = ['Prelude in C minor, Op. 28, No. 20', chopin]
const chopinPrelude24 = ['Prelude in D minor, Op. 28, No. 24', chopin]
const chopinScherzo1 = ['Scherzo No. 1 in B minor, Op. 20', chopin]
const chopinScherzo2 = ['Scherzo No. 2 in B-flat minor, Op. 31', chopin]
const chopinScherzo3 = ['Scherzo No. 3 in C-sharp minor, Op. 39', chopin]
const chopinScherzo4 = ['Scherzo No. 4 in E major, Op. 54', chopin]
const chopinSonata2 = ['Sonata No. 2 in B-flat minor, Op. 35', chopin]
const chopinSonata3 = ['Sonata No. 3 in B minor, Op. 58', chopin]
const chopinWaltz18 = ['Waltz in E-flat major, Op. 18', chopin]
const chopinWaltz34_1 = ['Waltz in A-flat major, Op. 34, No. 1', chopin]
const chopinWaltz34_2 = ['Waltz in A minor, Op. 34, No. 2', chopin]
const chopinWaltz42 = ['Waltz in A-flat major, Op. 42', chopin]
const chopinWaltz64_1 = ['Waltz in D-flat major, Op. 64, No. 1 "Minute Waltz"', chopin]
const chopinWaltz64_2 = ['Waltz in B minor, Op. 64, No. 2', chopin]
const chopinWaltzes69 = ['2 Waltzes, Op. 69', chopin]
const chopinWaltzes70 = ['3 Waltzes, Op. 70', chopin]
const chopinWaltzPosth = ['Waltz in E minor, Op. Posth', chopin]
const chromaticFantasy = ['Chromatic Fantasy and Fugue', bachJS]
const clairDeLune = ['Clair de lune', debussy]
const claraSchumannScherzo1 = ['Scherzo No. 1 in D minor, Op. 10', schumannC]
const claraSchumannScherzo2 = ['Scherzo No. 2 in C minor, Op. 14', schumannC]
const claraSchumannSonata = ['Sonata in G minor', schumannC]
const claraSchumannVariations = ['Variations on a Theme by Robert Schumann, Op. 20', schumannC]
const clementiSonata40_2 = ['Sonata in B minor, Op. 40, No. 2', clementi]
const clementiSonata40_2_1 = ['"Allegro con fuoco e con espressione" from "Sonata in B minor, Op. 40, No. 2"', clementi]
const consolation3 = ['Consolation No. 3 in D-flat major', liszt]
const cruella = ['"Cruella de Vil" from "101 Dalmatians"', radcliffe]
const cuckooWaltz = ['Cuckoo Waltz', jonasson]
const cygne = ['Le cygne', saintSaens]
const danseMacabre = ['Danse macabre (arr. Liszt)', saintSaens]
const danzaRitualDelFuego = ['Danza ritual del fuego', falla]
const danzasArgentinas = ['Danzas argentinas', ginastera]
const dasJahr = ['Das Jahr', mendelssohnFa]
const debussyArabesque1 = ['Arabesque No. 1 in E major', debussy]
const debussyEtude1 = ['Pour les cinq doigts', debussy]
const debussyEtude6 = ['Pour les huit doigts', debussy]
const debussyPrelude1_6 = ['Des pas sur la neige', debussy]
const debussyPrelude1_8 = ['La fille aux cheveux de lin', debussy]
const debussyPrelude2_2 = ['Feuilles mortes', debussy]
const debussyReverie = ['Rêverie', debussy]
const diabelli = ['Diabelli Variations, Op. 120', beethoven]
const diabolicSuggestion = ['Suggestion diabolique, Op. 4, No. 4', prokofiev]
const drummer = ['The Little Drummer Boy', davis]
const dvorakHumoresque = ['Humoresque in G-flat major, Op. 101, No. 7', dvorak]
const dvorakLargo = ['"Largo" from "New World Symphony" (arr. Juon)', dvorak]
const dvorakSymphony9 = ['"New World Symphony"', dvorak]
const dvorakSymphony9Finale = ['"Finale" from "New World Symphony"', dvorak]
const entertainer = ['The entertainer', joplin]
const erdasWarning = ['Erda\'s Warning from "Das Rheingold" (arr. Ahn-Benton)', wagner]
const eros = ['"Eros" from "3 morceaux, Op. 24"', bortkevych]
const estampes1 = ['Pagodes', debussy]
const estampes2 = ['La soirée dans Grenade', debussy]
const estampes3 = ['Jardins sous la pluie from "Estampes"', debussy]
const etudeTableau33_1 = ['Etude-Tableau in F minor, Op. 33, No. 1', rachmaninov]
const etudeTableau33_2 = ['Etude-Tableau in C minor, Op. 33, No. 2', rachmaninov]
const etudeTableau33_3 = ['Etude-Tableau in C minor, Op. 33, No. 3', rachmaninov]
const etudeTableau33_4 = ['Etude-Tableau in D minor, Op. 33, No. 4', rachmaninov]
const etudeTableau33_5 = ['Etude-Tableau in E-flat minor, Op. 33, No. 5', rachmaninov]
const etudeTableau33_6 = ['Etude-Tableau in E-flat major, Op. 33, No. 6', rachmaninov]
const etudeTableau33_7 = ['Etude-Tableau in G minor, Op. 33, No. 7', rachmaninov]
const etudeTableau33_8 = ['Etude-Tableau in C-sharp minor, Op. 33, No. 8', rachmaninov]
const etudeTableau39_1 = ['Etude-Tableau in C minor, Op. 39, No. 1', rachmaninov]
const etudeTableau39_2 = ['Etude-Tableau in A minor, Op. 39, No. 2', rachmaninov]
const etudeTableau39_3 = ['Etude-Tableau in F-sharp minor, Op. 39, No. 3', rachmaninov]
const etudeTableau39_4 = ['Etude-Tableau in B minor, Op. 39, No. 4', rachmaninov]
const etudeTableau39_5 = ['Etude-Tableau in E-flat minor, Op. 39, No. 5', rachmaninov]
const etudeTableau39_6 = ['Etude-Tableau in A minor, Op. 39, No. 6', rachmaninov]
const etudeTableau39_7 = ['Etude-Tableau in C minor, Op. 39, No. 7', rachmaninov]
const etudeTableau39_8 = ['Etude-Tableau in D minor, Op. 39, No. 8', rachmaninov]
const etudeTableau39_9 = ['Etude-Tableau in D major, Op. 39, No. 9', rachmaninov]
const fantaisieImpromptu = ['Fantaisie-Impromptu, Op. 66', chopin]
const fantasticDances = ['Fantastic Dances, Op. 5', shostakovich]
const faurePavane = ['Pavane', faure]
const feuillesMortes = ['Les feuilles mortes', kosma]
const figaroOverture = ['Overture from "Le nozze di Figaro"', mozart]
const firebird = ['The Firebird', stravinsky]
const fledermaus = ['Selections from "Die Fledermaus', straussJ]
const flowerSong = ['"Flower Song" from "Carmen" (arr. Ahn-Benton)', bizet]
const forelle = ['Die Forelle (arr. Liszt)', schubert]
const forzaOverture = ['Overture from "La forza del destino"', verdi]
const frosty = ['Frosty the Snowman' , rollins]
const furElise = ['Für Elise', beethoven]
const elegantCaptainHook = ['"The Elegant Captain Hook" from "Peter Pan"', fain]
const erlkonig = ['Erlkönig (arr. Liszt)', schubert]
const excursions = ['Excursions, Op. 20', barber]
const gaspard1 = ['"Undine" from "Gaspard de la nuit"', ravel]
const gaspard2 = ['"Le gibet" from "Gaspard de la nuit"', ravel]
const gaspard3 = ['"Scarbo" from "Gaspard de la nuit"', ravel]
const gaston = ['"Gaston" from "Beauty and the Beast"', menken]
const gershwinPrelude2 = ['Prelude No. 2', gershwin]
const gershwinPreludes = ['3 Preludes', gershwin]
const ginasteraSonata1 = ['Sonata No. 1, Op. 22', ginastera]
const ginasteraSonata1_2 = ['"Presto misterioso" from "Sonata No. 1, Op. 22"', ginastera]
const ginasteraSonata1_4 = ['"Ruvido ed ostinato" from "Sonata No. 1, Op. 22"', ginastera]
const ginasteraSonata2 = ['Sonata No. 2, Op. 53', ginastera]
const giovanniOverture = ['Overture from "Don Giovanni"', mozart]
const goldberg = ['Goldberg Variations', bachJS]
const gretchen = ['Gretchen am Spinnrade (arr. Liszt)', schubert]
const hakunaMatata = ['"Hakuna Matata" from "The Lion King"', john]
const halloweenTheme = ['Theme from "Halloween" (arr. Ahn-Benton)', carpenter]
const harryPotterSelections = ['Selections from "Harry Potter" (arr. Ahn-Benton)', williams]
const hanselGretel = ['Selections from "Hänsel und Gretel"', humperdinck]
const haydnSonata4 = ['Sonata No. 4 in C minor', haydn]
const haydnSonata16 = ['Sonata No. 16 in C major', haydn]
const haydnSonata27 = ['Sonata No. 27 in B minor', haydn]
const haydnSonata32 = ['Sonata No. 33 in E-flat major', haydn]
const haydnSonata33 = ['Sonata No. 34 in E minor', haydn]
const haydnSonata33_3 = ['"Molto vivace" from "Sonata No. 34 in E minor"', haydn]
const haydnSymphony45 = ['Symphony No. 45 in F-sharp minor "Farewell"', haydn]
const haydnSymphony94 = ['Symphony No. 94 in G major "Surprise"', haydn]
const hummelSonata5 = ['Sonata No. 5 in F-sharp minor, Op. 81', hummel]
const hungarianDances = ['Selections from "Hungarian Dances"', brahms]
const hungarianDance1 = ['Hungarian Dance No. 1', brahms]
const hungarianDance5 = ['Hungarian Dance No. 5', brahms]
const hungarianRhapsody2 = ['Hungarian Rhapsody No. 2 in C-sharp minor', liszt]
const hungarianRhapsody6 = ['Hungarian Rhapsody No. 6 in D-flat major', liszt]
const hungarianRhapsody12 = ['Hungarian Rhapsody No. 12 in C-sharp minor', liszt]
const images1 = ['Reflets dan l\'eau', debussy]
const images6 = ['Poissons d\'or', debussy]
const islamey = ['Islamey', balakirev]
const isleOfTheDead = ['Isle of the Dead, Op. 29 (arr. Kirkor)', rachmaninov]
const isoldesLiebestod = ['Isoldes Liebestod (arr. Liszt)', wagner]
const italianConcerto = ['Italian Concerto', bachJS]
const jesu = ['Jesu, Joy of Man\'s Desiring', bachJS]
const jeuxDeau = ['Jeux d\'eau', ravel]
const kabalevskyPreludes = ['24 Preludes, Op. 38', kabalevsky]
const kabalevskySonata2 = ['Sonata No. 2 in E-flat major, Op. 45', kabalevsky]
const kapustin3 = ['Concert Etude No. 3 in E minor "Toccatina"', kapustin]
const kapustin6 = ['Concert Etude No. 6 in B-flat major "Pastorale"', kapustin]
const kitschMusyka = ['Kitsch-Musyka', silvestrov]
const kosenkoSonata2 = ['Sonata No. 2 in C-sharp minor', kosenko]
const kosenkoSonata3 = ['Sonata No. 3 in B minor', kosenko]
const lark = ['The Lark (arr. Balakirev)', glinka]
const letItGo = ['"Let It Go" from "Frozen" (arr. Ahn-Benton)', lopezes]
const libertango = ['Libertango (arr. Ahn-Benton)', piazzolla]
const liebestraum = ['Liebestraum No. 3', liszt]
const lilacs = ['Lilacs', rachmaninov]
const lisztBallade2 = ['Ballade No. 2 in B minor', liszt]
const lisztFigaro = ['Fantasy on Themes from Mozart\'s "Le nozze di Figaro"', liszt]
const lisztPastorale = ['"Pastorale" from "Années de Pélérinage"', liszt]
const lisztPaganini1 = ['Paganini Etude No. 1 in G minor', liszt]
const lisztPaganini3 = ['Paganini Etude No. 3 in G-sharp minor "La Campanella"', liszt]
const lisztPaganini4 = ['Paganini Etude No. 4 in E major', liszt]
const lisztRigoletto = ['Rigoletto-Paraphrase', liszt]
const lisztSonata = ['Sonata in B minor', liszt]
const loveMeTender = ['Love Me Tender (arr. Ahn-Benton)', presley]
const lyatoshynskyPreludes = ['5 Preludes', lyatoshynsky]
const lyatoshynskySonataBallada = ['Sonata-Ballada, Op. 18', lyatoshynsky]
const lysenkoSonata1 = ['Sonata No. 1 in A minor', lysenko]
const magicFluteOverture = ['Overture from "Die Zauberflöte"', mozart]
const maidensPrayer = ['Maiden\'s Prayer', badarzewska]
const malaguena = ['Malagueña', lecuona]
const mapleLeafRag = ['Maple Leaf Rag', joplin]
const mascagniIntermezzo = ['"Intermezzo" from "Cavalleria Rusticana"', mascagni]
const masudaKantoOpening = ['Opening Credits (Pokémon Red/Blue)', masuda]
const masudaPallet = ['Pallet Town', masuda]
const masudaOakLab = ['Oak\'s Lab', masuda]
const masudaKantoTravel1 = ['Traveling Music 1', masuda]
const masudaViridian = ['Viridian City', masuda]
const masudaViridianForest = ['Viridian Forest', masuda]
const masudaPewter = ['Pewter City', masuda]
const masudaMoon = ['Mt. Moon', masuda]
const masudaCerulean = ['Cerulean City', masuda]
const masudaVermillion = ['Vermillion City', masuda]
const masudaAnne = ['S. S. Anne', masuda]
const masudaRock = ['Rock Tunnel', masuda]
const masudaLavender = ['Lavender Town', masuda]
const masudaTower = ['Pokémon Tower', masuda]
const masudaKantoTravel2 = ['Traveling Music 2', masuda]
const masudaCeladon = ['Celadon City', masuda]
const masudaKantoRocket = ['Team Rocket', masuda]
const masudaBike = ['Bike Road', masuda]
const masudaFuchsia = ['Fuchsia City', masuda]
const masudaKantoTravel3 = ['Traveling Music 3', masuda]
const masudaSaffron = ['Saffron City', masuda]
const masudaSurf = ['Surfing Music', masuda]
const masudaCinnabar = ['Cinnabar Island', masuda]
const masudaMansion = ['Pokémon Mansion', masuda]
const masudaKantoVictory = ['Kanto Victory Road', masuda]
const masudaChampion = ['Kanto Champion Battle (arr. Ahn-Benton)', masuda]
const masudaHall = ['Hall of Fame', masuda]
const masudaKantoEnding = ['Ending Credits (Pokémon Red/Blue)', masuda]
const mendelssohnRondo = ['Rondo Capriccioso, Op. 14', mendelssohnFe]
const mephisto = ['Mephisto Waltz No. 1', liszt]
const mer = ['La mer (arr. Garban)', debussy]
const militaryMarch = ['Military March (arr. Liszt)', schubert]
const miroirs1 = ['Noctuelles', ravel]
const miroirs2 = ['Oiseaux tristes', ravel]
const miroirs3 = ['Une barque sur l\'ocean', ravel]
const miroirs4 = ['Alborada del gracioso', ravel]
const mozartAdagio = ['Adagio in B minor, K. 540', mozart]
const mozartSonata5 = ['Sonata No. 5 in G major', mozart]
const mozartSonata7 = ['Sonata No. 7 in C major', mozart]
const mozartSonata8 = ['Sonata No. 8 in A minor', mozart]
const mozartSonata8_3 = ['"Presto" from "Sonata No. 8 in A minor"', mozart]
const mozartSonata9 = ['Sonata No. 9 in D major', mozart]
const mozartSonata12 = ['Sonata No. 12 in F major', mozart]
const mozartSonata14 = ['Sonata No. 14 in C minor', mozart]
const mozartSonata16 = ['Sonata No. 16 in C major', mozart]
const mozartSymphony38 = ['Symphony No. 38 in D major "Prague"', mozart]
const mozartSymphony40 = ['Symphony No. 40 in G minor', mozart]
const mozartSymphony41 = ['Symphony No. 41 in C major "Jupiter"', mozart]
const mozartVariations = ['12 Variations on "Ah vous dirai-je, Maman"', mozart]
const nachtMusik = ['Eine kleine Nachtmusik', mozart]
const novelettes = ['3 Novelettes', poulenc]
const nuagesGris = ['Nuages gris', liszt]
const nutcracker = ['The Nutcraker Suite, Op. 71a', tchaikovsky]
const oblivion = ['Oblivion (arr. Ahn-Benton)', piazzolla]
const organFantasy = ['Orgel-Phantasie und Fuge in G minor (arr. Liszt)', bachJS]
const pasDeDeux = ['"Pas de deux" from "The Nutcracker"', 'Piotr Tchaikovsky']
const passacagliaFugue = ['Passacaglia and Fugue (arr. d\'Albert)', bachJS]
const peerGynt1_1 = ['"Morgenstimmung" from "Peer Gynt Suite No. 1"', grieg]
const peerGynt1_2 = ['"Åses Tod" from "Peer Gynt Suite No. 1"', grieg]
const peerGynt1_4 = ['"In der Halle des Bergkönigs" from "Peer Gynt Suite No. 1"', grieg]
const peopleUnited = ['The People United Will Never Be Defeated!', rzewski]
const petrushka = ['Petrushka', stravinsky]
const phantomSelections = ['Selections from "The Phantom of the Opera"', webber]
const pictures = ['Pictures at an Exhibition', mussorgsky]
const picturesBydlo = ['"Bydło" from "Pictures at an Exhibition"', mussorgsky]
const picturesUnhatched = ['"Ballet of the Unhatched Chickens" from "Pictures at an Exhibition"', mussorgsky]
const pilgrimage1_5 = ['Orage', liszt]
const pilgrimage2_1 = ['Sposalizio', liszt]
const pilgrimage2s = ['Années de pèlerinage, Italie - Venezia', liszt]
const pilgrimage2s_1 = ['Goldoliera', liszt]
const pilgrimage2s_2 = ['Canzone', liszt]
const pilgrimage2s_3 = ['Tarantella', liszt]
const pilgrimage2_7 = ['Après une Lecture du Dante', liszt]
const pilgrimage3_4 = ['Les jeux d\'eau à la Ville d\'Este', liszt]
const pompCircumstance = ['Pomp and Circumstance No. 1', elgar]
const poule = ['La poule', 'Jean-Philippe Rameau']
const poorUnfortunateSouls = ['"Poor Unfortunate Souls" from "The Little Mermaid"', menken]
const preludeFugueVariation = ['Prelude, Fugue, and Variation, Op. 18', franck]
const prokofievCinderella = ['Selections from "Cinderella"', prokofiev]
const prokofievRomeoJuliet = ['Selections from "Romeo and Juliet"', prokofiev]
const prokofievSonata1 = ['Sonata No. 1 in F minor, Op. 1', prokofiev]
const prokofievSonata2 = ['Sonata No. 2 in D minor, Op. 14', prokofiev]
const prokofievSonata3 = ['Sonata No. 3 in A minor, Op. 28', prokofiev]
const prokofievSonata4 = ['Sonata No. 4 in C minor, Op. 29', prokofiev]
const prokofievSonata5 = ['Sonata No. 5 in C major, Op. 38', prokofiev]
const prokofievSonata6 = ['Sonata No. 6 in A minor, Op. 82', prokofiev]
const prokofievSonata7 = ['Sonata No. 7 in B-flat major, Op. 83', prokofiev]
const prokofievSonata7_3 = ['"Precipitato" from "Sonata No. 7 in B-flat major, Op. 83"', prokofiev]
const prokofievSonata8 = ['Sonata No. 8 in B-flat major, Op. 84', prokofiev]
const prokofievSonata9 = ['Sonata No. 9 in C major, Op. 103', prokofiev]
const prokofievToccata = ['Toccata in D minor, Op. 11', prokofiev]
const queenOfTheNight = ['"Der Hölle Rache" (arr. Ahn-Benton)', mozart]
const rachmaninovChopin = ['Variations on a Theme by Chopin, Op. 22', rachmaninov]
const rachmaninovCorelli = ['Variations on a Theme by Corelli, Op. 42', rachmaninov]
const rachmaninovElegy = ['Elegie in E-flat minor, Op. 3, No. 1', rachmaninov]
const rachmaninovMusical16_3 = ['Moment musical in B minor, Op. 16, No. 3', rachmaninov]
const rachmaninovMusical16_4 = ['Moment musical in E minor, Op. 16, No. 4', rachmaninov]
const rachmaninovPolichinelle = ['Polichinelle', 'Op. 3, No. 4', rachmaninov]
const rachmaninovPrelude3_2 = ['Prelude in C-sharp minor, Op. 3, No. 2', rachmaninov]
const rachmaninovPrelude23_1 = ['Prelude in F-sharp minor, Op. 23, No. 1', rachmaninov]
const rachmaninovPrelude23_4 = ['Prelude in D major, Op. 23, No. 4', rachmaninov]
const rachmaninovPrelude23_5 = ['Prelude in G minor, Op. 23, No. 5', rachmaninov]
const rachmaninovPrelude32_4 = ['Prelude in E minor, Op. 32, No. 4', rachmaninov]
const rachmaninovPrelude32_5 = ['Prelude in G major, Op. 32, No. 5', rachmaninov]
const rachmaninovPrelude32_10 = ['Prelude in B minor, Op. 32, No. 10', rachmaninov]
const rachmaninovPrelude32_12 = ['Prelude in G-sharp minor, Op. 32, No. 12', rachmaninov]
const rachmaninovSonata1 = ['Sonata No. 1 in D minor, Op. 28', rachmaninov]
const rachmaninovSonata2 = ['Sonata No. 2 in B-flat minor, Op. 36', rachmaninov]
const radetzky = ['Radetzky March', straussJ]
const rakoczy = ['Transcription of Liszt\'s "Rakoczy march"', horowitz]
const rapsodieEspagnole = ['Rapsodie espagnole', liszt]
const ravelPavane = ['Pavane pour une infante defunte', ravel]
const revutskyPreludes4 = ['3 Preludes, Op. 4', revutsky]
const revutskyPreludes7 = ['2 Preludes, Op. 7', revutsky]
const revutskyPreludes11 = ['2 Preludes, Op. 11', revutsky]
const revutskyPieces17 = ['2 Pieces, Op. 17', revutsky]
const revutksySonata1 = ['Sonata in B minor, Op. 1', revutsky]
const rhapsodyInBlue = ['Rhapsody in Blue', gershwin]
const riteOfSpring = ['Rite of Spring', stravinsky]
const romanianFolkDances = ['Romanian folk dances', bartok]
const rudolf = ['Rudolf the Red-Nosed Reindeer', marks]
const russianDance = ['Russian Dance from "The Nutcraker"', tchaikovsky]
const sabreDance = ['Transcription of Khachaturian\'s "Sabre Dance"', cziffra]
const salutDamour = ['Salut d\'amour, Op. 12', elgar]
const scaramouche = ['Scaramouche (arr. Ahn-Benton)', milhaud]
const scarlatti1 = ['Sonata No. 1 in D minor', scarlatti]
const scarlatti30 = ['Sonata No. 30 in G minor "Cat Fugue"', scarlatti]
const scarlatti32 = ['Sonata No. 32 in D minor', scarlatti]
const scarlatti87 = ['Sonata No. 87 in B minor', scarlatti]
const scarlatti141 = ['Sonata No. 141 in D minor', scarlatti]
const scarlatti240 = ['Sonata No. 240 in D major', scarlatti]
const scarlatti450 = ['Sonata No. 450 in G minor', scarlatti]
const scarlatti466 = ['Sonata No. 466 in F minor', scarlatti]
const schindler = ['Theme from "Schindler\'s List', williams]
const schubertImpromptu90_1 = ['Impromptu No. 1 in C minor, Op. 90, No. 1', schubert]
const schubertImpromptu90_2 = ['Impromptu No. 2 in E-flat major, Op. 90, No. 2', schubert]
const schubertImpromptu90_3 = ['Impromptu No. 3 in G-flat major, Op. 90, No. 3', schubert]
const schubertImpromptu90_4 = ['Impromptu No. 4 in A-flat major, Op. 90, No. 4', schubert]
const schubertMoment = ['Moment musical No. 3 in F minor', schubert]
const scriabinEtude8_12 = ['Etude in D-sharp minor, Op. 8, No. 12', scriabin]
const scriabinEtude42_5 = ['Etude in C-sharp minor, Op. 42, No. 5', scriabin]
const scriabinEtude65_3 = ['Etude, Op. 65, No. 3', scriabin]
const scriabinSonata3 = ['Sonata No. 3 in F-sharp minor, Op. 23', scriabin]
const scriabinSonata5 = ['Sonata No. 5, Op. 53', scriabin]
const shamoToccata = ['Toccata', 'Yuri Shamo']
const shostakovichPreludeFugue4 = ['Prelude and Fugue in E minor, Op. 87, No. 4', shostakovich]
const shostakovichPreludeFugue15 = ['Prelude and Fugue in D-flat major, Op. 87, No. 15', shostakovich]
const shostakovichPreludeFugue24 = ['Prelude and Fugue in D minor, Op. 87, No. 24', shostakovich]
const shostakovichPreludes34 = ['24 Preludes, Op. 34', shostakovich]
const shostakovichSonata2 = ['Piano Sonata No. 2, Op. 61', shostakovich]
const shostakovichSymphony5_4 = ['"Allegro non troppo" from "Symphony No. 5, Op. 47"', shostakovich]
const sibelius75 = ['5 Pieces, Op. 75', sibelius]
const silveryWaves = ['Silvery Waves', wyman]
const slavonicDances = ['Selections from "Slavonic Dances"', dvorak]
const skorykBurleska = ['Burleska', skoryk]
const skorykMelodia = ['Melodia', skoryk]
const skorykPartita5 = ['Partita No. 5', skoryk]
const snowman = ['"Do you want to build a snowman?" from "Frozen"', lopezes]
const solveig = ['Solveigs Sang', grieg]
const songbookSelections = ['Selections from the Songbook', gershwin]
const starsStripes = ['Transcription of "Stars and Stripes Forever" by Sousa', horowitz]
const starWarsSelections = ['Selections from "Star Wars"', williams]
const sugarPlumFairy = ['"Dance of the Sugar Plum Fairy" from "The Nutcracker"', tchaikovsky]
const supermanSelections = ['Selections from "Superman Suite"', williams]
const swanLakeTheme = ['Theme from "Swan Lake"', tchaikovsky]
const symphonicEtudes = ['Symphonic Etudes, Op. 13', schumannR]
const tarasBulbaOverture = ['Overture from "Taras Bulba"', lysenko]
const tchaikovskyJune = ['"June" from "The Seasons, Op. 37"', tchaikovsky]
const tchaikovskyMorceaux72_2 = ['Berceuse, Op. 72, No. 2', tchaikovsky]
const tchaikovskyMorceaux72_5 = ['Meditation, Op. 72, No. 5', tchaikovsky]
const tchaikovskyMorceaux72_7 = ['Polacca de concert, Op. 72, No. 7', tchaikovsky]
const tchaikovskyMorceaux72_10 = ['Scherzo-Fantaisie, Op. 72, No. 10', tchaikovsky]
const tchaikovskyMorceaux72_18 = ['Scène dansante (Invitation au trèpak), Op. 72, No. 18', tchaikovsky]
const tchaikovskySeasons = ['The Seasons, Op. 37', tchaikovsky]
const tchaikovsky1812 = ['1812 Overture', tchaikovsky]
const thaisMeditation = ['"Meditation" from "Thaïs" (arr. Ahn-Benton)', massenet]
const totentanz = ['Totentanz (arr. Ahn-Benton)', liszt]
const transcendental4 = ['Transcendental Etude No. 4 "Mazeppa"', liszt]
const transcendental6 = ['Transcendental Etude No. 6 "Feux follets"', liszt]
const transcendental7 = ['Transcendental Etude No. 7 "Eroica"', liszt]
const transcendental8 = ['Transcendental Etude No. 8 "Wild Jagd"', liszt]
const transcendental10 = ['Transcendental Etude No. 10', liszt]
const traumerei = ['Träumerei', schumannR]
const tritschTratsch = ['Transcription of J. Strauss\'s "Tritsch-Tratsch Polka"', cziffra]
const ukrainianRhapsody1 = ['Ukrainian Rhapsody No. 1 in G-sharp minor, Op. 8', lysenko]
const ukrainianRhapsody2 = ['Ukrainian Rhapsody No. 2 in A minor, Op. 18', lysenko]
const ukrainianSuite1 = ['Ukrainian Suite No. 1 in G minor', lysenko]
const ukrainianSuite2 = ['Ukrainian Suite No. 2 in C minor', lysenko]
const underTheSea = ['"Under the Sea" from "Little Mermaid"', menken]
const unstern = ['Unstern', liszt]
const usaAnthem = ['The Star-Spangled Banner (arr. Ahn-Benton)', key]
const valkyries = ['Ride of the Valkyries (arr. Tausig)', wagner]
const valseGrotesque = ['"Valse grotesque" from "3 morceaux, Op. 24"', bortkevych]
const versLaFlamme = ['Vers la flamme', scriabin]
const vienneseDances = ['3 Viennese Dances (arr. Ahn-Benton)', kreisler]
const villaLobosPolichinelle = ['Polichinelle', villaLobos]
const vivaldiSpring = ['"Spring" from "The Four Seasons" (arr. Ahn-Benton)', vivaldi]
const vivaldiSummer = ['"Summer" from "The Four Seasons" (arr. Ahn-Benton)', vivaldi]
const vivaldiAutumn = ['"Autumn" from "The Four Seasons" (arr. Ahn-Benton)', vivaldi]
const vivaldiWinter = ['"Winter" from "The Four Seasons" (arr. Ahn-Benton)', vivaldi]
const vocalise = ['Vocalise, Op. 34, No. 14 (arr. Ahn-Benton)', rachmaninov]
const volodosTurkish = ['Concert Paraphrase on Mozart\'s "Turkish March"', volodos]
const waltzOfFlowers = ['Waltz of the Flowers from "The Nutcracker"', tchaikovsky]
const wanderersFantasy = ['Wanderers-Fantasie', schubert]
const weberSonata1 = ['Sonata No. 1 in C major, Op. 24', weber]
const weddingMarch = ['Transcription of Mendelssohn\'s "Wedding March"', horowitz]
const westSideStorySelections = ['Selections from "West Side Story" (arr. Ahn-Benton)', bernstein]
const widmung = ['Widmung (arr. Liszt)', schumannR]
const williamTellOverture = ['Overture from "Guillaume Tell" (arr. Liszt)', rossini]

const availableConcerts = [
    ['American Pride 1', 'Enjoy some of the most famous musical depictions of American patriotism, the wild west, blues, and ragtime. Perfect for Fourth of July, Memorial Day, Labor Day, or even to celebrate newly naturalized American citizens.', [starsStripes, excursions, mapleLeafRag, westSideStorySelections, rhapsodyInBlue], 65, 150, allAmerican1],
    ['American Pride 2', 'Presenting the true diversity of the U.S.A. from classic American composers to naturalized Asian-American composers, from movie scores to musical theater, from lighthearted male composers to introverted female composers.', [gershwinPreludes, supermanSelections, ahnbenton56, phantomSelections, entertainer, beachBallade, americanInParis], 65, 125, allAmerican2],
    ['At the Carnival', 'Fear the clowns no more! These jesters, pierrots, and mimes are at your service for your aural pleasure.', [miroirs4, scaramouche, petrushka, sabreDance, ahnbenton7, carnaval], 75, 200, carnival],
    ['Ballroom 1', 'Welcome to Ballroom 1, where you may join the dance floor with Argentinian outlaws, a seductive devil, traditional Viennese, and partying gypsies.', [chopinWaltz18, arabianDance, fantasticDances, mephisto, hungarianDance5, vienneseDances, oblivion, danzasArgentinas, carmenVariations], 55, 150, ballroom1],
    ['Ballroom 2', 'Welcome to Ballroom 2, where flowers come alive, knives are flying, and even the dead may take part in the festivities along with the Polish and the Romanians.', [waltzOfFlowers, romanianFolkDances, danseMacabre, sabreDance, chopinMazurka6_1, chopinMazurka7_1, chopinMazurka17_4, libertango, pilgrimage2s_3], 55, 150, ballroom2],
    ['Ballroom 3', 'Welcome to Ballroom 3, where the elegant and the traditional battle the grotesque and the rustic. Which style will you favor?', [chopinPolonaise53, beethovenMinuet, bachPartita6, valseGrotesque, ahnbenton1, americanPreludes3, sugarPlumFairy, totentanz], 70, 150, ballroom3],
    ['Beethoven Blast', 'Explore the tumultuous life of Ludwig van Beethoven: a story of love and tragedy with a touch of frivolity.', [beethovenSonata8, beethovenRondo, furElise, beethovenBagatelles33, beethovenSonata23], 70, 125, beethovenPortrait],
    ['Blueprints By Bach', 'Take a dive into the perfect balance of mathematical structure, musical dramaturgy, emotional depth of the timeless composer J. S. Bach.', [passacagliaFugue, bachAir, chromaticFantasy, bachPartita2, bachToccata], 60, 150, bachPortrait],
    ['Botanical Garden', 'Imagine walking through an exquisite botanical garden or taking in the fresh air of a rural meadowland - without having to worry about any allergies!', [lilacs, americanPreludes10, blumenlied, beethovenSonata15, flowerSong, lisztPastorale, waltzOfFlowers, ahnbenton96], 60, 125, botanical],
    ['A Brahmsian Battle', 'Take a plunge into the musical world of Johannes Brahms: larger-than-life, symphonic sounds mixed in with inner emotional tension, all carefully calculated to perfect equilibrium on the piano.', [brahmsSonata1, brahmsIntermezzo118_2, brahmsPaganini1, brahmsLullaby, hungarianDance5, brahmsHandel], 75, 175, brahmsPortrait],
    ['The Chopin Show', 'Get a glimpse of the genius of Frédéric Chopin, master of the Polish dance style and its depiction through pianistic dexterity.', [chopinPolonaise53, chopinNocturnes48, chopinMazurkas17, chopinBarcarolle, chopinWaltzes70, chopinScherzo4], 65, 125, chopinPortrait],
    ['The Classics 1', 'Tired of classical concerts trying too hard to feature unknown composers or obscure works? This concert is just right for you! Featuring all-time favorites by famous composers - so famous that it\'s almost pop music.', [hungarianRhapsody2, salutDamour, dvorakHumoresque, clairDeLune, rachmaninovPrelude3_2, entertainer, canon, fantaisieImpromptu, vivaldiSpring, volodosTurkish], 65, 125, classics1],
    ['The Classics 2', 'Classical Hits cannot fit into just one concert! Explore more well-known tunes that is sure to hit the spot and may leave you humming for the rest of the day.', [radetzky, furElise, liebestraum, tchaikovskyJune, thaisMeditation, mapleLeafRag, chopinNocturne9_2, rhapsodyInBlue], 55, 100, classics2],
    ['The Classics 3', 'Enjoy even more familiar melodies, specially catered to please both the amateurs and connoisseurs of classical music!', [bachWTC1_1, beethovenSonata8, brahmsLullaby, chopinBallade1, blueDanube, vivaldiWinter, dvorakLargo, weddingMarch], 75, 150, classics3],
    ['Four Elements: Air & Earth', 'Wind shapes the Earth, and the resulting topography in turn affects the flow of the wind. Get ready to be swept up in the classical music depiction of this endless battle of nature.', [beethovenSonata17, ahnbenton15_2, pilgrimage1_5, erdasWarning, ahnbenton15_4, isleOfTheDead, chopinEtude25_11], 70, 150, airEarth],
    ['Four Elements: Water & Fire', 'Water douses fire, and fire quenches water. Who will you root for - the scorching lava, or the raging ocean? Listen and decide!', [chopinEtude10_1, versLaFlamme, ahnbenton15_1, danzaRitualDelFuego, estampes3, ahnbenton15_3, jeuxDeau, firebird], 60, 175, fireWater],
    ['Halloween Special 1', 'Feeling spooky? Fuel the fear with these classic horror tunes, filled with ghosts, witches, and the undead.', [bachToccata, beethovenSonata14, harryPotterSelections, halloweenTheme, ahnbenton28, chopinNocturne27_1, totentanz], 75, 175, halloween1],
    ['Halloween Special 2', 'Enter this musical haunted house and participate in the mysteries of the paranormal. Beware - some spirits are harmless, but others love to exploit the scare factor!', [ahnbenton91, chopinNocturne48_1, transcendental6, isleOfTheDead, gaspard3, ahnbenton11_2_3, erlkonig, danseMacabre], 65, 150, halloween2],
    ['Heroes vs. Villains', 'Which is more convincing: the music of the good, or the music of the evil? Decide for yourself in this exciting concert depicting the constant struggle between heroes and villains.', [tarasBulbaOverture, cruella, queenOfTheNight, poorUnfortunateSouls, batmanSelections, transcendental7, starWarsSelections, beethovenSonata12_3, bePrepared, gaston, elegantCaptainHook, chopinPolonaise53], 65, 125, heroesVillains],
    ['Impostors and Thieves', 'Look carefully with a magnifying glass: this may be a piano concert, but the composers of these works either didn\'t originally write them for the piano, or tried to depict other instruments with the piano.', [bachChaconne, bozzaAria, chopinEtude25_1, chopinEtude25_7, lisztPaganini3, preludeFugueVariation, vivaldiWinter, vocalise, brahmsPaganini1], 75, 150, impostorsThieves],
    ['Lisztomania', 'Be prepared to lose your mind with this up-close-and-personal concert of legendary pianist and composer, international icon, and unmatched master recitalist - Franz Liszt.', [hungarianRhapsody2, consolation3, lisztPaganini3, pilgrimage2s, liebestraum ,lisztSonata], 75, 200, lisztPortrait],
    ['Lullaby Collection', 'Get ready for bed first, then listen to this concert in pajamas, perhaps with a nightcap. We mean this literally: this concert is specifically designed so that you can peacefully fall asleep in the middle of the concert!', [consolation3, beethovenSonata14_1, chopinBerceuse, clairDeLune, scarlatti87, traumerei, brahmsLullaby, beethovenSonata1_2, chopinNocturne9_2, debussyReverie, solveig, gershwinPrelude2, bachAir, americanPreludes2, bachWTC1_1_1, chansonTriste, vocalise, salutDamour], 75, 100, lullaby],
    ['Marching On', 'Marches are everywhere in life: children\'s play, graduation, military, parades, weddings, and funerals. Tap your feet and hum along.', [radetzky, ahnbenton3, chopinPolonaise40_1, beethovenSonata12_3, militaryMarch, bridalMarch, rakoczy, chopinFuneral, pompCircumstance, etudeTableau33_4, starsStripes], 60, 150, march],
    ['Meditation and Peace', 'Find your inner peace with this relaxing concert. Perfect for yoga, spas, therapeutic massages, or a simple daytime relaxation on a pleasant, clear day.', [peerGynt1_1, thaisMeditation, scarlatti466, traumerei, canon, tchaikovskyMorceaux72_5, rachmaninovPrelude32_5, images1, chopinWaltz34_2, dvorakLargo, debussyReverie, americanPreludes10, bachAir, aveMaria, chopinNocturne62_1], 85, 125, meditation],
    ['Mozart Mastermind', 'Experience the seamless flow of music so effortlessly brought forth by Wolfgang Amadeus Mozart: the quintessential child prodigy with unparalleled frivolity and versatility.', [giovanniOverture, mozartSonata12, mozartAdagio, mozartVariations, mozartSonata8, volodosTurkish], 75, 150, mozartPortrait],
    ['Ocean Waves', 'Capable of absolute tranquility and fierce rage, the ocean is both a loyal companion and a formidable force to all of us. Ride the waves of varying intensity as this concert takes you on a journey overseas.', [silveryWaves, etudeTableau39_2, miroirs3, chopinEtude25_12, ahnbenton79_4, mer], 65, 125, ocean],
    ['Overcoming Tragedy', 'Tragedy is an unfortunate but inevitable part of life. Let this concert assist you with expressing and overcoming grief and allow yourself to slowly enter the stage of acceptance.', [chopinPolonaise44, beethovenSonata7_2, preludeFugueVariation, scriabinEtude42_5, consolation3, etudeTableau33_7, bachAir, beethovenSonata27, dvorakLargo], 80, 100, tragedy],
    ['The Opera House 1', 'Explore the drama, the romance, the scandal, and the tragedy of famous operatic works, now brought to you in a home concert on the piano.', [figaroOverture, isoldesLiebestod, carmenVariations, forzaOverture, songbookSelections, vocalise, lisztFigaro], 60, 150, opera1],
    ['The Opera House 2', 'The world of opera is vast and deep: with this opera-inside-a-piano concert, delve more into the storyline, the plot, and the hidden meanings and intentions of characters.', [williamTellOverture, solveig, chopinGiovanni, mascagniIntermezzo, tarasBulbaOverture, carmenSelections, erlkonig, babbino, lisztRigoletto], 70, 150, opera2],
    ['A Pokémon Journey: Kanto - Part 1', 'Let out both your inner nerd and childhood nostalgia! Explore both the iconic music of Junichi Masuda, and the epic battling music of the protagonist against many foes, if the battles were to be represented by equally iconic classical music. Follow the first generation gameplay through the Kanto region, from Pallet Town to Celadon City.', [masudaKantoOpening, masudaPallet, masudaOakLab, haydnSonata33_3, masudaKantoTravel1, masudaViridian, clementiSonata40_2_1, masudaViridianForest, masudaPewter, brahmsSonata1_3, masudaMoon, masudaCerulean, chopinEtude25_2, mozartSonata8_3, masudaVermillion, masudaAnne, beethovenSonata5_3, kapustin3, masudaRock, masudaLavender, masudaTower, beethovenSonata1_4, masudaKantoTravel2, masudaCeladon, masudaKantoRocket, diabolicSuggestion, mendelssohnRondo], 80, 125, kanto1],
    ['A Pokémon Journey: Kanto - Part 2', 'Continue your trip down the memory lane in the region of Kanto, accompanied by the music of Masuda and equally dramatic works by other composers. Conquer the last four gym leaders, the elite four, and the champion!', [masudaBike, masudaFuchsia, transcendental8, masudaKantoTravel3, masudaSaffron, beethovenSonata17_1, prokofievToccata, scriabinEtude65_3, masudaSurf, masudaCinnabar, masudaMansion, ginasteraSonata1_4, prokofievSonata7_3, beethovenSonata23_3, masudaKantoVictory, chopinEtude25_11, rachmaninovPrelude23_5, ginasteraSonata1_2, valkyries, masudaChampion, masudaHall, masudaKantoEnding], 80, 125, kanto2],
    ['Power of Prokofiev', 'Immerse in the powerfully striking musical fantasy land of Sergei Prokofiev, filled with obsession, feud, lust, war, and sarcasm.', [diabolicSuggestion, prokofievRomeoJuliet, prokofievSonata3, prokofievToccata, prokofievSonata7], 65, 175, prokofievPortrait],
    ['Remembrance', 'Honor the dearly departed with a musical journey through remembrance, reverence, and nostalgia, filled with many relatable moments of inner suffering, displays of outcry, and eventual tranquility.', [faurePavane, mozartSonata8, rachmaninovElegy, ravelPavane, bachChaconne, chopinFuneral, lisztBallade2, babadjanianElegy], 80, 125, remembrance],
    ['Reflections with Rachmaninov', 'Enter the incredibly complex world of Sergei Rachmaninov, where endless depth of emotion meets extreme pianistic dexterity to create an unforgettable musical experience.', [etudeTableau39_1, etudeTableau39_5, etudeTableau39_6, rachmaninovElegy, rachmaninovMusical16_3, rachmaninovMusical16_4, rachmaninovPrelude23_5, rachmaninovPrelude32_10, etudeTableau33_5, vocalise, rachmaninovSonata2], 75, 200, rachmaninovPortrait],
    ['Saying Goodbye', 'Farewells are difficult, whether they are a separation from a loved one or a departure from a hometown. Ease the heartache and express the nostalgia with some of the best depictions in classical music of this uniquely human emotion.', [ahnbenton6_1, haydnSymphony45, chopinEtude10_3, adiosNonino, ahnbenton87, chopinWaltzes69, beethovenSonata26], 80, 175, goodbye],
    ['The Seasons: Winter Wonderland', 'Turn your fireplace on and get cozy for the fantasy land of classical music\'s best depiction of snowy winter, freezing wind, and holiday spirit.', [vivaldiWinter, childrensCorner4, nutcracker, chopinEtude25_11, letItGo, beethovenSonata17], 70, 150, winter],
    ['Shadow of Shostakovich', 'Learn how the genius of Dmitri Shostakovich prevailed over political oppression and heavy tragedy and was still able to find hope, humor, and humanity in the dark times of the 20th century.', [shostakovichPreludeFugue24, fantasticDances, shostakovichSonata2, shostakovichPreludes34, shostakovichSymphony5_4], 80, 200, shostakovichPortrait],
    ['Traveling Musician', 'Take a tour of the world with the colorful imaginations and impressions of different parts of the world by different creative minds.', [wanderersFantasy, pilgrimage3_4, dvorakSymphony9Finale, islamey, ahnbenton76, americanInParis], 70, 175, traveling],
    ['Ukrainian Resistance 1', 'Stand with the brave people of Ukraine by immersing yourself in this program of composers of Ukraine: from the father of Ukrainian music to currently living composers, to those who were impacted by Ukrainian culture.', [tarasBulbaOverture, kitschMusyka, revutskyPreludes7, ahnbenton99, skorykBurleska, lyatoshynskyPreludes, kosenkoSonata2], 75, 175, ukraineResistance1],
    ['Ukrainian Resistance 2', 'Continue your Ukrainian journey and explore how the Ukrainian people and culture withstood hundreds of years of oppression, and how they continue to resist occupation and fight for their independence.', [ukrainianSuite1, bortkevychMorceaux, skorykPartita5, shamoToccata, revutskyPieces17, kosenkoSonata3, skorykMelodia], 65, 125, ukraineResistance2],
    ['Valentine\'s Day Special 1', 'Enjoy a romantic dinner or a couple\'s dance with your loved one while listening to some of the most beloved romances of classical music.', [ahnbenton64_2, pasDeDeux, chopinBallade3, canYouFeelTheLoveTonight, liebestraum, loveMeTender, mascagniIntermezzo, weddingMarch, isoldesLiebestod, ahnbenton87], 60, 125, valentine1],
    ['Valentine\'s Day Special 2', 'Follow a lifecycle of love with this wordless musical storyline that tells how love evolves from butterflies in the stomach to full-blown passion to a mere ghost of a memory.', [salutDamour, chopinGiovanni, eros, bridalMarch, cantHelpFallingInLove, weddingMarch, aWholeNewWorld, vienneseDances, chopinBallade2, ahnbenton87], 65, 150, valentine2],
    ['Valentine\'s Day Special 3', 'Explore the more innocent side of love with this collection of youthful, hope-filled romances.', [widmung, beautyAndTheBeast, pilgrimage2_1, flowerSong, prokofievCinderella, beethovenSonata30], 55, 100, valentine3],
    ['Women Power', 'Celebrate the power of women and help raise their voices with some of the greatest female composers to ever exist. Perfect birthday or Mother\'s Day gift for any musically interested woman in your life!', [chaminadeBallade, balkanVariations, claraSchumannScherzo2, bonisBarcarolle, dasJahr], 85, 175, womenPower],
    ['Zookeeper 1', 'Immerse yourself in a land of famous animals of music: from a cat that inspired an epic fugue to a bumblebee that begot one of the most virtuosic piano pieces ever composed.', [swanLakeTheme, miroirs2, poule, images6, chopinEtude25_2, beethovenSonata25, scarlatti30, chopinEtude25_9, lark, cygne, ahnbenton91, bumblebee], 60, 125, zookeeper1],
    ['Zookeeper 2', 'Add more musical animals to your collection - birds in springtime, a dancing cuckoo, a big bad wolf, a dog chasing its own tail, a violently racing horse, and many more!', [vivaldiSpring, etudeTableau39_2, chopinWaltz64_1, picturesBydlo, forelle, picturesUnhatched, annaKarenina, chopinEtude25_3, miroirs1, cuckooWaltz, etudeTableau39_6, carnavalDesAnimaux], 55, 100, zookeeper2],
]

const concertObjs = availableConcerts.map(concert => new Concert ('Ahn-Benton, Jae', concert[0], concert[1], concert[2], concert[3], concert[4], concert[5]))
let tdStyle = 'border border-stone-200 text-center py-1'
let btnStyle = 'w-1/2 lg:w-3/4 border border-stone-200 rounded-xl p-2 m-3 hover:bg-amber-400 hover:text-stone-800'
let modalStyle = 'absolute w-full lg:w-3/4 lg:left-[12.5%] border border-stone-200 flex flex-col justify-center items-center bg-stone-700 rounded-3xl'
let liStyle = 'my-4'
let divStyle = 'w-full lg:w-11/12 mx-auto flex'
let labelStyle = 'w-1/3 lg:w-1/2 text-right m-2'
let inputStyle = 'w-2/3 lg:w-1/2 text-left m-2 p-1 bg-stone-200 text-stone-800 rounded-lg'

export default function MobilePianoConcertSeriesPage({ isMenuOpen, allMusicians, loginStatus, states, scrollToTop }) {
    const [showDetails, setShowDetails] = useState(false)
    const [showScheduleModal, setShowScheduleModal] = useState(false)
    const [currentConcert, setCurrentConcert] = useState(concertObjs[0])
    const [concertRequestData, setConcertRequestData] = useState({
        clientEmail: '',
        musicianEmail: '',
        eventName: '',
        eventLocation: {
            locationName: '',
            address: '',
            city: '',
            state: '',
            zipCode: 0,
        },
        eventDate: new Date(),
        eventStartTime: '',
        eventEndTime: '',
        requestedRepertoire: [],
        additionalComments: '',
        status: 'pending',
    })

    function handleChange(evt) {
        setConcertRequestData({
            ...concertRequestData,
            [evt.target.name]: evt.target.value
        })
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        try {
            let [musicianLastName, musicianFirstName] = currentConcert.pianist.split(', ')
            sendEmail({
                requestType: 'MPCS',
                clientEmail: localStorage.getItem('email'),
                musicianEmail: allMusicians.find(musician => musician.lastName === musicianLastName && musician.firstName === musicianFirstName).email,
                eventName: currentConcert.title,
                eventLocation: {
                    locationName: concertRequestData.locationName,
                    address: concertRequestData.address,
                    city: concertRequestData.city,
                    state: concertRequestData.state,
                    zipCode: concertRequestData.zipCode,
                },
                eventDate: concertRequestData.eventDate,
                eventStartTime: concertRequestData.eventStartTime,
                eventEndTime: concertRequestData.eventEndTime,
                requestedRepertoire: currentConcert.program,
                additionalComments: concertRequestData.additionalComments,
                status: 'pending',
            })
            setConcertRequestData({
                clientEmail: '',
                musicianEmail: '',
                eventName: '',
                eventLocation: {
                    locationName: '',
                    address: '',
                    city: '',
                    state: '',
                    zipCode: 0,
                },
                eventDate: new Date(),
                eventStartTime: '',
                eventEndTime: '',
                requestedRepertoire: [],
                additionalComments: '',
                status: 'pending',
            })
            alert('Successfully sent concert request! The musician will contact you directly regarding this concert.')
        } catch(err) {
            console.log(err)
            alert('Failed to send concert request. Please try again later.')
        }
    }

    return (
        <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} relative font-poppins`}>
            {currentConcert.pianist
            ? <div className={`${showDetails ? 'z-50' : 'hidden'} ${modalStyle} overflow-y-auto py-6 h-[40%]`}>
                <p className="text-lg lg:text-3xl py-12 font-bold text-center">{currentConcert.title}</p>
                <p className="italic my-2">presented by</p>
                <p>{`${currentConcert.pianist.split(', ')[1]} ${currentConcert.pianist.split(', ')[0]}`}, piano</p>
                <img className="border border-stone-200 rounded-xl w-1/2 my-5" src={currentConcert.poster} alt='poster'/>
                <div className="w-11/12 mx-auto my-5">{currentConcert.description}</div>
                <div className="border border-stone-200 rounded-xl w-11/12 bg-stone-500">
                    <p className="text-xl underline text-center my-2">Program</p>
                    {currentConcert.program.map(opus => <div key={opus[0] + opus[1]} className="flex justify-between my-1 p-1 text-xs">
                        <p className="w-1/2">{opus[0]}</p>
                        <p className="w-1/3">{opus[1]}</p>
                    </div>)}
                </div>
                <p className="mt-3">Approximate Duration: <span className="font-bold">{currentConcert.duration} minutes</span></p>
                <p className="mb-3">Base Price: <span className="font-bold">${currentConcert.basePrice}</span></p>
                <div className="text-center">
                    <button className={btnStyle} onClick={() => {
                        if (loginStatus) {
                            setShowDetails(false)
                            setShowScheduleModal(true)
                            scrollToTop()
                        } else {
                            alert('Please log in to order a concert.')
                        }
                    }}>ADD THIS CONCERT TO CART</button>
                    <button className={btnStyle} onClick={() => {
                        setShowDetails(false)
                    }}>CLOSE</button>
                </div>
            </div>
            : ''}
            <section className={`${showScheduleModal ? 'z-50' : 'hidden'} ${modalStyle} lg:h-[75%]`}>
                {/* place for client to request date, time, location, audience size, snacks, comments (change in rep), etc. */}
                <form onSubmit={handleSubmit} className="lg:w-11/12 mx-auto my-12 flex flex-col justify-center items-center">
                    <div className={divStyle}>
                        <label htmlFor="musician" className={labelStyle}>Requested musician:</label>
                        <input
                            name='musician'
                            id='musician'
                            className={inputStyle}
                            defaultValue={currentConcert.pianist}
                            disabled
                        />
                    </div>
                    <div className={divStyle}>
                        <label htmlFor="eventName" className={labelStyle}>Event Name:</label>
                        <input
                            name='eventName'
                            id='eventName'
                            className={inputStyle}
                            defaultValue={currentConcert.title}
                            disabled
                        />
                    </div>
                    <section className="w-full my-4">
                        <p className="text-center underline text-xl">Event location</p>
                        <div className={divStyle}>
                            <label htmlFor="locationName" className={labelStyle}>Location Name:</label>
                            <input
                                name='locationName'
                                id='locationName'
                                className={inputStyle}
                                defaultValue={concertRequestData.eventLocation.locationName}
                                placeholder="Location Name"
                                onChange={handleChange}
                            />
                        </div>
                        <div className={divStyle}>
                            <label htmlFor="address" className={labelStyle}>Address:</label>
                            <input
                                name='address'
                                id='address'
                                className={inputStyle}
                                defaultValue={concertRequestData.eventLocation.address}
                                placeholder="Location Address"
                                onChange={handleChange}
                            />
                        </div>
                        <div className={divStyle}>
                            <label htmlFor="city" className={labelStyle}>City:</label>
                            <input
                                name='city'
                                id='city'
                                className={inputStyle}
                                defaultValue={concertRequestData.eventLocation.city}
                                placeholder="City"
                                onChange={handleChange}
                            />
                        </div>
                        <div className={divStyle}>
                            <label htmlFor="state" className={labelStyle}>State:</label>
                            <select
                                name="state"
                                id="state"
                                className={`text-stone-800 ${inputStyle}`}
                                defaultValue={0}
                                onChange={handleChange}
                            >
                                <option value="0" disabled>Choose a state</option>
                                {states.map(state => <option key={state} value={state}>{state}</option>)}
                            </select>
                        </div>
                        <div className={divStyle}>
                            <label htmlFor="zipCode" className={labelStyle}>Zip Code:</label>
                            <input
                                name='zipCode'
                                type='number'
                                id='zipCode'
                                className={inputStyle}
                                defaultValue={concertRequestData.eventLocation.zipCode}
                                placeholder="Zip Code"
                                onChange={handleChange}
                            />
                        </div>
                    </section>
                    <div className={divStyle}>
                        <label htmlFor="eventDate" className={labelStyle}>Event Date:</label>
                        <input
                            name='eventDate'
                            type='date'
                            id='eventDate'
                            className={inputStyle}
                            defaultValue={concertRequestData.eventDate}
                            placeholder={new Date()}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={divStyle}>
                        <label htmlFor="eventStartTime" className={labelStyle}>Event Start Time:</label>
                        <input
                            name='eventStartTime'
                            type='time'
                            id='eventStartTime'
                            className={inputStyle}
                            defaultValue={concertRequestData.eventStartTime}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={divStyle}>
                        <label htmlFor="eventEndTime" className={labelStyle}>Event End Time:</label>
                        <input
                            name='eventEndTime'
                            type='time'
                            id='eventEndTime'
                            className={inputStyle}
                            defaultValue={concertRequestData.eventEndTime}
                            onChange={handleChange}
                        />
                    </div>
                    <p className='text-center underline text-xl my-6 '>Requested Repertoire</p>
                    <div className='w-11/12 mx-auto'>
                        {currentConcert.program.map(opus => <div key={opus} className="flex p-2 rounded-xl bg-stone-700">
                            <p className="w-2/3">{opus[0]}</p>
                            <p className="w-1/3">{opus[1]}</p>
                        </div>)}
                    </div>
                    <p className="text-center my-5">Total price: ${currentConcert.basePrice}</p>
                    <div className={divStyle}>
                        <label htmlFor="additionalComments" className={labelStyle + ' min-h-[30vh]'}>Additional Comments:</label>
                        <textarea
                            name="additionalComments"
                            id="additionalComments"
                            className={inputStyle}
                            defaultValue={concertRequestData.additionalComments}
                            onChange={handleChange}
                        />
                    </div>
                    <input type="hidden" name="status" value="pending"/>
                    <input type="submit" value="SUBMIT REQUEST" className={btnStyle + ' cursor-pointer'} onClick={() => setShowScheduleModal(false)}/>
                    <button className={btnStyle} onClick={() => setShowScheduleModal(false)}>CLOSE</button>
                </form>
            </section>
            <h1 className={`${showDetails ? 'z-0 opacity-5' : ''} text-center text-3xl my-24`}>GLVMS Mobile Piano Concert Series</h1>
            <p className={`${showDetails ? 'z-0 opacity-5' : ''} w-11/12 mx-auto text-lg`}>Bring a professional classical piano performance right to your doorstep! Simply pick a concert from the menu below, and request a date, time, and location. Once confirmed by GLVMS and payment is made, the designated pianist will show up at your location at the specified date and time, and will perform the requested concert. That's it! No hassle, no confusion.</p>
            <table className={`${showDetails ? 'z-0 opacity-5' : ''} border border-stone-200 w-11/12 mx-auto mb-12 table-fixed my-12 text-xs lg:text-base`}>
                <thead>
                    <tr className="font-bold border border-stone-200 bg-gradient-to-r from-green-950 via-green-700 to-green-950" >
                        <td className={tdStyle + ' w-[25%] lg:w-[20%]'}>Pianist</td>
                        <td className={tdStyle + ' w-[35%] lg:w-[45%]'}>Title</td>
                        <td className={tdStyle + ' w-[25%] lg:w-[20%]'}>Approximate Duration</td>
                        <td className={tdStyle + ' w-[15%] lg:w-[10%]'}>Base Price</td>
                    </tr>
                </thead>
                <tbody>
                    {concertObjs.map(concert => <tr key={concert.title} className="hover:bg-gradient-to-r from-green-950 via-green-700 to-green-950 hover:cursor-pointer" onClick={() => {
                        setShowDetails(true)
                        setCurrentConcert(concert)
                        scrollToTop()
                    }}>
                        <td className={tdStyle}>{concert.pianist}</td>
                        <td className={tdStyle}>{concert.title}</td>
                        <td className={tdStyle}>{concert.duration} minutes</td>
                        <td className={tdStyle}>${concert.basePrice}</td>
                    </tr>)}
                </tbody>
            </table>
            <aside className={`${showDetails ? 'z-0 opacity-5' : ''} w-11/12 mx-auto`}>
                <p className="text-2xl underline text-center my-6">Disclaimers</p>
                <ul className="list-disc list-inside text-sm mb-10">
                    <li className={liStyle}>These mobile concerts are primarily designed for intimate home settings, either completely private just for 1 person, or up to an audience size of 10 people. They are not recommended for large audiences or for the general public. For large-scale performance requests, please visit the main GLVMS repertoire page <Link to="/repertoire" className="underline hover:text-amber-600">here</Link>.</li>
                    <li className={liStyle}>Light snacks and/or ambience lighting may be added for your enjoyment during the concert for a small fee.</li>
                    <li className={liStyle}>No piano at home? No problem. Our pianist will bring a fully functional electric keyboard.</li>
                    <li className={liStyle}>Please allow up to 15 minutes of setup and strike-down time before and after the requested performance timeframe.</li>
                    <li className={liStyle}>A travel fee ranging from $5 to $25 may apply depending on the requested location within the greater Las Vegas area. Additional fees may apply for performance requests outside of the greater Las Vegas area.</li>
                    <li className={liStyle}>Repertoire substitutions may be allowed upon request. Additional fees may apply.</li>
                </ul>
            </aside>
        </main>
    )
}