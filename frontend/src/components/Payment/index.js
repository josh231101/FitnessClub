import React,{useState} from 'react';
import './Payment.css';
import Paypal from '../Paypal';
import { useEffect } from 'react';
const Payment = ({paymentValue}) => {
    return (
        <section className="payment">
            <h3>Payment</h3>
            
            <p>$ {paymentValue}</p>
            <Paypal paymentValue={paymentValue}/>
        </section>
    )
}

export default Payment
