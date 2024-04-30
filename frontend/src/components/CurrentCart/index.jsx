import trashIcon from '../../assets/trash-icon.jpeg'

export default function CurrentCart({ opuses, loginStatus, userCart, setUserCart }) {
    let cartText = userCart.length > 0 ? 'Your cart' : 'Your cart is empty.'

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
        <main>
            <p className="text-center">{cartText}</p>
            {
                userCart.map(item => {
                    let mvmts = item.movements.length > 0 ? 
                    <table className="w-11/12">
                        <tbody>
                            {
                                item.movements.map(movement => {
                                    return (
                                        <tr key={movement.movementTitle} className="border-b-2 border-white">
                                            <td>{movement.movementTitle}</td>
                                            <td>${movement.movementPrice}</td>
                                            <td>
                                                <img src={trashIcon} className="w-[25px] hover:bg-red-600 hover:opacity-50 hover:cursor-pointer" id={`${item._id}-movement-${movement.movementNumber}`} onClick={handleClick}/>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table> : 'NONE'
                    return (
                        <div className='flex justify-around items-center border-2 m-4 border-white rounded-3xl' key={item._id}>
                            <section className="my-3 border-r-2 border-white pl-5">
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
                                    <p>
                                        {
                                            item.instrumentation.map(instrument => {
                                                if (item.instrumentation.indexOf(instrument) !== item.instrumentation.length - 1) {
                                                    return `${instrument}, `
                                                } else {
                                                    return instrument
                                                }
                                            })
                                        }
                                    </p>
                                </div>
                                <br/>
                                <div>
                                    <p className="underline">MOVEMENTS</p>
                                    {mvmts}
                                </div>
                                    <br/>
                                <div className="flex justify-between w-[400px]">
                                    <div>
                                        <p className="underline">BULK PRICE</p>
                                        {
                                            opuses.map(opus => {
                                                if (opus._id === item._id) {
                                                    if (opus.movements.length === item.movements.length && opus.price !== null) {
                                                        return <p key={opus._id}>${opus.price}</p>
                                                    } else {
                                                        return <p key={opus._id}>DOES NOT APPLY</p>
                                                    }
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                                <br/>
                            </section>
                            <section className="w-1/6 flex flex-col items-center justify-center mx-auto text-center">
                                <img src={trashIcon} className="w-[75px] hover:bg-red-600 hover:opacity-50 hover:cursor-pointer" id={`${item._id}-bulk-0`} onClick={handleClick}/>
                                <p>Remove entire opus from cart</p>
                            </section>
                        </div>
                    )
                })
            }
        </main>
    )
}