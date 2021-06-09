import {React,useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [year, setYear] = useState('2020');
  const getYear = (selectedYear)=>{
  console.log(selectedYear);
  setYear(selectedYear);
  props.filterExpences(selectedYear);
  }
  return (
    <div>
      
    
    <Card className="expenses">
    <ExpensesFilter getYear={getYear}></ExpensesFilter>
      {
      props.items.map(expense=>{
        return(
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      )
      })}
    </Card>
    </div>
  );
}

export default Expenses;
