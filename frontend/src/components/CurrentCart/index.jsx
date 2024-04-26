

export default function CurrentCart({ loginStatus, userCart, setUserCart }) {
    console.log(userCart)
    console.log(localStorage.userCart)

    return (
        <section>
            <p>Your cart</p>
            {
                userCart.map(opus => {
                    <div className='flex'>
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
                                <p>{opus.instrumentation}</p>
                            </div>
                            <br/>
                            <div className="flex justify-between w-[400px]">
                                <div>
                                    <p className="underline">BULK PRICE</p>
                                    <p>{opus.price}</p>
                                </div>
                            </div>
                            <br/>
                        </section>
                    </div>
                })
            }
        </section>
    )
}