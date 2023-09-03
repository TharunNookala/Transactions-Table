import { createSlice } from '@reduxjs/toolkit';
import transactionsData from '../assets/fakeData.json'

const initialState = {
    transactions: [...transactionsData],
    updatedTransactions: [],
}

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        updateTransaction(state, action) {
            const { id, updatedTransaction } = action.payload;
            const index = state.transactions.findIndex(transaction => transaction.invoiceNumber === id);
            console.log("index", index)
            if (index !== -1) {
                state.transactions[index] = { ...state.transactions[index], ...updatedTransaction };
                const updatedIndex = state.updatedTransactions.findIndex(transaction => transaction.invoiceNumber === id);
                if (updatedIndex !== -1) {
                    state.updatedTransactions[updatedIndex] = { ...state.updatedTransactions[updatedIndex], ...updatedTransaction };
                } else {
                    state.updatedTransactions.push({ ...state.transactions[index], ...updatedTransaction });
                }
            }
        }
    }
})

export const { updateTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;