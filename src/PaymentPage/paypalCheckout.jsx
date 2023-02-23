import React from 'react'
import {useState} from 'react'
import { PayPalButtons, PayPalScriptProvider  } from '@paypal/react-paypal-js';

const paypalCheckout = ( props ) => {
    const product = {props}
    const [LoggedIn, setLoggedIn] = useState(false);
    const handleApprove = (orderId) =>{
        if(orderId !== null)
        setLoggedIn(true);
    }
    if(LoggedIn) alert('successful log in')
  return (
    <>
        <PayPalButtons style={{
            tagline : false,
            layout: 'horizontal'
        }}
        createOrder={(data, action) => {
            return action.order.create({
                purchase_units: [
                    {
                        description: 'test',
                        amount: {
                            value: 10
                        }
                    }
                ]
            })
        }}
        onApprove = {async (data, action) => {
            const order = await action.order.capture();
            handleApprove(data.orderID);
        }}
        />
    </>
  )
}

export default paypalCheckout