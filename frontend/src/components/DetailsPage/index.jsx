import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOpusById } from '../../../utils/backend'
import placeholder from '../../assets/music-book-placeholder.jpeg'

let opusIdList = []
export default function DetailsPage(props) {
    const [opus, setOpus] = useState({ ...props.opus })
    const [loginStatus, setLoginStatus] = useState({ ...props.loginStatus })
    const params = useParams()

    async function getOpusData() {
        const opusData = await getOpusById(params.opusId)
        setOpus(opusData)
    }

    useEffect(() => {
        getOpusData()
    }, [])

    function handleClick(evt) {
        evt.preventDefault()
        if (evt.target.value === 'bulkPrice') { //if client chooses bulk price
            if (!opusIdList.includes(opus._id)) { //if chosen opus not on id list, put in cart & update id list
                props.userCart.push(opus)
                props.setUserCart(props.userCart)
                localStorage.setItem("userCart", JSON.stringify(props.userCart))
                opusIdList.push(opus._id)
                alert('bulk added!')
            } else { //if chosen opus on id list
                if (opus.movements.length === 0) { //if opus has no mvmts, do nothing
                    alert('This opus has already been added to your cart.')
                } else { //if opus has mvmts, 
                    for (let opusInCart of props.userCart) { //iterate through cart
                        if (opusInCart._id === opus._id) { //once matching opus found, replace any partial mvmts w/ whole opus
                            props.userCart[props.userCart.indexOf(opusInCart)] = opus
                            props.setUserCart(props.userCart)
                            localStorage.setItem("userCart", JSON.stringify(props.userCart))
                            alert("mvmts already in cart, but replaced by bulk.")
                        }
                    }
                }
            }
        } else { //if client chooses mvmt
            if (!opusIdList.includes(opus._id)) { //if chosen opus not on id list, destructure opus & put in cart only selected mvmt
                props.userCart.push({...opus, movements: [{
                    movementNumber: Number(evt.target.parentElement.id),
                    movementTitle: evt.target.parentElement.innerText.split('$')[0].slice(0, evt.target.parentElement.innerText.split('$')[0].length - 1),
                    movementPrice: Number(evt.target.parentElement.innerText.split('$')[1]),
                }]})
                props.setUserCart(props.userCart)
                localStorage.setItem("userCart", JSON.stringify(props.userCart))
                opusIdList.push(opus._id)
                alert("mvmt added!")
            } else { //if chosen opus on id list
                outerLoop: for (let opusInCart of props.userCart) { //iterate through cart to find the opus to be checked
                    if (opusInCart._id === opus._id) { //if ids match, check if mvmt already exists
                        for (let mvmt of opusInCart.movements) { //iterate through mvmts
                            if (mvmt.movementTitle === evt.target.parentElement.innerText.split('$')[0].slice(0, evt.target.parentElement.innerText.split('$')[0].length - 1)) { //if mvmt title is same as one client chose, do nothing & break outer loop
                                alert('This movement has already been added to your cart.')
                                break outerLoop;
                            }
                        } // if above loop finishes w/o match, update w/ newly selected mvmt & break loop
                        props.userCart[props.userCart.indexOf(opusInCart)].movements.push({
                            movementNumber: Number(evt.target.parentElement.id),
                            movementTitle: evt.target.parentElement.innerText.split('$')[0].slice(0, evt.target.parentElement.innerText.split('$')[0].length - 1),
                            movementPrice: Number(evt.target.parentElement.innerText.split('$')[1]),
                        })
                        alert("opus already in cart, updated w/ new mvmt!")
                        props.setUserCart(props.userCart)
                        localStorage.setItem("userCart", JSON.stringify(props.userCart))
                        break
                    }
                }
            }
        }
    }

    if (opus.title) {
        let bulkPrice = opus.price ? `$${opus.price}` : "Not available in bulk"
        let bulkPriceBtn = opus.price ? <button onClick={handleClick} value="bulkPrice" className="border-2 border-stone-400 px-5 py-2 rounded-xl hover:scale-105 hover:cursor-pointer hover:bg-amber-400 hover:text-stone-900 hover:duration-500">CHOOSE BULK PRICE</button> : ''
        let instrumentation = ''
        for (let instrument of opus.instrumentation) {
            if (opus.instrumentation.indexOf(instrument) === opus.instrumentation.length - 1) {
                instrumentation += instrument
            } else {
                instrumentation += `${instrument}, `
            }
        }

        let movementsDisplay
        if (opus.movements.length > 0) {
            movementsDisplay =
            <section>
                <p className="underline text-center">AVAILABLE MOVEMENTS</p>
                <table className="w-full border-separate border-spacing-y-2">
                    <thead>
                        <tr className="w-full">
                            <td className="w-3/4 underline">MOVEMENT</td>
                            <td className="underline">PRICE</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        opus.movements.map(movement => {
                            return (
                                <tr key={movement.movementNumber} onClick={handleClick} id={movement.movementNumber} className="w-full hover:scale-105 hover:cursor-pointer hover:bg-amber-400 hover:text-stone-900 hover:duration-500">
                                    <td className="w-3/4 border-stone-400 border-y-2 border-l-2 p-2 rounded-l-xl">{movement.movementTitle}</td>
                                    <td className="border-stone-400 border-y-2 border-r-2 rounded-r-xl">${movement.movementPrice}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </section>
        }

        return (
            <div className="w-4/5 mx-auto min-h-[300px] border-2 border-stone-400 rounded-lg text-stone-400 p-5 m-5 flex-col justify-center bg-stone-700">
                <div className='flex'>
                    <section className="flex justify-center items-center w-1/2 pr-5">
                        <img src={placeholder} className="rounded-xl mb-5"/>
                    </section>
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
                        <div className="flex justify-between w-[400px]">
                            <div>
                                <p className="underline">BULK PRICE</p>
                                <p>{bulkPrice}</p>
                            </div>
                            {bulkPriceBtn}
                        </div>
                        <br/>
                    </section>
                </div>
                {movementsDisplay}
            </div>
        )
    }
}