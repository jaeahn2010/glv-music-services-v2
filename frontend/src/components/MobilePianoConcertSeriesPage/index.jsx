class Concert {
    constructor(title, opuses = [], duration, basePrice) {
        this.title = title
        this.opuses = opuses
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

export default function MobilePianoConcertSeriesPage({ isMenuOpen }) {
    return (
        <h1>mobile piano concert series page</h1>
    )
}