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
        title: "Concerto in D minor",
        composer: "Khachaturian, Aram",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro con fermezza", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Andante sostenuto", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Allegro vivace", movementPrice: 75}
        ],
        instrumentation: ["violin", "orchestra"],
        price: 150
    },
    {
        title: "Allegro maestoso",
        composer: "Koetsier, Jan",
        movements: [],
        instrumentation: ["trombone", "piano"],
        price: 60
    },
    {
        title: "Die tote Stadt, Op. 12",
        composer: "Korngold, Erich Wolfgang",
        movements: [
            {movementNumber: 1, movementTitle: "Glück, das mir verblieb", movementPrice: 20},
            {movementNumber: 2, movementTitle: "Mein Sehnen, mein Wähnen", movementPrice: 30}
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Concerto in D major, Op. 35",
        composer: "Korngold, Erich Wolfgang",
        movements: [
            {movementNumber: 1, movementTitle: "I. Moderato nobile", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Romance. Andante", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Finale. Allegro assai vivace", movementPrice: 90}
        ],
        instrumentation: ["violin", "orchestra"],
        price: 175
    },
    {
        title: "Concerto in F-sharp minor, Op. 3",
        composer: "Koussevitzky, Serge",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Andante", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Allegro", movementPrice: 45}
        ],
        instrumentation: ["contrabass", "orchestra"],
        price: 100
    },
    {
        title: "Danse espagnole",
        composer: "Kreisler, Fritz",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 30
    },
    {
        title: "La gitana",
        composer: "Kreisler, Fritz",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 30
    },
    {
        title: "Marche miniature viennoise",
        composer: "Kreisler, Fritz",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 20
    },
    {
        title: "Melodie",
        composer: "Kreisler, Fritz",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 20
    },
    {
        title: "Praeludium and Allegro",
        composer: "Kreisler, Fritz",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 30
    },
    {
        title: "Transcription of 'Rondo' by Mozart",
        composer: "Kreisler, Fritz",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 30
    },
    {
        title: "Sicilienne and Rigaudon",
        composer: "Kreisler, Fritz",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 15
    },
    {
        title: "Tambourin chinois",
        composer: "Kreisler, Fritz",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 30
    },
    {
        title: "3 Viennese dances",
        composer: "Kreisler, Fritz",
        movements: [
            {movementNumber: 1, movementTitle: "I. Liebesfreud", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Liebesleid", movementPrice: 20},
            {movementNumber: 3, movementTitle: "III. Schon Rosmarin", movementPrice: 15},
        ],
        instrumentation: ["violin", "piano"],
        price: 60
    },
    {
        title: "Banjo and fiddle",
        composer: "Kroll, William",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 15
    },
    {
        title: "Concerto in D minor",
        composer: "Lalo, Edouard",
        movements: [
            {movementNumber: 1, movementTitle: "I. Lento", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Intermezzo. Andantino con moto", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Andante - Allegro vivace", movementPrice: 60},
        ],
        instrumentation: ["cello", "orchestra"],
        price: 100
    },
    {
        title: "Symphonie espagnole",
        composer: "Lalo, Edouard",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro non troppo", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Scherzando. Allegro molto", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Intermezzo. Allegro non troppo", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. Andante", movementPrice: 20},
            {movementNumber: 5, movementTitle: "V. Rondo. Allegro", movementPrice: 60},
        ],
        instrumentation: ["violin", "orchestra"],
        price: 175
    },
    {
        title: "Concerto",
        composer: "Lebedev, Alexei",
        movements: [],
        instrumentation: ["tuba", "orchestra"],
        price: 45
    },
    {
        title: "Andalucía",
        composer: "Lecuona, Ernesto",
        movements: [
            {movementNumber: 6, movementTitle: "Malagueña", movementPrice: 60}
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "Das Land des Lächelns",
        composer: "Lehár, Franz",
        movements: [
            {movementNumber: 1, movementTitle: "Dein ist mein ganzes Herz", movementPrice: 30}
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Giuditta",
        composer: "Lehár, Franz",
        movements: [
            {movementNumber: 1, movementTitle: "Meine Lippen, sie küssen so heiß", movementPrice: 30}
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "The merry widow",
        composer: "Lehár, Franz",
        movements: [
            {movementNumber: 1, movementTitle: "Women", movementPrice: 30}
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Pagliacci",
        composer: "Leoncavallo, Ruggero",
        movements: [
            {movementNumber: 1, movementTitle: "Si può?", movementPrice: 30},
            {movementNumber: 2, movementTitle: "Stridono lassù", movementPrice: 45},
            {movementNumber: 3, movementTitle: "Vesti la giubba", movementPrice: 15},
            {movementNumber: 4, movementTitle: "O Colombina, il tenero fido Arlecchin", movementPrice: 15}
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Années de pélérinage, deuxième année, supplément",
        composer: "Liszt, Franz",
        movements: [
            {movementNumber: 2, movementTitle: "Canzonetta", movementPrice: 30},
            {movementNumber: 3, movementTitle: "Tarantella", movementPrice: 240},
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "Ballade No. 2 in B minor",
        composer: "Liszt, Franz",
        movements: [],
        instrumentation: ["piano"],
        price: 240
    },
    {
        title: "Comment, disaient-ils",
        composer: "Liszt, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Consolations",
        composer: "Liszt, Franz",
        movements: [
            {movementNumber: 3, movementTitle: "III. Lento placido", movementPrice: 45},
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "Im Rhein, im schönen Strome",
        composer: "Liszt, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Mephisto Waltz No. 1",
        composer: "Liszt, Franz",
        movements: [],
        instrumentation: ["piano"],
        price: 300
    },
    {
        title: "Nocturnes",
        composer: "Liszt, Franz",
        movements: [
            {movementNumber: 3, movementTitle: "III. Liebesträume", movementPrice: 60},
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "Oh! Quand je dors",
        composer: "Liszt, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Pace non trovo",
        composer: "Liszt, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 45
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
        title: "Sonata in A-flat major",
        composer: "Lunde, Lawson",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Andantino cantabile", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Allegro vivace", movementPrice: 60},
        ],
        instrumentation: ["saxophone", "piano"],
        price: 125
    },
    {
        title: "Overture to 'Taras Bula' (arr. Lysenko)",
        composer: "Lysenko, Mykola",
        movements: [],
        instrumentation: ["piano"],
        price: 150
    },
    {
        title: "Des Knaben Wunderhorn, Vol. 3",
        composer: "Mahler, Gustav",
        movements: [
            {movementNumber: 4, movementTitle: "Nicht wiedersehen!", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Lieder eines fahrenden Gesellen",
        composer: "Mahler, Gustav",
        movements: [
            {movementNumber: 1, movementTitle: "Wenn mein Schatz Hochzeit mach", movementPrice: 30},
            {movementNumber: 2, movementTitle: "Gieng heut' Morgen über's Feld", movementPrice: 30},
            {movementNumber: 3, movementTitle: "Ich hab' ein glühend Messer", movementPrice: 45},
            {movementNumber: 4, movementTitle: "Die zwei blauen Augen", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: 120
    },
    {
        title: "Rückert-Lieder",
        composer: "Mahler, Gustav",
        movements: [
            {movementNumber: 3, movementTitle: "Ich bin der Welt abhanden gekommen", movementPrice: 30},
            {movementNumber: 4, movementTitle: "Um Mitternacht", movementPrice: 30},
            {movementNumber: 5, movementTitle: "Liebst du um Schönheit", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Concerto in C minor",
        composer: "Mahler, Gustav",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro moderato", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Allegro", movementPrice: 30},
        ],
        instrumentation: ["oboe", "orchestra"],
        price: 60
    },
    {
        title: "Ballade",
        composer: "Martin, Frank",
        movements: [],
        instrumentation: ["flute", "piano"],
        price: 90
    },
    {
        title: "Hat dich die Liebe berührt",
        composer: "Marx, Joseph",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 45
    },
    {
        title: "Cavalleria rusticana",
        composer: "Mascagni, Pietro",
        movements: [
            {movementNumber: 1, movementTitle: "Voi lo sapete, o mamma", movementPrice: 30},
            {movementNumber: 2, movementTitle: "Mamma, quel vino è generoso", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Le Cid",
        composer: "Massenet, Jules",
        movements: [
            {movementNumber: 1, movementTitle: "Pleurez, pleurez mes yeux!", movementPrice: 30},
            {movementNumber: 2, movementTitle: "O souverain, ô juge, ô père", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Élégie",
        composer: "Massenet, Jules",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Hérodiade",
        composer: "Massenet, Jules",
        movements: [
            {movementNumber: 1, movementTitle: "Il est doux, il est bon", movementPrice: 20},
            {movementNumber: 2, movementTitle: "Vision fugitive", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Manon",
        composer: "Massenet, Jules",
        movements: [
            {movementNumber: 1, movementTitle: "Adieu, notre petite table", movementPrice: 20},
            {movementNumber: 2, movementTitle: "En fermant les yeux", movementPrice: 15},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Meditation from 'Thaïs' (arr. Massenet)",
        composer: "Massenet, Jules",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 15
    },
    {
        title: "Werther",
        composer: "Massenet, Jules",
        movements: [
            {movementNumber: 1, movementTitle: "Va! Laisse couler mes larmes", movementPrice: 15},
            {movementNumber: 2, movementTitle: "Pourquoi me réveiller?", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Tableaux de Provence",
        composer: "Maurice, Paule",
        movements: [
            {movementNumber: 1, movementTitle: "I. Farandoulo di chatouno", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Cansoun per ma mio", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. La boumiano", movementPrice: 20},
            {movementNumber: 4, ovementTitle: "IV. Dis alyscamps l'amo soupire", movementPrice: 30},
            {movementNumber: 5, ovementTitle: "V. Lou cabridan", movementPrice: 60}
        ],
        instrumentation: ["saxophone", "piano"],
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
        title: "Concerto in E minor, Op. 64",
        composer: "Mendelssohn, Felix",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro, molto appassionato", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Andante", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Allegretto non troppo - Allegro molto vivace", movementPrice: 60}
        ],
        instrumentation: ["violin", "orchestra"],
        price: 125
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
        title: "Elijah, Op. 70",
        composer: "Mendelssohn, Felix",
        movements: [
            {movementNumber: 1, movementTitle: "Lord God of Abraham", movementPrice: 15},
            {movementNumber: 2, movementTitle: "II. Hear ye, Israel", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. It is enough", movementPrice: 30}
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Amahl and the night visitors",
        composer: "Menotti, Gian Carlo",
        movements: [
            {movementNumber: 1, movementTitle: "All that gold", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: 240
    },
    {
        title: "The consul",
        composer: "Menotti, Gian Carlo",
        movements: [
            {movementNumber: 1, movementTitle: "To this we've come", movementPrice: 45},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "The medium",
        composer: "Menotti, Gian Carlo",
        movements: [
            {movementNumber: 1, movementTitle: "Monica's waltz", movementPrice: 45},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "The old maid and the thief",
        composer: "Menotti, Gian Carlo",
        movements: [
            {movementNumber: 1, movementTitle: "Steal me, sweet thief", movementPrice: 30},
            {movementNumber: 1, movementTitle: "When the air sings of summer", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: 240
    },
    {
        title: "The saint of Bleecker street",
        composer: "Menotti, Gian Carlo",
        movements: [
            {movementNumber: 1, movementTitle: "I know that you all hate me", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Le merle noir",
        composer: "Messiaen, Olivier",
        movements: [],
        instrumentation: ["flute", "piano"],
        price: 75
    },
    {
        title: "Duo concertant",
        composer: "Milhaud, Darius",
        movements: [],
        instrumentation: ["clarinet", "piano"],
        price: 90
    },
    {
        title: "Scaramouche",
        composer: "Milhaud, Darius",
        movements: [
            {movementNumber: 1, movementTitle: "I. Vif", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Modéré", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Brazileira", movementPrice: 60},
        ],
        instrumentation: ["saxophone", "piano"],
        price: 150
    },
    {
        title: "Mazurka",
        composer: "Młynarski, Emil",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 30
    },
    {
        title: "The boy Paganini",
        composer: "Mollenhauser, Edward",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 20
    },
    {
        title: "Cuba dentro un piano",
        composer: "Monsalvatge, Xavier",
        movements: [
            {movementNumber: 1, movementTitle: "I. Cuando mi madre llevaba un sorbetede fresa por sómbreme", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Puntoi de habañera", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Chévere", movementPrice: 15},
            {movementNumber: 4, ovementTitle: "IV. Canción de cuna papa dormir a un negrito", movementPrice: 15},
            {movementNumber: 5, ovementTitle: "V. Canto negro", movementPrice: 30}
        ],
        instrumentation: ["voice", "piano"],
        price: 100
    },
    {
        title: "Lasciatemi morire!",
        composer: "Monteverdi, Claudio",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Czardas",
        composer: "Monti, Vittorio",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 45
    },
    {
        title: "Come down angels",
        composer: "Moore, Undine Smith",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Love let the wind cry...how I adore thee",
        composer: "Moore, Undine Smith",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Watch and pray",
        composer: "Moore, Undine Smith",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Ridente la calme, K. 152",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [],
        instrumentation: ["voice", "orchestra"],
        price: 15
    },
    {
        title: "Exsultate, jubilate, K. 165",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Andante", movementPrice: 20},
            {movementNumber: 3, movementTitle: "III. Allegro", movementPrice: 30}
        ],
        instrumentation: ["voice", "orchestra"],
        price: 80
    },
    {
        title: "Concerto in B-flat major, K. 191",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Andante ma adagio", movementPrice: 20},
            {movementNumber: 3, movementTitle: "III. Tempo di menuetto", movementPrice: 45}
        ],
        instrumentation: ["bassoon", "orchestra"],
        price: 100
    },
    {
        title: "Concerto No. 3 in G major, K. 216",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Allegro", movementPrice: 60}
        ],
        instrumentation: ["violin", "orchestra"],
        price: 135
    },
    {
        title: "Concerto No. 4 in D major, K. 218",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Andante cantabile", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Rondo. Andante grazioso", movementPrice: 45}
        ],
        instrumentation: ["violin", "orchestra"],
        price: 100
    },
    {
        title: "Concerto No. 5 in A major, K. 219",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro aperto", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Tempo di menuetto", movementPrice: 60}
        ],
        instrumentation: ["violin", "orchestra"],
        price: 125
    },
    {
        title: "Adagio in E major, K. 261",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [],
        instrumentation: ["violin", "orchestra"],
        price: 30
    },
    {
        title: "Sonata in E major, K. 304",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Tempo di menuetto", movementPrice: 45},
        ],
        instrumentation: ["violin", "piano"],
        price: 80
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
        title: "Concerto No. 1 in G major, K. 313",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro maestoso", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Adagio ma non troppo", movementPrice: 20},
            {movementNumber: 3, movementTitle: "III. Rondo: Tempo di menuetto", movementPrice: 60}
        ],
        instrumentation: ["flute", "orchestra"],
        price: 125
    },
    {
        title: "Concerto No. 2 in D major, K. 314",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro aperto", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Andante ma non troppo", movementPrice: 20},
            {movementNumber: 3, movementTitle: "III. Allegro", movementPrice: 60}
        ],
        instrumentation: ["flute", "orchestra"],
        price: 100
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
        title: "Idomeneo, K. 366",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "Tutte nel cor vi sento", movementPrice: 20},
            {movementNumber: 2, movementTitle: "Il padre adorato", movementPrice: 20},
            {movementNumber: 3, movementTitle: "D'Oreste, d'Ajace", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Quartet in F major, K. 370 (arr. Mozart)",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Rondo. Allegro", movementPrice: 30}
        ],
        instrumentation: ["oboe", "piano"],
        price: 60
    },
    {
        title: "Die Entführung aus dem Serail, K. 384",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "Ach ich liebte", movementPrice: 30},
            {movementNumber: 2, movementTitle: "Marsch, marsch, marsch", movementPrice: 45},
            {movementNumber: 3, movementTitle: "Durch Zärtlichkeit und Schmeicheln", movementPrice: 20},
            {movementNumber: 4, movementTitle: "Ich gehe, doch rate ich Dir", movementPrice: 30},
            {movementNumber: 5, movementTitle: "Martern aller Arten", movementPrice: 45},
            {movementNumber: 6, movementTitle: "Welche Wonne, welche Lust", movementPrice: 30},
            {movementNumber: 7, movementTitle: "Frisch zum Kampfe!", movementPrice: 30},
            {movementNumber: 8, movementTitle: "Vivat Bacchus! Bacchus lebe!", movementPrice: 30},
            {movementNumber: 9, movementTitle: "Ach! Belmonte", movementPrice: 45},
            {movementNumber: 10, movementTitle: "O! Wie will ich triumphiren", movementPrice: 30},
            {movementNumber: 11, movementTitle: "Welch' ein Geschick!", movementPrice: 30},
            {movementNumber: 12, movementTitle: "Nie werd' ich deine huld verkennen", movementPrice: 45},
        ],
        instrumentation: ["voice", "orchestra"],
        price: 360
    },
    {
        title: "Quintet in E-flat major, K. 452",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "I. Largo", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Larghetto", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Allegretto", movementPrice: 90}
        ],
        instrumentation: ["oboe", "clarinet", "bassoon", "horn", "piano"],
        price: 200
    },
    {
        title: "Quartet in G minor, K. 478",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Andante", movementPrice: 20},
            {movementNumber: 3, movementTitle: "III. Rondo. Allegro moderato", movementPrice: 75}
        ],
        instrumentation: ["violin", "viola", "cello", "piano"],
        price: 150
    },
    {
        title: "Das Veilchen, K. 476",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Der Schauspieldirektor, K. 486",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "Bester Jüngling", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
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
        title: "Alma grande e nobil core, K. 578",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 45
    },
    {
        title: "Così fan tutte, K. 588",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "Smanie implacabili", movementPrice: 45},
            {movementNumber: 2, movementTitle: "In uomini", movementPrice: 20},
            {movementNumber: 3, movementTitle: "Come scoglio", movementPrice: 45},
            {movementNumber: 4, movementTitle: "Non siate ritrosi", movementPrice: 15},
            {movementNumber: 5, movementTitle: "Rivolgete a lui lo sguardo", movementPrice: 45},
            {movementNumber: 6, movementTitle: "Un'aura amorosa", movementPrice: 15},
            {movementNumber: 7, movementTitle: "Per pietà, ben mio", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Die Zauberflöte, K. 620",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "Der Vogelfänger bin ich ja", movementPrice: 15},
            {movementNumber: 2, movementTitle: "Dies Bildnis ist bezaubernd schön", movementPrice: 20},
            {movementNumber: 3, movementTitle: "O zittre nicht, mein lieber Sohn", movementPrice: 30},
            {movementNumber: 4, movementTitle: "O Isis und Osiris", movementPrice: 15},
            {movementNumber: 5, movementTitle: "Der Hölle Rache", movementPrice: 30},
            {movementNumber: 6, movementTitle: "In diesen Heilgen Hallen", movementPrice: 15},
            {movementNumber: 7, movementTitle: "Ach, ich fühl's", movementPrice: 15},
            {movementNumber: 8, movementTitle: "Ein Mädchen oder Weibchen", movementPrice: 30},
            {movementNumber: 9, movementTitle: "Papagena, Papagena, Papagena", movementPrice: 20}
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "La clemenza di Tito, K. 621",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "Parto, parto", movementPrice: 45},
            {movementNumber: 2, movementTitle: "Non più di fiori", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Concerto in A major, K. 622",
        composer: "Mozart, Wolfgang Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Allegro", movementPrice: 60}
        ],
        instrumentation: ["clarinet", "orchestra"],
        price: 120
    },
    {
        title: "Sonata, Op. 29",
        composer: "Muczynski, Robert",
        movements: [
            {movementNumber: 1, movementTitle: "I. Andante maestoso", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Allegro energico", movementPrice: 75},
        ],
        instrumentation: ["saxophone", "piano"],
        price: 100
    },
    {
        title: "Time pieces, Op. 43",
        composer: "Muczynski, Robert",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro risoluto", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Andante espressivo", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Allegro moderato", movementPrice: 45},
            {movementNumber: 4, movementTitle: "IV. Andante molto - Allegro energico", movementPrice: 60}
        ],
        instrumentation: ["clarinet", "piano"],
        price: 200
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
        title: "Concerto",
        composer: "Nielsen, Carl",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro moderato", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Allegretto un poco", movementPrice: 90},
        ],
        instrumentation: ["flute", "orchestra"],
        price: 175
    },
    {
        title: "Perpetuum mobile",
        composer: "Novaček, Ottokar",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 30
    },
    {
        title: "Canciones clásicas españolas",
        composer: "Obradors, Fernando",
        movements: [
            {movementNumber: 1, movementTitle: "I. La mi sola", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Al amor", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Corazón, porqué pasáis", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. El majo celoso", movementPrice: 30},
            {movementNumber: 5, movementTitle: "V. Con amores, la mi madre", movementPrice: 15},
            {movementNumber: 6, movementTitle: "VI. Del cabello más sutil", movementPrice: 20},
            {movementNumber: 7, movementTitle: "VII. Chiquitita la novia", movementPrice: 45}
        ],
        instrumentation: ["voice", "piano"],
        price: 175
    },
    {
        title: "El vito",
        composer: "Obradors, Fernando",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Psyché",
        composer: "Paladilhe, Émile",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Solo de concours",
        composer: "Paladilhe, Émile",
        movements: [],
        instrumentation: ["oboe", "piano"],
        price: 45
    },
    {
        title: "Nina",
        composer: "Pergolesi, Giovanni Battista",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Se tu m'ami, se sospiri",
        composer: "Pergolesi, Giovanni Battista",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "La serva padrona",
        composer: "Pergolesi, Giovanni Battista",
        movements: [
            {movementNumber: 1, movementTitle: "Stizzoso, mio stizzoso", movementPrice: 30}
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Seasons",
        composer: "Piazzolla, Astor",
        movements: [
            {movementNumber: 1, movementTitle: "I. Otoño", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Invierno", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Primavera", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. Verano", movementPrice: 30}
        ],
        instrumentation: ["violin", "cello", "piano"],
        price: 100
    },
    {
        title: "Estrellita",
        composer: "Ponce, Manuel",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Estrellita (arr. Heifetz)",
        composer: "Ponce, Manuel",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 30
    },
    {
        title: "Elfentanz, Op. 39",
        composer: "Popper, David",
        movements: [],
        instrumentation: ["cello", "piano"],
        price: 20
    },
    {
        title: "Hungarian rhapsody, Op. 68",
        composer: "Popper, David",
        movements: [],
        instrumentation: ["cello", "piano"],
        price: 45
    },
    {
        title: "Requiem, Op. 66",
        composer: "Popper, David",
        movements: [],
        instrumentation: ["cello", "cello", "cello", "piano"],
        price: 30
    },
    {
        title: "Toréador, FP 11",
        composer: "Poulenc, Francis",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Le bestiaire, FP 15",
        composer: "Poulenc, Francis",
        movements: [
            {movementNumber: 1, movementTitle: "I. Le dromadaire", movementPrice: 20},
            {movementNumber: 2, movementTitle: "II. La chèvre du Thibet", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. La sauterelle", movementPrice: 15},
            {movementNumber: 4, movementTitle: "IV. Le dauphin", movementPrice: 20},
            {movementNumber: 5, movementTitle: "V. L'écrevisse", movementPrice: 15},
            {movementNumber: 6, movementTitle: "VI. La carpe", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: 80
    },
    {
        title: "Trio, FP 43",
        composer: "Poulenc, Francis",
        movements: [
            {movementNumber: 1, movementTitle: "I. Lent - Presto", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Andante con moto", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Rondo. Très vif", movementPrice: 90}
        ],
        instrumentation: ["oboe", "bassoon", "piano"],
        price: 200
    },
    {
        title: "Airs chantes, FP 46",
        composer: "Poulenc, Francis",
        movements: [
            {movementNumber: 1, movementTitle: "I. Air romantique", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Air champêtre", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Air grave", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: 75
    },
    {
        title: "4 poèmes de Guillaume Apollinaire, FP 58",
        composer: "Poulenc, Francis",
        movements: [
            {movementNumber: 3, movementTitle: "III. Avant le cinéma", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Sextet, FP 100",
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
        title: "Fiançailles pour rire, FP 101",
        composer: "Poulenc, Francis",
        movements: [
            {movementNumber: 1, movementTitle: "I. La dame d'André", movementPrice: 20},
            {movementNumber: 2, movementTitle: "II. Dans l'herbe", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Il vole", movementPrice: 45},
            {movementNumber: 4, movementTitle: "IV. Mon cadavre est doux comme un gant", movementPrice: 15},
            {movementNumber: 5, movementTitle: "V. Violon", movementPrice: 45},
            {movementNumber: 6, movementTitle: "VI. Fleurs", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: 150
    },
    {
        title: "Les chemins de l'amour, FP 106",
        composer: "Poulenc, Francis",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Banalités, FP 107",
        composer: "Poulenc, Francis",
        movements: [
            {movementNumber: 1, movementTitle: "I. Chanson d'Orkenise", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Hôtel", movementPrice: 15},
            {movementNumber: 3, movementTitle: "III. Fagnes de Wallorie", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. Voyage à Paris", movementPrice: 30},
            {movementNumber: 5, movementTitle: "V. Sanglots", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: 100
    },
    {
        title: "2 poèmes de Louis Aragon, FP 122",
        composer: "Poulenc, Francis",
        movements: [
            {movementNumber: 1, movementTitle: "I. C", movementPrice: 20},
            {movementNumber: 2, movementTitle: "II. Fêtes galantes", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Calligrammes, FP 140",
        composer: "Poulenc, Francis",
        movements: [
            {movementNumber: 1, movementTitle: "I. L'espionne", movementPrice: 15},
            {movementNumber: 2, movementTitle: "II. Mutation", movementPrice: 20},
            {movementNumber: 3, movementTitle: "III. Vers le sud", movementPrice: 20},
            {movementNumber: 4, movementTitle: "IV. Il pleut", movementPrice: 45},
            {movementNumber: 5, movementTitle: "V. La grâce exilée", movementPrice: 15},
            {movementNumber: 6, movementTitle: "VI. Aussi bien que les cigales", movementPrice: 45},
            {movementNumber: 7, movementTitle: "VII. Voyage", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: 175
    },
    {
        title: "Sonata, FP 143",
        composer: "Poulenc, Francis",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro - tempo di marcia", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Cavatine. Très calme", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Ballabile. Très animé et gai", movementPrice: 120},
            {movementNumber: 4, movementTitle: "IV. Finale. Largo, très librement", movementPrice: 120}
        ],
        instrumentation: ["cello", "piano"],
        price: 400
    },
    {
        title: "Dialogues des Carmélites, FP 159",
        composer: "Poulenc, Francis",
        movements: [],
        instrumentation: ["voice", "orchestra"],
        price: 420
    },
    {
        title: "Sonata, FP 164",
        composer: "Poulenc, Francis",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegretto malinconico", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Cantilena", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Presto giocoso", movementPrice: 60}
        ],
        instrumentation: ["flute", "piano"],
        price: 125
    },
    {
        title: "La courte pailles, FP 178",
        composer: "Poulenc, Francis",
        movements: [
            {movementNumber: 1, movementTitle: "I. Le sommeil", movementPrice: 15},
            {movementNumber: 4, movementTitle: "IV. Ba, be, bi, bo, bu", movementPrice: 20},
            {movementNumber: 7, movementTitle: "VII. Lune d'Avril", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Sonata, FP 184",
        composer: "Poulenc, Francis",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro tristamente", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Romanza. Très calme", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Allegro con fuoco", movementPrice: 60}
        ],
        instrumentation: ["clarinet", "piano"],
        price: 125
    },
    {
        title: "Sonata, FP 185",
        composer: "Poulenc, Francis",
        movements: [
            {movementNumber: 1, movementTitle: "I. Élégie. Paisiblement", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Scherzo. Très animé", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Déploration. Très calme", movementPrice: 30}
        ],
        instrumentation: ["oboe", "piano"],
        price: 125
    },
    {
        title: "A streetcar named Desire",
        composer: "Previn, André",
        movements: [
            {movementNumber: 1, movementTitle: "I want magic", movementPrice: 30},
            {movementNumber: 2, movementTitle: "I'm not a boy", movementPrice: 30},
            {movementNumber: 3, movementTitle: "Sea air", movementPrice: 30}
        ],
        instrumentation: ["oboe", "piano"],
        price: null
    },
    {
        title: "The glory of the day was in her face",
        composer: "Price, Florence",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Night",
        composer: "Price, Florence",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Song to the dark virgin",
        composer: "Price, Florence",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "4 Pieces, Op. 4",
        composer: "Prokofiev, Sergei",
        movements: [
            {movementNumber: 4, movementTitle: "IV. Suggestion diabolique", movementPrice: 150}
        ],
        instrumentation: ["piano"],
        price: null
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
        composer: "Prokofiev, Sergei",
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
        instrumentation: ["flute", "violin", "piano"],
        price: 350
    },
    {
        title: "Avanti urania!",
        composer: "Puccini, Giacomo",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: null
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
        price: null
    },
    {
        title: "Edgar",
        composer: "Puccini, Giacomo",
        movements: [
            {movementNumber: 1, movementTitle: "Questo amor", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "La fanciulla del West",
        composer: "Puccini, Giacomo",
        movements: [
            {movementNumber: 1, movementTitle: "Ch'ella mi creda", movementPrice: 15},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Gianni Schicchi",
        composer: "Puccini, Giacomo",
        movements: [
            {movementNumber: 1, movementTitle: "Avete torto!", movementPrice: 20},
            {movementNumber: 2, movementTitle: "O mio babbino caro", movementPrice: 20},
            {movementNumber: 3, movementTitle: "In testa la cappellina!", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Madama Butterfly",
        composer: "Puccini, Giacomo",
        movements: [
            {movementNumber: 1, movementTitle: "Dovunque al mondo", movementPrice: 15},
            {movementNumber: 2, movementTitle: "Viene la sera", movementPrice: 45},
            {movementNumber: 3, movementTitle: "Un bel dì", movementPrice: 20},
            {movementNumber: 4, movementTitle: "Addio fiorito asil", movementPrice: 20},
            {movementNumber: 5, movementTitle: "Tu? Tu? Piccolo Iddio", movementPrice: 20}
        ],
        instrumentation: ["voice", "orchestra"],
        price: 480
    },
    {
        title: "Manon Lescaut",
        composer: "Puccini, Giacomo",
        movements: [
            {movementNumber: 1, movementTitle: "Donna non vidi mai", movementPrice: 20},
            {movementNumber: 2, movementTitle: "In quelle trine morbide", movementPrice: 15},
            {movementNumber: 3, movementTitle: "Sola perduta, abbandonata", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "La rondine",
        composer: "Puccini, Giacomo",
        movements: [
            {movementNumber: 1, movementTitle: "Chi il bel sogno di Doretta", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Sole e amore",
        composer: "Puccini, Giacomo",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Suor Angelica",
        composer: "Puccini, Giacomo",
        movements: [
            {movementNumber: 1, movementTitle: "Nel silenzio di quei raccoglimenti", movementPrice: 15},
            {movementNumber: 2, movementTitle: "Senza mamma", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: 300
    },
    {
        title: "Il tabarro",
        composer: "Puccini, Giacomo",
        movements: [
            {movementNumber: 1, movementTitle: "Nulla! Silenzio!", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Terra e mare",
        composer: "Puccini, Giacomo",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Tosca",
        composer: "Puccini, Giacomo",
        movements: [
            {movementNumber: 1, movementTitle: "Recondita armonia", movementPrice: 20},
            {movementNumber: 2, movementTitle: "Mario! Mario! Mario!", movementPrice: 30},
            {movementNumber: 3, movementTitle: "Tre sbirri, una carrozza (Te Deum)", movementPrice: 30},
            {movementNumber: 4, movementTitle: "Ov'è Angelotti?", movementPrice: 30},
            {movementNumber: 5, movementTitle: "L'alba vindice appar", movementPrice: 30},
            {movementNumber: 6, movementTitle: "Vissi d'arte", movementPrice: 20},
            {movementNumber: 7, movementTitle: "E lucevan le stelle", movementPrice: 15},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Turandot",
        composer: "Puccini, Giacomo",
        movements: [
            {movementNumber: 1, movementTitle: "Signore, ascolta!", movementPrice: 15},
            {movementNumber: 2, movementTitle: "Non piangere, Liù", movementPrice: 20},
            {movementNumber: 3, movementTitle: "In questa reggia", movementPrice: 30},
            {movementNumber: 4, movementTitle: "Nessun dorma", movementPrice: 20},
            {movementNumber: 5, movementTitle: "Tu, che di gel sei cinta", movementPrice: 15},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Le villi",
        composer: "Puccini, Giacomo",
        movements: [
            {movementNumber: 1, movementTitle: "Se come voi piccina io fossi", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Dido and Aeneas",
        composer: "Purcell, Henry",
        movements: [
            {movementNumber: 1, movementTitle: "When I am laid in earth", movementPrice: 15},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "I attempt from love's sickness to fly",
        composer: "Purcell, Henry",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "If music be the food of love",
        composer: "Purcell, Henry",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Let us dance, let us sing",
        composer: "Purcell, Henry",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Music for a while",
        composer: "Purcell, Henry",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Come back!",
        composer: "Quilter, Roger",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "3 Songs, Op. 3",
        composer: "Quilter, Roger",
        movements: [
            {movementNumber: 1, movementTitle: "Love's philosophy", movementPrice: 30},
            {movementNumber: 2, movementTitle: "Now sleeps the crimson petal", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "3 Shakespeare Songs, Op. 6",
        composer: "Quilter, Roger",
        movements: [
            {movementNumber: 1, movementTitle: "Come away death", movementPrice: 20},
            {movementNumber: 2, movementTitle: "O mistress mine", movementPrice: 20},
            {movementNumber: 3, movementTitle: "Blow, blow, thou winter wind", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "7 Elizabethan lyrics, Op. 12",
        composer: "Quilter, Roger",
        movements: [
            {movementNumber: 1, movementTitle: "Weep you no more", movementPrice: 15},
            {movementNumber: 2, movementTitle: "My life's delight", movementPrice: 20},
            {movementNumber: 7, movementTitle: "Fair house of joy", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "4 Songs, Op. 14",
        composer: "Quilter, Roger",
        movements: [
            {movementNumber: 4, movementTitle: "Song of the blackbird", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "5 Songs of William Blake, Op. 20",
        composer: "Quilter, Roger",
        movements: [
            {movementNumber: 4, movementTitle: "Dream Valley", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "5 Shakespeare Songs, Op. 23",
        composer: "Quilter, Roger",
        movements: [
            {movementNumber: 4, movementTitle: "Take, o take those lips away", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "6 Songs, Op. 24",
        composer: "Quilter, Roger",
        movements: [
            {movementNumber: 5, movementTitle: "Music, when soft voices die", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Trio élégiaque in G minor",
        composer: "Rachmaninov, Sergei",
        movements: [],
        instrumentation: ["violin", "cello", "piano"],
        price: 90
    },
    {
        title: "Алеко (Aleko)",
        composer: "Rachmaninov, Sergei",
        movements: [
            {movementNumber: 1, movementTitle: "Весь табор спит (The whole camp sleeps", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Morceaux de fantaisie, Op. 3",
        composer: "Rachmaninov, Sergei",
        movements: [
            {movementNumber: 1, movementTitle: "I. Elegy in E-flat minor", movementPrice: 45},
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "6 Songs, Op. 4",
        composer: "Rachmaninov, Sergei",
        movements: [
            {movementNumber: 3, movementTitle: "В молчаньи ночи тайной (In the silence of a secret night)", movementPrice: 30},
            {movementNumber: 4, movementTitle: "Не пой, красавица! (Don't sing, beautiful one!)", movementPrice: 30},
            {movementNumber: 5, movementTitle: "Уж ты, нива моя (You, my cornfield)", movementPrice: 20}
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "6 Songs, Op. 8",
        composer: "Rachmaninov, Sergei",
        movements: [
            {movementNumber: 2, movementTitle: "Дитя! Как цветок ты прекрасна (Child! How beautiful you are like a flower)", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "12 Songs, Op. 14",
        composer: "Rachmaninov, Sergei",
        movements: [
            {movementNumber: 9, movementTitle: "Весенния воды (Spring waters)", movementPrice: 45},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Moments musicaux, Op. 16",
        composer: "Rachmaninov, Sergei",
        movements: [
            {movementNumber: 3, movementTitle: "III. Andante cantabile", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. Presto", movementPrice: 120}
        ],
        instrumentation: ["piano"],
        price: null
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
        title: "12 Songs, Op. 21",
        composer: "Rachmaninov, Sergei",
        movements: [
            {movementNumber: 7, movementTitle: "Здесь хорошо (It is good here)", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "15 Songs, Op. 26",
        composer: "Rachmaninov, Sergei",
        movements: [
            {movementNumber: 13, movementTitle: "Вчера мы встретились (Yesterday we met)", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "14 Songs, Op. 34",
        composer: "Rachmaninov, Sergei",
        movements: [
            {movementNumber: 14, movementTitle: "Вокализ (Vocalise)", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "14 Songs, Op. 34 (arr. Ahn-Benton)",
        composer: "Rachmaninov, Sergei",
        movements: [
            {movementNumber: 14, movementTitle: "Вокализ (Vocalise)", movementPrice: 45},
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "Остров мертвых (Isle of the dead), Op. 29 (arr. Kirkor)",
        composer: "Rachmaninov, Sergei",
        movements: [],
        instrumentation: ["orchestra"],
        price: 420
    },
    {
        title: "Etudes-tableaux, Op. 33",
        composer: "Rachmaninov, Sergei",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro non troppo", movementPrice: 60},
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
        title: "Etudes-tableaux, Op. 39",
        composer: "Rachmaninov, Sergei",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro agitato", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Lento assai", movementPrice: 60},
            {movementNumber: 5, movementTitle: "V. Appassionato", movementPrice: 150},
            {movementNumber: 9, movementTitle: "IX. Allegro moderato. Tempo di marcia", movementPrice: 120}
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "Rhapsody on a Theme by Paganini, Op. 43 (solo)",
        composer: "Rachmaninov, Sergei",
        movements: [],
        instrumentation: ["piano", "orchestra"],
        price: 600
    },
    {
        title: "Don Quichotte à Dulcinée",
        composer: "Ravel, Maurice",
        movements: [
            {movementNumber: 1, movementTitle: "Chanson romanesque", movementPrice: 20},
            {movementNumber: 2, movementTitle: "Chanson épique", movementPrice: 15},
            {movementNumber: 3, movementTitle: "Chanson à boire", movementPrice: 30},
        ],
        instrumentation: ["voice", "piano"],
        price: 60
    },
    {
        title: "Jeux d'eau",
        composer: "Ravel, Maurice",
        movements: [],
        instrumentation: ["piano"],
        price: 150
    },
    {
        title: "5 mélodies populaires grecques",
        composer: "Ravel, Maurice",
        movements: [
            {movementNumber: 1, movementTitle: "Chanson de la mariée", movementPrice: 30},
            {movementNumber: 2, movementTitle: "Là-bas, ver l'église", movementPrice: 15},
            {movementNumber: 3, movementTitle: "Quel galant m'est comparable", movementPrice: 30},
            {movementNumber: 4, movementTitle: "Chanson des cueilleuses de lentisques", movementPrice: 15},
            {movementNumber: 5, movementTitle: "Tout gai!", movementPrice: 30},
        ],
        instrumentation: ["voice", "piano"],
        price: 100
    },
    {
        title: "Miroirs",
        composer: "Ravel, Maurice",
        movements: [
            {movementNumber: 4, movementTitle: "Alborada del gracioso", movementPrice: 180},
        ],
        instrumentation: ["piano"],
        price: null
    },
    {
        title: "Pavane pour une infante défunte",
        composer: "Ravel, Maurice",
        movements: [],
        instrumentation: ["piano"],
        price: 60
    },
    {
        title: "Pièce en forme de Habañera (Vocalise-étude)",
        composer: "Ravel, Maurice",
        movements: [],
        instrumentation: ["oboe", "bassoon", "trumpet", "piano"],
        price: 30
    },
    {
        title: "Sonata in G major",
        composer: "Ravel, Maurice",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegretto", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Moderato", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Allegro", movementPrice: 90},
        ],
        instrumentation: ["violin", "piano"],
        price: 200
    },
    {
        title: "Sonate posthume",
        composer: "Ravel, Maurice",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 240
    },
    {
        title: "Tzigane",
        composer: "Ravel, Maurice",
        movements: [],
        instrumentation: ["violin", "piano"],
        price: 120
    },
    {
        title: "Sonata in E minor, Op. 167 'Undine'",
        composer: "Reinecke, Carl",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Intermezzo. Allegretto vivace", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Andante tranquillo", movementPrice: 60},
            {movementNumber: 4, movementTitle: "IV. Finale. Allegro molto agitato ed appassionato, quasi presto", movementPrice: 90},
        ],
        instrumentation: ["flute", "piano"],
        price: 275
    },
    {
        title: "Concerto in D major, Op. 283",
        composer: "Reinecke, Carl",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro molto moderato", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Lento e mesto", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Finale. Moderato", movementPrice: 90},
        ],
        instrumentation: ["flute", "orchestra"],
        price: 225
    },
    {
        title: "Deità silvane",
        composer: "Respighi, Ottorino",
        movements: [
            {movementNumber: 1, movementTitle: "Fauni", movementPrice: 30},
            {movementNumber: 2, movementTitle: "Musica in horto", movementPrice: 15},
            {movementNumber: 3, movementTitle: "Egle", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Nebbie",
        composer: "Respighi, Ottorino",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
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
        title: "Early in the morning",
        composer: "Rorem, Ned",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "The lordly Hudson",
        composer: "Rorem, Ned",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Pippa's song",
        composer: "Rorem, Ned",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Song for a girl",
        composer: "Rorem, Ned",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Song for a fair young lady",
        composer: "Rorem, Ned",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Il barbiere di Siviglia",
        composer: "Rossini, Gioachino",
        movements: [
            {movementNumber: 1, movementTitle: "Largo al factotum", movementPrice: 90},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "La cenerentola",
        composer: "Rossini, Gioachino",
        movements: [
            {movementNumber: 1, movementTitle: "Sì, ritrovarla io giuro", movementPrice: 45},
            {movementNumber: 2, movementTitle: "Non più mesta", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "La danza",
        composer: "Rossini, Gioachino",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 45
    },
    {
        title: "Guillaume Tell",
        composer: "Rossini, Gioachino",
        movements: [
            {movementNumber: 1, movementTitle: "Asile héréditaire", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Introduction, theme, and variations",
        composer: "Rossini, Gioachino",
        movements: [],
        instrumentation: ["clarinet", "orchestra"],
        price: 45
    },
    {
        title: "L'italiana in Algeri",
        composer: "Rossini, Gioachino",
        movements: [
            {movementNumber: 1, movementTitle: "Cruda sorte!", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "La pastorella delle Alpi",
        composer: "Rossini, Gioachino",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "La regata veneziana",
        composer: "Rossini, Gioachino",
        movements: [
            {movementNumber: 1, movementTitle: "Anzoleta avanti la regata", movementPrice: 20},
            {movementNumber: 2, movementTitle: "Anzoleta co passa la regata", movementPrice: 30},
            {movementNumber: 3, movementTitle: "Anzoleta dopo la regata", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: 60
    },
    {
        title: "Semiramide",
        composer: "Rossini, Gioachino",
        movements: [
            {movementNumber: 1, movementTitle: "Bel raggio lusinghier", movementPrice: 20},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Chanson et passepied",
        composer: "Rueff, Jeanine",
        movements: [],
        instrumentation: ["saxophone", "piano"],
        price: 30
    },
    {
        title: "Aimons-nous",
        composer: "Saint-Saëns, Camille",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Introduction et Rondo capriccioso, Op. 28",
        composer: "Saint-Saëns, Camille",
        movements: [],
        instrumentation: ["violin", "orchestra"],
        price: 60
    },
    {
        title: "Concerto No. 1 in A minor, Op. 33",
        composer: "Saint-Saëns, Camille",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro non troppo", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Allegretto con moto", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Tempo I - Allegro", movementPrice: 60}
        ],
        instrumentation: ["cello", "orchestra"],
        price: 125
    },
    {
        title: "Samson et Dalila, Op. 47",
        composer: "Saint-Saëns, Camille",
        movements: [
            {movementNumber: 1, movementTitle: "Amour viens aider ma faiblesse", movementPrice: 30},
            {movementNumber: 2, movementTitle: "Mon cœur s'ouvre à ta voix", movementPrice: 60},
            {movementNumber: 3, movementTitle: "Printemps qui commence", movementPrice: 20}
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
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
        title: "Havanaise, Op. 83",
        composer: "Saint-Saëns, Camille",
        movements: [],
        instrumentation: ["violin", "orchestra"],
        price: 45
    },
    {
        title: "Sonata in D major, Op. 166",
        composer: "Saint-Saëns, Camille",
        movements: [
            {movementNumber: 1, movementTitle: "I. Andantino", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Ad libitum - Allegretto", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Molto allegro", movementPrice: 45},
        ],
        instrumentation: ["oboe", "piano"],
        price: 100
    },
    {
        title: "Sonata in E-flat major, Op. 167",
        composer: "Saint-Saëns, Camille",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegretto", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Allegro animato", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Lento", movementPrice: 20},
            {movementNumber: 4, movementTitle: "IV. Molto allegro", movementPrice: 45}
        ],
        instrumentation: ["clarinet", "piano"],
        price: 125
    },
    {
        title: "Sonatine",
        composer: "Sancan, Pierre",
        movements: [],
        instrumentation: ["flute", "piano"],
        price: 150
    },
    {
        title: "Zigeunerweisen, Op. 20",
        composer: "Sarasate, Pablo de",
        movements: [],
        instrumentation: ["violin", "orchestra"],
        price: 45
    },
    {
        title: "Danzas españolas, Op. 23",
        composer: "Saint-Saëns, Camille",
        movements: [
            {movementNumber: 1, movementTitle: "Malagueña", movementPrice: 30},
            {movementNumber: 3, movementTitle: "Romanza andaluza", movementPrice: 30},
            {movementNumber: 6, movementTitle: "Zapateado", movementPrice: 20},
        ],
        instrumentation: ["violin", "piano"],
        price: 125
    },
    {
        title: "Caprice basque, Op. 24",
        composer: "Sarasate, Pablo de",
        movements: [],
        instrumentation: ["violin", "orchestra"],
        price: 45
    },
    {
        title: "Carmen-fantaisie, Op. 25",
        composer: "Sarasate, Pablo de",
        movements: [],
        instrumentation: ["violin", "orchestra"],
        price: 60
    },
    {
        title: "Navarra, Op. 33",
        composer: "Sarasate, Pablo de",
        movements: [],
        instrumentation: ["violin", "violin", "orchestra"],
        price: 20
    },
    {
        title: "Introduction et Tarentelle, Op. 43",
        composer: "Sarasate, Pablo de",
        movements: [],
        instrumentation: ["violin", "orchestra"],
        price: 45
    },
    {
        title: "Lungi dal caro bene",
        composer: "Sarti, Giuseppe",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Cara e dolce",
        composer: "Scarlatti, Alessandro",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Già il sole dal Gange",
        composer: "Scarlatti, Alessandro",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Le violette",
        composer: "Scarlatti, Alessandro",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Se florindo e fedele",
        composer: "Scarlatti, Alessandro",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Sento nel core",
        composer: "Scarlatti, Alessandro",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "T'amo, sì",
        composer: "Scarlatti, Alessandro",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
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
        title: "Légende, Op. 66",
        composer: "Schmitt, Florent",
        movements: [],
        instrumentation: ["saxophone", "piano"],
        price: 180
    },
    {
        title: "Auf dem Wasser zu singen",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Die Allmacht",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "An die Entfernte",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },{
        title: "An die Laute",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "An die Musik",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "An die Nachtigall",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "An Sylvia",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "An die Türen",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Auflösung",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Ave Maria",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Du bist die Ruh",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Erlkönig",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 120
    },
    {
        title: "Die Forelle",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Frühlingsglaube",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Geheimes",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Gretchen am Spinnrade",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Heidenröslein",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Im Frǔhling",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Impromptus, Op. 90",
        composer: "Schubert, Franz",
        movements: [
            {movementNumber: 4, movementTitle: "Impromptu No. 4 in A-flat major", movementPrice: 60}
        ],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Introduction und Variationen",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["flute", "piano"],
        price: 350
    },
    {
        title: "Die junge Nonne",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 45
    },
    {
        title: "Der Jüngling an der Quelle",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Lied der Mignon",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Das Mädchen",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Die Männer sind méchant",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Meeres Stille",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Nacht und Träume",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Die schöne Müllerin",
        composer: "Schubert, Franz",
        movements: [
            {movementNumber: 1, movementTitle: "Das Wandern", movementPrice: 15},
            {movementNumber: 5, movementTitle: "Am Feierabend", movementPrice: 20},
            {movementNumber: 6, movementTitle: "Der Neugierige", movementPrice: 15},
            {movementNumber: 16, movementTitle: "Die liebe Farbe", movementPrice: 15},
            {movementNumber: 17, movementTitle: "Die böse Farbe", movementPrice: 30},
            {movementNumber: 18, movementTitle: "Trockne Blumen", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Schwanengesang",
        composer: "Schubert, Franz",
        movements: [
            {movementNumber: 1, movementTitle: "Liebesbotschaft", movementPrice: 30},
            {movementNumber: 4, movementTitle: "Ständchen", movementPrice: 20},
            {movementNumber: 10, movementTitle: "Das Fischermädchen", movementPrice: 15},
            {movementNumber: 11, movementTitle: "Die Stadt", movementPrice: 15},
            {movementNumber: 13, movementTitle: "Der Doppelgänger", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Sonata in A minor",
        composer: "Schubert, Franz",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro moderato", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Allegretto", movementPrice: 60},
        ],
        instrumentation: ["viola", "cello", "piano"],
        price: 125
    },
    {
        title: "Sonatine in D major, Op. 137, No. 1",
        composer: "Schubert, Franz",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro molto", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Andante", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Allegro vivace", movementPrice: 45},
        ],
        instrumentation: ["violin", "piano"],
        price: 100
    },
    {
        title: "Der Tod und das Mädchen",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Wanderes Nachtlied II",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 15
    },
    {
        title: "Willkommen und Abschied",
        composer: "Schubert, Franz",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Winterreise",
        composer: "Schubert, Franz",
        movements: [
            {movementNumber: 3, movementTitle: "Gefror'ne Thränen", movementPrice: 15},
            {movementNumber: 5, movementTitle: "Der Lindenbaum", movementPrice: 30},
            {movementNumber: 6, movementTitle: "Wasserfluth", movementPrice: 15},
            {movementNumber: 9, movementTitle: "Irrlicht", movementPrice: 15},
            {movementNumber: 12, movementTitle: "Einsamkeit", movementPrice: 20},
            {movementNumber: 13, movementTitle: "Die Post", movementPrice: 20},
            {movementNumber: 24, movementTitle: "Der Leiermann", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "3 Lieder, Op. 12",
        composer: "Schumann, Clara Wieck",
        movements: [
            {movementNumber: 1, movementTitle: "Er ist gekommen in Sturm und Regen", movementPrice: 45},
            {movementNumber: 2, movementTitle: "Liebst du um Schönheit", movementPrice: 20},
            {movementNumber: 3, movementTitle: "Warum willst du Andre fragen", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: 75
    },
    {
        title: "6 Lieder, Op. 13",
        composer: "Schumann, Clara Wieck",
        movements: [
            {movementNumber: 1, movementTitle: "Ich stand in dunklen Träumen", movementPrice: 20},
            {movementNumber: 2, movementTitle: "Sie liebten sich beide", movementPrice: 20},
            {movementNumber: 6, movementTitle: "Die stille Lotosblume", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Myrthen, Op. 25",
        composer: "Schumann, Robert",
        movements: [
            {movementNumber: 1, movementTitle: "Widmung", movementPrice: 20},
            {movementNumber: 3, movementTitle: "Der Nußbaum", movementPrice: 20},
            {movementNumber: 7, movementTitle: "Der Lotosblume", movementPrice: 15},
            {movementNumber: 14, movementTitle: "Du bist wie eine Blume", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Lieder und Gesänge, Vol. 1, Op. 27",
        composer: "Schumann, Robert",
        movements: [
            {movementNumber: 4, movementTitle: "Jasminenstrauch", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Liederkreis, Op. 39",
        composer: "Schumann, Robert",
        movements: [
            {movementNumber: 1, movementTitle: "In der Fremde", movementPrice: 15},
            {movementNumber: 2, movementTitle: "Intermezzo", movementPrice: 15},
            {movementNumber: 3, movementTitle: "Waldesgespräch", movementPrice: 20},
            {movementNumber: 4, movementTitle: "Die Stille", movementPrice: 15},
            {movementNumber: 5, movementTitle: "Mondnacht", movementPrice: 15},
            {movementNumber: 6, movementTitle: "Schöne Fremde", movementPrice: 20},
            {movementNumber: 7, movementTitle: "Auf einer Burg", movementPrice: 15},
            {movementNumber: 8, movementTitle: "In der Fremde", movementPrice: 20},
            {movementNumber: 9, movementTitle: "Wehmuth", movementPrice: 15},
            {movementNumber: 10, movementTitle: "Zwielicht", movementPrice: 15},
            {movementNumber: 11, movementTitle: "Im Walde", movementPrice: 15},
            {movementNumber: 12, movementTitle: "Frühlingsnacht", movementPrice: 30},
        ],
        instrumentation: ["voice", "piano"],
        price: 200
    },
    {
        title: "5 Lieder, Op. 40",
        composer: "Schumann, Robert",
        movements: [
            {movementNumber: 3, movementTitle: "Der Soldat", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Frauenliebe und -leben, Op. 42",
        composer: "Schumann, Robert",
        movements: [
            {movementNumber: 2, movementTitle: "Er, der Herrlichste von allen", movementPrice: 30},
            {movementNumber: 4, movementTitle: "Du Ring an meinem Finger", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: null
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
        title: "Dichterliebe, Op. 48",
        composer: "Schumann, Robert",
        movements: [
            {movementNumber: 1, movementTitle: "Im wunderschönen Monat Mai", movementPrice: 15},
            {movementNumber: 3, movementTitle: "Die Rose, die Lilie", movementPrice: 20},
            {movementNumber: 5, movementTitle: "Ich will meine Seele tauchen in den Kelch der Lilie hinein", movementPrice: 30},
            {movementNumber: 7, movementTitle: "Ich grolle nicht", movementPrice: 15},
            {movementNumber: 9, movementTitle: "Das ist ein Flöten und Geigen", movementPrice: 30},
            {movementNumber: 13, movementTitle: "Ich hab' im Traum geweinet", movementPrice: 15},
            {movementNumber: 15, movementTitle: "Aus alten Märchen winkt es hervor mit weisser Hand", movementPrice: 30},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Lieder und Gesänge, Vol. 2, Op. 51",
        composer: "Schumann, Robert",
        movements: [
            {movementNumber: 2, movementTitle: "Volksliedchen", movementPrice: 15},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Adagio und Allegro, Op. 70",
        composer: "Schumann, Robert",
        movements: [],
        instrumentation: ["horn", "piano"],
        price: 90
    },
    {
        title: "Fantasiestücke, Op. 73",
        composer: "Schumann, Robert",
        movements: [
            {movementNumber: 1, movementTitle: "I. Zart und mit Ausdruck", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Lebhaft, leicht", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Rasch und mit Feuer", movementPrice: 75},
        ],
        instrumentation: ["clarinet", "cello", "piano"],
        price: 175
    },
    {
        title: "3 Romances, Op. 94",
        composer: "Schumann, Robert",
        movements: [
            {movementNumber: 1, movementTitle: "I. Nicht schnell", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Einfach, innig", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Nicht schnell", movementPrice: 45},
        ],
        instrumentation: ["oboe", "piano"],
        price: 100
    },
    {
        title: "Märchenbilder, Op. 113",
        composer: "Schumann, Robert",
        movements: [
            {movementNumber: 1, movementTitle: "I. Nicht schnell", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Lebhaft", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Rasch", movementPrice: 45},
            {movementNumber: 4, movementTitle: "IV. Langsam, mit melancholischem Ausdruck", movementPrice: 30},
        ],
        instrumentation: ["viola", "piano"],
        price: 150
    },
    {
        title: "Concerto in A minor, Op. 129",
        composer: "Schumann, Robert",
        movements: [
            {movementNumber: 1, movementTitle: "I. Nicht zu schnell", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Etwas zurückhaltend - Langsam", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Sehr lebhaft", movementPrice: 60},
        ],
        instrumentation: ["cello", "orchestra"],
        price: 125
    },
    {
        title: "Black anemones",
        composer: "Schwanter, Joseph",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 60
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
        title: "24 Preludes and Fugues, Op. 87",
        composer: "Shostakovich, Dmitri",
        movements: [
            {movementNumber: 4, movementTitle: "Prelude and Fugue No. 4 in E minor", movementPrice: 90},
            {movementNumber: 15, movementTitle: "Prelude and Fugue No. 15 in D-flat major", movementPrice: 180},
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
        title: "Мелодія (Melody)",
        composer: "Skoryk, Myroslav",
        movements: [],
        instrumentation: ["violin", "orchestra"],
        price: 30
    },
    {
        title: "All night, all day",
        composer: "Sneed, Damien",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 20
    },
    {
        title: "Come by here",
        composer: "Sneed, Damien",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 45
    },
    {
        title: "Deep river",
        composer: "Sneed, Damien",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Down by the riverside",
        composer: "Sneed, Damien",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 45
    },
    {
        title: "Every time I feel the spirit",
        composer: "Sneed, Damien",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Here's one",
        composer: "Sneed, Damien",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Sinner, please don't let this harvest pass",
        composer: "Sneed, Damien",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "Soon ah will be done",
        composer: "Sneed, Damien",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "There is a balm in Gilead",
        composer: "Sneed, Damien",
        movements: [],
        instrumentation: ["voice", "piano"],
        price: 30
    },
    {
        title: "La taberna del puerto",
        composer: "Sorozabal, Pablo",
        movements: [
            {movementNumber: 1, movementTitle: "No puede ser", movementPrice: 20}
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Concerto in D major, Op. 1",
        composer: "Stamitz, Karl",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 45},
            {movementNumber: 2, movementTitle: "II. Andante moderato", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Rondo", movementPrice: 45}
        ],
        instrumentation: ["viola", "orchestra"],
        price: 100
    },
    {
        title: "Die Fledermaus",
        composer: "Strauss, Johann II",
        movements: [
            {movementNumber: 1, movementTitle: "Täubehen das enflattert ist", movementPrice: 15},
            {movementNumber: 2, movementTitle: "So muss allein ich bleiben", movementPrice: 30},
            {movementNumber: 3, movementTitle: "Trinke, Liebchen, trinke schnell", movementPrice: 20},
            {movementNumber: 4, movementTitle: "Ich lade gern mir Gäste ein", movementPrice: 15},
            {movementNumber: 5, movementTitle: "Mein Herr Marquis", movementPrice: 20},
            {movementNumber: 6, movementTitle: "Klänge der Heimat", movementPrice: 20},
            {movementNumber: 7, movementTitle: "Ich stehe voll Zagen", movementPrice: 45},
        ],
        instrumentation: ["voice", "orchestra"],
        price: 300
    },
    {
        title: "8 Gedichte aus 'Letzte Blätter', Op. 10",
        composer: "Strauss, Richard",
        movements: [
            {movementNumber: 1, movementTitle: "Zueignung", movementPrice: 30},
            {movementNumber: 2, movementTitle: "Nichts", movementPrice: 20},
            {movementNumber: 3, movementTitle: "Die Nacht", movementPrice: 15},
            {movementNumber: 7, movementTitle: "Der Verschwiegenen", movementPrice: 15},
            {movementNumber: 8, movementTitle: "Allerseelen", movementPrice: 20}
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Concerto No. 1 in E-flat major, Op. 11",
        composer: "Strauss, Richard",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 60},
            {movementNumber: 2, movementTitle: "II. Andante", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Allegro - Rondo. Allegro", movementPrice: 60}
        ],
        instrumentation: ["horn", "orchestra"],
        price: 150
    },
    {
        title: "4 Lieder, Op. 27",
        composer: "Strauss, Richard",
        movements: [
            {movementNumber: 1, movementTitle: "Ruhe, meine Seele", movementPrice: 20},
            {movementNumber: 2, movementTitle: "Cäcilie", movementPrice: 60},
            {movementNumber: 3, movementTitle: "Heimliche Aufforderung", movementPrice: 45},
            {movementNumber: 4, movementTitle: "Morgen", movementPrice: 15}
        ],
        instrumentation: ["voice", "piano"],
        price: 125
    },
    {
        title: "3 Lieder, Op. 29",
        composer: "Strauss, Richard",
        movements: [
            {movementNumber: 1, movementTitle: "Traum durch die Dämmerung", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "5 Lieder, Op. 32",
        composer: "Strauss, Richard",
        movements: [
            {movementNumber: 1, movementTitle: "Ich trage meine Minne", movementPrice: 20},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "5 Lieder, Op. 39",
        composer: "Strauss, Richard",
        movements: [
            {movementNumber: 4, movementTitle: "Befreit", movementPrice: 30},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "5 Lieder, Op. 48",
        composer: "Strauss, Richard",
        movements: [
            {movementNumber: 2, movementTitle: "Ich schwebe", movementPrice: 30},
            {movementNumber: 3, movementTitle: "Kling!", movementPrice: 30},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "Salome, Op. 54",
        composer: "Strauss, Richard",
        movements: [
            {movementNumber: 1, movementTitle: "Wo ist sie", movementPrice: 45},
            {movementNumber: 2, movementTitle: "Wird dir nicht bange", movementPrice: 45},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Der Rosenkavalier, Op. 59",
        composer: "Strauss, Richard",
        movements: [
            {movementNumber: 1, movementTitle: "Wie du warst", movementPrice: 45},
            {movementNumber: 2, movementTitle: "Di rigori armato", movementPrice: 20},
            {movementNumber: 3, movementTitle: "Mir ist die Ehre", movementPrice: 45},
        ],
        instrumentation: ["voice", "orchestra"],
        price: null
    },
    {
        title: "Ariadne auf Naxos, Op. 60",
        composer: "Strauss, Richard",
        movements: [
            {movementNumber: 1, movementTitle: "Im Gegenteil", movementPrice: 20},
            {movementNumber: 2, movementTitle: "Sein wir wider gut", movementPrice: 60},
            {movementNumber: 3, movementTitle: "Ein schönes war", movementPrice: 20},
            {movementNumber: 4, movementTitle: "Lieben, Hassen, Hoffen, Zagen", movementPrice: 20},
            {movementNumber: 5, movementTitle: "Es gibt ein Reich", movementPrice: 30},
            {movementNumber: 6, movementTitle: "Großmächtige Prinzessin", movementPrice: 45},
        ],
        instrumentation: ["voice", "orchestra"],
        price: 300
    },
    {
        title: "3 Lieder, Op. 67",
        composer: "Strauss, Richard",
        movements: [
            {movementNumber: 1, movementTitle: "Wie erkenn ich nmein Treulieb vor andern nun?", movementPrice: 20},
            {movementNumber: 2, movementTitle: "Guten Morgen, 's ist Sankt Valentinstag", movementPrice: 30},
            {movementNumber: 3, movementTitle: "Sie trugen ihn auf der Bahre bloss", movementPrice: 30},
        ],
        instrumentation: ["voice", "piano"],
        price: 75
    },
    {
        title: "5 Lieder, Op. 68",
        composer: "Strauss, Richard",
        movements: [
            {movementNumber: 2, movementTitle: "Ich wollt ein Sträusslein binden", movementPrice: 20},
            {movementNumber: 3, movementTitle: "Säusle, liebe Myrthe", movementPrice: 45},
            {movementNumber: 5, movementTitle: "Amor", movementPrice: 45},
        ],
        instrumentation: ["voice", "piano"],
        price: null
    },
    {
        title: "5 kleine Lieder, Op. 69",
        composer: "Strauss, Richard",
        movements: [
            {movementNumber: 3, movementTitle: "Einerlei", movementPrice: 45},
            {movementNumber: 5, movementTitle: "Schlechtes Wetter", movementPrice: 45},
        ],
        instrumentation: ["voice", "piano"],
        price: null
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
        title: "Concerto in D major",
        composer: "Strauss, Richard",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro moderato", movementPrice: 120},
            {movementNumber: 2, movementTitle: "II. Andante", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Vivace", movementPrice: 120}
        ],
        instrumentation: ["oboe", "orchestra"],
        price: 275
    },
    {
        title: "Le sacre du printemps (The rite of spring) (arr. Stravinsky for 1P4H) (secondo)",
        composer: "Stravinsky, Igor",
        movements: [],
        instrumentation: ["piano", "piano"],
        price: 300
    },
    {
        title: "Suite italienne",
        composer: "Strauss, Richard",
        movements: [
            {movementNumber: 1, movementTitle: "I. Introduzione", movementPrice: 20},
            {movementNumber: 2, movementTitle: "II. Serenata", movementPrice: 20},
            {movementNumber: 3, movementTitle: "III. Tarantella", movementPrice: 45},
            {movementNumber: 4, movementTitle: "IV. Gavotta con due variazioni", movementPrice: 30},
            {movementNumber: 5, movementTitle: "V. Scherzino", movementPrice: 20},
            {movementNumber: 6, movementTitle: "VI. Minuetto e finale", movementPrice: 60}
        ],
        instrumentation: ["violin", "orchestra"],
        price: 275
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