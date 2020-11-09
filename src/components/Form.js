import React, {useState} from 'react';

const Form = () => {
    const [priceToPay, setPriceToPay] = useState(0);
    const [waiterTip, setWaiterTip]=useState(0.05);
    const submitHandler = (e) => {
        e.preventDefault();
    }
    const priceToPayHandler = (e) => {
        setPriceToPay(parseFloat(e.target.value));
    }
    const setTipValueHandler = (e) =>{
        setWaiterTip(parseFloat(e.target.value));
    }
    const calculateBill = () => {
        let toPay =  priceToPay+priceToPay*waiterTip;
        console.log(`Do zapłaty:`,toPay.toFixed(2));
    }
    return (
            <form onSubmit={submitHandler} action="">
                <input onChange={priceToPayHandler} type="number" step="0.01"/>
                <select onChange={setTipValueHandler}>
                    <option value={0.05}>5%</option>
                    <option value={0.1}>10%</option>
                    <option value={0.15}>15%</option>
                    <option value={0.20}>20%</option>
                </select>
                <button type="submit" onClick={calculateBill}>Przelicz</button>
            </form>
     );
}

export default Form;