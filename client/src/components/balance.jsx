import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(x=>x.amount)
    const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2)
    return ( <>
        <h4 style={{textAlign:"center"}}>Your Balance: ₹{total}</h4>
    </> );
}
 
export default Balance;