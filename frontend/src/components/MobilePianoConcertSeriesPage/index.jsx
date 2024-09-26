import { useState } from "react"
import { Link } from "react-router-dom"
import allAmerican1 from '../../assets/mpcs-all-american-1.jpg'
import ballroom1 from '../../assets/mpcs-dance-floor-1.jpg'
import ballroom2 from '../../assets/mpcs-dance-floor-2.jpg'
import ballroom3 from '../../assets/mpcs-ballroom-3.jpg'
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
import valentine2 from '../../assets/mpcs-valentine-2.png'
import halloween1 from '../../assets/mpcs-halloween-1.png'
import halloween2 from '../../assets/mpcs-halloween-2.png'
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
import remembrance from '../../assets/mpcs-remembrance.jpg'

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

const ahnbenton1 = ['Minuetto e Trio in E major, Op. 1', 'Jae Young Ahn-Benton']
const ahnbenton7 = ['Scherzetto No. 3 "A Sad Clown\'s Day"', 'Jae Young Ahn-Benton']
const ahnbenton11_2_3 = ['"Ghost of Halloween" from "Sonatina in G major, Op. 11, No. 2"', 'Jae Young Ahn-Benton']
const ahnbenton15_1 = ['Etude in D-flat major, Op. 15, No. 1 "Water"', 'Jae Young Ahn-Benton']
const ahnbenton15_2 = ['Etude in F-sharp minor, Op. 15, No. 2 "Earth"', 'Jae Young Ahn-Benton']
const ahnbenton15_3 = ['Etude in G minor, Op. 15, No. 3 "Fire"', 'Jae Young Ahn-Benton']
const ahnbenton15_4 = ['Etude in F-sharp major, Op. 15, No. 4 "Air"', 'Jae Young Ahn-Benton']
const ahnbenton28 = ['2 Scherzi, Op. 28 "Halloween Mischief"', 'Jae Young Ahn-Benton']
const ahnbenton64_2 = ['A Letter to You, Op. 64, No. 2', 'Jae Young Ahn-Benton']
const ahnbenton79_4 = ['"Lamentation" from "Sonata No. 7 in C-sharp minor, Op. 79"', 'Jae Young Ahn-Benton']
const ahnbenton87 = ['Reminiscence, Op. 87', 'Jae Young Ahn-Benton']
const ahnbenton91 = ['Variations on "The Haunted Mouse" by Faber, Op. 91', 'Jae Young Ahn-Benton']
const ahnbenton96 = ['Variations on "In the Garden" by Maykapar, Op. 96', 'Jae Young Ahn-Benton']
const ahnbenton99 = ['Theme and Variations, Op. 99 "Impressions of Ukraine"', 'Jae Young Ahn-Benton']
const arabianDance = ['Arabian Dance from "The Nutcraker"', 'Piotr Tchaikovsky']
const aWholeNewWorld = ['"A Whole New World" from "Aladdin" (arr. Ahn-Benton)', 'Alan Menken']
const babadjanianElegy = ['Elegy in G minor', 'Arno Babadjanian']
const bachAir = ['"Air" from "Orchestral Suite No. 3" (arr. Martucci)', 'Johann Sebastian Bach']
const bachChaconne = ['Transcription of J.S. Bach\'s "Chaconne"', 'Ferruccio Busoni']
const bachPartita2 = ['Partita No. 2 in C minor', 'Johann Sebastian Bach']
const bachPartita6 = ['Partita No. 6 in E minor', 'Johann Sebastian Bach']
const bachToccata = ['Transcription of J.S. Bach\'s "Toccata and Fugue in D minor"', 'Ferruccio Busoni']
const bachWTC1_1_1 = ['"Prelude" from "Prelude and Fugue in C major, WTC 1"', 'Johann Sebastian Bach']
const bachWTC1_1 = ['Prelude and Fugue in C major, WTC 1', 'Johann Sebastian Bach']
const beethovenBagatelles33 = ['6 Bagatelles, Op. 33', 'Ludwig van Beethoven']
const beethovenMinuet = ['Minuet in G major', 'Ludwig van Beethoven']
const beethovenRondo = ['Rondo a capriccio, Op. 129', 'Ludwig van Beethoven']
const beethovenSonata1_2 = ['"Adagio" from "Sonata No. 1 in F minor"', 'Ludwig van Beethoven']
const beethovenSonata8 = ['Sonata No. 8 in C minor "Pathétique", Op. 13', 'Ludwig van Beethoven']
const beethovenSonata14 = ['Sonata No. 14 in C-sharp minor "Moonlight"', 'Ludwig van Beethoven']
const beethovenSonata14_1 = ['"Adagio sostenuto" from "Sonata No. 14 in C-sharp Minor"', 'Ludwig van Beethoven']
const beethovenSonata15 = ['Sonata No. 15 in D major "Pastoral"', 'Ludwig van Beethoven']
const beethovenSonata17 = ['Sonata No. 17 in D minor "Tempest"', 'Ludwig van Beethoven']
const beethovenSonata23 = ['Sonata No. 23 in F minor "Appassionata", Op. 57', 'Ludwig van Beethoven']
const beethovenSonata25 = ['Sonata No. 25 in G major, Op. 79 "Cuckoo"', 'Ludwig van Beethoven']
const blueDanube = ['Blue Danube Waltz', 'Johann Strauss II']
const blumenlied = ['Blumenlied, Op. 39', 'Gustav Lange']
const bozzaAria = ['Aria (arr. Ahn-Benton)', 'Eugene Bozza']
const brahmsHandel = ['Variations on a Theme by Händel, Op. 24', 'Johannes Brahms']
const brahmsIntermezzo118_2 = ['Intermezzo, Op. 118, No. 2', 'Johannes Brahms']
const brahmsLullaby = ['Wiegenlied, Op. 49, No. 4', 'Johannes Brahms']
const brahmsPaganini1 = ['Paganini Variations, Op. 35, No. 1', 'Johannes Brahms']
const brahmsSonata1 = ['Sonata No. 1 in C major, Op. 1', 'Johannes Brahms']
const bridalMarch = ['Bridal March (arr. Liszt)', 'Richard Wagner']
const bumblebee = ['The flight of the bumblebee (arr. Cziffra)', 'Nikolai Rimsky-Korsakov']
const campanella = ['La Campanella', 'Franz Liszt']
const canon = ['Canon in D (arr. Ahn-Benton)', 'Johann Pachelbel']
const cantHelpFallingInLove = ['"Can\'t help falling in love" (arr. Ahn-Benton)', 'Elvis Preesley']
const canYouFeelTheLoveTonight = ['Can You Feel the Love Tonight (arr. Ahn-Benton)', 'Elton John']
const carmenVariations = ['Carmen variations', 'Vladimir Horowitz']
const carmenSelections = ['Selections from "Carmen"', 'Georges Bizet']
const carnaval = ['Carnaval, Op. 9', 'Robert Schumann']
const chansonTriste = ['Chanson triste', 'Vasily Kalinnikov']
const chopinBallade1 = ['Ballade No. 1 in G minor, Op. 23', 'Frederic Chopin']
const chopinBallade2 = ['Ballade No. 2 in F major, Op. 38', 'Frederic Chopin']
const chopinBallade3 = ['Ballade No. 3 in A-flat major', 'Frederic Chopin']
const chopinBerceuse = ['Berceuse, Op. 57', 'Frederic Chopin']
const chopinBarcarolle = ['Barcarolle, Op. 60', 'Frederic Chopin']
const chopinFuneral = ['"Funeral March" from "Sonata No. 2 in B-flat minor, Op. 35"', 'Frederic Chopin']
const chopinGiovanni = ['Variations on "Là ci darem la mano"', 'Frederic Chopin']
const chopinEtude10_1 = ['Etude in C major, Op. 10, No. 1 "Waterfall"', 'Frederic Chopin']
const chopinEtude25_1 = ['Etude in A-flat major, Op. 25, No. 1 "Aeolian Harp"', 'Frederic Chopin']
const chopinEtude25_2 = ['Etude in F minor, Op. 25, No. 2 "Bees"', 'Frederic Chopin']
const chopinEtude25_7 = ['Etude in C-sharp minor, Op. 25, No. 7 "Cello"', 'Frederic Chopin']
const chopinEtude25_9 = ['Etude in G-flat major, Op. 25, No. 9 "Butterfly"', 'Chopin, Frederic Chopin']
const chopinEtude25_11 = ['Etude in A minor, Op. 25, No. 11 "Winter Wind"', 'Frederic Chopin']
const chopinEtude25_12 = ['Etude in C minor, Op. 25, No. 12 "Ocean"', 'Frederic Chopin']
const chopinMazurka6_1 = ['Mazurka in F-sharp minor, Op. 6, No. 1', 'Frederic Chopin']
const chopinMazurka7_1 = ['Mazurka in A minor, Op. 17, No. 4', 'Frederic Chopin']
const chopinMazurka17_4 = ['Mazurka in B-flat major, Op. 7, No. 1', 'Frederic Chopin']
const chopinMazurkas17 = ['4 Mazurkas, Op. 17', 'Frederic Chopin']
const chopinNocturne9_2 = ['Nocturne in E-flat major, Op. 9, No. 2', 'Frederic Chopin']
const chopinNocturne27_1 = ['Nocturne in C-sharp minor, Op. 27, No. 1', 'Frederic Chopin']
const chopinNocturnes48 = ['2 Nocturnes, Op. 48', 'Frederic Chopin']
const chopinNocturne48_1 = ['Nocturne in C minor, Op. 48, No. 1', 'Frederic Chopin']
const chopinPolonaise53 = ['Polonaise in A-flat major, Op. 53 "Heroic"', 'Frederic Chopin']
const chopinScherzo4 = ['Scherzo No. 4 in E major, Op. 54', 'Frederic Chopin']
const chopinWaltz18 = ['Waltz in E-flat major, Op. 18', 'Frederic Chopin']
const chopinWaltzes70 = ['3 Waltzes, Op. 70', 'Frederic Chopin']
const chromaticFantasy = ['Chromatic Fantasy and Fugue', 'Johann Sebastian Bach']
const clairDeLune = ['Clair de lune', 'Claude Debussy']
const consolation3 = ['Consolation No. 3 in D-flat major', 'Franz Liszt']
const cygne = ['Le cygne', 'Camille Saint-Saëns']
const danseMacabre = ['Danse macabre (arr. Liszt)', 'Camille Saint-Saëns']
const danzaCriolla = ['Danza criolla', 'Alberto Ginastera']
const danzaRitualDelFugeo = ['Danza ritual del fuego', 'Manuel de Falla']
const danzasArgentinas = ['Danzas argentinas', 'Alberto Ginastera']
const debussyReverie = ['Rêverie', 'Claude Debussy']
const dvorakHumoresque = ['Humoresque in G-flat major, Op. 101, No. 7', 'Antonin Dvořák']
const dvorakLargo = ['"Largo" from "New World Symphony" (arr. Juon)', 'Antonin Dvořák']
const entertainer = ['The entertainer', 'Scott Joplin']
const erdasWarning = ['Erda\'s Warning from "Das Rheingold" (arr. Ahn-Benton)', 'Richard Wagner']
const eros = ['"Eros" from "3 morceaux, Op. 24"', 'Sergei Bortkevych']
const estampes3 = ['Jardins sous la pluie from "Estampes"', 'Claude Debussy']
const etudeTableau33_5 = ['Etude-Tableau in E-flat minor, Op. 33, No. 5', 'Sergei Rachmaninov']
const etudeTableau39_1 = ['Etude-Tableau in C minor, Op. 39, No. 1', 'Sergei Rachmaninov']
const etudeTableau39_2 = ['Etude-Tableau in A minor, Op. 39, No. 2', 'Sergei Rachmaninov']
const etudeTableau39_5 = ['Etude-Tableau in E-flat minor, Op. 39, No. 5', 'Sergei Rachmaninov']
const etudeTableau39_6 = ['Etude-Tableau in A minor, Op. 39, No. 6', 'Sergei Rachmaninov']
const fantaisieImpromptu = ['Fantaisie-Impromptu, Op. 66', 'Frederic Chopin']
const fantasticDances = ['Fantastic Dances, Op. 5', 'Dmitri Shostakovich']
const faurePavane = ['Pavane', 'Gabriel Faure']
const figaroOverture = ['Overture from "Le nozze di Figaro"', 'Wolfgang Amadeus Mozart']
const firebird = ['The Firebird', 'Igor Stravinsky']
const flowerSong = ['"Flower Song" from "Carmen" (arr. Ahn-Benton)', 'Georges Bizet']
const forzaOverture = ['Overture from "La forza del destino"', 'Giuseppe Verdi']
const furElise = ['Für Elise', 'Ludwig van Beethoven']
const erlkonig = ['Erlkönig (arr. Liszt)', 'Franz Schubert']
const excursions = ['Excursions, Op. 20', 'Samuel Barber']
const gaspard3 = ['"Scarbo" from "Gaspard de la nuit"', 'Maurice Ravel']
const gershwinPrelude2 = ['Prelude No. 2', 'George Gershwin']
const ginasteraPastorale = ['Pastorale', 'Alberto Ginastera']
const giovanniOverture = ['Overture from "Don Giovanni"', 'Wolfgang Amadeus Mozart']
const halloweenTheme = ['Theme from "Halloween" (arr. Ahn-Benton)', 'John Carpenter']
const harryPotterSelections = ['Selections from "Harry Potter" (arr. Ahn-Benton)', 'John Williams']
const hungarianDance5 = ['Hungarian Dance No. 5', 'Johannes Brahms']
const hungarianRhapsody2 = ['Hungarian Rhapsody No. 2', 'Franz Liszt']
const images6 = ['Poissons d\'or', 'Claude Debussy']
const isleOfTheDead = ['Isle of the Dead, Op. 29 (arr. Kirkor)', 'Sergei Rachmaninov']
const isoldesLiebestod = ['Isoldes Liebestod (arr. Liszt)', 'Richard Wagner']
const jeuxDeau = ['Jeux d\'eau', 'Maurice Ravel']
const kitschMusyka = ['Kitsch-Musyka', 'Valentin Silvestrov']
const kosenkoSonata2 = ['Sonata No. 2 in C-sharp minor', 'Viktor Kosenko']
const lark = ['The Lark (arr. Balakirev)', 'Mikhael Glinka']
const libertango = ['Libertango (arr. Ahn-Benton)', 'Astor Piazzolla']
const liebestraum = ['Liebestraum No. 3', 'Franz Liszt']
const lilacs = ['Lilacs', 'Sergei Rachmaninov']
const lisztBallade2 = ['Ballade No. 2 in B minor', 'Franz Liszt']
const lisztFigaro = ['Fantasy on Themes from Mozart\'s "Le nozze di Figaro"', 'Franz Liszt']
const lisztPastorale = ['"Pastorale" from "Années de Pélérinage"', 'Franz Liszt']
const lisztRigoletto = ['Rigoletto-Paraphrase', 'Franz Liszt']
const lisztSonata = ['Sonata in B minor', 'Franz Liszt']
const loveMeTender = ['Love Me Tender (arr. Ahn-Benton)', 'Elvis Presley']
const lyatoshynskyPreludes = ['5 Preludes', 'Boris Lyatoshynsky']
const mapleLeafRag = ['Maple Leaf Rag', 'Scott Joplin']
const mascagniIntermezzo = ['"Intermezzo" from "Cavalleria Rusticana"', 'Pietro Mascagni']
const mephisto = ['Mephisto Waltz No. 1', 'Franz Liszt']
const mer = ['La mer (arr. Garban)', 'Claude Debussy']
const miroirs2 = ['Oiseaux tristes', 'Maurice Ravel']
const miroirs3 = ['Une barque sur l\'ocean', 'Maurice Ravel']
const miroirs4 = ['Alborada del gracioso', 'Maurice Ravel']
const mozartAdagio = ['Adagio in B minor, K. 540', 'Wolfgang Amadeus Mozart']
const mozartSonata8 = ['Piano Sonata No. 8 in A minor', 'Wolfgang Amadeus Mozart']
const mozartSonata12 = ['Piano Sonata No. 12 in F major', 'Wolfgang Amadeus Mozart']
const mozartVariations = ['12 Variations on "Ah vous dirai-je, Maman"', 'Wolfgang Amadeus Mozart']
const oblivion = ['Oblivion (arr. Ahn-Benton)', 'Astor Piazzolla']
const orage = ['Orage', 'Franz Liszt']
const pasDeDeux = ['"Pas de deux" from "The Nutcracker"', 'Piotr Tchaikovsky']
const passacagliaFugue = ['Passacaglia and Fugue (arr. d\'Albert)', 'Johann Sebastian Bach']
const petrushka = ['Petrushka', 'Igor Stravinsky']
const pilgrimage2_2 = ['Années de pélérinage, Italie - Venezia', 'Franz Liszt']
const poule = ['La poule', 'Jean-Philippe Rameau']
const preludeFugueVariation = ['Prelude, Fugue, and Variation, Op. 18', 'César Franck']
const rachmaninovElegy = ['Elegie in E-flat minor, Op. 3, No. 1', 'Sergei Rachmaninov']
const rachmaninovMusical16_3 = ['Moment musical in B minor, Op. 16, No. 3', 'Sergei Rachmaninov']
const rachmaninovMusical16_4 = ['Moment musical in E minor, Op. 16, No. 4', 'Sergei Rachmaninov']
const rachmaninovPrelude3_2 = ['Prelude in C-sharp minor, Op. 3, No. 2', 'Sergei Rachmaninov']
const rachmaninovPrelude23_5 = ['Prelude in G minor, Op. 23, No. 5', 'Sergei Rachmaninov']
const rachmaninovPrelude32_10 = ['Prelude in B minor, Op. 32, No. 10', 'Sergei Rachmaninov']
const rachmaninovSonata2 = ['Sonata No. 2 in B-flat minor, Op. 36', 'Sergei Rachmaninov']
const radetzky = ['Radetzky March', 'Johann Strauss II']
const ravelPavane = ['Pavane pour une infante defunte', 'Maurice Ravel']
const revutskyPreludes7 = ['2 Preludes, Op. 7', 'Lev Revutsky']
const rhapsodyInBlue = ['Rhapsody in Blue', 'George Gershwin']
const romanianFolkDances = ['Romanian folk dances', 'Bela Bartok']
const sabreDance = ['Transcription of Khachaturian\'s "Sabre Dance"', 'Gyorgy Cziffra']
const salutDamour = ['Salut d\'amour, Op. 12', 'Edward Elgar']
const scaramouche = ['Scaramouche (arr. Ahn-Benton)', 'Darius Milhaud']
const scarlatti30 = ['Sonata No. 30 in G minor "Cat Fugue"', 'Scarlatti, Domenico Scarlatti']
const scarlatti87 = ['Sonata No. 87 in B minor', 'Domenico Scarlatti']
const shostakovichPreludeFugue24 = ['Prelude and Fugue in D minor, Op. 87, No. 24', 'Dmitri Shostakovich']
const shostakovichPreludes34 = ['24 Preludes, Op. 34', 'Dmitri Shostakovich']
const shostakovichSonata2 = ['Piano Sonata No. 2, Op. 61', 'Dmitri Shostakovich']
const shostakovichSymphony5_4 = ['"Allegro non troppo" from "Symphony No. 5, Op. 47"', 'Dmitri Shostakovich']
const silveryWaves = ['Silvery Waves', 'Addison Wyman']
const skorykBurleska = ['Burleska', 'Myroslav Skoryk']
const solveig = ['Solveigs Sang', 'Edvard Grieg']
const songbookSelections = ['Selections from the Songbook', 'George Gershwin']
const starsStripes = ['Stars and Stripes Forever (arr. Horowitz)', 'John Philip Sousa']
const sugarPlumFairy = ['"Dance of the Sugar Plum Fairy" from "The Nutcracker"', 'Piotr Tchaikovsky']
const swanLakeTheme = ['Theme from "Swan Lake"', 'Piotr Tchaikovsky']
const tarantella = ['Tarantella', 'Franz Liszt']
const tarasBulbaOverture = ['Overture from "Taras Bulba"', 'Mykola Lysenko']
const tchaikovskyJune = ['"June" from "The Seasons, Op. 37"', 'Piotr Tchaikovsky']
const thaisMeditation = ['"Meditation" from "Thaïs" (arr. Ahn-Benton)', 'Jules Massenet']
const totentanz = ['Totentanz (arr. Ahn-Benton)', 'Franz Liszt']
const transcendental6 = ['"Feux follets"', 'Franz Liszt']
const traumerei = ['Träumerei', 'Robert Schumann']
const triste = ['Triste', 'Alberto Ginastera']
const valseGrotesque = ['"Valse grotesque" from "3 morceaux, Op. 24"', 'Sergei Bortkevych']
const versLaFlamme = ['Vers la flamme', 'Aleksandr Scriabin']
const vienneseDances = ['3 Viennese Dances (arr. Ahn-Benton)', 'Fritz Kreisler']
const vivaldiSpring = ['"Spring" from "The Four Seasons" (arr. Ahn-Benton)', 'Antonio Vivaldi']
const vivaldiWinter = ['"Winter" from "The Four Seasons" (arr. Ahn-Benton)', 'Antonio Vivaldi']
const vocalise = ['Vocalise, Op. 34, No. 14 (arr. Ahn-Benton)', 'Sergei Rachmaninov']
const volodosTurkish = ['Concert Paraphrase on Mozart\'s "Turkish March"', 'Arcadi Volodos']
const waltzOfFlowers = ['Waltz of the Flowers from "The Nutcracker"', 'Piotr Tchaikovsky']
const weddingMarch = ['Transcription of Mendelssohn\'s "Wedding March"', 'Vladimir Horowitz']
const westSideStorySelections = ['Selections from "West Side Story" (arr. Ahn-Benton)', 'Leonard Bernstein']
const williamTellOverture = ['Overture from "Guillaume Tell" (arr. Liszt)', 'Gioachino Rossini']

