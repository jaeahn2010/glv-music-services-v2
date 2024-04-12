export default function Card({ composer }) {
    let birthyear = composer.birth.slice(0,4)
    let deathyear
    if (composer.death) deathyear = composer.death.slice(0,4)

    return (
        <figure>
            <img src={composer.portrait} />
            
            <figcaption>
                <h1>{composer.complete_name}</h1>
                <h1>{birthyear}-{deathyear}</h1>
            </figcaption>
        </figure>
    )
}