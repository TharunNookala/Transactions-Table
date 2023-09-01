import { HiOutlineCurrencyDollar } from 'react-icons/hi'
import { BsGraphUpArrow } from 'react-icons/bs'

const PrimaryCard = ({ amount, percentage }) => {
    return (
        <div className='flex w-1/5 items-start justify-start gap-4 bg-indigo-100 rounded-lg pl-6 pr-4 py-10'>
            <div className='bg-sky-100 p-2 text-4xl rounded-lg text-sky-500'>  <HiOutlineCurrencyDollar /></div>
            <div className='flex flex-col items-start justify-center p-2 border-2'>
                <h1 className='font-bold text-4xl text-blue-600'>{amount} <span className='font-extrabold text-lg text-black'>USD</span></h1>
                <p className='font-medium text-2xl text-green-600 flex items-center gap-2'>{percentage}% <BsGraphUpArrow /></p>
            </div>
        </div>
    )
}

export default PrimaryCard