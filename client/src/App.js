import AddTransaction from './components/addTransaction';
import './App.css';
import Balance from './components/balance';
import Header from './components/header';
import IncomeExpenses from './components/incomeexpenses';
import TransactionList from './components/transactionList';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <hr />
      <>
        <Balance />
        <IncomeExpenses />
        <TransactionList/>
        <AddTransaction/>
      </>
    </GlobalProvider>
  );
}

export default App;
