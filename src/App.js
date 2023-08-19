import logo from './logo.svg';
import './App.css';
import ExpenseDetails from './components/ExpenseDetails/ExpenseDetails'
import Card from './components/Card/Card'
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from './components/ExpenseFilter/Expensefilter'
import { useState } from 'react';
import ExpenseChart from './components/ExpenseChart'
function App() {
  const expenseData =[{id:'1',title:'Car Insurance', amount:294, date: new Date(2019,2,28)},
  {id:'2',title:'New Tv', amount:294, date: new Date(2021,2,28)},
  {id:'3',title:'Clothing', amount:294, date: new Date(2023,2,28)},
  {id:'4',title:'Mobile', amount:294, date: new Date(2022,1,28)}]

  const [dataexpense, newExpenseData] = useState(expenseData)
  const addData=(data)=>{
    newExpenseData(prevExpense =>{
      return [data,...prevExpense]})
  }
  const filterData =(selectedDate)=>{
    const filterdata = expenseData.filter(ele=>ele.date.getFullYear() == selectedDate)
    newExpenseData(filterdata)
  }
  const resetData =(originalData)=>{
    newExpenseData(originalData)
  }
  let expenseContent = <p>NoExpense found.</p>
  if(dataexpense.length >0){
    expenseContent = dataexpense.map(exp=> <ExpenseDetails key={exp.id} title= {exp.title}
      amount={exp.amount} date={exp.date}/>)
  }
  return (
    <div className="App">
      {/* <div>
      <Expense/>
      </div> */}
      <NewExpense newData={addData}/>
      <Card>
        <ExpenseChart expenses={dataexpense}/>
        <ExpenseFilter expensesData= {expenseData}
        filter={filterData} reset={resetData}/>
        {/* {dataexpense.map(exp=> <ExpenseDetails key={exp.id} title= {exp.title}
        amount={exp.amount} date={exp.date}/>)} */}
        {expenseContent}
      {/* <ExpenseDetails expensesData= {expenseData} title={expenseData[0].title} 
      /> */}
      </Card>
    </div>
  );
}

export default App;
