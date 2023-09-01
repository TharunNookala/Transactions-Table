import transactions from '../../../src/assets/fakeData.json'
import TransactionTable from '../../../src/components/TransactionTable/TransactionTable.jsx'
import CardsContainer from '../CardsContainer/CardsContainer';


const AppLayout = () => {
    return (
        <section className='flex flex-col gap-2 items-center justify-center p-4'>
            <CardsContainer />
            <TransactionTable transactions={transactions} />
        </section>
    )
}

export default AppLayout