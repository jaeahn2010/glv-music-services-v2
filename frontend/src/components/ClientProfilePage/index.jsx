export default function ClientProfilePage({ isMenuOpen, opuses, setOpuses, loginStatus, getFilteredData, updateDetails }){
    let trStyle = 'h-12 border-stone-400 border-y-2'

    return (
        <section className={`${isMenuOpen ? 'z-0 opacity-5' : ''} w-11/12 mx-auto font-poppins`}>
            <h1 className="text-3xl text-center my-24">Your Account Information</h1>
            <p className="text-2xl"></p>
            <table className="w-3/4 mx-auto mb-24">
                <tbody>
                    <tr className={trStyle}>
                        <td className="w-1/2">Name</td>
                        <td className="w-1/2">{`${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`}</td>
                    </tr>
                    <tr className={trStyle}>
                        <td className='w-1/2'>Primary Instrument</td>
                        <td className="w-1/2">{localStorage.getItem('instrument')}</td>
                    </tr>
                    <tr className={trStyle}>
                        <td>Email</td>
                        <td>{localStorage.getItem('email')}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}