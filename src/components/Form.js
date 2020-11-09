import React, {useState} from 'react';

import Bill from './Bill.js';

const Form = () => {
    const VAT = 0.23;
    const [showBill, setShowBill]=useState(true);
    const [priceToPay, setPriceToPay] = useState(0);
    const [waiterTip, setWaiterTip]=useState(0.05);
    const [toPay, setToPay]=useState(0);

    const submitHandler = (e) => {
        e.preventDefault();
        setShowBill(!showBill);
    }
    const priceToPayHandler = (e) => {
        setPriceToPay(parseFloat(e.target.value));
    }
    const setTipValueHandler = (e) =>{
        setWaiterTip(parseFloat(e.target.value));
    }
    const calculateBill = () => {
        setToPay(priceToPay+priceToPay*VAT+priceToPay*waiterTip);
    }

    return (
        <>
           {showBill ? <form onSubmit={submitHandler} action="">
                <input onChange={priceToPayHandler} type="number" step="0.01"/>
                <select onChange={setTipValueHandler}>
                    <option value={0.05}>5%</option>
                    <option value={0.1}>10%</option>
                    <option value={0.15}>15%</option>
                    <option value={0.20}>20%</option>
                </select>
                <button type="submit" onClick={calculateBill}>Przelicz</button>
            </form>
            : <Bill toPay={toPay}/>}
        </>
     );
}

export default Form;