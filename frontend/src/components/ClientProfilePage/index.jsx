export default function ClientProfilePage({ opuses, setOpuses, loginStatus, getFilteredData, updateDetails }){
    console.log(localStorage)

    return (
        <section>
            <h1>Client profile page of {`${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`}</h1>
            <table className="w-full">
                <tbody>
                    <tr className="h-12">
                        <td className='w-1/2'>Instruments</td>
                        <td className="w-1/2">{localStorage.getItem('instruments')}</td>
                    </tr>
                    <tr className="h-12 border-stone-400 border-y-2">
                        <td>Birthdate</td>
                        <td>{localStorage.getItem('birthdate')}</td>
                    </tr>
                    <tr className="h-12 border-stone-400 border-y-2">
                        <td>Email</td>
                        <td>{localStorage.getItem('email')}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}