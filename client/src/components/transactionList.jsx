import { useContext,useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";


const TransactionList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext)

    useEffect(()=>{
        getTransactions()
    },[])
    return (<>
        <h2>Transaction History</h2>
        <ul className="list">
            {transactions.map((x)=>(
                <Transaction key={x.id} props={x}/>
            ))}
        </ul>
    </>);
}

export default TransactionList;