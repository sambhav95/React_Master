import { useState } from 'react';
import './Expensefilter.css';

const ExpensesFilter = (props) => {

      const [filterYear, setFilterYear]  = useState('2020')
    function selectedValue(event){
        setFilterYear(event.target.value)
            props.filter(event.target.value)
    }
    function dataReset(){
      props.reset(props.expensesData)
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <div>
        <button className="reset-button" onClick={dataReset}>Reset</button>
        <select value={filterYear} onChange={selectedValue}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2023'>2023</option>
        </select>
        </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;

