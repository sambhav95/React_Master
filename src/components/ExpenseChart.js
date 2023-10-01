import Chart from './Chart/Chart'
import ContextData from '../store/context'

const ExpenseChart = (props) =>{
    const ChartData = [
        {label:"Jan",value:0},
        {label:"Feb",value:0},
        {label:"Mar",value:0},
        {label:"Apr",value:0},
        {label:"May",value:0},
        {label:"Jun",value:0},
        {label:"Jul",value:0},
        {label:"Aug",value:0},
        {label:"Sep",value:0},
        {label:"Oct",value:0},
        {label:"Nov",value:0},
        {label:"Dec",value:0},
]
    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();
        ChartData[expenseMonth].value += expense.amount
    }
    return (
        <ContextData.Consumer>
            {(ele)=>{
                
                return (<div>
                    <h1 style={{color:"white"}}>{ele}</h1>
                    <Chart dataPoints={ChartData}/>
                </div> )
            }}
        </ContextData.Consumer>
        )
}

export default ExpenseChart