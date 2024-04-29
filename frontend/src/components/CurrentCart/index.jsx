import trashIcon from '../../assets/trash-icon.jpeg'

export default function CurrentCart({ opuses, loginStatus, userCart, setUserCart }) {

    return (
        <main>
            <p className="text-center">Your cart</p>
            {
                userCart.map(item => {
                    return (
                        <div className='flex justify-around items-center border-2 m-4 border-white rounded-3xl'>
                            <section className="my-3 border-r-2 border-white">
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
                                    {
                                        item.movements.map(movement => {
                                            return (
                                                <div className="flex w-[300px] justify-between border-b-2 border-white">
                                                    <p>{movement.movementTitle}</p>
                                                    <p>${movement.movementPrice}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                    <br/>
                                <div className="flex justify-between w-[400px]">
                                    <div>
                                        <p className="underline">BULK PRICE</p>
                                        {
                                            opuses.map(opus => {
                                                if (opus._id === item._id) {
                                                    if (opus.movements.length === item.movements.length) {
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
                            <section className="border-2 border-white">
                                <img src={trashIcon} className="w-[50px]"/>
                            </section>
                        </div>
                    )
                })
            }
        </main>
    )
}