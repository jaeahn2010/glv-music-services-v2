import trashIcon from '../../assets/trash-icon-black-transparent.png'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CurrentCart({ isMenuOpen, allOpuses, loginStatus, userCart, setUserCart, allMusicians, scrollToTop, userType }) {
    let cartText = userCart.length > 0 ? 'Your cart' : 'Your cart is empty.'
    const btnStyle = 'border-stone-800 border rounded-xl px-3 py-1 my-2 w-full hover:scale-105 hover:cursor-pointer hover:bg-green-400 hover:text-stone-900 hover:duration-500'

    function handleClick(evt) {
        evt.preventDefault()
        let [itemId, type, mvmtTitle] = evt.target.id.split('-')
        console.log(mvmtTitle)
        if (type === 'bulk') { // if removing entire opus from cart
            setUserCart(userCart.filter(item => item._id !== itemId))
        } else if (type === 'movement') { // if removing specific movement only
            let tempOpus = userCart.find(item => item._id === itemId)
            let adjustedMvmts = tempOpus.movements.filter(mvmt => mvmt.movementTitle !== mvmtTitle)
            tempOpus.movements = adjustedMvmts
            userCart = userCart.filter(item => item._id !== itemId)
            userCart.push(tempOpus)
            setUserCart(userCart)
            if (tempOpus.movements.length === 0) setUserCart(userCart.filter(item => item._id !== itemId))
        }
    }

    let nextStepLinks = 
    [<Link key='link1' to="/repertoire"><button className={btnStyle}>SELECT MORE REPERTOIRE</button></Link>]
    userCart.length > 0 ? nextStepLinks.push(
        <Link key='link2' to="/request"><button className={btnStyle}>MAKE EVENT REQUEST WITH SELECTED REPERTOIRE</button></Link>
    ) : ''

    useEffect(() => {
        scrollToTop()
    }, [])
    
    return loginStatus && userType === 'client'
    ? (
        <main className={`${isMenuOpen ? 'z-0 opacity-5' : ''} flex flex-col justify-center items-center font-bodoni mx-auto lg:w-1/2`}>
            <p className="text-center my-12">{cartText}</p>
            {userCart.map(item => {
                let mvmts = item.movements.length > 0
                ? <table key={item._id} className="w-11/12">
                    <tbody>
                        {item.movements.map(movement => <tr key={movement.movementTitle} className="border-b-2 border-stone-800">
                            <td>{movement.movementTitle}</td>
                            <td>
                                <img src={trashIcon} className="w-[25px] hover:scale-110 hover:opacity-50 hover:cursor-pointer duration-500" id={`${item._id}-movement-${movement.movementTitle}`} onClick={handleClick}/>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                : 'NONE'
                return (
                    <div className='border m-4 p-4 border-stone-800 bg-stone-300 w-full rounded-3xl' key={item._id}>
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
                        </section>
                        <section className="flex flex-col items-center justify-center mx-auto text-center">
                            <button className='border border-stone-800 px-4 rounded-xl py-2 hover:bg-red-400 hover:cursor-pointer' id={`${item._id}-bulk-none`} onClick={handleClick}>Remove entire opus from cart</button>
                        </section>
                    </div>
                )})
            }
            <div className="flex flex-col my-12 w-2/3 min-h-[75vh]">
                {nextStepLinks}
            </div>
        </main>
    )
    : <h1 className={`${isMenuOpen ? 'z-0 opacity-5' : ''} text-3xl text-center min-h-[100vh] mt-24`}>Please sign up or log in to access this part of the site.</h1>
}