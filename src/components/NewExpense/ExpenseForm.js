import './ExpenseForm.css'
import { useState} from 'react'
function ExpenseForm (props){
    /*One way to use state*/
    const [enterTitle,setEnterTitle] = useState('')
    const [enterAmount,setEnterAmount] = useState('')
    const [enterDate,setEnterDate] = useState('')

    /*Another way to use state*/
    // const [userInput,setUserData] = useState({
    //     enterTitle:'',
    //     enterAmount:'',
    //     enterDate:''
    // })

    const titleChangeHandler =(event) =>{
        setEnterTitle(event.target.value)
        // setUserData({
        //     ...userInput,
        //     enterTitle: event.target.value
        // })
        // setUserData((prevState)=>{
        //     return {...prevState,enterTitle: event.target.value}
        // })
    }
    const AmountChangeHandler =(event) =>{
        setEnterAmount(event.target.value)

        // setUserData({
        //     ...userInput,
        //     enterAmount: event.target.value
        // })

        // setUserData((prevState)=>{
        //     return {...prevState,enterAmount: event.target.value}
        // })
    }
    const DateChangeHandler =(event) =>{
        setEnterDate(event.target.value) // update individuals values
     
        // setUserData({
        //     ...userInput,
        //     enterDate: event.target.value // not perferable because sometime the state value is not actual previous value
        // })

        // setUserData((prevState)=>{
        //     return {...prevState,enterDate: event.target.value} // perfered because react schedule state updates and it guarantee to get you previous state only
        // })
    }

    // const inputChangeHandler = (identifier,value) =>{
    //     if(identifier === 'title'){
    //         setEnterTitle(value)
    //     } and so ..on
        
    //     // in dom
    //     use like this- onChange={(event)=> inputChangeHandler('title',event.target.value)}
    // }
    const submitHandler = (event) =>{
        event.preventDefault();
        const expensedata ={
            title: enterTitle,
            amount: +enterAmount,
            date: new Date(enterDate)
        }
        props.saveData(expensedata)
        setEnterTitle('')
        setEnterAmount('')
        setEnterDate('')
    }
return(
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' value={enterTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' value={enterAmount}onChange={AmountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
            <label>Date</label>
            <input type='date'value={enterDate} min="2019-01-01" onChange={DateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit" onClick={props.cancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
    </form>
)
}

export default ExpenseForm