const availableConcerts = [
    ['American Pride 1', [starsStripes, excursions, mapleLeafRag, westSideStorySelections, rhapsodyInBlue], 65, 150, allAmerican1],
    ['At the Carnival', [miroirs4, scaramouche, petrushka, sabreDance, ahnbenton7, carnaval], 75, 200, carnival],
    ['Ballroom 1', [chopinWaltz18, arabianDance, fantasticDances, mephisto, hungarianDance5, vienneseDances, oblivion, danzasArgentinas, carmenVariations], 55, 150, ballroom1],
    ['Ballroom 2', [waltzOfFlowers, romanianFolkDances, danseMacabre, sabreDance, chopinMazurka6_1, chopinMazurka7_1, chopinMazurka17_4, libertango, tarantella], 55, 150, ballroom2],
    ['Ballroom 3', [chopinPolonaise53, beethovenMinuet, bachPartita6, valseGrotesque, ahnbenton1, danzaCriolla, sugarPlumFairy, totentanz], 70, 150, ballroom3],
    ['Beethoven Blast', [beethovenSonata8, beethovenRondo, furElise, beethovenBagatelles33, beethovenSonata23], 70, 125, beethoven],
    ['Botanical Garden', [lilacs, ginasteraPastorale, blumenlied, beethovenSonata15, flowerSong, lisztPastorale, waltzOfFlowers, ahnbenton96], 60, 125, botanical],
    ['Chopin Cart', [chopinPolonaise53, chopinNocturnes48, chopinMazurkas17, chopinBarcarolle, chopinWaltzes70, chopinScherzo4], 65, 125, chopin],
    ['The Classics 1', [hungarianRhapsody2, salutDamour, dvorakHumoresque, clairDeLune, rachmaninovPrelude3_2, entertainer, canon, fantaisieImpromptu, vivaldiSpring, volodosTurkish], 65, 125, classics1],
    ['The Classics 2', [radetzky, furElise, liebestraum, tchaikovskyJune, thaisMeditation, mapleLeafRag, chopinNocturne9_2, rhapsodyInBlue], 55, 100, classics2],
    ['The Classics 3', [bachWTC1_1, beethovenSonata8, brahmsLullaby, chopinBallade1, blueDanube, vivaldiWinter, dvorakLargo, weddingMarch], 75, 150, classics3],
    ['Four Elements: Air & Earth', [beethovenSonata17, ahnbenton15_2, orage, erdasWarning, ahnbenton15_4, isleOfTheDead, chopinEtude25_11], 70, 150, airEarth],
    ['Four Elements: Water & Fire', [chopinEtude10_1, versLaFlamme, ahnbenton15_1, danzaRitualDelFugeo, estampes3, ahnbenton15_3, jeuxDeau, firebird], 60, 175, fireWater],
    ['Halloween Special 1', [bachToccata, beethovenSonata14, harryPotterSelections, halloweenTheme, ahnbenton28, chopinNocturne27_1, totentanz], 75, 175, halloween1],
    ['Halloween Special 2', [ahnbenton91, chopinNocturne48_1, transcendental6, isleOfTheDead, gaspard3, ahnbenton11_2_3, erlkonig, danseMacabre], 65, 150, halloween2],
    ['I\'ll Be Bach', [passacagliaFugue, bachAir, chromaticFantasy, bachPartita2, bachToccata], 60, 150, bach],
    ['Impostors and Thieves', [bachChaconne, bozzaAria, chopinEtude25_1, chopinEtude25_7, campanella, preludeFugueVariation, vivaldiWinter, vocalise, brahmsPaganini1], 75, 150, impostorsThieves],
    ['Lisztomania', [hungarianRhapsody2, consolation3, campanella, pilgrimage2_2, liebestraum ,lisztSonata], 75, 200, liszt],
    ['Lullaby Collection', [consolation3, beethovenSonata14_1, chopinBerceuse, clairDeLune, scarlatti87, traumerei, brahmsLullaby, beethovenSonata1_2, chopinNocturne9_2, debussyReverie, solveig, gershwinPrelude2, bachAir, triste, bachWTC1_1_1, chansonTriste, vocalise, salutDamour], 75, 100, lullaby],
    ['Mozart Mastermind', [giovanniOverture, mozartSonata12, mozartAdagio, mozartVariations, mozartSonata8, volodosTurkish], 75, 150, mozart],
    ['Ocean Waves', [silveryWaves, etudeTableau39_2, miroirs3, chopinEtude25_12, ahnbenton79_4, mer], 65, 125, ocean],
    ['The Opera House 1', [figaroOverture, isoldesLiebestod, carmenVariations, forzaOverture, songbookSelections, vocalise, lisztFigaro], 60, 150, opera1],
    ['The Opera House 2', [williamTellOverture, solveig, chopinGiovanni, mascagniIntermezzo, tarasBulbaOverture, carmenSelections, erlkonig, lisztRigoletto], 65, 150, opera2],
    ['Raisin Brahms', [brahmsSonata1, brahmsIntermezzo118_2, brahmsPaganini1, brahmsLullaby, hungarianDance5, brahmsHandel], 75, 175, brahms],
    ['Remembrance', [faurePavane, mozartSonata8, rachmaninovElegy, ravelPavane, bachChaconne, chopinFuneral, lisztBallade2, babadjanianElegy], 80, 125, remembrance],
    ['Rockin\' with Rachmaninov', [etudeTableau39_1, etudeTableau39_5, etudeTableau39_6, rachmaninovElegy, rachmaninovMusical16_3, rachmaninovMusical16_4, rachmaninovPrelude23_5, rachmaninovPrelude32_10, etudeTableau33_5, vocalise, rachmaninovSonata2], 75, 200, rachmaninov],
    ['Shadow of Shostakovich', [shostakovichPreludeFugue24, fantasticDances, shostakovichSonata2, shostakovichPreludes34, shostakovichSymphony5_4], 80, 200, shostakovich],
    ['Ukrainian Resistance', [tarasBulbaOverture, kitschMusyka, revutskyPreludes7, ahnbenton99, skorykBurleska, lyatoshynskyPreludes, kosenkoSonata2], 75, 175, ukraineResistance],
    ['Valentine\'s Day Special 1', [ahnbenton64_2, pasDeDeux, chopinBallade3, canYouFeelTheLoveTonight, liebestraum, loveMeTender, mascagniIntermezzo, weddingMarch, isoldesLiebestod, ahnbenton87], 60, 125, valentine1],
    ['Valentine\'s Day Special 2', [salutDamour, chopinGiovanni, eros, bridalMarch, cantHelpFallingInLove, weddingMarch, aWholeNewWorld, vienneseDances, chopinBallade2, ahnbenton87], 65, 150, valentine2],
    ['Zookeeper', [swanLakeTheme, miroirs2, poule, images6, chopinEtude25_2, beethovenSonata25, scarlatti30, chopinEtude25_9, lark, cygne, ahnbenton91, bumblebee], 60, 125, zookeeper],
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