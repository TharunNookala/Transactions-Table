import React, { useState } from 'react';
import { PiArrowsDownUp } from 'react-icons/pi'
import Status from '../Status/Status';
import UserNameCard from '../UserNameCard/UserNameCard';
import { Link } from 'react-router-dom';
import ActionButton from '../ActionButton/ActionButton';
import { useSelector } from 'react-redux';

const TransactionTable = () => {
    const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });
    const transactions = useSelector(state => state.transactions);
    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedTransactions = [...transactions].sort((a, b) => {
        if (sortConfig.direction === 'asc') {
            return a[sortConfig.key] < b[sortConfig.key] ? -1 : 1;
        } else {
            return a[sortConfig.key] > b[sortConfig.key] ? -1 : 1;
        }
    });

    return (
        <table className="w-[90%] text-center">
            <thead className='table-auto w-full border-2'>
                <tr className='bg-slate-200 w-full'>
                    <th onClick={() => handleSort('transactionDate')} className='py-4'>
                        Transaction Date <button className="ml-1"><PiArrowsDownUp /></button>
                    </th>
                    <th onClick={() => handleSort('invoiceNumber')} className='py-4'>
                        Invoice Number <button className="ml-1"><PiArrowsDownUp /></button>
                    </th>
                    <th onClick={() => handleSort('invoiceNumber')} className='py-4'>
                        Payer <button className="ml-1"><PiArrowsDownUp /></button>
                    </th>
                    <th onClick={() => handleSort('invoiceNumber')} className='py-4'>
                        Payee <button className="ml-1"><PiArrowsDownUp /></button>
                    </th>
                    <th onClick={() => handleSort('invoiceNumber')} className='py-4'>
                        Amount <button className="ml-1"><PiArrowsDownUp /></button>
                    </th>
                    <th onClick={() => handleSort('invoiceNumber')} className='py-4'>
                        USD Equivalent <button className="ml-1"><PiArrowsDownUp /></button>
                    </th>
                    <th onClick={() => handleSort('invoiceNumber')} className='py-4'>
                        Status <button className="ml-1"><PiArrowsDownUp /></button>

                    </th>
                    <th>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody className='p-2 border-2 text-center'>
                {sortedTransactions.map((transaction, index) => (
                    <tr key={index} className='border-b'>
                        <td className='py-2 '>{transaction.transactionDate}</td>
                        <td className='py-2 text-blue-500 font-medium underline'>
                            <Link to={`/${transaction.invoiceNumber}`}>
                                {transaction.invoiceNumber}
                            </Link>
                        </td>
                        <td className='text-center'>
                            {/* <US title="United States" className="w-6 h-6" /> {transaction.payer.name} */}

                            <UserNameCard person={transaction.payer} />
                        </td>
                        <td className='text-center '>
                            {/* <US title="United States" className="w-6 h-6" /> {transaction.payee.name} */}
                            <UserNameCard person={transaction.payee} />
                        </td>
                        <td className='py-2 '>₹ {transaction.amount}</td>
                        <td className='py-2 '>{transaction.usdEquivalent}</td>
                        <td className='py-2 '><Status status={transaction.status} /></td>
                        <td className='py-2 relative'><ActionButton id={transaction.invoiceNumber} /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionTable;