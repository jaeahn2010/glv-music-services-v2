import trashIcon from '../../assets/trash-icon.jpeg'
import { Link } from 'react-router-dom'
import RequestPage from '../RequestPage'

export default function CurrentCart({ opuses, loginStatus, userCart, setUserCart, getOpusData }) {
    let totalPrice = 0
    let cartText = userCart.length > 0 ? 'Your cart' : 'Your cart is empty.'

    for (let item of userCart) {
        let fullOpus = opuses.filter(opus => opus._id === item._id)[0]
        if (fullOpus.movements.length === item.movements.length) {
            totalPrice += fullOpus.price
        } else {
            for (let mvmt of item.movements) {
                totalPrice += mvmt.movementPrice
            }
        }
    }

    let priceText = userCart.length > 0 ? `Your total: $${totalPrice}` : ''

    function handleClick(evt) {
        evt.preventDefault()
        let infoArr = evt.target.id.split('-')
        if (infoArr[1] === 'bulk') {
            setUserCart(userCart.filter(item => item._id !== infoArr[0]))
        } else if (infoArr[1] === 'movement') {
            let tempOpus = userCart.filter(item => item._id === infoArr[0])[0]
            let adjustedMvmts = tempOpus.movements.filter(mvmt => mvmt.movementNumber !== Number(infoArr[2]))
            tempOpus.movements = adjustedMvmts
            userCart = userCart.filter(item => item._id !== infoArr[0])
            userCart.push(tempOpus)
            setUserCart(userCart)
            if (tempOpus.movements.length === 0) {
                setUserCart(userCart.filter(item => item._id !== infoArr[0]))
            }
        }
    }
    
    return (
        <main className='flex flex-col justify-center items-center'>
            <p className="text-center my-3">{cartText}</p>
            {userCart.map(item => {
                    let mvmts = item.movements.length > 0
                    ? <table className="w-11/12">
                        <tbody>
                            {item.movements.map(movement => <tr key={movement.movementTitle} className="border-b-2 border-white">
                                <td>{movement.movementTitle}</td>
                                <td>${movement.movementPrice}</td>
                                <td>
                                    <img src={trashIcon} className="w-[25px] hover:bg-red-600 hover:opacity-50 hover:cursor-pointer" id={`${item._id}-movement-${movement.movementNumber}`} onClick={handleClick}/>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                    : 'NONE'
                    return (
                        <div className='border m-4 p-4 border-stone-200 bg-stone-800 w-full rounded-3xl' key={item._id}>
                            <section className="my-3">
                                <div>
                                    <p className="underline">TITLE</p>
                                    <p>{item.title}</p>
                                </div>
                                <br/>
                                <div>
                                    <p className="underline">COMPOSER</p>
                                    <p>{item.composer}</p>
                                </div>
                                <br/>
                                <div>
                                    <p className="underline">INSTRUMENTATION</p>
                                    <p>{item.instrumentation.map(instrument => <span key={instrument}>{item.instrumentation.indexOf(instrument) !== item.instrumentation.length - 1 ? `${instrument}, ` : instrument}</span>)}
                                    </p>
                                </div>
                                <br/>
                                <div>
                                    <p className="underline">MOVEMENTS</p>
                                    {mvmts}
                                </div>
                                    <br/>
                                <div className="flex justify-between">
                                    <div>
                                        <p className="underline">BULK PRICE</p>
                                        {opuses.filter(opus => opus._id === item._id).map(opus => <p>{opus.movements.length === item.movements.length && opus.price !== null ? `$${opus.price}` : 'DOES NOT APPLY'}</p>)}
                                    </div>
                                </div>
                                <br/>
                            </section>
                            <section className="flex flex-col items-center justify-center mx-auto text-center">
                                <button className='border border-stone-200 px-4 rounded-xl py-2 hover:bg-red-600 hover:opacity-50 hover:cursor-pointer' id={`${item._id}-bulk-0`} onClick={handleClick}>Remove entire opus from cart</button>
                            </section>
                        </div>
                    )
                })
            }
            <p className='text-center text-3xl'>{priceText}</p>
            <div className="flex justify-around w-1/2 m-5">
                <Link to="/repertoire" onClick={(evt) => {
					getOpusData("none", "none")
				}}>
                    <button className="border-white border-2 rounded-xl px-3 py-1 hover:scale-125 hover:cursor-pointer hover:bg-amber-400 hover:text-stone-900 hover:duration-500">Back</button>
                </Link>
                <Link to="/request">
                    <button className="border-white border-2 rounded-xl px-3 py-1 hover:scale-125 hover:cursor-pointer hover:bg-amber-400 hover:text-stone-900 hover:duration-500">Next</button>
                </Link>
            </div>
        </main>
    )
}