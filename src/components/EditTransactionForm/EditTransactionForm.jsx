import { useState, useMemo } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { useDispatch } from 'react-redux';
import { updateTransaction } from '../../store/transactionsSlice';

function EditTransactionForm({ transaction, onSave, onCancel }) {
    const dispatch = useDispatch();
    const [editedTransaction, setEditedTransaction] = useState(transaction);
    const [payerName, setPayerName] = useState(transaction.payer.name)
    const [payeeName, setPayeeName] = useState(transaction.payee.name)
    const [payerCountryCode, setPayerCountryCode] = useState(transaction.payer.country)
    const [payeeCountryCode, setPayeeCountryCode] = useState(transaction.payee.country)
    const options = useMemo(() => countryList().getData(), [])
    const payerCountryHandler = value => {
        // console.log(value)
        setPayerCountryCode(value);
        setEditedTransaction(prevTransaction => ({
            ...prevTransaction,
            payer: {
                ...prevTransaction.payer,
                country: value.value
            }
        }));
    }
    const payeeCountryHandler = value => {
        setPayeeCountryCode(value);
        setEditedTransaction(prevTransaction => ({
            ...prevTransaction,
            payee: {
                ...prevTransaction.payee,
                country: value.value
            }
        }));
    }

    const handlePayerNameChange = e => {
        setPayerName(e.target.value)
        setEditedTransaction((prevTransaction) => ({
            ...prevTransaction,
            payer: {
                ...prevTransaction.payer,
                name: e.target.value,
            },
        }));
    }
    const handlePayeeNameChange = e => {
        setPayeeName(e.target.value)
        setEditedTransaction((prevTransaction) => ({
            ...prevTransaction,
            payee: {
                ...prevTransaction.payee,
                name: e.target.value,
            },
        }));
    }
    const handleFieldChange = event => {
        const { name, value } = event.target;
        setEditedTransaction((prevTransaction) => ({
            ...prevTransaction,
            [name]: value,
        }));
    };

    const statusOptions = ['first', 'second', 'third'];

    const handleStatusChange = (status) => {
        setEditedTransaction((prevTransaction) => ({
            ...prevTransaction,
            status,
        }));
    };

    const handleDateChange = (event) => {
        const { name, value } = event.target;
        setEditedTransaction((prevTransaction) => ({
            ...prevTransaction,
            [name]: value,
        }));
    };

    const handleSave = () => {
        onSave(editedTransaction);
        dispatch(updateTransaction({ id: editedTransaction.invoiceNumber, updatedTransaction: editedTransaction }));
        // console.log(editedTransaction)
    };

    return (
        <div className='border-2 h-screen md:h-full p-4 bg-gray-100 md:w-1/2 rounded-md flex-flex-col space-y-8 items-center text-center'>
            <h3 className='text-xl font-bold text-center'>Edit Transaction</h3>
            <div className='flex gap-5 items-center justify-center p-1'>
                <label className='text-lg font-semibold'>Transaction Date :</label>
                <input
                    type='date'
                    name='transactionDate'
                    value={editedTransaction.transactionDate}
                    onChange={handleDateChange}
                    className='p-2 bg-gray-300 rounded'
                />
            </div>
            <div className='flex gap-5 items-center justify-center p-1'>
                <label className='md:text-lg font-semibold'>Invoice Number :</label>
                <input
                    type="text"
                    name="invoiceNumber"
                    value={editedTransaction.invoiceNumber}
                    onChange={handleFieldChange}
                    className='p-2 bg-gray-300 rounded cursor-not-allowed'
                    disabled
                />
            </div>
            <div className='flex gap-5 items-center justify-center md:ml-9 p-1'>
                <label className='md:text-lg font-semibold'>Payer Name :</label>
                <input
                    type="text"
                    name="payer"
                    value={payerName}
                    onChange={handlePayerNameChange}
                    className='p-2 bg-gray-300 rounded'
                />
            </div>
            <div className='flex gap-5 items-center justify-center md:ml-10 p-1'>
                <label className='md:text-lg font-semibold'>Payer Country :</label>
                <Select options={options} value={payerCountryCode} onChange={payerCountryHandler} className='md:w-1/4' />
            </div>
            <div className='flex gap-5 items-center justify-center md:ml-10 p-1'>
                <label className='md:text-lg font-semibold'>Payee Name :</label>
                <input
                    type="text"
                    name="payee"
                    value={payeeName}
                    onChange={handlePayeeNameChange}
                    className='p-2 bg-gray-300 rounded'
                />
            </div>
            <div className='flex gap-5 items-center justify-center md:ml-10 p-1'>
                <label className='md:text-lg font-semibold'>Payer Country :</label>
                <Select options={options} value={payeeCountryCode} onChange={payeeCountryHandler} className='md:w-1/4' />
            </div>
            <div className='flex gap-5 items-center justify-center md:ml-16 p-1'>
                <label className='md:text-lg font-semibold'>Amount :</label>
                <input
                    type="text"
                    name="amount"
                    value={editedTransaction.amount}
                    onChange={handleFieldChange}
                    className='p-2 bg-gray-300 rounded'
                />
            </div>
            <div className='flex gap-5 items-center justify-center '>
                <label className='md:text-lg font-semibold'>USD Equivalent :</label>
                <input
                    type="text"
                    name="usdEquivalent"
                    value={editedTransaction.usdEquivalent}
                    onChange={handleFieldChange}
                    className='p-2 bg-gray-300 rounded'
                />
            </div>
            <div className='flex gap-5 items-center justify-center md:ml-20 p-1'>
                <label className='md:text-lg font-semibold'>Status :</label>
                <ul className='flex items-center justify-center gap-3'>
                    {statusOptions.map((item) => {
                        return (
                            <li key={item} className='flex items-center justify-between gap-1 text-lg py-1 px-2'>
                                <input
                                    type="checkbox"
                                    name="status"
                                    value={item}
                                    checked={editedTransaction.status.includes(item)}
                                    onChange={() => {
                                        const updatedStatus = editedTransaction.status.includes(item)
                                            ? editedTransaction.status.filter((s) => s !== item)
                                            : [...editedTransaction.status, item];
                                        handleStatusChange(updatedStatus);
                                    }
                                    }
                                />
                                <label>{item}</label>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
            <div className='flex gap-8 pb-2 items-center justify-center'>
                <button onClick={handleSave} className='bg-green-500 px-6 py-3 text-lg font-medium rounded-md mt-5 hover:bg-green-400'>Save</button>
                <button onClick={onCancel} className='bg-red-500 px-6 py-3 text-lg font-medium rounded-md mt-5 hover:bg-red-400'>Cancel</button>
            </div>
        </div >
    );
}

export default EditTransactionForm;
