
const UserNameCard = ({ person }) => {
    const countryCode = typeof person.country === 'string' ? person.country.toLowerCase() : '';
    return (
        <div className='flex items-center justify-evenly'>
            <img src={`https://flagcdn.com/48x36/${countryCode?.toLowerCase()}.png`} alt="..." width={25} />
            <span> {person.name} </span>
        </div>
    )
}

export default UserNameCard