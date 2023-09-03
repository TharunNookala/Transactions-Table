import React from 'react'
import SecondaryCard from '../SecondaryCard/SecondaryCard'
import PrimaryCard from '../PrimaryCard/PrimaryCard'

const CardsContainer = () => {
    return (
        <div className='w-full flex flex-col sm:flex-row items-center md:justify-between p-5 sm:p-4 gap-2 lg:gap-0 lg:justify-evenly'>
            <PrimaryCard amount={"300k"} percentage={"1.25"} />
            <SecondaryCard title={"Total Amount"} subtitle={"Total Amount"} amount={"200k"} />
            <SecondaryCard subtitle={"Previous cycle"} amount={"100k"} />
        </div>
    )
}

export default CardsContainer