import { createSlice } from '@reduxjs/toolkit';
import transactions from '../assets/fakeData.json'

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: transactions,
    reducers: {
        updateTransaction(state, action) {
            const { id, updatedTransaction } = action.payload;
            const index = state.findIndex(transaction => transaction.invoiceNumber === id);
            if (index !== -1) {
                state[index] = { ...state[index], ...updatedTransaction };
            }
        }
    }
})

export const { updateTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;