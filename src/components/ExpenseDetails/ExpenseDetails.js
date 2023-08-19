import './ExpenseDetails.css'
import { useState   } from 'react'
function ExpenseItem(props){
//     const [title,setTitle]= useState(props.title);

// function changeTitle(){
//     setTitle('New Title')
//     }
    const month = props.date.toLocaleString('en-US',{month:'long'})
    const day = props.date.toLocaleString('en-US',{day:'2-digit'})
    const year = props.date.getFullYear()
    return (
        <div className='expense-item'>
            
            <div className='expense-item__date'>
               <div className='expense-date__month'>{month}</div>
               <div className='expense-date__day'>{day}</div>
               <div className='expense-date__year'>{year}</div>
            </div>
            <div className='expense-item__description'>
                <h2>
                    {props.title}
                </h2>
                <div className='expense-item__price'>${props.amount}</div>
                {/* <div>
                    <button className='title-button' onClick={changeTitle}>Change Title</button>
                </div> */}
            </div>

        </div>
    )
}

export default ExpenseItem