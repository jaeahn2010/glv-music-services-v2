import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getOpusById } from '../../../utils/backend'

// price & cart length doesn't update when new repertoire chosen from details page or when cart clicked

export default function DetailsPage({isMenuOpen, opusDetails, loginStatus, userCart, setUserCart, scrollToTop }) {
    const [opus, setOpus] = useState({ ...opusDetails })
    const params = useParams()
    const navigate = useNavigate()
    let opusIdList = userCart.map(opusInCart => opusInCart._id)

    async function getOpusData() {
        const opusData = await getOpusById(params.opusId)
        setOpus(opusData)
    }

    useEffect(() => {
        getOpusData()
        scrollToTop()
    }, [])

    function handleClick(evt) {
        evt.preventDefault()
        if (!loginStatus) {
            alert('Please sign up or log in to put repertoire in your cart.')
        } else {
            if (evt.target.value === 'bulkPrice') { //if client chooses bulk price
                if (!opusIdList.includes(opus._id)) { //if chosen opus not on id list, put in cart & update id list
                    setUserCart(userCart => userCart.concat(opus))
                    localStorage.setItem("userCart", JSON.stringify(userCart))
                    opusIdList.push(opus._id)
                    alert('Item has been added to the cart.')
                } else { //if chosen opus on id list
                    if (opus.movements.length === 0) { //if opus has no mvmts, do nothing
                        alert('This opus has already been added to your cart.')
                    } else { //if opus has mvmts,
                        let opusIndex = opusIdList.findIndex(id => id === opus._id)
                        if (opusIndex !== -1) { //if matching opus found, replace any partial mvmts w/ whole opus
                            setUserCart(userCart => userCart[opusIndex] = opus)
                            localStorage.setItem("userCart", JSON.stringify(userCart))
                            alert("There are some or all movements already in cart, and they have been replaced by the bulk price.")
                        }
                    }
                }
            } else { //if client chooses mvmt
                if (!opusIdList.includes(opus._id)) { //if chosen opus not on id list, destructure opus & put in cart only selected mvmt
                    userCart.push({...opus, movements: [{
                        movementNumber: Number(evt.target.parentElement.id),
                        movementTitle: evt.target.parentElement.innerText.split('$')[0].slice(0, evt.target.parentElement.innerText.split('$')[0].length - 1),
                        movementPrice: Number(evt.target.parentElement.innerText.split('$')[1]),
                    }]})
                    setUserCart(userCart)
                    localStorage.setItem("userCart", JSON.stringify(userCart))
                    opusIdList.push(opus._id)
                    alert("This movement has been added to the cart.")
                } else { //if chosen opus on id list
                    outerLoop: for (let opusInCart of userCart) { //iterate through cart to find the opus to be checked
                        if (opusInCart._id === opus._id) { //if ids match, check if mvmt already exists
                            for (let mvmt of opusInCart.movements) { //iterate through mvmts
                                if (mvmt.movementTitle === evt.target.parentElement.innerText.split('$')[0].slice(0, evt.target.parentElement.innerText.split('$')[0].length - 1)) { //if mvmt title is same as one client chose, do nothing & break outer loop
                                    alert('This movement has already been added to your cart.')
                                    break outerLoop;
                                }
                            } // if above loop finishes w/o match, update w/ newly selected mvmt & break loop
                            userCart[userCart.indexOf(opusInCart)].movements.push({
                                movementNumber: Number(evt.target.parentElement.id),
                                movementTitle: evt.target.parentElement.innerText.split('$')[0].slice(0, evt.target.parentElement.innerText.split('$')[0].length - 1),
                                movementPrice: Number(evt.target.parentElement.innerText.split('$')[1]),
                            })
                            alert("This opus is already in the cart, and has been updated with the new movement.")
                            setUserCart(userCart)
                            localStorage.setItem("userCart", JSON.stringify(userCart))
                            break
                        }
                    }
                }
            }
        }
    }

    if (opus.title) {
        let bulkPrice = opus.price ? `$${opus.price}` : "Not available in bulk"
        let bulkPriceBtn = opus.price ? <button onClick={handleClick} value="bulkPrice" className="border border-stone-300 text-sm p-2 rounded-xl hover:scale-105 hover:cursor-pointer hover:bg-amber-400 hover:text-stone-900 duration-500">CHOOSE BULK PRICE</button> : ''
        let instrumentation = ''
        for (let instrument of opus.instrumentation) {
            opus.instrumentation.indexOf(instrument) === opus.instrumentation.length - 1 ? instrumentation += instrument : instrumentation += `${instrument}, `
        }

        let movementsDisplay = opus.movements.length > 0
        ? <section>
            <p className="underline text-center">AVAILABLE MOVEMENTS</p>
            <table className="w-full border-separate border-spacing-y-2">
                <thead>
                    <tr className="w-full">
                        <td className="w-3/4 underline">MOVEMENT</td>
                        <td className="underline">PRICE</td>
                    </tr>
                </thead>
                <tbody>
                {opus.movements.map(movement =>
                    <tr key={movement.movementNumber} onClick={handleClick} id={movement.movementNumber} className="w-full hover:scale-105 hover:cursor-pointer hover:bg-amber-400 hover:text-stone-900 hover:duration-500">
                        <td className="w-3/4 border-stone-400 border-y-2 border-l-2 p-2 rounded-l-xl">{movement.movementTitle}</td>
                        <td className="border-stone-400 border-y-2 border-r-2 rounded-r-xl">${movement.movementPrice}</td>
                    </tr>)}
                </tbody>
            </table>
        </section>
        : ''

        return (
            <section className={`${isMenuOpen ? 'z-0 opacity-5' : ''} flex flex-col justify-center items-center font-poppins min-h-[150vh]`}>
                <div className={`w-11/12 lg:w-1/2 mx-auto border border-stone-400 rounded-lg text-stone-300 p-5 m-5 flex-col justify-center bg-stone-600`}>
                    <section>
                        <div>
                            <p className="underline">TITLE</p>
                            <p>{opus.title}</p>
                        </div>
                        <br/>
                        <div>
                            <p className="underline">COMPOSER</p>
                            <p>{opus.composer}</p>
                        </div>
                        <br/>
                        <div>
                            <p className="underline">INSTRUMENTATION</p>
                            <p>{instrumentation}</p>
                        </div>
                        <br/>
                        <div className="flex justify-between">
                            <div className="w-1/3">
                                <p className="underline">BULK PRICE</p>
                                <p>{bulkPrice}</p>
                            </div>
                            <div className="w-2/3 flex justify-center items-center">{bulkPriceBtn}</div>
                        </div>
                        <br/>
                    </section>
                    {movementsDisplay}
                </div>
                <button onClick={() => navigate('/repertoire')} className="border border-stone-200 p-2 rounded-xl my-6 mx-auto hover:bg-amber-400 hover:text-stone-800 hover:scale-105 duration-500">CHOOSE MORE REPERTOIRE</button>
            </section>
        )
    }
}