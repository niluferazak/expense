
import React,{useState} from "react";
import NewExpense from "./components/newexpenses/NewExpense";
import ExpenseList from "./components/expenses/ExpenseList";







const App=()=> {

 const [expenses,setExpenses]=useState("");
  

      const addExpenseHandler=(expense)=>{

        setExpenses((prevExpenses)=>{
          return [expense,...prevExpenses];
        });

      };
    
return(
  <div>
  <NewExpense onAddExpense= {addExpenseHandler}/>
  <ExpenseList items={expenses}/>
 
  </div>
  
  
);

}

export default App;
