const opuses = [
    {
        title: "Nightsongs",
        composer: "Adams, H. Leslie",
        movements: [
            {movementNumber: 1, movementTitle: "I. Prayer", movementPrice: 15},
            {movementNumber: 2, movementTitle: "II. Drums of tragedy", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. The heart of a woman", movementPrice: 20},
            {movementNumber: 4, movementTitle: "IV. Night song", movementPrice: 30},
            {movementNumber: 5, movementTitle: "V. Sence you went away", movementPrice: 20},
            {movementNumber: 6, movementTitle: "VI. Creole girl", movementPrice: 30},
        ],
        instrumentation: ["voice", "piano"],
        price: 125
    },
    {
        title: "6 Elizabethan Songs",
        composer: "Argento, Dominick",
        movements: [
            {movementNumber: 1, movementTitle: "I. Spring", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Sleep", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Winter", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. Dirge", movementPrice: 15},
            {movementNumber: 5, movementTitle: "V. Diaphenia", movementPrice: 30},
            {movementNumber: 6, movementTitle: "VI. Hymn", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: 125
    },
    {
        title: "Sonatina",
        composer: "Arnold, Malcolm",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro con brio", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Andantino", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Furioso", movementPrice: 30},
        ],
        instrumentation: ["clarinet", "piano"],
        price: 60
    },
    {
        title: "Elegy",
        composer: "Babadjanian, Arno",
        movements: [],
        instrumentation: ["piano"],
        price: 30
    },
    {
        title: "Concerto in C minor (arr. Casadesus)",
        composer: "Bach, Johann Christian",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro molto ma maestoso", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Adagio molto espressivo", movementPrice: 20},
            {movementNumber: 3, movementTitle: "III. Allegro molto", movementPrice: 20},
        ],
        instrumentation: ["viola", "orchestra"],
        price: 60
    },
    {
        title: "Passacaglia and fugue, BWV 582 (arr. d'Albert)",
        composer: "Bach, Johann Sebastian",
        movements: [],
        instrumentation: ["piano"],
        price: 240
    },
    {
        title: "Partita No. 2 in C minor, BWV 826",
        composer: "Bach, Johann Sebastian",
        movements: [
            {movementNumber: 1, movementTitle: "I. Sinfonia & fuga", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Allemande", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Courante", movementPrice: 75},
            {movementNumber: 4, movementTitle: "IV. Sarabande", movementPrice: 15},
            {movementNumber: 5, movementTitle: "V. Rondeau", movementPrice: 60},
            {movementNumber: 6, movementTitle: "VI. Capriccio", movementPrice: 120},
        ],
        instrumentation: ["piano"],
        price: 375
    },
    {
        title: "Goldberg Variations, BWV 988",
        composer: "Bach, Johann Sebastian",
        movements: [],
        instrumentation: ["piano"],
        price: 950
    },
    {
        title: "Concerto No. 1 in A minor",
        composer: "Bach, Johann Sebastian, BWV 1041",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro non tanto", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Andante", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Allegro assai", movementPrice: 45},
        ],
        instrumentation: ["violin", "orchestra"],
        price: 100
    },
    {
        title: "Concerto No. 2 in E major, BWV 1042",
        composer: "Bach, Johann Sebastian",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Allegro assai", movementPrice: 30},
        ],
        instrumentation: ["violin", "orchestra"],
        price: 80
    },
    {
        title: "Concerto in D minor, BWV 1043",
        composer: "Bach, Johann Sebastian",
        movements: [
            {movementNumber: 1, movementTitle: "I. Vivace", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Largo, ma non tanto", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Allegro", movementPrice: 30},
        ],
        instrumentation: ["violin", "violin", "orchestra"],
        price: 80
    },
    {
        title: "3 Songs, Op. 2",
        composer: "Barber, Samuel",
        movements: [
            {movementNumber: 1, movementTitle: "I. The daisies", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "4 Songs, Op. 13",
        composer: "Barber, Samuel",
        movements: [
            {movementNumber: 1, movementTitle: "I. A nun takes the veil", movementPrice: 15},
            {movementNumber: 2, movementTitle: "II. The secrets of the old", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Sure on this shining night", movementPrice: 15},
            {movementNumber: 4, movementTitle: "IV. Nocturne", movementPrice: 30}
        ],
        instrumentation: ["voice", "piano"],
        price: 60
    },
    {
        title: "Excursions, Op. 20",
        composer: "Barber, Samuel",
        movements: [
            {movementNumber: 1, movementTitle: "I. Un poco allegro", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. In slow blues tempo", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Allegretto", movementPrice: 150},
            {movementNumber: 4, movementTitle: "IV. Allegro molto", movementPrice: 120},
        ],
        instrumentation: ["piano"],
        price: 375
    },
    {
        title: "3 Songs, Op. 45",
        composer: "Barber, Samuel",
        movements: [
            {movementNumber: 1, movementTitle: "I. Now have I fed and eaten up the rose", movementPrice: 15},
            {movementNumber: 2, movementTitle: "II. A green lowland of pianos", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. O boundless, boundless evening", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: 50
    },
    {
        title: "Sonatina, Sz. 55",
        composer: "Bartòk, Béla",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegretto", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Moderato", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Allegro vivace", movementPrice: 45},
        ],
        instrumentation: ["piano"],
        price: 80
    },
    {
        title: "Romanian folk dances, Sz. 68",
        composer: "Bartòk, Béla",
        movements: [
            {movementNumber: 1, movementTitle: "I. Jocul cu Bâta", movementPrice: 15},
            {movementNumber: 2, movementTitle: "II. Brâul", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Pe Loc", movementPrice: 15},
            {movementNumber: 4, movementTitle: "IV. Buciumeana", movementPrice: 15},
            {movementNumber: 5, movementTitle: "V. Poarcâ Româneasca", movementPrice: 15},
            {movementNumber: 6, movementTitle: "VI. Mânuntelul", movementPrice: 15},
        ],
        instrumentation: ["piano"],
        price: 80
    },
    {
        title: "Romance, Op. 23",
        composer: "Beach, Amy Marcy",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 45
    },
    {
        title: "3 Shakespeare Songs, Op. 37",
        composer: "Beach, Amy Marcy",
        movements: [
            {movementNumber: 1, movementTitle: "I. O mistress mine", movementPrice: 20},
            {movementNumber: 2, movementTitle: "II. Take, o take those lips away", movementPrice: 20},
            {movementNumber: 3, movementTitle: "III. Fairy lullaby", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: 50
    },
    {
        title: "3 Browning songs, Op. 44",
        composer: "Beach, Amy Marcy",
        movements: [
            {movementNumber: 1, movementTitle: "I. The year's at the spring", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Ah, love, but a day!", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. I send my heart up to thee!", movementPrice: 30},
        ],
        instrumentation: ["voice", "piano"],
        price: 80
    },
    {
        title: "Sonata No. 1 in F minor, Op. 2, No. 1",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Menuetto. Allegretto", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. Prestissimo", movementPrice: 90}
        ],
        instrumentation: ["piano"],
        price: 175
    },
    {
        title: "Sonata No. 1 in F major, Op. 5, No. 1",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Adagio sostenuto", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Rondo", movementPrice: 120}
        ],
        instrumentation: ["cello", "piano"],
        price: 225
    },
    {
        title: "Sonata No. 2 in G minor, Op. 5, No. 2",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Adagio sostenuto ed espressivo", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Rondo", movementPrice: 120}
        ],
        instrumentation: ["cello", "piano"],
        price: 225
    },
    {
        title: "Trio in B-flat major, Op. 11",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro con brio", movementPrice: 75},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Tema con variazioni. Allegretto", movementPrice: 90},
        ],
        instrumentation: ["clarinet", "cello", "piano"],
        price: 200
    },
    {
        title: "Sonata No. 1 in D major, Op. 12, No. 1",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro con brio", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Tema con variazioni", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Rondo. Allegro", movementPrice: 90},
        ],
        instrumentation: ["violin", "piano"],
        price: 200
    },
    {
        title: "Sonata No. 8 in C minor, Op. 13 'Pathétique'",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Grave - Allegro di molto e con brio", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Adagio cantabile", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Rondo. Allegro", movementPrice: 75}
        ],
        instrumentation: ["piano"],
        price: 175
    },
    {
        title: "Sonata No. 9 in E major, Op. 14, No. 1",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 75},
            {movementNumber: 2, movementTitle: "II. Allegretto", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Rondo. Allegro commodo", movementPrice: 75},
        ],
        instrumentation: ["piano"],
        price: 150
    },
    {
        title: "Sonata No. 5 in F major, Op. 24 'Spring'",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Adagio con molto espressivo", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Scherzo. Allegro molto", movementPrice: 60},
            {movementNumber: 4, movementTitle: "IV. Allegro ma non troppo", movementPrice: 75}
        ],
        instrumentation: ["violin", "piano"],
        price: 225
    },
    {
        title: "Sonata No. 14 in C-sharp minor, Op. 27, No. 2 'Moonlight'",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Adagio sostenuto", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Allegretto", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Presto agitato", movementPrice: 120}
        ],
        instrumentation: ["piano"],
        price: 175
    },
    {
        title: "Sonata No. 6 in A major, Op. 30, No. 1",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 75},
            {movementNumber: 2, movementTitle: "II. Adagio molto espressivo", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Allegretto con variazioni", movementPrice: 75},
        ],
        instrumentation: ["violin", "piano"],
        price: 200
    },
    {
        title: "Sonata No. 8 in G major, Op. 30, No. 3",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro assai", movementPrice: 75},
            {movementNumber: 2, movementTitle: "II. Tempo di minuetto, ma molto moderato e grazioso", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Allegro vivace", movementPrice: 90},
        ],
        instrumentation: ["violin", "piano"],
        price: 200
    },
    {
        title: "Concerto No. 3 in C minor, Op. 37 (solo)",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro con brio", movementPrice: 180},
            {movementNumber: 2, movementTitle: "II. Largo", movementPrice: 120},
            {movementNumber: 3, movementTitle: "III. Rondo. Allegro", movementPrice: 240},
        ],
        instrumentation: ["piano", "orchestra"],
        price: 525
    },
    {
        title: "Serenade in D major, Op. 41",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Entrata. Allegro", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Tempo ordinario d'un Menuetto", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Allegro molto", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. Andante con variazioni", movementPrice: 30},
            {movementNumber: 5, movementTitle: "V. Allegro scherzando e vivace", movementPrice: 45},
            {movementNumber: 6, movementTitle: "VI. Adagio", movementPrice: 15},
            {movementNumber: 7, movementTitle: "VII. Allegro vivace e disinvolto", movementPrice: 45}
        ],
        instrumentation: ["flute", "piano"],
        price: 225
    },
    {
        title: "Sonata No. 9 in A major, Op. 47 'Kreutzer'",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Adagio sostenuto - Presto", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Andante con variazioni", movementPrice: 75},
            {movementNumber: 3, movementTitle: "III. Presto", movementPrice: 120},
        ],
        instrumentation: ["violin", "piano"],
        price: 300
    },
    {
        title: "Sonata No. 20 in G major, Op. 49, No. 2",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro ma non troppo", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Tempo di menuetto", movementPrice: 20},
        ],
        instrumentation: ["piano"],
        price: 45
    },
    {
        title: "Romanze No. 2, Op. 50",
        composer: "Beethoven, Ludwig van",
        movements: [],
        instrumentation: ["violin", "orchestra"],
        price: 45
    },
    {
        title: "Sonata No. 21 in C major, Op. 53 'Waldstein'",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro con brio", movementPrice: 150},
            {movementNumber: 2, movementTitle: "II. Adagio molto", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Rondo. Allegretto moderato", movementPrice: 150}
        ],
        instrumentation: ["piano"],
        price: 325
    },
    {
        title: "Sonata No. 23 in F minor, Op. 57 'Appassionata'",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro assai", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Andante con moto", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Allegro ma non troppo", movementPrice: 150}
        ],
        instrumentation: ["piano"],
        price: 325
    },
    {
        title: "Sonata No. 3 in A major, Op. 69",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro ma non tanto", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Allegro molto", movementPrice: 90},
            {movementNumber: 3, movementTitle: "III. Adagio cantabile - Allegro vivace", movementPrice: 120}
        ],
        instrumentation: ["cello", "piano"],
        price: 275
    },
    {
        title: "Trio No. 5 in D major, Op. 70, No. 1 'Ghost'",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro vivace e con brio", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Largo assai ed espressivo", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Presto", movementPrice: 120},
        ],
        instrumentation: ["violin", "cello", "piano"],
        price: 250
    },
    {
        title: "Fidelio, Op. 72",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "O wär ich schon mit der vereint", movementPrice: 15},
            {movementNumber: 2, movementTitle: "Abscheulicher! Wo eilst du hin?", movementPrice: 30},
            {movementNumber: 3, movementTitle: "O namenlose Freude", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Sonata No. 27 in E minor, Op. 90",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Mit Lebhaftigkeit und durchaus mit Empfindung und Ausdruck", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Nicht zu geschwind und sehr singbar vorgetragen", movementPrice: 60},
        ],
        instrumentation: ["piano"],
        price: 100
    },
    {
        title: "An die Ferne geliebte, Op. 98",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Auf dem Hügel sitz' ich spähend", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Wo die Berge so blau", movementPrice: 20},
            {movementNumber: 3, movementTitle: "III. Leichte Segler in den Höhen", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. Diese Wolken in den Höhen", movementPrice: 20},
            {movementNumber: 5, movementTitle: "V. Es kehret der Maien", movementPrice: 30},
            {movementNumber: 6, movementTitle: "VI. Nimm sie hin denn", movementPrice: 30},
        ],
        instrumentation: ["voice", "piano"],
        price: 150
    },
    {
        title: "Sonata No. 28 in A major, Op. 101",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Etwas lebhaft und mit der innigsten Empfindung", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Lebhaft. Marschmäßig", movementPrice: 120},
            {movementNumber: 3, movementTitle: "III. Langsam und sehnsuchtsvoll", movementPrice: 15},
            {movementNumber: 4, movementTitle: "IV. Geschwind, doch nicht zu sehr, und mit Entschlossenheit", movementPrice: 240}
        ],
        instrumentation: ["piano"],
        price: 400
    },
    {
        title: "Sonata No. 4 in C major, Op. 102, No. 1",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Andante - Allegro vivace", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Adagio - Tempo d'andante - Allegro vivace", movementPrice: 150}
        ],
        instrumentation: ["cello", "piano"],
        price: 250
    },
    {
        title: "Sonata No. 5 in D major, Op. 102, No. 2",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro con brio", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Adagio con molto sentimento d'affetto", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Allegro fugato", movementPrice: 180}
        ],
        instrumentation: ["cello", "piano"],
        price: 325
    },
    {
        title: "Sonata No. 30 in E major",
        composer: "Beethoven, Ludwig van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Vivace ma non troppo. Sempre legato", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Prestissimo", movementPrice: 120},
            {movementNumber: 3, movementTitle: "III. Andante molto cantabile ed espressivo", movementPrice: 150},
        ],
        instrumentation: ["piano"],
        price: 275
    },
    {
        title: "Diabelli Variations, Op. 120",
        composer: "Beethoven, Ludwig van",
        movements: [],
        instrumentation: ["piano"],
        price: 480
    },
    {
        title: "Für Elise",
        composer: "Beethoven, Ludwig van",
        movements: [],
        instrumentation: ["piano"],
        price: 30
    },
    {
        title: "7 variations on 'Bei Männern' by Mozart",
        composer: "Beethoven, Ludwig van",
        movements: [],
        instrumentation: ["cello", "piano"],
        price: 150
    },
    {
        title: "L'abbandono",
        composer: "Bellini, Vincenzo",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "3 ariette inedite",
        composer: "Bellini, Vincenzo",
        movements: [
            {movementNumber: 1, movementTitle: "I. Il fervido desiderio", movementPrice: 15},
            {movementNumber: 2, movementTitle: "II. Dolente immagine di Fille mia", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Vaga Luna, che inargenti", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: 40
    },
    {
        title: "6 ariette per Marianna Pollini",
        composer: "Bellini, Vincenzo",
        movements: [
            {movementNumber: 1, movementTitle: "I. Malinconia, Ninfa gentile", movementPrice: 15},
            {movementNumber: 2, movementTitle: "II. Vanne, o rosa fortunata", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Bella Nice, che d'amore", movementPrice: 15},
            {movementNumber: 4, movementTitle: "IV. Almen se non poss'io", movementPrice: 15},
            {movementNumber: 5, movementTitle: "V. Per pietà, bell'idol mio", movementPrice: 15},
            {movementNumber: 6, movementTitle: "VI. Ma rendi pur contento", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: 80
    },
    {
        title: "I Capuleti ed i Montecchi",
        composer: "Bellini, Vincenzo",
        movements: [
            {movementNumber: 1, movementTitle: "Se Romeo t'uccise un figlio", movementPrice: 30},
            {movementNumber: 2, movementTitle: "Oh quante volte", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "I puritani",
        composer: "Bellini, Vincenzo",
        movements: [
            {movementNumber: 1, movementTitle: "Ah! per sempre", movementPrice: 20},
            {movementNumber: 2, movementTitle: "A te, o cara", movementPrice: 15},
            {movementNumber: 3, movementTitle: "Qui la voce", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Norma",
        composer: "Bellini, Vincenzo",
        movements: [
            {movementNumber: 1, movementTitle: "Casta Diva", movementPrice: 15},
            {movementNumber: 2, movementTitle: "Sgombra è sacra selva", movementPrice: 15},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Concerto No. 9 in A minor, Op. 104",
        composer: "Bériot, Charles de",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro maestoso", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Allegretto moderato", movementPrice: 30},
        ],
        instrumentation: ["violin", "orchestra"],
        price: 60
    },
    {
        title: "La bonne cuisine",
        composer: "Bernstein, Leonard",
        movements: [
            {movementNumber: 1, movementTitle: "I. Plum pudding", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Queues de bœuf", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Tavouk gueunksis", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. Civet à toute vitesse", movementPrice: 30}
        ],
        instrumentation: ["voice", "piano"],
        price: 100
    },
    {
        title: "Candide",
        composer: "Bernstein, Leonard",
        movements: [
            {movementNumber: 1, movementTitle: "Glitter and be gay", movementPrice: 60},
            {movementNumber: 2, movementTitle: "I am easily assimilated", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "I hate music!",
        composer: "Bernstein, Leonard",
        movements: [
            {movementNumber: 1, movementTitle: "I. My mother says that babies come in bottles", movementPrice: 15},
            {movementNumber: 2, movementTitle: "II. Jupiter has seven moons", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. I hate music!", movementPrice: 15},
            {movementNumber: 4, movementTitle: "IV. A big Indian and a little Indian", movementPrice: 30},
            {movementNumber: 5, movementTitle: "V. I just found out today that I'm a person too", movementPrice: 15}
        ],
        instrumentation: ["voice", "piano"],
        price: 100
    },
    {
        title: "Sonata",
        composer: "Bernstein, Leonard",
        movements: [
            {movementNumber: 1, movementTitle: "I. Grazioso", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Andantino - Vivace e leggiero", movementPrice: 60},
        ],
        instrumentation: ["clarinet", "piano"],
        price: 100
    },
    {
        title: "Trouble in Tahiti",
        composer: "Bernstein, Leonard",
        movements: [
            {movementNumber: 1, movementTitle: "What a movie!", movementPrice: 45},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "West side story",
        composer: "Bernstein, Leonard",
        movements: [
            {movementNumber: 1, movementTitle: "Maria", movementPrice: 15},
            {movementNumber: 2, movementTitle: "Tonight", movementPrice: 30},
            {movementNumber: 3, movementTitle: "I feel pretty", movementPrice: 30},
            {movementPrice: 4, movementTitle: "Somewhere", movementPrice: 15},
            {movementPrice: 5, movementTitle: "A boy like that", movementPrice: 30}
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Carmen",
        composer: "Bizet, Georges",
        movements: [
            {movementNumber: 1, movementTitle: "L'amour est un oiseau rebelle (Habañera)", movementPrice: 15},
            {movementNumber: 2, movementTitle: "Près des remparts de Séville (Seguidilla)", movementPrice: 20},
            {movementNumber: 3, movementTitle: "Les tringles des sistres tintaient (Gypsy song)", movementPrice: 30},
            {movementNumber: 4, movementTitle: "Votre toast", movementPrice: 45},
            {movementNumber: 5, movementTitle: "Nous avons en tête une affaire", movementPrice: 30},
            {movementNumber: 6, movementTitle: "La fleur que tu m'avais jetée", movementPrice: 20},
            {movementNumber: 7, movementTitle: "Mêlons! Coupons!", movementPrice: 30},
            {movementNumber: 8, movementTitle: "Je dis, que rien ne m'épouvante", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: 450
    },
    {
        title: "Ouvre ton cœur",
        composer: "Bizet, Georges",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Le pêcheurs de perles",
        composer: "Bizet, Georges",
        movements: [
            {movementNumber: 1, movementTitle: "Au fond du temple saint", movementPrice: 30},
            {movementNumber: 2, movementTitle: "Je crois entendre encore", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "The new suit",
        composer: "Blitzstein, Marc",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Suite Hébraïque",
        composer: "Bloch, Ernest",
        movements: [
            {movementNumber: 1, movementTitle: "I. Rapsodie", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Processional", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Affirmation", movementPrice: 30}
        ],
        instrumentation: ["viola", "piano"],
        price: 80
    },
    {
        title: "Suite modale",
        composer: "Bloch, Ernest",
        movements: [
            {movementNumber: 1, movementTitle: "I. Moderato", movementPrice: 15},
            {movementNumber: 2, movementTitle: "II. L'istesso tempo", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Allegro giocoso", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. Adagio - Allegro deciso", movementPrice: 30},
        ],
        instrumentation: ["flute", "piano"],
        price: 75
    },
    {
        title: "City called heaven",
        composer: "Boatner, Edward",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Oh, what a beautiful city",
        composer: "Boatner, Edward",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Sarabande",
        composer: "Bohm, Carl",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 30
    },
    {
        title: "Cabaret songs",
        composer: "Bolcom, William",
        movements: [
            {movementNumber: 1, movementTitle: "Amor", movementPrice: 30},
            {movementNumber: 2, movementTitle: "Waitin'", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "A view from the bridge",
        composer: "Bolcom, William",
        movements: [
            {movementNumber: 1, movementTitle: "The New York Lights", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "3 Dream Portraits",
        composer: "Bonds, Margaret",
        movements: [
            {movementNumber: 1, movementTitle: "I. Minstrel man", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Dream variation", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. I, too", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: 50
    },
    {
        title: "Agrestide",
        composer: "Bozza, Eugene",
        movements: [],
        instrumentation: ["flute", "piano"],
        price: 90
    },
    {
        title: "Aria",
        composer: "Bozza, Eugene",
        movements: [],
        instrumentation: ["saxophone", "piano"],
        price: 15
    },
    {
        title: "Fantasie pastorale",
        composer: "Bozza, Eugene",
        movements: [],
        instrumentation: ["oboe", "piano"],
        price: 45
    },
    {
        title: "New Orleans",
        composer: "Bozza, Eugene",
        movements: [],
        instrumentation: ["trombone", "piano"],
        price: 45
    },
    {
        title: "Sonata No. 1 in C major, Op. 1",
        composer: "Brahms, Johannes",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Andante", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Scherzo. Allegro molto e con fuoco", movementPrice: 120},
            {movementNumber: 4, movementTitle: "IV. Finale. Allegro con fuoco", movementPrice: 120}
        ],
        instrumentation: ["violin", "viola", "cello", "piano"],
        price: 400
    },
    {
        title: "Quartet No. 1 in G minor, Op. 25",
        composer: "Brahms, Johannes",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 75},
            {movementNumber: 2, movementTitle: "II. Allegro ma non troppo", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Andante con moto", movementPrice: 60},
            {movementNumber: 4, movementTitle: "IV. Presto", movementPrice: 120}
        ],
        instrumentation: ["violin", "viola", "cello", "piano"],
        price: 300
    },
    {
        title: "Sonata No. 1 in E minor, Op. 38",
        composer: "Brahms, Johannes",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro non troppo", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Allegretto quasi Menuetto", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Allegro", movementPrice: 120}
        ],
        instrumentation: ["cello", "piano"],
        price: 225
    },
    {
        title: "4 Gesänge, Op. 43",
        composer: "Brahms, Johannes",
        movements: [
            {movementNumber: 1, movementTitle: "I. Von ewiger Liebe", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Die Mainacht", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Quartet No. 3 in C minor, Op. 60",
        composer: "Brahms, Johannes",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro non troppo", movementPrice: 75},
            {movementNumber: 2, movementTitle: "II. Scherzo. Allegro", movementPrice: 75},
            {movementNumber: 3, movementTitle: "III. Andante", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. Finale. Allegro comodo", movementPrice: 75}
        ],
        instrumentation: ["violin", "viola", "cello", "piano"],
        price: 250
    },
    {
        title: "Concerto in D minor, Op. 77",
        composer: "Brahms, Johannes",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro non troppo", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Allegro giocoso, ma non troppo vivace", movementPrice: 90},
        ],
        instrumentation: ["violin", "orchestra"],
        price: 200
    },
    {
        title: "Sonata No. 2 in F major, Op. 99",
        composer: "Brahms, Johannes",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro vivace", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Adagio affettuoso", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Allegro passionato", movementPrice: 90},
            {movementNumber: 4, movementTitle: "IV. Allegro molto", movementPrice: 120}
        ],
        instrumentation: ["cello", "piano"],
        price: 300
    },
    {
        title: "5 Lieder, Op. 105",
        composer: "Brahms, Johannes",
        movements: [
            {movementNumber: 1, movementTitle: "I. Wie Melodien zieht es mir", movementPrice: 15},
            {movementNumber: 2, movementTitle: "II. Immer leiser wird mein Schlummer", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Klage", movementPrice: 15},
            {movementNumber: 4, movementTitle: "IV. Auf dem Kirchhof", movementPrice: 15},
            {movementNumber: 5, movementTitle: "V. Verrat", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: 60
    },
    {
        title: "Sonata No. 3 in D minor, Op. 108",
        composer: "Brahms, Johannes",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Un poco presto e con sentimento", movementPrice: 60},
            {movementNumber: 4, movementTitle: "IV. Presto agitato", movementPrice: 120}
        ],
        instrumentation: ["violin", "piano"],
        price: 275
    },
    {
        title: "Sonata No. 1 in F minor, Op. 120, No. 1",
        composer: "Brahms, Johannes",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro appassionato", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Andante un poco adagio", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Allegretto grazioso", movementPrice: 45},
            {movementNumber: 4, movementTitle: "IV. Vivace", movementPrice: 120}
        ],
        instrumentation: ["clarinet", "piano"],
        price: 250
    },
    {
        title: "Sonata No. 2 in E-flat major, Op. 120, No. 2",
        composer: "Brahms, Johannes",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro amabile", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Allegro appassionato", movementPrice: 90},
            {movementNumber: 3, movementTitle: "III. Andante con moto", movementPrice: 75}
        ],
        instrumentation: ["clarinet", "piano"],
        price: 250
    },
    {
        title: "Sonatensatz",
        composer: "Brahms, Johannes",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 45
    },
    {
        title: "A charm of lullabies",
        composer: "Britten, Benjamin",
        movements: [
            {movementNumber: 1, movementTitle: "I. A cradle song", movementPrice: 15},
            {movementNumber: 2, movementTitle: "II. The highland baiou", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Sephestia's lullaby", movementPrice: 15},
            {movementNumber: 4, movementTitle: "IV. A charm", movementPrice: 15},
            {movementNumber: 5, movementTitle: "V. The nurse's song", movementPrice: 15}
        ],
        instrumentation: ["voice", "piano"],
        price: 60
    },
    {
        title: "2 Insect pieces",
        composer: "Britten, Benjamin",
        movements: [
            {movementNumber: 1, movementTitle: "I. The grasshopper", movementPrice: 15},
            {movementNumber: 2, movementTitle: "II. The wasp", movementPrice: 30},
        ],
        instrumentation: ["oboe", "piano"],
        price: 40
    },
    {
        title: "A midsummer night's dream",
        composer: "Britten, Benjamin",
        movements: [
            {movementNumber: 1, movementTitle: "Be kind and courteous", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Peter Grimes",
        composer: "Britten, Benjamin",
        movements: [
            {movementNumber: 1, movementTitle: "Embroidery in childhood", movementPrice: 15},
        ],
        instrumentation: ["violin", "orchestra"],
        price: 275
    },
    {
        title: "The Salley gardens",
        composer: "Britten, Benjamin",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Concerto No. 1 in G minor, Op. 26",
        composer: "Bruch, Max",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro moderato", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Allegro energico", movementPrice: 75}
        ],
        instrumentation: ["violin", "orchestra"],
        price: 175
    },
    {
        title: "Romance in F major, Op. 85",
        composer: "Bruch, Max",
        movements: [],
        instrumentation: ["viola", "orchestra"],
        price: 45
    },
    {
        title: "Go down, Moses",
        composer: "Burleigh, Henry Thacker",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Lovely dark and lonely one",
        composer: "Burleigh, Henry Thacker",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Sometimes I feel like a motherless child",
        composer: "Burleigh, Henry Thacker",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 15
    },
    {
        title: "5 Songs of Laurence Hope",
        composer: "Burleigh, Henry Thacker",
        movements: [
            {movementNumber: 1, movementTitle: "I. Worth while", movementPrice: 20},
            {movementNumber: 2, movementTitle: "II. The jungle flower", movementPrice: 20},
            {movementNumber: 3, movementTitle: "III. Kashmiri song", movementPrice: 20},
            {movementNumber: 4, movementTitle: "IV. Among the fuchsias", movementPrice: 20},
            {movementNumber: 5, movementTitle: "V. Till I wake", movementPrice: 20}
        ],
        instrumentation: ["voice", "piano"],
        price: 80
    },
    {
        title: "Swing low, sweet chariot",
        composer: "Burleigh, Henry Thacker",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Wade in de water",
        composer: "Burleigh, Henry Thacker",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Weepin' Mary",
        composer: "Burleigh, Henry Thacker",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Transcription of J.S. Bach's 'Chaconne'",
        composer: "Busoni, Ferruccio",
        movements: [],
        instrumentation: ["piano"],
        price: 240
    },
    {
        title: "Alma del core",
        composer: "Caldara, Antonio",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Come raggio di sol",
        composer: "Caldara, Antonio",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "O sole mio!",
        composer: "Capua, Eduardo di",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Ride on, King Jesus",
        composer: "Carter, John",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 75
    },
    {
        title: "Concertino in D major, Op. 107",
        composer: "Chaminade, Cécile",
        movements: [],
        instrumentation: ["flute", "orchestra"],
        price: 45
    },
    {
        title: "Polonaise brillante, Op. 3",
        composer: "Chopin, Frederic",
        movements: [],
        instrumentation: ["cello", "piano"],
        price: 150
    },
    {
        title: "5 Mazurkas, Op. 7",
        composer: "Chopin, Frederic",
        movements: [
            {movementNumber: 1, movementTitle: "Mazurka No. 1 in B-flat major", movementPrice: 20}
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "3 Nocturnes, Op. 9",
        composer: "Chopin, Frederic",
        movements: [
            {movementNumber: 2, movementTitle: "Nocturne No. 2 in E-flat major", movementPrice: 45}
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "12 Études, Op. 10",
        composer: "Chopin, Frederic",
        movements: [
            {movementNumber: 3, movementTitle: "Étude No. 3 in E major 'Farewell'", movementPrice: 75},
            {movementNumber: 5, movementTitle: "Étude No. 5 in G-flat major 'Black keys'", movementPrice: 120}
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "3 Nocturnes, Op. 15",
        composer: "Chopin, Frederic",
        movements: [
            {movementNumber: 2, movementTitle: "Nocturne No. 5 in F-sharp major", movementPrice: 45}
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "4 Mazurkas, Op. 17",
        composer: "Chopin, Frederic",
        movements: [
            {movementNumber: 4, movementTitle: "Mazurka No. 13 in A minor", movementPrice: 20}
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "Ballade No. 1 in G minor, Op. 23",
        composer: "Chopin, Frederic",
        movements: [],
        instrumentation: ["piano"],
        price: 240
    },
    {
        title: "24 Preludes, Op. 28",
        composer: "Chopin, Frederic",
        movements: [
            {movementNumber: 1, movementTitle: "I. Prelude No. 1 in C major", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Prelude No. 2 in A minor", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Prelude No. 3 in G major", movementPrice: 45},
            {movementNumber: 4, movementTitle: "IV. Prelude No. 4 in E minor", movementPrice: 15},
            {movementNumber: 5, movementTitle: "V. Prelude No. 5 in D major", movementPrice: 30},
            {movementNumber: 6, movementTitle: "VI. Prelude No. 6 in B maminorjor", movementPrice: 15},
            {movementNumber: 7, movementTitle: "VII. Prelude No. 7 in A major", movementPrice: 15},
            {movementNumber: 8, movementTitle: "VIII. Prelude No. 8 in F-sharp minor", movementPrice: 45},
            {movementNumber: 9, movementTitle: "IX. Prelude No. 9 in E major", movementPrice: 15},
            {movementNumber: 10, movementTitle: "X. Prelude No. 10 in C-sharp minor", movementPrice: 30},
            {movementNumber: 11, movementTitle: "XI. Prelude No. 11 in B major", movementPrice: 15},
            {movementNumber: 12, movementTitle: "XII. Prelude No. 12 in G-sharp minor", movementPrice: 45},
            {movementNumber: 13, movementTitle: "XIII. Prelude No. 13 in F-sharp major", movementPrice: 30},
            {movementNumber: 14, movementTitle: "XIV. Prelude No. 14 in E-flat minor", movementPrice: 30},
            {movementNumber: 15, movementTitle: "XV. Prelude No. 15 in D-flat major", movementPrice: 30},
            {movementNumber: 16, movementTitle: "XVI. Prelude No. 16 in B-flat minor", movementPrice: 120},
            {movementNumber: 17, movementTitle: "XVII. Prelude No. 17 in A-flat major", movementPrice: 30},
            {movementNumber: 18, movementTitle: "XVIII. Prelude No. 18 in F minor", movementPrice: 45},
            {movementNumber: 19, movementTitle: "XIX. Prelude No. 19 in E-flat major", movementPrice: 120},
            {movementNumber: 20, movementTitle: "XX. Prelude No. 20 in C minor", movementPrice: 15},
            {movementNumber: 21, movementTitle: "XXI. Prelude No. 21 in B-flat major", movementPrice: 30},
            {movementNumber: 22, movementTitle: "XXII. Prelude No. 22 in G minor", movementPrice: 45},
            {movementNumber: 23, movementTitle: "XXIII. Prelude No. 23 in F major", movementPrice: 45},
            {movementNumber: 24, movementTitle: "XXIV. Prelude No. 24 in D minor", movementPrice: 120},
        ],
        instrumentation: ["piano"],
        price: 900
    },
    {
        title: "Scherzo No. 2 in B-flat minor, Op. 31",
        composer: "Chopin, Frederic",
        movements: [],
        instrumentation: ["piano"],
        price: 240
    },
    {
        title: "3 Waltzes, Op. 34",
        composer: "Chopin, Frederic",
        movements: [
            {movementNumber: 1, movementTitle: "Waltz No. 4 in A minor", movementPrice: 45}
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "Prelude in C-sharp minor, Op. 45",
        composer: "Chopin, Frederic",
        movements: [],
        instrumentation: ["piano"],
        price: 30
    },
    {
        title: "2 Nocturnes, Op. 48",
        composer: "Chopin, Frederic",
        movements: [
            {movementNumber: 1, movementTitle: "Nocturne No. 13 in C minor", movementPrice: 120}
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "Ballade No. 4 in F minor, Op. 52",
        composer: "Chopin, Frederic",
        movements: [],
        instrumentation: ["piano"],
        price: 240
    },
    {
        title: "Polonaise in A-flat major, Op. 53 'Heroic'",
        composer: "Chopin, Frederic",
        movements: [],
        instrumentation: ["piano"],
        price: 240
    },
    {
        title: "Berceuse in D-flat major, Op. 57",
        composer: "Chopin, Frederic",
        movements: [],
        instrumentation: ["piano"],
        price: 60
    },
    {
        title: "3 Waltzes, Op. 64",
        composer: "Chopin, Frederic",
        movements: [
            {movementNumber: 1, movementTitle: "Waltz No. 6 in D-flat major 'Minute waltz'", movementPrice: 30}
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "Sonata in G minor, Op. 65",
        composer: "Chopin, Frederic",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro moderato", movementPrice: 180},
            {movementNumber: 2, movementTitle: "II. Scherzo", movementPrice: 150},
            {movementNumber: 3, movementTitle: "III. Largo", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. Finale. Allegro", movementPrice: 180}
        ],
        instrumentation: ["cello", "piano"],
        price: 500
    },
    {
        title: "2 Nocturnes, Op. 62",
        composer: "Chopin, Frederic",
        movements: [
            {movementNumber: 2, movementTitle: "Nocturne No. 18 in E major", movementPrice: 75}
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "Fantaisie-Impromptu, Op. 66",
        composer: "Chopin, Frederic",
        movements: [],
        instrumentation: ["piano"],
        price: 60
    },
    {
        title: "Nocturne No. 20 in C-sharp minor, Op. posth 'Lento con gran espressione'",
        composer: "Chopin, Frederic",
        movements: [],
        instrumentation: ["piano"],
        price: 45
    },
    {
        title: "Adriana Lecouvrer",
        composer: "Cilea, Francisco",
        movements: [
            {movementNumber: 1, movementTitle: "Io son l'umile ancella", movementPrice: 20},
            {movementNumber: 2, movementTitle: "Acerba voluttà", movementPrice: 45},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "L'arlesiana",
        composer: "Cilea, Francisco",
        movements: [
            {movementNumber: 1, movementTitle: "È la solita storia", movementPrice: 20},
        ],
        instrumentation: ["saxophone", "piano"],
        price: 400
    },
    {
        title: "Sonata",
        composer: "Clarke, Rebecca",
        movements: [
            {movementNumber: 1, movementTitle: "I. Impetuoso", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Vivace", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Adagio", movementPrice: 90}
        ],
        instrumentation: ["viola", "piano"],
        price: 225
    },
    {
        title: "Sonatina No. 1 in C major, Op. 36, No. 1",
        composer: "Clementi, Muzio",
        movements: [
            {movementNumber: 1, movementTitle: "I. Spiritoso", movementPrice: 15},
            {movementNumber: 2, movementTitle: "II. Andante", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Vivace", movementPrice: 15}
        ],
        instrumentation: ["piano"],
        price: 40
    },
    {
        title: "Sonata in B minor, Op. 40, No. 2",
        composer: "Clementi, Muzio",
        movements: [
            {movementNumber: 1, movementTitle: "I. Molto adagio e sostenuto", movementPrice: 75},
            {movementNumber: 2, movementTitle: "II. Largo, mesto e patetico", movementPrice: 75},
        ],
        instrumentation: ["piano"],
        price: 125
    },
    {
        title: "At the river",
        composer: "Copland, Aaron",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Concerto",
        composer: "Copland, Aaron",
        movements: [
            {movementNumber: 1, movementTitle: "I. Slowly and expressively", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Rather fast", movementPrice: 120},
        ],
        instrumentation: ["clarinet", "orchestra"],
        price: 150
    },
    {
        title: "The dodger",
        composer: "Copland, Aaron",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "The little horses",
        composer: "Copland, Aaron",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Pastorale",
        composer: "Copland, Aaron",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Simple gifts",
        composer: "Copland, Aaron",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Zion's walls",
        composer: "Copland, Aaron",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Sonata, Op. 19",
        composer: "Creston, Paul",
        movements: [
            {movementNumber: 1, movementTitle: "I. With vigor", movementPrice: 180},
            {movementNumber: 2, movementTitle: "II. With tranquility", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. With gaiety", movementPrice: 180}
        ],
        instrumentation: ["saxophone", "piano"],
        price: 400
    },
    {
        title: "Concerto, Op. 19",
        composer: "Creston, Paul",
        movements: [
            {movementNumber: 1, movementTitle: "I. Energetic", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Meditative", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Rhythmic", movementPrice: 180}
        ],
        instrumentation: ["saxophone", "orchestra"],
        price: 350
    },
    {
        title: "Transcription of Khachaturian's 'Sabre dance'",
        composer: "Cziffra, Gyorgy",
        movements: [],
        instrumentation: ["piano"],
        price: 180
    },
    {
        title: "Concerto",
        composer: "Dahl, Ingolf",
        movements: [
            {movementNumber: 1, movementTitle: "I. Recitative. Maestoso", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Passacaglia. Adagio", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Rondo alla marcia. Allegro brioso", movementPrice: 120}
        ],
        instrumentation: ["saxophone", "orchestra"],
        price: 225
    },
    {
        title: "Sonate en concert",
        composer: "Damase, Jean-Michel",
        movements: [],
        instrumentation: ["flute", "cello", "piano"],
        price: 75
    },
    {
        title: "At the fountain, Op. 20, No. 2",
        composer: "Davidov, Karl",
        movements: [],
        instrumentation: ["cello", "piano"],
        price: 30
    },
    {
        title: "Aquarelles",
        composer: "Debussy, Claude",
        movements: [
            {movementNumber: 1, movementTitle: "I. Green", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Spleen", movementPrice: 30},
        ],
        instrumentation: ["voice", "piano"],
        price: 50
    },
    {
        title: "Ariettes oubliées",
        composer: "Debussy, Claude",
        movements: [
            {movementNumber: 1, movementTitle: "I. C'est l'extase langoureuse", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Il pleure dans mon cœur", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. L'ombre des arbres dans la rivière en brumée", movementPrice: 30}
        ],
        instrumentation: ["voice", "piano"],
        price: 100
    },
    {
        title: "Beau soir",
        composer: "Debussy, Claude",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Fêtes galantes",
        composer: "Debussy, Claude",
        movements: [
            {movementNumber: 1, movementTitle: "I. En sourdine", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Clair de lune", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Fantoches", movementPrice: 45}
        ],
        instrumentation: ["voice", "piano"],
        price: 90
    },
    {
        title: "La mer (arr. Garban)",
        composer: "Debussy, Claude",
        movements: [
            {movementNumber: 1, movementTitle: "I. De l'aube à midi sur la mer", movementPrice: 180},
            {movementNumber: 2, movementTitle: "II. Jeux de vagues", movementPrice: 180},
            {movementNumber: 3, movementTitle: "III. Dialogue du vent et de la mer", movementPrice: 180}
        ],
        instrumentation: ["piano"],
        price: 500
    },
    {
        title: "Les cloches",
        composer: "Debussy, Claude",
        movements: [],
        instrumentation: ["saxophone", "piano"],
        price: 20
    },
    {
        title: "Nuit d'étoiles",
        composer: "Debussy, Claude",
        movements: [],
        instrumentation: ["saxophone", "piano"],
        price: 30
    },
    {
        title: "Première rhapsodie",
        composer: "Debussy, Claude",
        movements: [],
        instrumentation: ["clarinet", "piano"],
        price: 75
    },
    {
        title: "Rêverie",
        composer: "Debussy, Claude",
        movements: [],
        instrumentation: ["piano"],
        price: 45
    },
    {
        title: "Romance",
        composer: "Debussy, Claude",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Suite Bergamasque",
        composer: "Debussy, Claude",
        movements: [
            {movementNumber: 3, movementTitle: "III. Clair de lune", movementPrice: 45},
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "Sonata in C-sharp minor",
        composer: "Decruck, Fernande",
        movements: [
            {movementNumber: 1, movementTitle: "I. Très modéré, expressif", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Andante", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Fileuse", movementPrice: 45},
            {movementNumber: 4, movementTitle: "IV. Nocturne et final", movementPrice: 60}
        ],
        instrumentation: ["saxophone", "piano"],
        price: 175
    },
    {
        title: "Fantaisie sur un thème original",
        composer: "Demersseman, Jules",
        movements: [],
        instrumentation: ["saxophone", "piano"],
        price: 30
    },
    {
        title: "Prelude, cadence, et finale",
        composer: "Desenclos, Alfred",
        movements: [],
        instrumentation: ["saxophone", "piano"],
        price: 180
    },
    {
        title: "Sonata in B-flat minor, Op. 8",
        composer: "Dohnányi, Ernest von",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro, ma non troppo", movementPrice: 180},
            {movementNumber: 2, movementTitle: "II. Scherzo. Vivace assai", movementPrice: 120},
            {movementNumber: 3, movementTitle: "III. Adagio non troppo", movementPrice: 60},
            {movementNumber: 4, movementTitle: "IV. Tema con variazioni", movementPrice: 180}
        ],
        instrumentation: ["cello", "piano"],
        price: 500
    },
    {
        title: "Ah, mai non cessate",
        composer: "Donaudy, Stefano",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "O bei nidi d'amore",
        composer: "Donaudy, Stefano",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "O del mio amato ben",
        composer: "Donaudy, Stefano",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Perduta ho la speranza",
        composer: "Donaudy, Stefano",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Sento nel core",
        composer: "Donaudy, Stefano",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Spirate pur, spirate",
        composer: "Donaudy, Stefano",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Don Pasquale",
        composer: "Donizetti, Gaetano",
        movements: [
            {movementNumber: 1, movementTitle: "Bella siccome un angelo", movementPrice: 20},
            {movementNumber: 2, movementTitle: "Quel guardo il cavaliere", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "L'elisir d'amore",
        composer: "Donizetti, Gaetano",
        movements: [
            {movementNumber: 1, movementTitle: "Quanto è bella", movementPrice: 15},
            {movementNumber: 2, movementTitle: "Come Paride", movementPrice: 15},
            {movementNumber: 3, movementTitle: "Una furtiva lagrima", movementPrice: 15},
            {movementNumber: 4, movementTitle: "Prendi", movementPrice: 15},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "La favorita",
        composer: "Donizetti, Gaetano",
        movements: [
            {movementNumber: 1, movementTitle: "Vien, Leonora", movementPrice: 30},
            {movementNumber: 2, movementTitle: "O mio Fernando", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "La fille du régiment",
        composer: "Donizetti, Gaetano",
        movements: [
            {movementNumber: 1, movementTitle: "Chacun le sait", movementPrice: 20},
            {movementNumber: 2, movementTitle: "Ah mes amis", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: 360
    },
    {
        title: "Lucia di Lammermoor",
        composer: "Donizetti, Gaetano",
        movements: [
            {movementNumber: 1, movementTitle: "Regnava nel silenzio", movementPrice: 30},
            {movementNumber: 2, movementTitle: "Come Paride", movementPrice: 15},
            {movementNumber: 3, movementTitle: "Tombe degli avi miei", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Lucrezia Borgia",
        composer: "Donizetti, Gaetano",
        movements: [
            {movementNumber: 1, movementTitle: "Il segreto per esser felici", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Roberto Devereux",
        composer: "Donizetti, Gaetano",
        movements: [
            {movementNumber: 1, movementTitle: "All'afflitto è dolce il pianto", movementPrice: 15},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Fantaisie pastorale hongroise, Op. 26",
        composer: "Doppler, Franz",
        movements: [],
        instrumentation: ["flute", "orchestra"],
        price: 30
    },
    {
        title: "Concerto in G major",
        composer: "Dragonetti, Domenico",
        movements: [],
        instrumentation: ["contrabass", "orchestra"],
        price: 20
    },
    {
        title: "Be still as you are beautiful",
        composer: "Duke, John",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "The bird",
        composer: "Duke, John",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "I carry your heart",
        composer: "Duke, John",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Little elegy",
        composer: "Duke, John",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Loveliest of trees",
        composer: "Duke, John",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Penguin geometry",
        composer: "Duke, John",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "A piper",
        composer: "Duke, John",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Extase",
        composer: "Duparc, Henri",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "La vague et la cloche",
        composer: "Duparc, Henri",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "La vie antérieure",
        composer: "Duparc, Henri",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Lamento",
        composer: "Duparc, Henri",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Le manoir de Rosemonde",
        composer: "Duparc, Henri",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "L'invitation au voyage",
        composer: "Duparc, Henri",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Phidylé",
        composer: "Duparc, Henri",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 45
    },
    {
        title: "Soupir",
        composer: "Duparc, Henri",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Sarabande et cortége",
        composer: "Dutilleux, Henri",
        movements: [],
        instrumentation: ["bassoon", "piano"],
        price: 45
    },
    {
        title: "Sonatine",
        composer: "Dutilleux, Henri",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegretto", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Andante", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Animé", movementPrice: 60}
        ],
        instrumentation: ["flute", "piano"],
        price: 150
    },
    {
        title: "2 Sonnets de Jean Cassou",
        composer: "Dutilleux, Henri",
        movements: [
            {movementNumber: 1, movementTitle: "I. Il n'y avait que des troncs déchirés", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. J'ai rêvé que je vous portais entre mes bras", movementPrice: 60},
        ],
        instrumentation: ["voice", "piano"],
        price: 100
    },
    {
        title: "Romance in F minor, Op. 11",
        composer: "Dvořák, Antonin",
        movements: [],
        instrumentation: ["violin", "orchestra"],
        price: 45
    },
    {
        title: "Gypsy songs, Op. 55",
        composer: "Dvořák, Antonin",
        movements: [
            {movementNumber: 1, movementTitle: "I. Mein Lied ertönt", movementPrice: 20},
            {movementNumber: 2, movementTitle: "II. Ei! Ei, wie mein Triangel wunderherrlich läutet!", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Rings ist der Wald so stumm und still", movementPrice: 15},
            {movementNumber: 4, movementTitle: "IV. Als die alte Mutter", movementPrice: 15},
            {movementNumber: 5, movementTitle: "V. Eingestimmt die Saiten", movementPrice: 30},
            {movementNumber: 6, movementTitle: "VI. In dem weiten, breiten, Luftigen Leinenkleide", movementPrice: 30},
            {movementNumber: 7, movementTitle: "VII. Darf es Falken Schwinge Tatrahöh'n umrauschen", movementPrice: 30},
        ],
        instrumentation: ["voice", "piano"],
        price: 150
    },
    {
        title: "Waldesruhe, Op. 62",
        composer: "Dvořák, Antonin",
        movements: [],
        instrumentation: ["cello", "orchestra"],
        price: 30
    },
    {
        title: "Quinet in A major, Op. 81",
        composer: "Dvořák, Antonin",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro, ma non tanto", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Dumka. Andante con moto", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Scherzo. Molto vivace", movementPrice: 60},
            {movementNumber: 4, movementTitle: "IV. Finale. Allegro", movementPrice: 75},
        ],
        instrumentation: ["violin", "violin", "viola", "cello", "piano"],
        price: 250
    },
    {
        title: "Humoresques, Op. 101",
        composer: "Dvořák, Antonin",
        movements: [
            {movementNumber: 7, movementTitle: "Humoresque No. 7 in G-flat major", movementPrice: 30},
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "Concerto in B minor, Op. 104",
        composer: "Dvořák, Antonin",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Adagio ma non troppo", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Allegro moderato", movementPrice: 90}
        ],
        instrumentation: ["cello", "orchestra"],
        price: 225
    },
    {
        title: "Rusalka, Op. 114",
        composer: "Dvořák, Antonin",
        movements: [
            {movementNumber: 1, movementTitle: "Mésičku na nebi hlubokém", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Salut d'amour, Op. 12",
        composer: "Elgar, Edward",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 20
    },
    {
        title: "Salut d'amour, Op. 12 (arr. Elgar)",
        composer: "Elgar, Edward",
        movements: [],
        instrumentation: ["piano"],
        price: 30
    },
    {
        title: "Romance in D minor, Op. 62",
        composer: "Elgar, Edward",
        movements: [],
        instrumentation: ["bassoon", "piano"],
        price: 45
    },
    {
        title: "Concerto in E minor, Op. 85",
        composer: "Elgar, Edward",
        movements: [
            {movementNumber: 1, movementTitle: "I. Adagio", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Lento - Allegro molto", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Adagio", movementPrice: 15},
            {movementNumber: 3, movementTitle: "IX. Allegro", movementPrice: 75}
        ],
        instrumentation: ["cello", "orchestra"],
        price: 175
    },
    {
        title: "Cantabile et presto",
        composer: "Enesco, Georges",
        movements: [],
        instrumentation: ["flute", "piano"],
        price: 30
    },
    {
        title: "Concertstuck",
        composer: "Enesco, Georges",
        movements: [],
        instrumentation: ["viola", "piano"],
        price: 45
    },
    {
        title: "Légende",
        composer: "Enesco, Georges",
        movements: [],
        instrumentation: ["trumpet", "piano"],
        price: 60
    },
    {
        title: "Sonata",
        composer: "Ewazen, Eric",
        movements: [
            {movementNumber: 1, movementTitle: "I. Lento - Allegro molto", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Allegretto", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Allegro con fuoco", movementPrice: 75},
        ],
        instrumentation: ["trumpet", "piano"],
        price: 175
    },
    {
        title: "7 canciones populares españolas",
        composer: "Falla, Manuel de",
        movements: [
            {movementNumber: 1, movementTitle: "I. El paño moruno", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Seguidilla murciana", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Asturiana", movementPrice: 15},
            {movementNumber: 4, ovementTitle: "IV. Jota", movementPrice: 30},
            {movementNumber: 5, movementTitle: "V. Nana", movementPrice: 15},
            {movementNumber: 6, movementTitle: "VI. Canción ", movementPrice: 20},
            {movementNumber: 7, ovementTitle: "VII. Polo", movementPrice: 30}
        ],
        instrumentation: ["voice", "piano"],
        price: 150
    },
    {
        title: "2 Songs, Op. 4",
        composer: "Fauré, Gabriel",
        movements: [
            {movementNumber: 1, movementTitle: "I. Lydia", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "3 Mélodies, Op. 7",
        composer: "Fauré, Gabriel",
        movements: [
            {movementNumber: 1, movementTitle: "I. Après un rêve", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "3 Songs, Op. 8",
        composer: "Fauré, Gabriel",
        movements: [
            {movementNumber: 1, movementTitle: "I. Au bord de l'eau", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Ici-bas!", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Quartet in C minor, Op. 15",
        composer: "Fauré, Gabriel",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro molto moderato", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Scherzo. Allegro vivo", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Adagio", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. Allegro molto", movementPrice: 90}
        ],
        instrumentation: ["violin", "viola", "cello", "piano"],
        price: 250
    },
    {
        title: "3 Songs, Op. 18",
        composer: "Fauré, Gabriel",
        movements: [
            {movementNumber: 3, movementTitle: "III. Automne", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Poème d'un jour, Op. 21",
        composer: "Fauré, Gabriel",
        movements: [
            {movementNumber: 1, movementTitle: "I. Recontre", movementPrice: 15},
            {movementNumber: 2, movementTitle: "II. Toujours", movementPrice: 20},
            {movementNumber: 3, movementTitle: "III. Adieu", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: 45
    },
    {
        title: "3 Songs, Op. 23",
        composer: "Fauré, Gabriel",
        movements: [
            {movementNumber: 1, movementTitle: "I. Les berceaux", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Élégie, Op. 24",
        composer: "Fauré, Gabriel",
        movements: [],
        instrumentation: ["cello", "piano"],
        price: 30
    },
    {
        title: "2 Songs, Op. 27",
        composer: "Fauré, Gabriel",
        movements: [
            {movementNumber: 1, movementTitle: "I. Chanson d'amour", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "4 Songs, Op. 39",
        composer: "Fauré, Gabriel",
        movements: [
            {movementNumber: 1, movementTitle: "I. Aurore", movementPrice: 15},
            {movementNumber: 2, movementTitle: "II. Fleur jetée", movementPrice: 30},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Papillon, Op. 77",
        composer: "Fauré, Gabriel",
        movements: [],
        instrumentation: ["cello", "piano"],
        price: 15
    },
    {
        title: "Fantaisie, Op. 79",
        composer: "Fauré, Gabriel",
        movements: [],
        instrumentation: ["flute", "piano"],
        price: 45
    },
    {
        title: "En prière",
        composer: "Fauré, Gabriel",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Concerto in C minor",
        composer: "Finzi, Gerald",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro vigoroso", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Adagio ma senza rigore", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Rondo. Allegro giocoso", movementPrice: 45},
        ],
        instrumentation: ["clarinet", "orchestra"],
        price: 125
    },
    {
        title: "Susannah",
        composer: "Floyd, Carlisle",
        movements: [
            {movementNumber: 1, movementTitle: "Ain't it a pretty night", movementPrice: 30},
            {movementNumber: 2, movementTitle: "The trees on the mountains", movementPrice: 30},
            {movementNumber: 3, movementTitle: "I'm a lonely man, Susannah", movementPrice: 15},
        ],
        instrumentation: ["voice", "orchestra"],
        price: 250
    },
    {
        title: "Beautiful dreamer",
        composer: "Foster, Stephen",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Prelude, fugue, et variation, Op. 18 (arr. Franck",
        composer: "Franck, César",
        movements: [],
        instrumentation: ["piano"],
        price: 120
    },
    {
        title: "Sonata in A major",
        composer: "Franck, César",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro ben moderato", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Allegro", movementPrice: 150},
            {movementNumber: 3, movementTitle: "III. Ben moderato", movementPrice: 60},
            {movementNumber: 4, ovementTitle: "IV. Allegretto poco mosso", movementPrice: 120}
        ],
        instrumentation: ["violin", "piano"],
        price: 400
    },
    {
        title: "Andante et scherzo",
        composer: "Ganne, Louis",
        movements: [],
        instrumentation: ["flute", "piano"],
        price: 45
    },
    {
        title: "Porgy and Bess",
        composer: "Gershwin, George",
        movements: [
            {movementNumber: 1, movementTitle: "Bess, you is my woman now", movementPrice: 45},
            {movementNumber: 2, movementTitle: "I got rhythm", movementPrice: 30},
            {movementNumber: 3, movementTitle: "My man's gone now", movementPrice: 30},
            {movementNumber: 4, movementTitle: "Summertime", movementPrice: 15},
            {movementNumber: 5, movementTitle: "A woman is a sometime thing", movementPrice: 30}
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Rhapsody in Blue (arr. Ahn-Benton)",
        composer: "Gershwin, George",
        movements: [],
        instrumentation: ["piano"],
        price: 360
    },
    {
        title: "Danzas argentinas, Op. 2",
        composer: "Ginastera, Alberto",
        movements: [
            {movementNumber: 1, movementTitle: "I. Danza del viejo boyero", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Danza de la moza donosa", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Danza del gaucho matrero", movementPrice: 180}
        ],
        instrumentation: ["piano"],
        price: 250
    },
    {
        title: "Sonata No. 2, Op. 53",
        composer: "Ginastera, Alberto",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegramente", movementPrice: 180},
            {movementNumber: 2, movementTitle: "II. Adagio sereno", movementPrice: 150},
            {movementNumber: 3, movementTitle: "III. Ostinato aymará", movementPrice: 180}
        ],
        instrumentation: ["piano"],
        price: 500
    },
    {
        title: "Caro mio ben",
        composer: "Giordano, Giuseppe",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Fedora",
        composer: "Giordano, Umberto",
        movements: [
            {movementNumber: 1, movementTitle: "Amor ti vieta", movementPrice: 15},
        ],
        instrumentation: ["piano"],
        price: 250
    },
    {
        title: "Chant du Ménestrel, Op. 71",
        composer: "Glazunov, Aleksandr",
        movements: [],
        instrumentation: ["cello", "orchestra"],
        price: 30
    },
    {
        title: "Concerto in A minor, Op. 82",
        composer: "Glazunov, Aleksandr",
        movements: [
            {movementNumber: 1, movementTitle: "I. Moderato", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Andante", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Tempo I - Allegro", movementPrice: 60}
        ],
        instrumentation: ["violin", "orchestra"],
        price: 175
    },
    {
        title: "Concerto in E-flat major, Op. 109",
        composer: "Glazunov, Aleksandr",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro moderato", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Andante", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Allegro", movementPrice: 180}
        ],
        instrumentation: ["saxophone", "orchestra"],
        price: 250
    },
    {
        title: "The lark (arr. Balakirev)",
        composer: "Glinka, Mikhail",
        movements: [],
        instrumentation: ["piano"],
        price: 90
    },
    {
        title: "Alceste",
        composer: "Gluck, Christoph Willibald von",
        movements: [
            {movementNumber: 1, movementTitle: "Divinités du Styx", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Orfeo ed Euridice",
        composer: "Gluck, Christoph Willibald von",
        movements: [
            {movementNumber: 1, movementTitle: "Che farò senza Euridice", movementPrice: 15},
            {movementNumber: 2, movementTitle: "Che fiero momento", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Faust",
        composer: "Gounod, Charles",
        movements: [
            {movementNumber: 1, movementTitle: "Avant de quitter ces lieux", movementPrice: 20},
            {movementNumber: 2, movementTitle: "Salut demeure chaste et pure", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Roméo et Juliette",
        composer: "Gounod, Charles",
        movements: [
            {movementNumber: 1, movementTitle: "Ah! Lève-toi, soleil!", movementPrice: 20},
            {movementNumber: 2, movementTitle: "Que-fais tu blanche tourterelle", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Amor y odio",
        composer: "Granados, Enrique",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Gracia mia",
        composer: "Granados, Enrique",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "La maja dolorosa",
        composer: "Granados, Enrique",
        movements: [
            {movementNumber: 1, movementTitle: "I. Oh muerte cruel", movementPrice: 20},
            {movementNumber: 2, movementTitle: "II. Ay majo de mi vida", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. De aquel majo amante", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: 50
    },
    {
        title: "El majo timido",
        composer: "Granados, Enrique",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Sonata No. 2 in G minor, Op. 13",
        composer: "Grieg, Edvard",
        movements: [
            {movementNumber: 1, movementTitle: "I. Lento doloroso", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Allegretto tranquillo", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Allegro animato", movementPrice: 60}
        ],
        instrumentation: ["violin", "piano"],
        price: 150
    },
    {
        title: "Sonata No. 3 in C minor, Op. 45",
        composer: "Grieg, Edvard",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro molto ed appassionato", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Allegretto espressivo alla Romanza", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Allegro animato", movementPrice: 90}
        ],
        instrumentation: ["violin", "piano"],
        price: 200
    },
    {
        title: "Lieder, Op. 48",
        composer: "Grieg, Edvard",
        movements: [
            {movementNumber: 6, movementTitle: "VI. Ein Traum", movementPrice: 30},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Suite",
        composer: "Haddad, Don",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro maestoso", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Andante espressivo", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Allegro con brio", movementPrice: 45}
        ],
        instrumentation: ["tuba", "piano"],
        price: 125
    },
    {
        title: "À Chloris",
        composer: "Hahn, Reynaldo",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "D'une prison",
        composer: "Hahn, Reynaldo",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "L'énamourée",
        composer: "Hahn, Reynaldo",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "L'heure exquise",
        composer: "Hahn, Reynaldo",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Quand je fus pris au pavillon",
        composer: "Hahn, Reynaldo",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Si mes vers avaient des ailes",
        composer: "Hahn, Reynaldo",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Guide my feet",
        composer: "Hairston, Jacqueline",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Agrippina",
        composer: "Händel, Georg Friedrich",
        movements: [
            {movementNumber: 1, movementTitle: "Bel piacere", movementPrice: 15},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Alcina",
        composer: "Händel, Georg Friedrich",
        movements: [
            {movementNumber: 1, movementTitle: "Ah, mio cor", movementPrice: 20},
            {movementNumber: 2, movementTitle: "Tornami a vagheggiar", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "L'allegro",
        composer: "Händel, Georg Friedrich",
        movements: [
            {movementNumber: 1, movementTitle: "Come and trip it", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Giulio Cesare",
        composer: "Händel, Georg Friedrich",
        movements: [
            {movementNumber: 1, movementTitle: "Svegliatevi nel core", movementPrice: 30},
            {movementNumber: 2, movementTitle: "V'adoro, pupille", movementPrice: 15},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Joshua",
        composer: "Händel, Georg Friedrich",
        movements: [
            {movementNumber: 1, movementTitle: "Oh, had I Jubal's lyre", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "The Messiah",
        composer: "Händel, Georg Friedrich",
        movements: [
            {movementNumber: 1, movementTitle: "Comfort ye, my people", movementPrice: 15},
            {movementNumber: 2, movementTitle: "Ev'ry valley shall be exalted", movementPrice: 30},
            {movementNumber: 3, movementTitle: "Hallelujah", movementPrice: 30},
            {movementNumber: 4, movementTitle: "O thou that tellest good tidings to Zion", movementPrice: 30},
            {movementNumber: 3, movementTitle: "Rejoice greatly, o daughter of Zion", movementPrice: 30},
            {movementNumber: 3, movementTitle: "Thou shalt break them", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Radamisto",
        composer: "Händel, Georg Friedrich",
        movements: [
            {movementNumber: 1, movementTitle: "Sommi Dei", movementPrice: 15},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Rinaldo",
        composer: "Händel, Georg Friedrich",
        movements: [
            {movementNumber: 1, movementTitle: "Lascia ch'io pianga", movementPrice: 15},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Samson",
        composer: "Händel, Georg Friedrich",
        movements: [
            {movementNumber: 1, movementTitle: "Total eclipse", movementPrice: 15},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Semele",
        composer: "Händel, Georg Friedrich",
        movements: [
            {movementNumber: 1, movementTitle: "Hence, Iris hence away", movementPrice: 30},
            {movementNumber: 2, movementTitle: "Where'er you walk", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Xerxes",
        composer: "Händel, Georg Friedrich",
        movements: [
            {movementNumber: 1, movementTitle: "Ombra mai fu", movementPrice: 15},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Concerto No. 1 in C major",
        composer: "Haydn, Franz Joseph",
        movements: [
            {movementNumber: 1, movementTitle: "I. Moderato", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Allegro molto", movementPrice: 30}
        ],
        instrumentation: ["cello", "orchestra"],
        price: 60
    },
    {
        title: "Concerto No. 2 in D major",
        composer: "Haydn, Franz Joseph",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Allegro", movementPrice: 150}
        ],
        instrumentation: ["cello", "orchestra"],
        price: 60
    },
    {
        title: "Concerto in E-flat major",
        composer: "Haydn, Franz Joseph",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Andante", movementPrice: 20},
            {movementNumber: 3, movementTitle: "III. Allegro", movementPrice: 45}
        ],
        instrumentation: ["trumpet", "orchestra"],
        price: 100
    },
    {
        title: "Concerto No. 1 in C major",
        composer: "Haydn, Franz Joseph",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro moderato", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Presto", movementPrice: 30}
        ],
        instrumentation: ["violin", "orchestra"],
        price: 60
    },
    {
        title: "Concerto No. 2 in G major",
        composer: "Haydn, Franz Joseph",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro moderato", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Allegro", movementPrice: 30}
        ],
        instrumentation: ["violin", "orchestra"],
        price: 60
    },
    {
        title: "Sonata",
        composer: "Heiden, Bernhard",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Vivace", movementPrice: 60},
        ],
        instrumentation: ["saxophone", "piano"],
        price: 100
    },
    {
        title: "Sonata",
        composer: "Hindemith, Paul",
        movements: [
            {movementNumber: 1, movementTitle: "I. Heiter bewegt", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Sehr langsam", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Sehr lebhaft", movementPrice: 60},
            {movementNumber: 4, movementTitle: "IV. Marsch", movementPrice: 30}
        ],
        instrumentation: ["flute", "piano"],
        price: 175
    },
    {
        title: "Sonata",
        composer: "Hindemith, Paul",
        movements: [
            {movementNumber: 1, movementTitle: "I. Munter", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Sehr langsam", movementPrice: 75},
        ],
        instrumentation: ["oboe", "piano"],
        price: 125
    },
    {
        title: "Sonata",
        composer: "Hindemith, Paul",
        movements: [
            {movementNumber: 1, movementTitle: "I. Maßig bewegt", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Lebhaft", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Sehr langsam", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. Kleines Rondo, gemächlich", movementPrice: 60}
        ],
        instrumentation: ["clarinet", "piano"],
        price: 200
    },
    {
        title: "Sonata",
        composer: "Hindemith, Paul",
        movements: [
            {movementNumber: 1, movementTitle: "I. Leicht bewegt", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Langsam", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Marsch", movementPrice: 60},
            {movementNumber: 4, movementTitle: "IV. Beschluß, Pastorale. Ruhig", movementPrice: 15}
        ],
        instrumentation: ["bassoon", "piano"],
        price: 100
    },
    {
        title: "Sonata",
        composer: "Hindemith, Paul",
        movements: [
            {movementNumber: 1, movementTitle: "I. Mit Kraft", movementPrice: 75},
            {movementNumber: 2, movementTitle: "II. Maßig bewegt", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Trauermusik. Sehr langsam", movementPrice: 45},
        ],
        instrumentation: ["trumpet", "piano"],
        price: 150
    },
    {
        title: "Sonata",
        composer: "Hindemith, Paul",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro moderato maestoso", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Allegretto grazioso", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Allegro pesante", movementPrice: 45},
            {movementNumber: 4, movementTitle: "IV. Allegro moderato maestoso", movementPrice: 90}
        ],
        instrumentation: ["trombone", "piano"],
        price: 250
    },
    {
        title: "Sonata",
        composer: "Hindemith, Paul",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro pesante", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Allegro assai", movementPrice: 75},
            {movementNumber: 3, movementTitle: "III. Moderato, commodo", movementPrice: 120},
        ],
        instrumentation: ["tuba", "piano"],
        price: 250
    },
    {
        title: "Sonata",
        composer: "Hindemith, Paul",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegretto", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Scherzo. Allegro assai", movementPrice: 75},
            {movementNumber: 3, movementTitle: "III. Molto adagio", movementPrice: 60},
            {movementNumber: 4, movementTitle: "IV. Lied. Allegretto grazioso", movementPrice: 30}
        ],
        instrumentation: ["contrabass", "piano"],
        price: 200
    },
    {
        title: "Der Schwanendreher",
        composer: "Hindemith, Paul",
        movements: [
            {movementNumber: 1, movementTitle: "I. Zwischen Berg und tiefem Tal", movementPrice: 75},
            {movementNumber: 2, movementTitle: "II. Nun laube, Lindlein laube - Der Gutzgauch auf dem Zaune saß", movementPrice: 90},
            {movementNumber: 3, movementTitle: "III. Seid ihr nicht der Schwanendreher", movementPrice: 90},
        ],
        instrumentation: ["viola", "orchestra"],
        price: 250
    },
    {
        title: "Concerto in D major",
        composer: "Hoffmeister, Franz Anton",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Rondo", movementPrice: 30},
        ],
        instrumentation: ["viola", "orchestra"],
        price: 80
    },
    {
        title: "Deep river",
        composer: "Hogan, Moses",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Give me Jesus",
        composer: "Hogan, Moses",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "He never said a mumbalin' word",
        composer: "Hogan, Moses",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "He's got the whole world in his hands",
        composer: "Hogan, Moses",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Let us break bread together",
        composer: "Hogan, Moses",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Sometimes I feel like a motherless child",
        composer: "Hogan, Moses",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Walk together children",
        composer: "Hogan, Moses",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Were you there?",
        composer: "Hogan, Moses",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Jabberwocky",
        composer: "Hoiby, Lee",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 45
    },
    {
        title: "Transcription of 'Gypsy Song' from Bizet's 'Carmen'",
        composer: "Horowitz, Vladimir",
        movements: [],
        instrumentation: ["piano"],
        price: 360
    },
    {
        title: "Transcription of Liszt's 'Rakóczy March'",
        composer: "Horowitz, Vladimir",
        movements: [],
        instrumentation: ["piano"],
        price: 270
    },
    {
        title: "Concerto in E-flat major",
        composer: "Hummel, Johann Nepomuk",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro con spirito", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Andante", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Rondo", movementPrice: 45}
        ],
        instrumentation: ["trumpet", "orchestra"],
        price: 100
    },
    {
        title: "Come ready and see me",
        composer: "Hundley, Richard",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "I do",
        composer: "Hundley, Richard",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Sweet Suffolk owl",
        composer: "Hundley, Richard",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Waterbird",
        composer: "Hundley, Richard",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Will there really be a morning?",
        composer: "Hundley, Richard",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Élégie et Rondeau",
        composer: "Husa, Karel",
        movements: [
            {movementNumber: 1, movementTitle: "I. Élégie", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Rondeau", movementPrice: 75},
        ],
        instrumentation: ["saxophone", "piano"],
        price: 100
    },
    {
        title: "Chanson du Don Quichotte",
        composer: "Ibert, Jacques",
        movements: [
            {movementNumber: 1, movementTitle: "I. Chanson du départ", movementPrice: 15},
            {movementNumber: 2, movementTitle: "II. Chanson à dulcinée", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Chanson du duc", movementPrice: 20},
            {movementNumber: 4, movementTitle: "IV. Chanson de la mort", movementPrice: 15}
        ],
        instrumentation: ["voice", "piano"],
        price: 75
    },
    {
        title: "Concertino da Camera",
        composer: "Ibert, Jacques",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro con moto", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Larghetto", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Animato molto", movementPrice: 120},
        ],
        instrumentation: ["saxophone", "orchestra"],
        price: 250
    },
    {
        title: "Concerto",
        composer: "Ibert, Jacques",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Andante", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Allegro scherzando", movementPrice: 120},
        ],
        instrumentation: ["flute", "orchestra"],
        price: 250
    },
    {
        title: "Sonata",
        composer: "Janáček, Leoš",
        movements: [
            {movementNumber: 1, movementTitle: "I. Con moto", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Ballada", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Allegretto", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. Adagio", movementPrice: 60},
        ],
        instrumentation: ["violin", "piano"],
        price: 200
    },
    {
        title: "City called heaven",
        composer: "Johnson, Hall",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Honor! Honor!",
        composer: "Johnson, Hall",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "I gotta lie down",
        composer: "Johnson, Hall",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Ride on, King Jesus!",
        composer: "Johnson, Hall",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Chant de Linos",
        composer: "Jolivet, André",
        movements: [],
        instrumentation: ["flute", "piano"],
        price: 240
    },
    {
        title: "Maple leaf rag",
        composer: "Joplin, Scott",
        movements: [],
        instrumentation: ["piano"],
        price: 120
    },
    {
        title: "24 Preludes, Op. 38",
        composer: "Kabalevsky, Dmitri",
        movements: [
            {movementNumber: 8, movementTitle: "Prelude No. 8 in F-sharp minor", movementPrice: 45},
            {movementNumber: 24, movementTitle: "Prelude No. 24 in D minor", movementPrice: 75}
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "Sonata No. 2 in E-flat major, Op. 45",
        composer: "Kabalevsky, Dmitri",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro moderato. Festivamente", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Andante sostenuto", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Presto assai", movementPrice: 150}
        ],
        instrumentation: ["violin", "orchestra"],
        price: 300
    },
    {
        title: "Concerto in C major, Op. 48",
        composer: "Kabalevsky, Dmitri",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro molto e con brio", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Andante cantabile", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Vivace giocoso", movementPrice: 45}
        ],
        instrumentation: ["violin", "orchestra"],
        price: 100
    },
    {
        title: "Ballade No. 2 in B minor",
        composer: "Liszt, Franz",
        movements: [],
        instrumentation: ["piano"],
        price: 240
    },
    {
        title: "Mephisto Waltz No. 1",
        composer: "Liszt, Franz",
        movements: [],
        instrumentation: ["piano"],
        price: 300
    },
    {
        title: "Rigoletto-paraphrase",
        composer: "Liszt, Franz",
        movements: [],
        instrumentation: ["piano"],
        price: 240
    },
    {
        title: "Totentanz (arr. Ahn-Benton)",
        composer: "Liszt, Franz",
        movements: [],
        instrumentation: ["piano"],
        price: 420
    },
    {
        title: "Overture to 'Taras Bula' (arr. for piano)",
        composer: "Lysenko, Mykola",
        movements: [],
        instrumentation: ["piano"],
        price: 150
    },
    {
        title: "Trio No. 1 in D minor, Op. 49",
        composer: "Mendelssohn, Felix",
        movements: [
            {movementNumber: 1, movementTitle: "I. Molto allegro ed agitato", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Andante con moto tranquillo", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Scherzo. Leggiero e vivace", movementPrice: 90},
            {movementNumber: 4, ovementTitle: "IV. Finale. Allegro assai appassionato", movementPrice: 90}
        ],
        instrumentation: ["violin", "cello", "piano"],
        price: 300
    },
    {
        title: "Trio No. 2 in C minor, Op. 66",
        composer: "Mendelssohn, Felix",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro energico e con fuoco", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Andante espressivo", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Scherzo. Molto allegro quasi presto", movementPrice: 90},
            {movementNumber: 4, ovementTitle: "IV. Finale. Allegro appassionato", movementPrice: 90}
        ],
        instrumentation: ["violin", "cello", "piano"],
        price: 300
    },
    {
        title: "Concerto in A major, K. 622",
        composer: "Mendelssohn, Felix",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Allegro", movementPrice: 60}
        ],
        instrumentation: ["clarinet", "orchestra"],
        price: 120
    },
    {
        title: "Concerto in G major, K. 216",
        composer: "Mendelssohn, Felix",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Allegro", movementPrice: 60}
        ],
        instrumentation: ["violin", "orchestra"],
        price: 135
    },
    {
        title: "Concerto in A major, K. 219",
        composer: "Mendelssohn, Felix",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro aperto", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Tempo di menuetto", movementPrice: 60}
        ],
        instrumentation: ["violin", "orchestra"],
        price: 125
    },
    {
        title: "Le nozze di Figaro, K. 492",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "Se vuol ballare", movementPrice: 30},
            {movementNumber: 2, movementTitle: "La vendetta", movementPrice: 20},
            {movementNumber: 3, movementTitle: "Non so più cosa son, coas faccio", movementPrice: 30},
            {movementNumber: 4, movementTitle: "Non più andrai, farfallone amoroso", movementPrice: 30},
            {movementNumber: 5, movementTitle: "Porgi, amor", movementPrice: 15},
            {movementNumber: 6, movementTitle: "Voi, che sapete", movementPrice: 20},
            {movementNumber: 7, movementTitle: "Venite inginocchiatevi", movementPrice: 20},
            {movementNumber: 8, movementTitle: "Un moto di gioia", movementPrice: 15},
            {movementNumber: 9, movementTitle: "Hai, già vinta la causa", movementPrice: 20},
            {movementNumber: 10, movementTitle: "Dove sono i bei momenti", movementPrice: 30},
            {movementNumber: 11, movementTitle: "Deh vieni, non tardar", movementPrice: 20}
        ],
        instrumentation: ["voice", "orchestra"],
        price: 400
    },
    {
        title: "Don Giovanni, K. 527",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "Madamina", movementPrice: 30},
            {movementNumber: 2, movementTitle: "Ho capito", movementPrice: 20},
            {movementNumber: 3, movementTitle: "Là ci darem la mano", movementPrice: 15},
            {movementNumber: 4, movementTitle: "Ah fuggi il traditor", movementPrice: 20},
            {movementNumber: 5, movementTitle: "Or sai, chi l'onore", movementPrice: 20},
            {movementNumber: 6, movementTitle: "Dalla sua pace", movementPrice: 15},
            {movementNumber: 7, movementTitle: "Finch'han dal vino", movementPrice: 20},
            {movementNumber: 8, movementTitle: "Batti, batti o bel Masetto", movementPrice: 30},
            {movementNumber: 9, movementTitle: "Deh, vieni alla finestra", movementPrice: 15},
            {movementNumber: 10, movementTitle: "Vedrai, carino", movementPrice: 15},
            {movementNumber: 11, movementTitle: "Il mio tesoro intanto", movementPrice: 20},
            {movementNumber: 12, movementTitle: "Mi tradì quell'alma ingrata", movementPrice: 20},
            {movementNumber: 13, movementTitle: "Non mi dir", movementPrice: 20}
        ],
        instrumentation: ["voice", "orchestra"],
        price: 400
    },
    {
        title: "Sonata in A minor, K. 310",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro maestoso", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Andante cantabile con espressione", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Presto", movementPrice: 90}
        ],
        instrumentation: ["piano"],
        price: 200
    },
    {
        title: "Sonata in A major, K. 331",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "I. Andante grazioso", movementPrice: 75},
            {movementNumber: 2, movementTitle: "II. Menuetto", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Alla turca. Allegretto 'Turkish March'", movementPrice: 75}
        ],
        instrumentation: ["piano"],
        price: 175
    },
    {
        title: "Pictures at an Exhibition",
        composer: "Mussorgsky, Modest",
        movements: [
            {movementNumber: 1, movementTitle: "Promenade 1", movementPrice: 30},
            {movementNumber: 2, movementTitle: "I. Gnomus", movementPrice: 45},
            {movementNumber: 3, movementTitle: "Promenade 2", movementPrice: 15},
            {movementNumber: 4, movementTitle: "II. Il vecchio castello", movementPrice: 30},
            {movementNumber: 5, movementTitle: "Promenade 3", movementPrice: 15},
            {movementNumber: 6, movementTitle: "III. Tuilleries", movementPrice: 45},
            {movementNumber: 7, movementTitle: "IV. Bydło", movementPrice: 30},
            {movementNumber: 8, movementTitle: "Promenade 4", movementPrice: 15},
            {movementNumber: 9, movementTitle: "V. Балет не вылупившихся птенцов", movementPrice: 40},
            {movementNumber: 10, movementTitle: "VI. Samuel Goldberg und Schmuyle", movementPrice: 30},
            {movementNumber: 11, movementTitle: "Promenade 5", movementPrice: 30},
            {movementNumber: 12, movementTitle: "VII. Limoges", movementPrice: 45},
            {movementNumber: 13, movementTitle: "VIII. Catacombae", movementPrice: 15},
            {movementNumber: 14, movementTitle: "Con mortuis in lingua mortua", movementPrice: 30},
            {movementNumber: 15, movementTitle: "IX. Избушка на курьих ножках", movementPrice: 60},
            {movementNumber: 16, movementTitle: "X. Богатырския ворота", movementPrice: 60}
        ],
        instrumentation: ["piano"],
        price: 500
    },
    {
        title: "Sonata, FP 143",
        composer: "Poulenc, Francis",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro - tempo di marcia", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Cavatine. Très calme", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Ballabile. Très animé et gai", movementPrice: 120},
            {movementNumber: 3, movementTitle: "IV. Finale. Largo, très librement", movementPrice: 120}
        ],
        instrumentation: ["cello", "piano"],
        price: 400
    },
    {
        title: "Sextet",
        composer: "Poulenc, Francis",
        movements: [
            {movementNumber: 1, movementTitle: "I. Très vite et emporté", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Divertissement. Andantino", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Finale. Prestissimo", movementPrice: 120}
        ],
        instrumentation: ["flute", "oboe", "clarinet", "bassoon", "horn", "piano"],
        price: 250
    },
    {
        title: "Concerto No. 1 in D-flat major, Op. 10 (solo)",
        composer: "Prokofiev, Sergei",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro brioso", movementPrice: 180},
            {movementNumber: 2, movementTitle: "II. Andante assai", movementPrice: 90},
            {movementNumber: 3, movementTitle: "III. Allegro scherzando", movementPrice: 240}
        ],
        instrumentation: ["piano", "orchestra"],
        price: 500
    },
    {
        title: "4 Pieces, Op. 4",
        composer: "Prokofiev, Sergei",
        movements: [
            {movementNumber: 4, movementTitle: "IV. Suggestion diabolique", movementPrice: 150}
        ],
        instrumentation: ["piano"],
        price: 300
    },
    {
        title: "Sonata No. 7 in B-flat major, Op. 83",
        composer: "Prokofiev, Sergei",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro inquieto", movementPrice: 240},
            {movementNumber: 2, movementTitle: "II. Andante caloroso", movementPrice: 120},
            {movementNumber: 3, movementTitle: "III. Precipitato", movementPrice: 150}
        ],
        instrumentation: ["piano"],
        price: 500
    },
    {
        title: "Sonata in C major, Op. 119",
        composer: "Prokofiev-, ergei",
        movements: [
            {movementNumber: 1, movementTitle: "I. Andante grave", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Moderato", movementPrice: 90},
            {movementNumber: 3, movementTitle: "III. Allegro, ma non troppo", movementPrice: 150}
        ],
        instrumentation: ["cello", "piano"],
        price: 350
    },
    {
        title: "Sonata in D major, Op. 94",
        composer: "Prokofiev, Sergei",
        movements: [
            {movementNumber: 1, movementTitle: "I. Moderato", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Scherzo. Presto", movementPrice: 90},
            {movementNumber: 3, movementTitle: "III. Andante", movementPrice: 45},
            {movementNumber: 4, movementTitle: "IV. Allegro con brio", movementPrice: 120}
        ],
        instrumentation: ["flute", "piano"],
        price: 350
    },
    {
        title: "Isle of the Dead, Op. 29 (arr. Kirkor)",
        composer: "Rachmaninov, Sergei",
        movements: [],
        instrumentation: ["orchestra"],
        price: 420
    },
    {
        title: "La Bohème",
        composer: "Puccini, Giacomo",
        movements: [
            {movementNumber: 1, movementTitle: "Che gelida manina", movementPrice: 30},
            {movementNumber: 2, movementTitle: "Sì, mi chiamano Mimì", movementPrice: 30},
            {movementNumber: 3, movementTitle: "Quando me 'n vo", movementPrice: 20},
            {movementNumber: 4, movementTitle: "Donde lieta uscì", movementPrice: 15},
            {movementNumber: 5, movementTitle: "Vecchia zimarra", movementPrice: 10}
        ],
        instrumentation: ["voice", "orchestra"],
        price: 500
    },
    {
        title: "Sonata in G minor, Op. 19",
        composer: "Rachmaninov, Sergei",
        movements: [
            {movementNumber: 1, movementTitle: "I. Lento - Allegro moderato", movementPrice: 180},
            {movementNumber: 2, movementTitle: "II. Allegro scherzando", movementPrice: 180},
            {movementNumber: 3, movementTitle: "III. Andante", movementPrice: 90},
            {movementNumber: 4, movementTitle: "IV. Allegro mosso", movementPrice: 210}
        ],
        instrumentation: ["cello", "piano"],
        price: 600
    },
    {
        title: "Etudes-tableaux, Op. 33",
        composer: "Rachmaninov, Sergei",
        movements: [
            {movementNumber: 1, movementTitle: "I. Alegro non troppo", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Allegro", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Grave", movementPrice: 60},
            {movementNumber: 4, movementTitle: "IV. Moderato", movementPrice: 150},
            {movementNumber: 5, movementTitle: "V. Non allegro - Presto", movementPrice: 150},
            {movementNumber: 6, movementTitle: "VI. Allegro con fuoco", movementPrice: 90},
            {movementNumber: 7, movementTitle: "VII. Moderato", movementPrice: 60},
            {movementNumber: 8, movementTitle: "VIII. Grave", movementPrice: 120}
        ],
        instrumentation: ["piano"],
        price: 700
    },
    {
        title: "Rhapsody on a Theme by Paganini, Op. 43 (solo)",
        composer: "Rachmaninov, Sergei",
        movements: [],
        instrumentation: ["piano", "orchestra"],
        price: 600
    },
    {
        title: "Jeux d'eau",
        composer: "Ravel, Maurice",
        movements: [],
        instrumentation: ["piano"],
        price: 150
    },
    {
        title: "2 Preludes, Op. 7",
        composer: "Revutsky, Lev",
        movements: [
            {movementNumber: 1, movementTitle: "I. Andante", movementPrice: 75},
            {movementNumber: 2, movementTitle: "II. Vivace", movementPrice: 60}
        ],
        instrumentation: ["piano"],
        price: 120
    },
    {
        title: "Concerto No. 3 in B minor, Op. 61",
        composer: "Saint-Saëns, Camille",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro non troppo", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Andantino quasi allegretto", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Molto moderato e maestoso - Allegro non troppo", movementPrice: 90}
        ],
        instrumentation: ["violin", "orchestra"],
        price: 150
    },
    {
        title: "Sonata in G minor, K. 30",
        composer: "Scarlatti, Domenico",
        movements: [],
        instrumentation: ["piano"],
        price: 60
    },
    {
        title: "Sonata in B minor, K. 87",
        composer: "Scarlatti, Domenico",
        movements: [],
        instrumentation: ["piano"],
        price: 30
    },
    {
        title: "Sonata in D minor, K. 141",
        composer: "Scarlatti, Domenico",
        movements: [],
        instrumentation: ["piano"],
        price: 90
    },
    {
        title: "Sonata in G major, K. 240",
        composer: "Scarlatti, Domenico",
        movements: [],
        instrumentation: ["piano"],
        price: 75
    },
    {
        title: "Erlkönig",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 120
    },
    {
        title: "Introduction und Variationen",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["flute", "piano"],
        price: 350
    },
    {
        title: "Quintet in E-flat major, Op. 47",
        composer: "Schumann, Robert",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro brillante", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. In modo d'una marcia. Un poco largamente", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Scherzo. Molto vivace", movementPrice: 90},
            {movementNumber: 4, movementTitle: "IV. Allegro ma non troppo", movementPrice: 60}
        ],
        instrumentation: ["violin", "violin", "viola", "cello", "piano"],
        price: 250
    },
    {
        title: "Sonata in D minor, Op. 40",
        composer: "Shostakovich, Dmitri",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro non troppo", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Allegro", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Largo", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. Allegro", movementPrice: 90}
        ],
        instrumentation: ["cello", "piano"],
        price: 225
    },
    {
        title: "Trio No. 2 in E minor, Op. 67",
        composer: "Shostakovich, Dmitri",
        movements: [
            {movementNumber: 1, movementTitle: "I. Andante - Moderato", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Allegro con brio", movementPrice: 75},
            {movementNumber: 3, movementTitle: "III. Largo", movementPrice: 15},
            {movementNumber: 4, movementTitle: "IV. Allegretto", movementPrice: 90}
        ],
        instrumentation: ["violin", "cello", "piano"],
        price: 225
    },
    {
        title: "Sonata, Op. 147",
        composer: "Shostakovich, Dmitri",
        movements: [
            {movementNumber: 1, movementTitle: "I. Moderato", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Allegretto", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Adagio", movementPrice: 30}
        ],
        instrumentation: ["viola", "piano"],
        price: 100
    },
    {
        title: "Concerto in D minor, Op. 47",
        composer: "Sibelius, Jean",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro moderato", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Adagio di molto", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Allegro, ma non tanto", movementPrice: 75}
        ],
        instrumentation: ["violin", "orchestra"],
        price: 200
    },
    {
        title: "4 Lieder",
        composer: "Strauss, Richard",
        movements: [
            {movementNumber: 1, movementTitle: "I. Ruhe, meine Seele", movementPrice: 20},
            {movementNumber: 2, movementTitle: "II. Cäcilie", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Heimliche Aufforderung", movementPrice: 45},
            {movementNumber: 4, movementTitle: "IV. Morgen", movementPrice: 15}
        ],
        instrumentation: ["voice", "piano"],
        price: 125
    },
    {
        title: "Concerto No. 2 in E-flat major",
        composer: "Strauss, Richard",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 150},
            {movementNumber: 2, movementTitle: "II. Andante con moto", movementPrice: 75},
            {movementNumber: 3, movementTitle: "III. Allegro molto", movementPrice: 180}
        ],
        instrumentation: ["horn", "orchestra"],
        price: 400
    },
    {
        title: "Мелодія",
        composer: "Skoryk, Myroslav",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 30
    },
    {
        title: "Concerto in D major, Op. 35",
        composer: "Tchaikovsky, Piotr",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro moderato", movementPrice: 75},
            {movementNumber: 2, movementTitle: "II. Canzonetta. Andante", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Allegro vivacissimo", movementPrice: 90}
        ],
        instrumentation: ["violin", "orchestra"],
        price: 150
    },
    {
        title: "Rigoletto",
        composer: "Verdi, Giuseppe",
        movements: [
            {movementNumber: 1, movementTitle: "Questo o quella", movementPrice: 20},
            {movementNumber: 2, movementTitle: "Quel vecchio maledivami", movementPrice: 20},
            {movementNumber: 3, movementTitle: "Pari siamo", movementPrice: 20},
            {movementNumber: 4, movementTitle: "Caro nome", movementPrice: 30},
            {movementNumber: 5, movementTitle: "Ella mi fu rapita...Farmi veder le lagrime", movementPrice: 30},
            {movementNumber: 6, movementTitle: "Possente amor mi chiama", movementPrice: 30},
            {movementNumber: 7, movementTitle: "Povero Rigoletto", movementPrice: 20},
            {movementNumber: 8, movementTitle: "Cortigiani", movementPrice: 60},
            {movementNumber: 9, movementTitle: "La donna è mobile", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: 400
    },
    {
        title: "The Four Seasons",
        composer: "Vivaldi, Antonio",
        movements: [
            {movementNumber: 1, movementTitle: "La primavera - Allegro", movementPrice: 20},
            {movementNumber: 2, movementTitle: "La primavera - Largo", movementPrice: 15},
            {movementNumber: 3, movementTitle: "La primavera - Allegro", movementPrice: 20},
            {movementNumber: 4, movementTitle: "L'estate - Allegro non molto", movementPrice: 20},
            {movementNumber: 5, movementTitle: "L'estate - Adagio", movementPrice: 15},
            {movementNumber: 6, movementTitle: "L'estate - Presto", movementPrice: 20},
            {movementNumber: 7, movementTitle: "L'autunno - Allegro", movementPrice: 20},
            {movementNumber: 8, movementTitle: "L'autunno - Adagio molto", movementPrice: 15},
            {movementNumber: 9, movementTitle: "L'autunno - La caccia", movementPrice: 20},
            {movementNumber: 10, movementTitle: "L'inverno - Allegro non molto", movementPrice: 20},
            {movementNumber: 11, movementTitle: "L'inverno - Largo", movementPrice: 15},
            {movementNumber: 12, movementTitle: "L'inverno - Allegro", movementPrice: 20},
        ],
        instrumentation: ["violin", "orchestra"],
        price: 200
    },
    {
        title: "Die Walküre",
        composer: "Wagner, Richard",
        movements: [
            {movementNumber: 1, movementTitle: "Ein Schwert verhieß mir der Vater", movementPrice: 45},
            {movementNumber: 2, movementTitle: "Der Männer Sippe sass hier im Saal", movementPrice: 60},
            {movementNumber: 3, movementTitle: "Winterstürme wichen dem Wonnemond", movementPrice: 45},
            {movementNumber: 4, movementTitle: "Du bist der Lenz", movementPrice: 45},
            {movementNumber: 5, movementTitle: "Siegmund heiss' ich", movementPrice: 60},
            {movementNumber: 6, movementTitle: "Wo in Bergen du dich birgst...So ist es denn aus mit den ewigen Göttern", movementPrice: 60},
            {movementNumber: 7, movementTitle: "Hojotoho! (The ride of the Valkyries)", movementPrice: 75},
            {movementNumber: 8, movementTitle: "Leb' wohl", movementPrice: 60},
        ],
        instrumentation: ["voice", "orchestra"],
        price: 600
    },
]

module.exports = opuses