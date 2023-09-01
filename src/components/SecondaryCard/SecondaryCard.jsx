import { BiBookmarkAltMinus } from 'react-icons/bi'

const SecondaryCard = ({ title, subtitle, amount }) => {
    return (
        <div className='w-1/5  p-3 bg-slate-100 rounded-lg flex flex-col gap-1'>
            <div className='flex items-center gap-12 p-2'>
                <span className='bg-orange-100 p-2 text-5xl rounded-lg'><BiBookmarkAltMinus /></span>
                <h1 className='font-bold text-lg'>{title}</h1>
            </div>
            <div className='flex flex-col items-center justify-center p-1'>
                <p className='text-gray-400 font-semibold text-sm'>{subtitle}</p>
                <h1 className='font-bold text-3xl'>{amount} <span className='font-extrabold text-lg'>USD</span></h1>
            </div>

        </div>
    )
}

export default SecondaryCard