import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'
const NewExpense=(props)=>{
    const [formVisible, setFormVisible] = useState(false)
    function formSetVisible(){
        setFormVisible(true)
    }
    const saveExpense =(enteredexpense)=>{
        const expdata = {
            ...enteredexpense,
            id: Math.random().toString()
        }
        setFormVisible(false)
        props.newData(expdata)
    }
    const cancelfunc =() =>{
        setFormVisible(false)
    }
    return (
        <div className='new-expense'>
            {!formVisible && <button onClick={formSetVisible}>Add New expense</button>}
            {formVisible && <ExpenseForm saveData={saveExpense}
            cancel = {cancelfunc}/>}
        </div>
    )
}

export default NewExpense