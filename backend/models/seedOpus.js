const opuses = [
    {
        title: "Elegy",
        composer: "Babadjanian, Arno",
        movements: [],
        instrumentation: ["piano"],
        price: 30
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
        title: "Carmen",
        composer: "Bizet, Georges",
        movements: [
            {movementNumber: 1, movementTitle: "I. L'amour est un oiseau rebelle (Habañera)", movementPrice: 15},
            {movementNumber: 2, movementTitle: "II. Près des remparts de Séville (Seguidilla)", movementPrice: 20},
            {movementNumber: 3, movementTitle: "III. Votre toast", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. La fleur que tu m'avais jetée", movementPrice: 20},
            {movementNumber: 5, movementTitle: "V. Je dis, que rien ne m'épouvante", movementPrice: 30},
        ],
        instrumentation: ["voice", "orchestra"],
        price: 450
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
        title: "Aria",
        composer: "Bozza, Eugene",
        movements: [],
        instrumentation: ["saxophone", "piano"],
        price: 15
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
        title: "Transcription of J.S. Bach's 'Chaconne'",
        composer: "Busoni, Ferruccio",
        movements: [],
        instrumentation: ["piano"],
        price: 240
    },
    {
        title: "Scherzo No. 2 in B-flat minor, Op. 31",
        composer: "Chopin, Frederic",
        movements: [],
        instrumentation: ["piano"],
        price: 240
    },
    {
        title: "Ballade No. 1 in G minor, Op. 23",
        composer: "Chopin, Frederic",
        movements: [],
        instrumentation: ["piano"],
        price: 240
    },
    {
        title: "Ballade No. 4 in F minor, Op. 52",
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
            {movementNumber: 2, movementTitle: "II. Prelude No. 2 in A minor", movementPrice: 10},
            {movementNumber: 3, movementTitle: "III. Prelude No. 3 in G major", movementPrice: 45},
            {movementNumber: 4, movementTitle: "IV. Prelude No. 4 in E minor", movementPrice: 10},
            {movementNumber: 5, movementTitle: "V. Prelude No. 5 in D major", movementPrice: 30},
            {movementNumber: 6, movementTitle: "VI. Prelude No. 6 in B maminorjor", movementPrice: 10},
            {movementNumber: 7, movementTitle: "VII. Prelude No. 7 in A major", movementPrice: 10},
            {movementNumber: 8, movementTitle: "VIII. Prelude No. 8 in F-sharp minor", movementPrice: 45},
            {movementNumber: 9, movementTitle: "IX. Prelude No. 9 in E major", movementPrice: 10},
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
            {movementNumber: 20, movementTitle: "XX. Prelude No. 20 in C minor", movementPrice: 10},
            {movementNumber: 21, movementTitle: "XXI. Prelude No. 21 in B-flat major", movementPrice: 30},
            {movementNumber: 22, movementTitle: "XXII. Prelude No. 22 in G minor", movementPrice: 45},
            {movementNumber: 23, movementTitle: "XXIII. Prelude No. 23 in F major", movementPrice: 45},
            {movementNumber: 24, movementTitle: "XXIV. Prelude No. 24 in D minor", movementPrice: 120},
        ],
        instrumentation: ["piano"],
        price: 900
    },
    {
        title: "Polonaise in A-flat major, Op. 53 'Heroic'",
        composer: "Chopin, Frederic",
        movements: [],
        instrumentation: ["piano"],
        price: 240
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
        instrumentation: ["saxophone", "piano"],
        price: 500
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
        title: "Suite Bergamasque",
        composer: "Debussy, Claude",
        movements: [
            {movementNumber: 3, movementTitle: "III. Clair de lune", movementPrice: 45},
        ],
        instrumentation: ["piano"],
        price: 200
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
        title: "Concerto in B minor, Op. 104",
        composer: "Dvorák, Antonin",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Adagio ma non troppo", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Allegro moderato", movementPrice: 90}
        ],
        instrumentation: ["cello", "orchestra"],
        price: 225
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
        title: "Rhapsody in Blue (arr. Ahn-Benton)",
        composer: "Gershwin, George",
        movements: [],
        instrumentation: ["piano"],
        price: 360
    },
    {
        title: "Danzas argentinas",
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
        composer: "Kabalevsky-Dmitri",
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