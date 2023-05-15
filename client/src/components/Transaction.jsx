import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ props }) => {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = props.amount < 0 ? '-' : '+'
    return (
        <li className={props.amount < 0 ? 'minus' : 'plus'}>
            {props.text} <span>{sign}₹{Math.abs(props.amount)}</span>
            <button onClick={()=>deleteTransaction(props._id)} className="delete-btn">x</button>
        </li>
    );
}
