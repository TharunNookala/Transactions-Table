import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTransaction } from '../../store/transactionsSlice';
import CountryFlags from '../CountryFlags/CountryFlags';

function EditTransactionForm({ transaction, onSave, onCancel }) {
    const dispatch = useDispatch();
    const [editedTransaction, setEditedTransaction] = useState(transaction);

    const handleFieldChange = event => {
        const { name, value } = event.target;
        setEditedTransaction(prevTransaction => ({
            ...prevTransaction,
            [name]: value
        }));
    };

    const handleSave = () => {
        onSave(editedTransaction);
        dispatch(updateTransaction({ id: transaction.invoiceNumber, updatedTransaction: editedTransaction }));
    };

    return (
        <div className='border-2 p-4 bg-gray-100 w-1/2 rounded-md flex-flex-col space-y-8 items-center text-center'>
            <h3 className='text-xl font-bold text-center'>Edit Transaction</h3>
            <div className='flex gap-5 items-center justify-center p-1'>
                <label className='text-lg font-semibold'>Transaction Date :</label>
                <input
                    type="text"
                    name="transactionDate"
                    value={editedTransaction.transactionDate}
                    onChange={handleFieldChange}
                    className='p-2 bg-gray-300 rounded'
                />
            </div>
            <div className='flex gap-5 items-center justify-center p-1'>
                <label className='text-lg font-semibold'>Invoice Number :</label>
                <input
                    type="text"
                    name="invoiceNumber"
                    value={editedTransaction.invoiceNumber}
                    onChange={handleFieldChange}
                    className='p-2 bg-gray-300 rounded'
                    disabled
                />
            </div>
            <div className='flex gap-5 items-center justify-center ml-28 p-1'>
                <label className='text-lg font-semibold'>Payer Name :</label>
                <input
                    type="text"
                    name="payer"
                    value={editedTransaction.payer.name}
                    onChange={handleFieldChange}
                    className='p-2 bg-gray-300 rounded'
                />
                <CountryFlags countryCode={editedTransaction.payer.country} />
            </div>
            <div className='flex gap-5 items-center justify-center ml-28 p-1'>
                <label className='text-lg font-semibold'>Payee Name :</label>
                <input
                    type="text"
                    name="payee"
                    value={editedTransaction.payee.name}
                    onChange={handleFieldChange}
                    className='p-2 bg-gray-300 rounded'
                />
                <CountryFlags countryCode={editedTransaction.payee.country} />
            </div>
            <div className='flex gap-5 items-center justify-center ml-16 p-1'>
                <label className='text-lg font-semibold'>Amount :</label>
                <input
                    type="text"
                    name="amount"
                    value={editedTransaction.amount}
                    onChange={handleFieldChange}
                    className='p-2 bg-gray-300 rounded'
                />
            </div>
            <div className='flex gap-5 items-center justify-center '>
                <label className='text-lg font-semibold'>USD Equivalent :</label>
                <input
                    type="text"
                    name="usdEquivalent"
                    value={editedTransaction.usdEquivalent}
                    onChange={handleFieldChange}
                    className='p-2 bg-gray-300 rounded'
                />
            </div>
            <div className='flex gap-5 items-center justify-center ml-20 p-1'>
                <label className='text-lg font-semibold'>Status :</label>
                <input
                    type="text"
                    name="status"
                    value={editedTransaction.status}
                    onChange={handleFieldChange}
                    className='p-2 bg-gray-300 rounded'
                />
            </div>
            <div className='flex gap-8 items-center justify-center'>
                <button onClick={handleSave} className='bg-green-500 px-6 py-3 text-lg font-medium rounded-md mt-5 hover:bg-green-400'>Save</button>
                <button onClick={onCancel} className='bg-red-500 px-6 py-3 text-lg font-medium rounded-md mt-5 hover:bg-red-400'>Cancel</button>
            </div>
        </div>
    );
}

export default EditTransactionForm;
