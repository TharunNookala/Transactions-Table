import React from 'react'
import SecondaryCard from '../SecondaryCard/SecondaryCard'
import PrimaryCard from '../PrimaryCard/PrimaryCard'

const CardsContainer = () => {
    return (
        <div className='w-full p-4 flex items-center justify-evenly'>
            <PrimaryCard amount={"300k"} percentage={"1.25"} />
            <SecondaryCard title={"Total Amount"} subtitle={"Total Amount"} amount={"200k"} />
            <SecondaryCard subtitle={"Previous cycle"} amount={"100k"} />
        </div>
    )
}

export default CardsContainer