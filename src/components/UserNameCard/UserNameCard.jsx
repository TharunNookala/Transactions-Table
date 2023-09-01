
const UserNameCard = ({ person }) => {
    return (
        <div className='flex items-center justify-evenly'>
            <img src={`https://flagcdn.com/48x36/${person.country.toLowerCase()}.png`} alt="..." width={25} />
            <span> {person.name} </span>
        </div>
    )
}

export default UserNameCard