const Status = ({ status }) => {
    return (
        <section className='flex gap-2 items-center text-center'>
            <div className=''>
                <p className={`w-24 h-1 ${status.includes('first') ? 'bg-blue-950' : 'bg-gray-400'} rounded-xl`}></p>
                <p>First</p>
            </div>
            <div className=''>
                <p className={`w-24 h-1 ${status.includes('second') ? 'bg-blue-950' : 'bg-gray-400'} rounded-xl`}></p>
                <p>Second</p>
            </div>
            <div className=''>
                <p className={`w-24 h-1 ${status.includes('third') ? 'bg-blue-950' : 'bg-gray-400'} rounded-xl`}></p>
                <p>Third</p>
            </div>
        </section>
    )
}

export default Status