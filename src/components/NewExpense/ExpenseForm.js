import './ExpenseForm.css'
import { useState} from 'react'
import { useRef } from 'react'
function ExpenseForm (props){
    /*Ref Use*/
    const titleInputRef = useRef()
    const amtInputRef = useRef()
    const dateInputRef = useRef()

    /*One way to use state*/
    // const [enterTitle,setEnterTitle] = useState('')
    // const [enterAmount,setEnterAmount] = useState('')
    // const [enterDate,setEnterDate] = useState('')
    const [formError, setFormError] = useState({})
    /*Another way to use state*/
    // const [userInput,setUserData] = useState({
    //     enterTitle:'',
    //     enterAmount:'',
    //     enterDate:''
    // })

    // const titleChangeHandler =(event) =>{
    //     if(event.target.value.trim() !== ""){
    //     }
    //     setEnterTitle(event.target.value)
    //     // setUserData({
    //     //     ...userInput,
    //     //     enterTitle: event.target.value
    //     // })
    //     // setUserData((prevState)=>{
    //     //     return {...prevState,enterTitle: event.target.value}
    //     // })
    // }
    // const AmountChangeHandler =(event) =>{
    //     if(event.target.value.trim() !== ""){
           
    //     }
    //     setEnterAmount(event.target.value)

    //     // setUserData({
    //     //     ...userInput,
    //     //     enterAmount: event.target.value
    //     // })

    //     // setUserData((prevState)=>{
    //     //     return {...prevState,enterAmount: event.target.value}
    //     // })
    // }
    // const DateChangeHandler =(event) =>{
    //     if(event.target.value.trim() !== ""){
            
    //     }
    //     setEnterDate(event.target.value) // update individuals values
     
    //     // setUserData({
    //     //     ...userInput,
    //     //     enterDate: event.target.value // not perferable because sometime the state value is not actual previous value
    //     // })

    //     // setUserData((prevState)=>{
    //     //     return {...prevState,enterDate: event.target.value} // perfered because react schedule state updates and it guarantee to get you previous state only
    //     // })
    // }

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
            title: titleInputRef.current.value,
            amount: +amtInputRef.current.value,
            date: new Date(dateInputRef.current.value)
        }

        const errorValue = validate(expensedata)
        if(JSON.stringify(errorValue) !== '{}'){
            setFormError(errorValue)
            return
        } else{
            props.saveData(expensedata)
            titleInputRef.current.value = '';
            amtInputRef.current.value = ''
            dateInputRef.current.value = ''

            // setEnterTitle('')
            // setEnterAmount('')
            // setEnterDate('')
        }

    }

    const validate =(values) =>{
        const error ={};
        if(values.title === ''){
            error.title = 'Title Required'
        }

        if(values.amount === 0){
            error.amount = 'Amount Required'
        }
        if(isNaN(values.date)){
            error.date = 'Date Required'
        }
        return error
    }
return(
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
            <label>Title</label>
            <input  style ={{borderColor : formError.title ? 'red' : '#ccc'}}
            ref={titleInputRef}/>
            <p className="erro-msg">{formError.title}</p>
            </div>
            <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' style ={{borderColor : formError.amount ? 'red' : '#ccc'}}
            ref={amtInputRef}/>
            <p className="erro-msg">{formError.amount}</p>
            </div>
            <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' style ={{borderColor : formError.date ? 'red' : '#ccc'}}  min="2019-01-01"
            ref={dateInputRef}/>
            <p className="erro-msg">{formError.date}</p>
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