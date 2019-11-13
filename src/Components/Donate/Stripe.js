import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import {withRouter} from 'react-router-dom';

import './stripe.css';

function Stripe(props){
    const [product] = React.useState({
        name: 'donation',
        price: 100.00,
        description: 'help get these animals adopted!'
    });
    
    const handleBack = () => {
        props.history.push('/donate')
    }

    async function handleToken(token, addresses){
        console.log({token, addresses})
        const response = await axios.post('/stripe/checkout', {
            token,
            product
        });
        const { status } = response.data
        if (status === 'success'){
        } 
        alert('Success! check email for details')
    }
    return(
        <div className="container">
          
            <div className="product">
                <img src="https://www.animalleague.org/wp-content/uploads/2017/11/shelter-logo-utah-animal-adoption-112117.jpg" alt="UAAC logo"/>
                <h1>Donate Today!</h1>
                <h3>help us get these animals adopted!</h3>
            <StripeCheckout 
            className='stripeCheckout'
            style={{marginBottom: 50}}
            stripeKey='pk_test_zlEeLU8e9DLXpTwZlX9qbDjr00q6MWwD74'
            token={handleToken}
            billingAddress
            amount={product.price * 100}
            name={product.name}
            />
            <button id='backbtn' onClick={handleBack}>Back</button>
            </div>
        </div>
    )
}
export default withRouter(Stripe);