import React,{useState} from 'react';
import './Payment.css';
import Paypal from '../Paypal';
const Payment = ({paymentValue}) => {
    return (
        <section className="payment">
            <h3>Payment</h3>
            <p>{paymentValue}</p>
            <Paypal/>
        </section>
    )
}

export default Payment
