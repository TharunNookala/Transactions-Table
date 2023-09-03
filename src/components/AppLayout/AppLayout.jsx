import TransactionTable from '../../../src/components/TransactionTable/TransactionTable.jsx'
import CardsContainer from '../CardsContainer/CardsContainer';


const AppLayout = () => {
    return (
        <section className='w-screen flex flex-col gap-2 items-center justify-center p-4'>
            <div className='w-full'><CardsContainer /></div>
            <div className='w-full overflow-x-scroll md:overflow-auto flex  lg:justify-center xl:items-center xl:justify-center'><TransactionTable /></div>
        </section>
    )
}

export default AppLayout