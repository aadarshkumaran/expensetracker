import { useState,useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
    let [text,setText] = useState('')
    let [amount,setAmount] = useState(0)
    const {addTransaction} = useContext(GlobalContext)
    const onSubmit = (e) => {
        e.preventDefault()
        const newTransaction = {
            id: Math.floor(Math.random()*100000000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
    }
    return ( <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter Text..."/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter Amount..."/>
            </div>
            {/* <div className="form-control">
                <label htmlFor="income-expense">Income/Expense <br />(negative - expense, positive - income)</label>
                <select name="income/expense">
                    <option value="+">Income</option>
                    <option value="-">Expense</option>
                </select>
            </div> */}
            <button className="btn">Add Transaction</button>
        </form>
    </> );
}
 
export default AddTransaction;