import React,{useState} from 'react';
import './Payment.css';
import PayPal from '../../images/paypal.png';
import api from '../../services/api';
const Payment = () => {
    const [isActive,setActiveStatus] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const handlePaymentMethod = async() =>{
        if(!isActive){
            return setErrorMessage("SelectPaymentMethod");
        }
        const response = await api.get("/payment");
    }
    return (
        <section>
            <h3>Payment</h3>
            <p>Choose payment method below</p>
            <div className="payment__cards">
                <div className={`payment-card payment__paypal ${isActive && "payment-card--selected"}`} onClick={()=>setActiveStatus(!isActive)}>
                    <img className="payment-card__logo" src={PayPal} alt="PAYPAL"></img>
                    <p>PAY WITH PAYPAL</p>
                    
                </div>
            </div>
            <button className="btn primary" onClick={handlePaymentMethod}>PROCEED</button>
            {errorMessage && <p>{errorMessage}</p>}
        </section>
    )
}

export default Payment
