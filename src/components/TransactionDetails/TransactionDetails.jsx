import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EditTransactionForm from '../EditTransactionForm/EditTransactionForm';
import { useState } from 'react';
import { updateTransaction } from '../../store/transactionsSlice';
import { AiFillHome } from 'react-icons/ai'

function TransactionDetailPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const updatedTransaction = useSelector((state) => {
        return state.transactions.transactions.find(t => t.invoiceNumber === id)
    })
    const transaction = useSelector(state =>
        state.transactions?.transactions?.find(t => t.invoiceNumber === id)
    );
    const [isEditing, setIsEditing] = useState(false);

    if (!transaction) {
        return <div className='bg-gray-400 h-screen text-8xl font-bold flex items-center justify-center '>Transaction not found</div>;
    }

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    const handleSave = (updatedTransactionData) => {
        dispatch(updateTransaction({ id: updatedTransactionData.invoiceNumber, updatedTransaction: updatedTransactionData }));
        setIsEditing(false);
        console.log(updatedTransactionData)
    };
    return (
        <div className='flex flex-col items-center gap-3 p-4 w-screen h-screen'>
            <div className='bg-indigo-100 w-full flex items-center justify-evenly p-4'>
                <Link to="/"><AiFillHome size={25} className='hover:text-gray-500' /></Link>
                <h2 className='text-xl font-bold'>Transaction Details of {transaction.invoiceNumber}</h2>
                <p className='text-xl font-semibold'>Transaction Date: {transaction.transactionDate}</p>
            </div>
            {isEditing ? (
                <div className='bg-gray-200 w-full flex justify-center h-full '>
                    <EditTransactionForm transaction={transaction} onSave={handleSave} onCancel={handleCancelEdit} />
                </div>
            ) :
                <>
                    <div className='flex flex-col w-1/2 h-full bg-sky-100 items-center justify-start pt-16 p-2'>
                        <p className='text-xl font-semibold flex gap-5 items-center justify-center p-1'>Transaction Date :
                            <span className='text-base text-gray-500 italic'> {transaction.transactionDate}
                            </span>
                        </p>
                        <p className='text-xl font-semibold flex gap-5 items-center justify-center p-1 mr-6'>Invoice Number :
                            <span className='text-base text-gray-500 italic'> {transaction.invoiceNumber}
                            </span>
                        </p>
                        <p className='text-xl font-semibold flex gap-5 items-center justify-center p-1 ml-[90px]'>Payer :
                            <span className='text-base text-gray-500 italic'> {transaction.payer.name}
                            </span>
                        </p>
                        <p className='text-xl font-semibold flex gap-5 items-center justify-center p-1 ml-32'>Payee :
                            <span className='text-base text-gray-500 italic'> {transaction.payee.name}
                            </span>
                        </p>
                        <p className='text-xl font-semibold flex gap-5 items-center justify-center p-1 ml-7'>Amount :
                            <span className='text-base text-gray-500 italic'> {transaction.amount}
                            </span>
                        </p>
                        <p className='text-xl font-semibold flex gap-5 items-center justify-center p-1 mr-10'>USD Equivalent :
                            <span className='text-base text-gray-500 italic'> {transaction.usdEquivalent}
                            </span>
                        </p>

                        <p className='text-xl font-semibold flex gap-5 items-center justify-center p-1 ml-16'>Status :
                            <span className='text-base text-gray-500 italic'> {transaction.status.join(', ')}
                            </span>
                        </p>
                        <button onClick={handleEditClick} className='bg-gray-400 hover:bg-gray-200 px-6 py-2 rounded-md flex-none mt-10'>Edit</button>
                    </div>
                </>
            }


        </div >
    );
}

export default TransactionDetailPage;
