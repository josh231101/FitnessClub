import React,{ useRef,useEffect } from 'react'

const Paypal = () => {
    const paypal = useRef();
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data,actions,err)=>{
                return actions.order.create({
                    intent : "CAPTURE",
                    purchase_units:[
                        {
                            description : "SUBSCIRPTION TO EVENT",
                            amount: {
                                currency_code :"USD",
                                value : 1
                            }
                        }
                    ]
                })
            },
            onApprove : async(data,actions)=>{
                const order = await actions.order.capture();
                console.log("++ ORDER ",order);
            },
            onError : (err)=>{
                console.log("++err ",err);
            }
        }).render(paypal.current);
    }, [])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}

export default Paypal
