import { useState } from "react"
import { Link } from "react-router-dom"
import allAmerican1 from '../../assets/mpcs-all-american-1.jpg'
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
import prokofiev from '../../assets/mpcs-prokofiev.jpeg'
import shostakovich from '../../assets/mpcs-shostakovich.jpeg'
import remembrance from '../../assets/mpcs-remembrance.jpg'
import traveling from '../../assets/mpcs-traveling.png'
import march from '../../assets/mpcs-march.png'
import meditation from '../../assets/mpcs-meditation.png'

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

const adiosNonino = ['Adios nonino (arr. Ahn-Benton)', 'Astor Piazzolla']
const ahnbenton1 = ['Minuetto e Trio in E major, Op. 1', 'Jae Young Ahn-Benton']
const ahnbenton3 = ['Bagatelle in F major, Op. 3 "Children\'s March"', 'Jae Young Ahn-Benton']
const ahnbenton5 = ['Sonatina No. 1 in C major, Op. 5 "The Weater"', 'Jae Young Ahn-Benton']
const ahnbenton6_3 = ['Prelude in C-sharp minor, Op. 6, No. 3 "Dance of the Barbarians"', 'Jae Young Ahn-Benton']
const ahnbenton6_4 = ['Prelude in C minor, Op. 6, No. 4 "Sorrow"', 'Jae Young Ahn-Benton']
const ahnbenton7 = ['Scherzetto No. 3 "A Sad Clown\'s Day"', 'Jae Young Ahn-Benton']
const ahnbenton10_3 = ['Prelude in C minor, Op. 10, No. 3 "Funeral March"', 'Jae Young Ahn-Benton']
const ahnbenton11_1 = ['Sonatina No. 2 in C minor', 'Jae Young Ahn-Benton']
const ahnbenton11_2 = ['Sonatina No. 3 in G major "The Holidays"', 'Jae Young Ahn-Benton']
const ahnbenton11_2_3 = ['"Ghost of Halloween" from "Sonatina in G major, Op. 11, No. 2"', 'Jae Young Ahn-Benton']
const ahnbenton13 = ['Scherzetto No. 5 in C minor, Op. 13 "Playful Ghosts"', 'Jae Young Ahn-Benton']
const ahnbenton15_1 = ['Etude in D-flat major, Op. 15, No. 1 "Water"', 'Jae Young Ahn-Benton']
const ahnbenton15_2 = ['Etude in F-sharp minor, Op. 15, No. 2 "Earth"', 'Jae Young Ahn-Benton']
const ahnbenton15_3 = ['Etude in G minor, Op. 15, No. 3 "Fire"', 'Jae Young Ahn-Benton']
const ahnbenton15_4 = ['Etude in F-sharp major, Op. 15, No. 4 "Air"', 'Jae Young Ahn-Benton']
const ahnbenton28 = ['2 Scherzi, Op. 28 "Halloween Mischief"', 'Jae Young Ahn-Benton']
const ahnbenton29 = ['2 Toccate, Op. 29', 'Jae Young Ahn-Benton']
const ahnbenton30 = ['2 Rhapsodies, Op. 30', 'Jae Young Ahn-Benton']
const ahnbenton32b = ['Variations on "Happy Birthday" (Version 2)', 'Jae Young Ahn-Benton']
const ahnbenton40 = ['3 Grotesque Dances, Op. 40', 'Jae Young Ahn-Benton']
const ahnbenton50 = ['Toccata e Fantasia No. 2 in A minor, Op. 50', 'Jae Young Ahn-Benton']
const ahnbenton54 = ['24 Preludes for Young Professionals, Op. 54', 'Jae Young Ahn-Benton']
const ahnbenton56 = ['"Ragtime After Gershwin"', 'Jae Young Ahn-Benton']
const ahnbenton60 = ['24 Preludes for Advanced Students, Op. 60', 'Jae Young Ahn-Benton']
const ahnbenton64_2 = ['A Letter to You, Op. 64, No. 2', 'Jae Young Ahn-Benton']
const ahnbenton76 = ['Capriccio in D minor, Op. 76', 'Jae Young Ahn-Benton']
const ahnbenton77 = ['Dream Variations, Op. 77', 'Jae Young Ahn-Benton']
const ahnbenton79 = ['Sonata No. 7 in C-sharp minor, Op. 79 "Imperialism"', 'Jae Young Ahn-Benton']
const ahnbenton79_4 = ['"Lamentation" from "Sonata No. 7 in C-sharp minor, Op. 79"', 'Jae Young Ahn-Benton']
const ahnbenton85 = ['Elegy in C-sharp minor (piano LH), Op. 85', 'Jae Young Ahn-Benton']
const ahnbenton87 = ['Reminiscence, Op. 87', 'Jae Young Ahn-Benton']
const ahnbenton91 = ['Variations on "The Haunted Mouse" by Faber, Op. 91', 'Jae Young Ahn-Benton']
const ahnbenton96 = ['Variations on "In the Garden" by Maykapar, Op. 96', 'Jae Young Ahn-Benton']
const ahnbenton99 = ['Theme and Variations, Op. 99 "Impressions of Ukraine"', 'Jae Young Ahn-Benton']
const americanInParis = ['An American in Paris', 'George Gershwin']
const americanPreludes2 = ['American Prelude No. 2 "Triste"', 'Alberto Ginastera']
const americanPreludes3 = ['American Prelude No. 3 "Danza criolla"', 'Alberto Ginastera']
const americanPreludes6 = ['American Prelude No. 6 "Homenaje a Roberto Garcia Morillo"', 'Alberto Ginastera']
const americanPreludes8 = ['American Prelude No. 8 "Homenaje a Juan Jose Castro"', 'Alberto Ginastera']
const americanPreludes9 = ['American Prelude No. 9 "Homenje a Aaron Copland"', 'Alberto Ginastera']
const americanPreludes10 = ['American Prelude No. 10 "Pastorale"', 'Alberto Ginastera']
const annaKarenina = ['"Prologue and Horse Race" from "Anna Karenina"', 'Rodion Shchedrin']
const arabianDance = ['Arabian Dance from "The Nutcraker"', 'Piotr Tchaikovsky']
const aveMaria = ['Ave Maria (arr. Liszt)', 'Franz Schubert']
const aWholeNewWorld = ['"A Whole New World" from "Aladdin" (arr. Ahn-Benton)', 'Alan Menken']
const babadjanianElegy = ['Elegy in G minor', 'Arno Babadjanian']
const bachAir = ['"Air" from "Orchestral Suite No. 3" (arr. Martucci)', 'Johann Sebastian Bach']
const bachChaconne = ['Transcription of J.S. Bach\'s "Chaconne"', 'Ferruccio Busoni']
const bachMinuet = ['Minuet in G major', 'Johann Sebastian Bach']
const bachPartita2 = ['Partita No. 2 in C minor', 'Johann Sebastian Bach']
const bachPartita6 = ['Partita No. 6 in E minor', 'Johann Sebastian Bach']
const bachToccata = ['Transcription of J.S. Bach\'s "Toccata and Fugue in D minor"', 'Ferruccio Busoni']
const bachWTC1_1_1 = ['"Prelude" from "Prelude and Fugue in C major, WTC 1"', 'Johann Sebastian Bach']
const bachWTC1_1 = ['Prelude and Fugue in C major, WTC 1', 'Johann Sebastian Bach']
const batmanSelections = ['Selections from "Batman Suite"', 'Danny Elfman']
const beautyAndTheBeast = ['Beauty and the Beast', 'Alan Menken']
const beethovenBagatelles33 = ['6 Bagatelles, Op. 33', 'Ludwig van Beethoven']
const beethovenMinuet = ['Minuet in G major', 'Ludwig van Beethoven']
const beethovenRondo = ['Rondo a capriccio, Op. 129', 'Ludwig van Beethoven']
const beethovenSonata1 = ['Sonata No. 1 in F minor, Op. 2, No. 1', 'Ludwig van Beethoven']
const beethovenSonata1_2 = ['"Adagio" from "Sonata No. 1 in F minor"', 'Ludwig van Beethoven']
const beethovenSonata2 = ['Sonata No. 2 in A major, Op. 2, No. 2', 'Ludwig van Beethoven']
const beethovenSonata3 = ['Sonata No. 3 in C major, Op. 2, No. 3', 'Ludwig van Beethoven']
const beethovenSonata4 = ['Sonata No. 4 in E-flat major, Op. 7 "Grand Sonata"', 'Ludwig van Beethoven']
const beethovenSonata7 = ['Sonata No. 7 in D major, Op. 10, No. 3', 'Ludwig van Beethoven']
const beethovenSonata8 = ['Sonata No. 8 in C minor "Pathétique", Op. 13', 'Ludwig van Beethoven']
const beethovenSonata11 = ['Sonata No. 11 in B-flat major, Op. 22', 'Ludwig van Beethoven']
const beethovenSonata12_3 = ['"Maestoso andante" from "Sonata No. 12 in A-flat major"', 'Ludwig van Beethoven']
const beethovenSonata14 = ['Sonata No. 14 in C-sharp minor "Moonlight"', 'Ludwig van Beethoven']
const beethovenSonata14_1 = ['"Adagio sostenuto" from "Sonata No. 14 in C-sharp Minor"', 'Ludwig van Beethoven']
const beethovenSonata15 = ['Sonata No. 15 in D major "Pastoral"', 'Ludwig van Beethoven']
const beethovenSonata17 = ['Sonata No. 17 in D minor "Tempest"', 'Ludwig van Beethoven']
const beethovenSonata21 = ['Sonata No. 21 in C major "Waldstein"', 'Ludwig van Beethoven']
const beethovenSonata23 = ['Sonata No. 23 in F minor "Appassionata", Op. 57', 'Ludwig van Beethoven']
const beethovenSonata25 = ['Sonata No. 25 in G major, Op. 79 "Cuckoo"', 'Ludwig van Beethoven']
const beethovenSonata26 = ['Sonata No. 26 in E-flat major, Op. 81 "Les adieux"', 'Ludwig van Beethoven']
const beethovenSonata27 = ['Sonata No. 27 in E minor, Op. 90', 'Ludwig van Beethoven']
const beethovenSonata28 = ['Sonata No. 28 in A major, Op. 101', 'Ludwig van Beethoven']
const beethovenSonata29 = ['Sonata No. 29 in B-flat major, Op. 106 "Hammerklavier"', 'Ludwig van Beethoven']
const beethovenSonata30 = ['Sonata No. 30 in E major, Op. 109', 'Ludwig van Beethoven']
const beethovenSonata32 = ['Sonata No. 32 in C minor, Op. 111', 'Ludwig van Beethoven']
const beethovenSymphony3 = ['Symphony No. 3 in E-flat major "Eroica" (arr. Ahn-Benton)', 'Ludwig van Beethoven']
const beethovenSymphony5 = ['Symphony No. 5 in C minor (arr. Ahn-Benton)', 'Ludwig van Beethoven']
const beethovenTurkish = ['Turkish March', 'Ludwig van Beethoven']
const bePrepared = ['"Be Prepared" from "The Lion King"', 'Elton John']
const blueDanube = ['Blue Danube Waltz', 'Johann Strauss II']
const blumenlied = ['Blumenlied, Op. 39', 'Gustav Lange']
const bortkevychMorceaux = ['3 Morceaux, Op. 24', 'Sergei Bortkevych']
const bozzaAria = ['Aria (arr. Ahn-Benton)', 'Eugene Bozza']
const brahmsHandel = ['Variations on a Theme by Händel, Op. 24', 'Johannes Brahms']
const brahmsIntermezzo118_2 = ['Intermezzo, Op. 118, No. 2', 'Johannes Brahms']
const brahmsLullaby = ['Wiegenlied, Op. 49, No. 4', 'Johannes Brahms']
const brahmsPaganini1 = ['Paganini Variations, Op. 35, No. 1', 'Johannes Brahms']
const brahmsPaganini2 = ['Paganini Variations, Op. 35, No. 2', 'Johannes Brahms']
const brahmsRhapsody1 = ['Rhapsody No. 1 in B minor, Op. 79, No. 1', 'Johannes Brahms']
const brahmsRhapsody2 = ['Rhapsody No. 2 in G minor, Op. 79, No. 2', 'Johannes Brahms']
const brahmsSonata1 = ['Sonata No. 1 in C major, Op. 1', 'Johannes Brahms']
const brahmsSonata3 = ['Sonata No. 3 in F minor, Op. 5', 'Johannes Brahms']
const bridalMarch = ['Bridal March (arr. Liszt)', 'Richard Wagner']
const bumblebee = ['The flight of the bumblebee (arr. Cziffra)', 'Nikolai Rimsky-Korsakov']
const lisztPaganini1 = ['Paganini Etude No. 1 in G minor', 'Franz Liszt']
const lisztPaganini3 = ['Paganini Etude No. 3 in G-sharp minor "La Campanella"', 'Franz Liszt']
const lisztPaganini4 = ['Paganini Etude No. 4 in E major', 'Franz Liszt']
const canon = ['Canon in D (arr. Ahn-Benton)', 'Johann Pachelbel']
const cantHelpFallingInLove = ['"Can\'t help falling in love" (arr. Ahn-Benton)', 'Elvis Preesley']
const canYouFeelTheLoveTonight = ['Can You Feel the Love Tonight (arr. Ahn-Benton)', 'Elton John']
const carmenVariations = ['Carmen variations', 'Vladimir Horowitz']
const carmenSelections = ['Selections from "Carmen"', 'Georges Bizet']
const carnaval = ['Carnaval, Op. 9', 'Robert Schumann']
const carnavalDesAnimaux = ['Le carnaval des animaux', 'Camille Saint-Saëns']
const chansonTriste = ['Chanson triste', 'Vasily Kalinnikov']
const childrensCorner1 = ['Doctor Gradus ad Parnassum', 'Claude Debussy']
const childrensCorner4 = ['The Snow is Dancing', 'Claude Debussy']
const chineseDance = ['Chinese Dance from "The Nutcraker"', 'Piotr Tchaikovsky']
const chopinBallade1 = ['Ballade No. 1 in G minor, Op. 23', 'Frederic Chopin']
const chopinBallade2 = ['Ballade No. 2 in F major, Op. 38', 'Frederic Chopin']
const chopinBallade3 = ['Ballade No. 3 in A-flat major, Op. 47', 'Frederic Chopin']
const chopinBallade4 = ['Ballade No. 4 in F minor, Op. 52', 'Frederic Chopin']
const chopinBarcarolle = ['Barcarolle, Op. 60', 'Frederic Chopin']
const chopinBerceuse = ['Berceuse, Op. 57', 'Frederic Chopin']
const chopinFuneral = ['"Funeral March" from "Sonata No. 2 in B-flat minor, Op. 35"', 'Frederic Chopin']
const chopinGiovanni = ['Variations on "Là ci darem la mano"', 'Frederic Chopin']
const chopinEtude10_1 = ['Etude in C major, Op. 10, No. 1 "Waterfall"', 'Frederic Chopin']
const chopinEtude10_3 = ['Etude in E major, Op. 10, No. 3 "Farewell"', 'Frederic Chopin']
const chopinEtude10_4 = ['Etude in C-sharp minor, Op. 10, No. 4', 'Frederic Chopin']
const chopinEtude10_5 = ['Etude in G-flat major, Op. 10, No. 5 "Black Keys"', 'Frederic Chopin']
const chopinEtude10_12 = ['Etude in C minor, Op. 10, No. 12 "Revolutionary"', 'Frederic Chopin']
const chopinEtude25_1 = ['Etude in A-flat major, Op. 25, No. 1 "Aeolian Harp"', 'Frederic Chopin']
const chopinEtude25_2 = ['Etude in F minor, Op. 25, No. 2 "Bees"', 'Frederic Chopin']
const chopinEtude25_3 = ['Etude in F major, Op. 25, No. 3 "Horsemen"', 'Frederic Chopin']
const chopinEtude25_7 = ['Etude in C-sharp minor, Op. 25, No. 7 "Cello"', 'Frederic Chopin']
const chopinEtude25_9 = ['Etude in G-flat major, Op. 25, No. 9 "Butterfly"', 'Chopin, Frederic Chopin']
const chopinEtude25_10 = ['Etude in B minor, Op. 25, No. 10', 'Chopin, Frederic Chopin']
const chopinEtude25_11 = ['Etude in A minor, Op. 25, No. 11 "Winter Wind"', 'Frederic Chopin']
const chopinEtude25_12 = ['Etude in C minor, Op. 25, No. 12 "Ocean"', 'Frederic Chopin']
const chopinMazurka6_1 = ['Mazurka in F-sharp minor, Op. 6, No. 1', 'Frederic Chopin']
const chopinMazurka7_1 = ['Mazurka in B-flat major, Op. 7, No. 1', 'Frederic Chopin']
const chopinMazurka7_3 = ['Mazurka in F minor, Op. 7, No. 3', 'Frederic Chopin']
const chopinMazurka17_1 = ['Mazurka in B-flat major, Op. 17, No. 1', 'Frederic Chopin']
const chopinMazurka17_2 = ['Mazurka in E minor, Op. 17, No. 2', 'Frederic Chopin']
const chopinMazurka17_3 = ['Mazurka in A-flat major, Op. 17, No. 3', 'Frederic Chopin']
const chopinMazurka17_4 = ['Mazurka in A minor, Op. 17, No. 4', 'Frederic Chopin']
const chopinMazurkas17 = ['4 Mazurkas, Op. 17', 'Frederic Chopin']
const chopinMazurka24_1 = ['Mazurka in G minor, Op. 24, No. 1', 'Frederic Chopin']
const chopinMazurka24_4 = ['Mazurka in B-flat minor, Op. 24, No. 4', 'Frederic Chopin']
const chopinMazurka30_3 = ['Mazurka in D-flat major, Op. 30, No. 3', 'Frederic Chopin']
const chopinMazurka30_4 = ['Mazurka in C-sharp minor, Op. 30, No. 4', 'Frederic Chopin']
const chopinMazurka33_2 = ['Mazurka in D major, Op. 33, No. 2', 'Frederic Chopin']
const chopinMazurka33_4 = ['Mazurka in B minor, Op. 33, No. 4', 'Frederic Chopin']
const chopinMazurka50_1 = ['Mazurka in G major, Op. 50, No. 1', 'Frederic Chopin']
const chopinMazurka50_3 = ['Mazurka in C-sharp minor, Op. 50, No. 3', 'Frederic Chopin']
const chopinMazurka56_1 = ['Mazurka in B major, Op. 56, No. 1', 'Frederic Chopin']
const chopinMazurka59_3 = ['Mazurka in F-sharp minor, Op. 59, No. 3', 'Frederic Chopin']
const chopinMazurka63_1 = ['Mazurka in B major, Op. 63, No. 1', 'Frederic Chopin']
const chopinMazurka67_2 = ['Mazurka in G minor, Op. 67, No. 2', 'Frederic Chopin']
const chopinMazurka67_3 = ['Mazurka in C major, Op. 67, No. 3', 'Frederic Chopin']
const chopinMazurka68_2 = ['Mazurka in A minor, Op. 68, No. 2', 'Frederic Chopin']
const chopinNocturne9_2 = ['Nocturne in E-flat major, Op. 9, No. 2', 'Frederic Chopin']
const chopinNocturne15_1 = ['Nocturne in F major, Op. 15, No. 1', 'Frederic Chopin']
const chopinNocturne15_2 = ['Nocturne in F-sharp major, Op. 15, No. 2', 'Frederic Chopin']
const chopinNocturne27_1 = ['Nocturne in C-sharp minor, Op. 27, No. 1', 'Frederic Chopin']
const chopinNocturne27_2 = ['Nocturne in D-flat major, Op. 27, No. 2', 'Frederic Chopin']
const chopinNocturne37_1 = ['Nocturne in G minor, Op. 37, No. 1', 'Frederic Chopin']
const chopinNocturnes48 = ['2 Nocturnes, Op. 48', 'Frederic Chopin']
const chopinNocturne48_1 = ['Nocturne in C minor, Op. 48, No. 1', 'Frederic Chopin']
const chopinNocturne48_2 = ['Nocturne in F-sharp minor, Op. 48, No. 2', 'Frederic Chopin']
const chopinNocturne55_1 = ['Nocturne in F minor, Op. 55, No. 1', 'Frederic Chopin']
const chopinNocturne62_1 = ['Nocturne in B major, Op. 62, No. 1', 'Frederic Chopin']
const chopinNocturne62_2 = ['Nocturne in E major, Op. 62, No. 2', 'Frederic Chopin']
const chopinNocturne72_1 = ['Nocturne in E minor, Op. 72, No. 1', 'Frederic Chopin']
const chopinNocturneLento = ['Lento con gran espressione, Op. Posth', 'Frederic Chopin']
const chopinPolonaise40_1 = ['Polonaise in A major, Op. 40, No. 1 "Military"', 'Frederic Chopin']
const chopinPolonaise44 = ['Polonaise in F-sharp minor, Op. 44 "Tragic"', 'Frederic Chopin']
const chopinPolonaise53 = ['Polonaise in A-flat major, Op. 53 "Heroic"', 'Frederic Chopin']
const chopinPreludes = ['24 Preludes, Op. 28', 'Frederic Chopin']
const chopinPrelude4 = ['Prelude in E minor, Op. 28, No. 4', 'Frederic Chopin']
const chopinPrelude8 = ['Prelude in F-sharp minor, Op. 28, No. 8', 'Frederic Chopin']
const chopinPrelude10 = ['Prelude in C-sharp minor, Op. 28, No. 10', 'Frederic Chopin']
const chopinPrelude12 = ['Prelude in G-sharp minor, Op. 28, No. 12', 'Frederic Chopin']
const chopinPrelude15 = ['Prelude in D-flat major, Op. 28, No. 15 "Raindrops"', 'Frederic Chopin']
const chopinPrelude16 = ['Prelude in B-flat minor, Op. 28, No. 16', 'Frederic Chopin']
const chopinPrelude17 = ['Prelude in A-flat major, Op. 28, No. 17', 'Frederic Chopin']
const chopinPrelude20 = ['Prelude in C minor, Op. 28, No. 20', 'Frederic Chopin']
const chopinPrelude24 = ['Prelude in D minor, Op. 28, No. 24', 'Frederic Chopin']
const chopinScherzo1 = ['Scherzo No. 1 in B minor, Op. 20', 'Frederic Chopin']
const chopinScherzo2 = ['Scherzo No. 2 in B-flat minor, Op. 31', 'Frederic Chopin']
const chopinScherzo3 = ['Scherzo No. 3 in C-sharp minor, Op. 39', 'Frederic Chopin']
const chopinScherzo4 = ['Scherzo No. 4 in E major, Op. 54', 'Frederic Chopin']
const chopinSonata2 = ['Sonata No. 2 in B-flat minor, Op. 35', 'Frederic Chopin']
const chopinSonata3 = ['Sonata No. 3 in B minor, Op. 58', 'Frederic Chopin']
const chopinWaltz18 = ['Waltz in E-flat major, Op. 18', 'Frederic Chopin']
const chopinWaltz34_1 = ['Waltz in A-flat major, Op. 34, No. 1', 'Frederic Chopin']
const chopinWaltz34_2 = ['Waltz in A minor, Op. 34, No. 2', 'Frederic Chopin']
const chopinWaltz42 = ['Waltz in A-flat major, Op. 42', 'Frederic Chopin']
const chopinWaltz64_1 = ['Waltz in D-flat major, Op. 64, No. 1 "Minute Waltz"', 'Frederic Chopin']
const chopinWaltz64_2 = ['Waltz in B minor, Op. 64, No. 2', 'Frederic Chopin']
const chopinWaltzes69 = ['2 Waltzes, Op. 69', 'Frederic Chopin']
const chopinWaltzes70 = ['3 Waltzes, Op. 70', 'Frederic Chopin']
const chopinWaltzPosth = ['Waltz in E minor, Op. Posth', 'Frederic Chopin']
const chromaticFantasy = ['Chromatic Fantasy and Fugue', 'Johann Sebastian Bach']
const clairDeLune = ['Clair de lune', 'Claude Debussy']
const clementiSonata40_2 = ['Sonata in B minor, Op. 40, No. 2', 'Muzio Clementi']
const consolation3 = ['Consolation No. 3 in D-flat major', 'Franz Liszt']
const cruella = ['"Cruella de Vil" from "101 Dalmatians"', 'Roger Radcliffe']
const cuckooWaltz = ['Cuckoo Waltz', 'Johan Emanuel Jonasson']
const cygne = ['Le cygne', 'Camille Saint-Saëns']
const danseMacabre = ['Danse macabre (arr. Liszt)', 'Camille Saint-Saëns']
const danzaRitualDelFugeo = ['Danza ritual del fuego', 'Manuel de Falla']
const danzasArgentinas = ['Danzas argentinas', 'Alberto Ginastera']
const debussyArabesque1 = ['Arabesque No. 1 in E major', 'Claude Debussy']
const debussyEtude1 = ['Pour les cinq doigts', 'Claude Debussy']
const debussyEtude6 = ['Pour les huit doigts', 'Claude Debussy']
const debussyPrelude1_6 = ['Des pas sur la neige', 'Claude Debussy']
const debussyPrelude1_8 = ['La fille aux cheveux de lin', 'Claude Debussy']
const debussyPrelude2_2 = ['Feuilles mortes', 'Claude Debussy']
const debussyReverie = ['Rêverie', 'Claude Debussy']
const diabelli = ['Diabelli Variations, Op. 120', 'Ludwig van Beethoven']
const diabolicSuggestion = ['Suggestion diabolique, Op. 4, No. 4', 'Sergei Prokofiev']
const dvorakHumoresque = ['Humoresque in G-flat major, Op. 101, No. 7', 'Antonin Dvořák']
const dvorakLargo = ['"Largo" from "New World Symphony" (arr. Juon)', 'Antonin Dvořák']
const dvorakSymphony9 = ['"New World Symphony"', 'Antonin Dvořák']
const dvorakSymphony9Finale = ['"Finale" from "New World Symphony"', 'Antonin Dvořák']
const entertainer = ['The entertainer', 'Scott Joplin']
const erdasWarning = ['Erda\'s Warning from "Das Rheingold" (arr. Ahn-Benton)', 'Richard Wagner']
const eros = ['"Eros" from "3 morceaux, Op. 24"', 'Sergei Bortkevych']
const estampes1 = ['Pagodes', 'Claude Debussy']
const estampes2 = ['La soirée dans Grenade', 'Claude Debussy']
const estampes3 = ['Jardins sous la pluie from "Estampes"', 'Claude Debussy']
const etudeTableau33_1 = ['Etude-Tableau in F minor, Op. 33, No. 1', 'Sergei Rachmaninov']
const etudeTableau33_2 = ['Etude-Tableau in C minor, Op. 33, No. 2', 'Sergei Rachmaninov']
const etudeTableau33_3 = ['Etude-Tableau in C minor, Op. 33, No. 3', 'Sergei Rachmaninov']
const etudeTableau33_4 = ['Etude-Tableau in D minor, Op. 33, No. 4', 'Sergei Rachmaninov']
const etudeTableau33_5 = ['Etude-Tableau in E-flat minor, Op. 33, No. 5', 'Sergei Rachmaninov']
const etudeTableau33_6 = ['Etude-Tableau in E-flat major, Op. 33, No. 6', 'Sergei Rachmaninov']
const etudeTableau33_7 = ['Etude-Tableau in G minor, Op. 33, No. 7', 'Sergei Rachmaninov']
const etudeTableau33_8 = ['Etude-Tableau in C-sharp minor, Op. 33, No. 8', 'Sergei Rachmaninov']
const etudeTableau39_1 = ['Etude-Tableau in C minor, Op. 39, No. 1', 'Sergei Rachmaninov']
const etudeTableau39_2 = ['Etude-Tableau in A minor, Op. 39, No. 2', 'Sergei Rachmaninov']
const etudeTableau39_3 = ['Etude-Tableau in F-sharp minor, Op. 39, No. 3', 'Sergei Rachmaninov']
const etudeTableau39_4 = ['Etude-Tableau in B minor, Op. 39, No. 4', 'Sergei Rachmaninov']
const etudeTableau39_5 = ['Etude-Tableau in E-flat minor, Op. 39, No. 5', 'Sergei Rachmaninov']
const etudeTableau39_6 = ['Etude-Tableau in A minor, Op. 39, No. 6', 'Sergei Rachmaninov']
const etudeTableau39_7 = ['Etude-Tableau in C minor, Op. 39, No. 7', 'Sergei Rachmaninov']
const etudeTableau39_8 = ['Etude-Tableau in D minor, Op. 39, No. 8', 'Sergei Rachmaninov']
const etudeTableau39_9 = ['Etude-Tableau in D major, Op. 39, No. 9', 'Sergei Rachmaninov']
const fantaisieImpromptu = ['Fantaisie-Impromptu, Op. 66', 'Frederic Chopin']
const fantasticDances = ['Fantastic Dances, Op. 5', 'Dmitri Shostakovich']
const faurePavane = ['Pavane', 'Gabriel Faure']
const feuillesMortes = ['Les feuilles mortes', 'Joseph Kosma']
const figaroOverture = ['Overture from "Le nozze di Figaro"', 'Wolfgang Amadeus Mozart']
const firebird = ['The Firebird', 'Igor Stravinsky']
const fledermaus = ['Selections from "Die Fledermaus', 'Johann Strauss II']
const flowerSong = ['"Flower Song" from "Carmen" (arr. Ahn-Benton)', 'Georges Bizet']
const forelle = ['Die Forelle (arr. Liszt)', 'Franz Schubert']
const forzaOverture = ['Overture from "La forza del destino"', 'Giuseppe Verdi']
const furElise = ['Für Elise', 'Ludwig van Beethoven']
const elegantCaptainHook = ['"The Elegant Captain Hook" from "Peter Pan"', 'Sammy Fain']
const erlkonig = ['Erlkönig (arr. Liszt)', 'Franz Schubert']
const excursions = ['Excursions, Op. 20', 'Samuel Barber']
const gaspard1 = ['"Undine" from "Gaspard de la nuit"', 'Maurice Ravel']
const gaspard2 = ['"Le gibet" from "Gaspard de la nuit"', 'Maurice Ravel']
const gaspard3 = ['"Scarbo" from "Gaspard de la nuit"', 'Maurice Ravel']
const gaston = ['"Gaston" from "Beauty and the Beast"', 'Alan Menken']
const gershwinPrelude2 = ['Prelude No. 2', 'George Gershwin']
const gershwinPreludes = ['3 Preludes', 'George Gershwin']
const ginasteraSonata1 = ['Sonata No. 1, Op. 22', 'Alberto Ginastera']
const ginasteraSonata2 = ['Sonata No. 2, Op. 53', 'Alberto Ginastera']
const giovanniOverture = ['Overture from "Don Giovanni"', 'Wolfgang Amadeus Mozart']
const goldberg = ['Goldberg Variations', 'Johann Sebastian Bach']
const gretchen = ['Gretchen am Spinnrade (arr. Liszt)', 'Franz Schubert']
const hakunaMatata = ['"Hakuna Matata" from "The Lion King"', 'Elton John']
const halloweenTheme = ['Theme from "Halloween" (arr. Ahn-Benton)', 'John Carpenter']
const harryPotterSelections = ['Selections from "Harry Potter" (arr. Ahn-Benton)', 'John Williams']
const hanselGretel = ['Selections from "Hänsel und Gretel"', 'Engelbert Humperdinck']
const haydnSonata4 = ['Sonata No. 4 in C minor', 'Franz Joseph Haydn']
const haydnSonata16 = ['Sonata No. 16 in C major', 'Franz Joseph Haydn']
const haydnSonata27 = ['Sonata No. 27 in B minor', 'Franz Joseph Haydn']
const haydnSonata32 = ['Sonata No. 32 in E-flat major', 'Franz Joseph Haydn']
const haydnSonata33 = ['Sonata No. 33 in E minor', 'Franz Joseph Haydn']
const haydnSymphony45 = ['Symphony No. 45 in F-sharp minor "Farewell"', 'Franz Joseph Haydn']
const haydnSymphony94 = ['Symphony No. 94 in G major "Surprise"', 'Franz Joseph Haydn']
const hummelSonata5 = ['Sonata No. 5 in F-sharp minor, Op. 81', 'Johann Nepomuk Hummel']
const hungarianDances = ['Selections from "Hungarian Dances"', 'Johannes Brahms']
const hungarianDance1 = ['Hungarian Dance No. 1', 'Johannes Brahms']
const hungarianDance5 = ['Hungarian Dance No. 5', 'Johannes Brahms']
const hungarianRhapsody2 = ['Hungarian Rhapsody No. 2 in C-sharp minor', 'Franz Liszt']
const hungarianRhapsody6 = ['Hungarian Rhapsody No. 6 in D-flat major', 'Franz Liszt']
const hungarianRhapsody12 = ['Hungarian Rhapsody No. 12 in C-sharp minor', 'Franz Liszt']
const images1 = ['Reflets dan l\'eau', 'Claude Debussy']
const images6 = ['Poissons d\'or', 'Claude Debussy']
const islamey = ['Islamey', 'Mily Balakirev']
const isleOfTheDead = ['Isle of the Dead, Op. 29 (arr. Kirkor)', 'Sergei Rachmaninov']
const isoldesLiebestod = ['Isoldes Liebestod (arr. Liszt)', 'Richard Wagner']
const italianConcerto = ['Italian Concerto', 'Johann Sebastian Bach']
const jeuxDeau = ['Jeux d\'eau', 'Maurice Ravel']
const kabalevskyPreludes = ['24 Preludes, Op. 38', 'Dmitri Kabalevsky']
const kabalevskySonata2 = ['Sonata No. 2 in E-flat major, Op. 45', 'Dmitri Kabalevsky']
const kapustin3 = ['Concert Etude No. 3 in E minor "Toccatina"', 'Nikolai Kapustin']
const kapustin6 = ['Cocnert Etude No. 6 in B-flat major "Pastorale"', 'Nikolai Kapustin']
const kitschMusyka = ['Kitsch-Musyka', 'Valentin Silvestrov']
const kosenkoSonata2 = ['Sonata No. 2 in C-sharp minor', 'Viktor Kosenko']
const kosenkoSonata3 = ['Sonata No. 3 in B minor', 'Viktor Kosenko']
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
const lyatoshynskySonataBallada = ['Sonata-Ballada, Op. 18', 'Boris Lyatoshynsky']
const lysenkoSonata1 = ['Sonata No. 1 in A minor', 'Mykola Lysenko']
const magicFluteOverture = ['Overture from "Die Zauberflöte"', 'Wolfgang Amadeus Mozart']
const malaguena = ['Malagueña', 'Ernesto Lecuona']
const mapleLeafRag = ['Maple Leaf Rag', 'Scott Joplin']
const mascagniIntermezzo = ['"Intermezzo" from "Cavalleria Rusticana"', 'Pietro Mascagni']
const mendelssohnRondo = ['Rondo Capriccioso, Op. 14', 'Felix Mendelssohn']
const mephisto = ['Mephisto Waltz No. 1', 'Franz Liszt']
const mer = ['La mer (arr. Garban)', 'Claude Debussy']
const militaryMarch = ['Military March (arr. Liszt)', 'Franz Schubert']
const miroirs1 = ['Noctuelles', 'Maurice Ravel']
const miroirs2 = ['Oiseaux tristes', 'Maurice Ravel']
const miroirs3 = ['Une barque sur l\'ocean', 'Maurice Ravel']
const miroirs4 = ['Alborada del gracioso', 'Maurice Ravel']
const mozartAdagio = ['Adagio in B minor, K. 540', 'Wolfgang Amadeus Mozart']
const mozartSonata5 = ['Piano Sonata No. 5 in G major', 'Wolfgang Amadeus Mozart']
const mozartSonata7 = ['Piano Sonata No. 7 in C major', 'Wolfgang Amadeus Mozart']
const mozartSonata8 = ['Piano Sonata No. 8 in A minor', 'Wolfgang Amadeus Mozart']
const mozartSonata9 = ['Piano Sonata No. 9 in D major', 'Wolfgang Amadeus Mozart']
const mozartSonata12 = ['Piano Sonata No. 12 in F major', 'Wolfgang Amadeus Mozart']
const mozartSonata14 = ['Piano Sonata No. 14 in C minor', 'Wolfgang Amadeus Mozart']
const mozartSonata16 = ['Piano Sonata No. 16 in C major', 'Wolfgang Amadeus Mozart']
const mozartSymphony38 = ['Symphony No. 38 in D major "Prague"', 'Wolfgang Amadeus Mozart']
const mozartSymphony40 = ['Symphony No. 40 in G minor', 'Wolfgang Amadeus Mozart']
const mozartSymphony41 = ['Symphony No. 41 in C major "Jupiter"', 'Wolfgang Amadeus Mozart']
const mozartVariations = ['12 Variations on "Ah vous dirai-je, Maman"', 'Wolfgang Amadeus Mozart']
const nachtMusik = ['Eine kleine Nachtmusik', 'Wolfgang Amadeus Mozart']
const novelettes = ['3 Novelettes', 'Francis Poulenc']
const nuagesGris = ['Nuages gris', 'Franz Liszt']
const oblivion = ['Oblivion (arr. Ahn-Benton)', 'Astor Piazzolla']
const organFantasy = ['Orgel-Phantasie und Fuge in G minor (arr. Liszt)', 'Johann Sebastian Bach']
const pasDeDeux = ['"Pas de deux" from "The Nutcracker"', 'Piotr Tchaikovsky']
const passacagliaFugue = ['Passacaglia and Fugue (arr. d\'Albert)', 'Johann Sebastian Bach']
const peerGynt1_1 = ['"Morgenstimmung" from "Peer Gynt Suite No. 1"', 'Edvard Grieg']
const peerGynt1_2 = ['"Åses Tod" from "Peer Gynt Suite No. 1"', 'Edvard Grieg']
const peerGynt1_4 = ['"In der Halle des Bergkönigs" from "Peer Gynt Suite No. 1"', 'Edvard Grieg']
const peopleUnited = ['The People United Will Never Be Defeated!', 'Frederic Rzewski']
const petrushka = ['Petrushka', 'Igor Stravinsky']
const phantomSelections = ['Selections from "The Phantom of the Opera"', 'Andrew Lloyd Weber']
const pictures = ['Pictures at an Exhibition', 'Modest Mussorgsky']
const picturesBydlo = ['"Bydło" from "Pictures at an Exhibition"', 'Modest Mussorgsky']
const picturesUnhatched = ['"Ballet of the Unhatched Chickens" from "Pictures at an Exhibition"', 'Modest Mussorgsky']
const pilgrimage1_5 = ['Orage', 'Franz Liszt']
const pilgrimage2_1 = ['Sposalizio', 'Franz Liszt']
const pilgrimage2s = ['Années de pèlerinage, Italie - Venezia', 'Franz Liszt']
const pilgrimage2s_1 = ['Goldoliera', 'Franz Liszt']
const pilgrimage2s_2 = ['Canzone', 'Franz Liszt']
const pilgrimage2s_3 = ['Tarantella', 'Franz Liszt']
const pilgrimage2_7 = ['Après une Lecture du Dante', 'Franz Liszt']
const pilgrimage3_4 = ['Les jeux d\'eau à la Ville d\'Este', 'Franz Liszt']
const pompCircumstance = ['Pomp and Circumstance No. 1', 'Edward Elgar']
const poule = ['La poule', 'Jean-Philippe Rameau']
const poorUnfortunateSouls = ['"Poor Unfortunate Souls" from "The Little Mermaid"', 'Alan Menken']
const preludeFugueVariation = ['Prelude, Fugue, and Variation, Op. 18', 'César Franck']
const prokofievCinderella = ['Selections from "Cinderella"', 'Sergei Prokofiev']
const prokofievRomeoJuliet = ['Selections from "Romeo and Juliet"', 'Sergei Prokofiev']
const prokofievSonata1 = ['Sonata No. 1 in F minor, Op. 1', 'Sergei Prokofiev']
const prokofievSonata2 = ['Sonata No. 2 in D minor, Op. 14', 'Sergei Prokofiev']
const prokofievSonata3 = ['Sonata No. 3 in A minor, Op. 28', 'Sergei Prokofiev']
const prokofievSonata4 = ['Sonata No. 4 in C minor, Op. 29', 'Sergei Prokofiev']
const prokofievSonata5 = ['Sonata No. 5 in C major, Op. 38', 'Sergei Prokofiev']
const prokofievSonata6 = ['Sonata No. 6 in A minor, Op. 82', 'Sergei Prokofiev']
const prokofievSonata7 = ['Sonata No. 7 in B-flat major, Op. 83', 'Sergei Prokofiev']
const prokofievSonata8 = ['Sonata No. 8 in B-flat major, Op. 84', 'Sergei Prokofiev']
const prokofievSonata9 = ['Sonata No. 9 in C major, Op. 103', 'Sergei Prokofiev']
const prokofievToccata = ['Toccata in D minor, Op. 11', 'Sergei Prokofiev']
const queenOfTheNight = ['"Die Hölle Rache" (arr. Ahn-Benton)', 'Wolfgang Amadeus Mozart']
const rachmaninovChopin = ['Variations on a Theme by Chopin, Op. 22', 'Sergei Rachmaninov']
const rachmaninovCorelli = ['Variations on a Theme by Corelli, Op. 42', 'Sergei Rachmaninov']
const rachmaninovElegy = ['Elegie in E-flat minor, Op. 3, No. 1', 'Sergei Rachmaninov']
const rachmaninovMusical16_3 = ['Moment musical in B minor, Op. 16, No. 3', 'Sergei Rachmaninov']
const rachmaninovMusical16_4 = ['Moment musical in E minor, Op. 16, No. 4', 'Sergei Rachmaninov']
const rachmaninovPolichinelle = ['Polichinelle', 'Op. 3, No. 4', 'Sergei Rachmaninov']
const rachmaninovPrelude3_2 = ['Prelude in C-sharp minor, Op. 3, No. 2', 'Sergei Rachmaninov']
const rachmaninovPrelude23_1 = ['Prelude in F-sharp minor, Op. 23, No. 1', 'Sergei Rachmaninov']
const rachmaninovPrelude23_4 = ['Prelude in D major, Op. 23, No. 4', 'Sergei Rachmaninov']
const rachmaninovPrelude23_5 = ['Prelude in G minor, Op. 23, No. 5', 'Sergei Rachmaninov']
const rachmaninovPrelude32_4 = ['Prelude in E minor, Op. 32, No. 4', 'Sergei Rachmaninov']
const rachmaninovPrelude32_5 = ['Prelude in G major, Op. 32, No. 5', 'Sergei Rachmaninov']
const rachmaninovPrelude32_10 = ['Prelude in B minor, Op. 32, No. 10', 'Sergei Rachmaninov']
const rachmaninovPrelude32_12 = ['Prelude in G-sharp minor, Op. 32, No. 12', 'Sergei Rachmaninov']
const rachmaninovSonata1 = ['Sonata No. 1 in D minor, Op. 28', 'Sergei Rachmaninov']
const rachmaninovSonata2 = ['Sonata No. 2 in B-flat minor, Op. 36', 'Sergei Rachmaninov']
const radetzky = ['Radetzky March', 'Johann Strauss II']
const rakoczy = ['Transcription of Liszt\'s "Rakoczy march"', 'Vladimir Horowitz']
const rapsodieEspagnole = ['Rapsodie espagnole', 'Franz Liszt']
const ravelPavane = ['Pavane pour une infante defunte', 'Maurice Ravel']
const revutskyPreludes4 = ['3 Preludes, Op. 4', 'Lev Revutsky']
const revutskyPreludes7 = ['2 Preludes, Op. 7', 'Lev Revutsky']
const revutskyPreludes11 = ['2 Preludes, Op. 11', 'Lev Revutsky']
const revutskyPieces17 = ['2 Pieces, Op. 17', 'Lev Revutsky']
const revutksySonata1 = ['Sonata in B minor, Op. 1', 'Lev Revutsky']
const rhapsodyInBlue = ['Rhapsody in Blue', 'George Gershwin']
const riteOfSpring = ['Rite of Spring', 'Igor Stravinsky']
const romanianFolkDances = ['Romanian folk dances', 'Bela Bartok']
const russianDance = ['Russian Dance from "The Nutcraker"', 'Piotr Tchaikovsky']
const sabreDance = ['Transcription of Khachaturian\'s "Sabre Dance"', 'Gyorgy Cziffra']
const salutDamour = ['Salut d\'amour, Op. 12', 'Edward Elgar']
const scaramouche = ['Scaramouche (arr. Ahn-Benton)', 'Darius Milhaud']
const scarlatti1 = ['Sonata No. 1 in D minor', 'Domenico Scarlatti']
const scarlatti30 = ['Sonata No. 30 in G minor "Cat Fugue"', 'Scarlatti, Domenico Scarlatti']
const scarlatti32 = ['Sonata No. 32 in D minor', 'Domenico Scarlatti']
const scarlatti87 = ['Sonata No. 87 in B minor', 'Domenico Scarlatti']
const scarlatti141 = ['Sonata No. 141 in D minor', 'Domenico Scarlatti']
const scarlatti240 = ['Sonata No. 240 in D major', 'Domenico Scarlatti']
const scarlatti450 = ['Sonata No. 450 in G minor', 'Domenico Scarlatti']
const scarlatti466 = ['Sonata No. 466 in F minor', 'Domenico Scarlatti']
const schindler = ['Theme from "Schindler\'s List', 'John Williams']
const schubertImpromptu90_1 = ['Impromptu No. 1 in C minor, Op. 90, No. 1', 'Franz Schubert']
const schubertImpromptu90_2 = ['Impromptu No. 2 in E-flat major, Op. 90, No. 2', 'Franz Schubert']
const schubertImpromptu90_3 = ['Impromptu No. 3 in G-flat major, Op. 90, No. 3', 'Franz Schubert']
const schubertImpromptu90_4 = ['Impromptu No. 4 in A-flat major, Op. 90, No. 4', 'Franz Schubert']
const schubertMoment = ['Moment musical No. 3 in F minor', 'Franz Schubert']
const scriabinEtude8_12 = ['Etude in D-sharp minor, Op. 8, No. 12', 'Aleksandr Scriabin']
const scriabinEtude42_5 = ['Etude in C-sharp minor, Op. 42, No. 5', 'Aleksandr Scriabin']
const scriabinEtude65_3 = ['Etude, Op. 65, No. 3', 'Aleksandr Scriabin']
const scriabineSonata3 = ['Sonata No. 3 in F-sharp minor, Op. 23', 'Aleksandr Scriabin']
const scriabineSonata5 = ['Sonata No. 5, Op. 53', 'Aleksandr Scriabin']
const shamoToccata = ['Toccata', 'Yuri Shamo']
const shostakovichPreludeFugue4 = ['Prelude and Fugue in E minor, Op. 87, No. 4', 'Dmitri Shostakovich']
const shostakovichPreludeFugue15 = ['Prelude and Fugue in D-flat major, Op. 87, No. 15', 'Dmitri Shostakovich']
const shostakovichPreludeFugue24 = ['Prelude and Fugue in D minor, Op. 87, No. 24', 'Dmitri Shostakovich']
const shostakovichPreludes34 = ['24 Preludes, Op. 34', 'Dmitri Shostakovich']
const shostakovichSonata2 = ['Piano Sonata No. 2, Op. 61', 'Dmitri Shostakovich']
const shostakovichSymphony5_4 = ['"Allegro non troppo" from "Symphony No. 5, Op. 47"', 'Dmitri Shostakovich']
const sibelius75 = ['5 Pieces, Op. 75', 'Jean Sibelius']
const silveryWaves = ['Silvery Waves', 'Addison Wyman']
const slavonicDances = ['Selections from "Slavonic Dances"', 'Antonin Dvořák']
const skorykBurleska = ['Burleska', 'Myroslav Skoryk']
const skorykMelodia = ['Melodia', 'Myroslav Skoryk']
const skorykPartita5 = ['Partita No. 5', 'Myroslav Skoryk']
const solveig = ['Solveigs Sang', 'Edvard Grieg']
const songbookSelections = ['Selections from the Songbook', 'George Gershwin']
const starsStripes = ['Stars and Stripes Forever (arr. Horowitz)', 'John Philip Sousa']
const sugarPlumFairy = ['"Dance of the Sugar Plum Fairy" from "The Nutcracker"', 'Piotr Tchaikovsky']
const supermanSelections = ['Selections from "Superman Suite"', 'John Williams']
const swanLakeTheme = ['Theme from "Swan Lake"', 'Piotr Tchaikovsky']
const symphonicEtudes = ['Symphonic Etudes, Op. 13', 'Robert Schumann']
const tarasBulbaOverture = ['Overture from "Taras Bulba"', 'Mykola Lysenko']
const tchaikovskyJune = ['"June" from "The Seasons, Op. 37"', 'Piotr Tchaikovsky']
const tchaikovskyMorceaux72_2 = ['Berceuse, Op. 72, No. 2', 'Piotry Tchaikovsky']
const tchaikovskyMorceaux72_5 = ['Meditation, Op. 72, No. 5', 'Piotr Tchaikovsky']
const tchaikovskyMorceaux72_7 = ['Polacca de concert, Op. 72, No. 7', 'Piotr Tchaikovsky']
const tchaikovskyMorceaux72_10 = ['Scherzo-Fantaisie, Op. 72, No. 10', 'Piotr Tchaikovsky']
const tchaikovskyMorceaux72_18 = ['Scène dansante (Invitation au trèpak), Op. 72, No. 18', 'Piotr Tchaikovsky']
const tchaikovskySeasons = ['The Seasons, Op. 37', 'Piotr Tchaikovsky']
const tchaikovsky1812 = ['1812 Overture', 'Piotr Tchaikovsky']
const thaisMeditation = ['"Meditation" from "Thaïs" (arr. Ahn-Benton)', 'Jules Massenet']
const totentanz = ['Totentanz (arr. Ahn-Benton)', 'Franz Liszt']
const transcendental4 = ['Transcendental Etude No. 4 "Mazeppa"', 'Franz Liszt']
const transcendental6 = ['Transcendental Etude No. 6 "Feux follets"', 'Franz Liszt']
const transcendental7 = ['Transcendental Etude No. 7 "Eroica"', 'Franz Liszt']
const transcendental8 = ['Transcendental Etude No. 8 "Wild Jagd"', 'Franz Liszt']
const transcendental10 = ['Transcendental Etude No. 10', 'Franz Liszt']
const traumerei = ['Träumerei', 'Robert Schumann']
const tritschTratsch = ['Transcription of J. Strauss\'s "Tritsch-Tratsch Polka"', 'Gyorgy Cziffra']
const ukrainianRhapsody1 = ['Ukrainian Rhapsody No. 1 in G-sharp minor, Op. 8', 'Mykola Lysenko']
const ukrainianRhapsody2 = ['Ukrainian Rhapsody No. 2 in A minor, Op. 18', 'Mykola Lysenko']
const ukrainianSuite1 = ['Ukrainian Suite No. 1 in G minor', 'Mykola Lysenko']
const ukrainianSuite2 = ['Ukrainian Suite No. 2 in C minor', 'Mykola Lysenko']
const underTheSea = ['"Under the Sea" from "Little Mermaid"', 'Alan Menken']
const unstern = ['Unstern', 'Franz Liszt']
const usaAnthem = ['The Star-Spangled Banner (arr. Ahn-Benton)', 'Francis Scott Key']
const valkyries = ['Ride of the Valkyries (arr. Tausig)', 'Richard Wagner']
const valseGrotesque = ['"Valse grotesque" from "3 morceaux, Op. 24"', 'Sergei Bortkevych']
const versLaFlamme = ['Vers la flamme', 'Aleksandr Scriabin']
const vienneseDances = ['3 Viennese Dances (arr. Ahn-Benton)', 'Fritz Kreisler']
const villaLobosPolichinelle = ['Polichinelle', 'Heitor Villa-Lobos']
const vivaldiSpring = ['"Spring" from "The Four Seasons" (arr. Ahn-Benton)', 'Antonio Vivaldi']
const vivaldiSummer = ['"Summer" from "The Four Seasons" (arr. Ahn-Benton)', 'Antonio Vivaldi']
const vivaldiAutumn = ['"Autumn" from "The Four Seasons" (arr. Ahn-Benton)', 'Antonio Vivaldi']
const vivaldiWinter = ['"Winter" from "The Four Seasons" (arr. Ahn-Benton)', 'Antonio Vivaldi']
const vocalise = ['Vocalise, Op. 34, No. 14 (arr. Ahn-Benton)', 'Sergei Rachmaninov']
const volodosTurkish = ['Concert Paraphrase on Mozart\'s "Turkish March"', 'Arcadi Volodos']
const waltzOfFlowers = ['Waltz of the Flowers from "The Nutcracker"', 'Piotr Tchaikovsky']
const wanderersFantasy = ['Wanderers-Fantasie', 'Franz Schubert']
const weberSonata1 = ['Sonata No. 1 in C major, Op. 24', 'Carl Maria von Weber']
const weddingMarch = ['Transcription of Mendelssohn\'s "Wedding March"', 'Vladimir Horowitz']
const westSideStorySelections = ['Selections from "West Side Story" (arr. Ahn-Benton)', 'Leonard Bernstein']
const widmung = ['Widmung (arr. Liszt)', 'Robert Schumann']
const williamTellOverture = ['Overture from "Guillaume Tell" (arr. Liszt)', 'Gioachino Rossini']

