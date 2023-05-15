import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

//Initial State

const initialState = {
    //demo transaction
    // transactions: [
    //     {
    //         id: 1, text: 'Flower', amount: -20
    //     },
    //     {
    //         id: 2, text: 'Salary', amount: 300
    //     },
    //     {
    //         id: 3, text: 'Book', amount: -10
    //     },
    //     {
    //         id: 4, text: 'Camera', amount: 150
    //     }
    // ]
    transactions: [],
    error: null,
    loading: true
}

//CreateContext for passing transaction

export const GlobalContext = createContext(initialState)

//provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions
    async function getTransactions() {
        try {
            const res = await axios.get('/api/v1/transactions')

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            })

        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })
        }
    }

    //delete function
    async function deleteTransaction(id) {

        try {
            await axios.delete(`/api/v1/transactions/${id}`)
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })
        }
    }
    //add function
    async function addTransaction(transaction) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/v1/transactions/', transaction, config)
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            })

        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })
        }
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            error: state.error, loading: state.loading,
            getTransactions, deleteTransaction, addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
