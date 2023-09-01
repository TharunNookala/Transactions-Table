import { useState } from "react";
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { Link } from "react-router-dom";


const ActionButton = ({ id }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    return (
        <>
            <button onClick={handleDropdown}> <BiDotsVerticalRounded className='text-4xl bg-gray-300 rounded-full py-2 hover:bg-gray-400' /> </button>
            <div className={`${showDropdown ? 'w-full top-0 left-24 border  absolute flex flex-col gap-1 p-2' : 'hidden'} `}>
                <Link className="bg-gray-200" to={`/${id}`} onClick={() => alert('Edit clicked')}>
                    Edit
                </Link>
                <Link className="bg-gray-200" to="/" onClick={() => alert('Delete clicked')}>
                    Delete
                </Link>

            </div>
        </>
    )
}

export default ActionButton