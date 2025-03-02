import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getOpusById, getMusicians } from '../../../utils/backend'

export default function DetailsPage({ isMenuOpen, opusDetails, loginStatus, userCart, setUserCart, scrollToTop }) {
    const [opus, setOpus] = useState({ ...opusDetails })
    const [allMusicians, setAllMusicians] = useState([])
    const params = useParams()
    const navigate = useNavigate()
    let opusIdList = userCart.length ? userCart.map(opusInCart => opusInCart._id) : []

    async function getOpusAndMusiciansData() {
        const opusData = await getOpusById(params.opusId)
        const allMusiciansData = await getMusicians()
        setOpus(opusData)
        setAllMusicians(allMusiciansData)
    }

    useEffect(() => {
        getOpusAndMusiciansData()
        scrollToTop()
    }, [])

    function handleClick(evt) {
        evt.preventDefault()
        if (!loginStatus) {
            alert('Please sign up or log in to put repertoire in your cart.')
        } else {
            if (evt.target.value === 'allMvmts') { // if client chooses all mvmts
                if (!opusIdList.includes(opus._id)) { // if chosen opus not on id list, put in cart & update id list
                    setUserCart(userCart => userCart.concat(opus))
                    opusIdList.push(opus._id)
                    alert('Item has been added to the cart.')
                } else { // if chosen opus on id list
                    if (!opus.movements.length) { // if opus has no mvmts, do nothing
                        alert('This opus has already been added to your cart.')
                    } else { // if opus has mvmts,
                        let opusIndex = opusIdList.findIndex(id => id === opus._id)
                        if (opusIndex !== -1) { // if matching opus found, replace any partial mvmts w/ whole opus
                            setUserCart(userCart => {
                                const tempUserCart = [...userCart]
                                tempUserCart[opusIndex] = opus
                                return tempUserCart
                            })
                            alert("There were some movements already in cart, and they have been replaced by the entire repertoire.")
                        }
                    }
                }
            } else { // if client chooses mvmt
                if (!opusIdList.includes(opus._id)) { // if chosen opus not on id list, destructure opus & put in cart only selected mvmt
                    setUserCart(userCart => userCart.concat({
                        ...opus,
                        movements: [opus.movements.find(mvmt => mvmt._id === evt.target.parentElement.id)]
                    }))
                    opusIdList.push(opus._id)
                    alert("This movement has been added to the cart.")
                } else { // if chosen opus on id list
                    outerLoop:
                    for (let opusInCart of userCart) { // iterate thru cart to find the opus to be checked
                        if (opusInCart._id === opus._id) { // if ids match, check if mvmt already exists
                            for (let mvmt of opusInCart.movements) { // iterate thru mvmts
                                if (mvmt._id === evt.target.parentElement.id) { // if mvmt id matches the one client chose, do nothing & break outer loop
                                    alert('This movement has already been added to your cart.')
                                    break outerLoop
                                }
                            } // if above loop finishes w/o match, update w/ newly selected mvmt & break loop
                            setUserCart(userCart => {
                                const tempUserCart = [...userCart]
                                const selectedOpus = tempUserCart[tempUserCart.indexOf(opusInCart)]
                                selectedOpus.movements.push(opus.movements.find(mvmt => mvmt._id === evt.target.parentElement.id))
                                return tempUserCart
                            })
                            alert("This repertoire was already in the cart, and has been updated with the new movement.")
                            break
                        }
                    }
                }
            }
        }
    }

    if (opus.title && allMusicians.length) { // give data time to load
        let musicianObjs = opus.offeringMusicians.map(id => allMusicians.find(musician => musician._id === id))
        let musicianNames = musicianObjs.map(musician => `${musician.firstName} ${musician.lastName}`)
        let movementsDisplay = opus.movements.length > 0
        ? <section>
            <p className="underline text-center">AVAILABLE MOVEMENTS</p>
            <table className="w-full border-separate border-spacing-y-2">
                <thead>
                    <tr>
                        <td className="underline">Movement</td>
                        <td className="underline text-right">Musician</td>
                    </tr>
                </thead>
                <tbody>
                {opus.movements.map(movement =>
                {
                    let musicianObjs = movement.movementOfferingMusicians.map(id => allMusicians.find(musician => musician._id === id))
                    let musicianNames = musicianObjs.map(musician => `${musician.firstName} ${musician.lastName}`)
                    return <tr key={movement._id} onClick={handleClick} id={movement._id} className="w-full hover:scale-105 hover:cursor-pointer hover:bg-amber-400 hover:text-stone-900 hover:duration-500 text-xs lg:text-md">
                        <td className="w-2/3 border-l border-y border-stone-700 p-2 rounded-l-xl">{movement.movementTitle}</td>
                        <td className="w-1/3 border-r border-y border-stone-700 p-2 rounded-r-xl text-right">{musicianNames.join(', ')}</td>
                    </tr>})
                }
                </tbody>
            </table>
        </section>
        : ''

        return (
            <section className={`${isMenuOpen ? 'z-0 opacity-5' : ''} flex flex-col justify-center items-center font-bodoni`}>
                <p className="mt-24">Details of this repertoire</p>
                <div className={`w-11/12 lg:w-1/2 mx-auto border border-stone-400 rounded-lg text-stone-700 p-5 m-5 flex-col justify-center bg-stone-300`}>
                    <section className="text-center">
                        <div>
                            <p className="underline">TITLE</p>
                            <p className="font-bold">{opus.title}</p>
                        </div>
                        <br/>
                        <div>
                            <p className="underline">COMPOSER</p>
                            <p className="font-bold">{opus.composer}</p>
                        </div>
                        <br/>
                        <div>
                            <p className="underline">INSTRUMENTATION</p>
                            <p className="font-bold">{opus.instrumentation.join(', ')}</p>
                        </div>
                        <br/>
                        <div>
                            <p className="underline">AVAILABLE FROM</p>
                            <p className="font-bold">{musicianNames.join(', ')}</p>
                        </div>
                        <br/>
                        <div>
                            <button onClick={handleClick} value="allMvmts" className="border border-stone-700 text-sm p-2 rounded-xl hover:scale-105 hover:cursor-pointer bg-stone-300 hover:bg-green-400 duration-500">{opus.movements.length ? 'ADD ALL MOVEMENTS TO CART' : 'ADD TO CART'}</button>
                        </div>
                        <br/>
                    </section>
                    {movementsDisplay}
                </div>
                <button onClick={() => navigate('/repertoire')} className="border border-stone-800 p-2 rounded-xl my-6 mx-auto hover:bg-green-400 hover:scale-105 duration-500">CHOOSE MORE REPERTOIRE</button>
            </section>
        )
    }
}