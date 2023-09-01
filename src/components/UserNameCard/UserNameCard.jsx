import React from 'react'

const UserNameCard = ({ country, name }) => {
    return (
        <div>
            {/* {`<${country} title=${country}" />`} */}
            <span> {name} </span>
        </div>
    )
}

export default UserNameCard