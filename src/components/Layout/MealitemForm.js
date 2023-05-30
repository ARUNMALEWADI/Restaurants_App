import React, { useRef ,useState} from 'react'
import classes from './MealitemForm.module.css'
import Input from './Input'
function MealitemForm(props) {
    const amountInputRef=useRef()
    const [Amountisvalid,SetAmountisvalid]=useState(true);
    
    const submitHandler=(event)=>{
         event.preventDefault();
        
         const enteredAmount=amountInputRef.current.value;
         const enteredAmountNumber=+enteredAmount
         if(enteredAmount.trim().length===0|| enteredAmountNumber<1||enteredAmountNumber>5)
            {
                SetAmountisvalid(false);
                return;
            }
            props.onAddToCart(enteredAmountNumber)
    }
return <form className={classes.form} onSubmit={submitHandler}>
 <Input 
 ref={amountInputRef}
 label="Amount"
   input={{id:'amount',type:'number',min:'1',max:'5',step:'1',defaultValue: '1'}}></Input>
    <button>+Add</button>
    {
        !Amountisvalid&&<p>Please Enter valid amount (1-5).</p>
    }

</form>
}
export default MealitemForm