const availableConcerts = [
    ['American Pride 1', [starsStripes, excursions, mapleLeafRag, westSideStorySelections, rhapsodyInBlue], 65, 150, allAmerican1],
    ['At the Carnival', [miroirs4, scaramouche, petrushka, sabreDance, ahnbenton7, carnaval], 75, 200, carnival],
    ['Ballroom 1', [chopinWaltz18, arabianDance, fantasticDances, mephisto, hungarianDance5, vienneseDances, oblivion, danzasArgentinas, carmenVariations], 55, 150, ballroom1],
    ['Ballroom 2', [waltzOfFlowers, romanianFolkDances, danseMacabre, sabreDance, chopinMazurka6_1, chopinMazurka7_1, chopinMazurka17_4, libertango, pilgrimage2s_3], 55, 150, ballroom2],
    ['Ballroom 3', [chopinPolonaise53, beethovenMinuet, bachPartita6, valseGrotesque, ahnbenton1, americanPreludes3, sugarPlumFairy, totentanz], 70, 150, ballroom3],
    ['Beethoven Blast', [beethovenSonata8, beethovenRondo, furElise, beethovenBagatelles33, beethovenSonata23], 70, 125, beethoven],
    ['Botanical Garden', [lilacs, americanPreludes10, blumenlied, beethovenSonata15, flowerSong, lisztPastorale, waltzOfFlowers, ahnbenton96], 60, 125, botanical],
    ['Chopin Cart', [chopinPolonaise53, chopinNocturnes48, chopinMazurkas17, chopinBarcarolle, chopinWaltzes70, chopinScherzo4], 65, 125, chopin],
    ['The Classics 1', [hungarianRhapsody2, salutDamour, dvorakHumoresque, clairDeLune, rachmaninovPrelude3_2, entertainer, canon, fantaisieImpromptu, vivaldiSpring, volodosTurkish], 65, 125, classics1],
    ['The Classics 2', [radetzky, furElise, liebestraum, tchaikovskyJune, thaisMeditation, mapleLeafRag, chopinNocturne9_2, rhapsodyInBlue], 55, 100, classics2],
    ['The Classics 3', [bachWTC1_1, beethovenSonata8, brahmsLullaby, chopinBallade1, blueDanube, vivaldiWinter, dvorakLargo, weddingMarch], 75, 150, classics3],
    ['Four Elements: Air & Earth', [beethovenSonata17, ahnbenton15_2, pilgrimage1_5, erdasWarning, ahnbenton15_4, isleOfTheDead, chopinEtude25_11], 70, 150, airEarth],
    ['Four Elements: Water & Fire', [chopinEtude10_1, versLaFlamme, ahnbenton15_1, danzaRitualDelFugeo, estampes3, ahnbenton15_3, jeuxDeau, firebird], 60, 175, fireWater],
    ['Halloween Special 1', [bachToccata, beethovenSonata14, harryPotterSelections, halloweenTheme, ahnbenton28, chopinNocturne27_1, totentanz], 75, 175, halloween1],
    ['Halloween Special 2', [ahnbenton91, chopinNocturne48_1, transcendental6, isleOfTheDead, gaspard3, ahnbenton11_2_3, erlkonig, danseMacabre], 65, 150, halloween2],
    ['I\'ll Be Bach', [passacagliaFugue, bachAir, chromaticFantasy, bachPartita2, bachToccata], 60, 150, bach],
    ['Impostors and Thieves', [bachChaconne, bozzaAria, chopinEtude25_1, chopinEtude25_7, lisztPaganini3, preludeFugueVariation, vivaldiWinter, vocalise, brahmsPaganini1], 75, 150, impostorsThieves],
    ['Lisztomania', [hungarianRhapsody2, consolation3, lisztPaganini3, pilgrimage2s, liebestraum ,lisztSonata], 75, 200, liszt],
    ['Lullaby Collection', [consolation3, beethovenSonata14_1, chopinBerceuse, clairDeLune, scarlatti87, traumerei, brahmsLullaby, beethovenSonata1_2, chopinNocturne9_2, debussyReverie, solveig, gershwinPrelude2, bachAir, americanPreludes2, bachWTC1_1_1, chansonTriste, vocalise, salutDamour], 75, 100, lullaby],
    ['Marching On', [radetzky, ahnbenton3, chopinPolonaise40_1, beethovenSonata12_3, militaryMarch, bridalMarch, rakoczy, chopinFuneral, pompCircumstance, etudeTableau33_4, starsStripes], 60, 150, march],
    ['Meditation and Peace', [peerGynt1_1, thaisMeditation, scarlatti466, traumerei, canon, tchaikovskyMorceaux72_5, rachmaninovPrelude32_5, images1, chopinWaltz34_2, dvorakLargo, debussyReverie, americanPreludes10, bachAir, aveMaria, chopinNocturne62_1], 85, 125, meditation],
    ['Mozart Mastermind', [giovanniOverture, mozartSonata12, mozartAdagio, mozartVariations, mozartSonata8, volodosTurkish], 75, 150, mozart],
    ['Ocean Waves', [silveryWaves, etudeTableau39_2, miroirs3, chopinEtude25_12, ahnbenton79_4, mer], 65, 125, ocean],
    ['The Opera House 1', [figaroOverture, isoldesLiebestod, carmenVariations, forzaOverture, songbookSelections, vocalise, lisztFigaro], 60, 150, opera1],
    ['The Opera House 2', [williamTellOverture, solveig, chopinGiovanni, mascagniIntermezzo, tarasBulbaOverture, carmenSelections, erlkonig, lisztRigoletto], 65, 150, opera2],
    ['Power of Prokofiev', [diabolicSuggestion, prokofievRomeoJuliet, prokofievSonata3, prokofievToccata, prokofievSonata7], 65, 175, prokofiev],
    ['Raisin Brahms', [brahmsSonata1, brahmsIntermezzo118_2, brahmsPaganini1, brahmsLullaby, hungarianDance5, brahmsHandel], 75, 175, brahms],
    ['Remembrance', [faurePavane, mozartSonata8, rachmaninovElegy, ravelPavane, bachChaconne, chopinFuneral, lisztBallade2, babadjanianElegy], 80, 125, remembrance],
    ['Rockin\' with Rachmaninov', [etudeTableau39_1, etudeTableau39_5, etudeTableau39_6, rachmaninovElegy, rachmaninovMusical16_3, rachmaninovMusical16_4, rachmaninovPrelude23_5, rachmaninovPrelude32_10, etudeTableau33_5, vocalise, rachmaninovSonata2], 75, 200, rachmaninov],
    ['Shadow of Shostakovich', [shostakovichPreludeFugue24, fantasticDances, shostakovichSonata2, shostakovichPreludes34, shostakovichSymphony5_4], 80, 200, shostakovich],
    ['Traveling Musician', [wanderersFantasy, pilgrimage3_4, dvorakSymphony9Finale, islamey, ahnbenton76, americanInParis], 70, 175, traveling],
    ['Ukrainian Resistance 1', [tarasBulbaOverture, kitschMusyka, revutskyPreludes7, ahnbenton99, skorykBurleska, lyatoshynskyPreludes, kosenkoSonata2], 75, 175, ukraineResistance1],
    ['Ukrainian Resistance 2', [ukrainianSuite1, bortkevychMorceaux, skorykPartita5, shamoToccata, revutskyPieces17, kosenkoSonata3, skorykMelodia], 65, 125, ukraineResistance2],
    ['Valentine\'s Day Special 1', [ahnbenton64_2, pasDeDeux, chopinBallade3, canYouFeelTheLoveTonight, liebestraum, loveMeTender, mascagniIntermezzo, weddingMarch, isoldesLiebestod, ahnbenton87], 60, 125, valentine1],
    ['Valentine\'s Day Special 2', [salutDamour, chopinGiovanni, eros, bridalMarch, cantHelpFallingInLove, weddingMarch, aWholeNewWorld, vienneseDances, chopinBallade2, ahnbenton87], 65, 150, valentine2],
    ['Zookeeper 1', [swanLakeTheme, miroirs2, poule, images6, chopinEtude25_2, beethovenSonata25, scarlatti30, chopinEtude25_9, lark, cygne, ahnbenton91, bumblebee], 60, 125, zookeeper1],
    ['Zookeeper 2', [vivaldiSpring, etudeTableau39_2, chopinWaltz64_1, picturesBydlo, forelle, picturesUnhatched, annaKarenina, chopinEtude25_3, miroirs1, cuckooWaltz, etudeTableau39_6, carnavalDesAnimaux], 55, 100, zookeeper2],
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
                <img className="border border-stone-200 rounded-xl min-h-[30vh] w-1/4 my-5" src={currentConcert.poster} alt='poster'/>
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
            <h1 className={`${showDetails ? 'z-0 opacity-5' : ''} text-center text-3xl my-24`}>GLVMS Mobile Piano Concert Series</h1>
            <p className={`${showDetails ? 'z-0 opacity-5' : ''} w-11/12 mx-auto text-lg`}>Bring a professional classical piano performance right to your doorstep! Simply pick a concert from the menu below, and request a date, time, and location. Once confirmed by GLVMS and payment is made, the designated pianist will show up at your location at the specified date and time, and will perform the requested concert. That's it! No hassle, no confusion.</p>
            <table className={`${showDetails ? 'z-0 opacity-5' : ''} border border-stone-200 w-11/12 lg:w-2/3 mx-auto mb-12 table-fixed my-12`}>
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
            <aside className={`${showDetails ? 'z-0 opacity-5' : ''} w-11/12 mx-auto`}>
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